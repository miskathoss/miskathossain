"use client";

import React, { useState, useEffect } from "react";
import { soundEngine } from "./AudioEngine";
import { Heart, Sparkles, Gift, Clock, ChevronDown } from "lucide-react";

interface CountdownEnvelopeProps {
  onUnlock: () => void;
  isUnlocked: boolean;
}

export function CountdownEnvelope({ onUnlock, isUnlocked }: CountdownEnvelopeProps) {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isPast: boolean;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0, isPast: false });

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
    soundEngine.playChime();
    soundEngine.toggleMusic(true);
    onUnlock();

    setTimeout(() => {
      const cakeSection = document.getElementById("cake");
      if (cakeSection) {
        cakeSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 400);
  };

  return (
    <section className="relative z-10 flex flex-col items-center justify-center min-h-[92vh] px-4 pt-16 pb-12 text-center">
      {/* Delicate header badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-300/30 bg-amber-400/10 backdrop-blur-md text-amber-200 text-xs sm:text-sm mb-6 tracking-widest uppercase shadow-lg">
        <Sparkles className="w-4 h-4 text-amber-300 animate-spin" style={{ animationDuration: "6s" }} />
        <span>মিসকাতের পক্ষ থেকে ভালোবাসার উপহার</span>
        <Sparkles className="w-4 h-4 text-amber-300 animate-spin" style={{ animationDuration: "6s" }} />
      </div>

      <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-normal py-2 mb-4 text-rose-100 drop-shadow-[0_4px_24px_rgba(255,182,193,0.35)]">
        শুভ জন্মদিন রিমতি ❤️
      </h1>
      <p className="max-w-xl text-slate-300/90 text-sm sm:text-base font-light mb-8 leading-relaxed">
        তোমার জন্য পুরো মন দিয়ে তৈরি এই বিশেষ উপহার। নিচের বাটনে ট্যাপ করে গান ছেড়ে শুরু করো আমাদের আজকের দিনটি।
      </p>

      {/* Countdown Card */}
      <div className="relative group p-6 sm:p-8 rounded-3xl border border-rose-500/20 bg-slate-900/60 backdrop-blur-xl shadow-[0_10px_40px_rgba(224,40,79,0.15)] mb-8 w-full max-w-lg">
        <div className="flex items-center justify-center gap-2 text-rose-300 text-xs sm:text-sm font-medium tracking-wider mb-4">
          <Clock className="w-4 h-4" />
          <span>{timeLeft.isPast ? "আজ তোমার সেই বিশেষ দিন!" : "৮ই অক্টোবরের কাউন্টডাউন"}</span>
        </div>

        <div className="grid grid-cols-4 gap-3 sm:gap-4">
          {[
            { val: timeLeft.days, label: "দিন" },
            { val: timeLeft.hours, label: "ঘণ্টা" },
            { val: timeLeft.minutes, label: "মিনিট" },
            { val: timeLeft.seconds, label: "সেকেন্ড" },
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
          <span>গানটা ছেড়ে ভেতরে এসো 🎵</span>
          <Gift className="w-5 h-5 text-amber-200" />
        </button>

        {isUnlocked && (
          <a
            href="#cake"
            className="inline-flex items-center gap-1.5 text-xs text-rose-300/80 hover:text-amber-200 transition-colors animate-bounce mt-4"
          >
            <span>নিচে স্ক্রল করে এগিয়ে যাও ✨</span>
            <ChevronDown className="w-4 h-4" />
          </a>
        )}
      </div>
    </section>
  );
}
