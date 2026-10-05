"use client";

import React, { useState } from "react";
import { StarryBackground } from "./components/StarryBackground";
import { CountdownEnvelope } from "./components/CountdownEnvelope";
import { CakeBlowSection } from "./components/CakeBlowSection";
import { PhotoGallery } from "./components/PhotoGallery";
import { ScratchCards } from "./components/ScratchCards";
import { LoveLetter } from "./components/LoveLetter";
import { LanternWish } from "./components/LanternWish";
import { soundEngine } from "./components/AudioEngine";
import { Volume2, VolumeX, Heart, Sparkles } from "lucide-react";

export function HbdClient() {
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  const toggleSound = () => {
    const newState = soundEngine.toggleMusic();
    setIsPlayingMusic(newState);
  };

  const scrollTo = (id: string) => {
    soundEngine.playChime();
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen text-slate-100 overflow-x-hidden selection:bg-rose-500 selection:text-white">
      {/* Keyframe animations */}
      <style>{`
        @keyframes lanternFloat {
          0% {
            transform: translateY(0) scale(0.9) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(-110vh) scale(0.3) rotate(8deg);
            opacity: 0;
          }
        }
        .animate-lantern-float {
          animation: lanternFloat 12s cubic-bezier(0.2, 0.8, 0.4, 1) forwards;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      {/* Dynamic Starry & Bokeh Canvas Background */}
      <StarryBackground />

      {/* Floating Sticky Navigation Bar */}
      <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <nav className="pointer-events-auto flex items-center justify-between gap-3 px-4 sm:px-6 py-2.5 rounded-full bg-slate-950/80 border border-white/10 backdrop-blur-xl shadow-[0_10px_35px_rgba(0,0,0,0.6)] max-w-4xl w-full">
          {/* Logo / Title */}
          <button
            onClick={() => scrollTo("hero")}
            className="flex items-center gap-2 text-xs sm:text-sm font-serif font-bold text-amber-200 hover:text-white transition-colors"
          >
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500 animate-pulse" />
            <span className="hidden xs:inline">Rimty &amp; Miskat</span>
          </button>

          {/* Step-by-Step Links */}
          <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto py-1">
            {[
              { id: "cake", label: "🎂 Cake" },
              { id: "memories", label: "📸 Memories" },
              { id: "gifts", label: "🎟️ Gifts" },
              { id: "letter", label: "💌 Letter" },
              { id: "lantern", label: "🏮 Lantern" },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-all whitespace-nowrap"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Floating Audio Button */}
          <button
            onClick={toggleSound}
            className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-rose-600/30 to-pink-600/30 border border-rose-500/40 text-rose-200 text-[11px] sm:text-xs backdrop-blur-md shadow-[0_0_15px_rgba(244,63,94,0.3)] hover:scale-105 active:scale-95 transition-all whitespace-nowrap"
            title="Toggle Song"
          >
            {isPlayingMusic ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-rose-400 animate-pulse" />
                <span className="max-w-[110px] sm:max-w-none truncate font-medium">শুভ জন্মদিন রিমতি 🎵</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-slate-400" />
                <span className="font-medium">গান শুনুন 🎵</span>
              </>
            )}
          </button>
        </nav>
      </header>

      {/* Continuous Landing Page Content */}
      <main className="relative z-10 space-y-16 sm:space-y-28">
        {/* ========================================================================= */}
        {/* HERO SECTION: Wax-Sealed Welcome & Live Countdown                        */}
        {/* ========================================================================= */}
        <div id="hero">
          <CountdownEnvelope
            onUnlock={() => {
              setIsPlayingMusic(true);
            }}
          />
        </div>

        {/* ========================================================================= */}
        {/* CHAPTER 01: Interactive 3D Cake & Candle Blowing                          */}
        {/* ========================================================================= */}
        <section id="cake" className="relative pt-12 scroll-mt-24">
          <div className="flex justify-center mb-4">
            <span className="px-3 py-1 rounded-full bg-rose-500/10 border border-rose-400/20 text-rose-300 text-xs font-mono uppercase tracking-widest">
              Chapter 01 • Make A Wish
            </span>
          </div>
          <CakeBlowSection
            onCandlesBlown={() => {
              // Confetti and celebration
            }}
          />
        </section>

        {/* Elegant Section Divider */}
        <div className="flex items-center justify-center gap-4 max-w-xl mx-auto px-4 opacity-40">
          <div className="h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent flex-1" />
          <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
          <div className="h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent flex-1" />
        </div>

        {/* ========================================================================= */}
        {/* CHAPTER 02: The Constellation of Our Memories (Polaroid Cards)            */}
        {/* ========================================================================= */}
        <section id="memories" className="relative pt-6 scroll-mt-24">
          <div className="flex justify-center mb-4">
            <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-xs font-mono uppercase tracking-widest">
              Chapter 02 • Our Journey
            </span>
          </div>
          <PhotoGallery />
        </section>

        {/* Elegant Section Divider */}
        <div className="flex items-center justify-center gap-4 max-w-xl mx-auto px-4 opacity-40">
          <div className="h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent flex-1" />
          <Sparkles className="w-4 h-4 text-amber-300" />
          <div className="h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent flex-1" />
        </div>

        {/* ========================================================================= */}
        {/* CHAPTER 03: Golden Love Coupons (Scratch-Off Cards)                       */}
        {/* ========================================================================= */}
        <section id="gifts" className="relative pt-6 scroll-mt-24">
          <div className="flex justify-center mb-4">
            <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/20 text-amber-300 text-xs font-mono uppercase tracking-widest">
              Chapter 03 • Birthday Gifts
            </span>
          </div>
          <ScratchCards />
        </section>

        {/* Elegant Section Divider */}
        <div className="flex items-center justify-center gap-4 max-w-xl mx-auto px-4 opacity-40">
          <div className="h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent flex-1" />
          <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
          <div className="h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent flex-1" />
        </div>

        {/* ========================================================================= */}
        {/* CHAPTER 04: A Letter To My Wife & Custom Song Lyrics Tribute              */}
        {/* ========================================================================= */}
        <section id="letter" className="relative pt-6 scroll-mt-24">
          <div className="flex justify-center mb-4">
            <span className="px-3 py-1 rounded-full bg-rose-500/10 border border-rose-400/20 text-rose-300 text-xs font-mono uppercase tracking-widest">
              Chapter 04 • From My Heart
            </span>
          </div>
          <LoveLetter />
        </section>

        {/* Elegant Section Divider */}
        <div className="flex items-center justify-center gap-4 max-w-xl mx-auto px-4 opacity-40">
          <div className="h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent flex-1" />
          <Sparkles className="w-4 h-4 text-amber-300" />
          <div className="h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent flex-1" />
        </div>

        {/* ========================================================================= */}
        {/* CHAPTER 05: Celestial Sky Lantern Release (Finale)                        */}
        {/* ========================================================================= */}
        <section id="lantern" className="relative pt-6 pb-20 scroll-mt-24">
          <div className="flex justify-center mb-4">
            <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-400/20 text-indigo-300 text-xs font-mono uppercase tracking-widest">
              Chapter 05 • Celestial Finale
            </span>
          </div>
          <LanternWish />
        </section>
      </main>
    </div>
  );
}
