import type { Metadata } from "next";
import MovemeantClient from "./MovemeantClient";

export const metadata: Metadata = {
  title:
    "Building People Who Build What Matters — Movemeant Coaching & Consultancy | Koi Rivers, PCC",
  description:
    "ICF & CCNI dual-accredited coach education, executive consulting, and faith-forward leadership development founded by Koi Rivers, PCC. Home of The Threshold™ and Power Moves Leadership Framework™. Redesigned by Miskat Hossain.",
  openGraph: {
    title: "Movemeant Coaching & Consultancy | Koi Rivers, PCC",
    description:
      "Dual-accredited coach education and executive leadership development for today's leaders and tomorrow's coaches. Faith-forward transformation crafted for women leaders and organizations navigating pivotal transitions.",
    url: "https://miskathossain.net/movemeantnow",
    siteName: "Movemeant Coaching and Consultancy",
    images: [
      {
        url: "/assets/movemeant/koi-rivers-portrait-square.jpg",
        width: 800,
        height: 800,
        alt: "Koi Rivers, PCC — Founder & Chief Strategist, Movemeant Coaching and Consultancy",
      },
      {
        url: "/assets/movemeant/logo.png",
        width: 600,
        height: 200,
        alt: "Movemeant Coaching & Consultancy Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Movemeant Coaching & Consultancy | Koi Rivers, PCC",
    description:
      "ICF & CCNI accredited coach education and executive leadership consulting. Redesigned with modern UX architecture by Miskat Hossain.",
    images: ["/assets/movemeant/koi-rivers-portrait-square.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MovemeantPage() {
  return <MovemeantClient />;
}
