"use client";

import React, { useState } from "react";
import Image from "next/image";
import { soundEngine } from "./AudioEngine";
import { Heart, Sparkles, X, Camera, Instagram } from "lucide-react";

interface PhotoCredit {
  name: string;
  instagramUrl: string;
}

interface PhotoItem {
  id: number;
  src: string;
  title: string;
  note: string;
  rotation: string;
  credit?: PhotoCredit;
}

const photos: PhotoItem[] = [
  {
    id: 1,
    src: "/rimty/memories/1.jpg",
    title: "আমার ফুল মানুষ",
    note: "যে আমাকে ভালোবেসে ভালো রাখে; যে আমার জীবনে ভালোবাসা ছড়ায়। যার মস্তিষ্কজুড়ে বিচরণ করে শুদ্ধ অনুভূতির কোলাহল। যার চোখের দৃষ্টিসীমায় অবহেলার কোনো স্থান নেই। যার বুকের সমস্ত আয়তনজুড়ে মিশে থাকে সৌন্দর্যের বহুবিধ সংজ্ঞা। যার ভালোবাসায় সংক্রমিত হয়ে যায় বেঁচে থাকার এক সুন্দর, ছোঁয়াচে অসুখ।",
    rotation: "-rotate-2",
  },
  {
    id: 2,
    src: "/rimty/memories/2.jpg",
    title: "প্রতিচ্ছবি",
    note: "এক অদ্ভুত মায়াময় স্তব্ধতা। যার সাজপোশাকের জমকালো আভা ছাপিয়ে চোখ আটকে থাকে তার শান্ত চাহনিতে। যার উপস্থিতিতে চারপাশের সমস্ত চঞ্চলতা নিঃশব্দ হয়ে আসে। কাঁচের ওপারে ফুটে থাকা সেই মুখটি যেন আমার জীবনের সবচেয়ে পবিত্র প্রাপ্তি, যার স্নিগ্ধতায় সব ক্লান্তির অবসান।",
    rotation: "rotate-2",
    credit: {
      name: "Unaisa Khan",
      instagramUrl: "https://www.instagram.com/_unaisa.khan_/",
    },
  },
  {
    id: 3,
    src: "/rimty/memories/3.jpg",
    title: "একটুকরো প্রশান্তি",
    note: "কোলাহলমুখর এই পৃথিবীর ভিড়ে নিঃশব্দ এক আশ্রয়। যার সামান্যতম হেলান দিয়ে থাকার মাঝেও মিশে থাকে আজন্ম নির্ভরতা। যার অনুভূতির গভীরতা বুঝতে কোনো কথার প্রয়োজন হয় না; শুধু পাশে থাকাটুকুই যেন যাবতীয় অনিশ্চয়তার বিরুদ্ধে এক শান্ত প্রতিবাদ।",
    rotation: "-rotate-1",
    credit: {
      name: "Unaisa Khan",
      instagramUrl: "https://www.instagram.com/_unaisa.khan_/",
    },
  },
  {
    id: 4,
    src: "/rimty/memories/4.jpg",
    title: "আঙুলে আঙুল",
    note: "কোনো অলংকার কিংবা রঙের প্রদর্শনী নয়, কেবল দুটি হাতের স্পর্শে রচিত এক মৌন স্বীকারোক্তি। যে স্পর্শে শব্দের চেয়ে বিশ্বাস বেশি, প্রতিশ্রুতির চেয়ে অনুভব গাঢ়। হাত ছুঁয়ে থাকার এই নীরব ভাষাটাই যেন আমাদের নিজস্ব এক পৃথিবী গড়ে তোলে।",
    rotation: "rotate-3",
    credit: {
      name: "Unaisa Khan",
      instagramUrl: "https://www.instagram.com/_unaisa.khan_/",
    },
  },
  {
    id: 5,
    src: "/rimty/memories/5.jpg",
    title: "নিভৃত বিশ্রাম",
    note: "সব আয়োজন আর আনুষ্ঠানিকতা শেষের এক নিষ্কলুষ নির্জনতা। যেখানে সকল আবরণ খসে পড়ে, উন্মোচিত হয় সম্পর্কের সবচেয়ে সহজ, নিঃশঙ্ক রূপ। চলন্ত চাকার ছন্দে ঘুমিয়ে থাকা এই শান্ত মুখের মায়াতেই লুকিয়ে আছে আমার সমস্ত স্বস্তির ঠিকানা।",
    rotation: "-rotate-3",
    credit: {
      name: "Mahib Abrar Khan",
      instagramUrl: "https://www.instagram.com/_khan_mahib_/",
    },
  },
  {
    id: 6,
    src: "/rimty/memories/6.jpg",
    title: "ছায়া ও আলো",
    note: "সবুজ পাতার ফাঁক গলে আসা নরম রোদের মতো স্নিগ্ধ যার চরিত্র। যার সাথে কোনো নির্দিষ্ট গন্তব্য ছাড়াই অনন্তকাল হেঁটে যাওয়া যায়। যে পথে সে হাঁটে, সে পথেই যেন ফুটে ওঠে জীবনের সহজতম সৌন্দর্য; যার পাশে থাকাটাই এক ধরনের নীরব উদযাপন।",
    rotation: "rotate-1",
  },
  {
    id: 7,
    src: "/rimty/memories/7.jpg",
    title: "মায়া",
    note: "যার সান্নিধ্যে এলে মনের সমস্ত উথালপাথাল শান্ত হয়ে যায়। যার ভালোবাসায় কোনো বাড়াবাড়ি নেই, আছে নিঃশব্দে জড়িয়ে রাখার এক নিবিড় অনুভূতি। এক জীবনে কাউকে এতটা নিজের করে পাওয়া হয়তো কোনো অদৃশ্যের আশীর্বাদ।",
    rotation: "-rotate-2",
  },
  {
    id: 8,
    src: "/rimty/memories/8.jpg",
    title: "সহজ সুন্দর",
    note: "যার ঠোঁটের কোণে লেগে থাকা সামান্য হাসিও মনের ভেতর আলো জ্বেলে দেয়। যার চোখে চোখ রাখলে কোনো জটিলতা থাকে না, মুছে যায় সব দ্বিধা। জীবনের সবচেয়ে কঠিন সমীকরণগুলোকেও যে অনায়াসে সহজ করে দিতে জানে।",
    rotation: "rotate-2",
  },
  {
    id: 9,
    src: "/rimty/memories/9.jpg",
    title: "এক চিলতে বিকেল",
    note: "কোনো কৃত্রিমতা ছাড়া, খুব সাধারণ মুহূর্তের ভিড়েও অসাধারণ হয়ে থাকা। যার চোখের কোণে লুকিয়ে থাকে এক টুকরো চঞ্চল আনন্দ আর ছেলেমানুষী মায়া। কফির ধোঁয়া আর এলোমেলো কথার মাঝে যার সাথে সময় হারিয়ে ফেলাটাই দিনের সবচেয়ে প্রিয় অংশ।",
    rotation: "-rotate-1",
  },
  {
    id: 11,
    src: "/rimty/memories/11.jpg",
    title: "দিগন্ত",
    note: "খোলা আকাশের নিচে দাঁড়ালে যার কথা ভাবলে আকাশটাকে আরও একটু বেশি উদার মনে হয়। যার মননে কোনো সংকীর্ণতা নেই, যার অনুভূতিগুলো মেঘের মতোই নির্মল। বিশাল এই চরাচরে যে মানুষটি আমার সমস্ত ভাবনার কেন্দ্রবিন্দু।",
    rotation: "-rotate-3",
  },
  {
    id: 12,
    src: "/rimty/memories/12.jpg",
    title: "আপন নীড়",
    note: "যার উপস্থিতিতে একটা সাধারণ ঘরও পরম স্বস্তির আশ্রয় হয়ে ওঠে। দিনের যাবতীয় ক্লান্তি শেষে যার চোখের আলোয় ফিরে পাওয়া যায় নিজেকে। যার ভালোবাসার নিবিড় স্পর্শে প্রতিটি দিন নতুন এক পূর্ণতা খুঁজে পায়।",
    rotation: "rotate-2",
  },
  {
    id: 13,
    src: "/rimty/memories/13.jpg",
    title: "পথের বাঁকে",
    note: "প্রকৃতির নিবিড় শ্যামলতার মাঝে যেন এক টুকরো স্নিগ্ধ বিস্ময়। যার ব্যক্তিত্বে মিশে থাকে আভিজাত্য আর সারল্যের এক দুর্লভ ভারসাম্য। জীবনের এই দীর্ঘ যাত্রাপথে যার হাত ধরে চলার চেয়ে বড় কোনো সৌভাগ্য আমার জানা নেই।",
    rotation: "-rotate-2",
    credit: {
      name: "Mahib Abrar Khan",
      instagramUrl: "https://www.instagram.com/_khan_mahib_/",
    },
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

                {activePhoto.credit && (
                  <div className="flex items-center gap-2 mb-4 px-3 py-1.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-xs text-slate-300 w-fit backdrop-blur-sm">
                    <Camera className="w-3.5 h-3.5 text-rose-300 shrink-0" />
                    <span className="text-slate-400">ছবি:</span>
                    <a
                      href={activePhoto.credit.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-rose-200 hover:text-white font-medium underline underline-offset-2 decoration-rose-400/40 hover:decoration-white transition-colors"
                    >
                      <Instagram className="w-3.5 h-3.5 text-rose-400" />
                      <span>{activePhoto.credit.name}</span>
                    </a>
                  </div>
                )}

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
