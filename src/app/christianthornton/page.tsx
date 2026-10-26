import type { Metadata } from "next";
import ChristianClient from "./ChristianClient";

export const metadata: Metadata = {
  title: "Christian David Thornton | Building Stronger Organizations. Expanding Their Impact.",
  description:
    "Executive Leadership, Organizational Strategy, and Mission-Driven Impact by Christian David Thornton — U.S. Navy Veteran, CEO & Civic Leader. UX Redesign concept by Miskat Hossain.",
  openGraph: {
    title: "Christian David Thornton | Executive Leadership & Organizational Strategy",
    description:
      "Transforming organizations into stronger, sustainable, and mission-focused enterprises. 12+ years nonprofit leadership, 4x organizational growth, 650% revenue diversification. UX Redesign concept by Miskat Hossain.",
    url: "https://miskathossain.net/christianthornton",
    siteName: "Christian David Thornton",
    images: [
      {
        url: "/assets/christianthornton/christian-sample-hero-crop.png",
        width: 1024,
        height: 576,
        alt: "Christian David Thornton — Executive Leadership Redesign",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian David Thornton | Executive Leadership & Strategy",
    description:
      "Building Stronger Organizations. Expanding Their Impact. Modern executive digital flagship designed by Miskat Hossain.",
    images: ["/assets/christianthornton/christian-sample-hero-crop.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ChristianThorntonPage() {
  return <ChristianClient />;
}
