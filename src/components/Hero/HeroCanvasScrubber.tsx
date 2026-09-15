"use client";

import React, { useEffect, useRef, useCallback, useState } from "react";

interface HeroCanvasScrubberProps {
  totalFrames?: number;
  onLoaded?: () => void;
}

export const HeroCanvasScrubber = React.forwardRef<
  { drawFrame: (frame: number) => void },
  HeroCanvasScrubberProps
>(({ totalFrames = 240, onLoaded }, ref) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const initialImgRef = useRef<HTMLImageElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const isLoadedCalledRef = useRef(false);
  const lastDrawnFrame = useRef(-1);
  const lastRequestedFrame = useRef(0);
  const [isCanvasActive, setIsCanvasActive] = useState(false);

  // Helper to format frame filename: ezgif-frame-001.jpg
  const getFrameUrl = (index: number) => {
    const frameNum = String(index + 1).padStart(3, "0");
    return `/assets/frames/ezgif-frame-${frameNum}.jpg`;
  };

  // Helper to request a frame on-demand if not already initiated
  const requestFrame = useCallback((index: number) => {
    if (index < 0 || index >= totalFrames) return;
    if (imagesRef.current[index]) return; // Already requested or loaded

    const img = new Image();
    img.src = getFrameUrl(index);
    img.onload = () => {
      imagesRef.current[index] = img;
    };
    imagesRef.current[index] = img;
  }, [totalFrames]);

  // Function to render frame onto canvas maintaining cover aspect ratio
  const drawFrame = useCallback(
    (frameIndex: number) => {
      const clamped = Math.max(0, Math.min(totalFrames - 1, Math.round(frameIndex)));
      lastRequestedFrame.current = clamped;

      // JIT on-demand preload for nearby frames ahead of scroll
      requestFrame(clamped);
      requestFrame(clamped + 1);
      requestFrame(clamped + 2);
      requestFrame(clamped + 3);

      // Skip redundant canvas redraws if the same frame is already visible
      if (clamped === lastDrawnFrame.current) return;

      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // Find closest loaded frame if current frame is not fully ready
      let img = imagesRef.current[clamped];
      if (!img || !img.complete || img.naturalWidth === 0) {
        for (let offset = 1; offset < totalFrames; offset++) {
          const prev = imagesRef.current[clamped - offset];
          if (prev && prev.complete && prev.naturalWidth > 0) {
            img = prev;
            break;
          }
          const next = imagesRef.current[clamped + offset];
          if (next && next.complete && next.naturalWidth > 0) {
            img = next;
            break;
          }
        }
      }

      // If no image is ready yet, don't mark as drawn so rAF can retry
      if (!img || !img.complete || img.naturalWidth === 0) return;

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
      lastDrawnFrame.current = clamped;

      if (!isCanvasActive) {
        setIsCanvasActive(true);
      }
    },
    [totalFrames, isCanvasActive, requestFrame]
  );

  // Expose drawFrame via imperative handle
  React.useImperativeHandle(
    ref,
    () => ({
      drawFrame,
    }),
    [drawFrame]
  );

  // Preload frames progressively without saturating network
  useEffect(() => {
    const images: HTMLImageElement[] = new Array(totalFrames);
    imagesRef.current = images;

    // 1. Immediately hook into the static DOM image (frame 0)
    const domImg = initialImgRef.current;
    if (domImg && domImg.complete && domImg.naturalWidth > 0) {
      images[0] = domImg;
      drawFrame(0);
    } else if (domImg) {
      domImg.onload = () => {
        images[0] = domImg;
        drawFrame(0);
      };
    } else {
      const firstImg = new Image();
      firstImg.src = getFrameUrl(0);
      firstImg.onload = () => {
        images[0] = firstImg;
        drawFrame(0);
      };
    }

    let isCancelled = false;

    // Helper to load a contiguous batch of frames
    const loadBatch = (start: number, end: number, onComplete?: () => void) => {
      let remaining = end - start;
      if (remaining <= 0) {
        if (onComplete) onComplete();
        return;
      }

      for (let i = start; i < end; i++) {
        if (isCancelled) return;
        if (images[i] && images[i].complete) {
          remaining--;
          if (remaining === 0 && onComplete) onComplete();
          continue;
        }

        const img = images[i] || new Image();
        img.src = getFrameUrl(i);
        img.onload = () => {
          images[i] = img;
          remaining--;
          if (remaining === 0 && onComplete && !isCancelled) {
            onComplete();
          }
        };
        img.onerror = () => {
          remaining--;
          if (remaining === 0 && onComplete && !isCancelled) {
            onComplete();
          }
        };
        images[i] = img;
      }
    };

    // 2. High-priority buffer: frames 1 to 15 (fast initial scrub buffer)
    loadBatch(1, Math.min(16, totalFrames), () => {
      if (!isLoadedCalledRef.current) {
        isLoadedCalledRef.current = true;
        if (onLoaded) onLoaded();
      }

      // 3. Progressive chunked background loader for remaining frames
      // Loads 12 frames per chunk and yields to browser idle time between chunks
      const CHUNK_SIZE = 12;
      const loadChunksProgressively = (currIndex: number) => {
        if (isCancelled || currIndex >= totalFrames) return;
        const nextEnd = Math.min(currIndex + CHUNK_SIZE, totalFrames);

        loadBatch(currIndex, nextEnd, () => {
          if (isCancelled) return;
          if (typeof window !== "undefined" && "requestIdleCallback" in window) {
            (window as any).requestIdleCallback(
              () => loadChunksProgressively(nextEnd),
              { timeout: 350 }
            );
          } else {
            setTimeout(() => loadChunksProgressively(nextEnd), 50);
          }
        });
      };

      loadChunksProgressively(16);
    });

    return () => {
      isCancelled = true;
    };
  }, [totalFrames, drawFrame, onLoaded]);

  // Handle resize and devicePixelRatio
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      // Redraw the current frame rather than resetting to 0
      lastDrawnFrame.current = -1;
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
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none md:object-[48%_50%] object-center"
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
