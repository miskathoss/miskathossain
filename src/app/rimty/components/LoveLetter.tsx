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
                ভালোবাসার স্ত্রীর প্রতি চিঠি
              </p>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-amber-100">
                আমার সবচেয়ে প্রিয় রিমতি,
              </h3>
            </div>
          </div>
          <div className="text-right">
            <span className="text-xs font-mono text-slate-400">৮ই অক্টোবর</span>
          </div>
        </div>

        {/* Letter Body */}
        <div className="space-y-4 font-serif text-slate-200/90 text-sm sm:text-base leading-relaxed tracking-wide">
          <p>
            শুভ জন্মদিন আমার পুরো পৃথিবীর সবচেয়ে প্রিয় মানুষটাকে।
          </p>
          <p>
            তুমি যেদিন আমার জীবনে এলে, সেদিন থেকে আমার পৃথিবীটা আরও সুন্দর, অর্থপূর্ণ আর মিষ্টি হয়ে উঠেছে। যখনই তোমার দিকে তাকাই—সেটা আমাদের সেই সুন্দর ছবি তোলার দিনগুলোই হোক, কিংবা কোনো শান্ত বিকেলে ঘরের কোণে তোমার মিষ্টি হাসিটাই হোক—আমার হৃদয় এক অদ্ভুত কৃতজ্ঞতায় ভরে যায়।
          </p>
          <p>
            আমার সব অস্থিরতায় তুমি এনে দাও এক পরম শান্তি, আমার প্রতিটি দিনকে ভরিয়ে দাও নির্মল হাসিতে। তুমি শুধু আমার স্ত্রী নও; তুমি আমার সবচেয়ে ভালো বন্ধু, আমার আত্মার সঙ্গী এবং আমার জীবনের সবচেয়ে বড় উপহার।
          </p>
          <p>
            তোমার এই সুন্দর জীবনের আরেকটি নতুন বছরে পা রাখার দিনে আমার একটাই দোয়া—তোমার প্রতিটি স্বপ্ন যেন সত্যি হয়, তোমার হৃদয় যেন সবসময় আনন্দে পরিপূর্ণ থাকে, আর তুমি যেন সবসময় মনে রাখো আমি তোমাকে কতটা ভালোবাসি।
          </p>
          <p className="pt-2">
            জীবনের যতগুলো জন্মদিন আসবে আর যাবে, আমি সবসময় তোমার হাতটি ধরেই থাকবো। প্রতিটি নিঃশ্বাসে তোমাকে আরও বেশি ভালোবেসে যাবো।
          </p>
        </div>

        {/* Signature */}
        <div className="mt-8 pt-6 border-t border-rose-400/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-xs text-rose-300 font-mono uppercase tracking-wider">
              চিরকাল এবং সবসময় শুধুই তোমার,
            </p>
            <p className="text-2xl sm:text-3xl font-serif italic text-amber-200 font-bold mt-1">
              মিসকাত হোসেন ❤️
            </p>
          </div>

          {/* Interactive Kiss Button */}
          <div className="relative">
            <button
              onClick={handleKiss}
              className="relative overflow-visible px-6 py-3 rounded-full bg-gradient-to-r from-rose-600 via-pink-600 to-rose-500 text-white text-xs sm:text-sm font-medium shadow-[0_0_25px_rgba(244,63,94,0.4)] hover:shadow-[0_0_35px_rgba(244,63,94,0.7)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>ভালোবাসা পাঠাও ({kissCount}) ❤️</span>
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
