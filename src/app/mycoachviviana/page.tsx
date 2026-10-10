import type { Metadata } from "next";
import VivianaClient from "../mycoachviviana.com/VivianaClient";

export const metadata: Metadata = {
  title: "Viviana Munoz | The LinkedIn Profit Project™ — Your First $2K Framework",
  description:
    "Build a profitable coaching business on LinkedIn without quitting your 9-to-5. Master organic social selling with Viviana Munoz. Redesigned by Miskat Hossain.",
  openGraph: {
    title: "Viviana Munoz | The LinkedIn Profit Project™ (Redesigned)",
    description:
      "A high-converting, luxury digital experience crafted for Viviana Munoz. Redesigned by Miskat Hossain.",
    url: "https://miskathossain.net/mycoachviviana",
    images: [
      {
        url: "/assets/viviana/2A7A6028-1.jpg",
        width: 1200,
        height: 800,
        alt: "Viviana Munoz - LinkedIn Business Coach",
      },
    ],
  },
};

export default function MyCoachVivianaPage() {
  return <VivianaClient />;
}
