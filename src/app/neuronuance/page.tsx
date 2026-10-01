import type { Metadata } from "next";
import NeuroNuanceClient from "./NeuroNuanceClient";

export const metadata: Metadata = {
  title: "NeuroNuance Inc. | Transformational Coaching & Organizational Coherence | Cristi Trudgeon",
  description:
    "Where Science Meets Spirit. Neuroscience-backed transformational coaching, Dr. Joe Dispenza's Change Your Mind… Create New Results workshops, and HeartMath® coherence training for both forward-thinking leaders, teams, and individuals. Designed for Cristi Trudgeon by Miskat Hossain.",
  keywords: [
    "Cristi Trudgeon",
    "NeuroNuance Inc",
    "Change Your Mind Create New Results",
    "Dr Joe Dispenza NCS Consultant",
    "Executive Coherence Coaching",
    "HeartMath Certified Coach",
    "The Coherent Self",
    "Calgary Transformational Coach",
    "Neuroscience Leadership Workshops",
  ],
  openGraph: {
    title: "NeuroNuance Inc. Reimagined | Cristi Trudgeon",
    description:
      "A unified digital experience seamlessly bridging personal transformation and organizational leadership. Designed by Miskat Hossain for Squarespace 7.1.",
    url: "https://miskathossain.net/neuronuance",
    siteName: "NeuroNuance Inc. Reimagined",
    images: [
      {
        url: "/assets/neuronuance/hero-concept.jpg",
        width: 1920,
        height: 1080,
        alt: "NeuroNuance - Where Science Meets Spirit",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function NeuroNuancePage() {
  return <NeuroNuanceClient />;
}
