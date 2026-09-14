"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  CheckCircle2,
  ExternalLink,
  X,
  Linkedin,
  Sparkles,
  Quote,
  Pause,
  Play,
  LayoutGrid,
  Scroll,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  screenshot: string;
  role: string;
  company: string;
  fullTitle: string;
  relationship: string;
  date: string;
  tag: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: "carolyn-greiner",
    name: "Carolyn Greiner",
    avatar: "/testimonials/carolyn-greiner-avatar.png",
    screenshot: "/testimonials/carolyn-greiner.png",
    role: "Program Lead, Electrical Product Training",
    company: "Southwire Company",
    fullTitle:
      "Program Lead, Electrical Product Training @ Southwire Company | MS, Instructional Systems",
    relationship: "Carolyn was Miskat’s client",
    date: "July 21, 2026",
    tag: "Website Project",
    quote:
      "I had the pleasure of working with Miskat Hossain on a website project, and he went above and beyond at every step. His professionalism, creativity, and attention to detail made a real difference in the final result. If you're looking for someone to help with your website, I highly recommend working with Miskat — you won't be disappointed.",
  },
  {
    id: "roy-garcia",
    name: "Roy García",
    avatar: "/testimonials/roy-garcia-avatar.png",
    screenshot: "/testimonials/roy-garcia.png",
    role: "Category Insights & Analytics Leader",
    company: "Retail Data Storyteller",
    fullTitle:
      "Category Insights & Advanced Analytics Leader | Retail Data Storyteller | Python, R, Power BI",
    relationship: "Roy was Miskat’s client",
    date: "November 12, 2025",
    tag: "Professional Logo & Brand",
    quote:
      "I had an excellent experience working with Miskat on my professional logo. From the start, he truly listened to my feedback and made sure to understand my vision. Miskat proposed multiple iterations, each improving on the last, and was always diligent about meeting deadlines. His attention to detail and commitment to delivering exactly what I wanted was impressive. In the end, the final design perfectly captured what I was looking for. I highly recommend Miskat for anyone seeking a creative, reliable, and collaborative designer.",
  },
  {
    id: "linette-chaljub",
    name: "Linette Chaljub",
    avatar: "/testimonials/linette-chaljub-avatar.png",
    screenshot: "/testimonials/linette-chaljub.png",
    role: "Sr. Instructional Designer",
    company: "Audible",
    fullTitle:
      "Sr. Instructional Designer @ Audible | Fueled by Impact | Systems Thinker",
    relationship: "Linette was Miskat’s client",
    date: "September 19, 2025",
    tag: "Personal Brand Identity",
    quote:
      "I'm delighted to recommend Miskat after he designed a beautiful personal logo for me. Not only is he a talented designer, but he is also a true professional, easy to communicate with, punctual, and highly attuned to client needs. The entire process was seamless, and I am extremely satisfied with the final product. I highly recommend him and would gladly work with him again.",
  },
  {
    id: "laine-istvan",
    name: "Laine Istvan",
    avatar: "/testimonials/laine-istvan-avatar.png",
    screenshot: "/testimonials/laine-istvan.png",
    role: "Founder & Strategy Consultant",
    company: "Sage LXD",
    fullTitle:
      "Founder, Sage LXD | Human-Centered Strategy Consultant | Learning, Leadership & Human Development",
    relationship: "Laine was Miskat’s client",
    date: "August 23, 2023",
    tag: "Brand Identity (3 Logos)",
    quote:
      "Miskat created 3 logos for me and each one perfectly captured the look and feel of my brands. He listened to my needs and provided logo concepts for me to review. Each creative concept was well-planned, visually appealing, and professional. Miskat was very accommodating and easy to work with. I would absolutely recommend his services to anyone needing a professionally designed logo!",
  },
];

// Column splits for desktop 2-column vertical stream
const col1 = [testimonials[0], testimonials[1]]; // Carolyn, Roy
const col2 = [testimonials[2], testimonials[3]]; // Linette, Laine

function TestimonialCard({
  item,
  onViewProof,
}: {
  item: Testimonial;
  onViewProof: (item: Testimonial) => void;
}) {
  return (
    <div className="relative flex flex-col justify-between rounded-[26px] sm:rounded-[30px] border border-white/[0.08] bg-[#121316]/90 hover:bg-[#16181D] hover:border-white/[0.18] p-7 sm:p-8 transition-all duration-300 backdrop-blur-md group shadow-[0_8px_30px_rgba(0,0,0,0.35)] shrink-0 select-none">
      {/* Subtle top-right decorative quote */}
      <div className="absolute top-6 right-6 text-white/[0.05] group-hover:text-rose/20 transition-colors pointer-events-none">
        <Quote className="w-8 h-8 stroke-[1.5]" />
      </div>

      <div>
        {/* Header info */}
        <div className="flex items-start gap-3.5 mb-5">
          {/* Avatar */}
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border border-white/[0.16] bg-dark-surface shrink-0 shadow-md ring-2 ring-white/[0.04]">
            <Image
              src={item.avatar}
              alt={item.name}
              fill
              className="object-cover"
              sizes="56px"
            />
          </div>

          {/* Client name & position */}
          <div className="min-w-0 pr-6">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-base sm:text-lg font-medium text-white tracking-tight">
                {item.name}
              </h3>
              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-[#0A66C2]/15 text-[#70B5F9] text-[10px] font-medium tracking-wider uppercase border border-[#0A66C2]/30">
                <Linkedin className="w-2.5 h-2.5" /> 1st
              </span>
            </div>

            <p className="text-xs text-cream/70 mt-1 font-light leading-snug">
              <span className="text-white/90 font-normal">{item.role}</span>{" "}
              <span className="text-rose font-medium">@ {item.company}</span>
            </p>

            <div className="flex items-center gap-2 mt-1.5 text-[11px] font-mono text-cream/40">
              <span>{item.relationship}</span>
              <span>•</span>
              <span>{item.date}</span>
            </div>
          </div>
        </div>

        {/* Project Tag */}
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-medium text-cream/80 mb-4">
          <Sparkles className="w-3 h-3 text-rose" />
          <span>Scope: {item.tag}</span>
        </div>

        {/* Recommendation Quote */}
        <blockquote className="text-cream/90 text-xs sm:text-sm leading-relaxed font-light mb-6">
          &ldquo;{item.quote}&rdquo;
        </blockquote>
      </div>

      {/* Card Footer: Verified Proof Button */}
      <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-400">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span className="tracking-wide">Verified Endorsement</span>
        </div>

        <button
          onClick={() => onViewProof(item)}
          type="button"
          className="inline-flex items-center gap-1.5 text-[11px] font-medium text-cream/75 hover:text-white px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/[0.08] hover:border-white/[0.2] transition-all cursor-pointer"
        >
          <span>View Proof</span>
          <ExternalLink className="w-3 h-3 text-rose" />
        </button>
      </div>
    </div>
  );
}

export function Testimonials() {
  const [activeProof, setActiveProof] = useState<Testimonial | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [viewMode, setViewMode] = useState<"stream" | "grid">("stream");

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveProof(null);
      }
    };
    if (activeProof) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [activeProof]);

  return (
    <section
      id="testimonials"
      className="relative w-full bg-dark-pure text-cream py-24 sm:py-36 px-6 sm:px-12 lg:px-24 border-t border-white/[0.06] overflow-hidden"
    >
      {/* Subtle background ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-rose/[0.04] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[250px] bg-sky-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2.5 text-xs font-semibold tracking-[0.24em] uppercase text-rose mb-4">
              <span className="w-8 h-[1px] bg-rose" />
              <span>TESTIMONIALS & ENDORSEMENTS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-[-0.03em] text-cream leading-[1.1]">
              TRUSTED BY FOUNDERS <br />
              <span className="font-semibold text-white">
                & INDUSTRY LEADERS.
              </span>
            </h2>
          </div>

          {/* Controls & Badges */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Verified LinkedIn Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md text-xs tracking-wide text-cream/80">
              <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
              <span className="font-medium text-white">Verified Recommendations</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            </div>

            {/* Stream View: Pause / Play Toggle Button */}
            {viewMode === "stream" && (
              <button
                type="button"
                onClick={() => setIsPaused(!isPaused)}
                aria-label={isPaused ? "Resume vertical scroll" : "Pause vertical scroll"}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.2] text-xs font-medium text-cream/80 transition-all cursor-pointer"
              >
                {isPaused ? (
                  <>
                    <Play className="w-3 h-3 text-rose fill-rose" />
                    <span>Resume Scroll</span>
                  </>
                ) : (
                  <>
                    <Pause className="w-3 h-3 text-rose" />
                    <span>Pause Scroll</span>
                  </>
                )}
              </button>
            )}

            {/* Layout Mode Toggle (Vertical Stream / Grid) */}
            <button
              type="button"
              onClick={() => setViewMode(viewMode === "stream" ? "grid" : "stream")}
              aria-label="Toggle layout view"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.2] text-xs font-medium text-cream/80 transition-all cursor-pointer"
            >
              {viewMode === "stream" ? (
                <>
                  <LayoutGrid className="w-3 h-3 text-cream/70" />
                  <span className="hidden sm:inline">Grid View</span>
                </>
              ) : (
                <>
                  <Scroll className="w-3 h-3 text-rose" />
                  <span className="hidden sm:inline">Vertical Stream</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* ======================================================== */}
        {/* VERTICAL SCROLLING STREAM MODE (Default)                  */}
        {/* ======================================================== */}
        {viewMode === "stream" && (
          <div
            className="relative w-full h-[580px] sm:h-[660px] overflow-hidden group"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            {/* Top Fade Vignette */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-28 sm:h-36 bg-gradient-to-b from-dark-pure via-dark-pure/90 to-transparent z-20" />

            {/* Bottom Fade Vignette */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 sm:h-36 bg-gradient-to-t from-dark-pure via-dark-pure/90 to-transparent z-20" />

            {/* Desktop: 2 Parallel Vertical Scrolling Tracks */}
            <div className="hidden md:grid grid-cols-2 gap-6 h-full">
              {/* Column 1 Track (Carolyn & Roy) */}
              <div className="relative overflow-hidden flex flex-col gap-6">
                <div
                  className="flex flex-col gap-6 shrink-0 animate-marquee-vertical"
                  style={{ animationPlayState: isPaused ? "paused" : "running" }}
                >
                  {col1.map((item) => (
                    <TestimonialCard
                      key={`col1-a-${item.id}`}
                      item={item}
                      onViewProof={setActiveProof}
                    />
                  ))}
                </div>
                <div
                  aria-hidden="true"
                  className="flex flex-col gap-6 shrink-0 animate-marquee-vertical"
                  style={{ animationPlayState: isPaused ? "paused" : "running" }}
                >
                  {col1.map((item) => (
                    <TestimonialCard
                      key={`col1-b-${item.id}`}
                      item={item}
                      onViewProof={setActiveProof}
                    />
                  ))}
                </div>
              </div>

              {/* Column 2 Track (Linette & Laine, delayed phase for organic motion) */}
              <div className="relative overflow-hidden flex flex-col gap-6">
                <div
                  className="flex flex-col gap-6 shrink-0 animate-marquee-vertical-delayed"
                  style={{ animationPlayState: isPaused ? "paused" : "running" }}
                >
                  {col2.map((item) => (
                    <TestimonialCard
                      key={`col2-a-${item.id}`}
                      item={item}
                      onViewProof={setActiveProof}
                    />
                  ))}
                </div>
                <div
                  aria-hidden="true"
                  className="flex flex-col gap-6 shrink-0 animate-marquee-vertical-delayed"
                  style={{ animationPlayState: isPaused ? "paused" : "running" }}
                >
                  {col2.map((item) => (
                    <TestimonialCard
                      key={`col2-b-${item.id}`}
                      item={item}
                      onViewProof={setActiveProof}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile: 1 Seamless Vertical Scrolling Column (All 4 Testimonials) */}
            <div className="md:hidden relative overflow-hidden flex flex-col gap-6 h-full">
              <div
                className="flex flex-col gap-6 shrink-0 animate-marquee-vertical-mobile"
                style={{ animationPlayState: isPaused ? "paused" : "running" }}
              >
                {testimonials.map((item) => (
                  <TestimonialCard
                    key={`mob-a-${item.id}`}
                    item={item}
                    onViewProof={setActiveProof}
                  />
                ))}
              </div>
              <div
                aria-hidden="true"
                className="flex flex-col gap-6 shrink-0 animate-marquee-vertical-mobile"
                style={{ animationPlayState: isPaused ? "paused" : "running" }}
              >
                {testimonials.map((item) => (
                  <TestimonialCard
                    key={`mob-b-${item.id}`}
                    item={item}
                    onViewProof={setActiveProof}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* STATIC GRID MODE (Accessible via toggle)                 */}
        {/* ======================================================== */}
        {viewMode === "grid" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-300">
            {testimonials.map((item) => (
              <TestimonialCard
                key={`grid-${item.id}`}
                item={item}
                onViewProof={setActiveProof}
              />
            ))}
          </div>
        )}

        {/* Stream Hint & LinkedIn Profile Link */}
        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/50">
          <span className="flex items-center gap-2">
            <span className={cn(
              "w-2 h-2 rounded-full",
              isPaused ? "bg-amber-400" : "bg-emerald-400 animate-pulse"
            )} />
            {isPaused
              ? "Scrolling paused — hover off or tap Resume to resume"
              : "Continuous vertical stream — hover or touch any card to pause"}
          </span>

          <a
            href="https://www.linkedin.com/in/miskathossain/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream hover:text-rose underline underline-offset-4 transition-colors font-medium flex items-center gap-1"
          >
            <span>View all reviews on LinkedIn</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Proof Lightbox Modal */}
      {activeProof && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveProof(null)}
        >
          <div
            className="relative w-full max-w-3xl rounded-2xl sm:rounded-3xl bg-[#111317] border border-white/[0.15] shadow-2xl p-6 sm:p-8 overflow-hidden text-cream"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#0A66C2]/20 border border-[#0A66C2]/40 flex items-center justify-center">
                  <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-medium text-white">
                    {activeProof.name} &bull; LinkedIn Recommendation
                  </h4>
                  <p className="text-[11px] text-cream/50 font-mono">
                    {activeProof.relationship} ({activeProof.date})
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setActiveProof(null)}
                aria-label="Close modal"
                className="w-9 h-9 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] text-cream hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Authentic Screenshot Image */}
            <div className="relative w-full rounded-xl overflow-hidden border border-white/[0.08] bg-white/[0.02]">
              <Image
                src={activeProof.screenshot}
                alt={`LinkedIn Recommendation by ${activeProof.name}`}
                width={1200}
                height={600}
                className="w-full h-auto object-contain"
                priority
              />
            </div>

            {/* Modal Footer */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream/60">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Verified authentic client endorsement via LinkedIn
              </span>
              <a
                href="https://www.linkedin.com/in/miskathossain/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white text-rose transition-colors flex items-center gap-1"
              >
                <span>Check profile</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
