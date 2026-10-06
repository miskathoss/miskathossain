"use client";

import React, { useState } from "react";
import { StarryBackground } from "./components/StarryBackground";
import { CountdownEnvelope } from "./components/CountdownEnvelope";
import { CakeBlowSection } from "./components/CakeBlowSection";
import { PhotoGallery } from "./components/PhotoGallery";
import { ScratchCards } from "./components/ScratchCards";
import { LoveLetter } from "./components/LoveLetter";
import { MemoryVideoSection } from "./components/MemoryVideoSection";
import { LanternWish } from "./components/LanternWish";
import { soundEngine } from "./components/AudioEngine";
import { Volume2, VolumeX, Heart, Sparkles } from "lucide-react";

export function HbdClient() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  const toggleSound = () => {
    const newState = soundEngine.toggleMusic();
    setIsPlayingMusic(newState);
  };

  const handleUnlock = () => {
    setIsUnlocked(true);
    setIsPlayingMusic(true);
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

      {/* Floating Audio Control (No header/menu, just discreet sound pill) */}
      <div className="fixed top-5 right-5 z-50">
        <button
          onClick={toggleSound}
          className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-900/80 border border-rose-500/30 text-rose-200 text-xs backdrop-blur-md shadow-[0_4px_20px_rgba(244,63,94,0.3)] hover:scale-105 active:scale-95 transition-all"
          title="Toggle Song"
        >
          {isPlayingMusic ? (
            <>
              <Volume2 className="w-4 h-4 text-rose-400 animate-pulse" />
              <span className="hidden sm:inline font-medium">শুভ জন্মদিন রিমতি 🎵</span>
            </>
          ) : (
            <>
              <VolumeX className="w-4 h-4 text-slate-400" />
              <span className="hidden sm:inline font-medium">গান শুনুন 🎵</span>
            </>
          )}
        </button>
      </div>

      {/* Main Container */}
      <main className="relative z-10">
        {/* ========================================================================= */}
        {/* HERO SECTION: Title, Countdown & "Tap to Play Song & Begin Journey" CTA  */}
        {/* ========================================================================= */}
        <div id="hero">
          <CountdownEnvelope onUnlock={handleUnlock} isUnlocked={isUnlocked} />
        </div>

        {/* ========================================================================= */}
        {/* UNLOCKED CHAPTERS: Flowing step by step like a continuous landing page   */}
        {/* ========================================================================= */}
        {isUnlocked && (
          <div className="space-y-16 sm:space-y-28 pb-20 animate-fade-in transition-all duration-700">
            {/* Section 1: Interactive Birthday Cake */}
            <section id="cake" className="relative pt-6 scroll-mt-20">
              <CakeBlowSection onCandlesBlown={() => {}} />
            </section>

            {/* Glowing Romantic Divider */}
            <div className="flex items-center justify-center gap-4 max-w-xl mx-auto px-4 opacity-40">
              <div className="h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent flex-1" />
              <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
              <div className="h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent flex-1" />
            </div>

            {/* Section 2: Polaroid Photo Constellation */}
            <section id="memories" className="relative pt-6 scroll-mt-20">
              <PhotoGallery />
            </section>

            {/* Glowing Romantic Divider */}
            <div className="flex items-center justify-center gap-4 max-w-xl mx-auto px-4 opacity-40">
              <div className="h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent flex-1" />
              <Sparkles className="w-4 h-4 text-amber-300" />
              <div className="h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent flex-1" />
            </div>

            {/* Section 3: Scratch-Off Love Coupons */}
            <section id="gifts" className="relative pt-6 scroll-mt-20">
              <ScratchCards />
            </section>

            {/* Glowing Romantic Divider */}
            <div className="flex items-center justify-center gap-4 max-w-xl mx-auto px-4 opacity-40">
              <div className="h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent flex-1" />
              <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
              <div className="h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent flex-1" />
            </div>

            {/* Section 4: Love Letter & Song Lyrics */}
            <section id="letter" className="relative pt-6 scroll-mt-20">
              <LoveLetter />
            </section>

            {/* Glowing Romantic Divider */}
            <div className="flex items-center justify-center gap-4 max-w-xl mx-auto px-4 opacity-40">
              <div className="h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent flex-1" />
              <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
              <div className="h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent flex-1" />
            </div>

            {/* Section 5: Memory Video Reel */}
            <section id="video" className="relative pt-6 scroll-mt-20">
              <MemoryVideoSection />
            </section>

            {/* Glowing Romantic Divider */}
            <div className="flex items-center justify-center gap-4 max-w-xl mx-auto px-4 opacity-40">
              <div className="h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent flex-1" />
              <Sparkles className="w-4 h-4 text-amber-300" />
              <div className="h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent flex-1" />
            </div>

            {/* Section 6: Sky Lantern Wish Finale */}
            <section id="lantern" className="relative pt-6 scroll-mt-20">
              <LanternWish />
            </section>
          </div>
        )}
      </main>
    </div>
  );
}
