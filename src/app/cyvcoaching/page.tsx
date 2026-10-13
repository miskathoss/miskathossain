import type { Metadata } from "next";
import CYVClient from "./CYVClient";

export const metadata: Metadata = {
  title: "Changing Your View Executive Coaching | Angel Laks — Executive & Personal Leadership Coach",
  description:
    "Redesigned digital flagship for Changing Your View Executive Coaching LLC (CYV Coaching) founded by Angel Laks — Air Force Veteran, MSA, and John Maxwell Team Certified Coach & Speaker. Premium executive coaching, personal development, team workshops, and keynote speaking in Mount Laurel, NJ. UX Redesign concept by Miskat Hossain.",
  openGraph: {
    title: "Changing Your View Executive Coaching | Angel Laks — Ignite the Leader Within",
    description:
      "A high-converting, modern executive coaching website redesign for Angel Laks & CYV Coaching. Strategic mindset transformation, Maxwell Leadership frameworks, and corporate culture elevation. Redesigned by Miskat Hossain.",
    url: "https://miskathossain.net/cyvcoaching",
    siteName: "Changing Your View Executive Coaching",
    images: [
      {
        url: "/assets/cyvcoaching/angel_portrait.jpg",
        width: 1920,
        height: 1440,
        alt: "Coach Angel Laks — Changing Your View Executive Coaching LLC",
      },
      {
        url: "/assets/cyvcoaching/logo.png",
        width: 1563,
        height: 1563,
        alt: "Changing Your View Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Changing Your View Executive Coaching | Angel Laks",
    description:
      "Modern executive coaching website redesign for Angel Laks. USAF Veteran, Maxwell Certified Coach & Speaker. UX Redesign by Miskat Hossain.",
    images: ["/assets/cyvcoaching/angel_portrait.jpg"],
  },
};

export default function CYVCoachingPage() {
  return <CYVClient />;
}
