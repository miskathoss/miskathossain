"use client";

import React, { useRef } from "react";
import { ArrowUpRight, Check, Sparkles } from "lucide-react";

interface ServiceTier {
  title: string;
  subtitle: string;
  description: string;
  bestFor: string;
  isPopular?: boolean;
  deliverables: {
    isHighlight?: boolean;
    text: string;
  }[];
  ctaText: string;
  tierKey: string;
}

const offerings: ServiceTier[] = [
  {
    title: "AUTHORITY ESSENTIALS",
    subtitle: "FOUNDATIONAL BRAND IDENTITY & SINGLE-PAGE WEB SYSTEM",
    bestFor:
      "Emerging coaches who need a sleek, high-trust digital footprint to validate their offer and start booking clients immediately.",
    description:
      "A focused, high-converting foundation that gives you instant market credibility and an automated booking funnel without months of complexity.",
    deliverables: [
      { text: "Core Brand Strategy & Messaging Narrative" },
      { text: "Logo System, Typography & Color Palette" },
      { text: "Custom 1-Page High-Converting Landing Page" },
      { text: "Integrated Intake & Discovery Call Booking Funnel" },
      { text: "Complete Web Launch & Basic SEO Setup" },
    ],
    ctaText: "BOOK DISCOVERY CALL",
    tierKey: "Essentials",
  },
  {
    title: "COACHING SUITE",
    subtitle: "COMPLETE BRAND IDENTITY & MULTI-PAGE CONVERSION SYSTEM",
    bestFor:
      "Established coaches ready to replace an amateur site, elevate their positioning, and consistently attract ideal clients.",
    description:
      "The definitive flagship partnership. From strategic authority positioning to a multi-page web platform engineered to turn casual traffic into committed high-ticket coaching clients.",
    isPopular: true,
    deliverables: [
      { text: "Everything in Authority Essentials, plus:", isHighlight: true },
      { text: "Custom 4–5 Page Website (Home, About/Bio, Coaching Offers, Client Stories, Booking)" },
      { text: "Comprehensive Brand Guidelines & Social Media Graphic Templates" },
      { text: "High-Converting Lead Magnet / PDF Guide Layout Design" },
      { text: "Mobile-First Conversion Architecture & Speed Optimization" },
      { text: "CMS Handover Training + 30-Day Post-Launch Support" },
    ],
    ctaText: "DISCUSS YOUR PROJECT",
    tierKey: "Coaching Suite",
  },
  {
    title: "VIP TRANSFORMATION",
    subtitle: "END-TO-END BRAND, WEB & GROWTH PARTNER",
    bestFor:
      "Top-tier coaches, masterminds, and keynote speakers seeking total market authority, custom copywriting, and ongoing strategic design support.",
    description:
      "Full-spectrum strategic execution and priority partnership. Designed for category-defining leaders commanding 5-figure corporate retainers and running high-end mastermind cohorts.",
    deliverables: [
      { text: "Everything in Coaching Suite, plus:", isHighlight: true },
      { text: "Strategic Messaging & Copywriting Refinement for Sales Funnels" },
      { text: "Complete LinkedIn Authority Suite (Banner, Post & Carousel Templates)" },
      { text: "Priority 14-Day Rapid Deployment & Direct Slack Access" },
      { text: "60-Day Post-Launch Conversion Optimization & A/B Support" },
      { text: "Dedicated Design Sprint for Mastermind Decks & Sales Collateral" },
    ],
    ctaText: "APPLY FOR VIP PARTNER",
    tierKey: "VIP",
  },
];

export function ServicesOfferings() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const openIntakeModalWithTier = (tier: string) => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("open-intake-modal", { detail: { tier } })
      );
    }
  };

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
            Strategic brand identity and conversion web systems tailored exclusively
            for coaches and mentors.
          </p>
        </div>

        {/* Offerings Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {offerings.map((tier) => (
            <div
              key={tier.title}
              className={`relative flex flex-col justify-between rounded-[32px] p-8 sm:p-10 transition-all duration-300 ${
                tier.isPopular
                  ? "bg-gradient-to-b from-white/[0.09] to-white/[0.03] border-2 border-rose/70 shadow-[0_24px_70px_rgba(224,40,79,0.2)] ring-1 ring-rose/40 lg:-translate-y-2"
                  : "bg-white/[0.03] border border-white/[0.1] hover:bg-white/[0.05] hover:border-white/[0.22] shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
              }`}
            >
              {/* Signature Badge */}
              {tier.isPopular && (
                <div className="absolute -top-3.5 left-8 inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-rose text-white text-[10px] font-semibold tracking-[0.2em] uppercase shadow-md">
                  <Sparkles className="w-3 h-3" />
                  <span>SIGNATURE OFFERING</span>
                </div>
              )}

              <div>
                {/* Title & Subtitle */}
                <h3 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] text-white mb-2">
                  {tier.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-rose font-medium tracking-[0.16em] uppercase mb-5 leading-relaxed">
                  {tier.subtitle}
                </p>

                {/* Best For Box */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] mb-6">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-cream/40 block mb-1">
                    BEST FOR:
                  </span>
                  <p className="text-xs sm:text-sm text-cream/80 leading-relaxed font-light">
                    {tier.bestFor}
                  </p>
                </div>

                {/* Deliverables */}
                <div className="space-y-3.5 border-t border-white/[0.08] pt-6 mb-8">
                  <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-cream/40 mb-3">
                    WHAT&apos;S INCLUDED:
                  </div>
                  {tier.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 text-xs sm:text-sm leading-snug"
                    >
                      <div
                        className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          item.isHighlight
                            ? "bg-rose text-white"
                            : "bg-rose/20 text-rose"
                        }`}
                      >
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span
                        className={
                          item.isHighlight
                            ? "text-white font-medium"
                            : "text-cream/85 font-light"
                        }
                      >
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="pt-6 border-t border-white/[0.08] mt-4">
                <button
                  onClick={() => openIntakeModalWithTier(tier.tierKey)}
                  data-cursor-text="START"
                  className={`w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-full text-xs sm:text-sm font-semibold tracking-[0.16em] uppercase transition-all duration-300 ${
                    tier.isPopular
                      ? "bg-rose hover:bg-rose/90 text-white shadow-[0_4px_24px_rgba(224,40,79,0.45)] hover:shadow-[0_6px_30px_rgba(224,40,79,0.6)] active:scale-[0.98]"
                      : "bg-white/[0.06] hover:bg-white/[0.12] text-cream border border-white/[0.18] hover:border-white/[0.35] backdrop-blur-md active:scale-[0.98]"
                  }`}
                >
                  <span>{tier.ctaText}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
