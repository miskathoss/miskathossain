import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/Common/SmoothScrollProvider";
import { CustomCursor } from "@/components/Common/CustomCursor";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://miskathossain.net"),
  title: "Miskat Hossain | Brand & Web Strategist for Coaches",
  description:
    "I build high-authority brand systems and conversion websites for coaches and mentors looking to stand out and attract ideal clients.",
  keywords: [
    "Miskat Hossain",
    "Brand Strategist for Coaches",
    "Web Designer for Coaches",
    "Executive Coach Website",
    "Business Coach Branding",
    "Life Coach Website",
    "Conversion Websites",
    "Coaching Funnels",
    "High-Ticket Coaching Websites",
  ],
  authors: [{ name: "Miskat Hossain", url: "https://miskathossain.net" }],
  creator: "Miskat Hossain",
  alternates: {
    canonical: "https://miskathossain.net",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://miskathossain.net",
    title: "Miskat Hossain | Brand & Web Strategist for Coaches",
    description:
      "I build high-authority brand systems and conversion websites for coaches and mentors looking to stand out and attract ideal clients.",
    siteName: "Miskat Hossain Portfolio",
    images: [
      {
        url: "/assets/images/miskat-portrait.jpg",
        width: 1200,
        height: 630,
        alt: "Miskat Hossain — Brand & Web Strategist for Coaches",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Miskat Hossain | Brand & Web Strategist for Coaches",
    description:
      "I build high-authority brand systems and conversion websites for coaches and mentors looking to stand out and attract ideal clients.",
    images: ["/assets/images/miskat-portrait.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#111111",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link
          rel="preload"
          as="image"
          href="/assets/frames/ezgif-frame-001.jpg"
          type="image/jpeg"
          // @ts-expect-error fetchpriority attribute
          fetchpriority="high"
        />
      </head>
      <body className="bg-dark text-cream min-h-screen antialiased selection:bg-rose selection:text-white">
        <SmoothScrollProvider>
          <CustomCursor />
          {children}
        </SmoothScrollProvider>
        <Analytics />
      </body>
    </html>
  );
}
