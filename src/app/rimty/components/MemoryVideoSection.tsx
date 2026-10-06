"use client";

import React, { useRef, useState } from "react";
import { soundEngine } from "./AudioEngine";
import { Film, Play, Pause, Volume2, Sparkles, Heart } from "lucide-react";

export function MemoryVideoSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    // Pause background song while video is playing
    soundEngine.toggleMusic(false);
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().catch((err) => console.warn("Video play error:", err));
    } else {
      video.pause();
    }
  };

  return (
    <div className="relative z-10 py-16 px-4 max-w-4xl mx-auto text-center">
      {/* Outer ambient glow */}
      <div className="absolute inset-0 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-400/20 text-rose-300 text-xs tracking-widest uppercase mb-3">
          <Film className="w-3.5 h-3.5" />
          <span>আমাদের বিশেষ ভিডিও</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-bold leading-normal py-2 text-rose-100 drop-shadow-[0_2px_16px_rgba(251,113,133,0.35)]">
          আমাদের গল্প 🎬
        </h2>
        <p className="text-sm text-slate-300/80 mt-1 max-w-md mx-auto">
          প্লে বাটনে ট্যাপ করে একসাথে কাটানো সুন্দর মুহূর্তগুলোর ভিডিও দেখে নাও।
        </p>
      </div>

      {/* Video Container Frame */}
      <div className="relative max-w-sm sm:max-w-md mx-auto rounded-3xl overflow-hidden p-2 sm:p-3 bg-gradient-to-b from-white/[0.08] via-white/[0.04] to-black/60 border border-rose-400/30 shadow-[0_0_50px_rgba(244,63,94,0.3)] backdrop-blur-xl group">
        <div className="relative rounded-2xl overflow-hidden bg-slate-950 aspect-[9/16] max-h-[75vh] mx-auto shadow-inner">
          <video
            ref={videoRef}
            src="/rimty/video.mp4"
            className="w-full h-full object-contain bg-black"
            controls
            playsInline
            preload="metadata"
            onPlay={handlePlay}
            onPause={handlePause}
            onEnded={handlePause}
          />

          {/* Quick Play overlay button when paused */}
          {!isPlaying && (
            <button
              onClick={togglePlayback}
              className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/30 transition-all z-20 group/btn"
              aria-label="Play Video"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-rose-600 to-pink-500 text-white flex items-center justify-center shadow-[0_0_30px_rgba(244,63,94,0.7)] group-hover/btn:scale-110 active:scale-95 transition-transform">
                <Play className="w-7 h-7 sm:w-9 sm:h-9 fill-white ml-1 text-white" />
              </div>
            </button>
          )}
        </div>

        {/* Bottom video footer note */}
        <div className="pt-3 pb-1 flex items-center justify-center gap-2 text-xs text-rose-300/70">
          <Heart className="w-3.5 h-3.5 fill-rose-400 text-rose-400" />
          <span>রিমতির জন্মদিনের বিশেষ মুহূর্তগুলো</span>
        </div>
      </div>
    </div>
  );
}
