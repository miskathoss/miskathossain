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
    title: "আমাদের সুন্দর শুরু",
    note: "তোমার হাতটা যেদিন প্রথম ধরলাম, মনে হলো পুরো পৃথিবীটাই বুঝি আমার হাতে। প্রথম দিন থেকেই তুমি আমার জীবনটাকে আলোয় ভরিয়ে দিয়েছো।",
    rotation: "-rotate-2",
  },
  {
    id: 2,
    src: "/rimty/memories/2.jpg",
    title: "তোমার সেই মায়াবী হাসি",
    note: "তোমার এই হাসিটা এক নিমিষেই সারাদিনের সব ক্লান্তি দূর করে দেয়। যখনই তোমাকে এভাবে হাসতে দেখি, মনটা শান্ত হয়ে যায়।",
    rotation: "rotate-2",
  },
  {
    id: 3,
    src: "/rimty/memories/3.jpg",
    title: "স্মৃতির পাতায় বন্দি আমরা",
    note: "আমাদের একসাথে কাটানো প্রতিটি ছবি আমার কাছে একটা অমূল্য রত্ন। এই মুহূর্তটার দিকে তাকালেই মন ভরে যায়।",
    rotation: "-rotate-1",
  },
  {
    id: 4,
    src: "/rimty/memories/4.jpg",
    title: "তোমার চোখে আমার দুনিয়া",
    note: "বাইরের দুনিয়া যতই ব্যস্ত বা কোলাহলপূর্ণ হোক, তোমার কাছে আসলেই আমার শান্তি। তুমি শুধু আমার স্ত্রী নও, আমার সবচেয়ে প্রিয় বন্ধু।",
    rotation: "rotate-3",
  },
  {
    id: 5,
    src: "/rimty/memories/5.jpg",
    title: "ছোট ছোট মিষ্টি মুহূর্ত",
    note: "জীবনের সেরা মুহূর্তগুলো আসলে কোনো প্ল্যান ছাড়া হাসাহাসি করা এই সাধারণ সময়গুলোই। তোমার সাথে কাটানো প্রতিটি সেকেন্ডই স্পেশাল।",
    rotation: "-rotate-3",
  },
  {
    id: 6,
    src: "/rimty/memories/6.jpg",
    title: "পাশাপাশি প্রতিটি পদক্ষেপে",
    note: "জীবন যে পথেই নিয়ে যাক না কেন, যতদিন তোমার হাত ধরে পাশাপাশি হাঁটছি, ততদিন প্রতিটি পথই সুন্দর।",
    rotation: "rotate-1",
  },
  {
    id: 7,
    src: "/rimty/memories/7.jpg",
    title: "আমার শান্তির ঠিকানা",
    note: "তোমার মায়া, তোমার কোমলতা আর তোমার ভালোবাসার ভেতরেই আমি আমার সব প্রার্থনার উত্তর খুঁজে পেয়েছি।",
    rotation: "-rotate-2",
  },
  {
    id: 8,
    src: "/rimty/memories/8.jpg",
    title: "অফুরন্ত হাসি আর আনন্দ",
    note: "তুমি আমাদের দিনগুলোকে এত আনন্দে ভরিয়ে দাও! তোমাকে সবসময় এমন হাসিখুশি দেখতে পাওয়াটাই আমার জীবনের সবচেয়ে বড় প্রাপ্তি।",
    rotation: "rotate-2",
  },
  {
    id: 9,
    src: "/rimty/memories/9.jpg",
    title: "একসাথে আগামীর স্বপ্ন",
    note: "হাতে হাত রেখে সুন্দর একটা ভবিষ্যতের স্বপ্ন দেখা। সামনে যা-ই আসুক না কেন, আমরা দুজন একসাথে পার করবো।",
    rotation: "-rotate-1",
  },
  {
    id: 11,
    src: "/rimty/memories/11.jpg",
    title: "প্রতিটি দিনই এক আশীর্বাদ",
    note: "তোমার সাথে প্রতিটি দিন কাটানো যেন একটা উৎসব। আমার জীবনে এত চমৎকার ও যত্নশীল একজন মানুষ হওয়ার জন্য ধন্যবাদ।",
    rotation: "-rotate-3",
  },
  {
    id: 12,
    src: "/rimty/memories/12.jpg",
    title: "চিরকাল এবং সবসময়",
    note: "সময়ের সাথে সাথে এবং প্রতিটি নতুন বছরে তোমার প্রতি ভালোবাসা শুধু আরও গভীর আর অটুট হয়ে চলেছে।",
    rotation: "rotate-2",
  },
  {
    id: 13,
    src: "/rimty/memories/13.jpg",
    title: "আমার হৃদয়ের রানি",
    note: "পৃথিবীর সবচেয়ে অপূর্ব সুন্দর মানুষটাকে জন্মদিনের অনেক অনেক শুভেচ্ছা। সারা জীবন এভাবেই তোমার পাশে থাকতে চাই, আমার প্রিয় রিমতি।",
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
        <h2 className="text-3xl sm:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-rose-100 to-amber-200">
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
                  <span>তোমার সাথে এক টুকরো মুহূর্ত</span>
                </div>

                <h3 className="text-2xl font-serif font-bold text-amber-100 mb-4">
                  {activePhoto.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed font-light mb-6 italic border-l-2 border-rose-500/50 pl-4 py-1">
                  &ldquo;{activePhoto.note}&rdquo;
                </p>

                <div className="flex items-center gap-2 text-xs text-rose-300/80 font-serif mb-2">
                  <Heart className="w-4 h-4 fill-rose-400 text-rose-400" />
                  <span>অনেক ভালোবাসা সহ, মিশকাত ❤️</span>
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
