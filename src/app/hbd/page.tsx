import React from "react";
import type { Metadata } from "next";
import { HbdClient } from "./HbdClient";

export const metadata: Metadata = {
  title: "Happy Birthday Rimty! ❤️ | From Miskat",
  description:
    "A special interactive birthday experience crafted with all my love for my beautiful wife, Rimty.",
  openGraph: {
    title: "Happy Birthday Rimty! ❤️",
    description: "A special birthday surprise crafted just for you.",
    images: ["/hbd/rimty-5.jpg"],
  },
};

export default function HbdPage() {
  return <HbdClient />;
}
