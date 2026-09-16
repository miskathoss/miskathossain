"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  TrendingUp,
  Briefcase,
  Sparkles,
  Compass,
  Zap,
  ArrowUpRight,
} from "lucide-react";
import { siteConfig } from "@/data/site";

interface CoachNiche {
  category: string;
  outcome: string;
  tag: string;
  icon: React.ComponentType<{ className?: string }>;
}

const coachCategories: CoachNiche[] = [
  {
    category: "Business & Revenue Coaches",
    outcome: "Turn your proprietary framework into a high-converting digital platform that closes 5-figure deals.",
    tag: "FRAMEWORK TO FUNNEL",
    icon: TrendingUp,
  },
  {
    category: "Executive & Leadership Coaches",
    outcome: "Establish immediate corporate credibility and institutional trust for enterprise contracts and C-suite retainers.",
    tag: "CORPORATE CREDIBILITY",
    icon: Briefcase,
  },
  {
    category: "Mindset & Life Coaches",
    outcome: "Build deep emotional trust, connection, and authority with a clean, bespoke, high-end visual aesthetic.",
    tag: "HIGH-TRUST AESTHETICS",
    icon: Sparkles,
  },
  {
    category: "Career & Transition Coaches",
    outcome: "Stand out decisively in a crowded marketplace with crystal-clear positioning and streamlined offer architecture.",
    tag: "OFFER ARCHITECTURE",
    icon: Compass,
  },
  {
    category: "Health & High-Performance Coaches",
    outcome: "Convert passive social media attention into recurring program members and high-ticket mastermind clients.",
    tag: "AUDIENCE MONETIZATION",
    icon: Zap,
  },
];

export function WhoWeHelp() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".niche-card",
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: container,
            start: "top 75%",
            end: "top 35%",
            scrub: false,
          },
        }
      );
    }, container);

    return () => ctx.revert();
  }, []);

  const openIntakeModal = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-intake-modal"));
    }
  };

  return (
    <section
      ref={containerRef}
      id="who-we-help"
      className="relative w-full bg-dark text-cream py-16 sm:py-24 px-6 sm:px-12 lg:px-24 border-t border-white/[0.06] overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-rose/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold tracking-[0.24em] uppercase text-rose mb-3">
              <span className="w-8 h-[1px] bg-rose" />
              <span>WHO WE HELP</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-[-0.03em] text-cream leading-[1.08]">
              TAILORED FOR <br />
              <span className="font-semibold text-white">COACHES &amp; MENTORS.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-cream/70 font-light leading-relaxed">
            Whether you work with enterprise executives, private 1-on-1 clients, or group
            cohorts—we build platforms calibrated to how your dream clients make buying decisions.
          </p>
        </div>

        {/* 5-Category Niche Callout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coachCategories.map((niche, idx) => {
            const Icon = niche.icon;
            return (
              <div
                key={niche.category}
                className={`niche-card group relative p-8 sm:p-9 rounded-[28px] border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/[0.2] transition-all duration-300 flex flex-col justify-between ${
                  idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div>
                  {/* Top row: Icon & Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-2xl bg-rose/10 border border-rose/30 flex items-center justify-center text-rose group-hover:bg-rose group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-cream/40 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.06]">
                      {niche.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 tracking-tight">
                    {niche.category}
                  </h3>

                  {/* Outcome */}
                  <p className="text-sm text-cream/70 leading-relaxed font-light mb-6">
                    {niche.outcome}
                  </p>
                </div>

                {/* Bottom interactive link */}
                <div className="pt-5 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-rose">
                    Positioning Sprint
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-cream/40 group-hover:text-rose group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </div>
            );
          })}

          {/* 6th Tile: Direct Invitation Card */}
          <div className="niche-card p-8 sm:p-9 rounded-[28px] border border-rose/30 bg-gradient-to-br from-rose/10 via-dark-surface to-dark-surface flex flex-col justify-between">
            <div>
              <span className="inline-block text-[10px] font-mono tracking-[0.2em] uppercase text-rose mb-4 font-semibold">
                YOUR NICHE NOT LISTED?
              </span>
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 tracking-tight">
                Consultants &amp; Advisory Firms
              </h3>
              <p className="text-sm text-cream/75 leading-relaxed font-light mb-6">
                We also engineer high-authority digital platforms for keynote speakers, corporate advisors, and boutique consulting practices.
              </p>
            </div>

            <a
              href={siteConfig.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-rose hover:bg-rose/90 text-white text-xs font-semibold tracking-[0.16em] uppercase transition-all shadow-[0_4px_20px_rgba(224,40,79,0.35)]"
            >
              <span>INQUIRE FOR YOUR PRACTICE</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
