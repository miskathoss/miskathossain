import type { Metadata } from "next";
import InsideOutClient from "./InsideOutClient";

export const metadata: Metadata = {
  title: "Inside Out Leadership™ | Dr. Felipe Katich — Executive & Mindful Leadership Coaching",
  description:
    "The quality of your leadership on the outside begins with the quality of your leadership on the inside. Grounded executive coaching and mindful frameworks for mid-level leaders by Dr. Felipe Katich, Ed.D. (USC), MBA. Redesigned digital flagship by Miskat Hossain.",
  openGraph: {
    title: "Inside Out Leadership™ | Dr. Felipe Katich — Executive Leadership Coaching",
    description:
      "Transform reactive pressure into calm, intentional leadership. 4-Pillar framework, 1-on-1 coaching, and executive transformation by Dr. Felipe Katich. Redesign concept by Miskat Hossain.",
    url: "https://miskathossain.net/insideoutleadership",
    siteName: "Inside Out Leadership",
    images: [
      {
        url: "/images/insideoutleadership/dr_felipe_portrait.png",
        width: 1024,
        height: 1536,
        alt: "Dr. Felipe Katich - Founder of Inside Out Leadership & The Mindful Leadership Lab",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inside Out Leadership™ | Dr. Felipe Katich — Mindful Leadership",
    description:
      "Lead with heightened clarity, emotional regulation, and intentional communication. Executive redesign concept by Miskat Hossain.",
    images: ["/images/insideoutleadership/dr_felipe_portrait.png"],
  },
};

export default function InsideOutLeadershipPage() {
  return <InsideOutClient />;
}
