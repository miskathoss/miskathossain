"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Menu, X } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getHref = (href: string) => {
    if (pathname && pathname !== "/" && href.startsWith("#")) {
      return `/${href}`;
    }
    return href;
  };

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
          className="group flex items-center gap-2.5 text-cream font-medium tracking-[0.14em] text-xs sm:text-sm uppercase transition-colors"
          data-cursor-text="HOME"
        >
          <div className="relative w-7 h-5 sm:w-8 sm:h-6 shrink-0 transition-transform duration-300 group-hover:scale-105 flex items-center">
            <Image
              src="/assets/images/miskat-logo.png"
              alt="Miskat Hossain Logo"
              width={36}
              height={24}
              className="object-contain w-auto h-5 sm:h-5.5"
              priority
            />
          </div>
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
              <button
                key={item.label}
                onClick={() => {
                  if (typeof window !== "undefined") {
                    window.dispatchEvent(new CustomEvent("open-intake-modal"));
                  }
                }}
                data-cursor-text="BOOK"
                className="group relative inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-cream text-xs font-semibold tracking-[0.14em] uppercase overflow-hidden border border-white/[0.18] bg-white/[0.06] hover:bg-rose/90 hover:border-rose transition-all duration-300 backdrop-blur-md shadow-sm"
              >
                <span>{item.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            ) : (
              <a
                key={item.label}
                href={getHref(item.href)}
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
          "fixed inset-0 bg-dark-pure/98 backdrop-blur-3xl z-[100] md:hidden flex flex-col justify-between px-6 sm:px-8 pt-6 pb-12 transition-all duration-500 ease-in-out pointer-events-auto",
          mobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        )}
      >
        {/* Mobile Menu Top Header with prominent Close Button */}
        <div className="flex items-center justify-between w-full pb-5 border-b border-white/[0.08]">
          <div className="flex items-center gap-2">
            <Image
              src="/assets/images/miskat-logo.png"
              alt="Miskat Hossain Logo"
              width={28}
              height={18}
              className="object-contain w-auto h-4"
            />
            <span className="font-semibold tracking-[0.18em] text-cream text-xs uppercase">
              MISKAT
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-rose inline-block" />
          </div>

          <button
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close navigation menu"
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/[0.2] bg-white/[0.08] hover:bg-rose hover:border-rose text-cream hover:text-white text-xs font-semibold tracking-[0.18em] uppercase transition-all duration-300 backdrop-blur-md shadow-md active:scale-95"
          >
            <span>CLOSE</span>
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-8 flex flex-col gap-6">
          <div className="text-[10px] uppercase tracking-[0.2em] text-cream/40 font-medium">
            Menu Navigation
          </div>
          {siteConfig.navItems.map((item, idx) =>
            item.isCta ? (
              <button
                key={item.label}
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (typeof window !== "undefined") {
                    window.dispatchEvent(new CustomEvent("open-intake-modal"));
                  }
                }}
                className="text-2xl font-light tracking-wider text-rose hover:text-white transition-colors flex items-center justify-between border-b border-white/[0.08] pb-4 text-left w-full"
                style={{
                  transitionDelay: `${idx * 40}ms`,
                }}
              >
                <span>{item.label}</span>
                <ArrowUpRight className="w-5 h-5 text-rose" />
              </button>
            ) : (
              <a
                key={item.label}
                href={getHref(item.href)}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-light tracking-wider text-cream hover:text-rose transition-colors flex items-center justify-between border-b border-white/[0.08] pb-4"
                style={{
                  transitionDelay: `${idx * 40}ms`,
                }}
              >
                <span>{item.label}</span>
                <ArrowUpRight className="w-5 h-5 text-cream/40" />
              </a>
            )
          )}
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
