import React from "react";
import type { Metadata } from "next";
import { PricingClient } from "./PricingClient";

export const metadata: Metadata = {
  title: "Pricing & Investment Tiers | Miskat Hossain",
  description:
    "Explore transparent, fixed-scope partnership tiers for executive brand identity and high-converting websites built for leaders, executive coaches, and advisory firms.",
  alternates: {
    canonical: "https://miskathossain.net/pricing",
  },
  openGraph: {
    title: "Pricing & Investment Tiers | Miskat Hossain",
    description:
      "Explore transparent, fixed-scope partnership tiers for executive brand identity and high-converting websites built for leaders, executive coaches, and advisory firms.",
    url: "https://miskathossain.net/pricing",
    type: "website",
  },
};

export default function PricingPage() {
  return <PricingClient />;
}
