import type { Metadata } from "next";
import AaronDemoClient from "./AaronDemoClient";

export const metadata: Metadata = {
  title: "Aaron McNair | Master Your Mind, Master Your Life",
  description:
    "An elevated, high-converting digital experience and personal brand system redesigned for Aaron McNair — Certified Life Coach, Fitness Trainer, and Spirituality Mindset Mentor. Redesigned by Miskat Hossain.",
  openGraph: {
    title: "Aaron McNair | Master Your Mind, Master Your Life",
    description:
      "A clean, modern, and high-converting landing page crafted for Aaron McNair. Designed by Miskat Hossain.",
    images: [
      {
        url: "/assets/aaron/aaron-portrait.jpg",
        width: 1200,
        height: 630,
        alt: "Aaron McNair Redesign Concept",
      },
    ],
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function AaronDemoPage() {
  return <AaronDemoClient />;
}
