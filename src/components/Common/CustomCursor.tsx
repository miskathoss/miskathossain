"use client";

import React, { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Only enable on desktop with fine pointer
    const checkMobile = () => {
      const touchDevice = window.matchMedia("(pointer: coarse)").matches;
      setIsMobile(touchDevice);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    if (window.matchMedia("(pointer: coarse)").matches) {
      return () => window.removeEventListener("resize", checkMobile);
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const clickable = target.closest("a, button, [data-cursor], [role='button']");
      if (clickable) {
        setIsPointer(true);
        const customText = clickable.getAttribute("data-cursor-text");
        setCursorText(customText || "");
      } else {
        setIsPointer(false);
        setCursorText("");
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  // Smooth lerp for trailing cursor
  useEffect(() => {
    if (isMobile) return;
    let animationFrameId: number;

    const render = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.2,
        y: prev.y + (position.y - prev.y) * 0.2,
      }));
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position, isMobile]);

  if (isMobile || !isVisible) return null;

  return (
    <>
      {/* Inner pinpoint dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        <div
          className={`rounded-full bg-rose transition-all duration-200 ${
            cursorText
              ? "w-0 h-0 opacity-0"
              : isPointer
              ? "w-2.5 h-2.5 bg-rose opacity-100"
              : "w-1.5 h-1.5 bg-cream opacity-80"
          }`}
        />
      </div>

      {/* Trailing follower ring / text badge */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        <div
          className={`flex items-center justify-center rounded-full border border-white/20 transition-all duration-300 backdrop-blur-[2px] ${
            cursorText
              ? "px-3.5 py-1.5 bg-dark/80 border-rose/50 text-[10px] tracking-widest uppercase font-medium text-cream"
              : isPointer
              ? "w-10 h-10 bg-white/[0.08] border-rose/60 scale-110"
              : "w-7 h-7 bg-white/[0.03] border-white/15"
          }`}
        >
          {cursorText && <span>{cursorText}</span>}
        </div>
      </div>
    </>
  );
}
