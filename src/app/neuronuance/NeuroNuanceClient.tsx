"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Heart,
  Brain,
  ShieldCheck,
  Award,
  Users,
  User,
  Building2,
  Calendar,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  X,
  Clock,
  Star,
  Activity,
  Zap,
  Check,
  Code2,
  ExternalLink,
  Info,
  Menu,
  Flame,
  Globe2,
  Headphones,
  Compass,
  Layers,
  PhoneCall,
  Mail,
  SlidersHorizontal,
} from "lucide-react";

export default function NeuroNuanceClient() {
  // Navigation & Drawers
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [strategyDrawerOpen, setStrategyDrawerOpen] = useState(false);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [selectedAudience, setSelectedAudience] = useState<"both" | "individuals" | "organizations">("both");
  
  // Hero Visual Toggle (Portrait vs Concept Reference)
  const [heroVisualTab, setHeroVisualTab] = useState<"portrait" | "concept">("portrait");

  // Booking Modal State
  const [bookingType, setBookingType] = useState<"individual" | "organization">("individual");
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [bookingFormData, setBookingFormData] = useState({
    name: "",
    email: "",
    organization: "",
    interest: "Dr. Joe Dispenza NCS Workshop (CYMCNR)",
    message: "",
  });

  // Active FAQ
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // Transformation Readiness Diagnostic State
  const [diagnosticAudience, setDiagnosticAudience] = useState<"individual" | "organization">("individual");
  const [selectedPriority, setSelectedPriority] = useState<string>("stress-patterns");

  const diagnosticPriorities = {
    individual: [
      {
        id: "stress-patterns",
        label: "Repetitive Stress & Emotional Reactivity",
        desc: "Feeling hijacked by habitual stress responses, anxiety, or autoimmune/fatigue cycles.",
        recommendation: "Building Personal Resilience™ + The Coherent Self™ Coaching",
      },
      {
        id: "habit-plateau",
        label: "Breaking Outdated Habits & Self-Doubt",
        desc: "Knowing logically what to do, but unable to break automatic subconscious behavioral loops.",
        recommendation: "Change Your Mind… Create New Results (CYMCNR) Live Online Workshop",
      },
      {
        id: "life-transition",
        label: "Major Life Crossroads & Purpose Alignment",
        desc: "Stepping into a new chapter, career shift, or seeking embodied self-direction.",
        recommendation: "Embodied Leadership Integration (9-Session Journey)",
      },
    ],
    organization: [
      {
        id: "team-burnout",
        label: "Executive Burnout & High-Pressure Strain",
        desc: "Leadership fatigue, diminished innovation, and fragmented strategic focus across teams.",
        recommendation: "HeartMath® Executive Coherence & Stress Diagnostics",
      },
      {
        id: "culture-change",
        label: "Overcoming Resistance to Change",
        desc: "Organizational restructuring or strategic pivot meeting stubborn cultural inertia.",
        recommendation: "In-Person Corporate NCS Workshop: Change Your Mind… Create New Results",
      },
      {
        id: "collective-focus",
        label: "Team Synchronization & Culture Elevation",
        desc: "Creating high-trust, synchronized flow states and psychological safety among key groups.",
        recommendation: "NN | Synced Group Meditation & Coherence Retreats",
      },
    ],
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSubmitted(true);
  };

  const resetBookingModal = () => {
    setIsConsultationModalOpen(false);
    setTimeout(() => {
      setBookingSubmitted(false);
      setBookingFormData({
        name: "",
        email: "",
        organization: "",
        interest: "Dr. Joe Dispenza NCS Workshop (CYMCNR)",
        message: "",
      });
    }, 300);
  };

  // Testimonials data
  const testimonials = [
    {
      name: "Katina Constantinou",
      role: "Principal",
      company: "Sugar",
      type: "organization",
      badge: "Corporate NCS Training",
      quote:
        "Cristi facilitated the NCS training with clarity and care. The experience was engaging, grounded, and easy to apply. I left with a better understanding of myself and practical tools I continue to use in everyday life.",
    },
    {
      name: "Chanelle B",
      role: "Brand Manager",
      company: "Vanguard Eco Solutions",
      type: "organization",
      badge: "Team Leadership Workshop",
      quote:
        "It was refreshing to be taught by someone who truly embodies what they teach. Cristi holds the knowledge but also delivers it with passion and vulnerability. Her presence created real openness across our team.",
    },
    {
      name: "Sandra Rogoza",
      role: "Vice President, Revenue Operations",
      company: "LootzySoft",
      type: "individual",
      badge: "Executive Transformation",
      quote:
        "I applied what I learned to reverse engineer the experience I wanted. Within two months, I attracted my ideal role, in an ideal company, working with ideal people. The neuroscience framework works.",
    },
    {
      name: "Private Coaching Client",
      role: "Founder & Creative Director",
      company: "The Coherent Self™",
      type: "individual",
      badge: "1-on-1 Mentorship",
      quote:
        "Getting the outside-view perspective and answering some tough questions for myself unlocked a clarity I hadn't felt in years. The connection, understanding, and neuro-coherence tools are truly life-altering.",
    },
  ];

  // FAQs
  const faqs = [
    {
      q: "How does NeuroNuance serve both individuals and organizations with the same methodology?",
      a: "Transformation always operates at the level of the human nervous system. Whether an individual is rewiring an ingrained personal habit or an executive team is navigating a massive strategic restructuring, the biological mechanisms are identical: moving from a state of survival, stress, and reactive autopilot into elevated heart-brain coherence, intentional focus, and measurable neuroplasticity. We don't maintain separate methodologies; we apply the same scientific rigor through tailored individual coaching or collaborative team workshops.",
    },
    {
      q: "What is Dr. Joe Dispenza's 'Change Your Mind… Create New Results' (CYMCNR) program?",
      a: "CYMCNR is the official corporate and professional curriculum developed by Dr. Joe Dispenza and delivered globally exclusively by certified NeuroChangeSolutions (NCS) consultants like Cristi Trudgeon. It combines cutting-edge neuroscience, brainwave models, mental rehearsal exercises, and practical behavioral frameworks to help participants move beyond past programming and create new, sustainable outcomes.",
    },
    {
      q: "What makes HeartMath® coherence different from standard mindfulness?",
      a: "While mindfulness often focuses on cognitive awareness, HeartMath® focuses on physiological coherence—the synchronization between your heart rhythm pattern (HRV), autonomic nervous system, and brain chemistry. Using clinically validated biofeedback techniques, Cristi teaches clients how to regulate stress chemistry in real time, shifting from cortisol depletion to high-performance focus and emotional renewal.",
    },
    {
      q: "Can this redesign be natively implemented on Squarespace 7.1?",
      a: "Yes, 100%. Every single section in this proposed architecture has been deliberately structured to map directly to Squarespace 7.1's Fluid Engine. It uses native Squarespace Grid containers, standard Section Dividers, Squarespace Form Blocks (fixing the current newsletter storage error on the live site), Squarespace Accordions, and native Calendly/Acuity embed blocks without requiring brittle custom plugins.",
    },
    {
      q: "What are the options for booking workshops or individual coaching?",
      a: "Individuals can book single private sessions ($110 USD) or structured packages like The Coherent Self™ (6 sessions, $600 USD) and open online NCS workshops. Organizations can arrange private in-person or virtual team workshops, customized executive coherence retreats, and synced group meditation sessions by scheduling a 15-minute consultation.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF9] text-[#221B28] font-sans antialiased selection:bg-[#7E4C9F] selection:text-white">
      {/* ========================================================================= */}
      {/* 1. STRATEGIC PITCH BANNER (Specially prepared for Cristi Trudgeon)         */}
      {/* ========================================================================= */}
      <div className="bg-gradient-to-r from-[#3B1953] via-[#4A2067] to-[#2E1242] border-b border-[#7E4C9F]/30 text-white py-2.5 px-4 text-xs font-medium tracking-wide">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#8E52B7]/30 text-[#E7D6F5] text-[11px] font-semibold border border-[#B385D6]/40 uppercase tracking-wider">
              <Sparkles className="w-3 h-3 text-[#D8B4F8]" /> Squarespace 7.1 Architecture
            </span>
            <span className="hidden md:inline text-purple-200/80">
              Interactive Redesign Proposal for Cristi Trudgeon • NeuroNuance Inc.
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setStrategyDrawerOpen(true)}
              className="inline-flex items-center gap-1.5 text-xs text-[#E9D9F8] hover:text-white font-semibold underline decoration-[#B385D6]/60 underline-offset-4 transition-colors"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#D8B4F8]" />
              <span>View Dual-Audience Strategy Blueprint</span>
            </button>
            <span className="text-white/20">|</span>
            <Link
              href="/"
              target="_blank"
              className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/[0.08] hover:bg-white/[0.15] text-[#E7D6F5] hover:text-white text-[11px] border border-white/10 transition-all"
            >
              <span>Designed by Miskat</span>
              <ArrowUpRight className="w-3 h-3 text-[#D8B4F8]" />
            </Link>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. STICKY HEADER (Squarespace Header Component)                           */}
      {/* ========================================================================= */}
      <header className="sticky top-0 z-40 bg-[#FDFBF9]/95 backdrop-blur-md border-b border-[#EDE5F2] transition-all shadow-[0_2px_20px_-4px_rgba(74,32,103,0.06)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Logo & Brand Identity */}
          <Link href="/neuronuance" className="flex items-center gap-3 shrink-0 group">
            <div className="relative w-12 h-12 rounded-xl bg-white border border-[#E4D6ED] p-1 shadow-sm group-hover:border-[#7E4C9F] transition-all overflow-hidden flex items-center justify-center">
              <Image
                src="/assets/neuronuance/logo.png"
                alt="NeuroNuance Inc. Logo"
                width={80}
                height={80}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div>
              <span className="block font-serif text-lg sm:text-xl font-bold tracking-tight text-[#3B1953] group-hover:text-[#67338A] transition-colors">
                NeuroNuance<span className="text-[#8E52B7] font-normal"> Inc.</span>
              </span>
              <span className="block text-[10px] sm:text-[11px] tracking-wider uppercase text-[#7E6A8C] font-semibold">
                Where Science Meets Spirit
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#483B52]">
            <a href="#the-bridge" className="hover:text-[#67338A] transition-colors">
              The Unified Method
            </a>
            <a href="#offerings" className="hover:text-[#67338A] transition-colors">
              Workshops & Coaching
            </a>
            <a href="#cymcnr" className="hover:text-[#67338A] transition-colors flex items-center gap-1.5">
              <span>NCS Training</span>
              <span className="px-1.5 py-0.5 rounded text-[10px] bg-[#EFE7F6] text-[#67338A] font-semibold border border-[#DCBDEE]">
                Dr. Joe Dispenza
              </span>
            </a>
            <a href="#heartmath" className="hover:text-[#67338A] transition-colors">
              HeartMath®
            </a>
            <a href="#about" className="hover:text-[#67338A] transition-colors">
              Meet Cristi
            </a>
            <a href="#testimonials" className="hover:text-[#67338A] transition-colors">
              Client Results
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => setIsConsultationModalOpen(true)}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#532675] to-[#71399B] hover:from-[#431B61] hover:to-[#5E2B85] text-white text-sm font-semibold shadow-md shadow-purple-900/15 transition-all hover:shadow-lg hover:shadow-purple-900/25 active:scale-[0.98] inline-flex items-center gap-2"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#3B1953] hover:bg-[#F3EBF7]"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#EDE5F2] bg-white px-4 py-6 space-y-4 shadow-xl">
            <div className="grid gap-3 text-base font-medium text-[#3B1953]">
              <a
                href="#the-bridge"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 hover:bg-[#FAF4FC] rounded-lg"
              >
                The Unified Method
              </a>
              <a
                href="#offerings"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 hover:bg-[#FAF4FC] rounded-lg"
              >
                Workshops & Coaching
              </a>
              <a
                href="#cymcnr"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 hover:bg-[#FAF4FC] rounded-lg"
              >
                Dr. Joe Dispenza NCS Curriculum
              </a>
              <a
                href="#heartmath"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 hover:bg-[#FAF4FC] rounded-lg"
              >
                HeartMath® Coherence
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 hover:bg-[#FAF4FC] rounded-lg"
              >
                Meet Cristi Trudgeon
              </a>
              <a
                href="#testimonials"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 hover:bg-[#FAF4FC] rounded-lg"
              >
                Client Testimonials
              </a>
            </div>
            <div className="pt-4 border-t border-[#EDE5F2] flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsConsultationModalOpen(true);
                }}
                className="w-full py-3 rounded-full bg-[#532675] text-white text-center font-semibold text-sm shadow-md"
              >
                Book Free Consultation
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setStrategyDrawerOpen(true);
                }}
                className="w-full py-2.5 rounded-full border border-[#B385D6] text-[#532675] font-semibold text-xs text-center"
              >
                View Strategy Blueprint
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ========================================================================= */}
      {/* 3. HERO SECTION (Solving Cristi's Core Dual-Audience Challenge)            */}
      {/* ========================================================================= */}
      <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#F9F4FC] via-[#FDFBF9] to-white">
        {/* Subtle Decorative Ambient Glows */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#DFCDF0]/40 via-[#F1E4FA]/30 to-[#E4D5F2]/40 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Client Challenge Callout Card (Shows Miskat understand her exact problem) */}
          <div className="mb-10 bg-gradient-to-r from-[#FAF2FD] to-[#F5EBF9] border border-[#DCBEEF] rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#532675] text-white flex items-center justify-center shrink-0 mt-0.5">
                <Sparkles className="w-5 h-5 text-[#E7D6F5]" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#67338A] block">
                  The Core Design Solution
                </span>
                <p className="text-xs sm:text-sm text-[#44354F] mt-0.5 leading-relaxed">
                  <span className="font-semibold text-[#291738]">Cristi's Objective:</span>{" "}
                  <em>
                    "How to make it immediately clear that NeuroNuance serves both individuals and organizations without making the two feel like separate sides of the business."
                  </em>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0 self-end md:self-auto">
              <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white text-[#532675] border border-[#DCBEEF]">
                Unified Human Biology Framework
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Headline, Dual-Audience Selector, Value Prop */}
            <div className="lg:col-span-7 space-y-6">
              {/* Credential Badges */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE5F7] text-[#4A2067] border border-[#DAC4ED]">
                  <Brain className="w-3.5 h-3.5 text-[#6B2E96]" />
                  Dr. Joe Dispenza NCS Consultant
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF5FB] text-[#1E5B80] border border-[#C6E2F3]">
                  <Heart className="w-3.5 h-3.5 text-[#2A7BAA]" />
                  HeartMath® Certified Coach
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FBF4E8] text-[#87581B] border border-[#EEDCBE]">
                  <Award className="w-3.5 h-3.5 text-[#B37827]" />
                  Erickson Certified Professional Coach (ECPC)
                </span>
              </div>

              {/* Master Headline */}
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#2B143F] leading-[1.18]">
                Where Science Meets Spirit:{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#592280] via-[#7B3DA8] to-[#9955CA]">
                  Neuroscience for Human & Organizational Growth.
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-[#554661] leading-relaxed max-w-2xl">
                Real, lasting change happens at the nervous system level. Whether you are leading an
                executive team through high-stakes uncertainty or personally breaking free from
                ingrained habit loops, NeuroNuance delivers grounded, measurable neuroplasticity and
                heart-brain coherence.
              </p>

              {/* Interactive Dual-Audience Switcher (The Hero Innovation) */}
              <div className="bg-white rounded-2xl border border-[#E4D5ED] p-2 sm:p-2.5 shadow-sm max-w-xl">
                <div className="grid grid-cols-3 gap-1 p-1 bg-[#F5ECF9] rounded-xl text-xs font-semibold">
                  <button
                    onClick={() => setSelectedAudience("both")}
                    className={`py-2 px-2 sm:px-3 rounded-lg transition-all text-center ${
                      selectedAudience === "both"
                        ? "bg-white text-[#3B1953] shadow-sm font-bold"
                        : "text-[#6B5A79] hover:text-[#3B1953]"
                    }`}
                  >
                    The Unified Vision
                  </button>
                  <button
                    onClick={() => setSelectedAudience("individuals")}
                    className={`py-2 px-2 sm:px-3 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                      selectedAudience === "individuals"
                        ? "bg-white text-[#3B1953] shadow-sm font-bold"
                        : "text-[#6B5A79] hover:text-[#3B1953]"
                    }`}
                  >
                    <User className="w-3.5 h-3.5 text-[#7E4C9F]" />
                    <span>For Individuals</span>
                  </button>
                  <button
                    onClick={() => setSelectedAudience("organizations")}
                    className={`py-2 px-2 sm:px-3 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                      selectedAudience === "organizations"
                        ? "bg-white text-[#3B1953] shadow-sm font-bold"
                        : "text-[#6B5A79] hover:text-[#3B1953]"
                    }`}
                  >
                    <Building2 className="w-3.5 h-3.5 text-[#7E4C9F]" />
                    <span>For Organizations</span>
                  </button>
                </div>

                {/* Dynamic Content Panel based on Selector */}
                <div className="p-3 sm:p-4 text-xs sm:text-sm text-[#463852] mt-1 space-y-2">
                  {selectedAudience === "both" && (
                    <div className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-full bg-[#EFE5F7] text-[#67338A] flex items-center justify-center shrink-0 mt-0.5">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <p>
                        <strong className="text-[#2F1345]">One Unified Foundation:</strong>{" "}
                        Teams are made of individuals; individuals shape collective culture. We use the
                        same proven neuroscience, mental rehearsal, and HeartMath coherence models across both paths.
                      </p>
                    </div>
                  )}

                  {selectedAudience === "individuals" && (
                    <div className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-full bg-[#FAF0FD] text-[#67338A] flex items-center justify-center shrink-0 mt-0.5">
                        <User className="w-4 h-4" />
                      </div>
                      <p>
                        <strong className="text-[#2F1345]">Personal Transformation:</strong>{" "}
                        Break free from familiar survival emotions, rewire persistent health/habit barriers,
                        and build emotional self-regulation through <strong>The Coherent Self™</strong> private coaching.
                      </p>
                    </div>
                  )}

                  {selectedAudience === "organizations" && (
                    <div className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-full bg-[#F0F6FC] text-[#1E5B80] flex items-center justify-center shrink-0 mt-0.5">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <p>
                        <strong className="text-[#1E5B80]">Teams & Executive Coherence:</strong>{" "}
                        Empower teams to navigate change without burnout, overcome strategic resistance,
                        and build high-performance synchronized coherence using Dr. Joe Dispenza's corporate NCS curriculum.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* CTA Row */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => setIsConsultationModalOpen(true)}
                  className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#532675] to-[#783FA4] hover:from-[#441B62] hover:to-[#64308C] text-white font-semibold text-sm sm:text-base shadow-lg shadow-purple-950/20 hover:shadow-xl hover:shadow-purple-950/30 transition-all flex items-center gap-2.5 active:scale-[0.98]"
                >
                  <span>Book Free 15-Min Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="#cymcnr"
                  className="px-6 py-3.5 rounded-full bg-white hover:bg-[#F9F4FC] text-[#4A2067] border border-[#DCBEEF] font-semibold text-sm sm:text-base shadow-sm transition-all flex items-center gap-2"
                >
                  <span>Explore NCS Workshops</span>
                </a>
              </div>

              {/* Reassurance Micro-Copy */}
              <div className="flex items-center gap-6 pt-1 text-xs text-[#71617F]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#7E4C9F]" />
                  <span>No obligation conversation</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#7E4C9F]" />
                  <span>Virtual & in-person options</span>
                </div>
              </div>
            </div>

            {/* Right Column: Cristi's Portrait & Visual Comparison Switch */}
            <div className="lg:col-span-5 relative">
              {/* Card Container */}
              <div className="relative rounded-3xl bg-white border border-[#E5D7EE] p-3 shadow-xl shadow-purple-950/5">
                {/* Visual View Switcher (Portrait vs Generated Hero Concept) */}
                <div className="flex items-center justify-between pb-3 px-2 border-b border-[#F0E6F5] mb-3">
                  <span className="text-[11px] uppercase tracking-wider font-bold text-[#67338A]">
                    Hero Visual Architecture
                  </span>
                  <div className="flex items-center gap-1 bg-[#F4ECF8] p-1 rounded-lg text-[11px] font-semibold">
                    <button
                      onClick={() => setHeroVisualTab("portrait")}
                      className={`px-2.5 py-1 rounded-md transition-all ${
                        heroVisualTab === "portrait"
                          ? "bg-white text-[#3B1953] shadow-xs"
                          : "text-[#6E5A7D] hover:text-[#3B1953]"
                      }`}
                    >
                      Authentic Portrait
                    </button>
                    <button
                      onClick={() => setHeroVisualTab("concept")}
                      className={`px-2.5 py-1 rounded-md transition-all ${
                        heroVisualTab === "concept"
                          ? "bg-white text-[#3B1953] shadow-xs"
                          : "text-[#6E5A7D] hover:text-[#3B1953]"
                      }`}
                    >
                      Editorial Concept
                    </button>
                  </div>
                </div>

                {/* Main Media Preview */}
                <div className="relative aspect-[4/4.5] sm:aspect-[4/4.2] rounded-2xl overflow-hidden bg-[#2D143D]">
                  {heroVisualTab === "portrait" ? (
                    <>
                      <Image
                        src="/assets/neuronuance/cristi-portrait.jpg"
                        alt="Cristi Trudgeon - Founder of NeuroNuance Inc."
                        fill
                        className="object-cover object-center"
                        priority
                      />
                      {/* Gradient Overlay for Text Legibility */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#220D30]/90 via-[#220D30]/20 to-transparent" />

                      {/* Content Overlay */}
                      <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                        <span className="inline-block px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-[#F4E9FD] text-[11px] font-medium border border-white/30 mb-2">
                          Founder & Lead Consultant
                        </span>
                        <h3 className="font-serif text-2xl font-bold text-white tracking-wide">
                          Cristi Trudgeon
                        </h3>
                        <p className="text-xs text-purple-200/90 mt-1 leading-snug">
                          Certified NeuroChangeSolutions Consultant • HeartMath® Coach • Erickson Certified Professional Coach
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <Image
                        src="/assets/neuronuance/hero-concept.jpg"
                        alt="NeuroNuance Editorial Concept - Where Science Meets Spirit"
                        fill
                        className="object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#220D30]/90 via-transparent to-transparent" />
                      <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                        <span className="inline-block px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-[#F4E9FD] text-[11px] font-medium border border-white/30 mb-2">
                          Editorial Visual Reference
                        </span>
                        <h3 className="font-serif text-xl font-bold text-white">
                          Where Science Meets Spirit
                        </h3>
                        <p className="text-xs text-purple-200/90 mt-1">
                          Neural pathways & heart coherence woven into executive modern space.
                        </p>
                      </div>
                    </>
                  )}
                </div>

                {/* Floating Social Proof Chip */}
                <div className="mt-3 p-3 bg-[#FAF5FD] rounded-xl border border-[#E9D8F2] flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-1.5">
                      <div className="w-6 h-6 rounded-full bg-[#532675] text-white flex items-center justify-center font-bold text-[10px]">
                        KC
                      </div>
                      <div className="w-6 h-6 rounded-full bg-[#7B3DA8] text-white flex items-center justify-center font-bold text-[10px]">
                        CB
                      </div>
                      <div className="w-6 h-6 rounded-full bg-[#2A7BAA] text-white flex items-center justify-center font-bold text-[10px]">
                        SR
                      </div>
                    </div>
                    <span className="font-medium text-[#463852]">
                      Trusted by leaders at <strong className="text-[#3B1953]">Sugar, Vanguard, LootzySoft</strong>
                    </span>
                  </div>
                  <div className="flex items-center text-amber-500 text-xs">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. THE UNIFIED BRIDGE: WHY ONE BUSINESS SERVES BOTH (The Core Innovation) */}
      {/* ========================================================================= */}
      <section id="the-bridge" className="py-20 bg-white border-y border-[#EDE3F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#7E4C9F]">
              The Core Philosophy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2E1442] tracking-tight">
              One Biology. Two Applications. Infinite Potential.
            </h2>
            <p className="text-base sm:text-lg text-[#5D4E68] leading-relaxed">
              Why do individuals and organizations thrive under the exact same NeuroNuance methodology?
              Because an organization is simply an interconnected network of human nervous systems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {/* Pillar 1 */}
            <div className="p-7 rounded-2xl bg-[#FCFAFE] border border-[#E9DAF2] hover:border-[#B385D6] transition-all hover:shadow-md space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#EFE3F7] text-[#532675] flex items-center justify-center">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#2E1442]">
                1. The Neuroscience of Change
              </h3>
              <p className="text-sm text-[#5D4E68] leading-relaxed">
                95% of who we are by age 35 is a memorized set of behaviors, emotional reactions, and
                subconscious beliefs. Whether breaking personal anxiety or corporate inertia, we teach
                participants how to step out of familiar brainwave states and physically rewire neural networks.
              </p>
              <div className="pt-2 text-xs font-semibold text-[#7E4C9F] flex items-center gap-1">
                <span>Applied in: CYMCNR Workshops & 1-on-1 Sessions</span>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="p-7 rounded-2xl bg-[#FCFAFE] border border-[#E9DAF2] hover:border-[#B385D6] transition-all hover:shadow-md space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#EAF3FA] text-[#1E5B80] flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#2E1442]">
                2. Heart-Brain Coherence
              </h3>
              <p className="text-sm text-[#5D4E68] leading-relaxed">
                Stress floods the bloodstream with cortisol and adrenaline, shutting down creative problem-solving
                in both individuals and executive boardrooms. HeartMath® techniques train you to consciously shift heart rate
                variability (HRV), unlocking cognitive clarity, stamina, and intuitive foresight.
              </p>
              <div className="pt-2 text-xs font-semibold text-[#1E5B80] flex items-center gap-1">
                <span>Applied in: HeartMath® Diagnostics & Resilience</span>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="p-7 rounded-2xl bg-[#FCFAFE] border border-[#E9DAF2] hover:border-[#B385D6] transition-all hover:shadow-md space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#FCF3EB] text-[#A25F18] flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#2E1442]">
                3. Collective Flow & Synchronization
              </h3>
              <p className="text-sm text-[#5D4E68] leading-relaxed">
                When people meditate or work together in a state of shared physiological coherence,
                communication friction drops and collective intelligence soars. Our synced group experiences
                harmonize individuals into a shared, high-trust frequency.
              </p>
              <div className="pt-2 text-xs font-semibold text-[#A25F18] flex items-center gap-1">
                <span>Applied in: NN | Synced Meditation & Corporate Offsites</span>
              </div>
            </div>
          </div>

          {/* Side-by-Side Pathway Clarity Matrix */}
          <div className="mt-16 bg-gradient-to-br from-[#F8F2FA] to-[#FDFCFE] rounded-3xl border border-[#DFCEEC] p-6 sm:p-10">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#67338A]">
                Dual Pathway Architecture
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2E1442] mt-1">
                Two Clear Doors. One Transformational Standard.
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-[#E3D3EB]">
              {/* Left Door: Individuals */}
              <div className="space-y-4 md:pr-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#532675] text-white flex items-center justify-center">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-bold text-[#2E1442]">
                      For Individuals & Leaders
                    </h4>
                    <p className="text-xs text-[#73637F]">Personal mastery, habit transformation & inner resilience</p>
                  </div>
                </div>
                <ul className="space-y-2.5 text-sm text-[#4E4158] pt-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#7E4C9F] shrink-0 mt-0.5" />
                    <span><strong>The Coherent Self™:</strong> Private 1-on-1 coaching packages (3, 6, or 9 sessions).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#7E4C9F] shrink-0 mt-0.5" />
                    <span><strong>Open CYMCNR Workshops:</strong> Live virtual training with interactive breakout exercises.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#7E4C9F] shrink-0 mt-0.5" />
                    <span><strong>Stress & Well-Being Assessment:</strong> HeartMath diagnostic with custom report.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#7E4C9F] shrink-0 mt-0.5" />
                    <span><strong>Supported Coaching Places:</strong> Sliding-scale access for those experiencing financial limits.</span>
                  </li>
                </ul>
                <div className="pt-2">
                  <a
                    href="#offerings"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#532675] hover:text-[#783FA4] uppercase tracking-wider"
                  >
                    <span>View Individual Packages</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Right Door: Organizations */}
              <div className="space-y-4 pt-6 md:pt-0 md:pl-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#1E5B80] text-white flex items-center justify-center">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-bold text-[#2E1442]">
                      For Teams & Organizations
                    </h4>
                    <p className="text-xs text-[#73637F]">Culture change, executive coherence & synchronized performance</p>
                  </div>
                </div>
                <ul className="space-y-2.5 text-sm text-[#4E4158] pt-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1E5B80] shrink-0 mt-0.5" />
                    <span><strong>Corporate NCS Training:</strong> In-person or virtual Change Your Mind… Create New Results.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1E5B80] shrink-0 mt-0.5" />
                    <span><strong>Executive Coherence Strategy:</strong> Tailored leadership coaching for C-suite & VP teams.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1E5B80] shrink-0 mt-0.5" />
                    <span><strong>NN | Synced Group Meditation:</strong> Immersive audio experiences for team offsites & summits.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1E5B80] shrink-0 mt-0.5" />
                    <span><strong>Custom Group Pricing:</strong> Volume materials, bespoke scheduling & post-training integration.</span>
                  </li>
                </ul>
                <div className="pt-2">
                  <button
                    onClick={() => setIsConsultationModalOpen(true)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1E5B80] hover:text-[#2A7BAA] uppercase tracking-wider"
                  >
                    <span>Request Organization Proposal</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. DR. JOE DISPENZA'S NCS WORKSHOPS (CYMCNR) FEATURE SECTION               */}
      {/* ========================================================================= */}
      <section id="cymcnr" className="py-20 bg-gradient-to-b from-white via-[#FAF5FC] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Workshop Details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFE5F7] text-[#532675] text-xs font-bold uppercase tracking-wider border border-[#DAC4ED]">
                <Brain className="w-4 h-4 text-[#7E4C9F]" />
                Official NeuroChangeSolutions Program
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2A113E] tracking-tight leading-tight">
                Change Your Mind… <br />
                <span className="text-[#6D2F9B]">Create New Results.</span>
              </h2>

              <p className="text-base sm:text-lg text-[#554761] leading-relaxed">
                Developed by global neuroscientist and author <strong>Dr. Joe Dispenza</strong>, this groundbreaking
                curriculum translates complex brain science into practical, everyday tools. Personally trained by Dr. Joe,
                Cristi guides participants step-by-step through the process of rewiring habits and mastering mental rehearsal.
              </p>

              {/* What You Gain Grid */}
              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white border border-[#E7D7F0] space-y-1.5 shadow-xs">
                  <div className="flex items-center gap-2 font-bold text-sm text-[#2A113E]">
                    <Sparkles className="w-4 h-4 text-[#7E4C9F]" />
                    <span>Demystifying Neuroscience</span>
                  </div>
                  <p className="text-xs text-[#63546F] leading-relaxed">
                    Understand brainwaves (Beta, Alpha, Theta) and how automatic memory networks keep you bound to past habits.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#E7D7F0] space-y-1.5 shadow-xs">
                  <div className="flex items-center gap-2 font-bold text-sm text-[#2A113E]">
                    <Heart className="w-4 h-4 text-[#7E4C9F]" />
                    <span>Mental Rehearsal Mastery</span>
                  </div>
                  <p className="text-xs text-[#63546F] leading-relaxed">
                    Condition your neurological architecture for new outcomes before physical manifestation occurs.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#E7D7F0] space-y-1.5 shadow-xs">
                  <div className="flex items-center gap-2 font-bold text-sm text-[#2A113E]">
                    <Zap className="w-4 h-4 text-[#7E4C9F]" />
                    <span>Stress Chemistry Regulation</span>
                  </div>
                  <p className="text-xs text-[#63546F] leading-relaxed">
                    Move immediately from chronic survival reactivity to high-clarity creative coherence.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#E7D7F0] space-y-1.5 shadow-xs">
                  <div className="flex items-center gap-2 font-bold text-sm text-[#2A113E]">
                    <Users className="w-4 h-4 text-[#7E4C9F]" />
                    <span>Post-Training Integration</span>
                  </div>
                  <p className="text-xs text-[#63546F] leading-relaxed">
                    Includes physical workbook, official journal, and <strong>two 1-on-1 private coaching sessions</strong>.
                  </p>
                </div>
              </div>

              {/* CTAs & Registration Info */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setIsConsultationModalOpen(true)}
                  className="px-6 py-3 rounded-full bg-[#532675] hover:bg-[#431B61] text-white text-sm font-semibold shadow-md transition-all flex items-center gap-2"
                >
                  <span>Apply for Next Training</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <span className="text-xs text-[#6E5D7D]">
                  Open to both individual professionals & corporate teams.
                </span>
              </div>
            </div>

            {/* Right Column: Pricing & Format Card */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-gradient-to-br from-[#35154D] via-[#481E67] to-[#260C38] text-white p-6 sm:p-8 shadow-2xl relative overflow-hidden">
                {/* Decorative background glow */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#9345D0]/20 rounded-full blur-2xl" />

                <div className="relative space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[#EBD7FC] text-xs font-semibold border border-white/20">
                      Standard Curriculum
                    </span>
                    <span className="text-xs text-purple-200">2-Day Intensive</span>
                  </div>

                  <div>
                    <span className="text-xs uppercase tracking-wider text-purple-200 block">
                      Live Virtual or In-Person Workshop
                    </span>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="font-serif text-4xl sm:text-5xl font-bold text-white">$600</span>
                      <span className="text-purple-200 text-sm font-medium">USD / participant</span>
                    </div>
                    <p className="text-xs text-purple-200/80 mt-1">
                      (Contact Cristi directly for organization and team volume pricing)
                    </p>
                  </div>

                  <div className="space-y-3 pt-2 border-t border-white/15 text-xs sm:text-sm text-purple-100">
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#D8B4F8] shrink-0 mt-0.5" />
                      <span>Full 2-Day live training facilitated by Cristi Trudgeon</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#D8B4F8] shrink-0 mt-0.5" />
                      <span>Official NCS 30-Day Genius Journal & Participant Manual</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#D8B4F8] shrink-0 mt-0.5" />
                      <span>Dr. Joe Dispenza's guided meditation audio models</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#D8B4F8] shrink-0 mt-0.5" />
                      <span><strong>Two 1-on-1 private coaching sessions</strong> included post-training</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#D8B4F8] shrink-0 mt-0.5" />
                      <span>Lifetime access to private CYM-CNR Alumni Coaching ($90/hr)</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => setIsConsultationModalOpen(true)}
                      className="w-full py-3.5 rounded-full bg-white hover:bg-[#FAF4FC] text-[#3B1953] font-bold text-sm text-center shadow-lg transition-all"
                    >
                      Reserve Your Workshop Seat
                    </button>
                    <p className="text-center text-[11px] text-purple-200/70 mt-2">
                      Canadian payments accepted in CAD via Interac e-Transfer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. COMPLETE OFFERINGS MATRIX: INDIVIDUALS & ORGANIZATIONS                  */}
      {/* ========================================================================= */}
      <section id="offerings" className="py-20 bg-white border-t border-[#EDE5F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#7E4C9F]">
              Comprehensive Services
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2A113E] tracking-tight">
              Transformational Journeys Tailored to Your Scale
            </h2>
            <p className="text-base text-[#5D4E68]">
              Transparent investments with flexible options for individuals, emerging leaders, and full corporate teams.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
            {/* Card 1: The Coherent Self (Coaching) */}
            <div className="rounded-3xl bg-[#FCFAFE] border border-[#E7D6F0] p-7 flex flex-col justify-between hover:border-[#9B5BC7] transition-all hover:shadow-lg space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#EFE5F7] text-[#532675] text-xs font-bold uppercase tracking-wider">
                    1-on-1 Coaching
                  </span>
                  <span className="text-xs font-medium text-[#7A6A88]">Individual</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#2A113E]">The Coherent Self™</h3>
                <p className="text-sm text-[#554761] leading-relaxed">
                  A personalized, embodied coaching journey to dismantle limiting subconscious loops,
                  regulate emotional triggers, and establish high-frequency alignment.
                </p>
                <div className="pt-2 border-t border-[#EDE0F4] space-y-2 text-xs text-[#4F4158]">
                  <div className="flex justify-between py-1">
                    <span>Single 75-Min Session:</span>
                    <strong className="text-[#2A113E]">$110 USD</strong>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Coherent Foundations (3 Sessions):</span>
                    <strong className="text-[#2A113E]">$315 USD ($105/ea)</strong>
                  </div>
                  <div className="flex justify-between py-1 bg-[#F5EAF9] px-2 rounded">
                    <span>The Coherent Self (6 Sessions):</span>
                    <strong className="text-[#532675]">$600 USD (Most Popular)</strong>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Leadership Integration (9 Sessions):</span>
                    <strong className="text-[#2A113E]">$855 USD ($95/ea)</strong>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsConsultationModalOpen(true)}
                className="w-full py-3 rounded-full bg-[#532675] hover:bg-[#431B61] text-white text-xs font-bold uppercase tracking-wider transition-all"
              >
                Apply for Coaching
              </button>
            </div>

            {/* Card 2: HeartMath® Resilience & Diagnostics */}
            <div id="heartmath" className="rounded-3xl bg-[#FCFAFE] border border-[#E7D6F0] p-7 flex flex-col justify-between hover:border-[#1E5B80] transition-all hover:shadow-lg space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#EBF5FB] text-[#1E5B80] text-xs font-bold uppercase tracking-wider">
                    Biofeedback & HRV
                  </span>
                  <span className="text-xs font-medium text-[#7A6A88]">Both Paths</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#2A113E]">HeartMath® Services</h3>
                <p className="text-sm text-[#554761] leading-relaxed">
                  Clinically validated protocols to measure, monitor, and master your physiological coherence.
                  Transforms nervous system exhaustion into sustainable mental endurance.
                </p>
                <div className="pt-2 border-t border-[#EDE0F4] space-y-2 text-xs text-[#4F4158]">
                  <div className="flex justify-between py-1 bg-[#EBF5FB]/60 px-2 rounded">
                    <span>Stress & Well-Being Diagnostic:</span>
                    <strong className="text-[#1E5B80]">$50 USD (Report Incl.)</strong>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Building Personal Resilience™:</span>
                    <strong className="text-[#2A113E]">Custom Mentorship</strong>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Science & Practice of Heart Coherence:</span>
                    <strong className="text-[#2A113E]">8-Hour Intensive · $395</strong>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsConsultationModalOpen(true)}
                className="w-full py-3 rounded-full bg-[#1E5B80] hover:bg-[#164764] text-white text-xs font-bold uppercase tracking-wider transition-all"
              >
                Request Assessment
              </button>
            </div>

            {/* Card 3: Organization & Team Immersion */}
            <div className="rounded-3xl bg-[#FCFAFE] border border-[#E7D6F0] p-7 flex flex-col justify-between hover:border-[#8E52B7] transition-all hover:shadow-lg space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#FAF0FD] text-[#67338A] text-xs font-bold uppercase tracking-wider">
                    Teams & Summits
                  </span>
                  <span className="text-xs font-medium text-[#7A6A88]">Organizations</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#2A113E]">Corporate Immersions</h3>
                <p className="text-sm text-[#554761] leading-relaxed">
                  Full corporate workshops and experiential retreats. Unites leadership teams around shared vision,
                  eradicates team burnout, and fosters psychological resilience.
                </p>
                <div className="pt-2 border-t border-[#EDE0F4] space-y-2 text-xs text-[#4F4158]">
                  <div className="flex items-start gap-2 py-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#7E4C9F] shrink-0 mt-0.5" />
                    <span>In-person or virtual CYMCNR corporate delivery</span>
                  </div>
                  <div className="flex items-start gap-2 py-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#7E4C9F] shrink-0 mt-0.5" />
                    <span><strong>NN | Synced Group Meditation</strong> with immersive audio</span>
                  </div>
                  <div className="flex items-start gap-2 py-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#7E4C9F] shrink-0 mt-0.5" />
                    <span>Customized executive coaching & cohort retainers</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsConsultationModalOpen(true)}
                className="w-full py-3 rounded-full bg-gradient-to-r from-[#532675] to-[#783FA4] hover:from-[#431B61] hover:to-[#64308C] text-white text-xs font-bold uppercase tracking-wider transition-all"
              >
                Inquire for Teams
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. INTERACTIVE TRANSFORMATION DIAGNOSTIC (High-Converting Lead Gen)         */}
      {/* ========================================================================= */}
      <section className="py-20 bg-gradient-to-br from-[#F5ECF9] via-[#FAF5FC] to-[#F1E6F7] border-y border-[#E2CEEE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#7E4C9F]">
              Interactive Assessment
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2A113E] tracking-tight">
              Where Are You or Your Team Experiencing Resistance?
            </h2>
            <p className="text-sm sm:text-base text-[#5B4C66]">
              Select your context to discover your optimal starting point with Cristi.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-[#DFCEEC] p-6 sm:p-8 shadow-xl">
            {/* Toggle Audience for Diagnostic */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex p-1 bg-[#F5ECF9] rounded-xl text-xs font-bold">
                <button
                  onClick={() => setDiagnosticAudience("individual")}
                  className={`py-2 px-5 rounded-lg transition-all flex items-center gap-2 ${
                    diagnosticAudience === "individual"
                      ? "bg-[#532675] text-white shadow-sm"
                      : "text-[#625171] hover:text-[#2A113E]"
                  }`}
                >
                  <User className="w-3.5 h-3.5" />
                  <span>I Am an Individual / Leader</span>
                </button>
                <button
                  onClick={() => setDiagnosticAudience("organization")}
                  className={`py-2 px-5 rounded-lg transition-all flex items-center gap-2 ${
                    diagnosticAudience === "organization"
                      ? "bg-[#1E5B80] text-white shadow-sm"
                      : "text-[#625171] hover:text-[#2A113E]"
                  }`}
                >
                  <Building2 className="w-3.5 h-3.5" />
                  <span>I Represent a Team / Company</span>
                </button>
              </div>
            </div>

            {/* Radio Selection Options */}
            <div className="space-y-3">
              {diagnosticPriorities[diagnosticAudience].map((item) => {
                const isSelected = selectedPriority === item.id;
                return (
                  <div
                    key={item.id}
                    onClick={() => setSelectedPriority(item.id)}
                    className={`p-4 sm:p-5 rounded-2xl border cursor-pointer transition-all ${
                      isSelected
                        ? "bg-[#FAF2FD] border-[#8E52B7] shadow-sm"
                        : "bg-white border-[#E8D9F2] hover:border-[#CBB0E3]"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                              isSelected
                                ? "border-[#532675] bg-[#532675]"
                                : "border-gray-300"
                            }`}
                          >
                            {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                          </div>
                          <h4 className="font-bold text-sm sm:text-base text-[#2A113E]">
                            {item.label}
                          </h4>
                        </div>
                        <p className="text-xs sm:text-sm text-[#5D4F68] pl-6">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Recommendation Result */}
            {selectedPriority && (
              <div className="mt-8 p-5 bg-[#F6EEFA] rounded-2xl border border-[#DDC6EE] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#67338A] block">
                    Recommended Pathway
                  </span>
                  <p className="text-sm font-serif font-bold text-[#2A113E] mt-0.5">
                    {
                      diagnosticPriorities[diagnosticAudience].find((p) => p.id === selectedPriority)
                        ?.recommendation
                    }
                  </p>
                </div>
                <button
                  onClick={() => setIsConsultationModalOpen(true)}
                  className="px-5 py-2.5 rounded-full bg-[#532675] hover:bg-[#431B61] text-white text-xs font-bold uppercase tracking-wider shrink-0 transition-all shadow-sm"
                >
                  Discuss This In Consultation →
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. CLIENT RESULTS & SOCIAL PROOF                                           */}
      {/* ========================================================================= */}
      <section id="testimonials" className="py-20 bg-white border-t border-[#EDE5F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#7E4C9F]">
              Client Experiences
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2A113E] tracking-tight">
              In Their Own Words
            </h2>
            <p className="text-sm sm:text-base text-[#5D4E68]">
              Proven impact across leadership teams, corporate brand directors, and individual clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="p-7 sm:p-8 rounded-3xl bg-[#FCFAFE] border border-[#E8D9F2] hover:border-[#B385D6] transition-all hover:shadow-md flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-0.5 rounded-full bg-[#EFE5F7] text-[#532675] text-xs font-semibold">
                      {t.badge}
                    </span>
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-sm sm:text-base text-[#3E3147] italic leading-relaxed">
                    "{t.quote}"
                  </blockquote>
                </div>

                <div className="pt-4 border-t border-[#EFE5F7] flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#532675] to-[#783FA4] text-white flex items-center justify-center font-bold text-xs font-serif">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#2A113E]">{t.name}</h4>
                    <p className="text-xs text-[#71617F]">
                      {t.role} • <span className="font-medium text-[#532675]">{t.company}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. ABOUT CRISTI TRUDGEON: AUTHENTIC FOUNDER STORY                         */}
      {/* ========================================================================= */}
      <section id="about" className="py-20 bg-[#FAF4FC] border-y border-[#E9DAF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left: Cristi's Portrait */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/4.8]">
                <Image
                  src="/assets/neuronuance/cristi-portrait.jpg"
                  alt="Cristi Trudgeon"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 p-4 rounded-2xl bg-white border border-[#DAC3EC] shadow-lg max-w-[240px]">
                <p className="text-xs italic text-[#44364F]">
                  "Strive not to be a success… but rather to be of value."
                </p>
                <span className="text-[10px] text-[#7E4C9F] font-bold block mt-1">
                  — Albert Einstein
                </span>
              </div>
            </div>

            {/* Right: Her Journey */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#7E4C9F]">
                Meet Your Guide
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2A113E] tracking-tight">
                "My Diagnoses Did Not Have to Define My Life."
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-[#574963] leading-relaxed">
                <p>
                  I’m Cristi Trudgeon, founder of NeuroNuance Inc., an Erickson Certified Professional
                  Coach and a Certified NeuroChangeSolutions (NCS) Consultant personally trained by Dr. Joe Dispenza.
                </p>
                <p>
                  My journey into this work began from profound adversity. Living with five diagnosed
                  autoimmune conditions, I had accepted fatigue, pain, and limitation as my permanent cards in life.
                  Then, I watched my sister make an astonishing, rapid transformation through this neuroscience-based
                  curriculum. I had to understand it for myself.
                </p>
                <p>
                  As I applied these principles, I witnessed tangible physical shifts within my own body that challenged
                  everything I thought was biologically set in stone. That awakening ignited my mission: to help leaders,
                  teams, and individuals access their innate neural capacity to recreate their reality.
                </p>
                <p className="text-xs text-[#7A6A88] italic pt-1">
                  Prior to neuro-consulting, Cristi spent over two decades leading operations in high-stakes, high-stress
                  environments—including managing an excavation company, emergency medicine, law, and security.
                </p>
              </div>

              {/* Badges / Credentials */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <div className="px-3.5 py-1.5 rounded-full bg-white border border-[#DFCEEC] text-xs font-semibold text-[#3B1953]">
                  Calgary, Alberta • Serving Globally
                </div>
                <div className="px-3.5 py-1.5 rounded-full bg-white border border-[#DFCEEC] text-xs font-semibold text-[#3B1953]">
                  ICF Credentialed (ECPC)
                </div>
                <div className="px-3.5 py-1.5 rounded-full bg-white border border-[#DFCEEC] text-xs font-semibold text-[#3B1953]">
                  HeartMath® Licensed Mentor
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. FAQS (Built with Squarespace Accordion Specs)                           */}
      {/* ========================================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#7E4C9F]">
              Frequently Asked Questions
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2A113E] tracking-tight">
              Understanding the Work & Engagement Models
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-[#E7D7F0] overflow-hidden transition-all bg-[#FDFBFD]"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-serif font-bold text-base sm:text-lg text-[#2A113E] hover:text-[#67338A] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <div className="w-8 h-8 rounded-full bg-[#F3EAF8] text-[#532675] flex items-center justify-center shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 text-sm sm:text-base text-[#554761] leading-relaxed border-t border-[#EFE3F7] pt-4">
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
      {/* 11. FINAL HIGH-CONVERTING CTA BANNER                                       */}
      {/* ========================================================================= */}
      <section className="py-20 bg-gradient-to-br from-[#3B1953] via-[#522573] to-[#290E3B] text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[#EBD7FC] text-xs font-semibold border border-white/20 uppercase tracking-wider">
            Your Next Chapter Begins Here
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Ready to Bridge Science & Spirit in Your Life or Organization?
          </h2>
          <p className="text-base sm:text-lg text-purple-200/90 max-w-2xl mx-auto leading-relaxed">
            Schedule a complimentary 15-minute consultation with Cristi Trudgeon to explore whether
            individual coaching or team NCS training is your highest-impact next step.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setIsConsultationModalOpen(true)}
              className="px-8 py-4 rounded-full bg-white hover:bg-[#FAF4FC] text-[#3B1953] font-bold text-base shadow-xl transition-all flex items-center gap-2"
            >
              <span>Book Your Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setStrategyDrawerOpen(true)}
              className="px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/30 backdrop-blur-md transition-all flex items-center gap-2"
            >
              <Code2 className="w-4 h-4" />
              <span>How This Builds in Squarespace</span>
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 12. FOOTER (With Fix for the Squarespace Newsletter Storage Bug)           */}
      {/* ========================================================================= */}
      <footer className="bg-[#1C0B28] text-[#D8CEE2] py-14 border-t border-[#341849]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-10">
            {/* Col 1: Identity */}
            <div className="space-y-4 md:col-span-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white p-1">
                  <Image
                    src="/assets/neuronuance/logo.png"
                    alt="NeuroNuance"
                    width={40}
                    height={40}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <span className="block font-serif text-lg font-bold text-white">
                    NeuroNuance Inc.
                  </span>
                  <span className="block text-[10px] text-[#A595B4] uppercase tracking-wider">
                    Where Science Meets Spirit
                  </span>
                </div>
              </div>
              <p className="text-xs text-[#B5A5C4] leading-relaxed max-w-sm">
                Transformational coaching, Dr. Joe Dispenza's Change Your Mind… Create New Results
                workshops, and HeartMath® coherence services for individuals, executive leaders, and organizations.
              </p>
              <p className="text-xs text-[#8E79A1]">
                Calgary, Alberta, Canada • Available globally in-person & virtually
              </p>
            </div>

            {/* Col 2: Navigation */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Programs</h4>
              <ul className="space-y-2 text-xs text-[#B5A5C4]">
                <li><a href="#cymcnr" className="hover:text-white transition-colors">NCS Workshop (CYMCNR)</a></li>
                <li><a href="#offerings" className="hover:text-white transition-colors">The Coherent Self™ Coaching</a></li>
                <li><a href="#heartmath" className="hover:text-white transition-colors">HeartMath® Resilience</a></li>
                <li><a href="#the-bridge" className="hover:text-white transition-colors">Synced Group Meditation</a></li>
              </ul>
            </div>

            {/* Col 3: Clean Newsletter Signup (Replaces the broken Squarespace block) */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Stay Connected</h4>
              <p className="text-xs text-[#B5A5C4]">
                Sign up for Cristi's newsletter with insights on neuroscience, heart coherence, and habit mastery.
              </p>
              <form onSubmit={(e) => { e.preventDefault(); alert("Thank you for subscribing!"); }} className="space-y-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  required
                  className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-xs text-white placeholder-purple-200/50 focus:outline-none focus:border-[#B385D6]"
                />
                <button
                  type="submit"
                  className="w-full py-2 rounded-lg bg-[#783FA4] hover:bg-[#64308C] text-white text-xs font-semibold transition-all"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8E79A1]">
            <p>© {new Date().getFullYear()} NeuroNuance Inc. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <span>Prepared for Cristi Trudgeon</span>
              <span>•</span>
              <Link href="/" target="_blank" className="text-[#D8B4F8] hover:underline">
                Designed & Architected by Miskat Hossain
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* ========================================================================= */}
      {/* 13. STRATEGY BLUEPRINT DRAWER: SQUARESPACE 7.1 IMPLEMENTATION DETAILS     */}
      {/* ========================================================================= */}
      {strategyDrawerOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm flex justify-end animate-in fade-in duration-200">
          <div className="w-full max-w-xl bg-white h-full shadow-2xl overflow-y-auto p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#532675] text-white flex items-center justify-center font-bold text-xs">
                  MH
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-[#2A113E]">
                    Squarespace 7.1 Strategy Blueprint
                  </h3>
                  <p className="text-xs text-gray-500">Prepared by Miskat Hossain for Cristi Trudgeon</p>
                </div>
              </div>
              <button
                onClick={() => setStrategyDrawerOpen(false)}
                className="p-2 text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cristi's exact problem and how this solves it */}
            <div className="p-4 rounded-xl bg-[#F7EFFB] border border-[#DCBEEF] space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#67338A]">
                1. Solving Your Exact Design Challenge
              </h4>
              <p className="text-xs text-[#3E2E4A] leading-relaxed">
                You expressed: <em>"How to make it immediately clear that NeuroNuance serves both individuals and organizations without making the two feel like separate sides of the business."</em>
              </p>
              <p className="text-xs text-[#3E2E4A] leading-relaxed">
                <strong>Our Solution:</strong> Instead of splitting the website into disjointed tabs or separate domains, we unite both under the biological truth: <em>Both an executive team and an individual transform through the same nervous system neuroplasticity.</em> The dual-selector in the hero allows visitors to immediately self-identify while seeing that both draw from Dr. Joe Dispenza's NCS and HeartMath®.
              </p>
            </div>

            {/* Squarespace 7.1 Native Mapping */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-700">
                2. 100% Native Squarespace 7.1 Buildability
              </h4>
              <div className="space-y-2.5 text-xs text-gray-600">
                <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <strong className="text-gray-900 block">Fluid Engine 24-Column Grid:</strong>
                  The hero layout, side-by-side matrices, and program cards are configured using native Squarespace Fluid Engine drag-and-drop block placement.
                </div>
                <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <strong className="text-gray-900 block">Fixing the Live Newsletter Storage Bug:</strong>
                  Your current live website displays: <em>"Newsletter Block: This newsletter signup form needs a storage option."</em> In this redesign, we configure native Google Drive / Mailchimp storage integration in Squarespace's Storage tab so you never lose a lead.
                </div>
                <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <strong className="text-gray-900 block">Acuity / Squarespace Scheduling:</strong>
                  Seamlessly connects to your calendar for booking the free 15-minute consultations, alumni coaching ($90), and private sessions ($110) without manual email back-and-forth.
                </div>
                <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <strong className="text-gray-900 block">Brand Palette Preserved:</strong>
                  Utilizes your authentic corporate violet (`#4A2863`), luminous amethyst (`#783FA4`), and soft neutral slate backgrounds, matching your official logo.
                </div>
              </div>
            </div>

            {/* Next Steps CTA */}
            <div className="pt-4 border-t border-gray-100 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-700">
                Ready to Bring This Live to Squarespace?
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                I can implement this exact high-converting architecture on your existing Squarespace account within 5–7 days, complete with mobile optimization and payment setup.
              </p>
              <button
                onClick={() => {
                  setStrategyDrawerOpen(false);
                  setIsConsultationModalOpen(true);
                }}
                className="w-full py-3 rounded-full bg-[#532675] hover:bg-[#431B61] text-white font-semibold text-xs uppercase tracking-wider shadow-md transition-all"
              >
                Schedule Implementation Call with Miskat
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 14. INTERACTIVE CONSULTATION INTAKE MODAL                                  */}
      {/* ========================================================================= */}
      {isConsultationModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative animate-in zoom-in-95 duration-200">
            <button
              onClick={resetBookingModal}
              className="absolute top-5 right-5 p-2 text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>

            {!bookingSubmitted ? (
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div className="space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#7E4C9F]">
                    Complimentary 15-Minute Call
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#2A113E]">
                    Connect with Cristi Trudgeon
                  </h3>
                  <p className="text-xs text-[#5D4E68]">
                    Explore coaching, Dr. Joe Dispenza's workshops, or organization programs.
                  </p>
                </div>

                {/* Audience Selector in Form */}
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setBookingType("individual")}
                    className={`py-2 px-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                      bookingType === "individual"
                        ? "bg-[#532675] text-white border-[#532675]"
                        : "bg-gray-50 border-gray-200 text-gray-700"
                    }`}
                  >
                    <User className="w-3.5 h-3.5" />
                    <span>For Myself</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setBookingType("organization")}
                    className={`py-2 px-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                      bookingType === "organization"
                        ? "bg-[#1E5B80] text-white border-[#1E5B80]"
                        : "bg-gray-50 border-gray-200 text-gray-700"
                    }`}
                  >
                    <Building2 className="w-3.5 h-3.5" />
                    <span>For My Organization</span>
                  </button>
                </div>

                <div className="space-y-3 pt-2 text-xs">
                  <div>
                    <label className="block font-medium text-gray-700 mb-1">Your Full Name</label>
                    <input
                      type="text"
                      required
                      value={bookingFormData.name}
                      onChange={(e) => setBookingFormData({ ...bookingFormData, name: e.target.value })}
                      placeholder="e.g. Sandra Rogoza"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#7E4C9F]"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={bookingFormData.email}
                      onChange={(e) => setBookingFormData({ ...bookingFormData, email: e.target.value })}
                      placeholder="e.g. sandra@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#7E4C9F]"
                    />
                  </div>

                  {bookingType === "organization" && (
                    <div>
                      <label className="block font-medium text-gray-700 mb-1">Organization / Company Name</label>
                      <input
                        type="text"
                        value={bookingFormData.organization}
                        onChange={(e) => setBookingFormData({ ...bookingFormData, organization: e.target.value })}
                        placeholder="e.g. Vanguard Eco Solutions"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#7E4C9F]"
                      />
                    </div>
                  )}

                  <div>
                    <label className="block font-medium text-gray-700 mb-1">Area of Primary Interest</label>
                    <select
                      value={bookingFormData.interest}
                      onChange={(e) => setBookingFormData({ ...bookingFormData, interest: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#7E4C9F] bg-white"
                    >
                      <option>Dr. Joe Dispenza NCS Workshop (CYMCNR)</option>
                      <option>The Coherent Self™ 1-on-1 Coaching</option>
                      <option>HeartMath® Stress & Well-Being Assessment</option>
                      <option>Corporate / Executive Team Workshop</option>
                      <option>NN | Synced Group Meditation</option>
                      <option>Other / General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-medium text-gray-700 mb-1">What would you like to explore or change?</label>
                    <textarea
                      rows={3}
                      value={bookingFormData.message}
                      onChange={(e) => setBookingFormData({ ...bookingFormData, message: e.target.value })}
                      placeholder="Tell Cristi a little about where you or your team are today..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#7E4C9F] resize-none"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-[#532675] hover:bg-[#431B61] text-white font-bold text-sm shadow-md transition-all"
                  >
                    Request Consultation
                  </button>
                  <p className="text-center text-[10px] text-gray-400 mt-2">
                    No spam. Cristi responds directly within 24 hours.
                  </p>
                </div>
              </form>
            ) : (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#EFE5F7] text-[#532675] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#2A113E]">
                  Consultation Request Received
                </h3>
                <p className="text-xs sm:text-sm text-[#5D4E68] max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong>{bookingFormData.name || "friend"}</strong>. Your inquiry regarding{" "}
                  <strong>{bookingFormData.interest}</strong> has been received. Cristi will follow up shortly to arrange your 15-minute session.
                </p>
                <div className="pt-4">
                  <button
                    onClick={resetBookingModal}
                    className="px-6 py-2.5 rounded-full bg-[#532675] text-white text-xs font-bold"
                  >
                    Close Window
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
