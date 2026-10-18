import type { Metadata } from "next";
import GenerativeUIClient from "./GenerativeUIClient";

export const metadata: Metadata = {
  title: "Movemeant Generative UI Redesign | Adaptive Leadership & Transition Synthesizer",
  description:
    "Interactive Generative UI architecture redesign for Movemeant Coaching & Consultancy (founded by Koi Rivers, PCC). Real-time executive transition roadmap synthesis, somatic protocols, and dual-accredited coach education. Created by Miskat Hossain.",
  openGraph: {
    title: "Movemeant Generative UI Redesign | Koi Rivers, PCC",
    description:
      "Interactive Generative UI architecture transforming executive transitions, somatic grounding, and dual-accredited coach education in real-time.",
    url: "https://miskathossain.net/generative_ui",
    siteName: "Movemeant Generative UI",
    images: [
      {
        url: "/assets/movemeant/koi-rivers-portrait-square.jpg",
        width: 800,
        height: 800,
        alt: "Koi Rivers, PCC — Movemeant Generative UI Redesign",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Movemeant Generative UI Redesign | Koi Rivers, PCC",
    description:
      "Generative UI architecture for Movemeant Coaching & Consultancy. Redesigned with sub-second Next.js speed by Miskat Hossain.",
    images: ["/assets/movemeant/koi-rivers-portrait-square.jpg"],
  },
};

export default function GenerativeUIPage() {
  return <GenerativeUIClient />;
}
