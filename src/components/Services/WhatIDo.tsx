"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site";

interface Discipline {
  number: string;
  title: string;
  tagline: string;
  items: string[];
}

const disciplines: Discipline[] = [
  {
    number: "01",
    title: "BRAND AUTHORITY",
    tagline: "High-trust positioning that commands premium corporate retainers.",
    items: [
      "Executive positioning & messaging narrative",
      "High-trust logo system & visual marks",
      "Comprehensive brand guidelines",
      "Category-defining authority art direction",
    ],
  },
  {
    number: "02",
    title: "CONVERSION WEBSITES",
    tagline: "Digital platforms engineered to convert visitors into booked discovery calls.",
    items: [
      "High-converting landing pages & multi-page architecture",
      "Strategic offer storytelling & authority hierarchy",
      "Seamless intake & booking funnel integrations",
      "Ultra-fast mobile performance & SEO launch",
    ],
  },
  {
    number: "03",
    title: "CLIENT ACQUISITION ASSETS",
    tagline: "Lead-generating collateral that turns social traffic into program members.",
    items: [
      "High-converting lead magnet & workbook designs",
      "Complete LinkedIn profile authority templates",
      "Corporate pitch & mastermind deck layouts",
      "Post-launch conversion advisory & optimization",
    ],
  },
];

export function WhatIDo() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".discipline-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
            end: "top 40%",
            scrub: false,
          },
        }
      );
    }, container);

    return () => ctx.revert();
  }, []);

  const openCalendly = () => {
    if (typeof window !== "undefined") {
      window.open(siteConfig.calendly, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section
      ref={containerRef}
      id="services-overview"
      className="relative w-full bg-dark text-cream py-16 sm:py-24 px-6 sm:px-12 lg:px-24 border-t border-white/[0.06] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
          <div>
            <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold tracking-[0.24em] uppercase text-rose mb-3">
              <span className="w-8 h-[1px] bg-rose" />
              <span>CONVERSION CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-[-0.03em] text-cream">
              BUILT TO <span className="font-semibold text-white">ENROLL CLIENTS.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-cream/70 font-light leading-relaxed">
            Eliminating outdated branding, clarifying your signature offer, and launching
            an automated digital platform that turns casual visitors into committed coaching clients.
          </p>
        </div>

        {/* 3 Major Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {disciplines.map((item) => (
            <div
              key={item.number}
              onClick={openCalendly}
              className="discipline-card group relative flex flex-col justify-between p-8 sm:p-10 rounded-[28px] border border-white/[0.1] bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/[0.22] transition-all duration-500 backdrop-blur-md cursor-pointer"
              data-cursor-text="EXPLORE"
            >
              {/* Card top row */}
              <div>
                <div className="flex items-center justify-between text-xs font-semibold tracking-[0.2em] text-rose mb-8">
                  <span>{item.number}</span>
                  <ArrowUpRight className="w-4 h-4 text-cream/40 transition-transform duration-300 group-hover:text-rose group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] text-white mb-4">
                  {item.title}
                </h3>

                <p className="text-sm text-cream/65 leading-relaxed mb-8">
                  {item.tagline}
                </p>
              </div>

              {/* Deliverables list */}
              <div className="border-t border-white/[0.08] pt-6 space-y-3">
                {item.items.map((subItem) => (
                  <div
                    key={subItem}
                    className="flex items-center gap-2.5 text-xs sm:text-sm text-cream/80 font-normal group-hover:text-cream transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-rose/60 group-hover:bg-rose transition-colors" />
                    <span>{subItem}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
