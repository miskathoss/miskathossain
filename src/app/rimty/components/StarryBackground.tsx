"use client";

import React, { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  baseAlpha: number;
  alpha: number;
  pulseSpeed: number;
  hue: number;
}

interface Bokeh {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  alpha: number;
  color: string;
}

export function StarryBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initElements();
    };

    window.addEventListener("resize", handleResize);

    const stars: Star[] = [];
    const bokehs: Bokeh[] = [];

    const initElements = () => {
      stars.length = 0;
      bokehs.length = 0;

      // 120 twinkling stars
      const starCount = Math.floor((width * height) / 9000);
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 1.8 + 0.6,
          baseAlpha: Math.random() * 0.6 + 0.2,
          alpha: Math.random(),
          pulseSpeed: Math.random() * 0.03 + 0.01,
          hue: Math.random() > 0.6 ? 40 : 210, // Warm gold vs soft celestial blue
        });
      }

      // Floating romantic rose-gold & champagne bokeh orbs
      const colors = [
        "rgba(255, 180, 195, ", // Rose petal
        "rgba(245, 215, 160, ", // Champagne gold
        "rgba(165, 220, 240, ", // Ice mint (matches her dress!)
        "rgba(235, 140, 170, ", // Deep rose
      ];

      for (let i = 0; i < 22; i++) {
        bokehs.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 55 + 25,
          vx: (Math.random() - 0.5) * 0.35,
          vy: -Math.random() * 0.45 - 0.15,
          alpha: Math.random() * 0.2 + 0.08,
          color: colors[i % colors.length],
        });
      }
    };

    initElements();

    let mouseX = width / 2;
    let mouseY = height / 2;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    let t = 0;
    const render = () => {
      t += 0.015;
      ctx.clearRect(0, 0, width, height);

      // Deep celestial midnight velvet gradient
      const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
      bgGrad.addColorStop(0, "#080914");
      bgGrad.addColorStop(0.5, "#0D0F1F");
      bgGrad.addColorStop(1, "#150C1B");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Render bokeh orbs
      for (const b of bokehs) {
        b.x += b.vx;
        b.y += b.vy;
        if (b.y < -b.radius * 2) {
          b.y = height + b.radius * 2;
          b.x = Math.random() * width;
        }
        if (b.x < -b.radius * 2) b.x = width + b.radius * 2;
        if (b.x > width + b.radius * 2) b.x = -b.radius * 2;

        const radial = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.radius);
        radial.addColorStop(0, `${b.color}${b.alpha * 1.5})`);
        radial.addColorStop(0.6, `${b.color}${b.alpha * 0.4})`);
        radial.addColorStop(1, `${b.color}0)`);

        ctx.fillStyle = radial;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Render twinkling stars
      for (const s of stars) {
        s.alpha += s.pulseSpeed;
        const currentAlpha = s.baseAlpha + Math.sin(s.alpha) * 0.35;

        // Subtle parallax from mouse
        const dx = (mouseX - width / 2) * 0.015 * (s.size / 2);
        const dy = (mouseY - height / 2) * 0.015 * (s.size / 2);

        ctx.fillStyle = `hsla(${s.hue}, 80%, 90%, ${Math.max(0.1, currentAlpha)})`;
        ctx.beginPath();
        ctx.arc(s.x + dx, s.y + dy, s.size, 0, Math.PI * 2);
        ctx.fill();

        // Cross flare on brightest stars
        if (s.size > 2.0 && currentAlpha > 0.6) {
          ctx.strokeStyle = `hsla(${s.hue}, 100%, 95%, ${currentAlpha * 0.4})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(s.x + dx - s.size * 3, s.y + dy);
          ctx.lineTo(s.x + dx + s.size * 3, s.y + dy);
          ctx.moveTo(s.x + dx, s.y + dy - s.size * 3);
          ctx.lineTo(s.x + dx, s.y + dy + s.size * 3);
          ctx.stroke();
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.95 }}
    />
  );
}
