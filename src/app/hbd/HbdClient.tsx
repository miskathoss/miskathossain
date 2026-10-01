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
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [activeTab, setActiveTab] = useState<"cake" | "photos" | "coupons" | "letter" | "lantern">("cake");

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
      {/* CSS Keyframe animations */}
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
      `}</style>

      {/* Dynamic Starry & Bokeh Background */}
      <StarryBackground />

      {/* Floating Audio Toggle Button (Always Available) */}
      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={toggleSound}
          className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-900/80 border border-rose-500/30 text-rose-200 text-xs backdrop-blur-md shadow-[0_4px_20px_rgba(244,63,94,0.3)] hover:scale-105 active:scale-95 transition-all"
          title="Toggle Romantic Music"
        >
          {isPlayingMusic ? (
            <>
              <Volume2 className="w-4 h-4 text-rose-400 animate-pulse" />
              <span className="inline-block max-w-[170px] truncate sm:max-w-none">শুভ জন্মদিন রিমতি 🎵</span>
            </>
          ) : (
            <>
              <VolumeX className="w-4 h-4 text-slate-400" />
              <span>গান শুনুন 🎵</span>
            </>
          )}
        </button>
      </div>

      {!isUnlocked ? (
        /* Phase 0: Opening / Countdown / Envelope */
        <CountdownEnvelope onUnlock={handleUnlock} />
      ) : (
        /* Main Birthday Experience */
        <main className="relative z-10 pt-16 pb-24">
          {/* Top Romantic Header */}
          <div className="text-center px-4 mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-rose-400/30 bg-rose-500/10 backdrop-blur-md text-rose-200 text-xs sm:text-sm tracking-widest uppercase mb-3">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>October 8 • Happy Birthday Rimty</span>
              <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-rose-100 to-amber-200 drop-shadow-[0_4px_24px_rgba(255,182,193,0.3)]">
              Happy Birthday, My Queen!
            </h1>
          </div>

          {/* Quick Navigation Tabs */}
          <div className="sticky top-4 z-40 flex justify-center px-4 mb-8">
            <div className="flex items-center gap-1.5 p-1.5 rounded-full bg-slate-950/80 border border-white/10 backdrop-blur-xl shadow-2xl overflow-x-auto max-w-full">
              {[
                { id: "cake", label: "🎂 Cake & Wish" },
                { id: "photos", label: "📸 Memories" },
                { id: "coupons", label: "🎟️ Gifts" },
                { id: "letter", label: "💌 Love Letter" },
                { id: "lantern", label: "🏮 Sky Lantern" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id as typeof activeTab);
                    soundEngine.playChime();
                  }}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-rose-600 to-pink-600 text-white shadow-[0_0_15px_rgba(244,63,94,0.5)]"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content Display */}
          <div className="transition-opacity duration-300">
            {activeTab === "cake" && (
              <CakeBlowSection
                onCandlesBlown={() => {
                  setTimeout(() => setActiveTab("photos"), 3000);
                }}
              />
            )}
            {activeTab === "photos" && <PhotoGallery />}
            {activeTab === "coupons" && <ScratchCards />}
            {activeTab === "letter" && <LoveLetter />}
            {activeTab === "lantern" && <LanternWish />}
          </div>
        </main>
      )}
    </div>
  );
}
