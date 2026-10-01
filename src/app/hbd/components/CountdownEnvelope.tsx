"use client";

import React, { useState, useEffect } from "react";
import { soundEngine } from "./AudioEngine";
import { Heart, Sparkles, Gift, Clock } from "lucide-react";

interface CountdownEnvelopeProps {
  onUnlock: () => void;
}

export function CountdownEnvelope({ onUnlock }: CountdownEnvelopeProps) {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isPast: boolean;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0, isPast: false });

  const [isOpening, setIsOpening] = useState(false);

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

  const handleOpen = () => {
    setIsOpening(true);
    soundEngine.playChime();
    soundEngine.toggleMusic(true);
    setTimeout(() => {
      onUnlock();
    }, 900);
  };

  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-[90vh] px-4 text-center">
      {/* Delicate header badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-300/30 bg-amber-400/10 backdrop-blur-md text-amber-200 text-xs sm:text-sm mb-6 tracking-widest uppercase">
        <Sparkles className="w-4 h-4 text-amber-300 animate-spin" style={{ animationDuration: "6s" }} />
        <span>A Special Secret From Miskat</span>
        <Sparkles className="w-4 h-4 text-amber-300 animate-spin" style={{ animationDuration: "6s" }} />
      </div>

      <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-rose-100 to-amber-200 font-bold tracking-tight mb-4 drop-shadow-[0_4px_24px_rgba(255,182,193,0.3)]">
        For My Dearest Rimty
      </h1>
      <p className="max-w-md text-slate-300/90 text-sm sm:text-base font-light mb-8 leading-relaxed">
        Something magical has been crafted just for you to celebrate the most wonderful day of the year.
      </p>

      {/* Countdown Card */}
      <div className="relative group p-6 sm:p-8 rounded-3xl border border-rose-500/20 bg-slate-900/60 backdrop-blur-xl shadow-[0_10px_40px_rgba(224,40,79,0.15)] mb-10 w-full max-w-lg">
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

      {/* Interactive Wax Sealed Gift Letter / Button */}
      <div className={`transition-all duration-700 transform ${isOpening ? "scale-110 opacity-0" : "scale-100 opacity-100"}`}>
        <button
          onClick={handleOpen}
          className="relative group overflow-hidden px-8 sm:px-12 py-4 rounded-full bg-gradient-to-r from-rose-600 via-pink-500 to-amber-500 text-white font-medium text-base sm:text-lg shadow-[0_0_35px_rgba(244,63,94,0.5)] hover:shadow-[0_0_55px_rgba(244,63,94,0.8)] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-3"
        >
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          <Heart className="w-5 h-5 text-white fill-white animate-pulse" />
          <span>Tap to Open Your Birthday Surprise</span>
          <Gift className="w-5 h-5 text-amber-200" />
        </button>
      </div>

      <p className="mt-4 text-xs text-slate-400/80">
        Turn your sound on for the best romantic experience 🎵
      </p>
    </div>
  );
}
