"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const statements = [
  { text: "GOOD DESIGN ISN'T DECORATION.", highlight: false },
  { text: "IT'S COMMUNICATION.", highlight: false },
  { text: "IT'S PERCEPTION.", highlight: false },
  { text: "IT'S EXPERIENCE.", highlight: false },
  { text: "IT'S WHAT PEOPLE REMEMBER.", highlight: true },
];

export function Philosophy() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".philosophy-line");

      items.forEach((item, index) => {
        gsap.fromTo(
          item,
          { opacity: 0.15, y: 30, filter: "blur(4px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              end: "top 45%",
              scrub: 0.8,
            },
          }
        );
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-dark-pure text-cream py-16 sm:py-24 px-6 sm:px-12 lg:px-24 border-t border-white/[0.06] overflow-hidden select-none"
    >
      {/* Background ambient rose glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-rose/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full">
        <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold tracking-[0.24em] uppercase text-rose mb-10 sm:mb-14">
          <span className="w-8 h-[1px] bg-rose" />
          <span>DESIGN PHILOSOPHY</span>
        </div>

        {/* Progressive Statement Cascade */}
        <div className="space-y-6 sm:space-y-10">
          {statements.map((stmt, idx) => (
            <div
              key={idx}
              className="philosophy-line text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-[-0.04em] leading-[1.1] transition-all"
            >
              {stmt.highlight ? (
                <span className="font-semibold text-white relative inline-block">
                  {stmt.text}
                  <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-rose via-rose/60 to-transparent" />
                </span>
              ) : (
                <span className="text-cream/90">{stmt.text}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
