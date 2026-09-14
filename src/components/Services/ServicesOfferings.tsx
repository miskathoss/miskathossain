"use client";

import React, { useRef } from "react";
import { ArrowUpRight, Check } from "lucide-react";

interface ServiceTier {
  title: string;
  subtitle: string;
  description: string;
  isPopular?: boolean;
  deliverables: string[];
}

const offerings: ServiceTier[] = [
  {
    title: "BRAND IDENTITY",
    subtitle: "Strategic foundations & visual systems",
    description:
      "For coaches and businesses ready to carve out a distinct, unmistakable market position with enduring visual presence.",
    deliverables: [
      "Core brand positioning & narrative",
      "Logo system, secondary marks & wordmarks",
      "Comprehensive typography & color palette",
      "Full digital & print asset guidelines",
      "Figma design tokens & vector package",
    ],
  },
  {
    title: "BRAND + WEBSITE",
    subtitle: "Complete flagship transformation",
    description:
      "The definitive end-to-end partnership. From strategic brand identity to a custom-designed, responsive, high-converting digital experience.",
    isPopular: true,
    deliverables: [
      "Everything in Brand Identity",
      "End-to-end UX wireframing & IA",
      "Bespoke editorial UI design (desktop & mobile)",
      "Motion direction & micro-interactions",
      "Complete deployment & SEO optimization",
      "Hands-on CMS handover & 30-day advisory",
    ],
  },
  {
    title: "WEB DESIGN",
    subtitle: "Digital experience & conversion redesign",
    description:
      "For established brands seeking to elevate their existing identity into an immersive, world-class responsive web presence.",
    deliverables: [
      "Full site information architecture",
      "Interactive component design system",
      "Responsive layout design (desktop/tablet/mobile)",
      "Conversion & storytelling optimization",
      "Production-ready Figma handoff or web build",
    ],
  },
];

export function ServicesOfferings() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <section
      ref={containerRef}
      id="services"
      className="relative w-full bg-dark-pure text-cream py-16 sm:py-24 px-6 sm:px-12 lg:px-24 border-t border-white/[0.06] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold tracking-[0.24em] uppercase text-rose mb-3">
              <span className="w-8 h-[1px] bg-rose" />
              <span>SERVICES &amp; PACKAGES</span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-[-0.04em] leading-[1.05] text-cream">
              WHAT CAN WE <br />
              <span className="font-semibold text-white">BUILD TOGETHER?</span>
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-cream/70 font-light leading-relaxed">
            Tailored commercial collaborations with fixed scope and dedicated attention.
            Choose the engagement model that matches your growth ambitions.
          </p>
        </div>

        {/* Offerings Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {offerings.map((tier) => (
            <div
              key={tier.title}
              className={`relative flex flex-col justify-between rounded-[28px] p-8 sm:p-10 transition-all duration-300 ${
                tier.isPopular
                  ? "bg-white/[0.07] border-2 border-rose/60 shadow-[0_20px_50px_rgba(224,40,79,0.15)] ring-1 ring-rose/30"
                  : "bg-white/[0.03] border border-white/[0.1] hover:bg-white/[0.05] hover:border-white/[0.2]"
              }`}
            >
              {/* Popular Badge */}
              {tier.isPopular && (
                <div className="absolute -top-3.5 left-8 px-4 py-1 rounded-full bg-rose text-white text-[10px] font-semibold tracking-[0.2em] uppercase shadow-md">
                  SIGNATURE OFFERING
                </div>
              )}

              <div>
                {/* Title & Subtitle */}
                <h3 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] text-white mb-2">
                  {tier.title}
                </h3>
                <p className="text-xs sm:text-sm text-rose font-medium tracking-wide uppercase mb-6">
                  {tier.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-cream/70 leading-relaxed font-light mb-8">
                  {tier.description}
                </p>

                {/* Deliverables */}
                <div className="space-y-3.5 border-t border-white/[0.08] pt-6 mb-10">
                  <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-cream/40 mb-3">
                    WHAT&apos;S INCLUDED:
                  </div>
                  {tier.deliverables.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 text-xs sm:text-sm text-cream/85 leading-snug"
                    >
                      <Check className="w-4 h-4 text-rose shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="pt-6 border-t border-white/[0.08]">
                <a
                  href="#contact"
                  data-cursor-text="TALK"
                  className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full text-xs sm:text-sm font-semibold tracking-[0.16em] uppercase transition-all duration-300 ${
                    tier.isPopular
                      ? "bg-rose hover:bg-rose/90 text-white shadow-[0_4px_20px_rgba(224,40,79,0.4)]"
                      : "bg-white/[0.06] hover:bg-white/[0.12] text-cream border border-white/[0.16]"
                  }`}
                >
                  <span>DISCUSS YOUR PROJECT</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
