"use client";

import React, { useState } from "react";
import { soundEngine } from "./AudioEngine";
import confetti from "canvas-confetti";
import { Send, Sparkles, Heart } from "lucide-react";

export function LanternWish() {
  const [wish, setWish] = useState("");
  const [releasedLanterns, setReleasedLanterns] = useState<
    { id: number; text: string; x: number }[]
  >([]);

  const handleRelease = (e: React.FormEvent) => {
    e.preventDefault();
    if (!wish.trim()) return;

    soundEngine.playFirework();
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#FBBF24", "#F472B6", "#67E8F9"],
    });

    const newLantern = {
      id: Date.now(),
      text: wish,
      x: Math.random() * 60 + 20, // percentage from left
    };

    setReleasedLanterns((prev) => [...prev, newLantern]);
    setWish("");
  };

  const presetWishes = [
    "মিশকাতের সাথে সারাজীবন হাসি, আনন্দ আর শান্তির সংসার ✨",
    "একসাথে হাত ধরে পুরো পৃথিবী ঘুরে বেড়ানো 🌍",
    "আমাদের পরিবারের জন্য অফুরন্ত সুস্বাস্থ্য ও বরকত 🤍",
  ];

  return (
    <div className="relative z-10 py-16 px-4 max-w-2xl mx-auto text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-xs tracking-widest uppercase mb-3">
        <Sparkles className="w-3.5 h-3.5" />
        <span>আকাশে উইশ ফানুস</span>
      </div>

      <h2 className="text-3xl sm:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-rose-100 to-amber-200 mb-3">
        আকাশে ফানুস উড়িয়ে দাও 🏮
      </h2>
      <p className="text-sm text-slate-300/80 mb-6 max-w-md mx-auto">
        তোমার মনের যেকোনো ইচ্ছে লিখে ফানুসটি উড়িয়ে দাও রাতের আকাশে, তারাদের দেশে তোমার সব চাওয়া পূর্ণ হোক।
      </p>

      {/* Input Form */}
      <form onSubmit={handleRelease} className="relative max-w-md mx-auto mb-6">
        <input
          type="text"
          value={wish}
          onChange={(e) => setWish(e.target.value)}
          placeholder="তোমার মনের গোপন উইশটি এখানে লেখো..."
          className="w-full px-5 py-3.5 rounded-full bg-white/10 border border-rose-300/30 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-rose-400/50 backdrop-blur-md pr-32"
        />
        <button
          type="submit"
          className="absolute right-1.5 top-1.5 bottom-1.5 px-5 rounded-full bg-gradient-to-r from-amber-400 to-rose-500 text-slate-950 font-medium text-xs sm:text-sm hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(251,191,36,0.5)]"
        >
          <span>উড়িয়ে দাও</span>
          <Send className="w-3.5 h-3.5" />
        </button>
      </form>

      {/* Preset Suggestions */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {presetWishes.map((preset, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setWish(preset)}
            className="text-xs px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-amber-200 transition-colors"
          >
            {preset}
          </button>
        ))}
      </div>

      {/* Floating Animated Lanterns */}
      <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
        {releasedLanterns.map((lantern) => (
          <div
            key={lantern.id}
            className="absolute bottom-0 flex flex-col items-center animate-lantern-float"
            style={{
              left: `${lantern.x}%`,
            }}
          >
            {/* Glowing Lantern */}
            <div className="relative w-14 h-18 rounded-t-xl bg-gradient-to-b from-amber-200 via-amber-400 to-rose-500 shadow-[0_0_35px_#f59e0b] border border-amber-100 flex items-center justify-center p-2">
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-100 animate-ping" />
              <div className="absolute -bottom-2 w-8 h-2 bg-amber-700 rounded-full" />
            </div>
            <span className="text-[11px] font-serif text-amber-200/90 drop-shadow-md mt-2 max-w-[140px] text-center truncate">
              {lantern.text}
            </span>
          </div>
        ))}
      </div>

      {/* Final footer greeting */}
      <div className="pt-8 border-t border-white/10 flex flex-col items-center">
        <Heart className="w-6 h-6 text-rose-500 fill-rose-500 animate-pulse mb-2" />
        <p className="font-serif text-lg text-amber-100 font-semibold">
          শুভ জন্মদিন রিমতি!
        </p>
        <p className="text-xs text-slate-400 mt-1">
          তোমার স্বামী মিশকাতের হৃদয়ের সবটুকু ভালোবাসা দিয়ে তৈরি • ৮ই অক্টোবর
        </p>
      </div>
    </div>
  );
}
