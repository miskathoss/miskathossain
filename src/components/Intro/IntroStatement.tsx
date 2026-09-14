"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function IntroStatement() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const labelRef = useRef<HTMLDivElement | null>(null);
  const headlineRef = useRef<HTMLHeadingElement | null>(null);
  const copyRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Staggered reveal of section label, editorial headline lines, and supporting copy
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          end: "top 25%",
          scrub: 0.8,
        },
      });

      if (labelRef.current) {
        tl.fromTo(
          labelRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
        );
      }

      if (headlineRef.current) {
        tl.fromTo(
          headlineRef.current.children,
          { opacity: 0.2, y: 40 },
          { opacity: 1, y: 0, stagger: 0.15, duration: 0.8, ease: "power2.out" },
          "-=0.4"
        );
      }

      if (copyRef.current) {
        tl.fromTo(
          copyRef.current.children,
          { opacity: 0.2, y: 25 },
          { opacity: 0.85, y: 0, stagger: 0.1, duration: 0.6, ease: "power2.out" },
          "-=0.3"
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full min-h-[90vh] bg-dark text-cream flex flex-col justify-center px-6 sm:px-12 lg:px-24 py-24 sm:py-36 overflow-hidden border-t border-white/[0.06]"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-rose/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Section Label: 01 / THE THINKING */}
        <div
          ref={labelRef}
          className="flex items-center gap-3 text-xs sm:text-sm font-semibold tracking-[0.24em] uppercase text-rose mb-10 sm:mb-16"
        >
          <span className="w-8 h-[1px] bg-rose" />
          <span>01 / THE THINKING</span>
        </div>

        {/* Large Editorial Statement: GOOD DESIGN ISN'T DECORATION. */}
        <h2
          ref={headlineRef}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight tracking-[-0.04em] leading-[1.05] text-cream mb-12 sm:mb-16"
        >
          <span className="block text-white">GOOD DESIGN</span>
          <span className="block font-medium text-cream">
            ISN&apos;T DECORATION.
          </span>
        </h2>

        {/* Supporting Copy */}
        <div
          ref={copyRef}
          className="max-w-2xl space-y-4 text-lg sm:text-2xl font-light text-cream/75 leading-relaxed tracking-[-0.01em]"
        >
          <p>It&apos;s how people understand an idea.</p>
          <p>It&apos;s how they feel about a business.</p>
          <p className="text-white font-normal">
            And ultimately, it&apos;s what they remember.
          </p>
        </div>
      </div>
    </section>
  );
}
