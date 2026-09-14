import React from "react";
import { Navbar } from "@/components/Navigation/Navbar";
import { Hero } from "@/components/Hero/Hero";
import { IntroStatement } from "@/components/Intro/IntroStatement";
import { WhatIDo } from "@/components/Services/WhatIDo";
import { Philosophy } from "@/components/Philosophy/Philosophy";
import { VisualSystemObject } from "@/components/Three/VisualSystemObject";
import { SelectedWork } from "@/components/SelectedWork/SelectedWork";
import { Process } from "@/components/Process/Process";
import { ServicesOfferings } from "@/components/Services/ServicesOfferings";
import { AboutSection } from "@/components/About/AboutSection";
import { Testimonials } from "@/components/Testimonials/Testimonials";
import { FinalCTA } from "@/components/FinalCTA/FinalCTA";
import { Footer } from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main className="relative bg-dark min-h-screen text-cream overflow-x-hidden selection:bg-rose selection:text-white">
      {/* 1. Global Navigation */}
      <Navbar />

      {/* 2. Main Cinematic Scroll-Scrubbed Hero */}
      <Hero />

      {/* 3. Section 01 / The Thinking */}
      <IntroStatement />

      {/* 4. About Miskat with Authentic Photo */}
      <AboutSection />

      {/* 5. What I Do — Disciplines & Craft */}
      <WhatIDo />

      {/* 6. Design Philosophy Progressive Typography */}
      <Philosophy />

      {/* 7. Subtle 3D Visual System Grid Object */}
      <VisualSystemObject />

      {/* 8. Section 02 / Selected Work — Scene-based storytelling */}
      <SelectedWork />

      {/* 9. Section 03 / Process — From Idea To Experience */}
      <Process />

      {/* 10. Commercial Services & Signature Brand + Website Tier */}
      <ServicesOfferings />

      {/* 11. Testimonials & Client Endorsements */}
      <Testimonials />

      {/* 12. Final Cinematic CTA & Glass Inquiry Card */}
      <FinalCTA />

      {/* 13. Studio Colophon & Footer */}
      <Footer />
    </main>
  );
}
