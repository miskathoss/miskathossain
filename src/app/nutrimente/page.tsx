import type { Metadata } from "next";
import NutrimenteClient from "./NutrimenteClient";

export const metadata: Metadata = {
  title: "Nutrimente | Angela Senese — Certified Functional Medicine & Nutrition Clinic",
  description:
    "Award-winning functional medicine, nutrigenomics & clinical nutrition practice in Farnham, Surrey & London. Founded by Angela Senese (IFMCP, mBANT). Specialising in hormonal transitions, cardiometabolic health, gut restoration & GLP-1 co-care.",
  keywords: [
    "Angela Senese",
    "Nutrimente",
    "Functional Medicine Nutritionist Farnham",
    "Functional Medicine Surrey",
    "Perimenopause Nutritionist London",
    "Nutrigenomics Lifecode Gx",
    "Beyond the Injection GLP-1 program",
    "DUTCH test practitioner UK",
    "Metabolic health clinic Surrey",
    "Insulin resistance functional medicine",
  ],
  openGraph: {
    title: "Nutrimente | Nutrition & Functional Medicine with Angela Senese",
    description:
      "A modern, luxury digital experience crafted for Angela Senese's clinic Nutrimente. Designed by Miskat Hossain.",
    url: "https://miskathossain.net/nutrimente",
    siteName: "Nutrimente Reimagined",
    images: [
      {
        url: "/assets/nutrimente/angela-hero.jpg",
        width: 1200,
        height: 800,
        alt: "Angela Senese - Certified Functional Medicine Practitioner & Nutritional Therapist",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function NutrimentePage() {
  return <NutrimenteClient />;
}
