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
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  Activity,
  Dna,
  Zap,
  Flame,
  Search,
  BookOpen,
  FileText,
  Sliders,
  Check,
  Send,
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

  // WordPress Block Architecture Drawer
  const [wpDrawerOpen, setWpDrawerOpen] = useState(false);

  // Active FAQ Accordion
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // Active Service Tab
  const [activeServiceTab, setActiveServiceTab] = useState<"all" | "individual" | "glp1" | "testing">("all");

  // Interactive Health Audit / Root Cause Quiz
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([
    "tired-afternoon",
    "brain-fog",
  ]);
  const [quizSubmitted, setQuizSubmitted] = useState(false);

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
      label: "Brain fog, memory lapses & low mood",
      icon: Activity,
    },
    {
      id: "stubborn-weight",
      category: "Metabolic & Blood Sugar",
      label: "Stubborn weight around middle / intense cravings",
      icon: Flame,
    },
    {
      id: "gut-bloat",
      category: "Gastrointestinal",
      label: "Bloating after meals, reflux, or irregular bowel",
      icon: Heart,
    },
    {
      id: "perimenopause",
      category: "Hormonal Transitions",
      label: "Erratic cycles, night sweats, or PMS fluctuations",
      icon: Sparkles,
    },
    {
      id: "glp1-support",
      category: "GLP-1 Co-Care",
      label: "Taking Wegovy/Mounjaro and concerned about muscle/rebound",
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
      type: "glp1",
      badge: "Signature Breakthrough",
      title: "Beyond the Injection™",
      tagline: "The Evidence-Led Co-Care Program for GLP-1 & GIP Users",
      description:
        "Specifically engineered for individuals using Wegovy, Ozempic, Mounjaro or Zepbound who want to protect lean muscle mass, protect bone mineral density, banish gastrointestinal side effects, and prevent rebound weight regain.",
      highlights: [
        "Clinically tailored protein & micronutrient pacing",
        "Gallbladder, liver & gut motility protection protocols",
        "Strength-preserving biomarker monitoring & dietary plans",
        "Off-ramp metabolic calibration to lock in permanent results",
      ],
      price: "From £395",
      format: "6-Week Intensive or 12-Week Group Immersion",
      cta: "Explore Program Details",
    },
    {
      id: "precision-therapy",
      type: "individual",
      badge: "Most Comprehensive",
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
      type: "testing",
      badge: "Diagnostic Excellence",
      title: "Functional & Genetic Biomarker Testing",
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
    <div className="min-h-screen bg-[#0E1A17] text-[#EDE7DE] font-sans antialiased selection:bg-[#4E8271] selection:text-white">
      {/* ========================================================================= */}
      {/* 1. REDESIGN SHOWCASE BANNER (Top Bar)                                     */}
      {/* ========================================================================= */}
      <div className="bg-[#142622] border-b border-[#2C4A42] text-xs py-2.5 px-4 sm:px-6 relative z-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2.5 text-center md:text-left">
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#4E8271]/20 border border-[#4E8271]/40 text-[#7AC4AD] font-semibold text-[11px] tracking-wide uppercase">
              <Sparkles className="w-3 h-3" />
              Awwwards-Caliber Redesign
            </span>
            <span className="text-[#C5D5CF]">
              Nutrimente by Angela Senese (IFMCP) • Crafted by <strong className="text-white">Miskat Hossain</strong>
            </span>
          </div>

          <div className="flex items-center gap-3 text-[11px] text-[#A2B8B0]">
            <button
              onClick={() => setWpDrawerOpen(true)}
              className="inline-flex items-center gap-1 hover:text-[#7AC4AD] transition-colors underline decoration-dotted underline-offset-4"
            >
              <Code2 className="w-3 h-3 text-[#7AC4AD]" />
              <span>WordPress Architecture Blueprint</span>
            </button>
            <span className="text-[#2C4A42]">|</span>
            <a
              href="https://nutrimente.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-white transition-colors"
            >
              <span>Current Live Site</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-[#2C4A42]">|</span>
            <Link
              href="/"
              className="inline-flex items-center gap-1 text-[#7AC4AD] hover:text-white font-medium transition-colors"
            >
              <span>Miskat's Portfolio</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. STICKY HEADER / NAVIGATION                                             */}
      {/* ========================================================================= */}
      <header className="sticky top-0 z-40 bg-[#0E1A17]/90 backdrop-blur-md border-b border-[#243E37]/60 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
          {/* Brand Logo & Clinician Title */}
          <Link href="/nutrimente" className="flex items-center gap-3.5 group">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#4E8271]/40 bg-[#162B25] p-1 flex items-center justify-center shadow-inner group-hover:border-[#7AC4AD] transition-colors">
              <Image
                src="/assets/nutrimente/nutrimente-logo.png"
                alt="Nutrimente Clinic Logo"
                width={36}
                height={36}
                className="object-contain"
                unoptimized
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-serif tracking-tight text-white font-medium group-hover:text-[#7AC4AD] transition-colors">
                Nutrimente
              </span>
              <span className="text-[10px] tracking-widest uppercase text-[#96ADA5] font-medium">
                Angela Senese • IFMCP, mBANT
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#C8D7D2]">
            <a href="#about" className="hover:text-white transition-colors">
              About Angela
            </a>
            <a href="#approach" className="hover:text-white transition-colors">
              The Method
            </a>
            <a href="#beyond-the-injection" className="hover:text-[#7AC4AD] transition-colors flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7AC4AD] animate-pulse"></span>
              Beyond the Injection
            </a>
            <a href="#services" className="hover:text-white transition-colors">
              Clinical Programs
            </a>
            <a href="#quiz" className="hover:text-white transition-colors">
              Symptom Audit
            </a>
            <a href="#testimonials" className="hover:text-white transition-colors">
              Patient Stories
            </a>
            <a href="#faq" className="hover:text-white transition-colors">
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
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-[#4E8271] hover:bg-[#3D695B] text-white text-xs sm:text-sm font-semibold tracking-wide shadow-lg shadow-[#1C362F] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Discovery Call</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#C8D7D2] hover:text-white hover:bg-[#1B322C] transition-colors"
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#12221E] border-b border-[#243E37] px-6 py-6 space-y-4 text-sm font-medium animate-in slide-in-from-top duration-200">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#C8D7D2] hover:text-white py-1"
            >
              About Angela Senese
            </a>
            <a
              href="#approach"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#C8D7D2] hover:text-white py-1"
            >
              The 4-Stage Method
            </a>
            <a
              href="#beyond-the-injection"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#7AC4AD] py-1 font-semibold"
            >
              Beyond the Injection (GLP-1 Co-Care)
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#C8D7D2] hover:text-white py-1"
            >
              Services & Pricing
            </a>
            <a
              href="#quiz"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#C8D7D2] hover:text-white py-1"
            >
              Root-Cause Symptom Audit
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#C8D7D2] hover:text-white py-1"
            >
              Patient Testimonials
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#C8D7D2] hover:text-white py-1"
            >
              Frequently Asked Questions
            </a>
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsBookingModalOpen(true);
                }}
                className="w-full py-3 rounded-xl bg-[#4E8271] text-white font-semibold text-center text-sm shadow-md"
              >
                Book Discovery Consultation
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ========================================================================= */}
      {/* 3. HERO SECTION (Editorial, Organic Luxury, High-Conversion)             */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden pt-12 sm:pt-20 pb-20 sm:pb-28 border-b border-[#243E37]/60">
        {/* Subtle radial ambient gradients */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#4E8271]/15 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-[#2E5448]/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 space-y-7">
              {/* Prestigious Accolade Pill */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#182F28] border border-[#3C6457] text-xs font-semibold text-[#8FD5C0] shadow-sm">
                <Award className="w-4 h-4 text-[#C9A96E]" />
                <span>Certified Functional Medicine Practitioner (Top 20% Quintile IFM)</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-white leading-[1.12] tracking-tight">
                  Tired of fatigue, stubborn weight &{" "}
                  <span className="italic font-light text-[#C5DFD6]">hormone chaos?</span>
                </h1>
                <p className="text-lg sm:text-xl text-[#B9CCC5] font-light leading-relaxed max-w-2xl">
                  Reclaim your vibrant metabolic health and deep hormonal balance. Angela Senese integrates{" "}
                  <strong className="text-white font-medium">functional medicine</strong>,{" "}
                  <strong className="text-white font-medium">nutrigenomics</strong>, and advanced diagnostics to resolve root causes—without extreme restriction.
                </p>
              </div>

              {/* Dual CTAs & Reassurance */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  href="#quiz"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#4E8271] hover:bg-[#3D695B] text-white font-semibold text-sm tracking-wide shadow-xl shadow-[#1C362F]/40 transition-all transform hover:-translate-y-0.5"
                >
                  <Activity className="w-4 h-4 text-[#A8E2D1]" />
                  <span>Take Free Symptom Health Audit</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>

                <button
                  onClick={() => {
                    setBookingService("Free 15-Minute Discovery Call");
                    setIsBookingModalOpen(true);
                  }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#182E27] hover:bg-[#203D34] border border-[#33564B] text-[#DCE8E3] hover:text-white font-medium text-sm transition-all"
                >
                  <Calendar className="w-4 h-4 text-[#7AC4AD]" />
                  <span>Book Free Discovery Call</span>
                </button>
              </div>

              {/* Accreditation Badges Row */}
              <div className="pt-6 border-t border-[#233D35] flex flex-wrap items-center gap-6 text-xs text-[#9BB1A8]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#7AC4AD]" />
                  <span>Clinics in Farnham & London</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#7AC4AD]" />
                  <span>Encrypted Worldwide Telehealth</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#7AC4AD]" />
                  <span>BANT & CNHC Registered</span>
                </div>
              </div>
            </div>

            {/* Right Visual Composition (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative background framing */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#3B6658]/30 via-[#27473D]/20 to-transparent rounded-[2.5rem] transform rotate-2 scale-105 -z-10" />

                {/* Primary Angela Portrait Card */}
                <div className="relative rounded-[2.2rem] overflow-hidden border border-[#385E52] bg-[#12231F] shadow-2xl">
                  <Image
                    src="/assets/nutrimente/angela-hero.jpg"
                    alt="Angela Senese - Registered Nutritional Therapist & Certified Functional Medicine Practitioner"
                    width={800}
                    height={1000}
                    className="w-full h-[480px] sm:h-[540px] object-cover object-top hover:scale-102 transition-transform duration-700"
                    priority
                    unoptimized
                  />

                  {/* Gradient Overlay for bottom text */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C1714] via-[#0C1714]/20 to-transparent" />

                  {/* Floating Bio Card on the image */}
                  <div className="absolute bottom-5 left-5 right-5 p-5 rounded-2xl bg-[#0E1A17]/85 backdrop-blur-md border border-[#2B4B41] space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-serif text-lg font-medium">Angela Senese</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#4E8271]/20 border border-[#4E8271]/40 text-[#7AC4AD] text-[11px] font-semibold">
                        DipCNM, mBANT, IFMCP
                      </span>
                    </div>
                    <p className="text-xs text-[#B2C6BE] leading-relaxed">
                      "I help clients bridge the gap between complex symptoms, cutting-edge functional labs, and everyday realistic nutrition."
                    </p>
                  </div>
                </div>

                {/* Floating Metric Pill: Top Quintile IFM */}
                <div className="absolute -top-4 -left-4 sm:-left-6 bg-[#162C26]/95 backdrop-blur-md border border-[#3C6457] rounded-2xl p-3.5 shadow-xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#4E8271]/20 flex items-center justify-center text-[#7AC4AD]">
                    <Award className="w-5 h-5 text-[#E6C687]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white tracking-wide">Top 20% Quintile</div>
                    <div className="text-[11px] text-[#A4BCB4]">IFM Certification Score</div>
                  </div>
                </div>

                {/* Floating Metric Pill: GLP-1 Innovation */}
                <div className="absolute -bottom-4 -right-2 sm:-right-4 bg-[#162C26]/95 backdrop-blur-md border border-[#3C6457] rounded-2xl p-3.5 shadow-xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#4E8271]/20 flex items-center justify-center text-[#7AC4AD]">
                    <Stethoscope className="w-5 h-5 text-[#7AC4AD]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white tracking-wide">Beyond the Injection™</div>
                    <div className="text-[11px] text-[#A4BCB4]">Pioneering GLP-1 Co-Care</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. CLINICAL ACCREDITATION LOGOS BANNER                                    */}
      {/* ========================================================================= */}
      <section className="py-8 bg-[#0B1513] border-b border-[#243E37]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <span className="text-xs uppercase tracking-widest text-[#7D948B] font-semibold text-center md:text-left">
              Regulated Clinical Accreditations & Partnerships:
            </span>
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-80 hover:opacity-100 transition-opacity">
              <div className="flex items-center gap-2 bg-[#12231E] px-4 py-2 rounded-xl border border-[#233F36]">
                <Image
                  src="/assets/nutrimente/badge-ifm.jpg"
                  alt="Institute for Functional Medicine"
                  width={110}
                  height={45}
                  className="h-7 w-auto object-contain filter brightness-90 hover:brightness-100"
                  unoptimized
                />
                <span className="text-[11px] font-medium text-[#C8D7D2]">IFM Certified</span>
              </div>

              <div className="flex items-center gap-2 bg-[#12231E] px-4 py-2 rounded-xl border border-[#233F36]">
                <Image
                  src="/assets/nutrimente/badge-bant.jpg"
                  alt="British Association for Nutrition and Lifestyle Medicine"
                  width={110}
                  height={45}
                  className="h-7 w-auto object-contain filter brightness-90 hover:brightness-100"
                  unoptimized
                />
                <span className="text-[11px] font-medium text-[#C8D7D2]">BANT Registered</span>
              </div>

              <div className="flex items-center gap-2 bg-[#12231E] px-4 py-2 rounded-xl border border-[#233F36]">
                <Image
                  src="/assets/nutrimente/badge-cnhc.jpeg"
                  alt="Complementary and Natural Healthcare Council"
                  width={110}
                  height={45}
                  className="h-7 w-auto object-contain filter brightness-90 hover:brightness-100"
                  unoptimized
                />
                <span className="text-[11px] font-medium text-[#C8D7D2]">CNHC Quality Mark</span>
              </div>

              <div className="flex items-center gap-2 bg-[#12231E] px-4 py-2 rounded-xl border border-[#233F36]">
                <Dna className="w-5 h-5 text-[#7AC4AD]" />
                <span className="text-[11px] font-medium text-[#C8D7D2]">Lifecode Gx® Trained</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. INTERACTIVE ROOT-CAUSE HEALTH AUDIT (Symptom Checker)                  */}
      {/* ========================================================================= */}
      <section id="quiz" className="py-20 sm:py-24 bg-[#0E1A17] border-b border-[#243E37]/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#183129] border border-[#3C6457] text-xs font-semibold text-[#8FD5C0] uppercase tracking-wider">
              <Activity className="w-3.5 h-3.5" />
              Interactive Health Audit
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-white font-normal">
              What is your body trying to tell you?
            </h2>
            <p className="text-sm sm:text-base text-[#B0C4BC]">
              Select the symptoms you are experiencing. Our functional logic maps them to the underlying biological axes and diagnostic pathways.
            </p>
          </div>

          <div className="bg-[#12241F] border border-[#2B4B40] rounded-3xl p-6 sm:p-10 shadow-xl space-y-8">
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
                        ? "bg-[#1E3B32] border-[#5B9683] text-white shadow-md shadow-[#142A24]"
                        : "bg-[#101F1B] border-[#223C34] text-[#A6BCB4] hover:border-[#385E52] hover:text-white"
                    }`}
                  >
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                        isSelected ? "bg-[#4E8271] text-white" : "bg-[#182C26] text-[#718981]"
                      }`}
                    >
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] tracking-wider uppercase font-semibold text-[#7AC4AD] block">
                        {item.category}
                      </span>
                      <span className="text-xs sm:text-sm font-medium leading-snug block">
                        {item.label}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Live Personalized Diagnostic Output */}
            <div className="bg-[#0B1513] border border-[#233F36] rounded-2xl p-6 space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#1E362E] pb-4">
                <div>
                  <div className="text-xs text-[#7AC4AD] uppercase tracking-wider font-semibold">
                    Clinical Evaluation
                  </div>
                  <div className="text-lg font-serif text-white font-medium">
                    {selectedSymptoms.length === 0
                      ? "Select at least 1 symptom above to generate your analysis"
                      : `Identified ${selectedSymptoms.length} Interconnected Physiological Markers`}
                  </div>
                </div>
                {selectedSymptoms.length > 0 && (
                  <span className="px-3 py-1 rounded-full bg-[#4E8271]/20 text-[#8FD5C0] text-xs font-medium border border-[#4E8271]/30">
                    Functional Medicine Pathway
                  </span>
                )}
              </div>

              {selectedSymptoms.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-1 text-xs">
                  <div className="space-y-1.5">
                    <span className="text-[#8BA59B] uppercase font-semibold tracking-wider text-[10px] block">
                      Primary Biological Driver:
                    </span>
                    <p className="text-[#DEEAE5] leading-relaxed">
                      {selectedSymptoms.includes("perimenopause") || selectedSymptoms.includes("brain-fog")
                        ? "Hypothalamic-Pituitary-Adrenal (HPA) axis imbalance coupled with fluctuating estrogen/progesterone clearance."
                        : selectedSymptoms.includes("stubborn-weight") || selectedSymptoms.includes("tired-afternoon")
                        ? "Insulin receptor resistance, blood glucose variability, and early cardiometabolic strain."
                        : "Microbiome dysbiosis, impaired gut mucosa integrity, and low hepatic bile production."}
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-[#8BA59B] uppercase font-semibold tracking-wider text-[10px] block">
                      Recommended Lab Investigation:
                    </span>
                    <p className="text-[#DEEAE5] leading-relaxed">
                      {selectedSymptoms.includes("perimenopause")
                        ? "DUTCH Complete (Dried Urine Hormone & Cortisol Awakening Curve) + Thyroid Panel."
                        : selectedSymptoms.includes("stubborn-weight")
                        ? "Comprehensive Cardiometabolic Panel (Fasting Insulin, HOMA-IR, HbA1c, ApoB)."
                        : "GI-MAP Stool PCR Diagnostic (Pathogens, Zonulin, Secretory IgA & Dysbiosis)."}
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-[#8BA59B] uppercase font-semibold tracking-wider text-[10px] block">
                      Recommended Next Step:
                    </span>
                    <p className="text-[#DEEAE5] leading-relaxed">
                      A personalized 1:1 discovery discussion with Angela to review your symptom timeline and map your functional roadmap.
                    </p>
                  </div>
                </div>
              ) : (
                <p className="text-xs text-[#7B948B] italic">
                  Click on any of the symptom tiles above to view the functional medicine breakdown.
                </p>
              )}

              {/* Call to action for the quiz */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-[#8DA69D]">
                  Every body is unique. Functional medicine connects the dots between your organs and lifestyle.
                </span>
                <button
                  onClick={() => {
                    setBookingService("Health Audit Follow-up Consultation");
                    setIsBookingModalOpen(true);
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#4E8271] hover:bg-[#3D695B] text-white text-xs font-semibold tracking-wide shadow-md transition-all"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Discuss Your Symptoms With Angela</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. MEET ANGELA SENESE (Editorial Bio & Credential Journey)               */}
      {/* ========================================================================= */}
      <section id="about" className="py-20 sm:py-28 bg-[#0B1513] border-b border-[#243E37]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Image Collage with Original Photo */}
            <div className="lg:col-span-5 relative space-y-4">
              <div className="relative rounded-3xl overflow-hidden border border-[#2B4B40] shadow-2xl bg-[#12241F]">
                <Image
                  src="/assets/nutrimente/angela-portrait.jpg"
                  alt="Angela Senese consulting clients in Farnham & London"
                  width={700}
                  height={850}
                  className="w-full h-[460px] sm:h-[500px] object-cover object-center"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1513] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="font-serif text-lg font-medium">In-Clinic & Virtual Practice</div>
                  <div className="text-xs text-[#9BB3AA]">Farnham, Surrey • Central London • International</div>
                </div>
              </div>

              {/* Smaller accent card */}
              <div className="p-4 rounded-2xl bg-[#12241F] border border-[#26443A] flex items-center gap-3">
                <Image
                  src="/assets/nutrimente/angela-round.jpg"
                  alt="Angela Senese"
                  width={56}
                  height={56}
                  className="rounded-full object-cover border border-[#4E8271]"
                  unoptimized
                />
                <div className="text-xs">
                  <div className="text-white font-semibold">Distinction Graduate</div>
                  <div className="text-[#8FA89F]">College of Naturopathic Medicine (CNM London)</div>
                </div>
              </div>
            </div>

            {/* Right Story & Medical Philosophy */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#183129] border border-[#3C6457] text-xs font-semibold text-[#8FD5C0] uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" />
                Meet Your Practitioner
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white font-normal leading-tight">
                "I connect the dots between your symptoms that conventional medicine often overlooks."
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-[#B6CCC3] leading-relaxed font-light">
                <p>
                  Hi, I’m <strong className="text-white font-medium">Angela Senese</strong>. As a Certified Functional Medicine Practitioner and Registered Nutritional Therapist, I founded Nutrimente to support individuals who feel <em className="italic text-[#E3EDE8]">"not themselves"</em> despite being told their blood tests are entirely "normal."
                </p>
                <p>
                  Many of the people I see are doing all the "right things"—eating clean, exercising, taking supplements—yet remain plagued by afternoon crashes, restless sleep, brain fog, sudden weight gain around the abdomen, or rising cholesterol.
                </p>
                <p>
                  Rather than handing you a generic calorie sheet, my practice applies <strong className="text-white font-medium">systems biology</strong>. We examine the intricate interplay between your gut microbiome, stress hormones (cortisol & DHEA), thyroid conversion, and cardiometabolic markers.
                </p>
              </div>

              {/* Clinical Milestones Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 pt-4">
                <div className="p-3.5 rounded-2xl bg-[#12241F] border border-[#233F36] space-y-1">
                  <div className="text-xl font-serif font-bold text-white">Top 20%</div>
                  <div className="text-[11px] text-[#8EA79F] leading-tight">IFM Final Certification Quintile</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#12241F] border border-[#233F36] space-y-1">
                  <div className="text-xl font-serif font-bold text-white">7+ Modules</div>
                  <div className="text-[11px] text-[#8EA79F] leading-tight">Cardio, GI, Hormones, Immunity</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#12241F] border border-[#233F36] space-y-1">
                  <div className="text-xl font-serif font-bold text-white">100+</div>
                  <div className="text-[11px] text-[#8EA79F] leading-tight">Women's Hormone Transformations</div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    setBookingService("Discovery Call with Angela");
                    setIsBookingModalOpen(true);
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#4E8271] hover:bg-[#3D695B] text-white text-xs sm:text-sm font-semibold tracking-wide shadow-lg transition-all"
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
        className="py-20 sm:py-28 bg-[#12221D] border-b border-[#2B4B40] relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1B382F] border border-[#3C6E5E] text-xs font-semibold text-[#8FD5C0]">
                <Stethoscope className="w-4 h-4 text-[#8FD5C0]" />
                <span>UK Clinical First • GLP-1 & GIP Functional Co-Care</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white font-normal leading-tight">
                Beyond the Injection™
              </h2>

              <p className="text-lg text-[#D1E2DB] font-light leading-relaxed">
                Using <strong className="text-white font-medium">Wegovy, Ozempic, Mounjaro</strong> or looking to transition off? Discover the evidence-based medical nutrition program to protect muscle, preserve metabolic rate, and eliminate rebound weight gain.
              </p>

              <div className="space-y-3.5 pt-2">
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#0E1A17]/70 border border-[#244238]">
                  <CheckCircle2 className="w-5 h-5 text-[#7AC4AD] shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-[#BFD4CC]">
                    <strong className="text-white font-medium">Muscle Mass & Bone Density Protection:</strong> Up to 40% of weight lost on GLP-1 agonists can be lean muscle unless strategically supported by clinical protein pacing and resistance nutrition.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#0E1A17]/70 border border-[#244238]">
                  <CheckCircle2 className="w-5 h-5 text-[#7AC4AD] shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-[#BFD4CC]">
                    <strong className="text-white font-medium">Gastrointestinal & Gallbladder Relief:</strong> Alleviate common nausea, delayed gastric emptying, acid reflux, constipation, and sulfur burps with targeted botanical & enzymatic protocols.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#0E1A17]/70 border border-[#244238]">
                  <CheckCircle2 className="w-5 h-5 text-[#7AC4AD] shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-[#BFD4CC]">
                    <strong className="text-white font-medium">Permanent Off-Ramp Strategy:</strong> Reset satiety cues, restore natural GLP-1 peptide signaling in the gut, and solidify lifelong metabolic autonomy without rebound weight spikes.
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-3">
                <button
                  onClick={() => {
                    setBookingService("Beyond the Injection Program Enquiry");
                    setIsBookingModalOpen(true);
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#4E8271] hover:bg-[#3D695B] text-white text-xs sm:text-sm font-semibold tracking-wide shadow-lg shadow-[#122821] transition-all"
                >
                  <Stethoscope className="w-4 h-4" />
                  <span>Join Beyond the Injection</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>

                <a
                  href="https://nutrimente.co.uk/beyond-the-injection-group-program/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#A8C2B8] hover:text-white underline decoration-dotted underline-offset-4"
                >
                  <span>Read full program syllabus</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Card / In-Clinic Snapshot (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-[#3C6E5E] bg-[#0E1A17] p-6 sm:p-8 space-y-6 shadow-2xl">
                <div className="flex items-center justify-between border-b border-[#234238] pb-4">
                  <div className="text-white font-serif text-xl">The 4 Clinical Pillars</div>
                  <span className="text-[11px] px-2.5 py-1 rounded-full bg-[#4E8271]/25 text-[#8FD5C0] font-semibold">
                    Evidence-Based
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#1B382F] border border-[#3C6E5E] text-[#8FD5C0] text-xs font-bold flex items-center justify-center shrink-0">
                      1
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Preserving Functional Tissue</h4>
                      <p className="text-xs text-[#A3BBB2]">Targeted amino acid thresholds & micronutrient bioavailability.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#1B382F] border border-[#3C6E5E] text-[#8FD5C0] text-xs font-bold flex items-center justify-center shrink-0">
                      2
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Gut Motility & Microbiome</h4>
                      <p className="text-xs text-[#A3BBB2]">Supporting natural peristalsis, microbial diversity, and bile acid flow.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#1B382F] border border-[#3C6E5E] text-[#8FD5C0] text-xs font-bold flex items-center justify-center shrink-0">
                      3
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Metabolic & Insulin Re-Sensitization</h4>
                      <p className="text-xs text-[#A3BBB2]">Continuous glucose balance and steady mitochondrial ATP generation.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#1B382F] border border-[#3C6E5E] text-[#8FD5C0] text-xs font-bold flex items-center justify-center shrink-0">
                      4
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Sustainable Post-Medication Off-Ramp</h4>
                      <p className="text-xs text-[#A3BBB2]">Behavioral conditioning, hunger cue synchronization, and zero rebound.</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#142822] border border-[#27493E] text-xs text-[#9BB1A8]">
                  <Info className="w-4 h-4 text-[#8FD5C0] inline-block mr-1.5 -mt-0.5" />
                  Designed for individuals working with any private prescriber or NHS clinic.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. THE NUTRIMENTE METHOD: 4-STAGE ROOT-CAUSE FRAMEWORK                   */}
      {/* ========================================================================= */}
      <section id="approach" className="py-20 sm:py-28 bg-[#0B1513] border-b border-[#243E37]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#183129] border border-[#3C6457] text-xs font-semibold text-[#8FD5C0] uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5" />
              The Clinical Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white font-normal">
              How We Heal: The 4-Stage Journey
            </h2>
            <p className="text-sm sm:text-base text-[#A8BEB6]">
              A structured, evidence-backed roadmap tailored specifically to your biochemistry, timeline, and daily lifestyle reality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="p-6 rounded-3xl bg-[#12241F] border border-[#233F36] space-y-4 relative group hover:border-[#4E8271] transition-colors">
              <div className="w-10 h-10 rounded-2xl bg-[#1B382F] border border-[#3C6E5E] text-[#8FD5C0] font-serif text-lg font-bold flex items-center justify-center">
                01
              </div>
              <h3 className="text-lg font-serif text-white font-medium">Deep-Dive Clinical Audit</h3>
              <p className="text-xs sm:text-sm text-[#A8C0B7] leading-relaxed">
                We review your complete health trajectory—from childhood antibiotics and stress triggers to hormonal transitions and existing blood panels.
              </p>
              <div className="pt-2 text-[11px] text-[#7AC4AD] font-semibold flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> 90-Min Comprehensive Session
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-3xl bg-[#12241F] border border-[#233F36] space-y-4 relative group hover:border-[#4E8271] transition-colors">
              <div className="w-10 h-10 rounded-2xl bg-[#1B382F] border border-[#3C6E5E] text-[#8FD5C0] font-serif text-lg font-bold flex items-center justify-center">
                02
              </div>
              <h3 className="text-lg font-serif text-white font-medium">Biomarker & Genetic Diagnostics</h3>
              <p className="text-xs sm:text-sm text-[#A8C0B7] leading-relaxed">
                When indicated, we deploy targeted testing: DUTCH hormone metabolomics, GI-MAP DNA microbiome stool test, or Lifecode Gx nutrigenomics.
              </p>
              <div className="pt-2 text-[11px] text-[#7AC4AD] font-semibold flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> Zero Guesswork Medicine
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-3xl bg-[#12241F] border border-[#233F36] space-y-4 relative group hover:border-[#4E8271] transition-colors">
              <div className="w-10 h-10 rounded-2xl bg-[#1B382F] border border-[#3C6E5E] text-[#8FD5C0] font-serif text-lg font-bold flex items-center justify-center">
                03
              </div>
              <h3 className="text-lg font-serif text-white font-medium">Precision Bio-Individual Protocol</h3>
              <p className="text-xs sm:text-sm text-[#A8C0B7] leading-relaxed">
                You receive a clear, phased nutrition and lifestyle plan, therapeutic-grade supplements, and practical recipes designed for busy family and work schedules.
              </p>
              <div className="pt-2 text-[11px] text-[#7AC4AD] font-semibold flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> Fits Real Life Habits
              </div>
            </div>

            {/* Step 4 */}
            <div className="p-6 rounded-3xl bg-[#12241F] border border-[#233F36] space-y-4 relative group hover:border-[#4E8271] transition-colors">
              <div className="w-10 h-10 rounded-2xl bg-[#1B382F] border border-[#3C6E5E] text-[#8FD5C0] font-serif text-lg font-bold flex items-center justify-center">
                04
              </div>
              <h3 className="text-lg font-serif text-white font-medium">Continuous Calibration & Autonomy</h3>
              <p className="text-xs sm:text-sm text-[#A8C0B7] leading-relaxed">
                Ongoing follow-up reviews, biomarker tracking, and portal messaging support so you understand your body’s signals and sustain lifelong vitality.
              </p>
              <div className="pt-2 text-[11px] text-[#7AC4AD] font-semibold flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> Long-Term Health Independence
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. CONVENTIONAL CARE VS. THE NUTRIMENTE METHOD (Comparison Matrix)        */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-24 bg-[#0E1A17] border-b border-[#243E37]/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif text-white font-normal">
              Why Conventional Advice Hasn't Worked
            </h2>
            <p className="text-sm sm:text-base text-[#A8BEB6]">
              A side-by-side comparison of standard symptom management vs. root-cause functional medicine.
            </p>
          </div>

          <div className="rounded-3xl border border-[#233F36] bg-[#12241F] overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#233F36]">
              {/* Conventional Care Column */}
              <div className="p-6 sm:p-8 space-y-5 bg-[#0D1815]/70">
                <div className="flex items-center gap-2 text-rose-400 font-semibold text-xs uppercase tracking-wider">
                  <X className="w-4 h-4" />
                  <span>Standard 10-Min Consultations</span>
                </div>
                <div className="space-y-4 text-xs sm:text-sm text-[#9BB1A8]">
                  <div className="flex items-start gap-2.5">
                    <span className="text-rose-400 font-bold shrink-0">✕</span>
                    <span>Told your blood tests are "fine" while feeling chronically exhausted and unwell.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-rose-400 font-bold shrink-0">✕</span>
                    <span>Symptoms treated in isolation (acid reflux pill, sleep aid, anti-depressant, statin).</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-rose-400 font-bold shrink-0">✕</span>
                    <span>Generic advice like "eat less, move more" that fails to address hormone conversion.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-rose-400 font-bold shrink-0">✕</span>
                    <span>Zero investigation into gut microbiome dysbiosis, nutrient absorption, or genetic methylation.</span>
                  </div>
                </div>
              </div>

              {/* Nutrimente Method Column */}
              <div className="p-6 sm:p-8 space-y-5 bg-[#142822]">
                <div className="flex items-center gap-2 text-[#7AC4AD] font-semibold text-xs uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>The Nutrimente Functional Method</span>
                </div>
                <div className="space-y-4 text-xs sm:text-sm text-[#D7E8E1]">
                  <div className="flex items-start gap-2.5">
                    <span className="text-[#7AC4AD] font-bold shrink-0">✓</span>
                    <span>Comprehensive 90-minute initial investigation examining your complete timeline and history.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-[#7AC4AD] font-bold shrink-0">✓</span>
                    <span>Connects the dots between hormones, gut health, blood sugar, and nervous system signaling.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-[#7AC4AD] font-bold shrink-0">✓</span>
                    <span>Prescription of advanced functional labs (DUTCH hormone panel, GI-MAP, Lifecode Gx).</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-[#7AC4AD] font-bold shrink-0">✓</span>
                    <span>Sustainable dietary and lifestyle strategies built around your real preferences, family, and job.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. CLINICAL SERVICES & PROGRAM TIERS                                    */}
      {/* ========================================================================= */}
      <section id="services" className="py-20 sm:py-28 bg-[#0B1513] border-b border-[#243E37]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#183129] border border-[#3C6457] text-xs font-semibold text-[#8FD5C0] uppercase tracking-wider">
              <Sliders className="w-3.5 h-3.5" />
              Ways to Work Together
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white font-normal">
              Tailored Clinical Pathways
            </h2>
            <p className="text-sm sm:text-base text-[#A8BEB6]">
              Whether you need end-to-end 1-on-1 functional medicine care, GLP-1 co-care, or targeted genetic testing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((svc) => (
              <div
                key={svc.id}
                className="rounded-3xl border border-[#244238] bg-[#12241F] p-7 sm:p-8 flex flex-col justify-between space-y-6 hover:border-[#4E8271] transition-all hover:shadow-2xl"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-[#1B382F] text-[#8FD5C0] text-[11px] font-semibold border border-[#3C6E5E]">
                      {svc.badge}
                    </span>
                    <span className="text-xs text-[#8DA69D]">{svc.format}</span>
                  </div>

                  <div>
                    <h3 className="text-xl font-serif text-white font-medium">{svc.title}</h3>
                    <p className="text-xs text-[#7AC4AD] font-medium pt-1">{svc.tagline}</p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#A8BEB6] leading-relaxed font-light">
                    {svc.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-[#1C362E]">
                    <span className="text-[11px] uppercase font-semibold text-[#7D968D] tracking-wider block">
                      Program Inclusions:
                    </span>
                    {svc.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#C5D8D1]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#7AC4AD] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-[#1C362E]">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs text-[#7D968D]">Pricing</span>
                    <span className="text-xl font-serif font-bold text-white">{svc.price}</span>
                  </div>

                  <button
                    onClick={() => {
                      setBookingService(svc.title);
                      setIsBookingModalOpen(true);
                    }}
                    className="w-full py-3 rounded-full bg-[#4E8271] hover:bg-[#3D695B] text-white text-xs sm:text-sm font-semibold tracking-wide shadow-md transition-all text-center"
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
      {/* 11. VERIFIED PATIENT STORIES & BREAKTHROUGHS                             */}
      {/* ========================================================================= */}
      <section id="testimonials" className="py-20 sm:py-28 bg-[#0E1A17] border-b border-[#243E37]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#183129] border border-[#3C6457] text-xs font-semibold text-[#8FD5C0] uppercase tracking-wider">
              <Star className="w-3.5 h-3.5 text-[#D4AF37]" />
              Verified Patient Transformations
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white font-normal">
              Words From Those Who Found Answers
            </h2>
            <p className="text-sm sm:text-base text-[#A8BEB6]">
              Real stories from women and men who regained their vitality, reversed chronic symptoms, and found peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-[#233F36] bg-[#12241F] p-7 sm:p-8 flex flex-col justify-between space-y-6 relative"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-[#D4AF37]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-[#CBDCD5] leading-relaxed italic font-light">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#1C362E] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-serif font-medium">{t.author}</span>
                    <span className="text-[11px] text-[#7A938A]">{t.location}</span>
                  </div>
                  <div className="text-[11px] font-semibold text-[#7AC4AD]">{t.result}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Clinical Case Study Pill Callout */}
          <div className="mt-12 p-6 rounded-3xl bg-[#142822] border border-[#294B3F] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3.5 text-center sm:text-left">
              <div className="w-10 h-10 rounded-full bg-[#4E8271]/20 flex items-center justify-center text-[#7AC4AD] shrink-0">
                <Heart className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <div className="text-sm font-semibold text-white">4-Week Blood Pressure Breakthrough</div>
                <div className="text-xs text-[#9BB1A8]">
                  "Stabilised blood pressure without added pharmaceuticals, simply by repairing insulin sensitivity and cellular hydration."
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                setBookingService("Discovery Call from Patient Stories");
                setIsBookingModalOpen(true);
              }}
              className="px-5 py-2.5 rounded-full bg-[#1C3830] hover:bg-[#254A3F] border border-[#3C6E5E] text-white text-xs font-semibold whitespace-nowrap transition-colors"
            >
              Discuss Your Case
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 12. FREE VALUE VAULT: DOWNLOADABLE GUIDES                                 */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-24 bg-[#0B1513] border-b border-[#243E37]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-[#2B4B40] bg-gradient-to-r from-[#12241F] to-[#162D26] p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="px-3 py-1 rounded-full bg-[#1B382F] text-[#8FD5C0] text-xs font-semibold border border-[#3C6E5E]">
                  Free Evidence-Based Guide
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-white font-normal">
                  5 Pillars to a Happy Perimenopause
                </h3>
                <p className="text-xs sm:text-sm text-[#A8BEB6] leading-relaxed max-w-2xl font-light">
                  Download Angela's essential blueprint to navigate hormonal fluctuations, protect bone density, balance estrogen clearance, and regain restorative sleep without overwhelm.
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-[#8FA89F]">
                  <span>✓ Instant PDF Download</span>
                  <span>✓ Evidence-based diet checklists</span>
                  <span>✓ 100% Free educational gift</span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
                <a
                  href="https://dashboard.mailerlite.com/forms/757243/109565395542738938/share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-full bg-[#4E8271] hover:bg-[#3D695B] text-white text-xs sm:text-sm font-semibold text-center tracking-wide shadow-lg transition-all"
                >
                  Download Free Guide (PDF)
                </a>
                <a
                  href="https://nutrimente.co.uk/easy-healthy-on-the-go-recipes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-6 rounded-full bg-[#162C25] hover:bg-[#1E3B32] border border-[#2B4B40] text-xs text-[#C8DAD2] text-center font-medium transition-colors"
                >
                  Browse Free Recipe Library
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 13. FREQUENTLY ASKED QUESTIONS (Accordion)                               */}
      {/* ========================================================================= */}
      <section id="faq" className="py-20 sm:py-28 bg-[#0E1A17] border-b border-[#243E37]/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-14">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#183129] border border-[#3C6457] text-xs font-semibold text-[#8FD5C0] uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5" />
              Clear Answers
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-white font-normal">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-[#A8BEB6]">
              Everything you need to know about working with Angela and the Nutrimente clinic.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => {
              const isOpen = activeFaq === i;
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-[#233F36] bg-[#12241F] overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : i)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-serif text-base sm:text-lg text-white font-medium hover:text-[#7AC4AD] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span className="p-1 rounded-full bg-[#1B382F] text-[#7AC4AD] shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-[#A8BEB6] leading-relaxed font-light border-t border-[#1C362E] pt-4">
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
      {/* 14. FINAL CALL TO ACTION (High-Trust Conversion Strip)                    */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-[#12241F] to-[#0A1310] relative text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="w-16 h-16 rounded-full bg-[#1B382F] border border-[#3C6E5E] flex items-center justify-center mx-auto text-[#7AC4AD] shadow-lg">
            <Heart className="w-8 h-8" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white font-normal leading-tight">
            Ready to feel vibrant, clear, and in control again?
          </h2>

          <p className="text-base sm:text-lg text-[#B9CCC4] font-light max-w-2xl mx-auto leading-relaxed">
            Take the first step toward lasting health. Book a complimentary 15-minute discovery call to discuss your health history with Angela.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => {
                setBookingService("Complimentary 15-Min Discovery Call");
                setIsBookingModalOpen(true);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#4E8271] hover:bg-[#3D695B] text-white font-semibold text-sm tracking-wide shadow-xl shadow-[#122821] transition-all transform hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Free Discovery Call</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>

            <a
              href="https://my.practicebetter.io/#/603414372a9c24070849c480/bookings?s=61f11b5539803300c877f4fc"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-[#162C25] hover:bg-[#1E3B32] border border-[#2B4B40] text-xs sm:text-sm text-[#D1E2DB] font-medium transition-colors"
            >
              <span>Direct Practice Better Portal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="pt-6 text-xs text-[#7B948B] flex flex-wrap items-center justify-center gap-6">
            <span>• No obligations</span>
            <span>• 100% confidential</span>
            <span>• Direct clinician conversation</span>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 15. FOOTER (Credentials, Farnham Clinic, Regulatory Disclaimers)         */}
      {/* ========================================================================= */}
      <footer className="bg-[#080E0C] border-t border-[#1C362E] py-16 text-xs text-[#809990]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            {/* Col 1: Brand & Bio */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/assets/nutrimente/nutrimente-logo.png"
                  alt="Nutrimente"
                  width={34}
                  height={34}
                  className="object-contain"
                  unoptimized
                />
                <span className="text-lg font-serif text-white font-medium">Nutrimente</span>
              </div>
              <p className="text-xs text-[#9BB1A8] leading-relaxed font-light">
                Nutrimente is an independent functional medicine and clinical nutrition clinic founded by Angela Senese. Dedicated to unraveling root-cause illness in women’s hormonal health, cardiometabolic resilience, and GLP-1 therapy.
              </p>
              <div className="text-[11px] text-[#718980]">
                Registered with BANT (British Association for Nutrition and Lifestyle Medicine) and CNHC (Complementary & Natural Healthcare Council).
              </div>
            </div>

            {/* Col 2: Clinic Locations */}
            <div className="md:col-span-3 space-y-3">
              <span className="text-white font-serif font-medium text-sm block">Clinic Practice</span>
              <div className="space-y-2 text-xs text-[#9BB1A8]">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#7AC4AD] shrink-0 mt-0.5" />
                  <span>Farnham, Surrey Clinic & Consultations</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#7AC4AD] shrink-0 mt-0.5" />
                  <span>Central London Appointments</span>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-[#7AC4AD] shrink-0 mt-0.5" />
                  <span>Online Telehealth Worldwide</span>
                </div>
              </div>
            </div>

            {/* Col 3: Programs & Links */}
            <div className="md:col-span-2 space-y-3">
              <span className="text-white font-serif font-medium text-sm block">Specialties</span>
              <ul className="space-y-1.5 text-xs text-[#9BB1A8]">
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
                <li>
                  <a href="#services" className="hover:text-white transition-colors">
                    Corporate Wellness
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: Redesign Credit */}
            <div className="md:col-span-2 space-y-3">
              <span className="text-white font-serif font-medium text-sm block">Digital Experience</span>
              <p className="text-[11px] text-[#809990] leading-relaxed">
                Redesigned as an Awwwards-tier concept for Angela Senese by{" "}
                <strong className="text-white font-medium">Miskat Hossain</strong>.
              </p>
              <div className="pt-1">
                <Link
                  href="/"
                  className="inline-flex items-center gap-1 text-[#7AC4AD] hover:text-white font-semibold text-xs transition-colors"
                >
                  <span>miskathossain.net</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Disclaimers */}
          <div className="pt-8 border-t border-[#162B25] flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#698077]">
            <p>© {new Date().getFullYear()} Nutrimente. All rights reserved. Redesign Concept by Miskat Hossain.</p>
            <p className="max-w-xl text-center md:text-right">
              Disclaimer: Nutritional therapy and functional medicine are not substitutes for medical advice. Please consult your physician before starting any diet or supplement changes.
            </p>
          </div>
        </div>
      </footer>

      {/* ========================================================================= */}
      {/* 16. MODAL: BOOKING / DISCOVERY CALL INTAKE                                */}
      {/* ========================================================================= */}
      {isBookingModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg rounded-3xl bg-[#12241F] border border-[#2E5246] p-6 sm:p-8 shadow-2xl text-left space-y-6">
            <button
              onClick={resetBookingModal}
              className="absolute top-5 right-5 p-2 rounded-full text-[#8EA79F] hover:text-white hover:bg-[#1E3A31] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {bookingStep === "form" ? (
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div className="space-y-1">
                  <span className="text-xs uppercase font-semibold text-[#7AC4AD] tracking-wider">
                    Nutrimente Clinic Booking
                  </span>
                  <h3 className="text-2xl font-serif text-white font-normal">
                    Schedule Your Discovery Call
                  </h3>
                  <p className="text-xs text-[#9BB1A8]">
                    15 minutes with Angela Senese to discuss your symptoms and recommended clinical path.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <div>
                    <label className="block text-xs font-semibold text-[#CBDCD5] mb-1">Your Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={bookingFormData.name}
                      onChange={(e) => setBookingFormData({ ...bookingFormData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B1513] border border-[#233F36] text-white text-xs sm:text-sm focus:outline-none focus:border-[#4E8271]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-[#CBDCD5] mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="sarah@example.com"
                        value={bookingFormData.email}
                        onChange={(e) => setBookingFormData({ ...bookingFormData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B1513] border border-[#233F36] text-white text-xs sm:text-sm focus:outline-none focus:border-[#4E8271]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#CBDCD5] mb-1">Phone Number</label>
                      <input
                        type="tel"
                        required
                        placeholder="+44 7123 456789"
                        value={bookingFormData.phone}
                        onChange={(e) => setBookingFormData({ ...bookingFormData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B1513] border border-[#233F36] text-white text-xs sm:text-sm focus:outline-none focus:border-[#4E8271]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#CBDCD5] mb-1">Primary Area of Concern</label>
                    <select
                      value={bookingFormData.primaryGoal}
                      onChange={(e) => setBookingFormData({ ...bookingFormData, primaryGoal: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B1513] border border-[#233F36] text-white text-xs sm:text-sm focus:outline-none focus:border-[#4E8271]"
                    >
                      <option value="Hormonal & Perimenopause Balance">Hormonal & Perimenopause Balance</option>
                      <option value="Beyond the Injection (GLP-1 Co-Care)">Beyond the Injection (GLP-1 Co-Care)</option>
                      <option value="Chronic Fatigue & Sleep Imbalance">Chronic Fatigue & Sleep Imbalance</option>
                      <option value="Metabolic & Stubborn Weight">Metabolic & Stubborn Weight</option>
                      <option value="Gut Health & Microbiome PCR Testing">Gut Health & Microbiome PCR Testing</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#CBDCD5] mb-1">Consultation Preference</label>
                    <select
                      value={bookingFormData.preferredLocation}
                      onChange={(e) => setBookingFormData({ ...bookingFormData, preferredLocation: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B1513] border border-[#233F36] text-white text-xs sm:text-sm focus:outline-none focus:border-[#4E8271]"
                    >
                      <option value="Online Video Consultation">Online Video Consultation (Worldwide)</option>
                      <option value="Farnham, Surrey Clinic">In-Person at Farnham, Surrey Clinic</option>
                      <option value="London Clinic">In-Person at London Clinic</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#CBDCD5] mb-1">Brief note on your symptoms (optional)</label>
                    <textarea
                      rows={3}
                      placeholder="Share what has been happening and what you hope to achieve..."
                      value={bookingFormData.message}
                      onChange={(e) => setBookingFormData({ ...bookingFormData, message: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-[#0B1513] border border-[#233F36] text-white text-xs sm:text-sm focus:outline-none focus:border-[#4E8271]"
                    />
                  </div>
                </div>

                <div className="pt-2 space-y-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-[#4E8271] hover:bg-[#3D695B] text-white font-semibold text-xs sm:text-sm tracking-wide shadow-lg transition-all"
                  >
                    Submit Booking Request
                  </button>

                  <div className="text-center">
                    <a
                      href="https://my.practicebetter.io/#/603414372a9c24070849c480/bookings?s=61f11b5539803300c877f4fc"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] text-[#7AC4AD] hover:underline"
                    >
                      Prefer to book directly on Practice Better calendar? Click here →
                    </a>
                  </div>
                </div>
              </form>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#1B382F] border border-[#3C6E5E] flex items-center justify-center text-[#7AC4AD] mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif text-white">Consultation Request Received!</h3>
                <p className="text-xs sm:text-sm text-[#A8BEB6] max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{bookingFormData.name}</strong>. Angela's clinic coordinator will email you within 24 hours with calendar availability for your free discovery call.
                </p>
                <div className="pt-3">
                  <button
                    onClick={resetBookingModal}
                    className="px-6 py-2.5 rounded-full bg-[#162C25] hover:bg-[#1E3B32] border border-[#2B4B40] text-xs font-semibold text-white"
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
      {/* 17. DRAWER: WORDPRESS BLOCK ARCHITECTURE BLUEPRINT                        */}
      {/* ========================================================================= */}
      {wpDrawerOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl h-full bg-[#12221D] border-l border-[#2B4B40] p-6 sm:p-8 overflow-y-auto space-y-6 text-left shadow-2xl">
            <button
              onClick={() => setWpDrawerOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full text-[#8EA79F] hover:text-white hover:bg-[#1E3A31] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <span className="text-xs uppercase font-semibold text-[#7AC4AD] tracking-wider">
                WordPress Implementation Guide
              </span>
              <h3 className="text-2xl font-serif text-white font-normal">
                How to Rebuild this in WordPress
              </h3>
              <p className="text-xs text-[#9BB1A8]">
                Nutrimente's current site runs on Beaver Builder/WordPress. Here is how this redesigned concept easily maps to modern WordPress (Gutenberg blocks, Elementor, or Kadence):
              </p>
            </div>

            <div className="space-y-4 text-xs text-[#CBDCD5]">
              <div className="p-4 rounded-2xl bg-[#0E1A17] border border-[#223E34] space-y-2">
                <span className="font-semibold text-white text-sm flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-[#7AC4AD]" />
                  1. Gutenberg / Full Site Editing (FSE) Block Structure
                </span>
                <p className="text-[#96ADA5] leading-relaxed">
                  Every section is built with standard semantic containers:
                  <br />• <strong>Hero:</strong> Group Block (Full Width) with 2-Column Grid (60/40) + Cover block with rounded radii.
                  <br />• <strong>Symptom Audit:</strong> Form Block or ACF / JetEngine interactive checkbox group with instant filter output.
                  <br />• <strong>Beyond the Injection:</strong> Custom Post Type or Pattern Block with 4-item flex cards.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#0E1A17] border border-[#223E34] space-y-2">
                <span className="font-semibold text-white text-sm flex items-center gap-1.5">
                  <Sliders className="w-4 h-4 text-[#7AC4AD]" />
                  2. Design System Tokens (theme.json / Global Styles)
                </span>
                <p className="text-[#96ADA5] leading-relaxed">
                  • <strong>Primary Brand Surface:</strong> #0E1A17 (Deep Forest Slate)
                  <br />• <strong>Accent Emerald:</strong> #4E8271 (Clinical Botanical)
                  <br />• <strong>Highlight Mint:</strong> #7AC4AD / #8FD5C0
                  <br />• <strong>Typography:</strong> Cormorant Garamond / Playfair Display (Headings) + Plus Jakarta Sans / Inter (Body).
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#0E1A17] border border-[#223E34] space-y-2">
                <span className="font-semibold text-white text-sm flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-[#7AC4AD]" />
                  3. Practice Better & MailerLite Integration
                </span>
                <p className="text-[#96ADA5] leading-relaxed">
                  Keep her existing Practice Better widget embed shortcode or direct URL for scheduling, and MailerLite forms for the "5 Pillars to Perimenopause" free PDF download.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#0E1A17] border border-[#223E34] space-y-2">
                <span className="font-semibold text-white text-sm flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#7AC4AD]" />
                  4. Elementor / Spectra Compatibility
                </span>
                <p className="text-[#96ADA5] leading-relaxed">
                  If Angela prefers Elementor Pro, all these flexbox containers, pill badges, testimonial carousels, and accordion FAQs are available as native Elementor Pro widgets without custom plugin bloat.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setWpDrawerOpen(false)}
                className="w-full py-3 rounded-xl bg-[#4E8271] text-white font-semibold text-xs text-center"
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
