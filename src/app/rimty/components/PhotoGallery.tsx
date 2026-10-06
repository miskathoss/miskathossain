"use client";

import React, { useState } from "react";
import Image from "next/image";
import { soundEngine } from "./AudioEngine";
import { Heart, Sparkles, X, Camera } from "lucide-react";

interface PhotoItem {
  id: number;
  src: string;
  title: string;
  note: string;
  rotation: string;
}

const photos: PhotoItem[] = [
  {
    id: 1,
    src: "/rimty/memories/1.jpg",
    title: "শুরুর দিনগুলো",
    note: "তখন ভবিষ্যৎ কেমন হবে এত কিছু ভাবিনি, শুধু জানতাম মানুষটা সঠিক।",
    rotation: "-rotate-2",
  },
  {
    id: 2,
    src: "/rimty/memories/2.jpg",
    title: "সহজ সুন্দর",
    note: "বেশি কিছু লাগে না, তোমার এই স্বাভাবিক হাসিটাই অনেক কিছু সহজ করে দেয়।",
    rotation: "rotate-2",
  },
  {
    id: 3,
    src: "/rimty/memories/3.jpg",
    title: "একটি ফ্রেম",
    note: "পেছনে ফিরে তাকালে বুঝি, ছোট ছোট এই মুহূর্তগুলোই আসলে জীবনের সেরা সঞ্চয়।",
    rotation: "-rotate-1",
  },
  {
    id: 4,
    src: "/rimty/memories/4.jpg",
    title: "শান্ত বিকেল",
    note: "সারাদিনের সমস্ত দৌড়াদৌড়ি শেষে তোমার পাশে চুপচাপ বসে থাকার চেয়ে স্বস্তির আর কিছু নেই।",
    rotation: "rotate-3",
  },
  {
    id: 5,
    src: "/rimty/memories/5.jpg",
    title: "আনফিল্টার্ড মুহূর্ত",
    note: "কোনো প্রস্তুতি বা পোজ ছাড়া—ঠিক যেমন আমরা, তেমন থাকার সুন্দর সময়।",
    rotation: "-rotate-3",
  },
  {
    id: 6,
    src: "/rimty/memories/6.jpg",
    title: "একসাথে পথচলা",
    note: "জীবন সবসময় সহজ না হলেও, হাতটা ধরে থাকলে কঠিন পথও সহজ মনে হয়।",
    rotation: "rotate-1",
  },
  {
    id: 7,
    src: "/rimty/memories/7.jpg",
    title: "স্বস্তি",
    note: "যেখানে কোনো অভিনয় করতে হয় না, নিঃসংকোচে নিজের মতো থাকা যায়—সেই জায়গাটা তুমি।",
    rotation: "-rotate-2",
  },
  {
    id: 8,
    src: "/rimty/memories/8.jpg",
    title: "ভালো থাকা",
    note: "তোমাকে মন খুলে হাসতে দেখাটাই দিনশেষে সবচেয়ে বড় পাওয়া।",
    rotation: "rotate-2",
  },
  {
    id: 9,
    src: "/rimty/memories/9.jpg",
    title: "সামনের দিকে",
    note: "সামনে যা-ই আসুক, ভালো কিংবা খারাপ—একসাথে সামলে নেওয়ার ভরসাটাই আসল।",
    rotation: "-rotate-1",
  },
  {
    id: 11,
    src: "/rimty/memories/11.jpg",
    title: "কৃতজ্ঞতা",
    note: "প্রতিদিন মুখে বলা হয় না, কিন্তু পাশে একজন নির্ভরযোগ্য মানুষ থাকার মূল্য অনেক।",
    rotation: "-rotate-3",
  },
  {
    id: 12,
    src: "/rimty/memories/12.jpg",
    title: "ভরসা",
    note: "সময়ের সাথে সাথে ভালো লাগা হয়তো অভ্যাসে রূপ নেয়, কিন্তু নির্ভরতাটা আরও গভীর হয়।",
    rotation: "rotate-2",
  },
  {
    id: 13,
    src: "/rimty/memories/13.jpg",
    title: "আজকের দিনটি",
    note: "শুভ জন্মদিন রিমতি। সামনে আরও অনেকগুলো বছর শান্তিতে আর একসাথে পথ চলার প্রত্যাশায়।",
    rotation: "-rotate-2",
  },
];

export function PhotoGallery() {
  const [activePhoto, setActivePhoto] = useState<PhotoItem | null>(null);

  const handleOpenPhoto = (item: PhotoItem) => {
    setActivePhoto(item);
    soundEngine.playChime();
  };

  return (
    <div className="relative z-10 py-12 px-4 max-w-6xl mx-auto">
      {/* Title */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-400/20 text-rose-300 text-xs tracking-widest uppercase mb-3">
          <Camera className="w-3.5 h-3.5" />
          <span>আমাদের সুন্দর কিছু স্মৃতি</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold leading-normal py-2 text-rose-100 drop-shadow-[0_2px_16px_rgba(251,113,133,0.35)]">
          তুমি আর আমি — কিছু প্রিয় মুহূর্ত ✨
        </h2>
        <p className="text-sm text-slate-300/80 mt-2">
          যেকোনো ছবিতে ক্লিক করে পেছনের সুন্দর অনুভূতি ও গল্পটা পড়ে নাও।
        </p>
      </div>

      {/* Grid of Polaroid Cards maintaining serial */}
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
                  <Sparkles className="w-3.5 h-3.5" /> নোট দেখতে ট্যাপ করো
                </span>
              </div>
            </div>

            {/* Bottom Polaroid Tag */}
            <div className="pt-3 pb-1 text-center">
              <h3 className="font-serif text-amber-100 text-sm font-semibold tracking-wide flex items-center justify-center gap-1.5">
                <Heart className="w-3 h-3 text-rose-400 fill-rose-400" />
                {photo.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Modal View for Expanded Memory */}
      {activePhoto && (
        <div
          onClick={() => setActivePhoto(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950 border border-rose-400/30 rounded-3xl p-5 pt-8 sm:p-8 shadow-[0_0_50px_rgba(244,63,94,0.3)] max-h-[92vh] overflow-y-auto"
          >
            {/* Prominent High-Contrast Close Button */}
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-3 right-3 sm:top-5 sm:right-5 z-30 w-10 h-10 rounded-full bg-slate-800/95 hover:bg-rose-600 border border-white/30 text-white flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.6)] transition-all hover:scale-110 active:scale-95"
              aria-label="Close"
            >
              <X className="w-5 h-5 stroke-[2.5]" />
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
                  <span>একটি স্মৃতি</span>
                </div>

                <h3 className="text-2xl font-serif font-bold text-amber-100 mb-4">
                  {activePhoto.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed font-light mb-6 italic border-l-2 border-rose-500/50 pl-4 py-1">
                  &ldquo;{activePhoto.note}&rdquo;
                </p>

                <div className="flex items-center gap-2 text-xs text-rose-300/80 font-serif mb-2">
                  <Heart className="w-4 h-4 fill-rose-400 text-rose-400" />
                  <span>মিসকাত ❤️</span>
                </div>

                {/* Additional Mobile Friendly Close Button */}
                <button
                  onClick={() => setActivePhoto(null)}
                  className="mt-4 w-full py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-xs sm:text-sm font-medium text-rose-200 hover:text-white flex items-center justify-center gap-2 transition-all active:scale-95"
                >
                  <X className="w-4 h-4" />
                  <span>ছবি বন্ধ করো</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
