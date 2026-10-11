import type { Metadata } from "next";
import VeronicanaClient from "../veronicana/VeronicanaClient";

export const metadata: Metadata = {
  title: "Veronicana Holistic Therapies | Ana Veronica Mejger — Drogheda",
  description:
    "Discover Veronicana Holistic Therapies in Drogheda, Co. Louth. Lymphatic drainage, deep tissue & sports massage, sound bath therapy, reflexology, and 1:1 Pilates. UX Redesign by Miskat Hossain.",
  openGraph: {
    title: "Veronicana Holistic Therapies | Redesigned Experience",
    description: "Holistic healing, neuromuscular bodywork, and movement therapies in Drogheda.",
    url: "https://veronicanaholistictherapies.miskathossain.net",
    images: [
      {
        url: "/assets/veronicana/veronica-portrait.jpg",
        width: 1200,
        height: 1500,
        alt: "Veronicana Holistic Therapies",
      },
    ],
  },
};

export default function VeronicanaDomainPage() {
  return <VeronicanaClient />;
}
