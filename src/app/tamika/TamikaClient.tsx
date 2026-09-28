"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Home,
  Key,
  TrendingUp,
  GraduationCap,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Clock,
  ShieldCheck,
  Star,
  Award,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  X,
  Search,
  BookOpen,
  Mic,
  Heart,
  Instagram,
  Linkedin,
  Facebook,
  Building,
  Send,
  HelpCircle,
  FileCheck,
} from "lucide-react";

export default function TamikaClient() {
  // Modal state
  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);
  const [consultType, setConsultType] = useState<"buy" | "sell" | "invest" | "pass">("buy");
  const [consultSubmitted, setConsultSubmitted] = useState(false);

  // Property Search Simulator state
  const [searchLocation, setSearchLocation] = useState("All Cleveland Areas");
  const [searchType, setSearchType] = useState("Single Family");
  const [searchPrice, setSearchPrice] = useState("Any Price");

  // Valuation Lead Form state
  const [leadGoal, setLeadGoal] = useState<"selling" | "buying" | "investing" | "licensing">("selling");
  const [leadTimeline, setLeadTimeline] = useState("1 - 3 Months");
  const [leadBudget, setLeadBudget] = useState("$300K - $500K");
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  // Active FAQ accordion state
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // Active Advisory Pillar tab
  const [activeTab, setActiveTab] = useState<"sellers" | "buyers" | "investors">("sellers");

  // Form input state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyDetails: "",
    preferredDate: "",
    notes: "",
  });

  const handleConsultSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConsultSubmitted(true);
  };

  const resetConsultModal = () => {
    setIsConsultModalOpen(false);
    setTimeout(() => {
      setConsultSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        propertyDetails: "",
        preferredDate: "",
        notes: "",
      });
    }, 300);
  };

  const properties = [
    {
      id: 1,
      title: "The Clifton Boulevard Craftsman",
      location: "Lakewood, OH • Greater Cleveland",
      price: "$685,000",
      specs: "4 Beds • 3.5 Baths • 3,420 Sq Ft",
      tag: "Featured Exclusive",
      image: "/assets/tamika/cleveland-luxury-home.jpg",
      status: "Active Listing",
      description:
        "Stunning architectural restoration featuring original artisan millwork, chef's gourmet kitchen, private owner suite with spa bath, and twilight outdoor entertainer patio.",
    },
    {
      id: 2,
      title: "Lakefront Skyline Penthouse",
      location: "Downtown Cleveland • Lake Erie Views",
      price: "$1,250,000",
      specs: "3 Beds • 3.5 Baths • 2,890 Sq Ft",
      tag: "Luxury Collection",
      image: "/assets/tamika/cleveland-interior.jpg",
      status: "Private Showing",
      description:
        "Expansive floor-to-ceiling glass wrapping breathtaking views of the Cleveland skyline and Lake Erie. Calacatta marble hearth, custom sommelier bar, and 24/7 concierge.",
    },
    {
      id: 3,
      title: "Shaker Heights Historic Colonial",
      location: "Shaker Heights, OH • Rapid Transit Access",
      price: "$549,000",
      specs: "5 Beds • 4 Baths • 3,180 Sq Ft",
      tag: "Under Contract in 6 Days",
      image: "/assets/tamika/cleveland-luxury-home.jpg",
      status: "Pending Sale",
      description:
        "Classic Cleveland charm paired with contemporary energy-efficient upgrades. Finished lower level suite, sunroom garden retreat, and top-tier school district proximity.",
    },
  ];

  const passTiers = [
    {
      name: "PASS Power Hour",
      price: "$47",
      duration: "1-Hour Strategy Session",
      badge: "Targeted Topic Sprint",
      description:
        "Master your most difficult real estate exam topic in a high-focus 60-minute strategy sprint with Tamika.",
      features: [
        "Focus on your hardest topic (Finance, Contracts, or Agency Law)",
        "Tamika's high-retention memory anchors & formula breakdowns",
        "Live Q&A with real exam scenario simulations",
        "Downloadable cheat sheet & practice question sets",
      ],
      ctaText: "Book Power Hour",
      goalValue: "pass",
    },
    {
      name: "PASS Assessment",
      price: "$97",
      duration: "90-Min Diagnostic & Action Plan",
      badge: "Most Popular Diagnostic",
      description:
        "Pinpoint your exact score liabilities and get a crystal-clear, day-by-day study roadmap to guarantee you pass.",
      features: [
        "Full diagnostic audit of State & National knowledge pillars",
        "Personalized readiness score & probability breakdown",
        "Customized 14-day study calendar tailored to your schedule",
        "Test anxiety management & time allocation strategy",
      ],
      ctaText: "Get My Assessment",
      popular: true,
      goalValue: "pass",
    },
    {
      name: "PASS Accelerator",
      price: "$297",
      duration: "Complete Licensing Coaching",
      badge: "Comprehensive Mentorship",
      description:
        "End-to-end personalized coaching, comprehensive mock review, and direct mentorship until your license is in hand.",
      features: [
        "Multiple 1-on-1 private coaching sessions with Tamika",
        "Direct text & email review support during study phases",
        "Complete Ohio & National exam simulation bank with review",
        "Bonus: New Agent 90-Day Quickstart Blueprint ($250 value)",
      ],
      ctaText: "Join PASS Accelerator",
      goalValue: "pass",
    },
  ];

  const testimonials = [
    {
      name: "Marcus & Kimberly Vance",
      role: "Lakewood Home Sellers",
      result: "Sold $35K Over Asking in 4 Days",
      text: "Tamika is a strategic powerhouse! Her MBA expertise showed in how she positioned our Lakewood property. She staged it perfectly, priced it with surgical accuracy, and negotiated multiple offers to get us 35K over asking with zero headaches. You want Tamika in your corner!",
    },
    {
      name: "Brittany Sterling",
      role: "First-Time Home Buyer, Cleveland",
      result: "Closed on Dream Home in 28 Days",
      text: "As a first-time buyer, the real estate market felt terrifying. Tamika took my hand, walked me through the pre-approval, found an off-market gem, and protected my earnest money like it was her own. She is truly 'The Motivating Mompreneur' with immense heart.",
    },
    {
      name: "Darius Washington",
      role: "Licensed Realtor® & PASS Student",
      result: "Passed Ohio Real Estate Exam 1st Try",
      text: "I had failed the national exam portion twice before finding PASS with Tamika. Her PASS Power Hour cleared up my confusion on math formulas and deed types within 45 minutes. Took the test that weekend and PASSED. Worth 10x what she charges!",
    },
  ];

  const faqs = [
    {
      q: "What areas of Ohio do you serve as a Realtor?",
      a: "As a licensed Realtor® with Keller Williams Living, I primarily serve Cuyahoga County and Greater Cleveland, including Lakewood, Rocky River, Downtown Cleveland, Shaker Heights, Beachwood, Westlake, Parma, and surrounding communities. I also assist clients relocating nationwide through the Keller Williams global referral network.",
    },
    {
      q: "How does your MBA background benefit me as a buyer or seller?",
      a: "Real estate is the biggest financial transaction most people ever make. My MBA from Cleveland State University equips me with sophisticated financial modeling, micro-market data analytics, and high-stakes negotiation training. When you sell, we engineer pricing for maximum net profit; when you buy, we protect your equity and future resale value.",
    },
    {
      q: "What is the 'PASS with Tamika' Real Estate Coaching program?",
      a: "PASS is my specialized exam preparation and mentoring academy designed for prospective real estate agents. Whether you are struggling with the Ohio state-specific law exam, real estate math, or the national principles portion, PASS gives you targeted diagnostics and memory systems so you can pass with confidence on your next attempt.",
    },
    {
      q: "Can this website design be directly built and managed on Wix?",
      a: "Yes! Every section of this page is purposefully structured to be 100% buildable in Wix Studio / Wix Editor using native Wix elements: Section Strips, 2-Column Responsive Splits, Wix Repeaters, Wix Bookings for appointments, Wix CMS for property listings, and Wix Forms for instant lead generation.",
    },
    {
      q: "How can I schedule a consultation or property showing?",
      a: "You can click any 'Book Consultation' or 'Schedule Call' button on this page to pick a time, or reach out directly by call/text at (216) 584-3653 or (216) 269-6714. Consultations can be conducted via phone, Zoom video, or in-person in the Cleveland area.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0E0D10] text-[#F3F1EC] selection:bg-[#C9A96E] selection:text-[#0A0A0C] font-sans antialiased overflow-x-hidden">
      {/* ========================================================================= */}
      {/* 1. TOP ANNOUNCEMENT STRIP (Wix Top Strip) */}
      {/* ========================================================================= */}
      <div className="bg-[#181614] border-b border-[#C9A96E]/20 py-2.5 px-4 text-xs tracking-wide text-[#E3D8C8]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#C9A96E]/20 text-[#DFBA79] text-[11px] font-semibold uppercase tracking-wider border border-[#C9A96E]/30">
              <Sparkles className="w-3 h-3 text-[#DFBA79]" /> Keller Williams Living
            </span>
            <span className="hidden sm:inline text-[#A8A297]">• Integrity Partners | Cleveland, OH</span>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <a
              href="tel:2165843653"
              className="text-[#DFBA79] hover:text-white font-medium inline-flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" /> (216) 584-3653
            </a>
            <span className="text-white/20">|</span>
            <Link
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-[#DFBA79] hover:text-white text-[11px] font-medium border border-[#C9A96E]/30 transition-all"
            >
              <span>Designed by Miskat</span>
              <ArrowUpRight className="w-3 h-3 text-[#DFBA79]" />
            </Link>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. HEADER / NAVBAR STRIP (Wix Header Container) */}
      {/* ========================================================================= */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0E0D10]/95 border-b border-white/[0.08] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Logo & Identity */}
          <Link href="/tamika" className="group flex items-center gap-3.5 shrink-0">
            <div className="w-11 h-11 rounded-full border border-[#C9A96E]/40 bg-gradient-to-br from-[#2D261C] to-[#12100E] flex items-center justify-center text-[#DFBA79] font-serif font-bold text-lg shadow-inner group-hover:border-[#DFBA79] transition-all">
              TS
            </div>
            <div>
              <span className="block font-serif text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-[#DFBA79] transition-colors whitespace-nowrap">
                Tamika Shanea Robinson
              </span>
              <span className="block text-[11px] tracking-widest uppercase text-[#9C968B] font-medium">
                Realtor® • Keller Williams Living
              </span>
            </div>
          </Link>

          {/* Wix Menu Items */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-[13px] xl:text-sm font-medium text-[#C4BFB5] whitespace-nowrap">
            <a href="#services" className="hover:text-[#DFBA79] transition-colors">
              Buying & Selling
            </a>
            <a href="#properties" className="hover:text-[#DFBA79] transition-colors">
              Properties
            </a>
            <a href="#pass-coaching" className="hover:text-[#DFBA79] transition-colors">
              PASS Exam Coaching
            </a>
            <a href="#about" className="hover:text-[#DFBA79] transition-colors">
              About Tamika
            </a>
            <a href="#podcast" className="hover:text-[#DFBA79] transition-colors">
              Podcast & Book
            </a>
            <a href="#faq" className="hover:text-[#DFBA79] transition-colors">
              FAQ
            </a>
          </nav>

          {/* Header Action Buttons (Miskat Website Button + Book Consultation) */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            <Link
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-[#DFBA79] bg-[#C9A96E]/10 hover:bg-[#C9A96E]/20 border border-[#C9A96E]/30 hover:border-[#DFBA79] transition-all"
            >
              <span>Miskat's Site</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#DFBA79]" />
            </Link>

            <button
              onClick={() => {
                setConsultType("buy");
                setIsConsultModalOpen(true);
              }}
              className="inline-flex items-center justify-center gap-2 px-3.5 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide text-[#0A0A0C] bg-gradient-to-r from-[#DFBA79] via-[#C9A96E] to-[#B38F52] hover:brightness-110 shadow-lg shadow-[#C9A96E]/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Consultation</span>
            </button>
          </div>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* 3. HERO STRIP (Wix 2-Column Responsive Split Strip: 55% Left / 45% Right) */}
      {/* ========================================================================= */}
      <section className="relative py-12 sm:py-20 lg:py-24 border-b border-white/[0.08] overflow-hidden bg-gradient-to-b from-[#141216] to-[#0E0D10]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* Left Column (55%): Content & Action */}
            <div className="lg:col-span-7 space-y-6">
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1F1B16] border border-[#C9A96E]/30 text-xs font-semibold uppercase tracking-wider text-[#DFBA79]">
                <ShieldCheck className="w-4 h-4 text-[#DFBA79]" />
                <span>Keller Williams Living • Integrity Partners</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-white tracking-tight leading-[1.12]">
                  Elevating <br />
                  <span className="italic font-light text-[#EAD8B8] font-serif">Cleveland Living</span> <br />
                  <span className="bg-gradient-to-r from-[#DFBA79] via-[#F3E2C4] to-[#C9A96E] bg-clip-text text-transparent">
                    With Vision & Precision.
                  </span>
                </h1>
                <p className="text-base sm:text-lg text-[#B5B0A4] max-w-xl leading-relaxed pt-1">
                  Trusted Keller Williams Living Realtor®, real estate investor, and Cleveland State University MBA.
                  Dedicated to guiding buyers, luxury home sellers, and investors across Greater Cleveland & Lakewood.
                </p>
              </div>

              {/* Primary Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <a
                  href="#properties"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm tracking-wide bg-gradient-to-r from-[#DFBA79] via-[#C9A96E] to-[#B38F52] text-[#0A0A0C] hover:brightness-110 shadow-lg shadow-[#C9A96E]/20 transition-all"
                >
                  <Home className="w-4 h-4 text-[#0A0A0C]" />
                  <span>Find Your Dream Home</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  onClick={() => {
                    setConsultType("sell");
                    setIsConsultModalOpen(true);
                  }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm tracking-wide bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/15 hover:border-[#C9A96E]/50 transition-all"
                >
                  <Key className="w-4 h-4 text-[#DFBA79]" />
                  <span>Schedule Free Consultation</span>
                </button>
              </div>

              {/* Wix Property Search Bar Strip */}
              <div className="bg-[#161418] border border-white/10 rounded-2xl p-4 shadow-xl mt-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#DFBA79] flex items-center gap-1.5">
                    <Search className="w-3.5 h-3.5" /> Quick Property Finder
                  </span>
                  <span className="text-[11px] text-[#8E887D]">Greater Cleveland MLS Feed</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <div className="bg-black/40 border border-white/10 rounded-xl px-3 py-2 text-xs">
                    <label className="block text-[10px] uppercase text-[#8E887D] font-medium">Area</label>
                    <select
                      value={searchLocation}
                      onChange={(e) => setSearchLocation(e.target.value)}
                      className="bg-transparent text-white w-full outline-none mt-0.5 cursor-pointer font-medium"
                    >
                      <option value="All Cleveland Areas" className="bg-[#161418]">
                        All Greater Cleveland
                      </option>
                      <option value="Lakewood" className="bg-[#161418]">
                        Lakewood, OH
                      </option>
                      <option value="Downtown Cleveland" className="bg-[#161418]">
                        Downtown Cleveland / Lakefront
                      </option>
                      <option value="Shaker Heights" className="bg-[#161418]">
                        Shaker Heights
                      </option>
                      <option value="Westlake" className="bg-[#161418]">
                        Westlake / Rocky River
                      </option>
                      <option value="Beachwood" className="bg-[#161418]">
                        Beachwood & East Side
                      </option>
                    </select>
                  </div>

                  <div className="bg-black/40 border border-white/10 rounded-xl px-3 py-2 text-xs">
                    <label className="block text-[10px] uppercase text-[#8E887D] font-medium">Property</label>
                    <select
                      value={searchType}
                      onChange={(e) => setSearchType(e.target.value)}
                      className="bg-transparent text-white w-full outline-none mt-0.5 cursor-pointer font-medium"
                    >
                      <option value="Single Family" className="bg-[#161418]">
                        Single Family Home
                      </option>
                      <option value="Luxury Penthouse" className="bg-[#161418]">
                        Luxury Penthouse / Condo
                      </option>
                      <option value="Multi-Family" className="bg-[#161418]">
                        Multi-Family Investment
                      </option>
                    </select>
                  </div>

                  <div className="bg-black/40 border border-white/10 rounded-xl px-3 py-2 text-xs">
                    <label className="block text-[10px] uppercase text-[#8E887D] font-medium">Price</label>
                    <select
                      value={searchPrice}
                      onChange={(e) => setSearchPrice(e.target.value)}
                      className="bg-transparent text-white w-full outline-none mt-0.5 cursor-pointer font-medium"
                    >
                      <option value="Any Price" className="bg-[#161418]">
                        Any Price
                      </option>
                      <option value="$250K - $450K" className="bg-[#161418]">
                        $250,000 - $450,000
                      </option>
                      <option value="$450K - $750K" className="bg-[#161418]">
                        $450,000 - $750,000
                      </option>
                      <option value="$750K - $1.5M+" className="bg-[#161418]">
                        $750,000 - $1.5M+
                      </option>
                    </select>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between pt-1">
                  <span className="text-[11px] text-[#A39E93]">
                    Selected filter: <strong className="text-white">{searchLocation}</strong>
                  </span>
                  <a
                    href="#properties"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#DFBA79] hover:underline"
                  >
                    <span>View Matching Homes</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Trust Metric Counters (Wix Counter Strip) */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/[0.08]">
                <div>
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-white">20+</div>
                  <div className="text-xs text-[#8E887D] mt-0.5">Years Business Leadership</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-[#DFBA79]">$10M+</div>
                  <div className="text-xs text-[#8E887D] mt-0.5">Transaction Volume</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-white">94%</div>
                  <div className="text-xs text-[#8E887D] mt-0.5">PASS Exam Pass Rate</div>
                </div>
              </div>
            </div>

            {/* Right Column (45%): Tamika's Actual Portrait Photo */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Clean Framed Portrait of Tamika */}
                <div className="relative rounded-3xl overflow-hidden border-2 border-[#C9A96E]/40 bg-[#1A1815] shadow-2xl p-2.5">
                  <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden">
                    <Image
                      src="/assets/tamika/tamika-real-portrait.jpg"
                      alt="Tamika Shanea Robinson, MBA - Luxury Cleveland Realtor"
                      fill
                      className="object-cover object-top"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                    {/* Bottom Caption Pill */}
                    <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-black/75 backdrop-blur-md border border-white/10 text-white">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-serif font-bold text-base text-white">Tamika Shanea Robinson</p>
                          <p className="text-xs text-[#DFBA79] font-medium">MBA • Realtor® • Author • Coach</p>
                        </div>
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded bg-[#C9A96E]/20 text-[#DFBA79] border border-[#C9A96E]/40">
                          Cleveland, OH
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Badge 1: Keller Williams Living */}
                <div className="absolute -top-4 -left-4 sm:-left-6 backdrop-blur-xl bg-[#141210]/95 border border-[#C9A96E]/40 rounded-2xl p-3 shadow-xl flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#C9A96E]/20 border border-[#C9A96E]/40 flex items-center justify-center text-[#DFBA79]">
                    <Building className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Keller Williams Living</div>
                    <div className="text-[10px] text-[#A39E93]">Integrity Partners Group</div>
                  </div>
                </div>

                {/* Floating Badge 2: Cleveland Specialist */}
                <div className="absolute -bottom-4 -right-2 sm:-right-4 backdrop-blur-xl bg-[#141210]/95 border border-[#C9A96E]/40 rounded-2xl p-3 shadow-xl flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#DFBA79] to-[#997334] flex items-center justify-center text-[#0A0A0C]">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Cleveland & Lakewood</div>
                    <div className="text-[10px] text-[#DFBA79]">Luxury Residential Specialist</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. CREDENTIALS & AFFILIATIONS STRIP (Wix Logo Bar / Gallery) */}
      {/* ========================================================================= */}
      <section className="border-b border-white/[0.08] bg-[#0A0A0C] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-[11px] uppercase tracking-widest text-[#8E887D] font-semibold mb-4">
            Brokerage Affiliations & Professional Recognition
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center opacity-80">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#C4BFB5]">
              <Building className="w-4 h-4 text-[#DFBA79]" /> Keller Williams Living
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#C4BFB5]">
              <Award className="w-4 h-4 text-[#DFBA79]" /> Cleveland State MBA
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#C4BFB5]">
              <ShieldCheck className="w-4 h-4 text-[#DFBA79]" /> National Assoc. of Realtors
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#C4BFB5]">
              <Mic className="w-4 h-4 text-[#DFBA79]" /> Spotify Podcasts
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#C4BFB5]">
              <Star className="w-4 h-4 text-[#DFBA79]" /> Apple Podcasts
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#C4BFB5]">
              <BookOpen className="w-4 h-4 text-[#DFBA79]" /> Author (Fall 2026)
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. SERVICES STRIP (Wix 3-Column Card Repeater: Sellers, Buyers, Investors) */}
      {/* ========================================================================= */}
      <section id="services" className="py-20 lg:py-24 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#DFBA79] px-3 py-1 rounded-full bg-[#C9A96E]/10 border border-[#C9A96E]/30 inline-block">
              Full-Spectrum Real Estate Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              Real Estate Representation Grounded in Strategy.
            </h2>
            <p className="text-sm text-[#A39E93]">
              Every transaction is structured to optimize your net financial outcome, reduce time on market, and protect
              your generational equity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Home Sellers */}
            <div className="bg-[#141216] border border-white/10 hover:border-[#C9A96E]/40 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl transition-all group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#C9A96E]/15 border border-[#C9A96E]/30 flex items-center justify-center text-[#DFBA79] group-hover:bg-[#C9A96E]/25 transition-colors">
                  <Key className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-xl text-white">For Home Sellers</h3>
                <p className="text-xs text-[#A39E93] leading-relaxed">
                  Maximize your net profit with targeted architectural staging, professional HDR media, and competitive
                  Keller Williams syndication across major buyer platforms.
                </p>
                <ul className="space-y-2.5 text-xs text-[#C4BFB5] pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#DFBA79] shrink-0" />
                    <span>MBA micro-market valuation & pricing analytics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#DFBA79] shrink-0" />
                    <span>Cinematic 4K video tours & targeted social ads</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#DFBA79] shrink-0" />
                    <span>Fierce contract negotiation protecting your net return</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10">
                <button
                  onClick={() => {
                    setConsultType("sell");
                    setIsConsultModalOpen(true);
                  }}
                  className="w-full py-2.5 rounded-xl bg-white/[0.05] hover:bg-gradient-to-r hover:from-[#DFBA79] hover:to-[#C9A96E] hover:text-[#0A0A0C] text-xs font-semibold text-white border border-white/15 transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Request Valuation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Card 2: Home Buyers */}
            <div className="bg-[#141216] border border-white/10 hover:border-[#C9A96E]/40 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl transition-all group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#C9A96E]/15 border border-[#C9A96E]/30 flex items-center justify-center text-[#DFBA79] group-hover:bg-[#C9A96E]/25 transition-colors">
                  <Home className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-xl text-white">For Home Buyers</h3>
                <p className="text-xs text-[#A39E93] leading-relaxed">
                  Patient, hands-on guidance through Lakewood, Downtown, and Greater Cleveland neighborhoods with access
                  to off-market inventory and trusted mortgage partners.
                </p>
                <ul className="space-y-2.5 text-xs text-[#C4BFB5] pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#DFBA79] shrink-0" />
                    <span>Early access to upcoming & off-market listings</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#DFBA79] shrink-0" />
                    <span>First-time home buyer grant navigation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#DFBA79] shrink-0" />
                    <span>Thorough structural & inspection contingency protection</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10">
                <button
                  onClick={() => {
                    setConsultType("buy");
                    setIsConsultModalOpen(true);
                  }}
                  className="w-full py-2.5 rounded-xl bg-white/[0.05] hover:bg-gradient-to-r hover:from-[#DFBA79] hover:to-[#C9A96E] hover:text-[#0A0A0C] text-xs font-semibold text-white border border-white/15 transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Start Home Search</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Card 3: Real Estate Investors */}
            <div className="bg-[#141216] border border-white/10 hover:border-[#C9A96E]/40 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl transition-all group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#C9A96E]/15 border border-[#C9A96E]/30 flex items-center justify-center text-[#DFBA79] group-hover:bg-[#C9A96E]/25 transition-colors">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-xl text-white">For Real Estate Investors</h3>
                <p className="text-xs text-[#A39E93] leading-relaxed">
                  Leverage Cleveland&apos;s nation-leading cash flow market with pro-forma financial models, cap rate audits,
                  and vetted local property management connections.
                </p>
                <ul className="space-y-2.5 text-xs text-[#C4BFB5] pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#DFBA79] shrink-0" />
                    <span>Multi-family & duplex cash flow pro-formas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#DFBA79] shrink-0" />
                    <span>BRRRR strategy modeling & renovation budgeting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#DFBA79] shrink-0" />
                    <span>Out-of-state investor turnkey support & local vetting</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10">
                <button
                  onClick={() => {
                    setConsultType("invest");
                    setIsConsultModalOpen(true);
                  }}
                  className="w-full py-2.5 rounded-xl bg-white/[0.05] hover:bg-gradient-to-r hover:from-[#DFBA79] hover:to-[#C9A96E] hover:text-[#0A0A0C] text-xs font-semibold text-white border border-white/15 transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Discuss Investment</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. FEATURED PROPERTIES (Wix CMS Repeater / Dynamic Property Grid) */}
      {/* ========================================================================= */}
      <section id="properties" className="py-20 lg:py-24 border-b border-white/[0.08] bg-[#0B0A0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#DFBA79]">
                Curated Listings & Recent Activity
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight mt-1">
                Featured Cleveland Properties
              </h2>
            </div>
            <p className="text-sm text-[#A39E93] max-w-md mt-3 md:mt-0">
              Browse current listings and notable recent sales represented by Tamika Shanea Robinson at Keller Williams Living.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {properties.map((prop) => (
              <div
                key={prop.id}
                className="group rounded-2xl overflow-hidden bg-[#141216] border border-white/10 hover:border-[#C9A96E]/40 transition-all duration-300 shadow-xl flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={prop.image}
                    alt={prop.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#0A0A0C]/80 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-semibold text-[#DFBA79] border border-white/10">
                    {prop.tag}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/85 backdrop-blur-md px-3 py-1 rounded-md text-xs font-bold text-white">
                    {prop.price}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-serif font-bold text-lg text-white group-hover:text-[#DFBA79] transition-colors">
                      {prop.title}
                    </h3>
                    <p className="text-xs text-[#DFBA79] font-medium mt-0.5">{prop.location}</p>
                    <p className="text-xs text-[#B5B0A4] mt-2 font-mono">{prop.specs}</p>
                    <p className="text-xs text-[#8E887D] mt-2.5 leading-relaxed line-clamp-2">
                      {prop.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between">
                    <span className="text-[11px] text-[#A39E93]">{prop.status}</span>
                    <button
                      onClick={() => {
                        setConsultType("buy");
                        setFormData((prev) => ({ ...prev, propertyDetails: prop.title }));
                        setIsConsultModalOpen(true);
                      }}
                      className="text-xs font-semibold text-[#DFBA79] hover:text-white inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                    >
                      <span>Inquire / Private Tour</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. "PASS WITH TAMIKA" (Wix Pricing Plans / Wix Stores Product Strip) */}
      {/* ========================================================================= */}
      <section id="pass-coaching" className="py-20 lg:py-24 border-b border-white/[0.08] bg-gradient-to-b from-[#13110E] to-[#0E0D10]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C9A96E]/15 border border-[#C9A96E]/30 text-xs font-bold uppercase tracking-wider text-[#DFBA79]">
                <GraduationCap className="w-4 h-4" /> Signature Educational Academy
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
                PASS with Tamika: Real Estate Exam Prep Coaching.
              </h2>
              <p className="text-sm text-[#A39E93] max-w-2xl leading-relaxed">
                Struggling with real estate finance formulas, property deed types, or Ohio agency laws? Tamika’s structured
                coaching turns intimidating exam concepts into intuitive memory systems so you pass on your very next try.
              </p>
            </div>

            {/* Book Spotlight Widget (Wix Store Product Card) */}
            <div className="lg:col-span-4 bg-[#181613] border border-[#C9A96E]/40 rounded-2xl p-5 shadow-xl">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#DFBA79] mb-2">
                <BookOpen className="w-3.5 h-3.5" /> Upcoming Real Estate Book
              </div>
              <h4 className="font-serif font-bold text-base text-white">Closing the Deal: A Real Estate Love Story</h4>
              <p className="text-xs text-[#B5B0A4] mt-1">
                By Tamika Shanea Robinson, MBA • Fall 2026. A captivating fusion of property negotiation insights and romance.
              </p>
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-[#8E887D]">Pre-orders opening soon</span>
                <span className="text-[#DFBA79] font-medium">stan.store/tamikashanea1</span>
              </div>
            </div>
          </div>

          {/* Pricing Plans Grid (Wix Pricing Plans App) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {passTiers.map((tier, idx) => (
              <div
                key={idx}
                className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  tier.popular
                    ? "bg-gradient-to-b from-[#1C1812] to-[#12100D] border-2 border-[#C9A96E] shadow-2xl scale-105 z-10"
                    : "bg-[#141216] border border-white/10 hover:border-white/20"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#DFBA79] to-[#C9A96E] text-[#0A0A0C] font-bold text-xs uppercase tracking-widest px-4 py-1 rounded-full shadow-md">
                    Recommended Choice
                  </div>
                )}

                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-[#DFBA79] mb-1">{tier.badge}</div>
                  <h3 className="font-serif font-bold text-2xl text-white">{tier.name}</h3>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-4xl font-bold font-serif text-white">{tier.price}</span>
                    <span className="text-xs text-[#A39E93]">/ {tier.duration}</span>
                  </div>
                  <p className="text-xs text-[#B5B0A4] mt-3 leading-relaxed">{tier.description}</p>

                  <div className="my-6 border-t border-white/10" />

                  <ul className="space-y-3 text-xs text-[#D1CCC3]">
                    {tier.features.map((feat, fidx) => (
                      <li key={fidx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#DFBA79] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4">
                  <button
                    onClick={() => {
                      setConsultType("pass");
                      setFormData((prev) => ({ ...prev, notes: `Interested in: ${tier.name}` }));
                      setIsConsultModalOpen(true);
                    }}
                    className={`w-full py-3 rounded-xl font-semibold text-xs uppercase tracking-wider transition-all ${
                      tier.popular
                        ? "bg-gradient-to-r from-[#DFBA79] to-[#C9A96E] text-[#0A0A0C] hover:brightness-110 shadow-lg"
                        : "bg-white/[0.06] hover:bg-white/[0.1] text-white border border-white/15"
                    }`}
                  >
                    {tier.ctaText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. INTERACTIVE LEAD INTAKE (Wix Forms & Payments Strip) */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#0E0D10] border-b border-white/[0.08]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#151317] border border-[#C9A96E]/30 rounded-3xl p-6 sm:p-10 shadow-2xl">
            <div className="text-center max-w-xl mx-auto space-y-2 mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-[#DFBA79]">
                Direct Consultation Intake
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                Tell Tamika About Your Next Move
              </h2>
              <p className="text-xs sm:text-sm text-[#A39E93]">
                Receive a tailored market analysis or study diagnostic within 24 hours.
              </p>
            </div>

            {leadSubmitted ? (
              <div className="bg-[#1C1A17] border border-[#C9A96E]/50 rounded-2xl p-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#C9A96E]/20 text-[#DFBA79] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif font-bold text-xl text-white">Inquiry Received with Priority!</h3>
                <p className="text-sm text-[#B5B0A4] max-w-md mx-auto">
                  Thank you! Tamika Shanea Robinson has received your details and will personally follow up via phone or
                  email shortly.
                </p>
                <button
                  onClick={() => setLeadSubmitted(false)}
                  className="text-xs text-[#DFBA79] underline font-semibold mt-2"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setLeadSubmitted(true);
                }}
                className="space-y-6"
              >
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#C4BFB5] font-semibold mb-3">
                    1. What is your primary objective?
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {[
                      { id: "selling", label: "Selling My Home", icon: Key },
                      { id: "buying", label: "Buying a Home", icon: Home },
                      { id: "investing", label: "Investing", icon: TrendingUp },
                      { id: "licensing", label: "PASS Exam Prep", icon: GraduationCap },
                    ].map((item) => (
                      <button
                        type="button"
                        key={item.id}
                        onClick={() => setLeadGoal(item.id as any)}
                        className={`flex flex-col items-center justify-center p-3 rounded-xl border text-xs font-medium transition-all ${
                          leadGoal === item.id
                            ? "bg-[#C9A96E]/20 border-[#DFBA79] text-white shadow-md"
                            : "bg-black/30 border-white/10 text-[#8E887D] hover:text-white"
                        }`}
                      >
                        <item.icon className="w-4 h-4 mb-1 text-[#DFBA79]" />
                        <span>{item.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#C4BFB5] font-semibold mb-2">
                      2. Target Timeline
                    </label>
                    <select
                      value={leadTimeline}
                      onChange={(e) => setLeadTimeline(e.target.value)}
                      className="w-full bg-black/40 border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white outline-none focus:border-[#C9A96E]"
                    >
                      <option value="Immediately (0 - 30 Days)" className="bg-[#161418]">
                        Immediately (0 - 30 Days)
                      </option>
                      <option value="1 - 3 Months" className="bg-[#161418]">
                        1 - 3 Months
                      </option>
                      <option value="3 - 6 Months" className="bg-[#161418]">
                        3 - 6 Months
                      </option>
                      <option value="Just Researching & Planning" className="bg-[#161418]">
                        Just Researching & Planning
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#C4BFB5] font-semibold mb-2">
                      3. Target Price or Home Value
                    </label>
                    <select
                      value={leadBudget}
                      onChange={(e) => setLeadBudget(e.target.value)}
                      className="w-full bg-black/40 border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white outline-none focus:border-[#C9A96E]"
                    >
                      <option value="Under $250,000" className="bg-[#161418]">
                        Under $250,000
                      </option>
                      <option value="$250,000 - $450,000" className="bg-[#161418]">
                        $250,000 - $450,000
                      </option>
                      <option value="$450,000 - $750,000" className="bg-[#161418]">
                        $450,000 - $750,000
                      </option>
                      <option value="$750,000 - $1.5M+" className="bg-[#161418]">
                        $750,000 - $1.5M+ (Luxury Collection)
                      </option>
                      <option value="PASS Coaching Tier" className="bg-[#161418]">
                        PASS Coaching Tier ($47 - $297)
                      </option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name"
                    className="bg-black/40 border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white placeholder-[#78736B] outline-none focus:border-[#C9A96E]"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    className="bg-black/40 border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white placeholder-[#78736B] outline-none focus:border-[#C9A96E]"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone (e.g. 216-555-0199)"
                    className="bg-black/40 border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white placeholder-[#78736B] outline-none focus:border-[#C9A96E]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-semibold text-xs uppercase tracking-wider bg-gradient-to-r from-[#DFBA79] via-[#C9A96E] to-[#B38F52] text-[#0A0A0C] hover:brightness-110 shadow-lg shadow-[#C9A96E]/20 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Get My Free Analysis & Consultation</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. ABOUT STRIP (Wix 2-Column Split: Portrait + Biography) */}
      {/* ========================================================================= */}
      <section id="about" className="py-20 lg:py-24 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Portrait Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#C9A96E]/30 bg-[#161411] p-2.5 shadow-2xl">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                  <Image
                    src="/assets/tamika/tamika-real-portrait.jpg"
                    alt="Tamika Shanea Robinson - The Motivating Mompreneur"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>

            {/* Bio Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#DFBA79]">
                <Heart className="w-4 h-4" /> The Motivating Mompreneur
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
                Inspiring & Changing Lives Daily <br />
                <span className="italic font-light text-[#EAD8B8]">Through Positivity, Faith & Strategy.</span>
              </h2>
              <p className="text-sm text-[#B5B0A4] leading-relaxed">
                Tamika Shanea&apos; Robinson-Carter, MBA, is a seasoned businesswoman with over 20+ years of entrepreneurial
                excellence. As a mom of four young adult children, she embodies the art of high-level balance, perseverance,
                and execution.
              </p>
              <p className="text-sm text-[#B5B0A4] leading-relaxed">
                Tamika holds an Associate Degree in Business from Bryant & Stratton College, a Bachelor&apos;s from University
                of the People, and earned her <strong>Master&apos;s in Business Administration (MBA)</strong> from Cleveland
                State University in May 2026.
              </p>
              <p className="text-sm text-[#B5B0A4] leading-relaxed">
                In addition to representing buyers and luxury sellers at <strong>Keller Williams Living | Integrity Partners</strong>,
                Tamika is a Certified Life & Relationship Coach, AI Consultant at <em>Consultamind Systems</em>, 4-time author,
                and host of the widely celebrated podcast <em>&quot;A Gal from Cleveland w/ Tamika Shanea&apos;&quot;</em>.
              </p>

              {/* Four pillars grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                <div className="bg-[#141215] border border-white/10 rounded-xl p-3 text-center">
                  <div className="text-xl font-bold font-serif text-[#DFBA79]">20+</div>
                  <div className="text-[10px] uppercase tracking-wider text-[#8E887D] mt-0.5">Years Business</div>
                </div>
                <div className="bg-[#141215] border border-white/10 rounded-xl p-3 text-center">
                  <div className="text-xl font-bold font-serif text-[#DFBA79]">MBA</div>
                  <div className="text-[10px] uppercase tracking-wider text-[#8E887D] mt-0.5">Cleveland State</div>
                </div>
                <div className="bg-[#141215] border border-white/10 rounded-xl p-3 text-center">
                  <div className="text-xl font-bold font-serif text-[#DFBA79]">4x</div>
                  <div className="text-[10px] uppercase tracking-wider text-[#8E887D] mt-0.5">Author</div>
                </div>
                <div className="bg-[#141215] border border-white/10 rounded-xl p-3 text-center">
                  <div className="text-xl font-bold font-serif text-[#DFBA79]">100+</div>
                  <div className="text-[10px] uppercase tracking-wider text-[#8E887D] mt-0.5">Podcast Shows</div>
                </div>
              </div>

              {/* Direct Social Links */}
              <div className="flex items-center gap-3 pt-3">
                <a
                  href="https://www.instagram.com/tamikashanearealtor/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#DFBA79] hover:bg-white/10 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/tamikashanearobinson/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#DFBA79] hover:bg-white/10 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://www.facebook.com/TamikaShaneaLLC/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#DFBA79] hover:bg-white/10 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://tamikashanea.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#DFBA79] hover:underline ml-2 inline-flex items-center gap-1 font-medium"
                >
                  <span>tamikashanea.com</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. MEDIA & PODCAST STRIP (Wix Media Strip) */}
      {/* ========================================================================= */}
      <section id="podcast" className="py-20 border-b border-white/[0.08] bg-[#0A0A0C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#171512] via-[#211E18] to-[#171512] border border-[#C9A96E]/30 rounded-3xl p-8 sm:p-12 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#DFBA79] px-3 py-1 rounded-full bg-[#C9A96E]/15 border border-[#C9A96E]/30 inline-block">
                  Broadcast & Community Voice
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white">
                  A Gal from Cleveland w/ Tamika Shanea&apos;
                </h3>
                <p className="text-sm text-[#B5B0A4] leading-relaxed max-w-2xl">
                  A platform created for the voiceless and the game-changers across Cleveland. Tune in weekly for
                  entertainment, market perspective, faith-driven wisdom, and candid interviews with community pioneers.
                  Stream on Spotify, Apple Podcasts, and iHeartRadio.
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href="https://podcasters.spotify.com/pod/show/agalfromclevelandtshanea"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-xs font-semibold text-white border border-white/15 transition-all"
                  >
                    <Mic className="w-4 h-4 text-[#DFBA79]" />
                    <span>Listen on Spotify</span>
                  </a>
                  <a
                    href="https://www.facebook.com/TamikaShaneaLLC/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-xs font-semibold text-white border border-white/15 transition-all"
                  >
                    <Heart className="w-4 h-4 text-[#DFBA79]" />
                    <span>Watch Daily &quot;Convos with God&quot;</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-4 bg-black/50 border border-white/10 rounded-2xl p-6 text-center space-y-3">
                <div className="text-xs uppercase tracking-widest text-[#8E887D] font-semibold">
                  Community Impact Initiative
                </div>
                <h4 className="font-serif font-bold text-xl text-[#F3E2C4]">6 Shining Diamonds Gala</h4>
                <p className="text-xs text-[#A39E93]">
                  Recognizing extraordinary Cleveland grassroots leaders and entrepreneurs making lasting cultural change.
                </p>
                <div className="pt-2">
                  <span className="text-xs font-semibold text-[#DFBA79]">Inaugural Gala: October 2027</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11. TESTIMONIALS (Wix Testimonial Repeater) */}
      {/* ========================================================================= */}
      <section id="testimonials" className="py-20 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#DFBA79]">
              Verified Client Stories
            </span>
            <h2 className="text-3xl font-serif font-bold text-white tracking-tight">
              Trust Built on Exceptional Results
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-[#141216] border border-white/10 hover:border-[#C9A96E]/30 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-[#DFBA79]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#DFBA79] bg-[#C9A96E]/10 px-2.5 py-1 rounded inline-block">
                    {t.result}
                  </div>
                  <p className="text-xs sm:text-sm text-[#C4BFB5] leading-relaxed italic">
                    &quot;{t.text}&quot;
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.08]">
                  <p className="font-serif font-bold text-white text-sm">{t.name}</p>
                  <p className="text-xs text-[#8E887D]">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 12. FAQ STRIP (Wix FAQ App) */}
      {/* ========================================================================= */}
      <section id="faq" className="py-20 border-b border-white/[0.08] bg-[#0A0A0C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2 mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#DFBA79]">
              Clear Answers
            </span>
            <h2 className="text-3xl font-serif font-bold text-white">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-white/10 rounded-2xl overflow-hidden bg-[#131114] transition-all"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between text-sm sm:text-base font-medium text-white hover:text-[#DFBA79] transition-colors"
                >
                  <span>{faq.q}</span>
                  {activeFaq === idx ? (
                    <ChevronUp className="w-4 h-4 text-[#DFBA79] shrink-0 ml-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#8E887D] shrink-0 ml-4" />
                  )}
                </button>
                {activeFaq === idx && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#A39E93] leading-relaxed border-t border-white/[0.05]">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 13. FINAL CALL TO ACTION (Wix Full-Width Banner Strip) */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-24 relative overflow-hidden bg-gradient-to-b from-[#15120E] via-[#1E1913] to-[#0A0A0C]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#DFBA79] px-3.5 py-1.5 rounded-full bg-[#C9A96E]/15 border border-[#C9A96E]/30 inline-block">
            Start Your Real Estate Journey
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Ready to Make Your Move With an <br />
            <span className="italic font-light text-[#EAD8B8]">MBA-Backed Strategic Partner?</span>
          </h2>
          <p className="text-sm sm:text-base text-[#B5B0A4] max-w-2xl mx-auto leading-relaxed">
            Whether you are selling a luxury home, finding your family sanctuary in Lakewood, or preparing to pass your
            real estate exam, Tamika Shanea Robinson brings the highest level of care and competence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => {
                setConsultType("buy");
                setIsConsultModalOpen(true);
              }}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-sm tracking-wide bg-gradient-to-r from-[#DFBA79] via-[#C9A96E] to-[#B38F52] text-[#0A0A0C] hover:brightness-110 shadow-2xl shadow-[#C9A96E]/20 transition-all"
            >
              Book Your Private Consultation
            </button>
            <a
              href="tel:2165843653"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-sm tracking-wide bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/15 transition-all inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#DFBA79]" /> Call (216) 584-3653
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 14. WIX FOOTER (Wix Footer Container) */}
      {/* ========================================================================= */}
      <footer className="border-t border-white/10 bg-[#080709] py-14 text-xs text-[#8E887D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-3">
              <span className="font-serif font-bold text-base text-white">Tamika Shanea' Robinson, MBA</span>
              <p className="text-xs text-[#A39E93]">
                Licensed Realtor® with Keller Williams Living | Integrity Partners. Dedicated to elevating residential
                real estate, investment, and education across Greater Cleveland.
              </p>
            </div>

            <div>
              <p className="text-white font-semibold uppercase tracking-wider mb-3 text-xs">Direct Contact</p>
              <ul className="space-y-2 text-[#A39E93]">
                <li>Phone: (216) 584-3653</li>
                <li>Direct: (216) 269-6714</li>
                <li>Email: tamika@tamikashanea.com</li>
                <li>Brokerage: Keller Williams Living</li>
              </ul>
            </div>

            <div>
              <p className="text-white font-semibold uppercase tracking-wider mb-3 text-xs">Core Programs</p>
              <ul className="space-y-2 text-[#A39E93]">
                <li>
                  <a href="#properties" className="hover:text-white">
                    Cleveland Featured Properties
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white">
                    Home Selling & Buying
                  </a>
                </li>
                <li>
                  <a href="#pass-coaching" className="hover:text-white">
                    PASS Real Estate Exam Prep
                  </a>
                </li>
                <li>
                  <a href="#podcast" className="hover:text-white">
                    A Gal from Cleveland Podcast
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-white font-semibold uppercase tracking-wider mb-3 text-xs">Follow & Connect</p>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/tamikashanearealtor/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#DFBA79] hover:bg-white/10 transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/tamikashanearobinson/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#DFBA79] hover:bg-white/10 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://www.facebook.com/TamikaShaneaLLC/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#DFBA79] hover:bg-white/10 transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
              <p className="text-[11px] text-[#706B62] mt-3">
                Equal Housing Opportunity. Each Keller Williams office is independently owned and operated.
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
            <p>© {new Date().getFullYear()} Tamika Shanea Robinson, MBA. All Rights Reserved.</p>
            <p>
              Digital Experience & Brand Strategy designed by{" "}
              <Link href="/" className="text-[#DFBA79] hover:underline">
                Miskat Hossain
              </Link>
            </p>
          </div>
        </div>
      </footer>

      {/* ========================================================================= */}
      {/* 15. BOOKING MODAL (Wix Bookings App Modal) */}
      {/* ========================================================================= */}
      {isConsultModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-[#141216] border border-[#C9A96E]/40 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden">
            <button
              onClick={resetConsultModal}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-[#B5B0A4] hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {consultSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#C9A96E]/20 text-[#DFBA79] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif font-bold text-2xl text-white">Consultation Requested!</h3>
                <p className="text-xs sm:text-sm text-[#A39E93] max-w-sm mx-auto">
                  Thank you! Tamika will review your notes and reach out shortly to confirm your time.
                </p>
                <button
                  onClick={resetConsultModal}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#DFBA79] to-[#C9A96E] text-[#0A0A0C] font-semibold text-xs uppercase tracking-wider"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <div>
                <div className="space-y-1 mb-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#DFBA79]">
                    Tamika Shanea Robinson, MBA
                  </span>
                  <h3 className="font-serif font-bold text-2xl text-white">Schedule Private Consultation</h3>
                  <p className="text-xs text-[#A39E93]">
                    Select your focus area and provide your contact details below.
                  </p>
                </div>

                <form onSubmit={handleConsultSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#8E887D] font-medium mb-1.5">
                      Consultation Focus
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { id: "buy", label: "Buying a Home" },
                        { id: "sell", label: "Selling My Home" },
                        { id: "invest", label: "Investment Advisory" },
                        { id: "pass", label: "PASS Exam Coaching" },
                      ].map((item) => (
                        <button
                          type="button"
                          key={item.id}
                          onClick={() => setConsultType(item.id as any)}
                          className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all text-center ${
                            consultType === item.id
                              ? "bg-[#C9A96E]/20 border-[#DFBA79] text-white"
                              : "bg-black/30 border-white/10 text-[#8E887D]"
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#8E887D] font-medium mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Angela Davis"
                      className="w-full bg-black/40 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-[#6E6A63] outline-none focus:border-[#C9A96E]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#8E887D] font-medium mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full bg-black/40 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-[#6E6A63] outline-none focus:border-[#C9A96E]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#8E887D] font-medium mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="216-555-0123"
                        className="w-full bg-black/40 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-[#6E6A63] outline-none focus:border-[#C9A96E]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#8E887D] font-medium mb-1">
                      Preferred Date / Time / Notes
                    </label>
                    <textarea
                      rows={2}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Mention any specific Cleveland neighborhoods, timeline, or exam prep goals..."
                      className="w-full bg-black/40 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-[#6E6A63] outline-none focus:border-[#C9A96E]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl font-semibold text-xs uppercase tracking-wider bg-gradient-to-r from-[#DFBA79] via-[#C9A96E] to-[#B38F52] text-[#0A0A0C] hover:brightness-110 shadow-lg shadow-[#C9A96E]/20 transition-all mt-2"
                  >
                    Confirm Consultation Request
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
