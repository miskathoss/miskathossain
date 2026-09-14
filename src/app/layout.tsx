import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/Common/SmoothScrollProvider";
import { CustomCursor } from "@/components/Common/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://miskathossain.net"),
  title: "Miskat Hossain | Brand & Web Designer",
  description:
    "Miskat Hossain is a brand and web designer helping coaches and ambitious businesses build distinctive brands and digital experiences.",
  keywords: [
    "Miskat Hossain",
    "Brand Designer",
    "Web Designer",
    "UI/UX Designer",
    "Creative Director",
    "Coaching Brands",
    "Digital Experiences",
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
    title: "Miskat Hossain | Brand & Web Designer",
    description:
      "Helping coaches and ambitious businesses turn their expertise into distinctive brands and digital experiences.",
    siteName: "Miskat Hossain Portfolio",
    images: [
      {
        url: "/assets/images/miskat-portrait.jpg",
        width: 1200,
        height: 630,
        alt: "Miskat Hossain — Brand & Web Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Miskat Hossain | Brand & Web Designer",
    description:
      "Helping coaches and ambitious businesses turn their expertise into distinctive brands and digital experiences.",
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
      <body className="bg-dark text-cream min-h-screen antialiased selection:bg-rose selection:text-white">
        <SmoothScrollProvider>
          <CustomCursor />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
