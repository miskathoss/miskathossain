import type { Metadata } from "next";
import MovemeantBoostClient from "./MovemeantBoostClient";

export const metadata: Metadata = {
  title: "The Movemeant Momentum Boost™ | 90-Day Executive Transition & Calling Sprint — Koi Rivers, PCC",
  description:
    "An intensive, high-velocity 90-day executive coaching sprint engineered for senior leaders, executive women, and coaches standing at a critical threshold. Clarify calling, master Power Moves executive presence, and build unshakeable momentum with Koi Rivers, PCC.",
  openGraph: {
    title: "The Movemeant Momentum Boost™ | 90-Day Executive Calling Sprint",
    description:
      "A high-impact 90-day sprint combining faith-forward grounding with executive strategy. Hold your threshold, make your power moves, and accelerate your leadership trajectory.",
    url: "https://miskathossain.net/movemeantnow/boost",
    siteName: "Movemeant Coaching and Consultancy",
    images: [
      {
        url: "/assets/movemeant/koi-rivers-portrait-square.jpg",
        width: 800,
        height: 800,
        alt: "The Movemeant Momentum Boost™ with Koi Rivers, PCC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Movemeant Momentum Boost™ | Koi Rivers, PCC",
    description:
      "90-day intensive executive transition and calling sprint for high-impact leaders.",
    images: ["/assets/movemeant/koi-rivers-portrait-square.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MovemeantBoostPage() {
  return <MovemeantBoostClient />;
}
