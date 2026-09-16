"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HeroCanvasScrubber } from "./HeroCanvasScrubber";
import { HeroGlassCard } from "./HeroGlassCard";

export function Hero() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pinTargetRef = useRef<HTMLDivElement | null>(null);
  const glassCardRef = useRef<HTMLDivElement | null>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement | null>(null);
  const miniBadgeRef = useRef<HTMLDivElement | null>(null);

  // Imperative ref to canvas scrubber — call drawFrame() directly, no React state
  const scrubberRef = useRef<{ drawFrame: (frame: number) => void }>(null);

  // Mutable frame tracker — no React re-renders
  const currentFrameRef = useRef(0);
  const rafIdRef = useRef(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const pinTarget = pinTargetRef.current;
    const glassCard = glassCardRef.current;
    const scrollIndicator = scrollIndicatorRef.current;
    const miniBadge = miniBadgeRef.current;

    if (!container || !pinTarget) return;

    const isMobile = window.innerWidth < 768;

    // ── Tuning ──────────────────────────────────────────
    // Desktop: generous scroll track, silky scrub
    // Mobile:  shorter scroll track so thumb swipes feel instant
    const scrollDistance = isMobile ? "+=1000" : "+=2400";
    // scrub value is the interpolation time in seconds.
    // Lower = tighter / more responsive. 0 = instant (1:1 with scroll).
    const scrubSpeed = isMobile ? 0.3 : 0.6;

    // Render loop: draw the current frame at display refresh rate
    const renderLoop = () => {
      if (scrubberRef.current) {
        scrubberRef.current.drawFrame(currentFrameRef.current);
      }
      rafIdRef.current = requestAnimationFrame(renderLoop);
    };
    rafIdRef.current = requestAnimationFrame(renderLoop);

    // Pin hero for scroll distance
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: scrollDistance,
          pin: pinTarget,
          scrub: scrubSpeed,
          anticipatePin: 1,
          onUpdate: (self) => {
            // Directly write to mutable ref — zero React overhead
            currentFrameRef.current = self.progress * 239;
          },
        },
      });

      // Timeline stages:
      // 0% - 20%: Wide composition, glass card fully visible
      // 20% - 40%: Camera moves closer, glass card subtly scales down
      // 40% - 60%: Camera approaches character, glass card moves/fades toward edge
      // 60% - 80%: Perspective changes, mini badge appears, glass card fades out
      // 80% - 100%: Camera pulls back, prepare transition to next section

      // Initial fade out of the scroll indicator early (0 to 10%)
      if (scrollIndicator) {
        tl.to(
          scrollIndicator,
          {
            opacity: 0,
            y: 15,
            duration: 0.15,
            ease: "power2.out",
          },
          0
        );
      }

      // 20% - 40%: Glass card subtly scales down
      if (glassCard) {
        tl.to(
          glassCard,
          {
            scale: 0.94,
            y: -10,
            duration: 0.25,
            ease: "none",
          },
          0.15
        );

        // 40% - 60%: Glass card moves and fades toward edge
        tl.to(
          glassCard,
          {
            x: -80,
            opacity: 0,
            scale: 0.88,
            duration: 0.25,
            ease: "power2.inOut",
          },
          0.4
        );
      }

      // 60% - 85%: Subtle floating mini indicator appears in lower left
      if (miniBadge) {
        tl.fromTo(
          miniBadge,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.15, ease: "power2.out" },
          0.6
        ).to(
          miniBadge,
          { opacity: 0, y: -10, duration: 0.15, ease: "power2.in" },
          0.85
        );
      }
    }, container);

    return () => {
      cancelAnimationFrame(rafIdRef.current);
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-dark h-[180vh] md:h-[340vh]"
    >
      {/* Pinned Viewport Container */}
      <div
        ref={pinTargetRef}
        className="relative w-full h-screen overflow-hidden flex flex-col justify-between"
      >
        {/* Cinematic Canvas Video Scrubber */}
        <HeroCanvasScrubber ref={scrubberRef} totalFrames={240} />

        {/* Floating Hero UI Layer */}
        <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex flex-col justify-end pb-12 sm:pb-16 lg:pb-20 pointer-events-none">
          {/* Main Glassmorphism Information Card */}
          <div className="flex items-end justify-between w-full">
            <div className="w-full max-w-xl">
              <HeroGlassCard ref={glassCardRef} />
            </div>

            {/* Minimalist Scroll Cue */}
            <div
              ref={scrollIndicatorRef}
              className="hidden sm:flex flex-col items-center gap-2 text-cream/60 select-none pb-4"
            >
              <span className="text-[10px] tracking-[0.24em] uppercase font-medium">
                Scroll to Experience
              </span>
              <div className="w-5 h-9 rounded-full border border-white/20 flex justify-center pt-1.5 backdrop-blur-sm bg-white/[0.04]">
                <div className="w-1 h-2 rounded-full bg-rose animate-bounce" />
              </div>
            </div>
          </div>
        </div>

        {/* Minimalist persistent identifier when card fades (60%-85%) */}
        <div
          ref={miniBadgeRef}
          className="absolute bottom-10 left-8 sm:left-14 z-20 pointer-events-none opacity-0"
        >
          <div className="px-4 py-2 rounded-full backdrop-blur-xl bg-dark/70 border border-white/[0.14] text-[11px] tracking-[0.18em] uppercase text-cream/90 flex items-center gap-2 shadow-xl">
            <span className="w-2 h-2 rounded-full bg-rose" />
            <span>Miskat Hossain — Brand &amp; Web Strategy</span>
          </div>
        </div>
      </div>
    </div>
  );
}
