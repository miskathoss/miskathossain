"use client";

import React, { useState, useEffect } from "react";
import { soundEngine } from "./AudioEngine";
import { Heart, Sparkles, Gift, Clock, ChevronDown } from "lucide-react";

interface CountdownEnvelopeProps {
  onUnlock?: () => void;
}

export function CountdownEnvelope({ onUnlock }: CountdownEnvelopeProps) {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isPast: boolean;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0, isPast: false });

  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    // Target: October 8, 2026 00:00:00 Local Time
    const targetDate = new Date("2026-10-08T00:00:00").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true });
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds, isPast: false });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleStart = () => {
    setIsStarted(true);
    soundEngine.playChime();
    soundEngine.toggleMusic(true);
    if (onUnlock) onUnlock();

    // Smooth scroll down to chapter 1 (cake)
    const cakeSection = document.getElementById("cake");
    if (cakeSection) {
      cakeSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative z-10 flex flex-col items-center justify-center min-h-[92vh] px-4 pt-16 pb-12 text-center">
      {/* Delicate header badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-300/30 bg-amber-400/10 backdrop-blur-md text-amber-200 text-xs sm:text-sm mb-6 tracking-widest uppercase shadow-lg">
        <Sparkles className="w-4 h-4 text-amber-300 animate-spin" style={{ animationDuration: "6s" }} />
        <span>A Special Birthday Celebration From Miskat</span>
        <Sparkles className="w-4 h-4 text-amber-300 animate-spin" style={{ animationDuration: "6s" }} />
      </div>

      <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-rose-100 to-amber-200 font-bold tracking-tight mb-4 drop-shadow-[0_4px_24px_rgba(255,182,193,0.3)]">
        Happy Birthday, My Queen Rimty ❤️
      </h1>
      <p className="max-w-xl text-slate-300/90 text-sm sm:text-base font-light mb-8 leading-relaxed">
        Welcome to your personal birthday website, designed step by step with all my heart. Scroll down to experience each surprise, from the birthday cake to our love letter.
      </p>

      {/* Countdown Card */}
      <div className="relative group p-6 sm:p-8 rounded-3xl border border-rose-500/20 bg-slate-900/60 backdrop-blur-xl shadow-[0_10px_40px_rgba(224,40,79,0.15)] mb-8 w-full max-w-lg">
        <div className="flex items-center justify-center gap-2 text-rose-300 text-xs sm:text-sm font-medium tracking-wider mb-4">
          <Clock className="w-4 h-4" />
          <span>{timeLeft.isPast ? "YOUR SPECIAL DAY IS HERE!" : "COUNTDOWN TO OCTOBER 8"}</span>
        </div>

        <div className="grid grid-cols-4 gap-3 sm:gap-4">
          {[
            { val: timeLeft.days, label: "Days" },
            { val: timeLeft.hours, label: "Hours" },
            { val: timeLeft.minutes, label: "Mins" },
            { val: timeLeft.seconds, label: "Secs" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white/[0.04] border border-white/[0.08] shadow-inner"
            >
              <span className="text-2xl sm:text-4xl font-serif font-bold text-amber-100">
                {String(item.val).padStart(2, "0")}
              </span>
              <span className="text-[10px] sm:text-xs text-rose-200/60 uppercase tracking-wider mt-1">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive CTA to start music and begin scrolling */}
      <div className="flex flex-col items-center gap-4">
        <button
          onClick={handleStart}
          className="relative group overflow-hidden px-8 sm:px-12 py-4 rounded-full bg-gradient-to-r from-rose-600 via-pink-500 to-amber-500 text-white font-medium text-base sm:text-lg shadow-[0_0_35px_rgba(244,63,94,0.5)] hover:shadow-[0_0_55px_rgba(244,63,94,0.8)] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-3"
        >
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          <Heart className="w-5 h-5 text-white fill-white animate-pulse" />
          <span>{isStarted ? "Playing Music • Scroll Down" : "Tap to Play Song & Begin Journey"}</span>
          <Gift className="w-5 h-5 text-amber-200" />
        </button>

        <a
          href="#cake"
          className="inline-flex items-center gap-1.5 text-xs text-rose-300/80 hover:text-amber-200 transition-colors animate-bounce mt-4"
        >
          <span>Scroll down to explore each chapter</span>
          <ChevronDown className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
