"use client";

import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "subtle" | "interactive";
  onClick?: () => void;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  variant = "default",
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        // Base glass styling adhering strictly to the design system:
        // background: rgba(255,255,255,0.08), backdrop-blur, 1px border rgba(255,255,255,0.16)
        "relative backdrop-blur-2xl bg-white/[0.08] border border-white/[0.16] shadow-2xl",
        "rounded-[24px] sm:rounded-[28px] overflow-hidden",
        "before:absolute before:inset-0 before:pointer-events-none before:rounded-[inherit]",
        "before:border before:border-white/[0.12] before:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.22)]",
        variant === "interactive" &&
          "transition-all duration-300 hover:bg-white/[0.12] hover:border-white/[0.24] cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  );
};
