"use client";

import React, { useState } from "react";
import { soundEngine } from "./AudioEngine";
import { Heart, Sparkles, Feather } from "lucide-react";

export function LoveLetter() {
  const [kissCount, setKissCount] = useState(0);
  const [floatingHearts, setFloatingHearts] = useState<{ id: number; x: number; y: number }[]>([]);

  const handleKiss = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    soundEngine.playChime();
    setKissCount((prev) => prev + 1);

    const newHeart = { id: Date.now() + Math.random(), x, y };
    setFloatingHearts((prev) => [...prev, newHeart]);

    setTimeout(() => {
      setFloatingHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
    }, 1500);
  };

  return (
    <div className="relative z-10 py-16 px-4 max-w-3xl mx-auto">
      {/* Outer Glow */}
      <div className="absolute inset-0 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-white/[0.08] via-white/[0.04] to-black/40 backdrop-blur-2xl border border-rose-300/30 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
        {/* Wax seal header */}
        <div className="flex items-center justify-between border-b border-rose-400/20 pb-6 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-rose-700 to-rose-500 flex items-center justify-center shadow-lg border border-rose-300/50">
              <Heart className="w-6 h-6 text-white fill-white" />
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-rose-300">
                A Letter To My Wife
              </p>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-amber-100">
                My Dearest Rimty,
              </h3>
            </div>
          </div>
          <div className="text-right">
            <span className="text-xs font-mono text-slate-400">October 8</span>
          </div>
        </div>

        {/* Letter Body */}
        <div className="space-y-4 font-serif text-slate-200/90 text-sm sm:text-base leading-relaxed tracking-wide">
          <p>
            Happy Birthday to the most extraordinary woman in my entire world.
          </p>
          <p>
            From the moment you stepped into my life, everything became more vibrant, more meaningful, and infinitely sweeter. When I look at you—whether it was on the unforgettable day we took those photos, or simply seeing you smile across the room on a quiet evening—my heart feels completely overwhelmed with gratitude.
          </p>
          <p>
            You bring peace to my chaos, laughter to my days, and an unconditional love that inspires me to be the best version of myself. You are not only my wife; you are my best friend, my soulmate, and my greatest blessing.
          </p>
          <p>
            As you celebrate another year of your beautiful life, my only prayer is that all your dreams take flight, that your heart is always full of joy, and that you always remember how deeply and endlessly you are cherished.
          </p>
          <p className="pt-2">
            No matter how many birthdays come and go, I will be right by your side, loving you more with every single breath.
          </p>
        </div>

        {/* Custom Song Lyrics Tribute */}
        <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-white/[0.04] border border-rose-400/25 backdrop-blur-md">
          <div className="flex items-center justify-between gap-2 text-rose-300 text-xs font-mono uppercase tracking-wider mb-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>আমাদের গান — &ldquo;শুভ জন্মদিন রিমতি&rdquo;</span>
            </div>
            <span className="text-[11px] text-amber-200/80 font-serif">A Song for You 🎵</span>
          </div>
          <p className="font-serif text-amber-100/90 text-xs sm:text-sm leading-relaxed whitespace-pre-line border-l-2 border-rose-400/50 pl-4 py-1 italic">
{`"শুভ জন্মদিন, Rimti,
আমার প্রিয় মানুষ,
তোমাকে পেয়ে এই জীবনটা
হয়ে গেছে অনেক বেশি সুন্দর।

তুমি হাসো, তুমি ভালো থাকো,
তোমার সব স্বপ্ন পূরণ হোক,
আর যতদিন আমরা একসাথে—
আমাদের ভালোবাসা ততদিন থাকুক।

তোমার জন্মদিনটা শুধু তোমার জন্মদিন না,
এটা আমার কাছেও একটা বিশেষ দিন...
কারণ এই দিনেই আমার জীবনের সবচেয়ে সুন্দর মানুষটা পৃথিবীতে এসেছিল। ❤️"`}
          </p>
        </div>

        {/* Signature */}
        <div className="mt-8 pt-6 border-t border-rose-400/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-xs text-rose-300 font-mono uppercase tracking-wider">
              Forever and Always Yours,
            </p>
            <p className="text-2xl sm:text-3xl font-serif italic text-amber-200 font-bold mt-1">
              Miskat Hossain ❤️
            </p>
          </div>

          {/* Interactive Kiss Button */}
          <div className="relative">
            <button
              onClick={handleKiss}
              className="relative overflow-visible px-6 py-3 rounded-full bg-gradient-to-r from-rose-600 via-pink-600 to-rose-500 text-white text-xs sm:text-sm font-medium shadow-[0_0_25px_rgba(244,63,94,0.4)] hover:shadow-[0_0_35px_rgba(244,63,94,0.7)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>Tap to Send a Kiss ({kissCount})</span>
            </button>

            {/* Floating kiss hearts */}
            {floatingHearts.map((h) => (
              <span
                key={h.id}
                className="absolute text-xl pointer-events-none animate-bounce"
                style={{
                  left: `${h.x}px`,
                  top: `${h.y - 30}px`,
                  animationDuration: "1.2s",
                }}
              >
                💖
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
