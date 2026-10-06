"use client";

import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { soundEngine } from "./AudioEngine";
import { Sparkles, Wind, PartyPopper, Heart } from "lucide-react";

interface CakeBlowSectionProps {
  onCandlesBlown: () => void;
}

export function CakeBlowSection({ onCandlesBlown }: CakeBlowSectionProps) {
  const [candlesLit, setCandlesLit] = useState<boolean[]>([true, true, true, true, true]);
  const [isAllBlown, setIsAllBlown] = useState(false);
  const [isListeningMic, setIsListeningMic] = useState(false);

  const blowOutCandle = (idx: number) => {
    if (!candlesLit[idx]) return;
    const newCandles = [...candlesLit];
    newCandles[idx] = false;
    setCandlesLit(newCandles);
    soundEngine.playBlow();

    // Check if all blown
    if (newCandles.every((c) => !c)) {
      triggerCelebration();
    }
  };

  const blowAllCandles = () => {
    soundEngine.playBlow();
    setCandlesLit([false, false, false, false, false]);
    triggerCelebration();
  };

  const triggerCelebration = () => {
    setIsAllBlown(true);
    soundEngine.playFirework();

    // Luxurious confetti burst: gold, rose, mint, pink
    const duration = 3.5 * 1000;
    const animationEnd = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 70,
        origin: { x: 0, y: 0.7 },
        colors: ["#F472B6", "#FBBF24", "#FB7185", "#67E8F9", "#FDE047"],
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 70,
        origin: { x: 1, y: 0.7 },
        colors: ["#F472B6", "#FBBF24", "#FB7185", "#67E8F9", "#FDE047"],
      });

      if (Date.now() < animationEnd) {
        requestAnimationFrame(frame);
      }
    };
    frame();

    onCandlesBlown();
  };

  // Optional microphone blow detection
  const startMicDetection = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      setIsListeningMic(true);
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const audioCtx = new AudioCtx();
      const analyser = audioCtx.createAnalyser();
      const microphone = audioCtx.createMediaStreamSource(stream);
      microphone.connect(analyser);
      analyser.fftSize = 256;
      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);

      const checkBlow = () => {
        if (isAllBlown) {
          stream.getTracks().forEach((track) => track.stop());
          return;
        }
        analyser.getByteFrequencyData(dataArray);
        let sum = 0;
        // Check lower frequencies for wind/blowing sound
        for (let i = 0; i < 15; i++) {
          sum += dataArray[i];
        }
        const average = sum / 15;

        // If sustained high air turbulence detected
        if (average > 65) {
          blowAllCandles();
          stream.getTracks().forEach((track) => track.stop());
          setIsListeningMic(false);
          return;
        }
        requestAnimationFrame(checkBlow);
      };
      checkBlow();
    } catch {
      setIsListeningMic(false);
    }
  };

  return (
    <div className="relative z-10 flex flex-col items-center justify-center py-12 px-4 text-center max-w-2xl mx-auto">
      {/* Glow highlight */}
      <div className="absolute w-72 h-72 bg-rose-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-400/20 text-rose-300 text-xs tracking-widest uppercase mb-4">
        <Sparkles className="w-3.5 h-3.5" />
        <span>উইশ করো বার্থডে গার্ল ✨</span>
        <Sparkles className="w-3.5 h-3.5" />
      </div>

      <h2 className="text-3xl sm:text-5xl font-bold leading-normal py-2 mb-2 text-rose-100 drop-shadow-[0_2px_16px_rgba(251,113,133,0.35)]">
        মোমবাতিতে ফুঁ দাও! 🎂
      </h2>
      <p className="text-sm text-slate-300/80 mb-8 max-w-md">
        চোখ বন্ধ করে মনে মনে একটা সুন্দর উইশ করো, তারপর ফুঁ দিয়ে নিভিয়ে দাও (মোমবাতিতে ট্যাপ করো অথবা নিচের বাটনে চাপ দাও)।
      </p>

      {/* SVG Interactive Birthday Cake */}
      <div className="relative w-72 sm:w-80 h-72 flex items-end justify-center my-4 group select-none">
        {/* Floating Candles */}
        <div className="absolute top-10 flex justify-center gap-5 sm:gap-7 z-20">
          {candlesLit.map((isLit, idx) => (
            <div
              key={idx}
              onClick={() => blowOutCandle(idx)}
              className="flex flex-col items-center cursor-pointer transition-transform hover:scale-110 active:scale-95"
              title="Click to blow out candle"
            >
              {/* Flame */}
              <div className="relative h-8 flex items-center justify-center">
                {isLit ? (
                  <div className="relative flex items-center justify-center animate-bounce" style={{ animationDuration: `${0.8 + idx * 0.15}s` }}>
                    {/* Glowing outer halo */}
                    <div className="absolute w-6 h-6 rounded-full bg-amber-400/40 blur-sm animate-pulse" />
                    {/* Flame body */}
                    <div className="w-3.5 h-5 rounded-full bg-gradient-to-t from-rose-500 via-amber-400 to-yellow-100 shadow-[0_0_12px_#fbbf24]" />
                    <div className="absolute bottom-0 w-1.5 h-2 rounded-full bg-cyan-200" />
                  </div>
                ) : (
                  /* Smoke puff */
                  <div className="relative flex flex-col items-center">
                    <span className="text-[10px] text-slate-400 opacity-60 animate-fade-out -translate-y-2">
                      ☁️
                    </span>
                    <div className="w-0.5 h-2 bg-slate-600 rounded-full" />
                  </div>
                )}
              </div>

              {/* Candle Stick */}
              <div className="w-3 h-14 rounded-t-sm bg-gradient-to-b from-rose-300 via-pink-400 to-rose-400 shadow-md border-x border-pink-200/50 flex flex-col justify-between py-1">
                <div className="w-full h-0.5 bg-white/40" />
                <div className="w-full h-0.5 bg-white/40" />
                <div className="w-full h-0.5 bg-white/40" />
              </div>
            </div>
          ))}
        </div>

        {/* 3-Tier Luxury Cake Graphic */}
        <div className="relative flex flex-col items-center z-10">
          {/* Top Tier */}
          <div className="relative w-44 h-14 rounded-t-2xl bg-gradient-to-b from-rose-100 via-rose-200 to-pink-300 shadow-lg border-t-2 border-white/60 flex items-center justify-center">
            {/* Frosting drips */}
            <div className="absolute top-0 w-full flex justify-around px-2">
              <span className="w-2.5 h-3 bg-white/80 rounded-b-full shadow-sm" />
              <span className="w-3 h-4 bg-white/80 rounded-b-full shadow-sm" />
              <span className="w-2 h-2.5 bg-white/80 rounded-b-full shadow-sm" />
              <span className="w-3.5 h-4.5 bg-white/80 rounded-b-full shadow-sm" />
              <span className="w-2.5 h-3 bg-white/80 rounded-b-full shadow-sm" />
            </div>
            <span className="text-[11px] font-serif font-bold text-rose-800/80 tracking-widest mt-2 uppercase">
              Rimty
            </span>
          </div>

          {/* Middle Tier */}
          <div className="relative w-56 h-16 rounded-t-xl bg-gradient-to-b from-amber-100 via-amber-200 to-rose-200 shadow-xl border-t border-white/50 flex items-center justify-center">
            <div className="w-full h-1 bg-gradient-to-r from-transparent via-rose-400/50 to-transparent" />
            <div className="absolute flex gap-3 text-rose-500/60 text-xs">
              <Heart className="w-3 h-3 fill-rose-400" />
              <Heart className="w-3.5 h-3.5 fill-rose-500" />
              <Heart className="w-3 h-3 fill-rose-400" />
            </div>
          </div>

          {/* Bottom Tier */}
          <div className="relative w-68 sm:w-72 h-20 rounded-t-xl bg-gradient-to-b from-pink-200 via-rose-300 to-rose-400 shadow-2xl border-t-2 border-white/40 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/30 via-transparent to-transparent pointer-events-none" />
            <span className="font-serif italic text-white/90 text-sm tracking-wider font-semibold drop-shadow-sm">
              ৮ই অক্টোবর • শুভ জন্মদিন
            </span>
          </div>

          {/* Golden Cake Stand */}
          <div className="w-80 sm:w-88 h-4 rounded-full bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500 shadow-[0_4px_20px_rgba(251,191,36,0.4)] border border-amber-100/50" />
          <div className="w-32 h-3 bg-gradient-to-r from-amber-500 via-amber-300 to-amber-600 rounded-b-lg shadow-inner" />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        {!isAllBlown ? (
          <>
            <button
              onClick={blowAllCandles}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white font-medium text-sm shadow-[0_0_20px_rgba(244,63,94,0.4)] hover:shadow-[0_0_30px_rgba(244,63,94,0.7)] transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <Wind className="w-4 h-4" />
              <span>এক ফুঁয়ে সব নিভিয়ে দাও 💨</span>
            </button>

            <button
              onClick={startMicDetection}
              disabled={isListeningMic}
              className="px-5 py-2.5 rounded-full border border-rose-300/30 bg-white/5 hover:bg-white/10 text-rose-200 text-xs sm:text-sm font-medium transition-all backdrop-blur-md flex items-center gap-2"
            >
              <span>{isListeningMic ? "তোমার ফুঁ শুনছি... 🎙️" : "মাইক্রোফোনে ফুঁ দিয়ে নিভাও 🎙️"}</span>
            </button>
          </>
        ) : (
          <div className="flex flex-col items-center animate-fade-in">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-200 text-sm font-medium shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              <PartyPopper className="w-4 h-4 text-emerald-300" />
              <span>মোমবাতি নিভে গেছে! তোমার সব উইশ পূরণ হোক! 🎉</span>
            </div>
            <button
              onClick={blowAllCandles}
              className="mt-3 text-xs text-rose-300/70 hover:text-rose-200 underline transition-colors"
            >
              আবার মোমবাতি জ্বালিয়ে ফুঁ দাও ✨
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
