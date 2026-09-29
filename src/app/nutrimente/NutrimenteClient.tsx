"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Heart,
  ShieldCheck,
  Award,
  Calendar,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  X,
  MapPin,
  Clock,
  Star,
  Activity,
  Dna,
  Zap,
  Flame,
  Sliders,
  Check,
  HelpCircle,
  Stethoscope,
  Layers,
  Code2,
  ExternalLink,
  Info,
  Menu,
} from "lucide-react";

export default function NutrimenteClient() {
  // Mobile navigation drawer
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Consultation Booking Modal
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingService, setBookingService] = useState<string>("1-on-1 Precision Nutritional Therapy");
  const [bookingStep, setBookingStep] = useState<"form" | "success">("form");
  const [bookingFormData, setBookingFormData] = useState({
    name: "",
    email: "",
    phone: "",
    primaryGoal: "Hormonal & Perimenopause Balance",
    preferredLocation: "Online Video Consultation",
    message: "",
  });

  // WordPress Architecture Drawer
  const [wpDrawerOpen, setWpDrawerOpen] = useState(false);

  // Active FAQ Accordion
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // Interactive Hero Clinical Pathway Selector
  const [heroPathway, setHeroPathway] = useState<"hormones" | "glp1" | "metabolism" | "gut">("hormones");

  // Interactive Health Audit / Root Cause Quiz
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([
    "tired-afternoon",
    "brain-fog",
  ]);

  const heroPathwaysData = {
    hormones: {
      badge: "Perimenopause & Hormonal Balance",
      title: "Restore Hormonal Harmony Without Guesswork",
      desc: "Comprehensive dried-urine hormone metabolomics (DUTCH) to address brain fog, sudden weight gain around the middle, sleep disruptions, and erratic cycles.",
      testing: "DUTCH Complete + Adrenal Cortisol Curve + Thyroid Panel",
      timeline: "Measurable improvements within 4-6 weeks",
      color: "teal",
    },
    glp1: {
      badge: "Beyond the Injection™ Co-Care",
      title: "Protect Muscle & Prevent Rebound on GLP-1",
      desc: "Clinical nutrition co-care for Wegovy, Ozempic and Mounjaro users to preserve lean tissue, soothe gastrointestinal side effects, and ensure permanent results.",
      testing: "Fasting Insulin + ApoB + Bioelectrical Body Composition",
      timeline: "Symptom relief within 14 days",
      color: "coral",
    },
    metabolism: {
      badge: "Cardiometabolic & Longevity",
      title: "Reverse Insulin Resistance & Energy Crashes",
      desc: "Connect the dots between rising cholesterol, blood glucose volatility, afternoon fatigue, and visceral fat storage with root-cause functional medicine.",
      testing: "Advanced Lipid NMR + HbA1c + HOMA-IR + Liver Biomarkers",
      timeline: "Normalised biomarkers in 8-12 weeks",
      color: "teal",
    },
    gut: {
      badge: "Gut-Brain & Microbiome PCR",
      title: "Eliminate Bloating & Restore Gut Integrity",
      desc: "Targeted DNA stool diagnostics to identify microbial dysbiosis, low stomach acid, impaired bile flow, and food intolerances without restrictive starvation diets.",
      testing: "GI-MAP DNA PCR Stool Panel + Zonulin + Secretory IgA",
      timeline: "90% digestive symptom resolution in 6-8 weeks",
      color: "coral",
    },
  };

  const symptomList = [
    {
      id: "tired-afternoon",
      category: "Energy & Adrenals",
      label: "3 PM Energy Crash / 'Tired but wired' at night",
      icon: Zap,
    },
    {
      id: "brain-fog",
      category: "Cognitive & Hormonal",
      label: "Brain fog, memory lapses & mood fluctuations",
      icon: Activity,
    },
    {
      id: "stubborn-weight",
      category: "Metabolic & Blood Sugar",
      label: "Stubborn weight around middle / intense sugar cravings",
      icon: Flame,
    },
    {
      id: "gut-bloat",
      category: "Gastrointestinal",
      label: "Bloating after meals, reflux, or irregular bowels",
      icon: Heart,
    },
    {
      id: "perimenopause",
      category: "Hormonal Transitions",
      label: "Erratic cycles, night sweats, or PMS sensitivity",
      icon: Sparkles,
    },
    {
      id: "glp1-support",
      category: "GLP-1 Co-Care",
      label: "Taking Wegovy/Mounjaro & concerned about muscle or rebound",
      icon: Stethoscope,
    },
  ];

  const toggleSymptom = (id: string) => {
    if (selectedSymptoms.includes(id)) {
      setSelectedSymptoms(selectedSymptoms.filter((s) => s !== id));
    } else {
      setSelectedSymptoms([...selectedSymptoms, id]);
    }
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingStep("success");
  };

  const resetBookingModal = () => {
    setIsBookingModalOpen(false);
    setTimeout(() => {
      setBookingStep("form");
      setBookingFormData({
        name: "",
        email: "",
        phone: "",
        primaryGoal: "Hormonal & Perimenopause Balance",
        preferredLocation: "Online Video Consultation",
        message: "",
      });
    }, 300);
  };

  // Testimonials
  const testimonials = [
    {
      quote:
        "Angela has been amazing. The depth of her knowledge, ability to tie salient points together and give practical, insightful advice has given me clear direction to steer myself to better health. I recommend her to anyone looking to improve, prevent or understand their health, sleep and maximise overall wellbeing.",
      author: "Tom",
      location: "Surrey & London",
      tag: "Metabolic & Sleep Optimization",
      result: "Restored vitality & deep restful sleep",
    },
    {
      quote:
        "I felt like a 'desperate case' when I contacted Angela, as I could not get better despite doctors' advice. After a few months with Angela, I feel so much better! What I really appreciated is that she helped me without asking to completely change my life upside down. Her knowledge is truly impressive.",
      author: "Laura",
      location: "Farnham Clinic",
      tag: "Chronic Fatigue & Digestive Health",
      result: "90% digestive symptom resolution",
    },
    {
      quote:
        "The support and guidance throughout was phenomenal. I loved the diagrams and flowcharts Angela worked through to help me understand the science behind my body. When I had unexpected health issues, she researched every single nutrient and supplement tailored to my genetics. Couldn't have asked for more.",
      author: "Bridget",
      location: "Online Consultation",
      tag: "Perimenopause & Hormonal Balance",
      result: "Eliminated hot flushes & mood swings",
    },
  ];

  // Clinical Services
  const services = [
    {
      id: "beyond-injection",
      badge: "Signature Innovation",
      badgeColor: "coral",
      title: "Beyond the Injection™",
      tagline: "The Evidence-Led Co-Care Program for GLP-1 & GIP Users",
      description:
        "Specifically engineered for individuals using Wegovy, Ozempic, Mounjaro or Zepbound who want to protect lean muscle mass, protect bone mineral density, banish gastrointestinal side effects, and prevent rebound weight regain.",
      highlights: [
        "Clinically tailored protein pacing & micronutrient sufficiency",
        "Gallbladder, liver & gut motility protection protocols",
        "Biomarker monitoring for muscle preservation & hydration",
        "Off-ramp metabolic calibration to lock in permanent results",
      ],
      price: "From £395",
      format: "6-Week Intensive or 12-Week Group Immersion",
      cta: "Explore Program Details",
    },
    {
      id: "precision-therapy",
      badge: "Most Comprehensive",
      badgeColor: "teal",
      title: "1-on-1 Precision Functional Health",
      tagline: "Deep Root-Cause Medicine for Hormones & Metabolism",
      description:
        "A private 3 to 6 month clinical partnership designed to untangle complex symptoms: chronic fatigue, perimenopause resistance, thyroid dysfunction, and cardiovascular risk markers.",
      highlights: [
        "In-depth 90-minute initial clinical & timeline audit",
        "Prescription-grade functional laboratory test interpretation",
        "Personalised weekly bio-individual nutrition & nutraceutical roadmap",
        "Direct continuous clinician messaging via Practice Better portal",
      ],
      price: "From £750",
      format: "3-Month & 6-Month Bespoke Retainers",
      cta: "Book Discovery Call",
    },
    {
      id: "testing",
      badge: "Diagnostic Precision",
      badgeColor: "teal",
      title: "Functional & Genetic Testing",
      tagline: "Stop Guessing. Measure Your Cellular Biology.",
      description:
        "High-definition clinical diagnostics to reveal precise hormonal metabolites, microbiome dysbiosis, and unique genetic polymorphisms influencing your methylation and detoxification.",
      highlights: [
        "DUTCH Complete™ Comprehensive Urine Hormone Panel",
        "GI-MAP™ DNA Stool & Microbiome Dysbiosis Analysis",
        "Lifecode Gx® Nutrigenomics: Methylation, Nervous System & Detox",
        "Advanced Cardiometabolic, Insulin Resistance & ApoB Lipids",
      ],
      price: "Custom Lab Pricing + Clinical Review",
      format: "At-Home Test Kits + 60-min Interpretation",
      cta: "View Diagnostic Panels",
    },
  ];

  // FAQs
  const faqs = [
    {
      q: "What is the difference between Functional Medicine and standard Nutritional advice?",
      a: "Conventional dietary advice often looks at calories or generic government guidelines. Functional Medicine treats the human body as an interconnected biological ecosystem. Rather than masking isolated symptoms with quick fixes, Angela investigates your genetics, microbiome, stress chemistry, mitochondrial health, and environmental exposome to uncover the actual root cause of why you feel unwell.",
    },
    {
      q: "Can I do consultations online, or do I need to visit in person?",
      a: "Both! Angela operates a private in-person clinic in Farnham, Surrey, and sees clients in Central London regularly. However, the majority of clients across the UK and internationally work with Angela through encrypted HD telehealth on the Practice Better platform, with diagnostic kits delivered directly to your doorstep.",
    },
    {
      q: "What is 'Beyond the Injection' and do I need to be on medication?",
      a: "Beyond the Injection is Angela's specialized functional medicine program designed for people taking or considering GLP-1/GIP medications (like Wegovy or Mounjaro). It equips you with the clinical nutrition, muscle protection, digestive support, and lifestyle habits needed to thrive on treatment and transition off without rebound weight gain.",
    },
    {
      q: "Are functional lab tests mandatory?",
      a: "No test is mandatory. Angela works closely with your personal budget and clinical priorities. Often, significant progress is made through targeted clinical observation and dietary adjustments alone. When deeper insight is needed (such as unexplained hormone resistance or gut symptoms), Angela suggests targeted tests like DUTCH or Lifecode Gx to save you months of trial and error.",
    },
    {
      q: "Can Angela work alongside my NHS GP or private specialist?",
      a: "Absolutely. Angela regularly collaborates with Harley Street cardiologists, endocrinologists, and NHS GPs. Functional medicine complements conventional care by managing lifestyle, nutrition, and metabolic foundations alongside any prescribed medical treatments.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2F5061] font-sans antialiased selection:bg-[#4297A0] selection:text-white">
      {/* ========================================================================= */}
      {/* 1. CONCEPT HEADER & WORDPRESS BLUEPRINT BAR                               */}
      {/* ========================================================================= */}
      <div className="bg-[#2F5061] text-white text-xs py-2 px-4 sm:px-6 relative z-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2.5 text-center md:text-left">
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <span className="text-[#E0EBF0]">
              Nutrimente by Angela Senese (IFMCP) • Redesigned by{" "}
              <strong className="text-white">Miskat Hossain</strong>
            </span>
          </div>

          <div className="flex items-center gap-3 text-[11px] text-[#C0D4DC]">
            <button
              onClick={() => setWpDrawerOpen(true)}
              className="inline-flex items-center gap-1 text-[#E07A70] hover:text-white transition-colors underline decoration-dotted underline-offset-4 font-medium"
            >
              <Code2 className="w-3.5 h-3.5 text-[#E07A70]" />
              <span>WordPress Implementation Blueprint</span>
            </button>
            <span className="text-[#41687A]">|</span>
            <a
              href="https://nutrimente.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-white transition-colors"
            >
              <span>Current Live Site</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-[#41687A]">|</span>
            <Link
              href="/"
              className="inline-flex items-center gap-1 text-[#4297A0] hover:text-white font-semibold transition-colors bg-white/10 px-2 py-0.5 rounded-md"
            >
              <span>Miskat's Site</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. MAIN STICKY NAVIGATION (Using Her Official Logo & Color System)         */}
      {/* ========================================================================= */}
      <header className="sticky top-0 z-40 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E3ECEB] transition-all shadow-[0_2px_15px_-3px_rgba(47,80,97,0.05)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
          {/* Her Own Official Brand Logo */}
          <Link href="/nutrimente" className="flex items-center gap-3 group">
            <div className="relative py-1">
              <Image
                src="/assets/nutrimente/nutrimente-official-logo.png"
                alt="Nutrimente — nourishing body & mind by Angela Senese"
                width={200}
                height={55}
                className="h-10 sm:h-11 w-auto object-contain transition-transform group-hover:scale-[1.02]"
                priority
                unoptimized
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold uppercase tracking-wider text-[#2F5061]/80">
            <a href="#about" className="hover:text-[#4297A0] transition-colors">
              About Angela
            </a>
            <a href="#approach" className="hover:text-[#4297A0] transition-colors">
              The Method
            </a>
            <a
              href="#beyond-the-injection"
              className="text-[#E07A70] hover:text-[#C8635B] transition-colors flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#E07A70] animate-pulse"></span>
              Beyond the Injection
            </a>
            <a href="#services" className="hover:text-[#4297A0] transition-colors">
              Clinical Programs
            </a>
            <a href="#audit" className="hover:text-[#4297A0] transition-colors">
              Symptom Audit
            </a>
            <a href="#testimonials" className="hover:text-[#4297A0] transition-colors">
              Patient Stories
            </a>
            <a href="#faq" className="hover:text-[#4297A0] transition-colors">
              FAQ
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setBookingService("Free 15-Minute Discovery Call");
                setIsBookingModalOpen(true);
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#4297A0] hover:bg-[#367C84] text-white text-xs sm:text-sm font-semibold tracking-wide shadow-md shadow-[#4297A0]/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Discovery Call</span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#2F5061] hover:bg-[#EBF3F2] transition-colors"
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-[#E3ECEB] px-6 py-5 space-y-3.5 text-xs font-semibold uppercase tracking-wider text-[#2F5061] animate-in slide-in-from-top duration-200 shadow-xl">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block hover:text-[#4297A0] py-1"
            >
              About Angela Senese
            </a>
            <a
              href="#approach"
              onClick={() => setMobileMenuOpen(false)}
              className="block hover:text-[#4297A0] py-1"
            >
              The Clinical Method
            </a>
            <a
              href="#beyond-the-injection"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#E07A70] py-1"
            >
              Beyond the Injection™ (GLP-1 Co-Care)
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block hover:text-[#4297A0] py-1"
            >
              Clinical Programs & Pricing
            </a>
            <a
              href="#audit"
              onClick={() => setMobileMenuOpen(false)}
              className="block hover:text-[#4297A0] py-1"
            >
              Root-Cause Symptom Audit
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="block hover:text-[#4297A0] py-1"
            >
              Patient Stories
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block hover:text-[#4297A0] py-1"
            >
              FAQ
            </a>
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsBookingModalOpen(true);
                }}
                className="w-full py-3 rounded-xl bg-[#4297A0] text-white font-semibold text-center text-sm shadow-md"
              >
                Book Free Discovery Call
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ========================================================================= */}
      {/* 3. REDESIGNED HERO SECTION (Awwwards-Level, Brand Color System)           */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden pt-12 sm:pt-16 pb-20 sm:pb-28 border-b border-[#E3ECEB]">
        {/* Soft Organic Brand Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#4297A0]/10 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-[#E07A70]/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Prestigious Accolade Pill in Brand Colors */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF4F4] border border-[#BCE0E4] text-xs font-semibold text-[#2F5061] shadow-sm">
                <Award className="w-4 h-4 text-[#4297A0]" />
                <span>Certified Functional Medicine Practitioner • Top 20% Quintile Score (IFM)</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#2F5061] leading-[1.12] tracking-tight font-normal">
                  Tired of low energy, stubborn weight &{" "}
                  <span className="italic font-normal text-[#4297A0]">hormone chaos?</span>
                </h1>
                <p className="text-base sm:text-lg text-[#2F5061]/80 font-normal leading-relaxed max-w-2xl">
                  Discover a personalized, science-led functional medicine approach to{" "}
                  <strong className="text-[#2F5061] font-semibold">women’s health</strong>,{" "}
                  <strong className="text-[#2F5061] font-semibold">metabolic vitality</strong>, and{" "}
                  <strong className="text-[#2F5061] font-semibold">gut equilibrium</strong>. Nourishing body and mind from the root cause—so you can feel like yourself again.
                </p>
              </div>

              {/* Interactive Quick-Pillar Selector (Awwwards feature) */}
              <div className="p-4 rounded-2xl bg-white border border-[#DCE9E8] shadow-sm space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#2F5061] uppercase tracking-wider text-[11px]">
                    Explore Your Primary Health Focus:
                  </span>
                  <span className="text-[#E07A70] text-[11px] font-semibold">Interactive Clinical Snapshot</span>
                </div>

                {/* 4 Interactive Buttons */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <button
                    onClick={() => setHeroPathway("hormones")}
                    className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all text-center ${
                      heroPathway === "hormones"
                        ? "bg-[#4297A0] text-white shadow-sm"
                        : "bg-[#F3F8F8] text-[#2F5061] hover:bg-[#E5F2F2]"
                    }`}
                  >
                    Hormones & Peri
                  </button>
                  <button
                    onClick={() => setHeroPathway("glp1")}
                    className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all text-center ${
                      heroPathway === "glp1"
                        ? "bg-[#E07A70] text-white shadow-sm"
                        : "bg-[#FFF5F3] text-[#2F5061] hover:bg-[#FEECE8]"
                    }`}
                  >
                    GLP-1 Co-Care
                  </button>
                  <button
                    onClick={() => setHeroPathway("metabolism")}
                    className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all text-center ${
                      heroPathway === "metabolism"
                        ? "bg-[#4297A0] text-white shadow-sm"
                        : "bg-[#F3F8F8] text-[#2F5061] hover:bg-[#E5F2F2]"
                    }`}
                  >
                    Metabolism & Heart
                  </button>
                  <button
                    onClick={() => setHeroPathway("gut")}
                    className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all text-center ${
                      heroPathway === "gut"
                        ? "bg-[#E07A70] text-white shadow-sm"
                        : "bg-[#FFF5F3] text-[#2F5061] hover:bg-[#FEECE8]"
                    }`}
                  >
                    Gut & Microbiome
                  </button>
                </div>

                {/* Live Snapshot Card */}
                <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E8EFF0] space-y-1.5 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-serif font-bold text-sm text-[#2F5061]">
                      {heroPathwaysData[heroPathway].title}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-white border border-[#DCE8E8] text-[#4297A0] font-semibold">
                      {heroPathwaysData[heroPathway].timeline}
                    </span>
                  </div>
                  <p className="text-[#2F5061]/80 text-xs leading-relaxed">
                    {heroPathwaysData[heroPathway].desc}
                  </p>
                  <div className="pt-1 flex items-center gap-1.5 text-[11px] text-[#4297A0] font-medium">
                    <Dna className="w-3.5 h-3.5" />
                    <span>Lab diagnostics: {heroPathwaysData[heroPathway].testing}</span>
                  </div>
                </div>
              </div>

              {/* Dual Action CTAs in Brand Colors */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1">
                <button
                  onClick={() => {
                    setBookingService(`Consultation — ${heroPathwaysData[heroPathway].badge}`);
                    setIsBookingModalOpen(true);
                  }}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#4297A0] hover:bg-[#367C84] text-white font-semibold text-sm tracking-wide shadow-lg shadow-[#4297A0]/20 transition-all transform hover:-translate-y-0.5"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Free 15-Min Discovery Call</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>

                <a
                  href="#audit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-[#FAF8F5] border border-[#DCE9E8] text-[#2F5061] font-semibold text-sm transition-all shadow-sm"
                >
                  <Activity className="w-4 h-4 text-[#E07A70]" />
                  <span>Take Free Symptom Health Audit</span>
                </a>
              </div>

              {/* Accreditation Trust Metrics */}
              <div className="pt-4 border-t border-[#E3ECEB] flex flex-wrap items-center gap-6 text-xs text-[#2F5061]/75">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#4297A0]" />
                  <span>Clinic in Farnham, Surrey</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#4297A0]" />
                  <span>Central London Appointments</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#4297A0]" />
                  <span>Encrypted Worldwide Telehealth</span>
                </div>
              </div>
            </div>

            {/* Right Visual Composition (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Organic curved framing in soft teal/coral */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#4297A0]/15 via-[#E07A70]/10 to-transparent rounded-[2.5rem] transform rotate-2 scale-105 -z-10" />

                {/* Primary Angela Portrait Card */}
                <div className="relative rounded-[2.2rem] overflow-hidden border border-[#DCE9E8] bg-white shadow-xl">
                  <Image
                    src="/assets/nutrimente/angela-hero.jpg"
                    alt="Angela Senese - Certified Functional Medicine Practitioner & Registered Nutritional Therapist"
                    width={800}
                    height={1000}
                    className="w-full h-[470px] sm:h-[530px] object-cover object-top hover:scale-[1.02] transition-transform duration-700"
                    priority
                    unoptimized
                  />

                  {/* Gradient Overlay for bottom text */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2F5061] via-[#2F5061]/20 to-transparent opacity-90" />

                  {/* Floating Bio Card on the image */}
                  <div className="absolute bottom-5 left-5 right-5 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E3ECEB] space-y-2 shadow-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-[#2F5061] font-serif text-lg font-bold">Angela Senese</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#EBF4F4] text-[#4297A0] text-[11px] font-bold">
                        IFMCP, DipCNM, mBANT
                      </span>
                    </div>
                    <p className="text-xs text-[#2F5061]/80 leading-relaxed font-normal">
                      "I help clients connect the dots between early warning signs, cutting-edge functional labs, and everyday realistic nutrition."
                    </p>
                    <div className="pt-1 flex items-center justify-between text-[11px] text-[#2F5061]/70">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#4297A0]" /> Farnham & London Clinic
                      </span>
                      <span className="flex items-center gap-1 text-[#E07A70] font-semibold">
                        <Star className="w-3 h-3 fill-current" /> 5.0 Patient Rating
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating Metric Pill: IFM Top 20% Quintile */}
                <div className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md border border-[#DCE9E8] rounded-2xl p-3.5 shadow-lg flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EBF4F4] flex items-center justify-center text-[#4297A0]">
                    <Award className="w-5 h-5 text-[#4297A0]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#2F5061] tracking-wide">Top 20% Quintile</div>
                    <div className="text-[11px] text-[#2F5061]/70">IFM Final Assessment Score</div>
                  </div>
                </div>

                {/* Floating Metric Pill: GLP-1 Innovation */}
                <div className="absolute -bottom-4 -right-2 sm:-right-4 bg-white/95 backdrop-blur-md border border-[#DCE9E8] rounded-2xl p-3.5 shadow-lg flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF5F3] flex items-center justify-center text-[#E07A70]">
                    <Stethoscope className="w-5 h-5 text-[#E07A70]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#2F5061] tracking-wide">Beyond the Injection™</div>
                    <div className="text-[11px] text-[#2F5061]/70">GLP-1 Functional Co-Care</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. REGULATORY ACCREDITATIONS STRIP                                       */}
      {/* ========================================================================= */}
      <section className="py-7 bg-white border-b border-[#E3ECEB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <span className="text-xs uppercase tracking-widest text-[#2F5061]/70 font-bold text-center md:text-left">
              Regulated Clinical Accreditations & Professional Registrations:
            </span>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
              <div className="flex items-center gap-2 bg-[#FAF8F5] px-3.5 py-1.5 rounded-xl border border-[#E3ECEB]">
                <Image
                  src="/assets/nutrimente/badge-ifm.jpg"
                  alt="Institute for Functional Medicine"
                  width={100}
                  height={40}
                  className="h-6 w-auto object-contain"
                  unoptimized
                />
                <span className="text-xs font-semibold text-[#2F5061]">IFM Certified</span>
              </div>

              <div className="flex items-center gap-2 bg-[#FAF8F5] px-3.5 py-1.5 rounded-xl border border-[#E3ECEB]">
                <Image
                  src="/assets/nutrimente/badge-bant.jpg"
                  alt="British Association for Nutrition and Lifestyle Medicine"
                  width={100}
                  height={40}
                  className="h-6 w-auto object-contain"
                  unoptimized
                />
                <span className="text-xs font-semibold text-[#2F5061]">BANT Member</span>
              </div>

              <div className="flex items-center gap-2 bg-[#FAF8F5] px-3.5 py-1.5 rounded-xl border border-[#E3ECEB]">
                <Image
                  src="/assets/nutrimente/badge-cnhc.jpeg"
                  alt="Complementary and Natural Healthcare Council"
                  width={100}
                  height={40}
                  className="h-6 w-auto object-contain"
                  unoptimized
                />
                <span className="text-xs font-semibold text-[#2F5061]">CNHC Registered</span>
              </div>

              <div className="flex items-center gap-2 bg-[#FAF8F5] px-3.5 py-1.5 rounded-xl border border-[#E3ECEB]">
                <Dna className="w-4 h-4 text-[#4297A0]" />
                <span className="text-xs font-semibold text-[#2F5061]">Lifecode Gx® Practitioner</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. INTERACTIVE ROOT-CAUSE SYMPTOM AUDIT                                   */}
      {/* ========================================================================= */}
      <section id="audit" className="py-20 sm:py-24 bg-[#FAF8F5] border-b border-[#E3ECEB]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF4F4] text-[#4297A0] text-xs font-bold uppercase tracking-wider">
              <Activity className="w-3.5 h-3.5" />
              Interactive Health Audit
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#2F5061] font-normal">
              What is your body trying to tell you?
            </h2>
            <p className="text-sm sm:text-base text-[#2F5061]/80">
              Select the symptoms you are experiencing. Our functional medicine logic maps them directly to the underlying biological systems and diagnostic tests.
            </p>
          </div>

          <div className="bg-white border border-[#DCE9E8] rounded-3xl p-6 sm:p-10 shadow-lg space-y-8">
            {/* Symptom Selection Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {symptomList.map((item) => {
                const isSelected = selectedSymptoms.includes(item.id);
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => toggleSymptom(item.id)}
                    className={`p-4 rounded-2xl border text-left flex items-start gap-3.5 transition-all ${
                      isSelected
                        ? "bg-[#EBF4F4] border-[#4297A0] text-[#2F5061] shadow-sm"
                        : "bg-[#FAF8F5] border-[#E8EFF0] text-[#2F5061]/70 hover:border-[#4297A0]/50 hover:text-[#2F5061]"
                    }`}
                  >
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                        isSelected ? "bg-[#4297A0] text-white" : "bg-white text-[#4297A0] border border-[#DCE9E8]"
                      }`}
                    >
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-[10px] tracking-wider uppercase font-bold text-[#4297A0] block">
                        {item.category}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold leading-snug block text-[#2F5061]">
                        {item.label}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Live Functional Logic Assessment Result */}
            <div className="bg-[#FAF8F5] border border-[#DCE9E8] rounded-2xl p-6 space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E3ECEB] pb-4">
                <div>
                  <div className="text-xs text-[#4297A0] uppercase tracking-wider font-bold">
                    Functional Diagnostic Mapping
                  </div>
                  <div className="text-lg font-serif text-[#2F5061] font-bold">
                    {selectedSymptoms.length === 0
                      ? "Select at least 1 symptom above to generate your analysis"
                      : `Mapped ${selectedSymptoms.length} Interconnected Physiological Clues`}
                  </div>
                </div>
                {selectedSymptoms.length > 0 && (
                  <span className="px-3 py-1 rounded-full bg-[#E07A70]/15 text-[#E07A70] text-xs font-bold border border-[#E07A70]/30">
                    Root-Cause Priority Identified
                  </span>
                )}
              </div>

              {selectedSymptoms.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-1 text-xs">
                  <div className="space-y-1.5">
                    <span className="text-[#2F5061]/60 uppercase font-bold tracking-wider text-[10px] block">
                      Primary Biological Driver:
                    </span>
                    <p className="text-[#2F5061] font-medium leading-relaxed">
                      {selectedSymptoms.includes("perimenopause") || selectedSymptoms.includes("brain-fog")
                        ? "HPA axis adrenal imbalance coupled with fluctuating estrogen/progesterone clearance and neuro-inflammatory signaling."
                        : selectedSymptoms.includes("stubborn-weight") || selectedSymptoms.includes("tired-afternoon")
                        ? "Cellular insulin receptor resistance, glucose spikes/dips, and hepatic metabolic load."
                        : "Microbiome dysbiosis, gut mucosa permeability (leaky gut), and impaired bile acid conversion."}
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-[#2F5061]/60 uppercase font-bold tracking-wider text-[10px] block">
                      Recommended Lab Testing:
                    </span>
                    <p className="text-[#2F5061] font-medium leading-relaxed">
                      {selectedSymptoms.includes("perimenopause")
                        ? "DUTCH Complete (Dried Urine Hormone & Cortisol Awakening Curve) + Advanced Thyroid Profile."
                        : selectedSymptoms.includes("stubborn-weight")
                        ? "Cardiometabolic Panel (Fasting Insulin, HOMA-IR, HbA1c, ApoB & Lipid Subfractions)."
                        : "GI-MAP DNA PCR Stool Diagnostic (Pathogens, Zonulin, Secretory IgA & Dysbiosis)."}
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-[#2F5061]/60 uppercase font-bold tracking-wider text-[10px] block">
                      Personalized Action Plan:
                    </span>
                    <p className="text-[#2F5061] font-medium leading-relaxed">
                      A 1:1 discovery discussion with Angela to review your symptom timeline and map your functional roadmap.
                    </p>
                  </div>
                </div>
              ) : (
                <p className="text-xs text-[#2F5061]/60 italic">
                  Select your symptoms from the cards above to see Angela’s clinical diagnostic rationale.
                </p>
              )}

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-[#2F5061]/70">
                  Functional medicine connects the dots between isolated complaints to find the true root cause.
                </span>
                <button
                  onClick={() => {
                    setBookingService("Health Audit Follow-up Consultation");
                    setIsBookingModalOpen(true);
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#4297A0] hover:bg-[#367C84] text-white text-xs font-semibold tracking-wide shadow-md transition-all"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Discuss Your Results with Angela</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. MEET ANGELA SENESE (Story, Credentials & Clinical Space)               */}
      {/* ========================================================================= */}
      <section id="about" className="py-20 sm:py-28 bg-white border-b border-[#E3ECEB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Image Collage with Original Photos */}
            <div className="lg:col-span-5 relative space-y-4">
              <div className="relative rounded-3xl overflow-hidden border border-[#DCE9E8] shadow-xl bg-[#FAF8F5]">
                <Image
                  src="/assets/nutrimente/angela-portrait.jpg"
                  alt="Angela Senese consulting clients in Farnham & London"
                  width={700}
                  height={850}
                  className="w-full h-[460px] sm:h-[500px] object-cover object-center"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2F5061] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="font-serif text-lg font-bold">In-Clinic & Virtual Practice</div>
                  <div className="text-xs text-white/80">Farnham, Surrey Clinic • Central London • Online Worldwide</div>
                </div>
              </div>

              {/* Smaller accent card */}
              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#DCE9E8] flex items-center gap-3.5 shadow-sm">
                <Image
                  src="/assets/nutrimente/angela-round.jpg"
                  alt="Angela Senese"
                  width={56}
                  height={56}
                  className="rounded-full object-cover border-2 border-[#4297A0]"
                  unoptimized
                />
                <div className="text-xs">
                  <div className="text-[#2F5061] font-bold">Graduated with Distinction</div>
                  <div className="text-[#2F5061]/70">College of Naturopathic Medicine (CNM London)</div>
                </div>
              </div>
            </div>

            {/* Right Story & Medical Philosophy */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EBF4F4] text-[#4297A0] text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" />
                Meet Your Practitioner
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#2F5061] font-normal leading-tight">
                "I connect the dots between your symptoms that conventional medicine often overlooks."
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-[#2F5061]/80 leading-relaxed font-normal">
                <p>
                  Hi, I’m <strong className="text-[#2F5061] font-semibold">Angela Senese</strong>. As a Certified Functional Medicine Practitioner and Registered Nutritional Therapist, I founded Nutrimente to support individuals who feel <em className="italic text-[#E07A70]">"not themselves"</em> despite being told their blood tests are entirely "normal."
                </p>
                <p>
                  Many of the people I see are doing all the "right things"—eating clean, exercising, taking supplements—yet remain plagued by afternoon crashes, restless sleep, brain fog, sudden weight gain around the abdomen, or rising cholesterol.
                </p>
                <p>
                  Rather than handing you a generic calorie sheet, my practice applies <strong className="text-[#2F5061] font-semibold">systems biology</strong>. We examine the intricate interplay between your gut microbiome, stress hormones (cortisol & DHEA), thyroid conversion, and cardiometabolic markers.
                </p>
              </div>

              {/* Clinical Milestones Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 pt-2">
                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E3ECEB] space-y-1">
                  <div className="text-2xl font-serif font-bold text-[#4297A0]">Top 20%</div>
                  <div className="text-[11px] text-[#2F5061]/75 leading-tight font-medium">IFM Final Certification Quintile</div>
                </div>
                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E3ECEB] space-y-1">
                  <div className="text-2xl font-serif font-bold text-[#E07A70]">7+ Modules</div>
                  <div className="text-[11px] text-[#2F5061]/75 leading-tight font-medium">Cardio, GI, Hormones, Immunity</div>
                </div>
                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E3ECEB] space-y-1">
                  <div className="text-2xl font-serif font-bold text-[#2F5061]">100+</div>
                  <div className="text-[11px] text-[#2F5061]/75 leading-tight font-medium">Hormonal & Gut Transformations</div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    setBookingService("Discovery Call with Angela");
                    setIsBookingModalOpen(true);
                  }}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#4297A0] hover:bg-[#367C84] text-white text-xs sm:text-sm font-semibold tracking-wide shadow-md transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Start Your Personal Consultation</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. SPOTLIGHT INNOVATION: "BEYOND THE INJECTION" (GLP-1 Co-Care)          */}
      {/* ========================================================================= */}
      <section
        id="beyond-the-injection"
        className="py-20 sm:py-28 bg-[#FFF5F3] border-b border-[#F7D8D3] relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E07A70]/30 text-xs font-semibold text-[#E07A70] shadow-sm">
                <Stethoscope className="w-4 h-4 text-[#E07A70]" />
                <span>UK Clinical First • GLP-1 & GIP Functional Co-Care</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#2F5061] font-normal leading-tight">
                Beyond the Injection™
              </h2>

              <p className="text-base sm:text-lg text-[#2F5061]/85 font-normal leading-relaxed">
                Using <strong className="text-[#2F5061] font-semibold">Wegovy, Ozempic, Mounjaro</strong> or looking to transition off? Discover the evidence-based medical nutrition program to protect muscle, preserve metabolic rate, and eliminate rebound weight regain.
              </p>

              <div className="space-y-3.5 pt-2">
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-[#F4DDD9] shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#E07A70] shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-[#2F5061]/85">
                    <strong className="text-[#2F5061] font-semibold">Muscle Mass & Bone Density Protection:</strong> Up to 40% of weight lost on GLP-1 agonists can be lean muscle unless strategically supported by clinical protein pacing and resistance nutrition.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-[#F4DDD9] shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#E07A70] shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-[#2F5061]/85">
                    <strong className="text-[#2F5061] font-semibold">Gastrointestinal & Gallbladder Relief:</strong> Alleviate common nausea, delayed gastric emptying, acid reflux, constipation, and sulfur burps with targeted botanical & enzymatic protocols.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-[#F4DDD9] shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#E07A70] shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-[#2F5061]/85">
                    <strong className="text-[#2F5061] font-semibold">Permanent Off-Ramp Strategy:</strong> Reset satiety cues, restore natural GLP-1 peptide signaling in the gut, and solidify lifelong metabolic autonomy without rebound weight spikes.
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-3">
                <button
                  onClick={() => {
                    setBookingService("Beyond the Injection Program Enquiry");
                    setIsBookingModalOpen(true);
                  }}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#E07A70] hover:bg-[#C8635B] text-white text-xs sm:text-sm font-semibold tracking-wide shadow-lg shadow-[#E07A70]/25 transition-all"
                >
                  <Stethoscope className="w-4 h-4" />
                  <span>Join Beyond the Injection</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>

                <a
                  href="https://nutrimente.co.uk/beyond-the-injection-group-program/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#2F5061]/80 hover:text-[#2F5061] underline decoration-dotted underline-offset-4 font-semibold"
                >
                  <span>Read full program syllabus on original site</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Card / In-Clinic Snapshot (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-[#F2C8C1] bg-white p-6 sm:p-8 space-y-6 shadow-xl">
                <div className="flex items-center justify-between border-b border-[#F4DDD9] pb-4">
                  <div className="text-[#2F5061] font-serif text-xl font-bold">The 4 Clinical Pillars</div>
                  <span className="text-[11px] px-2.5 py-1 rounded-full bg-[#E07A70]/15 text-[#E07A70] font-bold">
                    Evidence-Based
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#FFF5F3] border border-[#E07A70] text-[#E07A70] text-xs font-bold flex items-center justify-center shrink-0">
                      1
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-[#2F5061]">Preserving Functional Lean Tissue</h4>
                      <p className="text-xs text-[#2F5061]/70">Targeted amino acid thresholds & micronutrient bioavailability.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#FFF5F3] border border-[#E07A70] text-[#E07A70] text-xs font-bold flex items-center justify-center shrink-0">
                      2
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-[#2F5061]">Gut Motility & Microbiome Balance</h4>
                      <p className="text-xs text-[#2F5061]/70">Supporting natural peristalsis, microbial diversity, and bile acid flow.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#FFF5F3] border border-[#E07A70] text-[#E07A70] text-xs font-bold flex items-center justify-center shrink-0">
                      3
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-[#2F5061]">Metabolic & Insulin Re-Sensitization</h4>
                      <p className="text-xs text-[#2F5061]/70">Continuous glucose balance and steady mitochondrial ATP generation.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#FFF5F3] border border-[#E07A70] text-[#E07A70] text-xs font-bold flex items-center justify-center shrink-0">
                      4
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-[#2F5061]">Sustainable Post-Medication Off-Ramp</h4>
                      <p className="text-xs text-[#2F5061]/70">Behavioral conditioning, hunger cue synchronization, and zero rebound.</p>
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#EAE4DF] text-xs text-[#2F5061]/80">
                  <Info className="w-4 h-4 text-[#E07A70] inline-block mr-1.5 -mt-0.5" />
                  Designed for individuals working with any private prescriber or NHS clinic.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. THE 4-STAGE METHODOLOGY                                                */}
      {/* ========================================================================= */}
      <section id="approach" className="py-20 sm:py-28 bg-[#FAF8F5] border-b border-[#E3ECEB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EBF4F4] text-[#4297A0] text-xs font-bold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5" />
              The Clinical Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#2F5061] font-normal">
              How We Heal: The 4-Stage Journey
            </h2>
            <p className="text-sm sm:text-base text-[#2F5061]/80">
              A structured, evidence-backed roadmap tailored specifically to your biochemistry, timeline, and daily lifestyle reality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="p-7 rounded-3xl bg-white border border-[#DCE9E8] space-y-4 shadow-sm hover:border-[#4297A0] transition-colors">
              <div className="w-10 h-10 rounded-2xl bg-[#EBF4F4] text-[#4297A0] font-serif text-lg font-bold flex items-center justify-center">
                01
              </div>
              <h3 className="text-lg font-serif text-[#2F5061] font-bold">Deep-Dive Clinical Audit</h3>
              <p className="text-xs sm:text-sm text-[#2F5061]/80 leading-relaxed">
                We review your complete health trajectory—from childhood antibiotics and stress triggers to hormonal transitions and existing blood panels.
              </p>
              <div className="pt-2 text-[11px] text-[#4297A0] font-bold flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> 90-Min Comprehensive Session
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-7 rounded-3xl bg-white border border-[#DCE9E8] space-y-4 shadow-sm hover:border-[#4297A0] transition-colors">
              <div className="w-10 h-10 rounded-2xl bg-[#EBF4F4] text-[#4297A0] font-serif text-lg font-bold flex items-center justify-center">
                02
              </div>
              <h3 className="text-lg font-serif text-[#2F5061] font-bold">Biomarker & Genetic Diagnostics</h3>
              <p className="text-xs sm:text-sm text-[#2F5061]/80 leading-relaxed">
                When indicated, we deploy targeted testing: DUTCH hormone metabolomics, GI-MAP DNA microbiome stool test, or Lifecode Gx nutrigenomics.
              </p>
              <div className="pt-2 text-[11px] text-[#4297A0] font-bold flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> Zero Guesswork Medicine
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-7 rounded-3xl bg-white border border-[#DCE9E8] space-y-4 shadow-sm hover:border-[#4297A0] transition-colors">
              <div className="w-10 h-10 rounded-2xl bg-[#EBF4F4] text-[#4297A0] font-serif text-lg font-bold flex items-center justify-center">
                03
              </div>
              <h3 className="text-lg font-serif text-[#2F5061] font-bold">Precision Bio-Individual Protocol</h3>
              <p className="text-xs sm:text-sm text-[#2F5061]/80 leading-relaxed">
                You receive a clear, phased nutrition and lifestyle plan, therapeutic-grade supplements, and practical recipes designed for busy family schedules.
              </p>
              <div className="pt-2 text-[11px] text-[#4297A0] font-bold flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> Fits Real Life Habits
              </div>
            </div>

            {/* Step 4 */}
            <div className="p-7 rounded-3xl bg-white border border-[#DCE9E8] space-y-4 shadow-sm hover:border-[#4297A0] transition-colors">
              <div className="w-10 h-10 rounded-2xl bg-[#EBF4F4] text-[#4297A0] font-serif text-lg font-bold flex items-center justify-center">
                04
              </div>
              <h3 className="text-lg font-serif text-[#2F5061] font-bold">Continuous Calibration & Autonomy</h3>
              <p className="text-xs sm:text-sm text-[#2F5061]/80 leading-relaxed">
                Ongoing follow-up reviews, biomarker tracking, and portal messaging support so you understand your body’s signals and sustain lifelong vitality.
              </p>
              <div className="pt-2 text-[11px] text-[#4297A0] font-bold flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> Long-Term Health Independence
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. CLINICAL SERVICES & PROGRAM TIERS                                     */}
      {/* ========================================================================= */}
      <section id="services" className="py-20 sm:py-28 bg-white border-b border-[#E3ECEB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EBF4F4] text-[#4297A0] text-xs font-bold uppercase tracking-wider">
              <Sliders className="w-3.5 h-3.5" />
              Ways to Work Together
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#2F5061] font-normal">
              Tailored Clinical Pathways
            </h2>
            <p className="text-sm sm:text-base text-[#2F5061]/80">
              Whether you need end-to-end 1-on-1 functional medicine care, GLP-1 co-care, or targeted genetic testing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((svc) => (
              <div
                key={svc.id}
                className="rounded-3xl border border-[#DCE9E8] bg-[#FAF8F5] p-7 sm:p-8 flex flex-col justify-between space-y-6 hover:border-[#4297A0] transition-all hover:shadow-xl"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span
                      className={`px-3 py-1 rounded-full text-[11px] font-bold border ${
                        svc.badgeColor === "coral"
                          ? "bg-[#FFF5F3] text-[#E07A70] border-[#E07A70]/30"
                          : "bg-[#EBF4F4] text-[#4297A0] border-[#4297A0]/30"
                      }`}
                    >
                      {svc.badge}
                    </span>
                    <span className="text-xs text-[#2F5061]/70 font-medium">{svc.format}</span>
                  </div>

                  <div>
                    <h3 className="text-xl font-serif text-[#2F5061] font-bold">{svc.title}</h3>
                    <p className="text-xs text-[#4297A0] font-semibold pt-1">{svc.tagline}</p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#2F5061]/80 leading-relaxed font-normal">
                    {svc.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-[#E3ECEB]">
                    <span className="text-[11px] uppercase font-bold text-[#2F5061]/60 tracking-wider block">
                      Program Inclusions:
                    </span>
                    {svc.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#2F5061]/85">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#4297A0] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-[#E3ECEB]">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs text-[#2F5061]/60 font-semibold uppercase">Pricing</span>
                    <span className="text-2xl font-serif font-bold text-[#2F5061]">{svc.price}</span>
                  </div>

                  <button
                    onClick={() => {
                      setBookingService(svc.title);
                      setIsBookingModalOpen(true);
                    }}
                    className={`w-full py-3 rounded-full text-white text-xs sm:text-sm font-semibold tracking-wide shadow-md transition-all text-center ${
                      svc.badgeColor === "coral"
                        ? "bg-[#E07A70] hover:bg-[#C8635B]"
                        : "bg-[#4297A0] hover:bg-[#367C84]"
                    }`}
                  >
                    {svc.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. VERIFIED PATIENT STORIES & BREAKTHROUGHS                             */}
      {/* ========================================================================= */}
      <section id="testimonials" className="py-20 sm:py-28 bg-[#FAF8F5] border-b border-[#E3ECEB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EBF4F4] text-[#4297A0] text-xs font-bold uppercase tracking-wider">
              <Star className="w-3.5 h-3.5 text-[#D4AF37] fill-current" />
              Verified Patient Transformations
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#2F5061] font-normal">
              Words From Those Who Found Answers
            </h2>
            <p className="text-sm sm:text-base text-[#2F5061]/80">
              Real stories from women and men who regained their vitality, reversed chronic symptoms, and found peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-[#DCE9E8] bg-white p-7 sm:p-8 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-[#D4AF37]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-[#2F5061]/85 leading-relaxed italic font-normal">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E3ECEB] space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[#2F5061] font-serif font-bold text-base">{t.author}</span>
                    <span className="text-[11px] text-[#2F5061]/60">{t.location}</span>
                  </div>
                  <div className="text-[11px] font-bold text-[#4297A0]">{t.result}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Clinical Breakthrough Callout */}
          <div className="mt-12 p-6 rounded-3xl bg-white border border-[#BCE0E4] shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-12 h-12 rounded-full bg-[#EBF4F4] flex items-center justify-center text-[#4297A0] shrink-0">
                <Heart className="w-6 h-6 text-[#E07A70]" />
              </div>
              <div className="space-y-0.5">
                <div className="text-sm font-bold text-[#2F5061]">4-Week Blood Pressure Normalization</div>
                <div className="text-xs text-[#2F5061]/80">
                  "Stabilised blood pressure without added pharmaceuticals, simply by repairing insulin sensitivity, electrolytes, and cellular hydration."
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                setBookingService("Discovery Call from Patient Stories");
                setIsBookingModalOpen(true);
              }}
              className="px-6 py-2.5 rounded-full bg-[#4297A0] hover:bg-[#367C84] text-white text-xs font-semibold whitespace-nowrap transition-colors shadow-sm"
            >
              Discuss Your Case
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11. FREE VALUE VAULT (Perimenopause Guide & Recipes)                       */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#E3ECEB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-[#DCE9E8] bg-gradient-to-r from-[#FAF8F5] via-[#F5FAF9] to-[#FFF5F3] p-8 sm:p-12 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="px-3 py-1 rounded-full bg-white border border-[#DCE9E8] text-[#4297A0] text-xs font-bold uppercase tracking-wider">
                  Free Clinical Educational Gift
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#2F5061] font-normal">
                  5 Pillars to a Happy Perimenopause
                </h3>
                <p className="text-xs sm:text-sm text-[#2F5061]/80 leading-relaxed max-w-2xl font-normal">
                  Download Angela's essential blueprint to navigate hormonal fluctuations, protect bone density, balance estrogen clearance, and regain restorative sleep without overwhelm.
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-[#2F5061]/70 font-medium">
                  <span>✓ Instant PDF Download</span>
                  <span>✓ Evidence-based diet checklists</span>
                  <span>✓ 100% Free gift</span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
                <a
                  href="https://dashboard.mailerlite.com/forms/757243/109565395542738938/share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-full bg-[#E07A70] hover:bg-[#C8635B] text-white text-xs sm:text-sm font-semibold text-center tracking-wide shadow-md transition-all"
                >
                  Download Free Guide (PDF)
                </a>
                <a
                  href="https://nutrimente.co.uk/easy-healthy-on-the-go-recipes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-6 rounded-full bg-white hover:bg-[#FAF8F5] border border-[#DCE9E8] text-xs text-[#2F5061] text-center font-semibold transition-colors"
                >
                  Browse Free Recipe Library
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 12. FAQ ACCORDION                                                         */}
      {/* ========================================================================= */}
      <section id="faq" className="py-20 sm:py-28 bg-[#FAF8F5] border-b border-[#E3ECEB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-14">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EBF4F4] text-[#4297A0] text-xs font-bold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5" />
              Clear Answers
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#2F5061] font-normal">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-[#2F5061]/80">
              Everything you need to know about working with Angela and the Nutrimente clinic.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => {
              const isOpen = activeFaq === i;
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-[#DCE9E8] bg-white overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : i)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-serif text-base sm:text-lg text-[#2F5061] font-bold hover:text-[#4297A0] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span className="p-1 rounded-full bg-[#EBF4F4] text-[#4297A0] shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-[#2F5061]/80 leading-relaxed font-normal border-t border-[#EAE4DF] pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 13. FINAL BOOKING CALLOUT                                                 */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-white to-[#EBF4F4] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="w-16 h-16 rounded-full bg-[#EBF4F4] border border-[#BCE0E4] flex items-center justify-center mx-auto text-[#4297A0] shadow-md">
            <Heart className="w-8 h-8 text-[#E07A70]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#2F5061] font-normal leading-tight">
            Ready to feel vibrant, clear, and in control again?
          </h2>

          <p className="text-base sm:text-lg text-[#2F5061]/80 font-normal max-w-2xl mx-auto leading-relaxed">
            Take the first step toward lasting health. Book a complimentary 15-minute discovery call to discuss your health history with Angela.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => {
                setBookingService("Complimentary 15-Min Discovery Call");
                setIsBookingModalOpen(true);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#4297A0] hover:bg-[#367C84] text-white font-semibold text-sm tracking-wide shadow-xl shadow-[#4297A0]/25 transition-all transform hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Free Discovery Call</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>

            <a
              href="https://my.practicebetter.io/#/603414372a9c24070849c480/bookings?s=61f11b5539803300c877f4fc"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white hover:bg-[#FAF8F5] border border-[#DCE9E8] text-xs sm:text-sm text-[#2F5061] font-semibold transition-colors shadow-sm"
            >
              <span>Direct Practice Better Calendar</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="pt-4 text-xs text-[#2F5061]/70 flex flex-wrap items-center justify-center gap-6">
            <span>• No obligations</span>
            <span>• 100% confidential</span>
            <span>• Direct clinician conversation</span>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 14. FOOTER (With Her Official Logo & Color System)                       */}
      {/* ========================================================================= */}
      <footer className="bg-[#2F5061] text-[#E0EBF0] py-16 text-xs border-t border-[#41687A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            {/* Col 1: Brand & Logo */}
            <div className="md:col-span-5 space-y-4">
              <div className="bg-white/95 p-3 rounded-2xl inline-block shadow-sm">
                <Image
                  src="/assets/nutrimente/nutrimente-official-logo.png"
                  alt="Nutrimente — nourishing body & mind"
                  width={180}
                  height={50}
                  className="h-9 w-auto object-contain"
                  unoptimized
                />
              </div>
              <p className="text-xs text-[#C0D4DC] leading-relaxed font-light">
                Nutrimente is an independent functional medicine and clinical nutrition clinic founded by Angela Senese. Dedicated to unraveling root-cause illness in women’s hormonal health, cardiometabolic resilience, and GLP-1 therapy.
              </p>
              <div className="text-[11px] text-[#A2B8B0]">
                Registered with BANT (British Association for Nutrition and Lifestyle Medicine) and CNHC (Complementary & Natural Healthcare Council).
              </div>
            </div>

            {/* Col 2: Locations */}
            <div className="md:col-span-3 space-y-3">
              <span className="text-white font-serif font-bold text-sm block">Clinic Practice</span>
              <div className="space-y-2 text-xs text-[#C0D4DC]">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#4297A0] shrink-0 mt-0.5" />
                  <span>Farnham, Surrey Clinic & Consultations</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#4297A0] shrink-0 mt-0.5" />
                  <span>Central London Appointments</span>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-[#4297A0] shrink-0 mt-0.5" />
                  <span>Online Telehealth Worldwide</span>
                </div>
              </div>
            </div>

            {/* Col 3: Programs */}
            <div className="md:col-span-2 space-y-3">
              <span className="text-white font-serif font-bold text-sm block">Specialties</span>
              <ul className="space-y-1.5 text-xs text-[#C0D4DC]">
                <li>
                  <a href="#beyond-the-injection" className="hover:text-white transition-colors">
                    Beyond the Injection
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition-colors">
                    Perimenopause Care
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition-colors">
                    DUTCH Hormone Labs
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition-colors">
                    Lifecode Gx Genetics
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: Redesign Credit */}
            <div className="md:col-span-2 space-y-3">
              <span className="text-white font-serif font-bold text-sm block">Digital Strategy</span>
              <p className="text-[11px] text-[#C0D4DC] leading-relaxed">
                Redesigned as an Awwwards-tier concept for Angela Senese by{" "}
                <strong className="text-white font-semibold">Miskat Hossain</strong>.
              </p>
              <div className="pt-1">
                <Link
                  href="/"
                  className="inline-flex items-center gap-1 text-[#4297A0] hover:text-white font-bold text-xs transition-colors bg-white/10 px-2.5 py-1 rounded-lg"
                >
                  <span>miskathossain.net</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-[#41687A] flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#A2B8B0]">
            <p>© {new Date().getFullYear()} Nutrimente. All rights reserved. Concept by Miskat Hossain.</p>
            <p className="max-w-xl text-center md:text-right">
              Disclaimer: Nutritional therapy and functional medicine are not substitutes for medical advice. Please consult your physician before starting any diet or supplement changes.
            </p>
          </div>
        </div>
      </footer>

      {/* ========================================================================= */}
      {/* 15. BOOKING MODAL                                                         */}
      {/* ========================================================================= */}
      {isBookingModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg rounded-3xl bg-white border border-[#DCE9E8] p-6 sm:p-8 shadow-2xl text-left space-y-6">
            <button
              onClick={resetBookingModal}
              className="absolute top-5 right-5 p-2 rounded-full text-[#2F5061]/60 hover:text-[#2F5061] hover:bg-[#FAF8F5] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {bookingStep === "form" ? (
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div className="space-y-1">
                  <span className="text-xs uppercase font-bold text-[#4297A0] tracking-wider">
                    Nutrimente Clinic Booking
                  </span>
                  <h3 className="text-2xl font-serif text-[#2F5061] font-bold">
                    Schedule Your Discovery Call
                  </h3>
                  <p className="text-xs text-[#2F5061]/75">
                    15 minutes with Angela Senese to discuss your health goals and recommended pathway.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <div>
                    <label className="block text-xs font-semibold text-[#2F5061] mb-1">Your Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={bookingFormData.name}
                      onChange={(e) => setBookingFormData({ ...bookingFormData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#DCE9E8] text-[#2F5061] text-xs sm:text-sm focus:outline-none focus:border-[#4297A0]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-[#2F5061] mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="sarah@example.com"
                        value={bookingFormData.email}
                        onChange={(e) => setBookingFormData({ ...bookingFormData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#DCE9E8] text-[#2F5061] text-xs sm:text-sm focus:outline-none focus:border-[#4297A0]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#2F5061] mb-1">Phone Number</label>
                      <input
                        type="tel"
                        required
                        placeholder="+44 7123 456789"
                        value={bookingFormData.phone}
                        onChange={(e) => setBookingFormData({ ...bookingFormData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#DCE9E8] text-[#2F5061] text-xs sm:text-sm focus:outline-none focus:border-[#4297A0]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#2F5061] mb-1">Primary Area of Concern</label>
                    <select
                      value={bookingFormData.primaryGoal}
                      onChange={(e) => setBookingFormData({ ...bookingFormData, primaryGoal: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#DCE9E8] text-[#2F5061] text-xs sm:text-sm focus:outline-none focus:border-[#4297A0]"
                    >
                      <option value="Hormonal & Perimenopause Balance">Hormonal & Perimenopause Balance</option>
                      <option value="Beyond the Injection (GLP-1 Co-Care)">Beyond the Injection (GLP-1 Co-Care)</option>
                      <option value="Chronic Fatigue & Sleep Imbalance">Chronic Fatigue & Sleep Imbalance</option>
                      <option value="Metabolic & Stubborn Weight">Metabolic & Stubborn Weight</option>
                      <option value="Gut Health & Microbiome PCR Testing">Gut Health & Microbiome PCR Testing</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#2F5061] mb-1">Consultation Preference</label>
                    <select
                      value={bookingFormData.preferredLocation}
                      onChange={(e) => setBookingFormData({ ...bookingFormData, preferredLocation: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#DCE9E8] text-[#2F5061] text-xs sm:text-sm focus:outline-none focus:border-[#4297A0]"
                    >
                      <option value="Online Video Consultation">Online Video Consultation (Worldwide)</option>
                      <option value="Farnham, Surrey Clinic">In-Person at Farnham, Surrey Clinic</option>
                      <option value="London Clinic">In-Person at London Clinic</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2 space-y-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-[#4297A0] hover:bg-[#367C84] text-white font-semibold text-xs sm:text-sm tracking-wide shadow-md transition-all"
                  >
                    Submit Booking Request
                  </button>

                  <div className="text-center">
                    <a
                      href="https://my.practicebetter.io/#/603414372a9c24070849c480/bookings?s=61f11b5539803300c877f4fc"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] text-[#4297A0] hover:underline font-semibold"
                    >
                      Prefer to book directly on Practice Better calendar? Click here →
                    </a>
                  </div>
                </div>
              </form>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#EBF4F4] border border-[#BCE0E4] flex items-center justify-center text-[#4297A0] mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif text-[#2F5061] font-bold">Consultation Request Received!</h3>
                <p className="text-xs sm:text-sm text-[#2F5061]/80 max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong className="text-[#2F5061]">{bookingFormData.name}</strong>. Angela's clinic coordinator will email you within 24 hours with calendar availability for your free discovery call.
                </p>
                <div className="pt-3">
                  <button
                    onClick={resetBookingModal}
                    className="px-6 py-2.5 rounded-full bg-[#2F5061] hover:bg-[#1F3743] text-xs font-semibold text-white"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 16. WORDPRESS BLUEPRINT DRAWER                                           */}
      {/* ========================================================================= */}
      {wpDrawerOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl h-full bg-white border-l border-[#DCE9E8] p-6 sm:p-8 overflow-y-auto space-y-6 text-left shadow-2xl">
            <button
              onClick={() => setWpDrawerOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full text-[#2F5061]/60 hover:text-[#2F5061] hover:bg-[#FAF8F5] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <span className="text-xs uppercase font-bold text-[#4297A0] tracking-wider">
                WordPress Implementation Guide
              </span>
              <h3 className="text-2xl font-serif text-[#2F5061] font-bold">
                How to Rebuild this in WordPress
              </h3>
              <p className="text-xs text-[#2F5061]/75">
                Nutrimente's current site runs on Beaver Builder/WordPress. Here is how this redesigned concept easily maps to modern WordPress (Gutenberg blocks, Elementor, or Kadence):
              </p>
            </div>

            <div className="space-y-4 text-xs text-[#2F5061]/85">
              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E3ECEB] space-y-2">
                <span className="font-bold text-[#2F5061] text-sm flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-[#4297A0]" />
                  1. Gutenberg / Full Site Editing (FSE) Block Structure
                </span>
                <p className="text-[#2F5061]/80 leading-relaxed">
                  Every section is built with standard semantic containers:
                  <br />• <strong>Hero:</strong> Group Block (Full Width) with 2-Column Grid (60/40) + Cover block with rounded radii.
                  <br />• <strong>Symptom Audit:</strong> Form Block or ACF / JetEngine interactive checkbox group with instant filter output.
                  <br />• <strong>Beyond the Injection:</strong> Custom Post Type or Pattern Block with 4-item flex cards.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E3ECEB] space-y-2">
                <span className="font-bold text-[#2F5061] text-sm flex items-center gap-1.5">
                  <Sliders className="w-4 h-4 text-[#4297A0]" />
                  2. Brand System Color Tokens (theme.json)
                </span>
                <p className="text-[#2F5061]/80 leading-relaxed">
                  • <strong>Primary Teal:</strong> #4297A0
                  <br />• <strong>Secondary Coral Rose:</strong> #E07A70
                  <br />• <strong>Dark Slate Text:</strong> #2F5061
                  <br />• <strong>Background Warm Ivory:</strong> #FAF8F5
                  <br />• <strong>Typography:</strong> Cormorant Garamond / Playfair (Headings) + Plus Jakarta Sans / Inter (Body).
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E3ECEB] space-y-2">
                <span className="font-bold text-[#2F5061] text-sm flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-[#4297A0]" />
                  3. Practice Better & MailerLite Integration
                </span>
                <p className="text-[#2F5061]/80 leading-relaxed">
                  Keep her existing Practice Better widget embed shortcode or direct URL for scheduling, and MailerLite forms for the "5 Pillars to Perimenopause" free PDF download.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E3ECEB] space-y-2">
                <span className="font-bold text-[#2F5061] text-sm flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#4297A0]" />
                  4. Elementor / Spectra Compatibility
                </span>
                <p className="text-[#2F5061]/80 leading-relaxed">
                  All flexbox containers, pill badges, testimonial carousels, and accordion FAQs are available as native Elementor Pro widgets without custom plugin bloat.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setWpDrawerOpen(false)}
                className="w-full py-3 rounded-xl bg-[#4297A0] text-white font-semibold text-xs text-center"
              >
                Back to Website Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
