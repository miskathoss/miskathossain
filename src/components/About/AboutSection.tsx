"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteConfig } from "@/data/site";
import { ArrowUpRight, MapPin, Globe } from "lucide-react";

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-reveal",
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
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

  return (
    <section
      ref={containerRef}
      id="about-miskat"
      className="relative w-full bg-dark text-cream py-32 sm:py-48 px-6 sm:px-12 lg:px-24 border-t border-white/[0.06] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold tracking-[0.24em] uppercase text-rose mb-16 sm:mb-24">
          <span className="w-8 h-[1px] bg-rose" />
          <span>ABOUT MISKAT</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Authentic Portrait Visual */}
          <div className="lg:col-span-5 about-reveal">
            <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden border border-white/[0.14] bg-dark-surface shadow-[0_20px_50px_rgba(0,0,0,0.6)] aspect-[4/5] w-full max-w-md mx-auto">
              <Image
                src="/assets/images/miskat-portrait.jpg"
                alt="Miskat Hossain — Brand & Web Designer"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 450px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent pointer-events-none" />

              {/* Bottom Badge inside portrait */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl backdrop-blur-xl bg-dark/60 border border-white/[0.12] text-xs text-cream flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-rose" />
                  <span className="font-medium tracking-wide">Miskat Hossain</span>
                </div>
                <span className="text-cream/60 font-mono text-[11px]">Designer</span>
              </div>
            </div>
          </div>

          {/* Editorial Content */}
          <div className="lg:col-span-7 flex flex-col justify-center about-reveal">
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-[-0.04em] text-cream mb-8 sm:mb-12 leading-[1.05]">
              I&apos;M <span className="font-semibold text-white">MISKAT.</span>
            </h2>

            {/* Exactly specified copy */}
            <div className="space-y-6 text-base sm:text-xl font-light text-cream/80 leading-relaxed max-w-2xl mb-10 sm:mb-12">
              <p>
                I&apos;m a designer focused on brand identity, web design and
                digital experiences.
              </p>
              <p>
                I enjoy taking complicated ideas and turning them into something
                clear, distinctive and useful.
              </p>
              <p className="text-white font-normal">
                I work with people and businesses who care about how they show up
                in the world.
              </p>
            </div>

            {/* Location & Global Delivery Status */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 border-y border-white/[0.08] py-6 mb-10 text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-cream/90 font-medium tracking-wider uppercase">
                <MapPin className="w-4 h-4 text-rose" />
                <span>BASED IN BANGLADESH</span>
              </div>
              <span className="w-1.5 h-1.5 rounded-full bg-white/20 hidden sm:inline-block" />
              <div className="flex items-center gap-2 text-cream/90 font-medium tracking-wider uppercase">
                <Globe className="w-4 h-4 text-rose" />
                <span>WORKING GLOBALLY</span>
              </div>
            </div>

            {/* Social Channels */}
            <div className="flex items-center gap-6 text-xs sm:text-sm font-semibold tracking-[0.16em] uppercase">
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-text="LINKEDIN"
                className="group flex items-center gap-1.5 text-cream/70 hover:text-rose transition-colors"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href={siteConfig.socials.dribbble}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-text="DRIBBLE"
                className="group flex items-center gap-1.5 text-cream/70 hover:text-rose transition-colors"
              >
                <span>Dribbble</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href={siteConfig.socials.behance}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-text="BEHANCE"
                className="group flex items-center gap-1.5 text-cream/70 hover:text-rose transition-colors"
              >
                <span>Behance</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
