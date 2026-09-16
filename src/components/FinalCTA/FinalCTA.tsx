"use client";

import React, { useState } from "react";
import { ArrowUpRight, Mail, CheckCircle2, Copy } from "lucide-react";
import { siteConfig } from "@/data/site";
import { GlassCard } from "@/components/Common/GlassCard";

export function FinalCTA() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-dark text-cream py-16 sm:py-24 px-6 sm:px-12 lg:px-24 border-t border-white/[0.06] overflow-hidden"
    >
      {/* Background cinematic radial atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-rose/10 rounded-full blur-[220px] pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full relative z-10 flex flex-col items-center text-center">
        {/* Top small label */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.14] text-[11px] font-semibold tracking-[0.2em] uppercase text-rose mb-6 sm:mb-8 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-rose" />
          <span>AVAILABLE FOR SELECTED COACHES &amp; MENTORS</span>
        </div>

        {/* Headlines */}
        <p className="text-xl sm:text-2xl font-light text-cream/70 tracking-tight mb-3">
          READY TO COMMAND AUTHORITY IN YOUR NICHE?
        </p>

        <h2 className="text-5xl sm:text-7xl md:text-8xl font-extralight tracking-[-0.04em] leading-[1.02] text-cream mb-8 sm:mb-10">
          LET&apos;S BUILD YOUR <br />
          <span className="font-semibold text-white">24/7 SALES ENGINE.</span>
        </h2>

        {/* Glassmorphic Action Card */}
        <GlassCard className="w-full max-w-xl p-6 sm:p-10 mb-6 sm:mb-8">
          <p className="text-sm sm:text-base text-cream/80 font-light leading-relaxed mb-8 max-w-md mx-auto">
            Ready to turn your coaching expertise into a high-converting brand identity
            and digital platform? Schedule a complimentary strategy alignment call.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.dispatchEvent(new CustomEvent("open-intake-modal"));
                }
              }}
              data-cursor-text="BOOK"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-rose hover:bg-rose/90 text-white text-xs sm:text-sm font-semibold tracking-[0.16em] uppercase transition-all duration-300 shadow-[0_4px_24px_rgba(224,40,79,0.4)] hover:shadow-[0_6px_32px_rgba(224,40,79,0.55)] active:scale-[0.98]"
            >
              <span>BOOK STRATEGY CALL</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <button
              onClick={copyEmail}
              data-cursor-text="COPY"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-white/[0.2] hover:border-white/[0.45] bg-white/[0.04] hover:bg-white/[0.1] text-cream text-xs sm:text-sm font-medium tracking-[0.16em] uppercase transition-all duration-300 backdrop-blur-md active:scale-[0.98]"
            >
              {copied ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>EMAIL COPIED</span>
                </>
              ) : (
                <>
                  <Mail className="w-4 h-4 text-cream/70" />
                  <span>EMAIL ME</span>
                </>
              )}
            </button>
          </div>

          <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center justify-center gap-2 text-xs font-mono text-cream/50">
            <span>DIRECT INBOX:</span>
            <span className="text-cream/90">{siteConfig.email}</span>
          </div>
        </GlassCard>

        {/* Availability footnote */}
        <div className="flex items-center gap-2 text-xs font-medium tracking-widest text-cream/50 uppercase">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Currently accepting coaching &amp; mentor collaborations</span>
        </div>
      </div>
    </section>
  );
}
