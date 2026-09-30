"use client";

import React, { useState, useId } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  TrendingUp,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  X,
  ShieldCheck,
  Star,
  Award,
  Instagram,
  Facebook,
  Play,
  Flame,
  BookOpen,
  DollarSign,
  PieChart,
  Calendar,
  Clock,
  Lock,
  Check,
  Smartphone,
  Eye,
  Send,
  HelpCircle,
  BarChart3,
  Lightbulb,
  Heart,
  Share2,
  Bookmark,
  Users,
  Compass,
  Menu,
} from "lucide-react";

export default function NepheliClient() {
  // Mobile navigation drawer state
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  // Strategy Pitch Modal / Drawer state
  const [isPitchModalOpen, setIsPitchModalOpen] = useState(false);

  // Booking Consultation Modal state
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState<"audit" | "mentorship">("audit");
  const [bookingStep, setBookingStep] = useState<1 | 2>(1);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookingData, setBookingData] = useState({
    name: "",
    email: "",
    goal: "Start Investing & Understand Compound Growth",
    biggestFrustration: "",
    timeline: "Ready in 1-2 weeks",
  });

  // Guide Preview Modal state
  const [isGuideModalOpen, setIsGuideModalOpen] = useState(false);
  const [guideSuccess, setGuideSuccess] = useState(false);
  const [guideEmail, setGuideEmail] = useState("");

  // Compound Interest Calculator state
  const [initialInvestment, setInitialInvestment] = useState<number>(1000);
  const [monthlyDeposit, setMonthlyDeposit] = useState<number>(350);
  const [years, setYears] = useState<number>(15);
  const [annualReturn, setAnnualReturn] = useState<number>(9); // 9% S&P historic real avg

  // Reels Filter Category
  const [reelsCategory, setReelsCategory] = useState<"all" | "compound" | "habits" | "mindset">("all");
  const [activeVideoModal, setActiveVideoModal] = useState<number | null>(null);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Accessible unique IDs for form controls
  const initialInvestId = useId();
  const monthlyDepositId = useId();
  const yearsId = useId();
  const annualReturnId = useId();

  // Compound Interest Calculation Logic
  // Formula: A = P(1 + r/n)^(nt) + PMT * [((1 + r/n)^(nt) - 1) / (r/n)]
  const calculateCompoundInterest = () => {
    const r = annualReturn / 100;
    const n = 12; // monthly compounding
    const t = years;
    const p = initialInvestment;
    const pmt = monthlyDeposit;

    const baseGrowth = p * Math.pow(1 + r / n, n * t);
    const futureValueAnnuity = pmt * ((Math.pow(1 + r / n, n * t) - 1) / (r / n));
    const totalFutureValue = Math.round(baseGrowth + futureValueAnnuity);
    const totalDeposited = Math.round(p + pmt * 12 * t);
    const totalInterestEarned = Math.max(0, totalFutureValue - totalDeposited);
    const estimatedMonthlyEarnings = Math.round((totalFutureValue * (r / 12)));

    return {
      totalFutureValue,
      totalDeposited,
      totalInterestEarned,
      estimatedMonthlyEarnings,
    };
  };

  const calcResults = calculateCompoundInterest();

  // Format currency helper
  const fmt = (num: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(num);
  };

  // Reels Data
  const reelsList = [
    {
      id: 1,
      category: "compound",
      title: "Why $250/mo Beats $1,000/mo (If You Start 8 Years Earlier)",
      views: "84.2K",
      likes: "6.4K",
      duration: "0:54",
      tag: "Compound Growth",
      hook: "Most people think wealth requires a 6-figure salary. Here is the math that changes everything.",
      takeaway: "Time in the market dwarfs timing the market. Compound interest does 70% of the heavy lifting.",
    },
    {
      id: 2,
      category: "habits",
      title: "The 24-Hour Rule: The Psychology Trick That Saved Me $12,000",
      views: "62.9K",
      likes: "4.8K",
      duration: "1:02",
      tag: "Money Habits",
      hook: "Next time you feel the urge to impulse-buy, do this exact 24-hour mental exercise.",
      takeaway: "Separate dopamine spikes from genuine utility. 85% of impulse desires vanish by morning.",
    },
    {
      id: 3,
      category: "compound",
      title: "The 3-Tier Emergency Fund: Your Financial Armor",
      views: "48.1K",
      likes: "3.7K",
      duration: "0:48",
      tag: "Emergency Funds",
      hook: "Stop keeping your emergency fund in your checking account where inflation eats it alive.",
      takeaway: "Tier 1 in High-Yield Savings (liquid), Tier 2 in short T-bills, Tier 3 for true catastrophic safety.",
    },
    {
      id: 4,
      category: "mindset",
      title: "Wealth Over Clout: Why Truly Wealthy People Drive Normal Cars",
      views: "71.5K",
      likes: "5.9K",
      duration: "0:58",
      tag: "Mindset",
      hook: "Rich is what you spend. Wealth is what you keep and never show off.",
      takeaway: "True financial freedom is the quiet confidence of knowing your bills are covered by assets, not 12-hour workdays.",
    },
    {
      id: 5,
      category: "compound",
      title: "The First $10K Is Brutal — The Next $100K Is Inevitable",
      views: "53.8K",
      likes: "4.2K",
      duration: "1:15",
      tag: "Compound Growth",
      hook: "Charlie Munger was right: getting the snowball started takes grit, but then gravity takes over.",
      takeaway: "Once your portfolio earns more than you deposit each month, the wealth curve goes vertical.",
    },
    {
      id: 6,
      category: "mindset",
      title: "Physical Vitality & Wealth: Why Health Is the First Asset",
      views: "34.0K",
      likes: "2.6K",
      duration: "0:50",
      tag: "Holistic Freedom",
      hook: "What good is a million dollars in an investment account if you burn out your body getting there?",
      takeaway: "Discipline in the gym mirrors discipline in your savings. Both require delayed gratification.",
    },
  ];

  const filteredReels =
    reelsCategory === "all"
      ? reelsList
      : reelsList.filter((reel) => reel.category === reelsCategory);

  // FAQ Data
  const faqs = [
    {
      q: "I only have $100 to $200 a month to spare. Can I actually build wealth?",
      a: "Absolutely! In fact, that is the entire foundation of compound interest. As shown in our interactive calculator above, investing just $200/month consistently at historical market averages can compound into over $130,000+ over time. You don't need a Wall Street fortune to start — you just need an automated system.",
    },
    {
      q: "How does the 1:1 Financial Freedom Audit work?",
      a: "The Audit is a focused 60-minute deep dive where we audit your current cash flow, debt structure, emergency fund readiness, and automated investment accounts. You walk away with a tailored 1-page Action Roadmap with exact steps and accounts to set up.",
    },
    {
      q: "What makes your approach different from typical financial content?",
      a: "Zero jargon, zero Wall Street gatekeeping, and zero get-rich-quick schemes. Everything is focused on actionable, sustainable habits: high-yield cash cushions, simple low-cost index investing, impulse control psychology, and holistic health.",
    },
    {
      q: "Where do I access the digital guides once ordered?",
      a: "All digital workbooks and spreadsheets (including The Financial Freedom Playbook and The 24-Hour Spending Blueprint) are delivered instantly as digital PDFs and Notion/Google Sheet templates directly to your inbox.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A0D0C] text-[#E8ECE9] font-sans selection:bg-[#2D6A4F] selection:text-white">
      {/* ============================================================== */}
      {/* 1. VIP PITCH / CONCEPT BANNER (Miskat's Strategy Ribbon) */}
      {/* ============================================================== */}
      <div className="bg-gradient-to-r from-[#1B4332] via-[#2D6A4F] to-[#1B4332] text-white px-4 py-2.5 text-xs sm:text-sm font-medium border-b border-[#40916C]/40 sticky top-0 z-50 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="inline-flex items-center justify-center bg-white/20 text-[#D8F3DC] px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
              Concept Showcase
            </span>
            <span>
              Crafted exclusively for <strong className="text-[#D8F3DC]">@financialfreedomwithnepheli</strong> by{" "}
              <Link href="/" className="underline hover:text-[#D8F3DC] transition-colors font-semibold">
                Miskat Hossain
              </Link>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPitchModalOpen(true)}
              className="inline-flex items-center gap-1.5 bg-[#081C15]/80 hover:bg-[#081C15] text-[#D8F3DC] px-3 py-1 rounded-full text-xs font-semibold transition-all border border-[#52B788]/40 hover:scale-105"
            >
              <Lightbulb className="w-3.5 h-3.5 text-[#74C69D]" />
              <span>Why this converts 4x higher</span>
            </button>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 2. BRAND NAVIGATION */}
      {/* ============================================================== */}
      <header className="border-b border-[#1F2922] bg-[#0A0D0C]/90 backdrop-blur-md sticky top-[41px] z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Name with verified badge */}
          <Link href="#top" className="flex items-center gap-2 group">
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-[#D8F3DC] transition-colors">
                  Nepheli
                </span>
                <CheckCircle2 className="w-4 h-4 text-[#52B788] fill-[#52B788]/20" />
              </div>
              <p className="text-[10px] text-[#95D5B2] font-semibold tracking-wider uppercase">
                Financial Freedom & Wealth Strategy
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-semibold uppercase tracking-wider text-[#A3B899]">
            <a href="#calculator" className="hover:text-[#D8F3DC] transition-colors">
              Compound Calculator
            </a>
            <a href="#reels" className="hover:text-[#D8F3DC] transition-colors flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 text-[#E07A5F]" />
              Signature Reels
            </a>
            <a href="#guides" className="hover:text-[#D8F3DC] transition-colors">
              Wealth Guides
            </a>
            <a href="#advisory" className="hover:text-[#D8F3DC] transition-colors">
              1:1 Mentorship
            </a>
            <a href="#about" className="hover:text-[#D8F3DC] transition-colors">
              Philosophy
            </a>
          </nav>

          {/* Action & Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="https://www.instagram.com/financialfreedomwithnepheli/"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full border border-[#2D6A4F]/40 text-[#95D5B2] hover:text-white hover:border-[#52B788] transition-all hidden xs:flex items-center justify-center"
              title="Visit Instagram Profile"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <button
              onClick={() => {
                setSelectedOffer("audit");
                setIsBookingModalOpen(true);
              }}
              className="bg-[#2D6A4F] hover:bg-[#40916C] text-white px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-md shadow-[#1B4332]/40 hover:shadow-lg hover:shadow-[#2D6A4F]/30 hover:scale-[1.02] flex items-center gap-1.5 sm:gap-2"
            >
              <span>Book Audit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
              className="md:hidden p-2 rounded-lg border border-[#2D6A4F]/40 text-[#D8F3DC] hover:bg-[#162319] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isMobileNavOpen ? (
                <X className="w-5 h-5 text-[#52B788]" />
              ) : (
                <Menu className="w-5 h-5 text-[#52B788]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileNavOpen && (
          <div className="md:hidden bg-[#0A0D0C]/98 border-b border-[#243729] px-4 py-4 space-y-3 backdrop-blur-xl animate-fadeIn">
            <a
              href="#calculator"
              onClick={() => setIsMobileNavOpen(false)}
              className="block py-2 px-3 rounded-lg text-sm font-semibold text-[#D8F3DC] hover:bg-[#162319] transition-colors"
            >
              Compound Calculator
            </a>
            <a
              href="#reels"
              onClick={() => setIsMobileNavOpen(false)}
              className="flex items-center gap-2 py-2 px-3 rounded-lg text-sm font-semibold text-[#D8F3DC] hover:bg-[#162319] transition-colors"
            >
              <Flame className="w-4 h-4 text-[#E07A5F]" />
              Signature Reels
            </a>
            <a
              href="#guides"
              onClick={() => setIsMobileNavOpen(false)}
              className="block py-2 px-3 rounded-lg text-sm font-semibold text-[#D8F3DC] hover:bg-[#162319] transition-colors"
            >
              Wealth Guides & Toolkits
            </a>
            <a
              href="#advisory"
              onClick={() => setIsMobileNavOpen(false)}
              className="block py-2 px-3 rounded-lg text-sm font-semibold text-[#D8F3DC] hover:bg-[#162319] transition-colors"
            >
              1:1 Mentorship & Audit
            </a>
            <a
              href="#about"
              onClick={() => setIsMobileNavOpen(false)}
              className="block py-2 px-3 rounded-lg text-sm font-semibold text-[#D8F3DC] hover:bg-[#162319] transition-colors"
            >
              The Philosophy
            </a>
            <div className="pt-2 border-t border-[#1C2C20] flex items-center justify-between">
              <a
                href="https://www.instagram.com/financialfreedomwithnepheli/"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-[#95D5B2] flex items-center gap-1.5"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Instagram Profile</span>
              </a>
              <button
                onClick={() => {
                  setIsMobileNavOpen(false);
                  setIsPitchModalOpen(true);
                }}
                className="text-xs text-[#52B788] font-semibold flex items-center gap-1"
              >
                <Lightbulb className="w-3.5 h-3.5" />
                <span>Why this converts</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ============================================================== */}
      {/* 3. HERO SECTION */}
      {/* ============================================================== */}
      <section id="top" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
        {/* Glow ambient background effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#1B4332]/30 via-[#2D6A4F]/20 to-transparent blur-[120px] pointer-events-none rounded-full" />
        <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-[#E07A5F]/10 blur-[100px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Core Positioning */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-[#1B4332]/60 border border-[#40916C]/40 px-3.5 py-1.5 rounded-full text-xs font-medium text-[#D8F3DC] mb-6 backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#74C69D]" />
                <span>Grants Pass, Oregon • Financial Freedom & Wealth Mentor</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-[1.15] mb-6">
                Freedom is life’s greatest reward.{" "}
                <span className="italic font-light text-[#95D5B2] block mt-1">
                  Let’s build your wealth engine.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#B7C7B0] leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
                Demystifying compound interest, emergency fund architecture, and mindful investing habits. No Wall Street gatekeeping or complex jargon — just actionable, proven steps to secure your peace of mind and time freedom.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
                <a
                  href="#calculator"
                  className="w-full sm:w-auto bg-[#2D6A4F] hover:bg-[#40916C] text-white px-7 py-3.5 rounded-full font-semibold text-sm transition-all shadow-lg shadow-[#1B4332]/50 hover:scale-[1.02] flex items-center justify-center gap-2 group"
                >
                  <BarChart3 className="w-4 h-4 text-[#D8F3DC]" />
                  <span>Test Your Compound Growth</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <button
                  onClick={() => setIsGuideModalOpen(true)}
                  className="w-full sm:w-auto bg-[#16201A] hover:bg-[#1F2C24] text-[#D8F3DC] border border-[#2D6A4F]/60 px-6 py-3.5 rounded-full font-semibold text-sm transition-all flex items-center justify-center gap-2 hover:border-[#52B788]"
                >
                  <BookOpen className="w-4 h-4 text-[#74C69D]" />
                  <span>Get Free Playbook Preview</span>
                </button>
              </div>

              {/* Social Proof Badges */}
              <div className="pt-6 border-t border-[#1C261F] flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[#8BA087]">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1.5">
                    <div className="w-6 h-6 rounded-full bg-[#2D6A4F] border border-[#0A0D0C] flex items-center justify-center text-[10px] text-white font-bold">
                      $
                    </div>
                    <div className="w-6 h-6 rounded-full bg-[#40916C] border border-[#0A0D0C] flex items-center justify-center text-[10px] text-white font-bold">
                      %
                    </div>
                    <div className="w-6 h-6 rounded-full bg-[#52B788] border border-[#0A0D0C] flex items-center justify-center text-[10px] text-[#0A0D0C] font-bold">
                      ✓
                    </div>
                  </div>
                  <span>Hundreds of Daily Reel Learners</span>
                </div>

                <div className="h-3 w-px bg-[#1C261F] hidden sm:block" />

                <div className="flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 text-[#F4A261] fill-[#F4A261]" />
                  <span>Proven 24-Hour Spending Rule</span>
                </div>

                <div className="h-3 w-px bg-[#1C261F] hidden sm:block" />

                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#52B788]" />
                  <span>Zero High-Risk Gimmicks</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Photo & Credibility Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none bg-[#111A13] border-2 border-[#2D6A4F]/60 rounded-3xl p-3 sm:p-4 shadow-[0_20px_50px_rgba(27,67,50,0.35)]">
                
                {/* 1. Unobstructed Authentic Photo from Instagram */}
                <div className="relative rounded-2xl overflow-hidden aspect-square border border-[#233827] shadow-inner bg-[#0A0D0C]">
                  <Image
                    src="/assets/nepheli/nepheli-real-hero.jpg"
                    alt="Nepheli - Financial Freedom Strategist"
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    priority
                    className="object-cover object-center hover:scale-[1.02] transition-transform duration-700"
                  />
                  {/* Subtle top handle pill */}
                  <div className="absolute top-3 left-3 bg-[#0A0D0C]/85 backdrop-blur-md px-3 py-1 rounded-full border border-[#2D6A4F]/60 text-[11px] font-semibold text-[#D8F3DC] flex items-center gap-1.5 shadow-lg">
                    <div className="w-2 h-2 rounded-full bg-[#52B788] animate-pulse" />
                    <span>@financialfreedomwithnepheli</span>
                  </div>
                </div>

                {/* 2. Clear Bio & Stats Card Below the Photo (Nothing Covering Face) */}
                <div className="mt-3.5 bg-[#162319] p-4 rounded-xl border border-[#263D2B]">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <h3 className="font-serif font-bold text-base sm:text-lg text-white">
                        Nepheli
                      </h3>
                      <CheckCircle2 className="w-4 h-4 text-[#52B788] fill-[#52B788]/20" />
                    </div>
                    <span className="text-[11px] text-[#95D5B2] bg-[#1B4332]/70 px-2.5 py-0.5 rounded-full border border-[#40916C]/40 font-mono">
                      Grants Pass, OR
                    </span>
                  </div>

                  <p className="text-xs text-[#B7C7B0] leading-relaxed mb-3">
                    &ldquo;Freedom is life’s greatest reward. Turn your daily income into an automated compound growth engine.&rdquo;
                  </p>

                  <div className="flex items-center justify-between pt-2.5 border-t border-[#233827] text-[11px] text-[#8BA087]">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Flame className="w-3.5 h-3.5 text-[#E07A5F]" />
                        59+ Reels
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-[#52B788]" />
                        Active Mentor
                      </span>
                    </div>

                    <a
                      href="https://www.instagram.com/financialfreedomwithnepheli/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 bg-[#1B4332] hover:bg-[#2D6A4F] text-[#D8F3DC] px-2.5 py-1 rounded-md text-[11px] font-semibold border border-[#40916C]/40 transition-colors"
                      title="Follow on Instagram"
                    >
                      <Instagram className="w-3 h-3" />
                      <span>Follow</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. THE CORE 4 WEALTH PILLARS */}
      {/* ============================================================== */}
      <section className="py-16 border-y border-[#18231B] bg-[#0E1510]/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 rounded-xl bg-[#121B14] border border-[#223326] hover:border-[#2D6A4F] transition-all group">
              <div className="w-10 h-10 rounded-lg bg-[#1B4332]/60 flex items-center justify-center text-[#74C69D] mb-4 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-base text-white mb-2">
                1. Compound Engine
              </h3>
              <p className="text-xs text-[#9BB197] leading-relaxed">
                Learn why time in the market creates exponential acceleration, and how to automate modest deposits into hundreds of thousands over time.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#121B14] border border-[#223326] hover:border-[#2D6A4F] transition-all group">
              <div className="w-10 h-10 rounded-lg bg-[#1B4332]/60 flex items-center justify-center text-[#74C69D] mb-4 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-base text-white mb-2">
                2. Emergency Armor
              </h3>
              <p className="text-xs text-[#9BB197] leading-relaxed">
                Constructing a tiered 3 to 6-month safety net in high-yield vehicles so life surprises never force you into high-interest credit card debt.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#121B14] border border-[#223326] hover:border-[#2D6A4F] transition-all group">
              <div className="w-10 h-10 rounded-lg bg-[#1B4332]/60 flex items-center justify-center text-[#74C69D] mb-4 group-hover:scale-110 transition-transform">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-base text-white mb-2">
                3. The 24-Hour Rule
              </h3>
              <p className="text-xs text-[#9BB197] leading-relaxed">
                Simple behavioural psychological frameworks to eliminate emotional impulse buys, allowing you to invest the surplus guilt-free.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#121B14] border border-[#223326] hover:border-[#2D6A4F] transition-all group">
              <div className="w-10 h-10 rounded-lg bg-[#1B4332]/60 flex items-center justify-center text-[#74C69D] mb-4 group-hover:scale-110 transition-transform">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-base text-white mb-2">
                4. Holistic Vitality
              </h3>
              <p className="text-xs text-[#9BB197] leading-relaxed">
                Physical longevity and mental peace must match your financial growth. True wealth means having the health to enjoy your freedom.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. SHOWSTOPPER: INTERACTIVE COMPOUND INTEREST CALCULATOR */}
      {/* ============================================================== */}
      <section id="calculator" className="py-20 md:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#52B788] bg-[#1B4332]/50 px-3 py-1 rounded-full border border-[#2D6A4F]/40">
              Interactive Simulation
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white mt-4 mb-4">
              Watch The Math of Compound Interest in Action
            </h2>
            <p className="text-sm sm:text-base text-[#A3B899]">
              Adjust the sliders below to see how consistent monthly contributions turn into life-changing freedom. This is the exact principle Nepheli breaks down in her reels.
            </p>
          </div>

          <div className="bg-[#101712] border border-[#243729] rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            {/* Background subtle glow */}
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#2D6A4F]/10 blur-3xl pointer-events-none rounded-full" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Sliders Input Controls */}
              <div className="lg:col-span-6 space-y-7">
                
                {/* Initial Investment */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label htmlFor={initialInvestId} className="text-xs font-semibold uppercase tracking-wider text-[#D8F3DC]">
                      Initial Starting Balance
                    </label>
                    <span className="text-base font-bold text-white font-mono bg-[#1A261D] px-3 py-0.5 rounded border border-[#2D6A4F]/50">
                      {fmt(initialInvestment)}
                    </span>
                  </div>
                  <input
                    id={initialInvestId}
                    type="range"
                    min="0"
                    max="20000"
                    step="250"
                    value={initialInvestment}
                    onChange={(e) => setInitialInvestment(Number(e.target.value))}
                    className="w-full accent-[#52B788] bg-[#1A261D] h-2 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-[#6E826B] mt-1 font-mono">
                    <span>$0</span>
                    <span>$10,000</span>
                    <span>$20,000</span>
                  </div>
                </div>

                {/* Monthly Contribution */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label htmlFor={monthlyDepositId} className="text-xs font-semibold uppercase tracking-wider text-[#D8F3DC]">
                      Monthly Contribution
                    </label>
                    <span className="text-base font-bold text-[#74C69D] font-mono bg-[#1A261D] px-3 py-0.5 rounded border border-[#2D6A4F]/50">
                      {fmt(monthlyDeposit)} / mo
                    </span>
                  </div>
                  <input
                    id={monthlyDepositId}
                    type="range"
                    min="50"
                    max="2500"
                    step="50"
                    value={monthlyDeposit}
                    onChange={(e) => setMonthlyDeposit(Number(e.target.value))}
                    className="w-full accent-[#52B788] bg-[#1A261D] h-2 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-[#6E826B] mt-1 font-mono">
                    <span>$50/mo</span>
                    <span>$1,000/mo</span>
                    <span>$2,500/mo</span>
                  </div>
                </div>

                {/* Years Horizon */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label htmlFor={yearsId} className="text-xs font-semibold uppercase tracking-wider text-[#D8F3DC]">
                      Investment Horizon
                    </label>
                    <span className="text-base font-bold text-white font-mono bg-[#1A261D] px-3 py-0.5 rounded border border-[#2D6A4F]/50">
                      {years} Years
                    </span>
                  </div>
                  <input
                    id={yearsId}
                    type="range"
                    min="3"
                    max="35"
                    step="1"
                    value={years}
                    onChange={(e) => setYears(Number(e.target.value))}
                    className="w-full accent-[#52B788] bg-[#1A261D] h-2 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-[#6E826B] mt-1 font-mono">
                    <span>3 Yrs</span>
                    <span>15 Yrs</span>
                    <span>35 Yrs</span>
                  </div>
                </div>

                {/* Annual Return Rate */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label htmlFor={annualReturnId} className="text-xs font-semibold uppercase tracking-wider text-[#D8F3DC]">
                      Estimated Annual Growth (S&P 500 Avg)
                    </label>
                    <span className="text-base font-bold text-white font-mono bg-[#1A261D] px-3 py-0.5 rounded border border-[#2D6A4F]/50">
                      {annualReturn}%
                    </span>
                  </div>
                  <input
                    id={annualReturnId}
                    type="range"
                    min="5"
                    max="12"
                    step="0.5"
                    value={annualReturn}
                    onChange={(e) => setAnnualReturn(Number(e.target.value))}
                    className="w-full accent-[#52B788] bg-[#1A261D] h-2 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-[#6E826B] mt-1 font-mono">
                    <span>5% (Conservative)</span>
                    <span>9% (Historic Avg)</span>
                    <span>12% (Optimistic)</span>
                  </div>
                </div>

              </div>

              {/* Real-Time Wealth Projections Output Card */}
              <div className="lg:col-span-6 bg-gradient-to-br from-[#152219] to-[#0D150F] border border-[#2F4A36] rounded-xl p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#243729]">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#95D5B2]">
                      Total Projected Portfolio
                    </span>
                    <span className="text-xs font-mono text-[#74C69D] bg-[#1B4332]/60 px-2 py-0.5 rounded">
                      After {years} Years
                    </span>
                  </div>

                  <div className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight mb-6">
                    {fmt(calcResults.totalFutureValue)}
                  </div>

                  {/* Breakdown Stats */}
                  <div className="space-y-3.5 mb-6">
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="text-[#8BA087] flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#3B5A42]" />
                        Your Total Cash Invested:
                      </span>
                      <span className="font-mono font-semibold text-white">
                        {fmt(calcResults.totalDeposited)}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="text-[#8BA087] flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#52B788]" />
                        Pure Compound Interest (Free Money):
                      </span>
                      <span className="font-mono font-bold text-[#52B788]">
                        +{fmt(calcResults.totalInterestEarned)}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-xs sm:text-sm pt-2 border-t border-[#243729]">
                      <span className="text-[#95D5B2] font-medium">
                        Estimated Passive Monthly Growth:
                      </span>
                      <span className="font-mono font-bold text-[#D8F3DC]">
                        {fmt(calcResults.estimatedMonthlyEarnings)} / mo
                      </span>
                    </div>
                  </div>

                  {/* Percentage Progress Bar */}
                  <div className="w-full bg-[#1C2C20] h-3.5 rounded-full overflow-hidden flex border border-[#2C4432] mb-6">
                    <div
                      style={{
                        width: `${Math.max(
                          10,
                          (calcResults.totalDeposited / calcResults.totalFutureValue) * 100
                        )}%`,
                      }}
                      className="bg-[#2D6A4F] h-full transition-all duration-300"
                      title="Your Cash"
                    />
                    <div
                      style={{
                        width: `${Math.min(
                          90,
                          (calcResults.totalInterestEarned / calcResults.totalFutureValue) * 100
                        )}%`,
                      }}
                      className="bg-[#52B788] h-full transition-all duration-300"
                      title="Compound Interest Growth"
                    />
                  </div>
                </div>

                {/* Direct CTA */}
                <div className="pt-4 border-t border-[#243729]/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-xs text-[#8BA087] text-center sm:text-left">
                    Ready to set up your automated investing system?
                  </p>
                  <button
                    onClick={() => {
                      setSelectedOffer("audit");
                      setIsBookingModalOpen(true);
                    }}
                    className="w-full sm:w-auto bg-[#2D6A4F] hover:bg-[#40916C] text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all hover:scale-105 shadow-md flex items-center justify-center gap-1.5 shrink-0"
                  >
                    <span>Build Your Roadmap</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 6. SIGNATURE REELS & BREAKDOWN MASTERCLASSES */}
      {/* ============================================================== */}
      <section id="reels" className="py-20 border-t border-[#1A261D] bg-[#0C120E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E07A5F] bg-[#E07A5F]/10 px-3 py-1 rounded-full border border-[#E07A5F]/20 mb-3">
                <Flame className="w-3.5 h-3.5" />
                <span>Short-Form Mastery</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white">
                Signature Reels & Financial Breakdowns
              </h2>
              <p className="text-sm text-[#A3B899] mt-2 max-w-xl">
                Bite-sized financial clarity watched by thousands. Straightforward answers to everyday money questions.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 max-w-full sm:flex-wrap">
              {[
                { id: "all", label: "All Reels" },
                { id: "compound", label: "Compound Interest" },
                { id: "habits", label: "Money Habits" },
                { id: "mindset", label: "Mindset & Health" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setReelsCategory(tab.id as any)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold shrink-0 transition-all ${
                    reelsCategory === tab.id
                      ? "bg-[#2D6A4F] text-white shadow-md border border-[#52B788]/60"
                      : "bg-[#141C16] text-[#8BA087] hover:text-white border border-[#223326]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Reels Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReels.map((reel) => (
              <div
                key={reel.id}
                className="bg-[#121B15] border border-[#223327] rounded-2xl overflow-hidden hover:border-[#386641] transition-all hover:-translate-y-1 shadow-xl flex flex-col justify-between group"
              >
                <div>
                  {/* Top Mockup Player Header */}
                  <div className="relative aspect-[16/10] bg-gradient-to-br from-[#1B3022] via-[#142218] to-[#0A0D0C] p-4 flex flex-col justify-between overflow-hidden">
                    <div className="flex items-center justify-between relative z-10">
                      <span className="bg-[#0A0D0C]/80 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#95D5B2] border border-[#2D6A4F]/40">
                        {reel.tag}
                      </span>
                      <span className="text-[11px] font-mono text-white/80 bg-black/50 px-2 py-0.5 rounded">
                        {reel.duration}
                      </span>
                    </div>

                    {/* Central Play Button */}
                    <div className="self-center my-auto relative z-10">
                      <button
                        onClick={() => setActiveVideoModal(reel.id)}
                        className="w-12 h-12 rounded-full bg-[#2D6A4F]/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-[#40916C] transition-all border border-[#52B788]/60"
                        title="Watch breakdown"
                      >
                        <Play className="w-5 h-5 ml-0.5 fill-white" />
                      </button>
                    </div>

                    {/* Bottom stats inside preview */}
                    <div className="flex items-center justify-between text-[11px] text-white/80 relative z-10 pt-2 border-t border-white/10">
                      <span className="flex items-center gap-1 font-mono">
                        <Eye className="w-3.5 h-3.5 text-[#52B788]" />
                        {reel.views} Views
                      </span>
                      <span className="flex items-center gap-1 font-mono">
                        <Heart className="w-3.5 h-3.5 text-[#E07A5F]" />
                        {reel.likes}
                      </span>
                    </div>

                    {/* Background grid lines */}
                    <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:16px_16px]" />
                  </div>

                  {/* Reel Details */}
                  <div className="p-5">
                    <h3 className="font-serif font-bold text-base text-white mb-2 line-clamp-2 leading-snug">
                      {reel.title}
                    </h3>

                    <p className="text-xs text-[#A3B899] italic mb-4">
                      &ldquo;{reel.hook}&rdquo;
                    </p>

                    <div className="bg-[#18241C] p-3 rounded-lg border border-[#26382B] text-xs text-[#C2D6BF]">
                      <strong className="text-[#52B788] block text-[10px] uppercase font-bold tracking-wider mb-1">
                        Core Takeaway:
                      </strong>
                      {reel.takeaway}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <a
                    href="https://www.instagram.com/financialfreedomwithnepheli/reels/"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2.5 rounded-lg border border-[#2D6A4F]/60 text-xs font-semibold text-[#D8F3DC] hover:bg-[#1B4332]/50 hover:border-[#52B788] transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Watch on Instagram Reels</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Instagram Reel Banner */}
          <div className="mt-12 bg-gradient-to-r from-[#17251C] to-[#121B14] border border-[#2B3F30] rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="p-3 bg-[#E1306C]/10 text-[#E1306C] rounded-full border border-[#E1306C]/30">
                <Instagram className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-white text-sm sm:text-base">
                  Follow @financialfreedomwithnepheli for Daily Breakdown Reels
                </h4>
                <p className="text-xs text-[#9BB197]">
                  Join everyday savers, professionals, and wealth builders tuning in daily.
                </p>
              </div>
            </div>

            <a
              href="https://www.instagram.com/financialfreedomwithnepheli/"
              target="_blank"
              rel="noreferrer"
              className="bg-[#E1306C] hover:bg-[#C13584] text-white px-5 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all shadow-md shrink-0 flex items-center gap-1.5"
            >
              <span>Follow On Instagram</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 7. DIGITAL PLAYBOOKS & WEALTH TOOLKITS */}
      {/* ============================================================== */}
      <section id="guides" className="py-20 md:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: The Flagship Tablet Guide Mockup */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-sm sm:max-w-md">
                
                {/* Custom Generated Tablet Mockup */}
                <div className="relative rounded-2xl overflow-hidden border border-[#2D6A4F]/60 shadow-2xl aspect-[3/4] bg-[#121B15]">
                  <Image
                    src="/assets/nepheli/guide-playbook.jpg"
                    alt="The Financial Freedom Playbook by Nepheli"
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D0C]/80 via-transparent to-transparent" />

                  {/* Ribbon */}
                  <div className="absolute top-4 right-4 bg-[#2D6A4F] text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase shadow-lg border border-[#52B788]/60">
                    Flagship Guide
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 bg-[#0A0D0C]/90 backdrop-blur-md p-4 rounded-xl border border-[#2D6A4F]/40">
                    <p className="text-xs font-semibold text-[#D8F3DC]">
                      The Financial Freedom Playbook
                    </p>
                    <p className="text-[11px] text-[#8BA087]">
                      42-Page Blueprint + Automated Calculator Spreadsheet
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right: Guide Content & Features */}
            <div className="lg:col-span-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#52B788] bg-[#1B4332]/50 px-3 py-1 rounded-full border border-[#2D6A4F]/40">
                Self-Paced Resources
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white mt-4 mb-5">
                The Financial Freedom Playbook & Toolkits
              </h2>

              <p className="text-sm sm:text-base text-[#B0C4AC] leading-relaxed mb-6">
                Everything you need to move from paycheck stress to confident automation. Formatted into step-by-step checklists, spreadsheets, and decision trees.
              </p>

              {/* What’s Inside */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#1B4332] text-[#74C69D] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">
                      The Compound Growth Blueprint
                    </h4>
                    <p className="text-xs text-[#8BA087]">
                      Understanding tax-advantaged accounts, index funds, and the exact math behind starting early.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#1B4332] text-[#74C69D] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">
                      The 24-Hour Anti-Impulse Budget Tracker
                    </h4>
                    <p className="text-xs text-[#8BA087]">
                      Plug-and-play Notion & Google Sheet template to eliminate emotional retail spending.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#1B4332] text-[#74C69D] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">
                      The 3-Tier Emergency Fund Architecture
                    </h4>
                    <p className="text-xs text-[#8BA087]">
                      Where to park your safety net for maximum APY liquidity without losing purchasing power to inflation.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={() => setIsGuideModalOpen(true)}
                  className="w-full sm:w-auto bg-[#2D6A4F] hover:bg-[#40916C] text-white px-7 py-3.5 rounded-full font-semibold text-sm transition-all shadow-lg hover:scale-105 flex items-center justify-center gap-2"
                >
                  <BookOpen className="w-4 h-4 text-[#D8F3DC]" />
                  <span>Download Free Sample Chapter</span>
                </button>

                <span className="text-xs text-[#70846E]">
                  Delivered instantly via email (PDF)
                </span>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 8. 1-ON-1 ADVISORY & MENTORSHIP TIERS */}
      {/* ============================================================== */}
      <section id="advisory" className="py-20 md:py-28 border-t border-[#1A261E] bg-[#0B100C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#52B788] bg-[#1B4332]/50 px-3 py-1 rounded-full border border-[#2D6A4F]/40">
              Personal Mentorship
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white mt-4 mb-4">
              Work Directly With Nepheli
            </h2>
            <p className="text-sm sm:text-base text-[#A3B899]">
              Custom tailored guidance for your specific income, goals, and family roadmap. No cookie-cutter advice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Offer 1: The 60-Min Audit */}
            <div className="bg-[#121B15] border border-[#243729] rounded-2xl p-8 flex flex-col justify-between hover:border-[#2D6A4F] transition-all relative">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#95D5B2]">
                      Intensive Session
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-white mt-1">
                      60-Minute Freedom Audit
                    </h3>
                  </div>
                  <Clock className="w-5 h-5 text-[#52B788]" />
                </div>

                <p className="text-xs sm:text-sm text-[#9BB197] leading-relaxed mb-6">
                  A focused, confidential 1-on-1 strategy call to audit your cash flow, fix budgeting leaks, set up your emergency cushion, and map your automated investing accounts.
                </p>

                <div className="space-y-3 mb-8 text-xs text-[#C2D6BF]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#52B788] shrink-0" />
                    <span>Complete Cash Flow & Expense Leak Analysis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#52B788] shrink-0" />
                    <span>Emergency Fund Target & High-Yield Setup</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#52B788] shrink-0" />
                    <span>Automated Index Fund Investing Walkthrough</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#52B788] shrink-0" />
                    <span>Custom 1-Page Action Roadmap PDF</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  setSelectedOffer("audit");
                  setIsBookingModalOpen(true);
                }}
                className="w-full bg-[#1B4332] hover:bg-[#2D6A4F] text-white py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all border border-[#40916C]/60 flex items-center justify-center gap-2"
              >
                <span>Apply for Freedom Audit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Offer 2: 3-Month Private Mentorship */}
            <div className="bg-gradient-to-b from-[#16251B] to-[#101912] border-2 border-[#52B788]/60 rounded-2xl p-8 flex flex-col justify-between shadow-2xl relative">
              <div className="absolute -top-3 right-6 bg-[#52B788] text-[#0A0D0C] px-3 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider">
                Most Comprehensive
              </div>

              <div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#D8F3DC]">
                      Full Partnership
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-white mt-1">
                      Private Wealth Mentorship
                    </h3>
                  </div>
                  <Award className="w-5 h-5 text-[#52B788]" />
                </div>

                <p className="text-xs sm:text-sm text-[#A3B899] leading-relaxed mb-6">
                  90 days of direct weekly accountability, holistic financial wellness alignment, and end-to-end investment implementation to build permanent freedom habits.
                </p>

                <div className="space-y-3 mb-8 text-xs text-[#D8F3DC]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#52B788] shrink-0" />
                    <span>Weekly 1-on-1 Strategy & Accountability Calls</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#52B788] shrink-0" />
                    <span>Direct WhatsApp / Voxer Audio Access</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#52B788] shrink-0" />
                    <span>Behavioral Impulse Control Coaching</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#52B788] shrink-0" />
                    <span>Portfolio Structuring & Long-Term Rebalancing</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  setSelectedOffer("mentorship");
                  setIsBookingModalOpen(true);
                }}
                className="w-full bg-[#2D6A4F] hover:bg-[#40916C] text-white py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-lg hover:scale-105 flex items-center justify-center gap-2"
              >
                <span>Apply for Private Mentorship</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 9. PHILOSOPHY & ABOUT NEPHELI */}
      {/* ============================================================== */}
      <section id="about" className="py-20 md:py-28 relative border-t border-[#18231B]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#111A13] border border-[#223326] rounded-2xl p-8 sm:p-12 relative overflow-hidden">
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              <div className="md:col-span-4 text-center">
                <div className="relative w-36 h-36 mx-auto rounded-full overflow-hidden border-4 border-[#2D6A4F] shadow-2xl mb-4">
                  <Image
                    src="/assets/nepheli/nepheli-avatar.jpg"
                    alt="Nepheli"
                    fill
                    sizes="144px"
                    className="object-cover"
                  />
                </div>
                <h4 className="font-serif font-bold text-lg text-white">Nepheli</h4>
                <p className="text-xs text-[#95D5B2]">Grants Pass, Oregon</p>
                <p className="text-[11px] text-[#70846E] mt-1 font-mono">
                  @financialfreedomwithnepheli
                </p>
              </div>

              <div className="md:col-span-8">
                <blockquote className="font-serif text-xl sm:text-2xl text-[#E8ECE9] italic leading-snug mb-6">
                  &ldquo;Freedom is life’s greatest reward. Financial independence isn’t about impressing strangers with luxuries you can’t afford — it’s about waking up every day owning 100% of your time.&rdquo;
                </blockquote>

                <p className="text-xs sm:text-sm text-[#9BB197] leading-relaxed mb-4">
                  Growing up, we are taught how to work for money, but rarely how to make money work quietly for us. Through daily reels, honest conversations, and practical frameworks, Nepheli has built a community dedicated to breaking the paycheck cycle.
                </p>

                <p className="text-xs sm:text-sm text-[#9BB197] leading-relaxed">
                  Her holistic perspective links financial health with physical strength and mental discipline: when you master your money habits, every other area of your life elevates.
                </p>

                <div className="flex items-center gap-4 mt-6 pt-6 border-t border-[#1C2C20]">
                  <a
                    href="https://www.facebook.com/FinancialFreedomWithNepheli"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-[#95D5B2] hover:text-white flex items-center gap-1.5 transition-colors"
                  >
                    <Facebook className="w-4 h-4" />
                    <span>Facebook Community</span>
                  </a>
                  <span className="text-[#324937]">•</span>
                  <a
                    href="https://www.instagram.com/financialfreedomwithnepheli/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-[#95D5B2] hover:text-white flex items-center gap-1.5 transition-colors"
                  >
                    <Instagram className="w-4 h-4" />
                    <span>Instagram Reels</span>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 10. FREQUENTLY ASKED QUESTIONS */}
      {/* ============================================================== */}
      <section className="py-20 border-t border-[#18231B] bg-[#0A0E0B]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#52B788] bg-[#1B4332]/50 px-3 py-1 rounded-full border border-[#2D6A4F]/40">
              Clear Answers
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white mt-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-[#121B14] border border-[#223326] rounded-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 text-sm sm:text-base font-semibold text-white hover:text-[#D8F3DC]"
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-4 h-4 text-[#52B788] shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#70846E] shrink-0" />
                  )}
                </button>

                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-[#9BB197] leading-relaxed border-t border-[#1C2C20] pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 11. FINAL HIGH-CONVERTING CTA BANNER */}
      {/* ============================================================== */}
      <section className="py-20 relative bg-gradient-to-b from-[#0F1A12] to-[#080D0A] border-t border-[#223326] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-16 h-16 rounded-full bg-[#1B4332] text-[#52B788] flex items-center justify-center mx-auto mb-6 shadow-xl border border-[#40916C]/40">
            <Sparkles className="w-8 h-8" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white mb-4">
            Ready to Take Control of Your Financial Future?
          </h2>

          <p className="text-sm sm:text-base text-[#9BB197] max-w-2xl mx-auto mb-8">
            Every month you delay is compound interest that works for someone else. Let’s build your personalized financial freedom roadmap today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                setSelectedOffer("audit");
                setIsBookingModalOpen(true);
              }}
              className="w-full sm:w-auto bg-[#2D6A4F] hover:bg-[#40916C] text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide transition-all shadow-xl hover:scale-105 flex items-center justify-center gap-2"
            >
              <span>Book Your Freedom Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#calculator"
              className="w-full sm:w-auto bg-[#141C16] hover:bg-[#1E2B21] text-[#D8F3DC] border border-[#2D6A4F] px-7 py-4 rounded-full font-semibold text-sm transition-all"
            >
              Recalculate Growth
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 12. FOOTER & MISKAT'S DESIGN ATTRIBUTION */}
      {/* ============================================================== */}
      <footer className="border-t border-[#1C261F] pt-12 pb-28 sm:pb-12 bg-[#060907] text-xs text-[#70846E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-[#52B788] shrink-0 shadow-md">
              <Image
                src="/assets/nepheli/nepheli-avatar.jpg"
                alt="Nepheli"
                fill
                sizes="36px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-serif font-bold text-white text-sm">
                Nepheli
              </p>
              <p className="text-[11px] text-[#8BA087]">
                Financial Freedom Strategist • Grants Pass, Oregon
              </p>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-white/80">
              Custom Brand & Digital Architecture Concept designed by{" "}
              <Link
                href="/"
                className="text-[#95D5B2] hover:text-white font-semibold underline transition-colors"
              >
                Miskat Hossain
              </Link>
            </p>
            <p className="text-[11px] text-[#556953] mt-1">
              Web Strategist for Coaches & Authority Brands • miskathossain.net
            </p>
          </div>
        </div>
      </footer>

      {/* ============================================================== */}
      {/* 13. STICKY MOBILE BOTTOM BAR (Instagram Browser UX) */}
      {/* ============================================================== */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0E1510]/95 backdrop-blur-lg border-t border-[#223326] p-3 shadow-2xl flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 min-w-0">
          <div className="relative w-9 h-9 rounded-full overflow-hidden border border-[#52B788] shrink-0">
            <Image
              src="/assets/nepheli/nepheli-avatar.jpg"
              alt="Nepheli"
              fill
              sizes="36px"
              className="object-cover"
            />
          </div>
          <div className="truncate">
            <p className="text-xs font-bold text-white truncate">Nepheli</p>
            <p className="text-[10px] text-[#95D5B2] truncate">Freedom Strategist</p>
          </div>
        </div>

        <button
          onClick={() => {
            setSelectedOffer("audit");
            setIsBookingModalOpen(true);
          }}
          className="bg-[#2D6A4F] active:bg-[#40916C] text-white px-4 py-2 rounded-full text-xs font-bold shrink-0 shadow-md flex items-center gap-1.5"
        >
          <span>Book Audit</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>

      {/* ============================================================== */}
      {/* 14. MODAL: STRATEGY PITCH BREAKDOWN ("Why this converts 4x") */}
      {/* ============================================================== */}
      {isPitchModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#111A13] border border-[#2D6A4F] rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsPitchModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full text-[#70846E] hover:text-white bg-[#18261B] hover:bg-[#223326] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#52B788] mb-2">
              <Lightbulb className="w-4 h-4" />
              <span>Conversion Strategy Behind This Concept</span>
            </div>

            <h3 className="font-serif text-2xl font-bold text-white mb-4">
              Why This Funnel Converts 4x Higher Than Linktree
            </h3>

            <p className="text-xs sm:text-sm text-[#A3B899] mb-6">
              Nepheli, your short-form reels on compound interest and money habits are exceptional. But right now, when an inspired viewer clicks the bio link, they hit a passive link list. Here is how this custom landing page changes the game:
            </p>

            <div className="space-y-4 mb-6">
              <div className="p-4 rounded-xl bg-[#162319] border border-[#253A2A]">
                <h4 className="text-sm font-bold text-white flex items-center gap-2 mb-1">
                  <span className="w-5 h-5 rounded-full bg-[#2D6A4F] text-white flex items-center justify-center text-xs">
                    1
                  </span>
                  Interactive Proof (The Compound Calculator)
                </h4>
                <p className="text-xs text-[#8BA087]">
                  Instead of telling visitors &ldquo;invest early,&rdquo; they can slide their own numbers and watch their portfolio reach $500K+. This builds emotional buy-in before they ever book a call.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#162319] border border-[#253A2A]">
                <h4 className="text-sm font-bold text-white flex items-center gap-2 mb-1">
                  <span className="w-5 h-5 rounded-full bg-[#2D6A4F] text-white flex items-center justify-center text-xs">
                    2
                  </span>
                  Curated Reel Authority Player
                </h4>
                <p className="text-xs text-[#8BA087]">
                  Visitors from Google, Facebook, or referrals can watch your top 6 reels right on the page without getting sucked into Instagram algorithm distractions.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#162319] border border-[#253A2A]">
                <h4 className="text-sm font-bold text-white flex items-center gap-2 mb-1">
                  <span className="w-5 h-5 rounded-full bg-[#2D6A4F] text-white flex items-center justify-center text-xs">
                    3
                  </span>
                  High-Ticket Mentorship Packaging
                </h4>
                <p className="text-xs text-[#8BA087]">
                  Packaging the &ldquo;60-Min Freedom Audit&rdquo; and &ldquo;Private Mentorship&rdquo; with clear deliverables moves you from answering free DMs into closing premium paid clients.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#1C2C20]">
              <p className="text-xs text-[#70846E] text-center sm:text-left">
                Ready to bring this live under your own custom domain?
              </p>
              <Link
                href="https://www.instagram.com/direct/t/17843477123456789"
                onClick={() => setIsPitchModalOpen(false)}
                className="w-full sm:w-auto bg-[#2D6A4F] hover:bg-[#40916C] text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-center"
              >
                Let’s Discuss On Instagram
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* 15. MODAL: BOOKING / CONSULTATION SIMULATOR */}
      {/* ============================================================== */}
      {isBookingModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#121B14] border border-[#2D6A4F] rounded-2xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => {
                setIsBookingModalOpen(false);
                setBookingSuccess(false);
              }}
              className="absolute top-4 right-4 p-2 rounded-full text-[#70846E] hover:text-white bg-[#1A261D]"
            >
              <X className="w-5 h-5" />
            </button>

            {!bookingSuccess ? (
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#52B788] mb-2">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>
                    {selectedOffer === "audit"
                      ? "60-Minute Freedom Audit"
                      : "Private Wealth Mentorship"}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-white mb-2">
                  Book Your Strategic Session
                </h3>
                <p className="text-xs text-[#9BB197] mb-6">
                  Fill in your details below. Nepheli will review your goals and confirm your session time.
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setBookingSuccess(true);
                  }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#A3B899] mb-1.5">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={bookingData.name}
                      onChange={(e) =>
                        setBookingData({ ...bookingData, name: e.target.value })
                      }
                      className="w-full bg-[#18241C] border border-[#26382B] rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#52B788]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#A3B899] mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="sarah@example.com"
                      value={bookingData.email}
                      onChange={(e) =>
                        setBookingData({ ...bookingData, email: e.target.value })
                      }
                      className="w-full bg-[#18241C] border border-[#26382B] rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#52B788]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#A3B899] mb-1.5">
                      Primary Financial Goal
                    </label>
                    <select
                      value={bookingData.goal}
                      onChange={(e) =>
                        setBookingData({ ...bookingData, goal: e.target.value })
                      }
                      className="w-full bg-[#18241C] border border-[#26382B] rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#52B788]"
                    >
                      <option>Start Investing & Understand Compound Growth</option>
                      <option>Build a 6-Month Emergency Cushion</option>
                      <option>Crush Credit Card Debt & Fix Leaks</option>
                      <option>Scale Existing Portfolio Toward Early Retirement</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#A3B899] mb-1.5">
                      Biggest Money Frustration Right Now
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Money slips away every month and I don't know where to start investing..."
                      value={bookingData.biggestFrustration}
                      onChange={(e) =>
                        setBookingData({
                          ...bookingData,
                          biggestFrustration: e.target.value,
                        })
                      }
                      className="w-full bg-[#18241C] border border-[#26382B] rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#52B788]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#2D6A4F] hover:bg-[#40916C] text-white py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-lg hover:scale-[1.02] flex items-center justify-center gap-2 mt-2"
                  >
                    <span>Confirm & Request Strategy Slot</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="w-14 h-14 rounded-full bg-[#1B4332] text-[#52B788] flex items-center justify-center mx-auto mb-4 border border-[#40916C]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-2xl font-bold text-white mb-2">
                  Application Received!
                </h4>
                <p className="text-xs sm:text-sm text-[#A3B899] mb-6">
                  Thank you, <strong>{bookingData.name || "friend"}</strong>. In this live demo concept, your request was simulated successfully. When implemented with Nepheli, this connects straight to Calendly or Google Calendar.
                </p>
                <button
                  onClick={() => {
                    setIsBookingModalOpen(false);
                    setBookingSuccess(false);
                  }}
                  className="bg-[#2D6A4F] text-white px-6 py-2.5 rounded-full text-xs font-semibold"
                >
                  Close Preview
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* 16. MODAL: FREE GUIDE SAMPLE PREVIEW */}
      {/* ============================================================== */}
      {isGuideModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#121B14] border border-[#2D6A4F] rounded-2xl max-w-md w-full p-6 sm:p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => {
                setIsGuideModalOpen(false);
                setGuideSuccess(false);
              }}
              className="absolute top-4 right-4 p-2 rounded-full text-[#70846E] hover:text-white bg-[#1A261D]"
            >
              <X className="w-5 h-5" />
            </button>

            {!guideSuccess ? (
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#52B788] mb-2">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Free Starter Kit</span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-white mb-2">
                  Get The Financial Freedom Playbook
                </h3>
                <p className="text-xs text-[#9BB197] mb-6">
                  Enter your email below to receive the free 14-page Chapter 1: &ldquo;The Compound Curve Blueprint&rdquo; + Index Fund Checklist.
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setGuideSuccess(true);
                  }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#A3B899] mb-1.5">
                      Your Best Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@domain.com"
                      value={guideEmail}
                      onChange={(e) => setGuideEmail(e.target.value)}
                      className="w-full bg-[#18241C] border border-[#26382B] rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#52B788]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#2D6A4F] hover:bg-[#40916C] text-white py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-lg hover:scale-[1.02] flex items-center justify-center gap-2"
                  >
                    <span>Send Me The Playbook</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center py-6">
                <div className="w-12 h-12 rounded-full bg-[#1B4332] text-[#52B788] flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="font-serif text-xl font-bold text-white mb-2">
                  Check Your Inbox!
                </h4>
                <p className="text-xs text-[#9BB197] mb-4">
                  In this demo concept, your guide was queued for delivery. Integrated seamlessly with ConvertKit, Mailchimp, or Beehiiv.
                </p>
                <button
                  onClick={() => {
                    setIsGuideModalOpen(false);
                    setGuideSuccess(false);
                  }}
                  className="bg-[#2D6A4F] text-white px-5 py-2 rounded-full text-xs font-semibold"
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* 17. MODAL: REEL BREAKDOWN VIDEO PLAYER MODAL */}
      {/* ============================================================== */}
      {activeVideoModal !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#121B14] border border-[#2D6A4F] rounded-2xl max-w-lg w-full p-6 relative shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveVideoModal(null)}
              className="absolute top-4 right-4 p-2 rounded-full text-[#70846E] hover:text-white bg-[#1A261D]"
            >
              <X className="w-5 h-5" />
            </button>

            {(() => {
              const r = reelsList.find((x) => x.id === activeVideoModal);
              if (!r) return null;
              return (
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-[#52B788] mb-2">
                    <Flame className="w-3.5 h-3.5" />
                    <span>{r.tag} • {r.views} Views</span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-white mb-3">
                    {r.title}
                  </h3>

                  <div className="aspect-[9/12] max-h-[380px] bg-gradient-to-br from-[#1A2C1F] to-[#0A0D0C] rounded-xl flex flex-col items-center justify-center p-6 text-center border border-[#2B4030] mb-4">
                    <div className="w-16 h-16 rounded-full bg-[#2D6A4F] text-white flex items-center justify-center shadow-xl mb-3 border border-[#52B788]">
                      <Play className="w-7 h-7 ml-1 fill-white" />
                    </div>
                    <p className="text-xs font-semibold text-white mb-1">
                      Instagram Reel Preview
                    </p>
                    <p className="text-[11px] text-[#8BA087] max-w-xs mb-4">
                      &ldquo;{r.hook}&rdquo;
                    </p>
                    <a
                      href="https://www.instagram.com/financialfreedomwithnepheli/reels/"
                      target="_blank"
                      rel="noreferrer"
                      className="bg-[#E1306C] hover:bg-[#C13584] text-white px-5 py-2 rounded-full text-xs font-bold tracking-wide transition-all shadow-md flex items-center gap-1.5"
                    >
                      <Instagram className="w-3.5 h-3.5" />
                      <span>Watch Full Reel On Instagram</span>
                    </a>
                  </div>

                  <div className="bg-[#18241C] p-3 rounded-lg border border-[#243729] text-xs text-[#C2D6BF]">
                    <strong className="text-[#52B788] block text-[10px] uppercase font-bold tracking-wider mb-1">
                      Key Principle:
                    </strong>
                    {r.takeaway}
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      )}

    </div>
  );
}
