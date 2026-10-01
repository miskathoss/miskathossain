"use client";

import React, { useRef, useEffect, useState } from "react";
import { soundEngine } from "./AudioEngine";
import { Sparkles, Gift, Heart, CheckCircle2 } from "lucide-react";

interface Coupon {
  id: number;
  icon: string;
  title: string;
  description: string;
  badge: string;
}

const coupons: Coupon[] = [
  {
    id: 1,
    icon: "☕",
    title: "Breakfast in Bed & Special Coffee",
    description: "Served hot with warm hugs and kisses whenever you desire to sleep in.",
    badge: "Unlimited Validity",
  },
  {
    id: 2,
    icon: "✈️",
    title: "Surprise Romantic Getaway",
    description: "You pick the dream destination, and I take care of every single detail.",
    badge: "VIP Pass",
  },
  {
    id: 3,
    icon: "💆‍♀️",
    title: "1-Hour Ultimate Relaxing Massage",
    description: "Scented candles, soothing music, and complete relaxation on demand.",
    badge: "Anytime Pass",
  },
  {
    id: 4,
    icon: "👑",
    title: "The Queen's Wish Granted",
    description: "Whatever Rimty wants, Rimty gets! One absolute wish granted with zero questions asked.",
    badge: "Forever Valid",
  },
];

function ScratchCardItem({ coupon }: { coupon: Coupon }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const isScratching = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Fill with rose-gold shimmering foil
    const width = (canvas.width = canvas.offsetWidth);
    const height = (canvas.height = canvas.offsetHeight);

    const grad = ctx.createLinearGradient(0, 0, width, height);
    grad.addColorStop(0, "#E28B9C");
    grad.addColorStop(0.3, "#F5D0A9");
    grad.addColorStop(0.7, "#D9778A");
    grad.addColorStop(1, "#E8A598");

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    // Text on foil
    ctx.fillStyle = "#5E1825";
    ctx.font = "bold 14px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("✨ Scratch Here to Reveal ✨", width / 2, height / 2 - 5);
    ctx.font = "11px sans-serif";
    ctx.fillText("Drag your finger or mouse", width / 2, height / 2 + 15);
  }, []);

  const scratch = (clientX: number, clientY: number) => {
    if (isRevealed) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 22, 0, Math.PI * 2);
    ctx.fill();

    checkPercentage();
  };

  const checkPercentage = () => {
    if (isRevealed) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Sample pixels
    const width = canvas.width;
    const height = canvas.height;
    const imgData = ctx.getImageData(0, 0, width, height);
    let transparentCount = 0;
    const totalPixels = imgData.data.length / 4;

    for (let i = 3; i < imgData.data.length; i += 16) {
      if (imgData.data[i] === 0) transparentCount += 4;
    }

    if (transparentCount / totalPixels > 0.4) {
      setIsRevealed(true);
      soundEngine.playChime();
      ctx.clearRect(0, 0, width, height);
    }
  };

  return (
    <div className="relative w-full max-w-xs h-56 rounded-2xl overflow-hidden p-6 bg-gradient-to-br from-slate-900/90 to-slate-950 border border-rose-500/30 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between select-none">
      {/* Underlying revealed content */}
      <div className="flex flex-col h-full justify-between z-0">
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-3xl">{coupon.icon}</span>
            <span className="text-[10px] uppercase font-mono px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30">
              {coupon.badge}
            </span>
          </div>
          <h4 className="text-lg font-serif font-bold text-amber-100 mb-1 leading-snug">
            {coupon.title}
          </h4>
          <p className="text-xs text-slate-300/80 leading-relaxed font-light">
            {coupon.description}
          </p>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-rose-300 font-serif pt-2 border-t border-white/10">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          <span>Officially Claimable by Rimty</span>
        </div>
      </div>

      {/* Scratch canvas overlay */}
      {!isRevealed && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full cursor-crosshair z-10 touch-none"
          onMouseDown={() => (isScratching.current = true)}
          onMouseUp={() => (isScratching.current = false)}
          onMouseLeave={() => (isScratching.current = false)}
          onMouseMove={(e) => {
            if (isScratching.current) scratch(e.clientX, e.clientY);
          }}
          onTouchStart={() => (isScratching.current = true)}
          onTouchEnd={() => (isScratching.current = false)}
          onTouchMove={(e) => {
            if (isScratching.current && e.touches[0]) {
              scratch(e.touches[0].clientX, e.touches[0].clientY);
            }
          }}
        />
      )}
    </div>
  );
}

export function ScratchCards() {
  return (
    <div className="relative z-10 py-16 px-4 max-w-5xl mx-auto">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/20 text-amber-300 text-xs tracking-widest uppercase mb-3">
          <Gift className="w-3.5 h-3.5" />
          <span>Interactive Birthday Gifts</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-rose-100 to-amber-200">
          Rimty&apos;s Golden Love Coupons 🎟️
        </h2>
        <p className="text-sm text-slate-300/80 mt-2 max-w-md mx-auto">
          Rub your cursor or finger over each card to scratch and claim your exclusive birthday promises.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
        {coupons.map((coupon) => (
          <ScratchCardItem key={coupon.id} coupon={coupon} />
        ))}
      </div>
    </div>
  );
}
