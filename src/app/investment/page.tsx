import React from "react";
import type { Metadata } from "next";
import { InvestmentClient } from "./InvestmentClient";

export const metadata: Metadata = {
  title: "Private Investment & Executive Tiers | Miskat Hossain",
  description:
    "Confidential, fixed-scope investment tiers engineered for high-ticket executive coaches, category leaders, and enterprise advisory practices.",
  alternates: {
    canonical: "https://miskathossain.net/investment",
  },
  openGraph: {
    title: "Private Investment & Executive Tiers | Miskat Hossain",
    description:
      "Confidential, fixed-scope investment tiers engineered for high-ticket executive coaches, category leaders, and enterprise advisory practices.",
    url: "https://miskathossain.net/investment",
    type: "website",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function InvestmentPage() {
  return <InvestmentClient />;
}
