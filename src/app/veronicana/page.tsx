import type { Metadata } from "next";
import VeronicanaClient from "./VeronicanaClient";

export const metadata: Metadata = {
  title: "Veronicana Holistic Therapies | Ana Veronica Mejger — Drogheda, Co. Louth",
  description:
    "Redesigned landing page for Veronicana Holistic Therapies. Dedicated clinical massage, lymphatic drainage, reflexology, Reiki sound baths, and 1:1 Pilates by ITEC-qualified therapist Ana Veronica Mejger at Myobody Balance, Drogheda. UX Redesign by Miskat Hossain.",
  openGraph: {
    title: "Veronicana Holistic Therapies | Restorative Health & Movement in Drogheda",
    description:
      "A serene, high-converting holistic healthcare digital experience crafted for Ana Veronica Mejger. UX Redesign by Miskat Hossain.",
    url: "https://miskathossain.net/veronicana",
    siteName: "Veronicana Holistic Therapies",
    images: [
      {
        url: "/assets/veronicana/veronica-portrait.jpg",
        width: 1200,
        height: 1500,
        alt: "Ana Veronica Mejger - Veronicana Holistic Therapies",
      },
      {
        url: "/assets/veronicana/atmosphere-hero.jpg",
        width: 1200,
        height: 900,
        alt: "Veronicana Treatment Sanctuary",
      },
    ],
    locale: "en_IE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Veronicana Holistic Therapies | UX Redesign",
    description:
      "Nurturing body, mind and soul into harmonious wholeness. Redesigned by Miskat Hossain.",
    images: ["/assets/veronicana/veronica-portrait.jpg"],
  },
};

export default function VeronicanaPage() {
  return <VeronicanaClient />;
}
