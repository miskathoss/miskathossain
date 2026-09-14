"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  details: string;
}

const steps: ProcessStep[] = [
  {
    number: "01",
    title: "DISCOVER",
    description: "Understand the business, audience, and problem.",
    details:
      "Deep dive interviews, market analysis, competitor audit, and target audience psychology to uncover your distinctive strategic advantage.",
  },
  {
    number: "02",
    title: "DEFINE",
    description: "Find the right direction, position, and visual language.",
    details:
      "Synthesizing findings into brand positioning, core narrative pillars, moodboards, and artistic creative direction before opening Figma.",
  },
  {
    number: "03",
    title: "DESIGN",
    description: "Build the identity, interface, and experience.",
    details:
      "Crafting bespoke logo systems, typography hierarchies, component design systems, and responsive desktop/mobile UI wireframes.",
  },
  {
    number: "04",
    title: "DEVELOP",
    description: "Turn the design into a functional digital product.",
    details:
      "Architecting clean, responsive code with smooth animations, accessible semantics, fast load times, and intuitive content management.",
  },
  {
    number: "05",
    title: "REFINE",
    description: "Test, polish, and make everything work together.",
    details:
      "Micro-interaction tuning, cross-browser stress testing, SEO optimization, and hands-on handover ensuring effortless ongoing ownership.",
  },
];

export function Process() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".process-item");

      items.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              end: "top 55%",
              scrub: false,
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
      id="process"
      className="relative w-full bg-dark text-cream py-16 sm:py-24 px-6 sm:px-12 lg:px-24 border-t border-white/[0.06] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold tracking-[0.24em] uppercase text-rose mb-3">
              <span className="w-8 h-[1px] bg-rose" />
              <span>03 / PROCESS</span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-[-0.04em] leading-[1.05] text-cream">
              FROM IDEA <br />
              <span className="font-semibold text-white">TO EXPERIENCE.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-cream/70 font-light leading-relaxed">
            A structured, collaborative methodology that eliminates guesswork and
            consistently yields distinctive, high-converting results.
          </p>
        </div>

        {/* 5 Stages Accordion / Grid */}
        <div className="space-y-4 sm:space-y-5">
          {steps.map((step) => (
            <div
              key={step.number}
              className="process-item group relative p-8 sm:p-10 rounded-[24px] sm:rounded-[28px] border border-white/[0.1] bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/[0.2] transition-all duration-300 backdrop-blur-md"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                {/* Step number & Title */}
                <div className="flex items-baseline gap-6 lg:w-4/12">
                  <span className="text-xs sm:text-sm font-mono tracking-[0.2em] font-semibold text-rose">
                    {step.number}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] text-white">
                    {step.title}
                  </h3>
                </div>

                {/* Core description */}
                <div className="lg:w-4/12">
                  <p className="text-base sm:text-lg text-cream/90 font-medium">
                    {step.description}
                  </p>
                </div>

                {/* Detailed description */}
                <div className="lg:w-4/12">
                  <p className="text-xs sm:text-sm text-cream/60 font-light leading-relaxed">
                    {step.details}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
