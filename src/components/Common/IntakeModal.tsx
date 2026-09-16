"use client";

import { useEffect } from "react";
import { siteConfig } from "@/data/site";

export function IntakeModal() {
  useEffect(() => {
    const handleOpen = () => {
      if (typeof window !== "undefined") {
        window.open(siteConfig.calendly, "_blank", "noopener,noreferrer");
      }
    };

    window.addEventListener("open-intake-modal", handleOpen);
    return () => window.removeEventListener("open-intake-modal", handleOpen);
  }, []);

  return null;
}
