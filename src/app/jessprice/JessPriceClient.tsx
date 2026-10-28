"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  X,
  Menu,
  Target,
  Users,
  TrendingUp,
  Calendar,
  Laptop,
  Check,
  Star,
  ChevronRight,
  Play,
  Settings,
  Lightbulb,
  Mail,
  Phone,
} from "lucide-react";

// Official Contact Information
const JESS_EMAIL = "jessprice.id@gmail.com";
const JESS_PHONE = "+1-469-268-4986";
const JESS_CALENDLY = "https://calendly.com/";
const MISKAT_PORTFOLIO_URL = "https://miskathossain.net";

// Enterprise Clients & Social Proof
const CLIENT_LOGOS = [
  {
    name: "Mayo Clinic",
    imageSrc: "/assets/jessprice/logo-mayo-clinic.png",
    alt: "Mayo Clinic Logo",
    detail: "Clinical workflow learning systems & specialist training assets",
  },
  {
    name: "Cleveland Clinic",
    imageSrc: "/assets/jessprice/logo-cleveland-clinic.png",
    alt: "Cleveland Clinic Logo",
    detail: "Digital curriculum transformation & medical software onboarding",
  },
  {
    name: "Honda",
    imageSrc: "/assets/jessprice/logo-honda.png",
    alt: "Honda Logo",
    detail: "Technical automotive curriculum & cross-functional training systems",
  },
  {
    name: "Kettering Health",
    imageSrc: "/assets/jessprice/logo-kettering.png",
    alt: "Kettering Health Logo",
    detail: "Patient-centered healthcare compliance and staff digital development",
  },
  {
    name: "Antioch University",
    imageSrc: "/assets/jessprice/logo-antioch.png",
    alt: "Antioch University Logo",
    detail: "Higher-education syllabus architecture & digital pedagogy design",
  },
];

export default function JessPriceClient() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Keyboard accessibility: ESC closes open modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsBookingModalOpen(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFBFD] text-slate-900 font-sans antialiased selection:bg-indigo-600 selection:text-white flex flex-col justify-between">
      {/* 1. HEADER / NAVIGATION */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo & Identity */}
          <Link href="#overview" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-[#0B192C] text-white flex items-center justify-center font-bold tracking-tight text-lg shadow-sm group-hover:bg-indigo-600 transition-colors">
              JP
            </div>
            <div>
              <div className="font-extrabold text-slate-900 text-lg tracking-tight group-hover:text-indigo-600 transition-colors leading-snug">
                Jess Price <span className="text-slate-400 font-light">|</span> Portfolio
              </div>
              <div className="text-[11px] font-semibold tracking-wider uppercase text-slate-500">
                Senior Instructional Designer & Curriculum Developer
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 font-medium text-sm text-slate-600">
            <Link
              href="#overview"
              className="px-3.5 py-2 text-indigo-600 font-semibold relative after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-indigo-600"
            >
              Home
            </Link>
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="px-3.5 py-2 hover:text-indigo-600 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="px-3.5 py-2 hover:text-indigo-600 transition-colors"
            >
              Software Skills
            </button>
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="px-3.5 py-2 hover:text-indigo-600 transition-colors"
            >
              Credentials
            </button>
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="px-3.5 py-2 hover:text-indigo-600 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="px-3.5 py-2 hover:text-indigo-600 transition-colors"
            >
              Recommendations
            </button>
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="px-3.5 py-2 hover:text-indigo-600 transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Header Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-[#0B1E36] hover:bg-indigo-600 rounded-xl shadow-sm hover:shadow transition-all duration-150"
            >
              <Calendar className="w-3.5 h-3.5 text-indigo-300" />
              <span>Let's Work Together</span>
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-indigo-600 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-2">
            <Link
              href="#overview"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-semibold text-indigo-600 bg-indigo-50"
            >
              Home
            </Link>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsBookingModalOpen(true);
              }}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50"
            >
              Projects
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsBookingModalOpen(true);
              }}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50"
            >
              Software Skills
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsBookingModalOpen(true);
              }}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50"
            >
              Credentials
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsBookingModalOpen(true);
              }}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50"
            >
              Services
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsBookingModalOpen(true);
              }}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50"
            >
              Recommendations
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsBookingModalOpen(true);
              }}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50"
            >
              Contact
            </button>
            <div className="pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsBookingModalOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 py-3 text-sm font-bold text-white bg-[#0B1E36] rounded-xl"
              >
                <Calendar className="w-4 h-4 text-indigo-300" />
                <span>Let's Work Together</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION (FOLLOWING THE ATTACHED DESIGN SPECIFICATION) */}
      <main className="flex-1">
        <section id="overview" className="relative overflow-hidden bg-[#FAFBFD] pt-8 lg:pt-14 pb-0">
          {/* Ambient background glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
          <div className="absolute top-1/3 right-10 w-80 h-80 bg-purple-100/50 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
              
              {/* LEFT COLUMN: HERO CONTENT */}
              <div className="lg:col-span-6 xl:col-span-5 space-y-6 pt-2 pb-6 lg:pb-12">
                
                {/* Badge Pill */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100/90 text-indigo-700 text-xs font-bold tracking-wider uppercase shadow-xs">
                  <Star className="w-3.5 h-3.5 fill-indigo-500 text-indigo-500" />
                  <span>SENIOR INSTRUCTIONAL DESIGNER & LEARNING STRATEGIST</span>
                </div>

                {/* Main Headline */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.08]">
                  Transforming Learning{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-600">
                    into Business Results
                  </span>
                </h1>

                {/* Subheadline with highlight */}
                <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl">
                  I design and deliver innovative{" "}
                  <span className="text-indigo-600 font-semibold">learning solutions</span> that align
                  people, performance, and business goals.
                </p>

                {/* 3 Value Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  {/* Pillar 1: Strategic */}
                  <div className="flex items-center gap-3 p-3.5 bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:border-indigo-300 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                      <Target className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-sm">Strategic</div>
                      <div className="text-[12px] text-slate-500 leading-snug">
                        Learning that drives performance
                      </div>
                    </div>
                  </div>

                  {/* Pillar 2: Engaging */}
                  <div className="flex items-center gap-3 p-3.5 bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:border-indigo-300 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-sm">Engaging</div>
                      <div className="text-[12px] text-slate-500 leading-snug">
                        Experiences that inspire action
                      </div>
                    </div>
                  </div>

                  {/* Pillar 3: Measurable */}
                  <div className="flex items-center gap-3 p-3.5 bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:border-indigo-300 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-sm">Measurable</div>
                      <div className="text-[12px] text-slate-500 leading-snug">
                        Outcomes that deliver results
                      </div>
                    </div>
                  </div>
                </div>

                {/* Primary Call-to-Action */}
                <div className="pt-2 space-y-3">
                  <button
                    onClick={() => setIsBookingModalOpen(true)}
                    className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#0B1E36] hover:bg-indigo-700 text-white font-bold text-base rounded-xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98]"
                  >
                    <Calendar className="w-5 h-5 text-indigo-300" />
                    <span>Let's Work Together</span>
                  </button>

                  <p className="text-xs text-slate-500 font-medium">
                    Strategic training support that{" "}
                    <span className="text-indigo-600 font-semibold">makes an impact.</span>
                  </p>
                </div>
              </div>

              {/* RIGHT COLUMN: HER HERO IMAGE (ENLARGED & EXECUTIVE PRESENCE) */}
              <div className="lg:col-span-6 xl:col-span-7 relative flex items-center justify-center lg:justify-end">
                <div className="relative w-full max-w-[580px] lg:max-w-[660px] xl:max-w-[720px] aspect-[1/1] sm:aspect-[4/3.8] lg:aspect-[4/3.8] flex items-end justify-center">
                  
                  {/* Backdrop Soft Glow */}
                  <div className="absolute inset-0 -z-10 flex items-center justify-center">
                    <div className="w-[480px] h-[480px] rounded-full bg-gradient-to-tr from-indigo-200/70 to-purple-200/60 blur-3xl" />
                  </div>

                  {/* Curved Connection Lines */}
                  <svg
                    className="absolute inset-0 w-full h-full pointer-events-none -z-5 opacity-70"
                    viewBox="0 0 500 500"
                    fill="none"
                  >
                    <path
                      d="M 100 240 C 160 140, 280 110, 370 140"
                      stroke="#818CF8"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                    />
                    <path
                      d="M 330 140 C 410 170, 430 270, 390 350"
                      stroke="#818CF8"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                    />
                  </svg>

                  {/* Background Widget 1: Mini Browser Preview (Left) */}
                  <div className="absolute top-10 left-2 sm:left-4 z-10 bg-white/95 backdrop-blur-sm rounded-xl border border-slate-200 p-2.5 shadow-lg w-28 sm:w-36 hidden sm:block transform -rotate-3 hover:rotate-0 transition-transform">
                    <div className="flex items-center gap-1 mb-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    </div>
                    <div className="h-10 bg-indigo-50/80 rounded flex items-center justify-center">
                      <Laptop className="w-5 h-5 text-indigo-500" />
                    </div>
                  </div>

                  {/* Background Widget 2: 3D Pie Chart (Mid-Left) */}
                  <div className="absolute top-44 left-0 sm:left-2 z-10 bg-white/95 backdrop-blur-sm rounded-2xl border border-slate-200 p-2.5 shadow-lg hidden sm:flex items-center justify-center transform rotate-6 hover:rotate-0 transition-transform">
                    <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white relative">
                      <div className="w-5 h-5 bg-white/30 rounded-tr-full absolute top-1 right-1" />
                      <span className="text-[10px] font-bold">ROI</span>
                    </div>
                  </div>

                  {/* JESS PRICE'S HERO PORTRAIT (HER IMAGE - ENLARGED) */}
                  <div className="relative w-full h-[98%] flex items-end justify-center">
                    <div className="relative w-[400px] sm:w-[480px] lg:w-[540px] xl:w-[600px] h-[440px] sm:h-[510px] lg:h-[560px] xl:h-[620px]">
                      <Image
                        src="/assets/jessprice/jess-portrait-transparent.png"
                        alt="Jess Price - Senior Instructional Designer & Curriculum Developer"
                        fill
                        className="object-contain object-bottom drop-shadow-2xl scale-105 transform origin-bottom"
                        priority
                      />

                      {/* Sleek Laptop Workstation Base */}
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-[320px] sm:w-[380px] lg:w-[440px] h-7 bg-gradient-to-t from-slate-200 to-slate-100 rounded-t-xl border-t border-x border-slate-300 shadow-md flex items-center justify-center">
                        <div className="w-20 h-1 bg-slate-300 rounded-full" />
                      </div>
                    </div>
                  </div>

                  {/* Floating Skill Badge 1: Top Right */}
                  <div className="absolute top-2 sm:top-4 right-0 lg:-right-4 z-20 bg-white/95 backdrop-blur-md border border-slate-200 rounded-xl p-2.5 shadow-md flex items-center gap-2.5 max-w-[205px] hover:scale-105 transition-transform">
                    <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                      <Lightbulb className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-extrabold uppercase text-slate-800 leading-tight">
                        Instructional Design
                      </div>
                      <div className="w-16 h-1 bg-indigo-200 rounded-full mt-1" />
                    </div>
                  </div>

                  {/* Floating Skill Badge 2: Mid Right */}
                  <div className="absolute top-28 sm:top-32 right-0 lg:-right-6 z-20 bg-white/95 backdrop-blur-md border border-slate-200 rounded-xl p-2.5 shadow-md flex items-center gap-2.5 max-w-[195px] hover:scale-105 transition-transform">
                    <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                      <Play className="w-4 h-4 fill-indigo-600" />
                    </div>
                    <div>
                      <div className="text-[11px] font-extrabold uppercase text-slate-800 leading-tight">
                        Virtual Training
                      </div>
                      <div className="w-14 h-1 bg-purple-200 rounded-full mt-1" />
                    </div>
                  </div>

                  {/* Floating Skill Badge 3: Lower Right */}
                  <div className="absolute top-56 sm:top-60 right-2 lg:-right-2 z-20 bg-white/95 backdrop-blur-md border border-slate-200 rounded-xl p-2.5 shadow-md flex items-center gap-2.5 max-w-[205px] hover:scale-105 transition-transform">
                    <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                      <Settings className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-extrabold uppercase text-slate-800 leading-tight">
                        Curriculum Dev
                      </div>
                      <div className="w-16 h-1 bg-indigo-300 rounded-full mt-1" />
                    </div>
                  </div>

                  {/* Laptop Front Highlight Card: 19+ Years of Experience */}
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 z-20 bg-white/95 backdrop-blur-md border border-slate-200 rounded-2xl px-6 py-3.5 shadow-xl flex items-center gap-4 whitespace-nowrap">
                    <div className="text-center pr-3.5 border-r border-slate-200">
                      <div className="text-2xl sm:text-3xl font-black text-indigo-600 leading-none">19+</div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mt-0.5">
                        Years of Exp.
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <div className="text-[11px] sm:text-xs font-bold text-slate-800 tracking-wide uppercase">
                        Healthcare • Automotive • Education
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

          {/* 3. CLIENT LOGO TRUST BANNER (EXACT TO SAMPLE MOCKUP) */}
          <div className="relative z-20 bg-[#0B1E36] text-white border-t border-slate-800 py-7 px-4 sm:px-6 lg:px-8 mt-6">
            <div className="max-w-7xl mx-auto">
              <p className="text-center text-[11px] font-bold tracking-widest text-slate-400 uppercase mb-5">
                TRUSTED BY ORGANIZATIONS IN HEALTHCARE, AUTOMOTIVE, AND EDUCATION
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-items-center">
                {CLIENT_LOGOS.map((client, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-center p-2 group transition-all duration-200"
                    title={`${client.name}: ${client.detail}`}
                  >
                    <div className="relative h-12 w-36 sm:w-40 flex items-center justify-center filter brightness-100 contrast-125 opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all">
                      <Image
                        src={client.imageSrc}
                        alt={client.alt}
                        width={160}
                        height={48}
                        className="object-contain max-h-11"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 4. FOOTER */}
      <footer className="bg-[#07111E] text-slate-400 text-xs py-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Jess Price. All rights reserved.
          </div>

          <div className="flex items-center gap-1.5">
            <span>Website Redesign by</span>
            <a
              href={MISKAT_PORTFOLIO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 font-bold underline decoration-indigo-400/40 underline-offset-2 transition-colors"
            >
              Miskat Hossain
            </a>
          </div>
        </div>
      </footer>

      {/* 5. BOOKING / DISCOVERY CALL MODAL */}
      {isBookingModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-extrabold text-slate-900 text-xl">Let's Work Together</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Schedule a discovery call with Jess Price.
                </p>
              </div>
              <button
                onClick={() => setIsBookingModalOpen(false)}
                className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <a
                href={JESS_CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-4 rounded-xl bg-slate-50 hover:bg-indigo-50 border border-slate-200 hover:border-indigo-300 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-indigo-600 text-white flex items-center justify-center">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm group-hover:text-indigo-600">
                      Calendly Discovery Call
                    </div>
                    <div className="text-[11px] text-slate-500">Pick an open 30-minute slot</div>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-indigo-600" />
              </a>

              <a
                href={`mailto:${JESS_EMAIL}`}
                className="w-full flex items-center justify-between p-4 rounded-xl bg-slate-50 hover:bg-indigo-50 border border-slate-200 hover:border-indigo-300 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm group-hover:text-indigo-600">
                      Direct Email
                    </div>
                    <div className="text-[11px] text-slate-500">{JESS_EMAIL}</div>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-indigo-600" />
              </a>

              <a
                href={`tel:${JESS_PHONE}`}
                className="w-full flex items-center justify-between p-4 rounded-xl bg-slate-50 hover:bg-indigo-50 border border-slate-200 hover:border-indigo-300 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm group-hover:text-indigo-600">
                      Phone Call
                    </div>
                    <div className="text-[11px] text-slate-500">{JESS_PHONE}</div>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-indigo-600" />
              </a>
            </div>

            <div className="pt-2 text-center">
              <button
                onClick={() => setIsBookingModalOpen(false)}
                className="text-xs text-slate-500 hover:text-slate-800 font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
