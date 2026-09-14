"use client";

import React, { useRef, useEffect } from "react";

export function VisualSystemObject() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let angleX = 0.2;
    let angleY = 0.4;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = (e.clientX - rect.left) / rect.width - 0.5;
      mouseY = (e.clientY - rect.top) / rect.height - 0.5;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Set high-DPI canvas
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
    };
    resize();
    window.addEventListener("resize", resize);

    // 3D Math projection helpers
    const project = (x: number, y: number, z: number, size: number) => {
      const fov = 400;
      const distance = 450;
      // Rotate around Y
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      const x1 = x * cosY - z * sinY;
      const z1 = z * cosY + x * sinY;

      // Rotate around X
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const y2 = y * cosX - z1 * sinX;
      const z2 = z1 * cosX + y * sinX;

      const scale = fov / (distance + z2);
      return {
        x: canvas.width / 2 + x1 * scale * (size / 100),
        y: canvas.height / 2 + y2 * scale * (size / 100),
        z: z2,
        scale,
      };
    };

    const render = () => {
      // Gentle continuous rotation influenced by mouse
      angleY += 0.006 + mouseX * 0.02;
      angleX += 0.003 + mouseY * 0.015;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const baseRadius = Math.min(canvas.width, canvas.height) * 0.22;

      // Draw outer geometric grid rings (Visual System / Identity Grid)
      ctx.lineWidth = 1 * dpr;
      ctx.strokeStyle = "rgba(255, 255, 255, 0.12)";

      // Ring 1: Equatorial circle
      ctx.beginPath();
      for (let i = 0; i <= 64; i++) {
        const theta = (i / 64) * Math.PI * 2;
        const x = Math.cos(theta) * baseRadius;
        const z = Math.sin(theta) * baseRadius;
        const p = project(x, 0, z, 100);
        if (i === 0) ctx.moveTo(p.x, p.y);
        else ctx.lineTo(p.x, p.y);
      }
      ctx.stroke();

      // Ring 2: Polar circle
      ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
      ctx.beginPath();
      for (let i = 0; i <= 64; i++) {
        const theta = (i / 64) * Math.PI * 2;
        const y = Math.cos(theta) * baseRadius;
        const z = Math.sin(theta) * baseRadius;
        const p = project(0, y, z, 100);
        if (i === 0) ctx.moveTo(p.x, p.y);
        else ctx.lineTo(p.x, p.y);
      }
      ctx.stroke();

      // Ring 3: Tilted coordinate ring (rose accent)
      ctx.strokeStyle = "rgba(224, 40, 79, 0.4)";
      ctx.beginPath();
      for (let i = 0; i <= 64; i++) {
        const theta = (i / 64) * Math.PI * 2;
        const x = Math.cos(theta) * baseRadius * 0.85;
        const y = Math.sin(theta) * baseRadius * 0.85;
        const p = project(x, y, 0, 100);
        if (i === 0) ctx.moveTo(p.x, p.y);
        else ctx.lineTo(p.x, p.y);
      }
      ctx.stroke();

      // Coordinate nodes (Identity anchors)
      const nodes = [
        { x: baseRadius, y: 0, z: 0 },
        { x: -baseRadius, y: 0, z: 0 },
        { x: 0, y: baseRadius, z: 0 },
        { x: 0, y: -baseRadius, z: 0 },
        { x: 0, y: 0, z: baseRadius },
        { x: 0, y: 0, z: -baseRadius },
      ];

      nodes.forEach((n) => {
        const p = project(n.x, n.y, n.z, 100);
        ctx.fillStyle = "rgba(245, 243, 239, 0.75)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2.5 * dpr, 0, Math.PI * 2);
        ctx.fill();
      });

      // Center core point (Rose beacon)
      const center = project(0, 0, 0, 100);
      ctx.fillStyle = "#E0284F";
      ctx.beginPath();
      ctx.arc(center.x, center.y, 3 * dpr, 0, Math.PI * 2);
      ctx.fill();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="relative w-full h-[200px] sm:h-[260px] flex items-center justify-center pointer-events-none select-none my-4 sm:my-6">
      <canvas
        ref={canvasRef}
        className="w-full h-full max-w-[500px]"
        style={{ width: "100%", height: "100%" }}
      />
      <div className="absolute bottom-2 flex items-center gap-2 text-[10px] tracking-[0.24em] uppercase text-cream/40 font-mono">
        <span className="w-1.5 h-1.5 rounded-full bg-rose inline-block" />
        <span>Systemic Grid &bull; Spatial Identity</span>
      </div>
    </div>
  );
}
