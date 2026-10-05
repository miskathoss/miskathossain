"use client";

import React, { useState } from "react";
import Image from "next/image";
import { soundEngine } from "./AudioEngine";
import { Heart, Sparkles, X, Camera } from "lucide-react";

interface PhotoItem {
  id: number;
  src: string;
  title: string;
  subtitle: string;
  note: string;
  rotation: string;
}

const photos: PhotoItem[] = [
  {
    id: 1,
    src: "/hbd/rimty-1.jpg",
    title: "The Day Our Forever Began",
    subtitle: "Our Blessed Beginning",
    note: "Holding your hand on this day, I knew without a single doubt that I had found my forever. You looked like an angel, and you still do every second of every day.",
    rotation: "-rotate-2",
  },
  {
    id: 2,
    src: "/hbd/rimty-2.jpg",
    title: "My Safe Haven",
    subtitle: "In Your Warmth",
    note: "Whenever the world gets noisy, this moment reminds me where my peace lives. Forehead against forehead, heartbeat against heartbeat. You are my home, Rimty.",
    rotation: "rotate-3",
  },
  {
    id: 3,
    src: "/hbd/rimty-3.jpg",
    title: "Dreaming Under The Same Sky",
    subtitle: "Looking Ahead Together",
    note: "Looking up into the sky beside you filled my heart with endless dreams. Every prayer I ever made was answered the moment you came into my life.",
    rotation: "-rotate-3",
  },
  {
    id: 4,
    src: "/hbd/rimty-4.jpg",
    title: "Walking Hand In Hand",
    subtitle: "Every Step With You",
    note: "Strolling through the garden with your hand in mine. No matter what path life takes us down, as long as your fingers are laced with mine, I am the luckiest man alive.",
    rotation: "rotate-2",
  },
  {
    id: 5,
    src: "/hbd/rimty-5.jpg",
    title: "The Most Beautiful Woman In The World",
    subtitle: "My Queen, Rimty",
    note: "Your elegance, your kindness, your pure smile, and the warmth of your heart. Happy Birthday to the queen of my heart. I love you more than words could ever convey.",
    rotation: "-rotate-1",
  },
];

export function PhotoGallery() {
  const [activePhoto, setActivePhoto] = useState<PhotoItem | null>(null);

  const handleOpenPhoto = (item: PhotoItem) => {
    setActivePhoto(item);
    soundEngine.playChime();
  };

  return (
    <div className="relative z-10 py-16 px-4 max-w-6xl mx-auto">
      {/* Title */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-400/20 text-rose-300 text-xs tracking-widest uppercase mb-3">
          <Camera className="w-3.5 h-3.5" />
          <span>Our Precious Memories</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-rose-100 to-amber-200">
          A Constellation of You & Me ✨
        </h2>
        <p className="text-sm text-slate-300/80 mt-2">
          Click any polaroid to reveal the memory and love note behind it.
        </p>
      </div>

      {/* Grid of Polaroid Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {photos.map((photo) => (
          <div
            key={photo.id}
            onClick={() => handleOpenPhoto(photo)}
            className={`group cursor-pointer p-4 bg-white/[0.07] backdrop-blur-xl border border-white/20 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_45px_rgba(244,63,94,0.35)] transition-all duration-300 hover:scale-105 hover:z-20 ${photo.rotation} max-w-xs w-full`}
          >
            {/* Image Frame */}
            <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-slate-800">
              <Image
                src={photo.src}
                alt={photo.title}
                fill
                sizes="(max-width: 768px) 100vw, 320px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-xs text-rose-200 flex items-center gap-1.5 font-medium">
                  <Sparkles className="w-3.5 h-3.5" /> Tap to read note
                </span>
              </div>
            </div>

            {/* Bottom Polaroid Tag */}
            <div className="pt-3 pb-1 text-center">
              <h3 className="font-serif text-amber-100 text-sm font-semibold tracking-wide flex items-center justify-center gap-1.5">
                <Heart className="w-3 h-3 text-rose-400 fill-rose-400" />
                {photo.title}
              </h3>
              <p className="text-[11px] text-rose-200/60 font-mono tracking-wider mt-0.5">
                {photo.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal View for Expanded Memory */}
      {activePhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-2xl bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950 border border-rose-400/30 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(244,63,94,0.3)]">
            {/* Close Button */}
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                <Image
                  src={activePhoto.src}
                  alt={activePhoto.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col justify-center">
                <div className="inline-flex items-center gap-1.5 text-xs text-rose-400 font-mono tracking-widest uppercase mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>{activePhoto.subtitle}</span>
                </div>

                <h3 className="text-2xl font-serif font-bold text-amber-100 mb-4">
                  {activePhoto.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed font-light mb-6 italic border-l-2 border-rose-500/50 pl-4 py-1">
                  &ldquo;{activePhoto.note}&rdquo;
                </p>

                <div className="flex items-center gap-2 text-xs text-rose-300/80 font-serif">
                  <Heart className="w-4 h-4 fill-rose-400 text-rose-400" />
                  <span>With all my love, Miskat</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
