"use client";

import React, { useEffect, useRef, useState } from "react";

interface HeroCanvasScrubberProps {
  currentFrame: number; // 0 to 239
  totalFrames?: number;
  onLoaded?: () => void;
}

export const HeroCanvasScrubber: React.FC<HeroCanvasScrubberProps> = ({
  currentFrame,
  totalFrames = 240,
  onLoaded,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loadedCount, setLoadedCount] = useState(0);
  const isLoadedCalledRef = useRef(false);

  // Helper to format frame filename: ezgif-frame-001.jpg
  const getFrameUrl = (index: number) => {
    const frameNum = String(index + 1).padStart(3, "0");
    return `/assets/frames/ezgif-frame-${frameNum}.jpg`;
  };

  // Preload frames progressively
  useEffect(() => {
    const images: HTMLImageElement[] = new Array(totalFrames);
    let loaded = 0;

    // First load frame 0 immediately for initial paint
    const firstImg = new Image();
    firstImg.src = getFrameUrl(0);
    firstImg.onload = () => {
      images[0] = firstImg;
      loaded++;
      setLoadedCount(loaded);
      drawFrame(0);
    };

    // Load first 30 frames with high priority
    const preloadBatch = (start: number, end: number, callback?: () => void) => {
      let batchLoaded = 0;
      const count = end - start;
      if (count <= 0) {
        if (callback) callback();
        return;
      }
      for (let i = start; i < end; i++) {
        const img = new Image();
        img.src = getFrameUrl(i);
        img.onload = () => {
          images[i] = img;
          loaded++;
          batchLoaded++;
          setLoadedCount(loaded);
          if (batchLoaded >= count && callback) {
            callback();
          }
        };
        img.onerror = () => {
          batchLoaded++;
          if (batchLoaded >= count && callback) {
            callback();
          }
        };
      }
    };

    // Priority batch 1: frames 1 to 40
    preloadBatch(1, Math.min(40, totalFrames), () => {
      if (!isLoadedCalledRef.current) {
        isLoadedCalledRef.current = true;
        if (onLoaded) onLoaded();
      }
      // Then load remaining frames in background
      preloadBatch(40, totalFrames);
    });

    imagesRef.current = images;

    return () => {
      // clean up references
      imagesRef.current = [];
    };
  }, [totalFrames]);

  // Function to render frame onto canvas maintaining cover aspect ratio
  const drawFrame = (frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    // Find closest loaded frame if current frame is not ready
    let img = imagesRef.current[frameIndex];
    if (!img || !img.complete || img.naturalWidth === 0) {
      // Find nearest loaded frame
      for (let offset = 1; offset < totalFrames; offset++) {
        const prev = imagesRef.current[frameIndex - offset];
        if (prev && prev.complete && prev.naturalWidth > 0) {
          img = prev;
          break;
        }
        const next = imagesRef.current[frameIndex + offset];
        if (next && next.complete && next.naturalWidth > 0) {
          img = next;
          break;
        }
      }
    }

    if (!img || !img.complete || img.naturalWidth === 0) return;

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;

    // Calculate cover scale
    const scale = Math.max(cw / iw, ch / ih);
    const nw = iw * scale;
    const nh = ih * scale;

    // Positioning: Center vertically, and on desktop adjust slightly so Miskat (who is right-center)
    // is well balanced while leaving generous space for the glassmorphic card on the left
    const isMobile = window.innerWidth < 768;
    // On mobile, center horizontally or nudge slightly right so face is centered
    // On desktop, center or slight offset (e.g. 52% from left)
    const offsetX = isMobile ? (cw - nw) * 0.5 : (cw - nw) * 0.48;
    const offsetY = (ch - nh) * 0.5;

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, offsetX, offsetY, nw, nh);
  };

  // Redraw whenever currentFrame changes
  useEffect(() => {
    const clamped = Math.max(0, Math.min(totalFrames - 1, Math.round(currentFrame)));
    drawFrame(clamped);
  }, [currentFrame]);

  // Handle resize and devicePixelRatio
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2); // Cap at 2 for performance
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      const clamped = Math.max(0, Math.min(totalFrames - 1, Math.round(currentFrame)));
      drawFrame(clamped);
    };

    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, [currentFrame]);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none select-none">
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover"
        style={{ width: "100%", height: "100%" }}
      />
      {/* Subtle atmospheric vignette and cinematic film gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-black/30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-dark/60 via-transparent to-dark/30 pointer-events-none hidden md:block" />
    </div>
  );
};
