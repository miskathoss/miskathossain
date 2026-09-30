import type { Metadata } from "next";
import NepheliClient from "./NepheliClient";

export const metadata: Metadata = {
  title: "Financial Freedom With Nepheli | Wealth Building, Compound Interest & Financial Coaching",
  description:
    "Freedom is life's greatest reward. Master compound interest, build your emergency fund, and automate intentional wealth creation with Nepheli. Concept experience designed by Miskat Hossain.",
  openGraph: {
    title: "Financial Freedom With Nepheli | Custom Brand & Conversion Experience",
    description:
      "A high-converting digital experience and authority brand system crafted for @financialfreedomwithnepheli. Designed by Miskat Hossain.",
    images: [
      {
        url: "/assets/nepheli/guide-playbook.jpg",
        width: 1200,
        height: 1600,
        alt: "The Financial Freedom Playbook by Nepheli",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function FinancialFreedomWithNepheliPage() {
  return <NepheliClient />;
}
