"use client";

import React, { useEffect, useRef, useCallback, useState } from "react";

interface HeroCanvasScrubberProps {
  totalFrames?: number;
  onLoaded?: () => void;
}

// Frame loading lifecycle states
const STATUS_UNREQUESTED = 0;
const STATUS_LOADING = 1;
const STATUS_READY = 2;
const STATUS_ERROR = 3;

export const HeroCanvasScrubber = React.forwardRef<
  { drawFrame: (frame: number) => void },
  HeroCanvasScrubberProps
>(({ totalFrames = 240, onLoaded }, ref) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const initialImgRef = useRef<HTMLImageElement | null>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const frameStatusRef = useRef<Uint8Array>(new Uint8Array(totalFrames));
  const queueRef = useRef<number[]>([]);
  const activeCountRef = useRef(0);
  const isCancelledRef = useRef(false);
  const isLoadedCalledRef = useRef(false);

  const lastRequestedFrame = useRef(0);
  const lastRenderedActualIndex = useRef(-1);
  const [isCanvasActive, setIsCanvasActive] = useState(false);

  // Helper to format frame filename: ezgif-frame-001.jpg
  const getFrameUrl = useCallback((index: number) => {
    const frameNum = String(index + 1).padStart(3, "0");
    return `/assets/frames/ezgif-frame-${frameNum}.jpg`;
  }, []);

  // Forward ref for drawFrame so async decode callbacks can invoke it without stale closures
  const drawFrameRef = useRef<(frameIndex: number) => void>(() => {});

  // Function to render frame onto canvas maintaining cover aspect ratio
  const drawFrame = useCallback(
    (frameIndex: number) => {
      const clamped = Math.max(0, Math.min(totalFrames - 1, Math.round(frameIndex)));
      const prevRequested = lastRequestedFrame.current;
      lastRequestedFrame.current = clamped;

      // JIT Directional Preload on scroll:
      // Preload next 6 frames in scroll direction with high priority
      const delta = clamped - prevRequested;
      if (delta !== 0) {
        const dir = delta > 0 ? 1 : -1;
        for (let step = 1; step <= 6; step++) {
          const target = clamped + step * dir;
          if (target >= 0 && target < totalFrames) {
            requestFrameUrgent(target);
          }
        }
      }

      // Early exit if target hasn't changed AND canvas is already showing the exact frame
      if (clamped === prevRequested && lastRenderedActualIndex.current === clamped) {
        return;
      }

      // Find the best frame to draw:
      // 1. Is the exact target frame ready?
      let bestFrameIndex = -1;
      const targetImg = imagesRef.current[clamped];
      if (targetImg && targetImg.complete && targetImg.naturalWidth > 0) {
        bestFrameIndex = clamped;
      } else {
        // 2. Target not ready: find closest ready frame within search radius (±24)
        for (let offset = 1; offset <= 24; offset++) {
          const prev = clamped - offset;
          if (
            prev >= 0 &&
            imagesRef.current[prev]?.complete &&
            (imagesRef.current[prev]?.naturalWidth || 0) > 0
          ) {
            bestFrameIndex = prev;
            break;
          }
          const next = clamped + offset;
          if (
            next < totalFrames &&
            imagesRef.current[next]?.complete &&
            (imagesRef.current[next]?.naturalWidth || 0) > 0
          ) {
            bestFrameIndex = next;
            break;
          }
        }
      }

      // If no ready frame found yet, or canvas is already showing this exact frame, skip drawing
      if (bestFrameIndex === -1 || lastRenderedActualIndex.current === bestFrameIndex) {
        return;
      }

      const img = imagesRef.current[bestFrameIndex];
      if (!img) return;

      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d", { alpha: false });
      if (!ctx) return;

      const cw = canvas.width;
      const ch = canvas.height;
      const iw = img.naturalWidth;
      const ih = img.naturalHeight;

      if (cw === 0 || ch === 0 || iw === 0 || ih === 0) return;

      // Calculate cover scale
      const scale = Math.max(cw / iw, ch / ih);
      const nw = iw * scale;
      const nh = ih * scale;

      const isMobile = window.innerWidth < 768;
      const offsetX = isMobile ? (cw - nw) * 0.5 : (cw - nw) * 0.48;
      const offsetY = (ch - nh) * 0.5;

      ctx.drawImage(img, offsetX, offsetY, nw, nh);
      lastRenderedActualIndex.current = bestFrameIndex;

      if (!isCanvasActive) {
        setIsCanvasActive(true);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [totalFrames, isCanvasActive]
  );

  drawFrameRef.current = drawFrame;

  // Max concurrent requests (6 for desktop, 4 for mobile)
  const getMaxConcurrency = useCallback(() => {
    if (typeof window !== "undefined") {
      if (
        window.innerWidth < 768 ||
        (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4)
      ) {
        return 4;
      }
    }
    return 6;
  }, []);

  // Worker queue pump
  const pumpQueue = useCallback(() => {
    if (isCancelledRef.current) return;
    const maxConcurrent = getMaxConcurrency();

    while (activeCountRef.current < maxConcurrent && queueRef.current.length > 0) {
      const nextIdx = queueRef.current.shift()!;
      if (frameStatusRef.current[nextIdx] === STATUS_UNREQUESTED) {
        loadFrame(nextIdx, false);
      }
    }
  }, [getMaxConcurrency]);

  // Load a single frame with off-thread image decode
  const loadFrame = useCallback(
    (index: number, highPriority = false) => {
      if (index < 0 || index >= totalFrames) return;
      if (frameStatusRef.current[index] !== STATUS_UNREQUESTED) return;

      frameStatusRef.current[index] = STATUS_LOADING;
      activeCountRef.current++;

      const img = new Image();
      if (highPriority && "fetchPriority" in img) {
        (img as any).fetchPriority = "high";
      }
      img.src = getFrameUrl(index);

      const onDone = (success: boolean) => {
        if (isCancelledRef.current) return;
        activeCountRef.current = Math.max(0, activeCountRef.current - 1);

        if (success && img.naturalWidth > 0) {
          imagesRef.current[index] = img;
          frameStatusRef.current[index] = STATUS_READY;

          // If user is currently waiting on or near this frame, refresh canvas
          if (Math.abs(lastRequestedFrame.current - index) <= 2) {
            requestAnimationFrame(() => {
              if (!isCancelledRef.current) {
                drawFrameRef.current(lastRequestedFrame.current);
              }
            });
          }
        } else {
          frameStatusRef.current[index] = STATUS_ERROR;
        }

        pumpQueue();
      };

      if (typeof img.decode === "function") {
        img
          .decode()
          .then(() => onDone(true))
          .catch(() => {
            if (img.complete && img.naturalWidth > 0) {
              onDone(true);
            } else {
              img.onload = () => onDone(true);
              img.onerror = () => onDone(false);
            }
          });
      } else {
        (img as HTMLImageElement).onload = () => onDone(true);
        (img as HTMLImageElement).onerror = () => onDone(false);
      }
    },
    [totalFrames, getFrameUrl, pumpQueue]
  );

  // Urgent frame request on scroll: loads immediately or bumps to front of queue
  const requestFrameUrgent = useCallback(
    (index: number) => {
      if (index < 0 || index >= totalFrames) return;
      if (frameStatusRef.current[index] !== STATUS_UNREQUESTED) return;

      const maxConcurrent = getMaxConcurrency();
      if (activeCountRef.current < maxConcurrent + 2) {
        loadFrame(index, true);
      } else {
        // Remove from existing queue position and unshift to very front
        const pos = queueRef.current.indexOf(index);
        if (pos !== -1) {
          queueRef.current.splice(pos, 1);
        }
        queueRef.current.unshift(index);
      }
    },
    [totalFrames, getMaxConcurrency, loadFrame]
  );

  // Expose drawFrame via imperative handle
  React.useImperativeHandle(
    ref,
    () => ({
      drawFrame,
    }),
    [drawFrame]
  );

  // Initialize multi-pass strided preload schedule
  useEffect(() => {
    isCancelledRef.current = false;
    imagesRef.current = new Array(totalFrames).fill(null);
    frameStatusRef.current = new Uint8Array(totalFrames);

    // 1. Hook into DOM initial frame (0)
    const domImg = initialImgRef.current;
    if (domImg && domImg.complete && domImg.naturalWidth > 0) {
      imagesRef.current[0] = domImg;
      frameStatusRef.current[0] = STATUS_READY;
      drawFrame(0);
    } else if (domImg) {
      domImg.onload = () => {
        if (!isCancelledRef.current) {
          imagesRef.current[0] = domImg;
          frameStatusRef.current[0] = STATUS_READY;
          drawFrame(0);
        }
      };
    }

    // 2. Build multi-pass queue
    // Pass 1: Runway (0-12)
    // Pass 2: Keyframe Skeleton (every 8th frame)
    // Pass 3: Mid-step infill (every 4th frame)
    // Pass 4: Half-step infill (every 2nd frame)
    // Pass 5: Complete infill (remaining odd frames)
    const queue: number[] = [];
    const added = new Set<number>();

    const add = (idx: number) => {
      if (idx >= 0 && idx < totalFrames && !added.has(idx)) {
        added.add(idx);
        queue.push(idx);
      }
    };

    // Pass 1: Runway
    for (let i = 0; i <= Math.min(12, totalFrames - 1); i++) add(i);

    // Pass 2: Skeleton Keyframes
    for (let i = 16; i < totalFrames; i += 8) add(i);
    add(totalFrames - 1);

    // Pass 3: Stride 4
    for (let i = 4; i < totalFrames; i += 4) add(i);

    // Pass 4: Stride 2
    for (let i = 2; i < totalFrames; i += 2) add(i);

    // Pass 5: Full Infill
    for (let i = 0; i < totalFrames; i++) add(i);

    queueRef.current = queue;

    // Signal onLoaded once initial runway + skeleton are queued and underway
    if (!isLoadedCalledRef.current) {
      isLoadedCalledRef.current = true;
      if (onLoaded) onLoaded();
    }

    // Kick off worker queue
    pumpQueue();

    return () => {
      isCancelledRef.current = true;
    };
  }, [totalFrames, drawFrame, onLoaded, pumpQueue]);

  // Handle resize and devicePixelRatio
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      const targetW = Math.round(rect.width * dpr);
      const targetH = Math.round(rect.height * dpr);
      if (canvas.width !== targetW || canvas.height !== targetH) {
        canvas.width = targetW;
        canvas.height = targetH;
      }
      lastRenderedActualIndex.current = -1;
      drawFrame(lastRequestedFrame.current);
    };

    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, [drawFrame]);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none select-none">
      {/* 
        Instant First-Paint 3D Visual:
        Directly rendered into HTML so the browser renders Miskat's 3D image
        at First Contentful Paint without waiting for JavaScript execution.
      */}
      <img
        ref={initialImgRef}
        src="/assets/frames/ezgif-frame-001.jpg"
        alt="Miskat Hossain — Creative Direction & Brand Experience"
        fetchPriority="high"
        decoding="async"
        className={`absolute inset-0 w-full h-full object-cover pointer-events-none select-none md:object-[48%_50%] object-center transition-opacity duration-300 ${
          isCanvasActive ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* High-performance hardware-accelerated interactive canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ width: "100%", height: "100%" }}
      />

      {/* Atmospheric vignette and cinematic film gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-black/30 pointer-events-none z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-dark/60 via-transparent to-dark/30 pointer-events-none hidden md:block z-10" />
    </div>
  );
});

HeroCanvasScrubber.displayName = "HeroCanvasScrubber";
