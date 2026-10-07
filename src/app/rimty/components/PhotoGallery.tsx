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
    title: "আমার ফুল মানুষ",
    note: "যে আমাকে ভালোবেসে ভালো রাখে; যে আমার জীবনে ভালোবাসা ছড়ায়। যার মস্তিষ্কজুড়ে বিচরণ করে শুদ্ধ অনুভূতির কোলাহল। যার চোখের দৃষ্টিসীমায় অবহেলার কোনো স্থান নেই। যার বুকের সমস্ত আয়তনজুড়ে মিশে থাকে সৌন্দর্যের বহুবিধ সংজ্ঞা। যার ভালোবাসায় সংক্রমিত হয়ে যায় বেঁচে থাকার এক সুন্দর, ছোঁয়াচে অসুখ।",
    rotation: "-rotate-2",
  },
  {
    id: 2,
    src: "/rimty/memories/2.jpg",
    title: "এক ফ্রেমে তুমি আর আমি",
    note: "লাল বেনারসিতে মোড়ানো আমার আস্ত এক পৃথিবী; যার লাজুক দৃষ্টিতে লুকিয়ে ছিল নতুন এক জীবনের গল্প। আয়নার ওপারে ফুটে ওঠা ওই মায়াবী মুখের দিকে তাকিয়ে সেদিন বুঝেছিলাম—আমার সমস্ত সুখ আর প্রার্থনার শেষ ঠিকানা তুমি। যার পাশে দাঁড়ালে পূর্ণতা পায় আমার অস্তিত্ব, যার ভালোবাসায় জড়িয়ে থাকাটাই আমার জীবনের সেরা প্রাপ্তি।",
    rotation: "rotate-2",
  },
  {
    id: 3,
    src: "/rimty/memories/3.jpg",
    title: "কাঁধে রাখা নির্ভরতা",
    note: "বিয়েবাড়ির কোলাহল আর আলো ঝলমলে উৎসবের মাঝেও সবচেয়ে শান্ত মুহূর্ত ছিল এটি। ক্লান্ত দুটি চোখের সমস্ত নির্ভরতা যখন নিঃসংকোচে একটা কাঁধে এসে নামে, তখনই বোঝা যায় ভালোবাসা আসলে কতটা গভীর। তোমার আলতো স্পর্শ আর এই নিশ্চিন্ত ভরসাই আমার সমস্ত ক্লান্তি মুছে দেওয়ার একমাত্র ঠিকানা।",
    rotation: "-rotate-1",
  },
  {
    id: 4,
    src: "/rimty/memories/4.jpg",
    title: "আঙুলে আঙুল",
    note: "কোনো আড়ম্বর বা দীর্ঘ প্রতিশ্রুতির চেয়েও, হাতের তালুতে হাত ছুঁয়ে থাকার এই নীরব ভরসাটাই সবচেয়ে সত্যি। আলপনা আঁকা হাতের প্রতিটি রেখা যেন গোপনে বলে যায়—জীবনের বাকিটা পথ যত দুর্গমই হোক, আঙুলের এই বাঁধন কখনো আলগা হবে না।",
    rotation: "rotate-3",
  },
  {
    id: 5,
    src: "/rimty/memories/5.jpg",
    title: "যাত্রাপথের নিভৃত ঘুম",
    note: "দিনভর আচারের ক্লান্তি আর নির্ঘুম রাতের পর, চলমান গাড়ির জানালায় এক টুকরো পরম শান্তি। বাইরে যখন ব্যস্ত শহর ছুটছে নিজের নিয়মে, ভেতরে তখন দুটি ক্লান্ত প্রাণ একে অপরের বুকে খুঁজে নিয়েছে পৃথিবীর সবচেয়ে নিরাপদ আশ্রয়। যেখানে কোনো ক্লান্তি থাকে না, থাকে কেবল নিশ্চিন্ত ভালোবাসার গভীরতা।",
    rotation: "-rotate-3",
  },
  {
    id: 6,
    src: "/rimty/memories/6.jpg",
    title: "সবুজ ছায়ায় পথচলা",
    note: "গাছের ঘন ছায়া আর রোদের মিষ্টি আলো মেখে যখন আমরা একসাথে হেঁটে চলি, তখন প্রতিটি কদম যেন এক একটি প্রার্থনার মতো মনে হয়। তোমার হাত ধরে পাশে পাশে চলার মাঝে যে স্নিগ্ধতা আছে, তা জীবনের প্রতিটি অমসৃণ পথকেও সহজ করে দেয়। এই পথচলার কোনো শেষ না থাকুক, শুধু পাশাপাশি থাকাটুকুই পরম সার্থকতা।",
    rotation: "rotate-1",
  },
  {
    id: 7,
    src: "/rimty/memories/7.jpg",
    title: "মায়ার চাদরে",
    note: "ভালোবাসা কোনো জোরের গল্প নয়, ভালোবাসা হলো আলতো স্পর্শে বুক আগলে রাখার এক নীরব অনুভূতি। তোমার চোখের শান্ত দীপ্তি আর এই মৃদু উপস্থিতির মাঝে এক ধরণের অলৌকিক প্রশান্তি ছড়িয়ে থাকে। যে বাঁধন চোখে দেখা যায় না, অথচ যার উষ্ণতায় গোটা পৃথিবী জয় করার সাহস জন্মায়।",
    rotation: "-rotate-2",
  },
  {
    id: 8,
    src: "/rimty/memories/8.jpg",
    title: "মুচকি হাসির আলো",
    note: "ক্যামেরার লেন্সের সামনে দাঁড়িয়ে থাকা কেবল দুটি মানুষ নয়, যেন দুটি হৃদয়ের নিঃশব্দ বোঝাপড়া। তোমার ঠোঁটের কোণে লেগে থাকা এই স্নিগ্ধ হাসিটাই আমার প্রতিদিনের ক্লান্তি শেষের একমাত্র উপহার। যে হাসির আলোয় সংসারের প্রতিটি সাধারণ মুহূর্তও অসামান্য রূপ নেয়।",
    rotation: "rotate-2",
  },
  {
    id: 9,
    src: "/rimty/memories/9.jpg",
    title: "আমাদের একান্ত বিকেল",
    note: "কোনো পূর্বপরিকল্পনা ছাড়া, টেবিলজুড়ে জমিয়ে রাখা এক কাপ কফির আড্ডা আর এলোমেলো খুনসুটি। গালে হাত রেখে তোমার সেই মিষ্টি দুষ্টুমি আর সাধারণের মাঝে অসাধারণ হয়ে ওঠার মুহূর্তগুলোই আমার দিনবদলের সুখ। ছোট ছোট এই হাসিমুখগুলোই তো জীবনকে অর্থপূর্ণ করে তোলে।",
    rotation: "-rotate-1",
  },
  {
    id: 11,
    src: "/rimty/memories/11.jpg",
    title: "মেঘের নিচে আমরা দুজন",
    note: "মাথার ওপর বিশাল উদার আকাশ আর তার নিচে দাঁড়িয়ে থাকা দুটি সাধারণ মানুষ, যাদের পৃথিবীটা একে অপরকে ঘিরেই আবর্তিত হয়। মেঘেদের আনাগোনার মাঝেও তোমার চোখের এই সহজ দৃষ্টিটাই যেন আমার সবচেয়ে বড় দিগন্ত। যেখানে সব ঝড় থেমে যায়, আর নেমে আসে অনন্ত এক নীল নির্মলতা।",
    rotation: "-rotate-3",
  },
  {
    id: 12,
    src: "/rimty/memories/12.jpg",
    title: "ঘরের কোণে মায়াবী রাত",
    note: "চার দেয়ালের ভেতরের ঘরটা তখনই আপন নীড় হয়ে ওঠে, যখন সেখানে তোমার মতো একজন মায়াবী মানুষের উপস্থিতি থাকে। তোমার শান্ত সান্নিধ্যে সমস্ত কোলাহল কর্পূরের মতো উবে যায়। পৃথিবীর সমস্ত ব্যস্ততার ভিড়ে দিনশেষে এই আশ্রয়টুকুই আমার চিরন্তন স্বস্তি।",
    rotation: "rotate-2",
  },
  {
    id: 13,
    src: "/rimty/memories/13.jpg",
    title: "চিরসবুজ পথে তুমি-আমি",
    note: "গাছগাছালির ছায়ায় ঘেরা শান্ত মেঠোপথ আর সেই পথের ওপর দাঁড়িয়ে থাকা আমাদের এই যৌথ স্মৃতি। উৎসবের সাজপোশাক ছাড়িয়েও আমাদের অন্তরের মেলবন্ধনটাই এখানে সবচেয়ে বেশি সত্য। জীবনের যত বাঁকই আসুক না কেন, এই সবুজ স্নিগ্ধতার মতোই যেন চিরকাল অমলিন থাকে আমাদের ভালোবাসা।",
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
