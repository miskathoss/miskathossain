import type { Metadata } from "next";
import VivianaClient from "./VivianaClient";

export const metadata: Metadata = {
  title: "Viviana Munoz | The LinkedIn Profit Project™ — Your First $2K Framework",
  description:
    "Build a profitable coaching business on LinkedIn without quitting your 9-to-5. Master organic social selling, authentic connection, and high-ticket client acquisition with Viviana Munoz. Redesigned by Miskat Hossain.",
  keywords: [
    "Viviana Munoz",
    "mycoachviviana",
    "LinkedIn Marketing Coach",
    "Part Time Entrepreneur Project",
    "The LinkedIn Profit Project",
    "First $2K Framework",
    "Social Selling Blueprint",
    "Organic LinkedIn Lead Generation",
    "Executive Coaching on LinkedIn",
    "Miskat Hossain Redesign",
  ],
  openGraph: {
    title: "Viviana Munoz | The LinkedIn Profit Project™ (Redesigned)",
    description:
      "A high-converting, luxury digital experience and organic client acquisition system crafted for Viviana Munoz. Redesigned with Next.js by Miskat Hossain.",
    url: "https://miskathossain.net/mycoachviviana.com",
    siteName: "Viviana Munoz Redesigned",
    images: [
      {
        url: "/assets/viviana/2A7A6028-1.jpg",
        width: 1200,
        height: 800,
        alt: "Viviana Munoz - LinkedIn Business Coach",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MyCoachVivianaComPage() {
  return <VivianaClient />;
}
