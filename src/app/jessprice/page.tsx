import type { Metadata } from "next";
import JessPriceClient from "./JessPriceClient";

export const metadata: Metadata = {
  title: "Jess Price | Transforming Learning into Business Results | Senior Instructional Designer & Learning Strategist",
  description:
    "Freelance Senior Curriculum Developer and Instructional Designer with 20 years of experience leading digital transformation across healthcare, automotive, and education. Digital flagship redesign concept by Miskat Hossain.",
  keywords: [
    "Jess Price",
    "Instructional Designer",
    "Senior Curriculum Developer",
    "Learning Strategist",
    "eLearning Specialist",
    "Virtual Training",
    "Articulate Storyline 360",
    "Workday Training",
    "Synthesia AI Training",
    "Healthcare Instructional Design",
    "Automotive Training",
    "Miskat Hossain Redesign",
  ],
  authors: [{ name: "Jess Price" }, { name: "Miskat Hossain", url: "https://miskathossain.net" }],
  creator: "Miskat Hossain",
  alternates: {
    canonical: "https://miskathossain.net/jessprice",
  },
  openGraph: {
    title: "Jess Price | Transforming Learning into Business Results",
    description:
      "Strategic, engaging, and measurable learning solutions. 20 years experience trusted by Mayo Clinic, Cleveland Clinic, Honda, and Kettering Health. Redesign concept by Miskat Hossain.",
    url: "https://miskathossain.net/jessprice",
    siteName: "Jess Price Portfolio — Redesigned by Miskat Hossain",
    images: [
      {
        url: "/assets/jessprice/jess-hero-sample-2k.png",
        width: 2048,
        height: 1364,
        alt: "Jess Price — Transforming Learning into Business Results (Redesign Hero)",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jess Price | Senior Instructional Designer & Learning Strategist",
    description:
      "Transforming Learning into Business Results. High-impact curriculum design & enterprise software training. Portfolio redesign by Miskat Hossain.",
    images: ["/assets/jessprice/jess-hero-sample-2k.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function JessPricePage() {
  return <JessPriceClient />;
}
