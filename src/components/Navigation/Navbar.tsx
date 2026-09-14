"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-8 pt-4 sm:pt-6 pointer-events-none transition-all duration-500">
      <nav
        aria-label="Main Navigation"
        className={cn(
          "pointer-events-auto flex items-center justify-between w-full max-w-7xl transition-all duration-500",
          scrolled
            ? "px-5 py-3 sm:px-7 sm:py-3.5 rounded-full backdrop-blur-xl bg-dark/60 border border-white/[0.14] shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            : "px-2 sm:px-4 py-2 bg-transparent border-transparent"
        )}
      >
        {/* Left Brand Identifier */}
        <Link
          href="/"
          className="group flex items-center gap-2 text-cream font-medium tracking-[0.14em] text-xs sm:text-sm uppercase transition-colors"
          data-cursor-text="HOME"
        >
          <span className="hidden sm:inline-block font-semibold tracking-[0.18em] text-cream group-hover:text-rose transition-colors duration-300">
            MISKAT HOSSAIN
          </span>
          <span className="sm:hidden font-semibold tracking-[0.2em] text-cream">
            MISKAT
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-rose inline-block" />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-[0.14em] text-cream/70 uppercase">
          {siteConfig.navItems.map((item) =>
            item.isCta ? (
              <a
                key={item.label}
                href={item.href}
                data-cursor-text="TALK"
                className="group relative inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-cream text-xs font-semibold tracking-[0.14em] uppercase overflow-hidden border border-white/[0.18] bg-white/[0.06] hover:bg-rose/90 hover:border-rose transition-all duration-300 backdrop-blur-md shadow-sm"
              >
                <span>{item.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ) : (
              <a
                key={item.label}
                href={item.href}
                data-cursor-text="VIEW"
                className="relative text-cream/75 hover:text-cream transition-colors duration-300 py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-rose hover:after:w-full after:transition-all after:duration-300"
              >
                {item.label}
              </a>
            )
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/[0.16] bg-white/[0.06] text-cream text-[11px] font-medium tracking-[0.16em] uppercase backdrop-blur-md"
          >
            <span>{mobileMenuOpen ? "CLOSE" : "MENU"}</span>
            {mobileMenuOpen ? <X className="w-3.5 h-3.5" /> : <Menu className="w-3.5 h-3.5" />}
          </button>
        </div>
      </nav>

      {/* Clean Fullscreen Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-dark-pure/95 backdrop-blur-2xl z-40 md:hidden flex flex-col justify-between px-8 py-12 transition-all duration-500 ease-in-out pointer-events-auto",
          mobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        )}
      >
        <div className="pt-16 flex flex-col gap-6">
          <div className="text-[10px] uppercase tracking-[0.2em] text-cream/40 font-medium">
            Menu Navigation
          </div>
          {siteConfig.navItems.map((item, idx) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-light tracking-wider text-cream hover:text-rose transition-colors flex items-center justify-between border-b border-white/[0.08] pb-4"
              style={{
                transitionDelay: `${idx * 40}ms`,
              }}
            >
              <span>{item.label}</span>
              <ArrowUpRight className="w-5 h-5 text-cream/40" />
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-3 pt-8 border-t border-white/[0.08]">
          <div className="text-[11px] uppercase tracking-[0.16em] text-cream/50">
            {siteConfig.location}
          </div>
          <div className="flex gap-6 text-xs text-cream/70">
            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cream"
            >
              LinkedIn
            </a>
            <a
              href={siteConfig.socials.dribbble}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cream"
            >
              Dribbble
            </a>
            <a
              href={siteConfig.socials.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cream"
            >
              Behance
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
