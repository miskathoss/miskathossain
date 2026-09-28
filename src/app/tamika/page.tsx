import type { Metadata } from "next";
import TamikaClient from "./TamikaClient";

export const metadata: Metadata = {
  title: "Tamika Shanea Robinson, MBA | Keller Williams Living Realtor® & Strategist",
  description:
    "Elevating Cleveland living with vision, heart, and strategic MBA precision. Trusted Keller Williams Living Realtor®, real estate investor, and founder of PASS Real Estate Coaching. Redesigned by Miskat Hossain.",
  openGraph: {
    title: "Tamika Shanea Robinson, MBA | Keller Williams Living Realtor®",
    description:
      "A high-converting, luxury real estate digital experience and brand system crafted for Tamika Shanea Robinson, MBA. Designed by Miskat Hossain.",
    images: [
      {
        url: "/assets/tamika/tamika-real-portrait.jpg",
        width: 1076,
        height: 1614,
        alt: "Tamika Shanea Robinson, MBA - Keller Williams Living Realtor",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TamikaPage() {
  return <TamikaClient />;
}
