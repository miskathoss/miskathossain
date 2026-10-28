import type { Metadata } from "next";
import JessPriceClient from "./JessPriceClient";

export const metadata: Metadata = {
  title: "Jess Price | Transforming Learning into Business Results | Senior Instructional Designer",
  description:
    "Freelance Senior Curriculum Developer and Instructional Designer with 20 years of experience leading digital transformation across healthcare, automotive, and education.",
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
  ],
  authors: [{ name: "Jess Price" }],
  creator: "Jess Price",
  alternates: {
    canonical: "https://miskathossain.net/jessprice",
  },
  openGraph: {
    title: "Jess Price | Transforming Learning into Business Results",
    description:
      "Strategic, engaging, and measurable learning solutions. 20 years of experience trusted by Mayo Clinic, Cleveland Clinic, Honda, and Kettering Health.",
    url: "https://miskathossain.net/jessprice",
    siteName: "Jess Price Portfolio",
    images: [
      {
        url: "/assets/jessprice/jess-portrait-transparent.png",
        width: 1024,
        height: 1024,
        alt: "Jess Price — Senior Instructional Designer & Curriculum Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jess Price | Senior Instructional Designer & Learning Strategist",
    description:
      "Transforming Learning into Business Results. High-impact curriculum design & enterprise software training.",
    images: ["/assets/jessprice/jess-portrait-transparent.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function JessPricePage() {
  return <JessPriceClient />;
}
