"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { ArrowUp, ArrowUpRight } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-dark-pure text-cream border-t border-white/[0.08] px-6 sm:px-12 lg:px-24 py-16 sm:py-24 select-none">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 sm:gap-16 mb-16 sm:mb-20">
          {/* Col 1: Identity & Roles */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div>
              <Link
                href="/"
                className="group flex flex-col items-start gap-4 mb-5 inline-flex"
                data-cursor-text="HOME"
              >
                <div className="relative shrink-0 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src="/assets/images/miskat-logo.png"
                    alt="Miskat Hossain Logo"
                    width={56}
                    height={36}
                    className="object-contain w-auto h-8 sm:h-9"
                  />
                </div>
                <span className="text-2xl sm:text-3xl font-light tracking-[-0.02em] text-white group-hover:text-rose transition-colors">
                  MISKAT <span className="font-semibold">HOSSAIN</span>
                </span>
              </Link>
              <div className="flex flex-col gap-1 text-sm text-cream/70 font-light mt-2">
                <span>Brand Designer</span>
                <span>Web Designer</span>
                <span className="text-rose">Visual Thinker</span>
              </div>
            </div>

            <div className="text-xs text-cream/40 mt-8 sm:mt-12 font-mono">
              {siteConfig.location}
            </div>
          </div>

          {/* Col 2: Navigation shortcuts */}
          <div className="md:col-span-3">
            <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-cream/40 mb-6">
              NAVIGATION
            </div>
            <div className="flex flex-col gap-3 text-xs sm:text-sm font-medium tracking-wider uppercase text-cream/75">
              <a href="#work" className="hover:text-rose transition-colors">
                Work
              </a>
              <a href="#about" className="hover:text-rose transition-colors">
                About
              </a>
              <a href="#services" className="hover:text-rose transition-colors">
                Services
              </a>
              <a href="#process" className="hover:text-rose transition-colors">
                Process
              </a>
              <a href="#contact" className="hover:text-rose transition-colors">
                Let&apos;s Talk
              </a>
            </div>
          </div>

          {/* Col 3: Social Links */}
          <div className="md:col-span-3">
            <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-cream/40 mb-6">
              CONNECT
            </div>
            <div className="flex flex-col gap-3.5 text-xs sm:text-sm font-medium tracking-wider uppercase text-cream/80">
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between hover:text-rose transition-colors border-b border-white/[0.06] pb-2"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-cream/40 group-hover:text-rose" />
              </a>
              <a
                href={siteConfig.socials.dribbble}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between hover:text-rose transition-colors border-b border-white/[0.06] pb-2"
              >
                <span>Dribbble</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-cream/40 group-hover:text-rose" />
              </a>
              <a
                href={siteConfig.socials.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between hover:text-rose transition-colors border-b border-white/[0.06] pb-2"
              >
                <span>Behance</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-cream/40 group-hover:text-rose" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/[0.08] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/40">
          <div className="font-mono">
            &copy; 2026 Miskat Hossain. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="group flex items-center gap-2 text-cream/60 hover:text-rose transition-colors font-medium tracking-wider uppercase"
          >
            <span>Back to top</span>
            <span className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center group-hover:border-rose transition-colors">
              <ArrowUp className="w-3 h-3" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
