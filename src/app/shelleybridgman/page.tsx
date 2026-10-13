import type { Metadata } from "next";
import ShelleyClient from "./ShelleyClient";

export const metadata: Metadata = {
  title: "Shelley Bridgman | Own Your Uniqueness — Peak Performance Coach & Keynote Speaker",
  description:
    "Redesigned digital flagship for Shelley Bridgman — UKCP Psychotherapist, Keynote Speaker, Author of 'Stand-Up For Yourself', and Performance Mindset Coach. Empowering leaders and entrepreneurs to unlock their authentic purpose, conquer subconscious fears, and build lasting impact. UX Redesign concept by Miskat Hossain.",
  openGraph: {
    title: "Shelley Bridgman | Own Your Uniqueness — Executive Coaching & Keynotes",
    description:
      "A luxury, high-converting digital experience designed for Shelley Bridgman. Transformational change, fearless mindset, and the 4W Purpose Model. Bespoke redesign by Miskat Hossain.",
    url: "https://miskathossain.net/shelleybridgman",
    siteName: "Shelley Bridgman",
    images: [
      {
        url: "/assets/shelleybridgman/ShelleyBridgman-headshot.webp",
        width: 1200,
        height: 1200,
        alt: "Shelley Bridgman — Purpose-Driven Peak Performance Coach",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shelley Bridgman | Purpose-Driven Peak Performance Coach",
    description:
      "Unlock your extraordinary to make a bigger difference. Premium UX redesign concept by Miskat Hossain.",
    images: ["/assets/shelleybridgman/ShelleyBridgman-headshot.webp"],
  },
};

export default function ShelleyBridgmanPage() {
  return <ShelleyClient />;
}
