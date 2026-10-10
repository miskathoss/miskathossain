"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  TrendingUp,
  Award,
  Calendar,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  X,
  Clock,
  Star,
  Users,
  MessageSquare,
  ShieldCheck,
  Briefcase,
  Layers,
  Check,
  HelpCircle,
  ExternalLink,
  Linkedin,
  Mail,
  Zap,
  DollarSign,
  Compass,
  FileText,
  Target,
  Menu,
  PhoneCall,
  Laptop,
  Quote,
} from "lucide-react";

export default function VivianaClient() {
  // Mobile drawer
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Enrollment / Discovery Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"enroll" | "call">("enroll");
  const [modalStep, setModalStep] = useState<"form" | "success">("form");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    linkedinUrl: "",
    currentRole: "",
    coachingGoal: "First $2,000 Milestone",
    message: "",
  });

  // Active FAQ index
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // Active Curriculum Module Tab
  const [activeModule, setActiveModule] = useState<number>(0);

  // Interactive 9-to-5 Income Simulator
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(5);
  const [packagePrice, setPackagePrice] = useState<number>(1000);
  const [clientGoal, setClientGoal] = useState<number>(2);

  const calculateMonthly = () => clientGoal * packagePrice;
  const calculateAnnual = () => calculateMonthly() * 12;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setModalStep("success");
  };

  const resetModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setModalStep("form");
      setFormData({
        name: "",
        email: "",
        linkedinUrl: "",
        currentRole: "",
        coachingGoal: "First $2,000 Milestone",
        message: "",
      });
    }, 300);
  };

  const curriculumModules = [
    {
      id: 1,
      title: "Module 1: High-Authority LinkedIn Profile Optimization",
      subtitle: "Turn Your Profile Into a 24/7 Client Magnet",
      desc: "Stop treating LinkedIn like an online resume. We rebuild your headline, banner, about section, and featured assets to speak directly to high-paying clients, positioning you as an indisputable authority in your niche.",
      highlights: [
        "The Know-Like-Trust Profile Blueprint for corporate professionals",
        "Crafting a magnetic headline that compels dream clients to connect",
        "Featured Section architecture that converts visitors into warm leads",
        "Banner and social proof asset placement framework",
      ],
      timeCommitment: "Week 1-2 • Actionable Templates Included",
    },
    {
      id: 2,
      title: "Module 2: The Social Selling Content Engine",
      subtitle: "Authentic Storytelling & Thought Leadership That Sells",
      desc: "Learn how to write posts that educate, inspire, and attract clients in just 15 minutes a day. No endless scrolling, no generic engagement pods, and no guessing what to post.",
      highlights: [
        "The 4-Part Organic Content Matrix (Story, Value, Social Proof, Conversion)",
        "Overcoming writer's block with our plug-and-play caption formulas",
        "Algorithm-aligned posting rhythms designed for busy 9-to-5 schedules",
        "How to seamlessly guide readers from post comments into private conversations",
      ],
      timeCommitment: "Week 3-4 • 50+ Done-for-You Content Prompts",
    },
    {
      id: 3,
      title: "Module 3: Precision Lead Generation & Organic Outreach",
      subtitle: "Zero Paid Ads • Zero Cold Spamming",
      desc: "Master the art of LinkedIn precision search filters. Connect with decision-makers, executives, and ideal clients who already have the budget and desire for your coaching services.",
      highlights: [
        "Advanced Boolean & title search filters to find dream clients in seconds",
        "Non-pushy connection request templates with 60%+ acceptance rates",
        "Nurturing warm relationships without feeling salesy or uncomfortable",
        "The Natural Transition Script: Moving from mutual connection to strategy call",
      ],
      timeCommitment: "Week 5-6 • Plug-and-Play Conversation Scripts",
    },
    {
      id: 4,
      title: "Module 4: Your First $2,000 Cash Injection Framework",
      subtitle: "Packaging, Pricing & Confident Client Enrollment",
      desc: "Package your knowledge into a compelling $1K-$2K offer. Learn how to conduct discovery calls with zero pressure, overcome objections with empathy, and sign your first paid clients.",
      highlights: [
        "Packaging your professional expertise into an irresistible coaching offer",
        "The consultative discovery conversation script (natural & collaborative)",
        "Overcoming pricing objections with unshakeable confidence",
        "Seamless client onboarding workflows and payment setups",
      ],
      timeCommitment: "Week 7-8 • Full Offer & Pricing Calculator",
    },
  ];

  const faqs = [
    {
      q: "Is this program tailored to my specific coaching or consulting niche?",
      a: "Yes, absolutely! Whether you specialize in executive leadership, career transitions, health & wellness, business strategy, or tech consulting, the Organic Social Selling framework is tailored to the exact buyer persona and nuances of your target industry.",
    },
    {
      q: "How is the program delivered?",
      a: "You get immediate lifetime access to over 50 structured video lessons and templates inside the private student portal, plus 6 months of 1-on-1 monthly 30-minute check-ins with Viviana, live monthly Q&A sessions, quarterly goal-setting workshops, and direct ongoing support via WhatsApp and Email.",
    },
    {
      q: "How many hours per week do I need to invest while working my full-time 9-to-5?",
      a: "The LinkedIn Profit Project™ was specifically built for busy 9-to-5 professionals. You only need 3 to 5 hours per week (around 15-20 minutes a day) to implement the daily engagement workflow, publish strategic content, and respond to incoming conversations.",
    },
    {
      q: "What is the satisfaction guarantee?",
      a: "We stand 100% behind the system. If you faithfully follow and implement the step-by-step framework within the program and do not see the envisioned client momentum, Viviana will personally gift you THREE 90-minute complimentary 1-on-1 intensive coaching sessions to troubleshoot and get you across the finish line.",
    },
    {
      q: "Why LinkedIn instead of Instagram, TikTok, or paid Facebook ads?",
      a: "LinkedIn is the only professional network where users are actively looking to invest in their careers, leadership, and businesses. You don't need dancing videos or unpredictable ad spend—just authentic connection and precision positioning with people who have high purchasing power.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFF8F0] text-[#2D1616] font-sans selection:bg-[#542221] selection:text-[#FFF8F0]">
      {/* ─────────────────────────────────────────────────────────────
          TOP REDESIGN NOTICE BAR (Miskat Hossain Agency Branding)
      ────────────────────────────────────────────────────────────── */}
      <div className="bg-[#542221] text-[#FAF4EB] text-xs sm:text-sm py-2.5 px-4 sticky top-0 z-50 border-b border-[#3E1817]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#C87A65]/30 text-[#FFF0E7] border border-[#C87A65]/40">
              <Sparkles className="w-3 h-3 text-[#FBEAE2]" />
              LIVE REDESIGN CONCEPT
            </span>
            <span className="text-[#F5E8DD]">
              Crafted for <strong className="text-white">Viviana Munoz</strong> by{" "}
              <Link
                href="/"
                className="text-[#FFD8CB] hover:text-white underline font-semibold transition"
              >
                Miskat Hossain
              </Link>
            </span>
          </div>
          <div className="flex items-center gap-4 text-[12px]">
            <a
              href="https://mycoachviviana.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E7D2C4] hover:text-white flex items-center gap-1 transition"
            >
              <span>View Original WordPress Site</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-[#844A48] hidden sm:inline">•</span>
            <Link
              href="/#contact"
              className="bg-[#C87A65] hover:bg-[#B86854] text-white px-3 py-1 rounded-md font-semibold transition flex items-center gap-1 shadow-sm"
            >
              <span>Book Strategy Call with Miskat</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          MAIN NAVIGATION HEADER
      ────────────────────────────────────────────────────────────── */}
      <header className="sticky top-[41px] z-40 bg-[#FFF8F0]/95 backdrop-blur-md border-b border-[#EFE4D6] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <Link href="#hero" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-xl overflow-hidden shadow-xs border border-[#E4D5C5] bg-white p-0.5">
              <Image
                src="/assets/viviana/The-Writing-Master-Logo.jpg"
                alt="Viviana Munoz Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold tracking-tight text-lg text-[#542221] group-hover:text-[#3E1817] transition">
                VIVIANA MUNOZ
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#C87A65]">
                The LinkedIn Profit Project™
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#6E5552]">
            <a href="#about-program" className="hover:text-[#542221] transition">
              The Method
            </a>
            <a href="#brand-story" className="hover:text-[#542221] transition">
              My Story
            </a>
            <a href="#calculator" className="hover:text-[#542221] transition">
              Income Calculator
            </a>
            <a href="#curriculum" className="hover:text-[#542221] transition">
              Curriculum
            </a>
            <a href="#meet-viviana" className="hover:text-[#542221] transition">
              Meet Viviana
            </a>
            <a href="#testimonials" className="hover:text-[#542221] transition">
              Testimonials
            </a>
            <a href="#investment" className="hover:text-[#542221] transition">
              Investment
            </a>
            <a href="#faq" className="hover:text-[#542221] transition">
              FAQ
            </a>
          </nav>

          {/* CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setModalType("enroll");
                setIsModalOpen(true);
              }}
              className="hidden sm:inline-flex items-center gap-2 bg-[#542221] hover:bg-[#3E1817] text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-md hover:shadow-[#542221]/20 transition-all duration-300"
            >
              <span>Enroll Now — $2,000</span>
              <ArrowUpRight className="w-4 h-4 text-[#FFD8CB]" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 md:hidden text-[#542221] hover:text-[#3E1817] focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FFF8F0] border-b border-[#EFE4D6] px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
            <nav className="flex flex-col gap-3.5 text-base font-medium text-[#6E5552]">
              <a
                href="#about-program"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#542221] py-1"
              >
                The Method
              </a>
              <a
                href="#brand-story"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#542221] py-1"
              >
                My Story
              </a>
              <a
                href="#calculator"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#542221] py-1"
              >
                Income Calculator
              </a>
              <a
                href="#curriculum"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#542221] py-1"
              >
                Curriculum
              </a>
              <a
                href="#meet-viviana"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#542221] py-1"
              >
                Meet Viviana
              </a>
              <a
                href="#testimonials"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#542221] py-1"
              >
                Testimonials
              </a>
              <a
                href="#investment"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#542221] py-1"
              >
                Investment & ROI
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#542221] py-1"
              >
                FAQ
              </a>
            </nav>
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setModalType("enroll");
                  setIsModalOpen(true);
                }}
                className="w-full text-center bg-[#542221] hover:bg-[#3E1817] text-white py-3 rounded-xl font-semibold shadow-md transition"
              >
                Enroll in Lifetime Access — $2,000
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ─────────────────────────────────────────────────────────────
          HERO SECTION (Sophisticated Chocolate & Ivory Editorial)
      ────────────────────────────────────────────────────────────── */}
      <section id="hero" className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden">
        {/* Soft Warm Background Glows */}
        <div className="absolute top-0 right-1/4 -z-10 w-96 h-96 bg-[#FBEAE2] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 -z-10 w-80 h-80 bg-[#FFF0E7] rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col items-start space-y-6">
              
              {/* Category Pill in Brand Burgundy & Terracotta */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF0E7] border border-[#EAD0C7] text-[#542221] text-xs sm:text-sm font-bold shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#C87A65]" />
                <span className="tracking-wide">THE LINKEDIN PROFIT PROJECT™ • YOUR FIRST $2K FRAMEWORK</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#2D1616] tracking-tight leading-[1.12]">
                Build a Profitable Coaching Business on LinkedIn —{" "}
                <span className="text-[#542221] italic font-serif">
                  Without Quitting Your 9–5.
                </span>
              </h1>

              {/* Sub-headline */}
              <p className="text-lg sm:text-xl text-[#6E5552] font-normal leading-relaxed max-w-2xl">
                You don’t need more hours in your day. You need a proven, sustainable system.
                Turn your professional expertise into high-paying clients through organic social selling.
                <strong className="text-[#542221]"> No cold spamming, no paid ad spend, and zero burnout.</strong>
              </p>

              {/* Quick Trust Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full pt-1 text-sm text-[#4E3533] font-medium">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C87A65] shrink-0" />
                  <span>50+ Step-by-Step Lessons & Scripts</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C87A65] shrink-0" />
                  <span>18+ Hours of In-Depth Video Content</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C87A65] shrink-0" />
                  <span>6 Months 1-on-1 Monthly Check-Ins ($970 Value)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C87A65] shrink-0" />
                  <span>100% Guaranteed Results or 3 Free Sessions</span>
                </div>
              </div>

              {/* Primary Call to Action Bar */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 w-full sm:w-auto">
                <button
                  onClick={() => {
                    setModalType("enroll");
                    setIsModalOpen(true);
                  }}
                  className="inline-flex items-center justify-center gap-3 bg-[#542221] hover:bg-[#3E1817] text-white px-8 py-4 rounded-xl text-base font-bold shadow-lg hover:shadow-[#542221]/25 transition-all duration-300 group"
                >
                  <span>Enroll in Lifetime Access ($2,000)</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition text-[#FFD8CB]" />
                </button>

                <a
                  href="#curriculum"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#FFF0E7]/60 text-[#542221] border border-[#E2D2C2] px-6 py-4 rounded-xl text-base font-semibold transition"
                >
                  <span>Explore Curriculum</span>
                  <ChevronDown className="w-4 h-4 text-[#8C6D68]" />
                </a>
              </div>

              {/* Social Proof Mini Bar with Real Metrics */}
              <div className="flex items-center gap-3 pt-2 text-xs text-[#7D6360]">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-[#542221] text-white font-bold flex items-center justify-center text-xs">
                    36K
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-[#C87A65] text-white font-bold flex items-center justify-center text-xs">
                    6K
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-[#82443C] text-white font-bold flex items-center justify-center text-xs">
                    ★
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1 text-[#C87A65] font-bold">
                    {"★★★★★".split("").map((s, i) => (
                      <span key={i}>★</span>
                    ))}
                    <span className="text-[#542221] ml-1 text-xs font-semibold">36K+ Community • 6K+ Newsletter</span>
                  </div>
                  <span>Trusted by corporate executives, coaches & consultants</span>
                </div>
              </div>

            </div>

            {/* Right Visual Column (Cutout & Warm Glass Cards) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Decorative Frame Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#542221]/20 via-[#C87A65]/20 to-[#FBEAE2] rounded-3xl blur-2xl transform rotate-2" />

                {/* Main Card with Real Photo */}
                <div className="relative bg-white rounded-3xl p-4 shadow-xl border border-[#E9DDD0] overflow-hidden">
                  
                  {/* Photo Container */}
                  <div className="relative w-full h-[460px] rounded-2xl overflow-hidden bg-gradient-to-b from-[#FBF7F0] to-[#EFE7DC]">
                    <Image
                      src="/assets/viviana/2A7A6028-1.jpg"
                      alt="Viviana Munoz - LinkedIn Marketing Coach"
                      fill
                      priority
                      className="object-cover object-top"
                    />
                    
                    {/* Gradient Overlay at Bottom */}
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#3E1817]/85 via-[#542221]/40 to-transparent" />

                    {/* Bottom Photo Caption */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-bold text-base leading-tight">Viviana Munoz</p>
                          <p className="text-xs text-[#F2DDD7]">
                            Founder, The Part-Time Entrepreneur Project
                          </p>
                        </div>
                        <a
                          href="https://www.linkedin.com/in/viviana-munoz-technical-writer/?isSelfProfile=false"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-lg bg-[#542221] border border-[#8C4B48] flex items-center justify-center text-white hover:bg-[#3E1817] transition shadow"
                          title="View Viviana's LinkedIn Profile"
                        >
                          <Linkedin className="w-4 h-4 text-[#FFD8CB]" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Floating Glass Badge 1: Top Right */}
                  <div className="absolute -top-3 -right-3 bg-white/95 backdrop-blur-md border border-[#E8D4C8] rounded-2xl p-3.5 shadow-lg max-w-[210px] hidden sm:block animate-in fade-in duration-500">
                    <div className="flex items-start gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-[#FFF0E7] text-[#542221] flex items-center justify-center shrink-0">
                        <DollarSign className="w-4 h-4 font-bold text-[#C87A65]" />
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-[#8C6D68] uppercase tracking-wider">
                          Milestone Focus
                        </p>
                        <p className="text-xs font-bold text-[#2D1616] leading-snug">
                          Your First $2K Revenue Framework
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Floating Glass Badge 2: Bottom Left */}
                  <div className="absolute -bottom-4 -left-3 bg-white/95 backdrop-blur-md border border-[#E8D4C8] rounded-2xl p-3.5 shadow-lg max-w-[230px] hidden sm:block">
                    <div className="flex items-start gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-[#FFF0E7] text-[#542221] flex items-center justify-center shrink-0">
                        <Clock className="w-4 h-4 text-[#C87A65]" />
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-[#8C6D68] uppercase tracking-wider">
                          Busy 9–5 Friendly
                        </p>
                        <p className="text-xs font-bold text-[#2D1616] leading-snug">
                          15 Mins / Day Organic Social Routine
                        </p>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          NEW SIGNATURE BRAND BANNER & STATS STRIP (From Her Asset)
      ────────────────────────────────────────────────────────────── */}
      <section id="brand-story" className="py-12 bg-[#FFF8F0] border-y border-[#EFE4D6]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-[#FAF4EB] rounded-3xl p-6 sm:p-10 border border-[#E8D9C8] shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Quote & Mission */}
              <div className="lg:col-span-7 space-y-3">
                <span className="text-xs uppercase tracking-widest font-extrabold text-[#C87A65] block">
                  WHAT I WANT YOU TO KNOW ABOUT ME
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#542221] font-serif italic leading-tight">
                  &ldquo;I built my coaching business while working my 9–5.&rdquo;
                </h2>
                <p className="text-sm sm:text-base text-[#6E5552] leading-relaxed pt-1">
                  I grew my personal brand one post, one conversation, and one bold decision at a time.
                </p>
              </div>

              {/* Right Burgundy Stat Box */}
              <div className="lg:col-span-5 bg-[#542221] text-white rounded-2xl p-6 sm:p-8 shadow-md border border-[#3E1817]">
                <div className="grid grid-cols-2 gap-4 divide-x divide-white/20 text-center">
                  <div className="pr-2">
                    <span className="text-3xl sm:text-4xl font-black text-white block">
                      36K+
                    </span>
                    <span className="text-[11px] uppercase tracking-wider text-[#FFD8CB] font-bold block mt-1">
                      LINKEDIN COMMUNITY
                    </span>
                  </div>
                  <div className="pl-4">
                    <span className="text-3xl sm:text-4xl font-black text-white block">
                      6K+
                    </span>
                    <span className="text-[11px] uppercase tracking-wider text-[#FFD8CB] font-bold block mt-1">
                      NEWSLETTER SUBSCRIBERS
                    </span>
                  </div>
                </div>
                <div className="text-center pt-4 mt-4 border-t border-white/10 text-xs italic text-[#F2DDD7]">
                  Built through consistency—not virality.
                </div>
              </div>

            </div>

            {/* Bottom Burgundy Highlight Bar */}
            <div className="mt-8 bg-[#542221] text-white py-3.5 px-6 rounded-xl text-center text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
              You do not have to quit your career to start building something of your own.
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          AUTHENTIC PROOF / LINKEDIN RESULTS SHOWCASE
      ────────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#542221] text-white border-y border-[#3E1817]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10 text-center md:text-left">
            <div>
              <p className="text-xs uppercase tracking-widest font-bold text-[#FFD8CB]">
                PROVEN SOCIAL SELLING SYSTEM
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Real Engagement. Real Conversations. Real Revenue.
              </h2>
            </div>
            <p className="text-sm text-[#F5E8DD] max-w-md">
              Here is what happens when you swap cold mass outreach with Viviana&apos;s authentic relationship blueprint:
            </p>
          </div>

          {/* Screenshot Showcase Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#3E1817] rounded-2xl p-3 border border-[#6B3130] shadow-md hover:border-[#C87A65] transition">
              <div className="relative h-44 w-full rounded-xl overflow-hidden bg-white/5">
                <Image
                  src="/assets/viviana/Screenshot-2026-06-07-at-6.54.27-PM-1-768x213.png"
                  alt="LinkedIn Inbound Lead Screenshot"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-3 text-xs text-[#FAF4EB] font-medium flex items-center justify-between">
                <span>Inbound Client Inquiries</span>
                <span className="text-[#96DEB0] font-semibold">100% Organic</span>
              </div>
            </div>

            <div className="bg-[#3E1817] rounded-2xl p-3 border border-[#6B3130] shadow-md hover:border-[#C87A65] transition">
              <div className="relative h-44 w-full rounded-xl overflow-hidden bg-white/5">
                <Image
                  src="/assets/viviana/Screenshot-2026-06-07-at-6.57.05-PM-1-768x247.png"
                  alt="Client Conversion Conversation"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-3 text-xs text-[#FAF4EB] font-medium flex items-center justify-between">
                <span>High-Trust Conversations</span>
                <span className="text-[#FFD8CB] font-semibold">Zero Cold Pitching</span>
              </div>
            </div>

            <div className="bg-[#3E1817] rounded-2xl p-3 border border-[#6B3130] shadow-md hover:border-[#C87A65] transition">
              <div className="relative h-44 w-full rounded-xl overflow-hidden bg-white/5">
                <Image
                  src="/assets/viviana/Screenshot-2026-06-07-at-6.58.24-PM-1-768x302.png"
                  alt="Signed Coaching Client Milestone"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-3 text-xs text-[#FAF4EB] font-medium flex items-center justify-between">
                <span>Targeted Ideal Audience</span>
                <span className="text-[#F6C774] font-semibold">$2,000 Milestone</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          PROBLEM VS SOLUTION SECTION (The 9-to-5 Dilemma)
      ────────────────────────────────────────────────────────────── */}
      <section id="about-program" className="py-20 lg:py-28 bg-[#FFF8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-bold text-[#542221] bg-[#FFF0E7] px-3.5 py-1.5 rounded-full border border-[#EBD6CE]">
              WHY TRADITIONAL TACTICS FAIL
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2D1616] mt-4 tracking-tight">
              You Have Valuable Expertise. The Problem Is The Way You&apos;ve Been Told To Sell It.
            </h2>
            <p className="text-base sm:text-lg text-[#6E5552] mt-4 leading-relaxed">
              Most marketing courses are designed for full-time creators with 8 hours of free time daily.
              If you have a corporate career and family, you cannot afford endless content creation or expensive ad campaigns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            {/* The Old Way (Friction & Burnout) */}
            <div className="bg-white rounded-3xl p-8 border border-rose-200/90 shadow-sm flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 text-rose-800 text-xs font-bold mb-4 border border-rose-200">
                  <span>❌ THE EXHAUSTING WAY (BURNOUT TRAP)</span>
                </div>
                <h3 className="text-xl font-bold text-[#2D1616] mb-4">
                  Wasting Precious Evenings on Friction & Hope Marketing
                </h3>
                <ul className="space-y-3.5 text-sm text-[#5D4644]">
                  <li className="flex items-start gap-2.5">
                    <X className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                    <span>Copy-pasting awkward cold messages to strangers who ignore or block you.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <X className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                    <span>Spending 2+ hours crafting posts that only get vanity likes from peers, not clients.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <X className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                    <span>Burning hard-earned money testing unpredictable Facebook or Instagram ads.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <X className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                    <span>Constant fear of burnout from balancing demanding 9–5 hours with business goals.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-rose-100 text-xs text-rose-800 font-semibold">
                Result: Inconsistent revenue, imposter syndrome & wasted weekends.
              </div>
            </div>

            {/* The Viviana Method (Authentic & Predictable) */}
            <div className="bg-white rounded-3xl p-8 border-2 border-[#542221] shadow-md flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFF0E7] rounded-full blur-2xl pointer-events-none" />
              
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF0E7] text-[#542221] text-xs font-extrabold mb-4 border border-[#E6D1C9]">
                  <span>✓ THE VIVIANA METHOD (SUSTAINABLE FREEDOM)</span>
                </div>
                <h3 className="text-xl font-bold text-[#2D1616] mb-4">
                  The LinkedIn Profit Project™: Precision & Organic Authority
                </h3>
                <ul className="space-y-3.5 text-sm text-[#4E3533]">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-5 h-5 text-[#C87A65] shrink-0 mt-0.5" />
                    <span><strong>Precision Search:</strong> Connect exclusively with people who already need and can afford your help.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-5 h-5 text-[#C87A65] shrink-0 mt-0.5" />
                    <span><strong>15-Minute Daily Routine:</strong> Follow structured templates that fit seamlessly into lunch breaks.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-5 h-5 text-[#C87A65] shrink-0 mt-0.5" />
                    <span><strong>Authentic Conversions:</strong> Turn connection requests into natural client conversations with zero pushiness.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-5 h-5 text-[#C87A65] shrink-0 mt-0.5" />
                    <span><strong>Lifetime Support:</strong> 6 months of 1-on-1 check-ins with Viviana plus ongoing group accountability.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-[#EFE4D6] text-xs text-[#542221] font-bold">
                Result: Your first $2,000 earned with pride while keeping your full-time salary secure.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          INTERACTIVE CALCULATOR: PART-TIME COACHING REVENUE ESTIMATOR
      ────────────────────────────────────────────────────────────── */}
      <section id="calculator" className="py-20 bg-white border-y border-[#EFE4D6]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#542221] bg-[#FFF0E7] px-3.5 py-1.5 rounded-full border border-[#EBD6CE]">
              INTERACTIVE REVENUE SIMULATOR
            </span>
            <h2 className="text-3xl font-extrabold text-[#2D1616] mt-4">
              Calculate Your Part-Time Coaching Potential
            </h2>
            <p className="text-sm text-[#6E5552] mt-2">
              See what happens when you sign just 1 or 2 clients a month with 15 minutes of daily LinkedIn organic outreach:
            </p>
          </div>

          <div className="bg-[#FAF4EB] rounded-3xl p-6 sm:p-10 border border-[#E8D9C8] shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Controls */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Slider 1: Package Price */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-bold text-[#2D1616]">
                    Your Coaching Package Price
                  </label>
                  <span className="text-base font-extrabold text-[#542221] bg-[#FFF0E7] px-3 py-0.5 rounded-lg border border-[#EAD0C7]">
                    ${packagePrice.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="3000"
                  step="250"
                  value={packagePrice}
                  onChange={(e) => setPackagePrice(Number(e.target.value))}
                  className="w-full accent-[#542221] cursor-pointer h-2 bg-[#E2D2C2] rounded-lg"
                />
                <div className="flex justify-between text-xs text-[#7D6360] mt-1">
                  <span>$500 (Starter)</span>
                  <span>$1,500 (Standard)</span>
                  <span>$3,000 (High-Ticket)</span>
                </div>
              </div>

              {/* Slider 2: Target Clients Per Month */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-bold text-[#2D1616]">
                    Target Clients Enrolled Per Month
                  </label>
                  <span className="text-base font-extrabold text-[#542221] bg-[#FFF0E7] px-3 py-0.5 rounded-lg border border-[#EAD0C7]">
                    {clientGoal} {clientGoal === 1 ? "Client" : "Clients"} / month
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="5"
                  step="1"
                  value={clientGoal}
                  onChange={(e) => setClientGoal(Number(e.target.value))}
                  className="w-full accent-[#542221] cursor-pointer h-2 bg-[#E2D2C2] rounded-lg"
                />
                <div className="flex justify-between text-xs text-[#7D6360] mt-1">
                  <span>1 client</span>
                  <span>2 clients (Sweet Spot)</span>
                  <span>5 clients</span>
                </div>
              </div>

              {/* Slider 3: Weekly Hours Available */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-bold text-[#2D1616]">
                    Hours Dedicated Per Week
                  </label>
                  <span className="text-sm font-bold text-[#542221]">
                    {hoursPerWeek} Hours / week (~20 mins/day)
                  </span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="10"
                  step="1"
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                  className="w-full accent-[#542221] cursor-pointer h-2 bg-[#E2D2C2] rounded-lg"
                />
              </div>

            </div>

            {/* Results Display Card in Brand Burgundy */}
            <div className="lg:col-span-5 bg-[#542221] rounded-2xl p-6 text-white text-center flex flex-col justify-between shadow-md border border-[#3E1817]">
              <div>
                <p className="text-xs uppercase font-bold tracking-widest text-[#FFD8CB] mb-1">
                  PROJECTED SIDE EARNINGS
                </p>
                <div className="my-4">
                  <span className="text-4xl sm:text-5xl font-black text-white">
                    ${calculateMonthly().toLocaleString()}
                  </span>
                  <span className="text-[#F2DDD7] text-sm block mt-1">/ month in revenue</span>
                </div>

                <div className="bg-[#3E1817] rounded-xl p-3 border border-[#6B3130] my-4 text-left space-y-1.5">
                  <div className="flex justify-between text-xs text-[#FAF4EB]">
                    <span>Annual Side Income:</span>
                    <strong className="text-[#96DEB0] font-bold">
                      ${calculateAnnual().toLocaleString()}/yr
                    </strong>
                  </div>
                  <div className="flex justify-between text-xs text-[#FAF4EB]">
                    <span>First $2,000 Target:</span>
                    <strong className="text-[#FFD8CB] font-bold">
                      {calculateMonthly() >= 2000 ? "Achieved in Month 1!" : "Achieved in Month 2!"}
                    </strong>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  setModalType("enroll");
                  setIsModalOpen(true);
                }}
                className="w-full bg-[#C87A65] hover:bg-[#B86854] text-white py-3 rounded-xl font-bold text-sm shadow transition mt-2 flex items-center justify-center gap-2"
              >
                <span>Build This With Viviana</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          CURRICULUM BREAKDOWN (Interactive Module Tabs)
      ────────────────────────────────────────────────────────────── */}
      <section id="curriculum" className="py-20 lg:py-28 bg-[#FFF8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-bold text-[#542221] bg-[#FFF0E7] px-3.5 py-1.5 rounded-full border border-[#EBD6CE]">
              STEP-BY-STEP IMPLEMENTATION
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2D1616] mt-4 tracking-tight">
              Inside The Social Selling Blueprint Course
            </h2>
            <p className="text-base text-[#6E5552] mt-3">
              Over 50 in-depth lessons, 18+ hours of video, ready-to-use scripts, and lifetime updates.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Module Selector List */}
            <div className="lg:col-span-5 space-y-3">
              {curriculumModules.map((mod, idx) => {
                const isActive = activeModule === idx;
                return (
                  <button
                    key={mod.id}
                    onClick={() => setActiveModule(idx)}
                    className={`w-full text-left p-5 rounded-2xl border transition-all duration-200 flex items-start gap-4 ${
                      isActive
                        ? "bg-white border-[#542221] shadow-md ring-2 ring-[#542221]/20"
                        : "bg-white/70 hover:bg-white border-[#EBE0D2] text-[#4E3533]"
                    }`}
                  >
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 ${
                        isActive
                          ? "bg-[#542221] text-white"
                          : "bg-[#FFF0E7] text-[#542221]"
                      }`}
                    >
                      0{mod.id}
                    </div>
                    <div>
                      <h3
                        className={`text-base font-bold leading-tight ${
                          isActive ? "text-[#542221]" : "text-[#2D1616]"
                        }`}
                      >
                        {mod.title.replace(/Module \d+: /, "")}
                      </h3>
                      <p className="text-xs text-[#7D6360] mt-1">{mod.subtitle}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Module Detail Card */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-[#E9DDD0] shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-[#EFE4D6]">
                <span className="text-xs font-bold text-[#542221] uppercase tracking-wider">
                  Module 0{curriculumModules[activeModule].id} Detailed Overview
                </span>
                <span className="text-xs font-semibold text-[#542221] bg-[#FFF0E7] px-3 py-1 rounded-full border border-[#EAD0C7]">
                  {curriculumModules[activeModule].timeCommitment}
                </span>
              </div>

              <h3 className="text-2xl font-black text-[#2D1616] mt-4">
                {curriculumModules[activeModule].subtitle}
              </h3>
              
              <p className="text-base text-[#6E5552] mt-3 leading-relaxed">
                {curriculumModules[activeModule].desc}
              </p>

              <div className="mt-6 pt-6 border-t border-[#EFE4D6]">
                <h4 className="text-sm font-bold text-[#2D1616] uppercase tracking-wider mb-4">
                  What You Will Implement & Master:
                </h4>
                <div className="space-y-3">
                  {curriculumModules[activeModule].highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-[#4E3533]">
                      <CheckCircle2 className="w-5 h-5 text-[#C87A65] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#EFE4D6] flex items-center justify-between">
                <span className="text-xs text-[#7D6360]">
                  Included in Lifetime Access ($2,000)
                </span>
                <button
                  onClick={() => {
                    setModalType("enroll");
                    setIsModalOpen(true);
                  }}
                  className="bg-[#542221] hover:bg-[#3E1817] text-white px-5 py-2.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5"
                >
                  <span>Enroll in Program</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FFD8CB]" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          MEET YOUR COACH: VIVIANA MUNOZ
      ────────────────────────────────────────────────────────────── */}
      <section id="meet-viviana" className="py-20 lg:py-28 bg-white border-y border-[#EFE4D6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Photo & Badges */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md">
                <div className="relative h-[480px] rounded-3xl overflow-hidden shadow-xl border border-[#E9DDD0]">
                  <Image
                    src="/assets/viviana/22501295-FCE7-4A75-91EC-4FF3D1B72EF6.jpg"
                    alt="Viviana Munoz Portrait"
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-[#3E1817]/90 via-[#542221]/50 to-transparent text-white">
                    <p className="text-xl font-extrabold">Viviana Munoz</p>
                    <p className="text-xs text-[#F2DDD7]">
                      Corporate Leader, Technical Writer & LinkedIn Strategist
                    </p>
                  </div>
                </div>

                {/* Floating LinkedIn Verification Chip */}
                <a
                  href="https://www.linkedin.com/in/viviana-munoz-technical-writer/?isSelfProfile=false"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute -bottom-4 right-4 bg-white/95 backdrop-blur-md border border-[#E4D5C5] rounded-2xl p-3 shadow-lg flex items-center gap-3 hover:border-[#542221] transition"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#542221] text-white flex items-center justify-center font-bold">
                    <Linkedin className="w-5 h-5 text-[#FFD8CB]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-[#7D6360] uppercase block">
                      36K+ Community
                    </span>
                    <span className="text-xs font-bold text-[#2D1616] flex items-center gap-1">
                      <span>View LinkedIn Profile</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#542221]" />
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Bio & Philosophy */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF0E7] text-[#542221] text-xs font-bold border border-[#EBD6CE]">
                <span>MEET YOUR MENTOR</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2D1616] tracking-tight leading-tight">
                &ldquo;I believe your business should work with your life, not against it.&rdquo;
              </h2>

              <div className="space-y-4 text-base text-[#6E5552] leading-relaxed">
                <p>
                  As an experienced corporate professional, technical writer, and entrepreneur,
                  I understand firsthand the pressure of balancing career obligations, family time,
                  and the ambition to build a flourishing coaching enterprise.
                </p>
                <p>
                  Over the years, I&apos;ve had the privilege of helping hundreds of coaches, consultants,
                  and corporate experts establish their personal brand, master organic social selling,
                  and build sustainable lead systems without quitting their jobs.
                </p>
                <p>
                  Through <strong>The Part-Time Entrepreneur Project</strong> and <strong>The Part-Time Entrepreneur Society</strong>,
                  my mission is simple: to help you turn your hard-earned knowledge into a client-generating platform,
                  hit your first <strong>$2,000 in revenue</strong>, and step into the freedom you deserve.
                </p>
              </div>

              {/* Pillars Highlight in Burgundy Style */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="bg-[#FAF4EB] p-4 rounded-2xl border border-[#E8D9C8]">
                  <div className="text-2xl font-black text-[#542221]">36,000+</div>
                  <div className="text-xs text-[#6E5552] font-medium mt-1">
                    LinkedIn Community Following
                  </div>
                </div>
                <div className="bg-[#FAF4EB] p-4 rounded-2xl border border-[#E8D9C8]">
                  <div className="text-2xl font-black text-[#542221]">100%</div>
                  <div className="text-xs text-[#6E5552] font-medium mt-1">
                    Organic Marketing (Zero Ad Spend)
                  </div>
                </div>
                <div className="bg-[#FAF4EB] p-4 rounded-2xl border border-[#E8D9C8]">
                  <div className="text-2xl font-black text-[#542221]">6 Mo</div>
                  <div className="text-xs text-[#6E5552] font-medium mt-1">
                    Direct 1-on-1 Monthly Check-Ins
                  </div>
                </div>
              </div>

              {/* Direct Touch Point */}
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-[#542221]">
                <span className="flex items-center gap-1.5">
                  <Mail className="w-4 h-4 text-[#C87A65]" />
                  <span>Email: askcoachviv@gmail.com</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <MessageSquare className="w-4 h-4 text-[#C87A65]" />
                  <span>WhatsApp Community Support (72h turnaround)</span>
                </span>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          REAL REVIEWS & TESTIMONIALS
      ────────────────────────────────────────────────────────────── */}
      <section id="testimonials" className="py-20 lg:py-28 bg-[#FFF8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-bold text-[#542221] bg-[#FFF0E7] px-3.5 py-1.5 rounded-full border border-[#EBD6CE]">
              STUDENT RESULTS & PRAISE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2D1616] mt-4">
              What Coaches Say About Working With Viviana
            </h2>
            <p className="text-base text-[#6E5552] mt-2">
              Real screenshots and genuine feedback from coaches who transformed their LinkedIn presence:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Review 1 */}
            <div className="bg-white rounded-3xl p-6 border border-[#E9DDD0] shadow-sm flex flex-col justify-between">
              <div>
                <div className="relative h-44 w-full rounded-2xl overflow-hidden bg-[#FAF4EB] border border-[#EFE4D6] mb-5">
                  <Image
                    src="/assets/viviana/review-1.png"
                    alt="Review 1 Screenshot"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex text-[#C87A65] mb-2 font-bold">★★★★★</div>
                <p className="text-sm text-[#4E3533] leading-relaxed italic">
                  &ldquo;Viviana helped me revamp my LinkedIn profile from a dry resume to a client-converting asset.
                  Within weeks I had real prospects reaching out in my inbox!&rdquo;
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#EFE4D6] flex items-center justify-between text-xs text-[#7D6360]">
                <span className="font-bold text-[#2D1616]">Career & Life Coach</span>
                <span>Verified Mentee</span>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-white rounded-3xl p-6 border border-[#E9DDD0] shadow-sm flex flex-col justify-between">
              <div>
                <div className="relative h-44 w-full rounded-2xl overflow-hidden bg-[#FAF4EB] border border-[#EFE4D6] mb-5">
                  <Image
                    src="/assets/viviana/review-2.png"
                    alt="Review 2 Screenshot"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex text-[#C87A65] mb-2 font-bold">★★★★★</div>
                <p className="text-sm text-[#4E3533] leading-relaxed italic">
                  &ldquo;The 1-on-1 monthly check-ins keep me completely accountable. As someone with a demanding 9–5,
                  her 15-minute daily structure changed everything for me.&rdquo;
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#EFE4D6] flex items-center justify-between text-xs text-[#7D6360]">
                <span className="font-bold text-[#2D1616]">Executive Consultant</span>
                <span>Verified Mentee</span>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-white rounded-3xl p-6 border border-[#E9DDD0] shadow-sm flex flex-col justify-between">
              <div>
                <div className="relative h-44 w-full rounded-2xl overflow-hidden bg-[#FAF4EB] border border-[#EFE4D6] mb-5">
                  <Image
                    src="/assets/viviana/review-3.png"
                    alt="Review 3 Screenshot"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex text-[#C87A65] mb-2 font-bold">★★★★★</div>
                <p className="text-sm text-[#4E3533] leading-relaxed italic">
                  &ldquo;The scripts and conversation formulas alone are worth triple the price.
                  I closed my first client for $1,500 without feeling pushy or awkward at all.&rdquo;
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#EFE4D6] flex items-center justify-between text-xs text-[#7D6360]">
                <span className="font-bold text-[#2D1616]">Business Mentor</span>
                <span>Verified Mentee</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          100% SATISFACTION GUARANTEE BANNER (Deep Chocolate Burgundy)
      ────────────────────────────────────────────────────────────── */}
      <section className="py-14 bg-[#542221] text-white border-y border-[#3E1817]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8 bg-[#3E1817] rounded-3xl p-8 border border-[#753634] shadow-md">
            <div className="w-20 h-20 rounded-2xl bg-[#FFF0E7] text-[#542221] flex items-center justify-center shrink-0 shadow-lg">
              <ShieldCheck className="w-10 h-10 text-[#542221]" />
            </div>
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-block px-3 py-1 rounded-full bg-[#542221] text-[#FFD8CB] text-xs font-bold border border-[#753634]">
                100% SATISFACTION & RESULTS GUARANTEE
              </div>
              <h3 className="text-2xl font-extrabold text-white">
                You Are Fully Protected By Viviana&apos;s Personal Guarantee
              </h3>
              <p className="text-sm text-[#F5E8DD] leading-relaxed">
                If you have faithfully implemented the step-by-step curriculum and haven&apos;t achieved the envisioned client traction,
                <strong> Viviana will personally deliver THREE 90-minute complimentary 1-on-1 coaching sessions</strong> on her own time.
                Your success is our top priority.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          INVESTMENT & VALUE STACK
      ────────────────────────────────────────────────────────────── */}
      <section id="investment" className="py-20 lg:py-28 bg-white border-b border-[#EFE4D6]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-bold text-[#542221] bg-[#FFF0E7] px-3.5 py-1.5 rounded-full border border-[#EBD6CE]">
              LIFETIME ACCESS PRICING
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2D1616] mt-4">
              One Investment. Lifetime Mentorship & Resources.
            </h2>
            <p className="text-base text-[#6E5552] mt-2">
              No hidden subscriptions. No monthly surprises. Revisit the material and grow at your own pace forever.
            </p>
          </div>

          <div className="bg-[#FAF4EB] rounded-3xl border-2 border-[#542221] p-8 sm:p-12 shadow-xl relative overflow-hidden">
            
            <div className="absolute top-0 right-0 bg-[#542221] text-white text-xs font-black uppercase tracking-wider py-1.5 px-6 rounded-bl-2xl shadow">
              BEST VALUE • LIFETIME ACCESS
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Deliverables List */}
              <div className="lg:col-span-7 space-y-4">
                <h3 className="text-2xl font-black text-[#2D1616]">
                  The Complete LinkedIn Profit Project™
                </h3>
                <p className="text-sm text-[#6E5552]">
                  Everything you need to confidently launch, scale, and sign high-ticket coaching clients:
                </p>

                <div className="space-y-3 pt-2 text-sm text-[#4E3533]">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C87A65] shrink-0 mt-0.5" />
                    <div>
                      <strong>The Social Selling Blueprint:</strong> 50+ Lessons & 18+ Hours of Video
                      <span className="text-xs text-[#7D6360] block">Valued at $1,500</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C87A65] shrink-0 mt-0.5" />
                    <div>
                      <strong>1-on-1 Monthly Check-Ins:</strong> 30-min tailored strategy for your first 6 months
                      <span className="text-xs text-[#542221] font-bold block">Valued at $970</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C87A65] shrink-0 mt-0.5" />
                    <div>
                      <strong>Quarterly Business Goal Setting:</strong> Strategic live revenue planning sessions
                      <span className="text-xs text-[#7D6360] block">Valued at $497</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C87A65] shrink-0 mt-0.5" />
                    <div>
                      <strong>Plug-and-Play Script Vault:</strong> Outreach, DMs, content & discovery call templates
                      <span className="text-xs text-[#7D6360] block">Valued at $450</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C87A65] shrink-0 mt-0.5" />
                    <div>
                      <strong>Coaches Community & Direct Access:</strong> Email, dashboard & WhatsApp support
                      <span className="text-xs text-[#7D6360] block">Priceless ongoing accountability</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 text-xs text-[#7D6360]">
                  Total Real Value: <span className="line-through font-bold text-[#542221]">$3,417+</span>
                </div>
              </div>

              {/* Right Price Card */}
              <div className="lg:col-span-5 bg-white rounded-2xl p-8 border border-[#E9DDD0] text-center shadow-md">
                <span className="text-xs font-bold uppercase tracking-wider text-[#7D6360]">
                  ONE-TIME INVESTMENT
                </span>
                
                <div className="my-4">
                  <span className="text-5xl font-black text-[#542221]">$2,000</span>
                  <span className="text-xs text-[#7D6360] block mt-1">Lifetime Access & Updates</span>
                </div>

                <div className="bg-[#FFF0E7] text-[#542221] text-xs font-bold p-2.5 rounded-xl border border-[#EAD0C7] mb-6">
                  ✓ Recoup with your very first 1 or 2 clients
                </div>

                <button
                  onClick={() => {
                    setModalType("enroll");
                    setIsModalOpen(true);
                  }}
                  className="w-full bg-[#542221] hover:bg-[#3E1817] text-white py-4 rounded-xl font-bold text-base shadow-lg transition duration-200 flex items-center justify-center gap-2 group"
                >
                  <span>Enroll Now ($2,000)</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition text-[#FFD8CB]" />
                </button>

                <p className="text-[11px] text-[#8C6D68] mt-4">
                  Need a discovery call first?{" "}
                  <button
                    onClick={() => {
                      setModalType("call");
                      setIsModalOpen(true);
                    }}
                    className="text-[#542221] underline font-bold hover:text-[#3E1817]"
                  >
                    Schedule a 15-min chat
                  </button>
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          FREQUENTLY ASKED QUESTIONS (ACCORDION)
      ────────────────────────────────────────────────────────────── */}
      <section id="faq" className="py-20 lg:py-28 bg-[#FFF8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest font-bold text-[#542221] bg-[#FFF0E7] px-3.5 py-1.5 rounded-full border border-[#EBD6CE]">
              GOT QUESTIONS?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2D1616] mt-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-[#6E5552] mt-2">
              Everything you need to know about the mentorship program:
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-[#E9DDD0] shadow-xs overflow-hidden transition"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-[#2D1616] focus:outline-none"
                  >
                    <span>{faq.q}</span>
                    <span className="w-8 h-8 rounded-full bg-[#FFF0E7] flex items-center justify-center shrink-0 text-[#542221]">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#6E5552] leading-relaxed border-t border-[#EFE4D6]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center p-6 bg-white rounded-2xl border border-[#E9DDD0]">
            <p className="text-sm font-bold text-[#2D1616]">
              Have another question not answered here?
            </p>
            <p className="text-xs text-[#6E5552] mt-1">
              Reach out directly to Viviana via email at{" "}
              <a href="mailto:askcoachviv@gmail.com" className="text-[#542221] font-bold underline">
                askcoachviv@gmail.com
              </a>{" "}
              (turnaround time within 72 hours).
            </p>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          FOOTER (Rich Deep Espresso Burgundy)
      ────────────────────────────────────────────────────────────── */}
      <footer className="bg-[#3E1817] text-white pt-16 pb-12 border-t border-[#542221]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#542221]">
            
            {/* Col 1: Brand Info */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-white p-0.5">
                  <Image
                    src="/assets/viviana/The-Writing-Master-Logo.jpg"
                    alt="Viviana Munoz Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h4 className="font-extrabold text-base tracking-tight text-white">
                    VIVIANA MUNOZ
                  </h4>
                  <p className="text-[11px] text-[#FFD8CB] font-semibold uppercase">
                    The LinkedIn Profit Project™
                  </p>
                </div>
              </div>
              <p className="text-xs text-[#F2DDD7] leading-relaxed max-w-sm">
                Empowering full-time professionals, coaches, and consultants to build a sustainable,
                high-income coaching business using authentic organic LinkedIn strategies.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://www.linkedin.com/in/viviana-munoz-technical-writer/?isSelfProfile=false"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-[#542221] hover:bg-[#6E302F] text-[#FAF4EB] hover:text-white flex items-center justify-center transition border border-[#753634]"
                  title="Viviana Munoz LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="mailto:askcoachviv@gmail.com"
                  className="w-9 h-9 rounded-xl bg-[#542221] hover:bg-[#6E302F] text-[#FAF4EB] hover:text-white flex items-center justify-center transition border border-[#753634]"
                  title="Email Viviana"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Col 2: Navigation Links */}
            <div className="md:col-span-3 space-y-3">
              <h5 className="text-xs font-bold uppercase tracking-wider text-[#FFD8CB]">
                Quick Navigation
              </h5>
              <ul className="space-y-2 text-xs text-[#F2DDD7]">
                <li><a href="#about-program" className="hover:text-white transition">The 9-to-5 Method</a></li>
                <li><a href="#brand-story" className="hover:text-white transition">About Viviana&apos;s Story</a></li>
                <li><a href="#calculator" className="hover:text-white transition">Income Calculator</a></li>
                <li><a href="#curriculum" className="hover:text-white transition">Course Curriculum</a></li>
                <li><a href="#meet-viviana" className="hover:text-white transition">Meet Viviana</a></li>
                <li><a href="#testimonials" className="hover:text-white transition">Student Testimonials</a></li>
                <li><a href="#investment" className="hover:text-white transition">Lifetime Pricing</a></li>
              </ul>
            </div>

            {/* Col 3: Direct Contact & Redesign Credit */}
            <div className="md:col-span-4 space-y-3">
              <h5 className="text-xs font-bold uppercase tracking-wider text-[#FFD8CB]">
                Direct Contact & Support
              </h5>
              <div className="space-y-2 text-xs text-[#F2DDD7]">
                <p>Email: <a href="mailto:askcoachviv@gmail.com" className="text-[#FFD8CB] underline">askcoachviv@gmail.com</a></p>
                <p>Community: WhatsApp & Coaches Dashboard</p>
                <p>Original Website: <a href="https://mycoachviviana.com/" target="_blank" rel="noopener noreferrer" className="text-[#FFD8CB] underline">mycoachviviana.com</a></p>
              </div>

              <div className="pt-3">
                <div className="p-3.5 rounded-xl bg-[#542221] border border-[#753634] text-[11px] text-[#F5E8DD]">
                  <span className="text-white font-semibold block mb-0.5">Website Redesign Project</span>
                  Crafted by{" "}
                  <Link href="/" className="text-[#FFD8CB] hover:text-white underline font-semibold">
                    Miskat Hossain
                  </Link>{" "}
                  — Brand & Web Strategist for Coaches.
                </div>
              </div>
            </div>

          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D8BDB7]">
            <p>© {new Date().getFullYear()} The LinkedIn Profit Project™ by Viviana Munoz. All rights reserved.</p>
            <p>Redesigned with Next.js & Tailwind CSS for maximum speed, responsiveness and conversion.</p>
          </div>
        </div>
      </footer>

      {/* ─────────────────────────────────────────────────────────────
          INTERACTIVE ENROLLMENT & DISCOVERY MODAL
      ────────────────────────────────────────────────────────────── */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#FFF8F0] rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#E9DDD0] relative animate-in zoom-in-95 duration-200">
            
            <button
              onClick={resetModal}
              className="absolute top-5 right-5 p-2 rounded-full text-[#7D6360] hover:text-[#2D1616] hover:bg-[#FAF4EB] transition"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {modalStep === "form" ? (
              <div>
                <div className="mb-6">
                  <span className="text-xs uppercase tracking-widest font-bold text-[#542221] bg-[#FFF0E7] px-3.5 py-1.5 rounded-full border border-[#EBD6CE]">
                    {modalType === "enroll" ? "ENROLLMENT INTAKE" : "STRATEGY CHAT"}
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#2D1616] mt-3">
                    {modalType === "enroll"
                      ? "Join The LinkedIn Profit Project™"
                      : "Schedule a 15-Minute Strategy Chat"}
                  </h3>
                  <p className="text-xs text-[#6E5552] mt-1">
                    {modalType === "enroll"
                      ? "Lock in your one-time lifetime investment of $2,000 with 6 months of 1-on-1 check-ins."
                      : "Discuss your coaching niche and see if the $2K framework is a fit for your 9–5 schedule."}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-[#2D1616] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#D8C7B5] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#542221]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-[#2D1616] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#D8C7B5] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#542221]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#2D1616] mb-1">
                        LinkedIn Profile URL
                      </label>
                      <input
                        type="url"
                        placeholder="linkedin.com/in/..."
                        value={formData.linkedinUrl}
                        onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#D8C7B5] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#542221]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#2D1616] mb-1">
                      Current 9–5 Role / Coaching Niche
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Senior Project Manager / Career Coach"
                      value={formData.currentRole}
                      onChange={(e) => setFormData({ ...formData, currentRole: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#D8C7B5] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#542221]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#2D1616] mb-1">
                      Primary Goal
                    </label>
                    <select
                      value={formData.coachingGoal}
                      onChange={(e) => setFormData({ ...formData, coachingGoal: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#D8C7B5] text-sm focus:outline-none focus:ring-2 focus:ring-[#542221] bg-white"
                    >
                      <option value="First $2,000 Milestone">Generate My First $2,000 in Revenue</option>
                      <option value="LinkedIn Profile Revamp">Revamp My LinkedIn Profile For Authority</option>
                      <option value="Organic Lead Gen">Master Organic Outreach Without Paid Ads</option>
                      <option value="Package Creation">Package My Corporate Knowledge Into An Offer</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#542221] hover:bg-[#3E1817] text-white py-3.5 rounded-xl font-bold text-sm shadow-md transition mt-2 flex items-center justify-center gap-2"
                  >
                    <span>{modalType === "enroll" ? "Confirm Enrollment Application" : "Request Strategy Chat"}</span>
                    <ArrowRight className="w-4 h-4 text-[#FFD8CB]" />
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#FFF0E7] text-[#542221] border border-[#EBD6CE] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10 text-[#542221]" />
                </div>
                <h3 className="text-2xl font-extrabold text-[#2D1616]">
                  Application Received!
                </h3>
                <p className="text-sm text-[#6E5552] max-w-sm mx-auto">
                  Thank you, <strong>{formData.name || "Coach"}</strong>. Viviana will review your details
                  and get in touch via <strong>{formData.email}</strong> within 24–48 hours with your onboarding steps.
                </p>
                <div className="pt-4">
                  <button
                    onClick={resetModal}
                    className="bg-[#542221] hover:bg-[#3E1817] text-white px-6 py-2.5 rounded-xl text-xs font-bold transition"
                  >
                    Return to Website
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
