"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site";
import { HeroCanvasScrubber } from "./HeroCanvasScrubber";
import { HeroGlassCard } from "./HeroGlassCard";

export function Hero() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pinTargetRef = useRef<HTMLDivElement | null>(null);
  const glassCardRef = useRef<HTMLDivElement | null>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement | null>(null);

  // Cinematic Text Chapters & Ghost Typography Refs
  const chapterIndicatorRef = useRef<HTMLDivElement | null>(null);
  const indicatorTextRef = useRef<HTMLSpanElement | null>(null);
  const chapter1Ref = useRef<HTMLDivElement | null>(null);
  const chapter2Ref = useRef<HTMLDivElement | null>(null);
  const ghost1Ref = useRef<HTMLDivElement | null>(null);
  const ghost2Ref = useRef<HTMLDivElement | null>(null);
  const ghost3Ref = useRef<HTMLDivElement | null>(null);

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
    const chapterIndicator = chapterIndicatorRef.current;
    const indicatorText = indicatorTextRef.current;
    const chapter1 = chapter1Ref.current;
    const chapter2 = chapter2Ref.current;
    const ghost1 = ghost1Ref.current;
    const ghost2 = ghost2Ref.current;
    const ghost3 = ghost3Ref.current;

    if (!container || !pinTarget) return;

    const isMobile = window.innerWidth < 768;

    // ── Tuning ──────────────────────────────────────────
    // Generous scroll track for cinematic pacing on both mobile and desktop
    const scrollDistance = isMobile ? "+=2200" : "+=2800";
    const scrubSpeed = isMobile ? 0.4 : 0.6;

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

            // Update chapter indicator text bi-directionally
            if (indicatorText) {
              if (self.progress < 0.26) {
                indicatorText.textContent = "01 // OVERVIEW";
              } else if (self.progress < 0.62) {
                indicatorText.textContent = "02 // AUTHORITY";
              } else {
                indicatorText.textContent = "03 // CONVERSION";
              }
            }
          },
        },
      });

      // ── Stage 1: Scroll cue fades out early (0 to 8%) ────────────────
      if (scrollIndicator) {
        tl.to(
          scrollIndicator,
          {
            opacity: 0,
            y: 15,
            duration: 0.08,
            ease: "power2.out",
          },
          0
        );
      }

      // ── Stage 1: Glass Card smooth exit (0.16 to 0.28) ───────────────
      if (glassCard) {
        tl.to(
          glassCard,
          {
            scale: 0.95,
            y: -10,
            duration: 0.1,
            ease: "none",
          },
          0.14
        );

        tl.to(
          glassCard,
          {
            x: isMobile ? 0 : -60,
            y: isMobile ? 30 : -10,
            opacity: 0,
            scale: 0.9,
            duration: 0.12,
            ease: "power2.inOut",
            onComplete: () => {
              if (glassCard) glassCard.style.pointerEvents = "none";
            },
            onReverseComplete: () => {
              if (glassCard) glassCard.style.pointerEvents = "auto";
            },
          },
          0.2
        );
      }

      // ── Chapter Step HUD Indicator (0.04 to 0.94) ───────────────────
      if (chapterIndicator) {
        tl.fromTo(
          chapterIndicator,
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, duration: 0.08, ease: "power2.out" },
          0.04
        ).to(
          chapterIndicator,
          { opacity: 0, y: -10, duration: 0.06, ease: "power2.in" },
          0.94
        );
      }

      // ── Stage 2: Ghost Word 1 — AUTHORITY (0.20 to 0.56) ────────────
      if (ghost1) {
        tl.fromTo(
          ghost1,
          { opacity: 0, scale: 0.9, xPercent: -6 },
          { opacity: 0.9, scale: 1, xPercent: 4, duration: 0.15, ease: "power1.out" },
          0.20
        ).to(
          ghost1,
          { opacity: 0, scale: 1.06, xPercent: 12, duration: 0.14, ease: "power1.in" },
          0.48
        );
      }

      // ── Stage 2: Chapter 1 Card — THE AUTHORITY STANDARD (0.26 to 0.62)
      if (chapter1) {
        tl.fromTo(
          chapter1,
          { opacity: 0, y: 35, scale: 0.94 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.10,
            ease: "power2.out",
            onStart: () => {
              if (chapter1) chapter1.style.pointerEvents = "auto";
            },
          },
          0.26
        ).to(
          chapter1,
          {
            opacity: 0,
            y: -25,
            scale: 0.95,
            duration: 0.10,
            ease: "power2.in",
            onComplete: () => {
              if (chapter1) chapter1.style.pointerEvents = "none";
            },
            onReverseComplete: () => {
              if (chapter1) chapter1.style.pointerEvents = "auto";
            },
          },
          0.56
        );
      }

      // ── Stage 3: Ghost Word 2 — CONVERSION (0.56 to 0.88) ───────────
      if (ghost2) {
        tl.fromTo(
          ghost2,
          { opacity: 0, scale: 0.9, xPercent: 6 },
          { opacity: 0.9, scale: 1, xPercent: -4, duration: 0.15, ease: "power1.out" },
          0.56
        ).to(
          ghost2,
          { opacity: 0, scale: 1.06, xPercent: -12, duration: 0.14, ease: "power1.in" },
          0.82
        );
      }

      // ── Stage 3: Chapter 2 Card — THE CONVERSION ENGINE (0.62 to 0.94)
      if (chapter2) {
        tl.fromTo(
          chapter2,
          { opacity: 0, y: 35, scale: 0.94 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.10,
            ease: "power2.out",
            onStart: () => {
              if (chapter2) chapter2.style.pointerEvents = "auto";
            },
          },
          0.62
        ).to(
          chapter2,
          {
            opacity: 0,
            y: -25,
            scale: 0.95,
            duration: 0.08,
            ease: "power2.in",
            onComplete: () => {
              if (chapter2) chapter2.style.pointerEvents = "none";
            },
            onReverseComplete: () => {
              if (chapter2) chapter2.style.pointerEvents = "auto";
            },
          },
          0.90
        );
      }

      // ── Stage 4: Ghost Word 3 — SCALE (0.86 to 0.98) ────────────────
      if (ghost3) {
        tl.fromTo(
          ghost3,
          { opacity: 0, scale: 0.92, xPercent: -4 },
          { opacity: 0.75, scale: 1, xPercent: 4, duration: 0.08, ease: "power1.out" },
          0.86
        ).to(
          ghost3,
          { opacity: 0, scale: 1.04, xPercent: 10, duration: 0.06, ease: "power1.in" },
          0.96
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
      className="relative w-full bg-dark h-[260vh] md:h-[350vh]"
    >
      {/* Pinned Viewport Container */}
      <div
        ref={pinTargetRef}
        className="relative w-full h-screen overflow-hidden flex flex-col justify-between"
      >
        {/* Cinematic Canvas Video Scrubber */}
        <HeroCanvasScrubber ref={scrubberRef} totalFrames={240} />

        {/* ── Layer 1: Subtle Ghost Outline Typography (Option 2) ── */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center select-none z-[6]">
          <div
            ref={ghost1Ref}
            className="absolute font-black tracking-[-0.04em] text-transparent uppercase whitespace-nowrap text-[16vw] lg:text-[18vw] leading-none opacity-0 will-change-transform"
            style={{
              WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.12)",
              textShadow: "0 0 50px rgba(255, 255, 255, 0.04)",
            }}
          >
            AUTHORITY
          </div>
          <div
            ref={ghost2Ref}
            className="absolute font-black tracking-[-0.04em] text-transparent uppercase whitespace-nowrap text-[16vw] lg:text-[18vw] leading-none opacity-0 will-change-transform"
            style={{
              WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.12)",
              textShadow: "0 0 50px rgba(255, 255, 255, 0.04)",
            }}
          >
            CONVERSION
          </div>
          <div
            ref={ghost3Ref}
            className="absolute font-black tracking-[-0.04em] text-transparent uppercase whitespace-nowrap text-[16vw] lg:text-[18vw] leading-none opacity-0 will-change-transform"
            style={{
              WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.12)",
              textShadow: "0 0 50px rgba(255, 255, 255, 0.04)",
            }}
          >
            SCALE
          </div>
        </div>

        {/* ── Layer 2: Chapter Step HUD Indicator (Top Right) ── */}
        <div
          ref={chapterIndicatorRef}
          className="absolute top-20 sm:top-24 right-6 sm:right-10 lg:right-14 z-20 pointer-events-none flex items-center gap-2.5 opacity-0"
        >
          <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-dark/75 border border-white/[0.14] backdrop-blur-xl text-[10px] tracking-[0.2em] uppercase text-cream/90 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <span className="w-1.5 h-1.5 rounded-full bg-rose animate-pulse" />
            <span ref={indicatorTextRef} className="font-semibold text-cream">
              01 // OVERVIEW
            </span>
          </div>
        </div>

        {/* ── Layer 3: Initial Floating Hero Glass Card (Bottom Left) ── */}
        <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-4 sm:px-10 lg:px-12 flex flex-col justify-end pb-12 sm:pb-16 lg:pb-20 pointer-events-none">
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

        {/* ── Layer 4: Chapter 1 Card — THE AUTHORITY STANDARD (Right on Desktop, Bottom on Mobile) ── */}
        <div className="absolute inset-0 z-10 max-w-7xl mx-auto px-4 sm:px-10 lg:px-12 pointer-events-none flex items-end sm:items-center justify-end pb-12 sm:pb-0">
          <div
            ref={chapter1Ref}
            className="w-full max-w-[460px] lg:max-w-[500px] opacity-0 pointer-events-none will-change-transform select-none"
          >
            <div className="relative backdrop-blur-2xl bg-white/[0.08] border border-white/[0.16] rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 lg:p-9 shadow-[0_20px_50px_rgba(0,0,0,0.55)] overflow-hidden transition-all duration-300 before:absolute before:inset-0 before:pointer-events-none before:rounded-[inherit] before:border before:border-white/[0.12] before:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.22)] pointer-events-auto">
              <div className="absolute -top-20 -left-20 w-48 h-48 bg-white/[0.05] rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-rose animate-pulse" />
                <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.22em] uppercase text-rose">
                  01 // THE AUTHORITY STANDARD
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extralight tracking-[-0.02em] text-cream leading-[1.18] mb-3 sm:mb-4">
                CLIENTS DON&apos;T BUY DESIGN.{" "}
                <span className="font-semibold text-white block sm:inline">
                  THEY BUY CERTAINTY.
                </span>
              </h2>

              <p className="text-xs sm:text-sm text-cream/75 leading-relaxed font-normal mb-4 sm:mb-5">
                High-ticket clients evaluate your caliber in seconds. I transform coaches from best-kept secrets into the undeniable authority in their category — positioning your practice for 5-figure corporate and private retainers.
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-white/[0.08]">
                <span className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.12] text-[10px] sm:text-[11px] font-medium tracking-[0.14em] uppercase text-cream/80">
                  CATEGORY LEADERSHIP
                </span>
                <span className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.12] text-[10px] sm:text-[11px] font-medium tracking-[0.14em] uppercase text-cream/80">
                  5-FIGURE POSITIONING
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Layer 5: Chapter 2 Card — THE CONVERSION ENGINE (Left on Desktop, Bottom on Mobile) ── */}
        <div className="absolute inset-0 z-10 max-w-7xl mx-auto px-4 sm:px-10 lg:px-12 pointer-events-none flex items-end sm:items-center justify-start pb-12 sm:pb-0">
          <div
            ref={chapter2Ref}
            className="w-full max-w-[460px] lg:max-w-[500px] opacity-0 pointer-events-none will-change-transform select-none"
          >
            <div className="relative backdrop-blur-2xl bg-white/[0.08] border border-white/[0.16] rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 lg:p-9 shadow-[0_20px_50px_rgba(0,0,0,0.55)] overflow-hidden transition-all duration-300 before:absolute before:inset-0 before:pointer-events-none before:rounded-[inherit] before:border before:border-white/[0.12] before:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.22)] pointer-events-auto">
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-white/[0.05] rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-rose animate-pulse" />
                <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.22em] uppercase text-rose">
                  02 // THE CONVERSION ENGINE
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extralight tracking-[-0.02em] text-cream leading-[1.18] mb-3 sm:mb-4">
                BUILT FOR CONVERSION.{" "}
                <span className="font-semibold text-white block sm:inline">
                  ENGINEERED FOR SCALE.
                </span>
              </h2>

              <p className="text-xs sm:text-sm text-cream/75 leading-relaxed font-normal mb-4 sm:mb-5">
                A luxury digital presence is only powerful when it books qualified calls. Every touchpoint features objection-handling architecture, qualification gates, and automated booking handover.
              </p>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.12] text-[10px] sm:text-[11px] font-medium tracking-[0.14em] uppercase text-cream/80">
                    24/7 INTAKE FUNNEL
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.12] text-[10px] sm:text-[11px] font-medium tracking-[0.14em] uppercase text-cream/80">
                    ZERO FRICTION
                  </span>
                </div>

                <a
                  href={siteConfig.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-text="BOOK"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.14em] uppercase text-rose hover:text-white transition-colors"
                >
                  <span>APPLY NOW</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
