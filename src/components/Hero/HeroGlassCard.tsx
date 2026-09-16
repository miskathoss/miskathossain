"use client";

import React, { forwardRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site";

interface HeroGlassCardProps {
  onExploreClick?: () => void;
  onTalkClick?: () => void;
}

export const HeroGlassCard = forwardRef<HTMLDivElement, HeroGlassCardProps>(
  ({ onExploreClick, onTalkClick }, ref) => {
    return (
      <div
        ref={ref}
        className="w-full max-w-[500px] lg:max-w-[550px] select-none pointer-events-auto"
      >
        <div
          className="relative backdrop-blur-2xl bg-white/[0.08] border border-white/[0.16] rounded-[24px] sm:rounded-[28px] p-5 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-300 before:absolute before:inset-0 before:pointer-events-none before:rounded-[inherit] before:border before:border-white/[0.12] before:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.22)]"
        >
          {/* Subtle radial sheen within card */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/[0.05] rounded-full blur-3xl pointer-events-none" />

          {/* Top meta row: Availability status badge */}
          <div className="flex items-center justify-between mb-5 sm:mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.14] text-[10px] sm:text-[11px] font-medium tracking-[0.16em] uppercase text-cream/90 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose" />
              </span>
              <span>AVAILABLE FOR SELECTED COACHES &amp; MENTORS</span>
            </div>
          </div>

          {/* Small Category Label */}
          <div className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-rose mb-2 sm:mb-3">
            BRAND &amp; WEB STRATEGIST FOR COACHES
          </div>

          {/* Main Name Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extralight tracking-[-0.03em] text-cream leading-[1.08] mb-4 sm:mb-5">
            MISKAT <span className="font-semibold text-white">HOSSAIN</span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-sm sm:text-base text-cream/75 leading-relaxed font-normal mb-6 sm:mb-8 max-w-[440px]">
            I build high-authority brand systems and conversion websites for coaches
            and mentors looking to stand out and attract ideal clients.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-row items-center gap-2.5 sm:gap-3.5 flex-nowrap">
            <a
              href="#work"
              onClick={onExploreClick}
              data-cursor-text="EXPLORE"
              className="group relative inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-5 lg:px-6 py-2.5 sm:py-3 rounded-full text-white text-[11px] sm:text-xs lg:text-sm font-semibold tracking-[0.1em] sm:tracking-[0.14em] uppercase bg-rose hover:bg-rose/90 transition-all duration-300 shadow-[0_4px_20px_rgba(224,40,79,0.35)] hover:shadow-[0_6px_28px_rgba(224,40,79,0.5)] active:scale-[0.98] whitespace-nowrap shrink-0"
            >
              <span>EXPLORE WORK</span>
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <button
              onClick={() => {
                if (onTalkClick) onTalkClick();
                if (typeof window !== "undefined") {
                  window.dispatchEvent(new CustomEvent("open-intake-modal"));
                }
              }}
              data-cursor-text="BOOK"
              className="inline-flex items-center justify-center px-4 sm:px-5 lg:px-6 py-2.5 sm:py-3 rounded-full text-cream hover:text-white text-[11px] sm:text-xs lg:text-sm font-medium tracking-[0.1em] sm:tracking-[0.14em] uppercase border border-white/[0.22] hover:border-white/[0.45] bg-white/[0.04] hover:bg-white/[0.1] transition-all duration-300 backdrop-blur-md active:scale-[0.98] whitespace-nowrap shrink-0"
            >
              BOOK STRATEGY CALL
            </button>
          </div>
        </div>
      </div>
    );
  }
);

HeroGlassCard.displayName = "HeroGlassCard";
