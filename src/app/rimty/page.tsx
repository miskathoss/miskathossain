import React from "react";
import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import { HbdClient } from "./HbdClient";

const hindSiliguri = Hind_Siliguri({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["bengali"],
  display: "swap",
  variable: "--font-hind-siliguri",
});

export const metadata: Metadata = {
  title: "Happy Birthday Rimty! ❤️ | From Miskat",
  description:
    "A special interactive birthday landing page crafted step by step with all my love for my beautiful wife, Rimty.",
  alternates: {
    canonical: "https://miskathossain.net/rimty",
  },
  openGraph: {
    title: "Happy Birthday Rimty! ❤️",
    description: "A special birthday landing page crafted just for you.",
    url: "https://miskathossain.net/rimty",
    images: ["/rimty/rimty-5.jpg"],
  },
};

export default function RimtyPage() {
  return (
    <div className={`${hindSiliguri.className} font-sans`}>
      <HbdClient />
    </div>
  );
}
