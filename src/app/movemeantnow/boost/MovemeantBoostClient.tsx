"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import confetti from "canvas-confetti";
import {
  Sparkles,
  Calendar,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  X,
  Star,
  ShieldCheck,
  Compass,
  Phone,
  Mail,
  Menu,
  Award,
  Zap,
  Check,
  HelpCircle,
  ExternalLink,
  Target,
  Clock,
  Briefcase,
  Linkedin,
  Send,
  Sliders,
  DollarSign,
  TrendingUp,
  Flame,
  Layers,
  HeartHandshake,
} from "lucide-react";

// Official contact & references
const ORIGINAL_WEBSITE_URL = "https://movemeantnow.com/";
const KOI_RIVERS_LINKEDIN = "https://www.linkedin.com/in/koirivers/?isSelfProfile=false";
const OFFICIAL_EMAIL = "info@movemeantnow.com";
const JOTFORM_ENROLLMENT_URL = "https://pci.jotform.com/form/262160184299057";

interface SprintPhase {
  number: string;
  days: string;
  title: string;
  tagline: string;
  summary: string;
  deliverables: string[];
  keyOutcome: string;
  icon: React.ElementType;
}

const SPRINT_PHASES: SprintPhase[] = [
  {
    number: "01",
    days: "Days 1 – 30",
    title: "The Threshold Audit & Somatic Grounding",
    tagline: "Stop rushing to the next goal. Coach the ending first.",
    summary:
      "When major corporate or personal disruptions hit, human instinct is to frantically grasp for the next title or project. In Phase 1, we pause the panic. We conduct a rigorous audit of what has concluded, regulate the nervous system, and discern where God is placing you rather than where you feel displaced.",
    deliverables: [
      "Comprehensive 360° Threshold Diagnostic Audit",
      "Identification of hidden cognitive loops and decision fatigue triggers",
      "Somatic grounding practices (RYT-informed) for executive composure under stress",
      "Two 60-Minute Deep Dive 1-on-1 Strategy Sessions with Koi Rivers, PCC",
      "Confidential reflection workbook: 'Unpacking What Has Ended'",
    ],
    keyOutcome: "Immediate relief from reactive panic; total clarity on what must be released.",
    icon: Compass,
  },
  {
    number: "02",
    days: "Days 31 – 60",
    title: "Power Moves™ Strategic Architecture",
    tagline: "Reposition your presence, boundary architecture, and calling.",
    summary:
      "Once the foundation is centered, we design your Power Moves. We map out your high-stakes communication strategy, establish uncompromised boundaries between career and personal life, and align your commercial influence with your deeper spiritual calling.",
    deliverables: [
      "Bespoke 'Power Moves Playbook' tailored to your industry and organization",
      "Executive voice and negotiation rehearsal for high-stakes conversations",
      "Boundary blueprint to eliminate calendar contamination and burnout",
      "Two 60-Minute High-Leverage Strategic Coaching Sessions",
      "Priority Voxer/WhatsApp asynchronous voice memo support between calls",
    ],
    keyOutcome: "Unshakeable executive authority and clear strategic positioning with key stakeholders.",
    icon: Target,
  },
  {
    number: "03",
    days: "Days 61 – 90",
    title: "Sustainable Momentum & Legacy Stewardship",
    tagline: "Operationalize your vision and build lasting team culture.",
    summary:
      "A breakthrough is only as good as the systems that sustain it. In the final sprint, we translate your internal clarity into team alignment, measurable quarterly cadences, and an unshakeable forward roadmap for the next 12–24 months.",
    deliverables: [
      "12-Month Executive Forward Horizon & Milestones Roadmap",
      "Team Culture & Alignment Matrix (defining everyday norms over annual retreats)",
      "Leadership Capstone Presentation & Strategic Accountability Framework",
      "Two 60-Minute Capstone & Integration Sessions",
      "Ongoing alumni access to exclusive Movemeant masterminds & retreats",
    ],
    keyOutcome: "A self-sustaining operational rhythm with clear metrics and lasting peace.",
    icon: Flame,
  },
];

const BOOST_FAQS = [
  {
    q: "Who is the 90-Day Movemeant Momentum Boost™ specifically designed for?",
    a: "The Boost is built for executive women, senior corporate directors, non-profit executives, and seasoned coaches who are standing at a critical threshold—such as post-restructuring, career pivots, promotion to C-suite visibility, or calling reconstruction—and need rapid, high-impact alignment without a multi-year commitment.",
  },
  {
    q: "How does the Boost sprint differ from year-long executive advisory?",
    a: "Year-long retainers often move at a leisurely pace. The 90-Day Boost is an intensive sprint. It concentrates deep somatic grounding, the proprietary Power Moves Leadership Framework™, and bi-weekly 1-on-1 strategy sessions into a disciplined 90-day arc to achieve measurable momentum immediately.",
  },
  {
    q: "Is faith required to participate in the Boost Sprint?",
    a: "No. While Coach Koi Rivers is faith-forward and grounds her practice in Christian wisdom and ethical integrity (ICF PCC & CCNI accredited), we honor and serve leaders of all backgrounds. Faith integration is always an invitation, never an imposition.",
  },
  {
    q: "What is the time commitment required each week?",
    a: "Expect to invest approximately 1.5 to 2 hours per week: one 60-minute bi-weekly session, brief reflective exercises in your Power Moves Playbook, and quick asynchronous voice check-ins as real-time challenges arise in your organization.",
  },
  {
    q: "Can my organization sponsor or pay for this sprint?",
    a: "Yes. Many leaders have their 90-Day Boost sponsored through executive professional development, corporate learning budgets, or transition stipends. We provide formal corporate invoices and credential documentation upon request.",
  },
];

export default function MovemeantBoostClient() {
  const [activePhase, setActivePhase] = useState<number>(0);
  const [isApplyOpen, setIsApplyOpen] = useState<boolean>(false);
  const [applySuccess, setApplySuccess] = useState<boolean>(false);
  const [pitchDetailsOpen, setPitchDetailsOpen] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // ROI Calculator states
  const [compLevel, setCompLevel] = useState<number>(185000);
  const [hoursOverthinking, setHoursOverthinking] = useState<number>(8);
  const [decisionStakes, setDecisionStakes] = useState<number>(50000);

  // Calculated values
  const hourlyRate = Math.round(compLevel / 2000);
  const annualCostOfHesitation = Math.round(hourlyRate * hoursOverthinking * 48);
  const reclaimedHoursYearly = hoursOverthinking * 40;
  const strategicRoi = Math.round(annualCostOfHesitation * 1.8 + decisionStakes * 0.4);

  // Form states
  const [applyForm, setApplyForm] = useState({
    name: "",
    email: "",
    phone: "",
    title: "",
    organization: "",
    thresholdStage: "Navigating Career Transition / Executive Exit",
    primaryGoal: "Regain Strategic Focus & High-Stakes Presence",
    notes: "",
  });

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#E5A93C", "#529477", "#F5C467", "#FBF9F5"],
    });
    setApplySuccess(true);
  };

  const resetApplyModal = () => {
    setIsApplyOpen(false);
    setTimeout(() => {
      setApplySuccess(false);
      setApplyForm({
        name: "",
        email: "",
        phone: "",
        title: "",
        organization: "",
        thresholdStage: "Navigating Career Transition / Executive Exit",
        primaryGoal: "Regain Strategic Focus & High-Stakes Presence",
        notes: "",
      });
    }, 300);
  };

  return (
    <div className="min-h-screen bg-[#0B0E14] text-[#E5E0D8] selection:bg-[#E5A93C] selection:text-[#0B0E14] font-sans antialiased overflow-x-hidden">
      {/* ========================================================= */}
      {/* 1. TOP PITCH & REDESIGN RATIONALE BAR                     */}
      {/* ========================================================= */}
      <div className="bg-[#07090E] text-[#B8B2A7] border-b border-white/[0.08] text-xs py-2.5 px-4 relative z-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2.5">
          <div className="flex items-center gap-2.5 text-center md:text-left flex-wrap justify-center">
            <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-[#E5A93C] animate-ping" />
            <span className="font-medium text-white/95">
              Specialized Sub-Page: <strong className="text-[#E5A93C]">The Movemeant Momentum Boost™</strong>
            </span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span className="text-white/70">
              For <strong className="text-white">Koi Rivers, PCC</strong> & Movemeant
            </span>
            <span className="hidden sm:inline text-white/20">•</span>
            <Link
              href="/movemeantnow"
              className="text-[#E5A93C] hover:underline flex items-center gap-1 font-semibold"
            >
              <ArrowLeft className="w-3 h-3" />
              Back to Main Flagship (/movemeantnow)
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setPitchDetailsOpen(!pitchDetailsOpen)}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#161B26] hover:bg-[#202737] text-[#E5A93C] font-medium transition-all border border-[#E5A93C]/30 text-[11px]"
            >
              <Zap className="w-3 h-3 text-[#E5A93C]" />
              <span>{pitchDetailsOpen ? "Hide Sub-Page Architecture" : "Sub-Page UX Architecture"}</span>
              {pitchDetailsOpen ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </button>
            <a
              href={ORIGINAL_WEBSITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-[#A39E93] hover:text-white flex items-center gap-1 transition-colors"
            >
              Compare Live Site
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Expandable Blueprint */}
        {pitchDetailsOpen && (
          <div className="max-w-7xl mx-auto mt-3 pt-3 border-t border-white/10 pb-2 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-[11px]">
              <div className="p-3.5 rounded-xl bg-[#121622] border border-[#E5A93C]/20">
                <div className="font-bold text-white flex items-center gap-1.5 mb-1">
                  <Target className="w-3.5 h-3.5 text-[#E5A93C]" />
                  Dedicated High-Intent Funnel
                </div>
                <p className="text-[#A39E93] leading-relaxed">
                  Provides a dedicated high-converting campaign landing page for corporate leaders needing fast sprint coaching rather than browsing a broad catalog.
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-[#121622] border border-[#E5A93C]/20">
                <div className="font-bold text-white flex items-center gap-1.5 mb-1">
                  <Sliders className="w-3.5 h-3.5 text-[#529477]" />
                  Interactive Generative ROI Engine
                </div>
                <p className="text-[#A39E93] leading-relaxed">
                  Interactive executive calculation dynamically quantifies the cost of leadership hesitation and models real-world executive leverage.
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-[#121622] border border-[#E5A93C]/20">
                <div className="font-bold text-white flex items-center gap-1.5 mb-1">
                  <Clock className="w-3.5 h-3.5 text-[#E08769]" />
                  Curated 90-Day Sprint Cadence
                </div>
                <p className="text-[#A39E93] leading-relaxed">
                  Replaces open-ended ambiguity with structured 30-day phases: The Threshold Audit, Power Moves, and Sustainable Momentum.
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-[#121622] border border-[#E5A93C]/20">
                <div className="font-bold text-white flex items-center gap-1.5 mb-1">
                  <Award className="w-3.5 h-3.5 text-amber-300" />
                  Dual ICF & CCNI Credentialed
                </div>
                <p className="text-[#A39E93] leading-relaxed">
                  Instills immediate corporate confidence by showcasing Koi Rivers' ICF PCC credentials, DEIB Directorship, and Fortune 500 pedigree.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ========================================================= */}
      {/* 2. STICKY SUB-PAGE NAVIGATION                              */}
      {/* ========================================================= */}
      <header className="sticky top-0 z-40 bg-[#0B0E14]/90 backdrop-blur-md border-b border-white/[0.08] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          <Link href="/movemeantnow" className="flex items-center gap-3.5 group">
            <div className="relative h-10 w-40 sm:h-12 sm:w-48 transition-transform group-hover:scale-[1.02]">
              <Image
                src="/assets/movemeant/logo.png"
                alt="Movemeant Coaching and Consultancy Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
            <span className="hidden sm:inline-block px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#E5A93C]/10 text-[#E5A93C] border border-[#E5A93C]/30 tracking-wider uppercase">
              BOOST SPRINT
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#C8C2B7]">
            <a href="#overview" className="hover:text-[#E5A93C] transition-colors py-1">
              Overview
            </a>
            <a href="#roadmap" className="hover:text-[#E5A93C] transition-colors py-1">
              3-Phase Roadmap
            </a>
            <a href="#roi-calculator" className="hover:text-[#E5A93C] transition-colors py-1">
              ROI Calculator
            </a>
            <a href="#deliverables" className="hover:text-[#E5A93C] transition-colors py-1">
              What's Included
            </a>
            <a href="#faqs" className="hover:text-[#E5A93C] transition-colors py-1">
              FAQs
            </a>
            <Link
              href="/movemeantnow"
              className="text-xs px-3 py-1 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-white transition-colors border border-white/10"
            >
              ← Main Flagship
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsApplyOpen(true)}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-gradient-to-r from-[#E5A93C] to-[#D4972A] hover:from-[#F5C467] hover:to-[#E5A93C] text-[#0B0E14] shadow-lg shadow-[#E5A93C]/20 transition-all transform active:scale-95"
            >
              <span>Apply for 90-Day Sprint</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-[#C8C2B7] hover:text-white hover:bg-white/5"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0F141F] border-b border-white/10 px-6 py-5 space-y-3">
            <a
              href="#overview"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-white hover:text-[#E5A93C]"
            >
              Overview
            </a>
            <a
              href="#roadmap"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-white hover:text-[#E5A93C]"
            >
              3-Phase Roadmap
            </a>
            <a
              href="#roi-calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-white hover:text-[#E5A93C]"
            >
              ROI Calculator
            </a>
            <a
              href="#deliverables"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-white hover:text-[#E5A93C]"
            >
              What's Included
            </a>
            <a
              href="#faqs"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-white hover:text-[#E5A93C]"
            >
              FAQs
            </a>
            <Link
              href="/movemeantnow"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-[#E5A93C] font-semibold pt-2 border-t border-white/10"
            >
              ← Back to Main Flagship Site
            </Link>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsApplyOpen(true);
              }}
              className="w-full mt-2 py-3 rounded-full text-center text-xs font-semibold bg-[#E5A93C] text-[#0B0E14]"
            >
              Apply for 90-Day Sprint
            </button>
          </div>
        )}
      </header>

      {/* ========================================================= */}
      {/* 3. HERO SECTION                                           */}
      {/* ========================================================= */}
      <section id="overview" className="relative pt-12 sm:pt-20 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#E5A93C]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-[#529477]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#182030] border border-[#E5A93C]/30 text-[#E5A93C] text-xs font-semibold tracking-wide">
                <Sparkles className="w-3.5 h-3.5" />
                <span>LIMITED TO 5 EXECUTIVE LEADERS PER QUARTER</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-white tracking-tight leading-[1.15]">
                Turn Your Threshold Into Your{" "}
                <span className="font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-[#F5C467] via-[#E5A93C] to-[#E08769]">
                  Greatest Power Move.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#C8C2B7] max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
                An intensive, confidential 90-day executive sprint for senior directors, corporate leaders, and founders standing at a pivotal inflection point. Reclaim your focus, shatter hesitation, and lead with faith-forward authority.
              </p>

              {/* Stat Strip */}
              <div className="grid grid-cols-3 gap-3 pt-2 pb-2 max-w-lg mx-auto lg:mx-0">
                <div className="p-3 rounded-2xl bg-[#121622] border border-white/[0.08] text-center">
                  <div className="text-xl sm:text-2xl font-bold text-[#E5A93C]">90 Days</div>
                  <div className="text-[11px] text-[#A39E93] mt-0.5">Sprint Duration</div>
                </div>
                <div className="p-3 rounded-2xl bg-[#121622] border border-white/[0.08] text-center">
                  <div className="text-xl sm:text-2xl font-bold text-white">6 Calls</div>
                  <div className="text-[11px] text-[#A39E93] mt-0.5">1-on-1 Sessions</div>
                </div>
                <div className="p-3 rounded-2xl bg-[#121622] border border-white/[0.08] text-center">
                  <div className="text-xl sm:text-2xl font-bold text-[#529477]">100%</div>
                  <div className="text-[11px] text-[#A39E93] mt-0.5">Confidential</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <button
                  onClick={() => setIsApplyOpen(true)}
                  className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-semibold bg-gradient-to-r from-[#E5A93C] to-[#D4972A] hover:from-[#F5C467] hover:to-[#E5A93C] text-[#0B0E14] shadow-xl shadow-[#E5A93C]/20 transition-all flex items-center justify-center gap-2 group"
                >
                  <span>Apply for Sprint Qualification</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                <a
                  href="#roi-calculator"
                  className="w-full sm:w-auto px-6 py-4 rounded-full text-sm font-medium bg-[#161B26] hover:bg-[#202737] text-white border border-white/10 transition-all flex items-center justify-center gap-2"
                >
                  <Sliders className="w-4 h-4 text-[#E5A93C]" />
                  <span>Estimate Your Sprint ROI</span>
                </a>
              </div>

              {/* Credential Quote */}
              <div className="pt-4 flex items-center justify-center lg:justify-start gap-3 text-xs text-[#A39E93]">
                <ShieldCheck className="w-4 h-4 text-[#529477] shrink-0" />
                <span>
                  Led directly by <strong>Koi Rivers, PCC</strong> — ICF PCC Credentialed, UC Davis Certified, 2025 Exceptional Woman of Color.
                </span>
              </div>
            </div>

            {/* Right Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md rounded-3xl bg-gradient-to-b from-[#182030] to-[#10141D] border border-[#E5A93C]/30 p-6 sm:p-8 shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#E5A93C]/10 rounded-full blur-2xl" />

                {/* Profile Card Header */}
                <div className="flex items-center gap-4 pb-6 border-b border-white/10">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#E5A93C] shrink-0 shadow-lg">
                    <Image
                      src="/assets/movemeant/koi-rivers-portrait-square.jpg"
                      alt="Koi Rivers, PCC"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-medium text-white">Koi Rivers, PCC</h3>
                    <p className="text-xs text-[#E5A93C]">Founder & Chief Executive Strategist</p>
                    <p className="text-[11px] text-[#A39E93] mt-0.5">Movemeant Coaching and Consultancy</p>
                  </div>
                </div>

                {/* What happens in 90 days */}
                <div className="py-6 space-y-4">
                  <div className="text-xs font-semibold tracking-wider text-white/70 uppercase">
                    Your 90-Day Acceleration Arc
                  </div>

                  <div className="space-y-3 text-xs">
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-[#0B0E14]/60 border border-white/5">
                      <div className="w-6 h-6 rounded-full bg-[#E5A93C]/20 text-[#E5A93C] flex items-center justify-center font-bold text-[11px] shrink-0">
                        1
                      </div>
                      <div>
                        <div className="font-semibold text-white">Dismantle What's Ended</div>
                        <div className="text-[#A39E93] text-[11px] mt-0.5">
                          Unpack the transition, release lingering residue, ground your emotional center.
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-xl bg-[#0B0E14]/60 border border-white/5">
                      <div className="w-6 h-6 rounded-full bg-[#529477]/20 text-[#529477] flex items-center justify-center font-bold text-[11px] shrink-0">
                        2
                      </div>
                      <div>
                        <div className="font-semibold text-white">Architect Your Power Moves</div>
                        <div className="text-[#A39E93] text-[11px] mt-0.5">
                          Design your high-stakes presence, boundary architecture, and commercial trajectory.
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-xl bg-[#0B0E14]/60 border border-white/5">
                      <div className="w-6 h-6 rounded-full bg-[#E08769]/20 text-[#E08769] flex items-center justify-center font-bold text-[11px] shrink-0">
                        3
                      </div>
                      <div>
                        <div className="font-semibold text-white">Lock in Lasting Momentum</div>
                        <div className="text-[#A39E93] text-[11px] mt-0.5">
                          12-month forward roadmap, team culture alignment, and sustainable leadership rhythms.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-2 border-t border-white/10">
                  <button
                    onClick={() => setIsApplyOpen(true)}
                    className="w-full py-3.5 rounded-2xl text-xs font-semibold bg-white/[0.08] hover:bg-[#E5A93C] text-white hover:text-[#0B0E14] transition-all flex items-center justify-center gap-2 border border-white/10 hover:border-[#E5A93C]"
                  >
                    <span>Check Cohort Availability (Only 2 Seats Open)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. THE 3-PHASE ROADMAP                                     */}
      {/* ========================================================= */}
      <section id="roadmap" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0F141F] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5A93C]/10 text-[#E5A93C] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#E5A93C]/20">
              The 90-Day Curriculum
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-white mb-4">
              Three Distinct 30-Day Sprints to Total Executive Mastery
            </h2>
            <p className="text-sm sm:text-base text-[#A39E93]">
              We don't do vague advice. Every 30 days centers on specific milestones, somatic grounding, and tangible deliverables that change how you show up in the boardroom.
            </p>
          </div>

          {/* Phase Tabs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {SPRINT_PHASES.map((phase, idx) => {
              const Icon = phase.icon;
              const isSelected = activePhase === idx;
              return (
                <button
                  key={phase.number}
                  onClick={() => setActivePhase(idx)}
                  className={`p-5 rounded-2xl text-left transition-all border ${
                    isSelected
                      ? "bg-[#182030] border-[#E5A93C] shadow-lg shadow-[#E5A93C]/10"
                      : "bg-[#121622] border-white/[0.06] hover:border-white/20 text-[#A39E93]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-xs font-bold uppercase tracking-wider ${
                        isSelected ? "text-[#E5A93C]" : "text-[#706B62]"
                      }`}
                    >
                      {phase.days}
                    </span>
                    <Icon
                      className={`w-5 h-5 ${isSelected ? "text-[#E5A93C]" : "text-[#706B62]"}`}
                    />
                  </div>
                  <div className={`font-serif text-lg font-medium ${isSelected ? "text-white" : "text-[#C8C2B7]"}`}>
                    Phase {phase.number}: {phase.title}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Phase Deep Dive */}
          {(() => {
            const phase = SPRINT_PHASES[activePhase];
            const Icon = phase.icon;
            return (
              <div className="rounded-3xl bg-[#141A28] border border-white/10 p-6 sm:p-10 shadow-2xl animate-in fade-in duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-7 space-y-5">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full bg-[#E5A93C]/20 text-[#E5A93C] text-xs font-bold">
                        {phase.days}
                      </span>
                      <span className="text-xs text-[#A39E93]">Phase {phase.number} Focus</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-serif text-white font-normal">
                      {phase.title}
                    </h3>
                    <p className="text-sm text-[#E5A93C] font-medium italic">
                      "{phase.tagline}"
                    </p>
                    <p className="text-sm text-[#C8C2B7] leading-relaxed font-light">
                      {phase.summary}
                    </p>

                    <div className="p-4 rounded-2xl bg-[#0B0E14]/80 border border-[#529477]/30 text-xs">
                      <div className="font-semibold text-[#529477] flex items-center gap-1.5 mb-1">
                        <CheckCircle2 className="w-4 h-4" />
                        Key Phase Outcome
                      </div>
                      <p className="text-white/90">{phase.keyOutcome}</p>
                    </div>
                  </div>

                  <div className="lg:col-span-5 bg-[#0B0E14] rounded-2xl p-6 border border-white/10 space-y-4">
                    <div className="text-xs font-semibold tracking-wider text-white uppercase flex items-center gap-2">
                      <Icon className="w-4 h-4 text-[#E5A93C]" />
                      Deliverables Included in Phase {phase.number}
                    </div>

                    <ul className="space-y-3 text-xs text-[#C8C2B7]">
                      {phase.deliverables.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-[#E5A93C] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-4 border-t border-white/10">
                      <button
                        onClick={() => setIsApplyOpen(true)}
                        className="w-full py-3 rounded-xl text-xs font-semibold bg-[#E5A93C] hover:bg-[#F5C467] text-[#0B0E14] transition-colors"
                      >
                        Enroll in 90-Day Boost
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. INTERACTIVE GENERATIVE ROI & LEVERAGE CALCULATOR        */}
      {/* ========================================================= */}
      <section id="roi-calculator" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#529477]/10 text-[#529477] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#529477]/20">
              Interactive Executive Value Model
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-white mb-3">
              Quantify the Cost of Leadership Hesitation
            </h2>
            <p className="text-sm text-[#A39E93]">
              Hesitating at a threshold is not free. When executive leaders spend hours second-guessing decisions or carrying chronic role burnout, the cost compounds rapidly.
            </p>
          </div>

          <div className="rounded-3xl bg-[#121622] border border-white/10 p-6 sm:p-10 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Sliders Input */}
              <div className="lg:col-span-7 space-y-6">
                {/* Compensation Slider */}
                <div>
                  <div className="flex justify-between items-center text-xs mb-2">
                    <span className="font-semibold text-white">Current Compensation / Budget Responsibility</span>
                    <span className="text-[#E5A93C] font-bold text-sm">
                      ${compLevel.toLocaleString()} / yr
                    </span>
                  </div>
                  <input
                    type="range"
                    min="100000"
                    max="500000"
                    step="10000"
                    value={compLevel}
                    onChange={(e) => setCompLevel(Number(e.target.value))}
                    className="w-full h-2 bg-[#0B0E14] rounded-lg appearance-none cursor-pointer accent-[#E5A93C]"
                  />
                  <div className="flex justify-between text-[10px] text-[#706B62] mt-1">
                    <span>$100k</span>
                    <span>$250k</span>
                    <span>$500k+</span>
                  </div>
                </div>

                {/* Overthinking hours */}
                <div>
                  <div className="flex justify-between items-center text-xs mb-2">
                    <span className="font-semibold text-white">Hours Spent in Overthinking / Reactive Friction</span>
                    <span className="text-[#529477] font-bold text-sm">
                      {hoursOverthinking} hrs / week
                    </span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="20"
                    step="1"
                    value={hoursOverthinking}
                    onChange={(e) => setHoursOverthinking(Number(e.target.value))}
                    className="w-full h-2 bg-[#0B0E14] rounded-lg appearance-none cursor-pointer accent-[#529477]"
                  />
                  <div className="flex justify-between text-[10px] text-[#706B62] mt-1">
                    <span>2 hrs</span>
                    <span>10 hrs</span>
                    <span>20 hrs/week</span>
                  </div>
                </div>

                {/* Stakes slider */}
                <div>
                  <div className="flex justify-between items-center text-xs mb-2">
                    <span className="font-semibold text-white">Estimated Value of Your Next Pivotal Decision</span>
                    <span className="text-[#E08769] font-bold text-sm">
                      ${decisionStakes.toLocaleString()}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="10000"
                    max="250000"
                    step="5000"
                    value={decisionStakes}
                    onChange={(e) => setDecisionStakes(Number(e.target.value))}
                    className="w-full h-2 bg-[#0B0E14] rounded-lg appearance-none cursor-pointer accent-[#E08769]"
                  />
                  <div className="flex justify-between text-[10px] text-[#706B62] mt-1">
                    <span>$10k</span>
                    <span>$100k</span>
                    <span>$250k+</span>
                  </div>
                </div>

                <div className="text-[11px] text-[#A39E93] italic">
                  * Calculated based on standard 2,000-hour executive work-year, opportunity cost multiplier, and reduced rework overhead.
                </div>
              </div>

              {/* Output Card */}
              <div className="lg:col-span-5 bg-[#0B0E14] rounded-2xl p-6 border border-[#E5A93C]/30 space-y-5">
                <div className="text-xs font-semibold tracking-wider text-[#E5A93C] uppercase flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4" />
                  Your Estimated Leverage Breakdown
                </div>

                <div className="space-y-4">
                  <div className="p-3.5 rounded-xl bg-[#121622] border border-white/5">
                    <div className="text-[11px] text-[#A39E93]">Annual Cost of Role Hesitation</div>
                    <div className="text-2xl font-serif font-bold text-rose-400 mt-0.5">
                      ${annualCostOfHesitation.toLocaleString()}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#121622] border border-white/5">
                    <div className="text-[11px] text-[#A39E93]">Executive Hours Reclaimed Yearly</div>
                    <div className="text-2xl font-serif font-bold text-[#529477] mt-0.5">
                      +{reclaimedHoursYearly} Hours
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#182030] border border-[#E5A93C]/40">
                    <div className="text-[11px] text-[#E5A93C]">Total Strategic Leverage Created</div>
                    <div className="text-3xl font-serif font-bold text-white mt-0.5">
                      ${strategicRoi.toLocaleString()}
                    </div>
                    <div className="text-[10px] text-[#C8C2B7] mt-1">
                      Estimated value in clarity, career velocity, and averted burnout.
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setIsApplyOpen(true)}
                  className="w-full py-3.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-[#E5A93C] to-[#D4972A] hover:from-[#F5C467] hover:to-[#E5A93C] text-[#0B0E14] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#E5A93C]/20"
                >
                  <span>Reclaim Your Momentum Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. WHAT IS INCLUDED IN THE 90-DAY SPRINT                  */}
      {/* ========================================================= */}
      <section id="deliverables" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0F141F] border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-serif text-white mb-3">
              Everything Included in the Boost Sprint
            </h2>
            <p className="text-sm text-[#A39E93]">
              Every touchpoint is designed to protect your time while accelerating breakthrough clarity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#121622] border border-white/[0.08] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#E5A93C]/20 text-[#E5A93C] flex items-center justify-center font-bold">
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-medium text-white">
                Six 1-on-1 Deep Dive Sessions
              </h3>
              <p className="text-xs text-[#A39E93] leading-relaxed">
                Bi-weekly 60-minute confidential virtual sessions with Coach Koi Rivers, PCC. Grounded in both ICF PCC competency standards and faith-forward discernment.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#121622] border border-white/[0.08] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#529477]/20 text-[#529477] flex items-center justify-center font-bold">
                <Send className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-medium text-white">
                Priority Voice & Text Access
              </h3>
              <p className="text-xs text-[#A39E93] leading-relaxed">
                Direct Voxer/WhatsApp asynchronous voice memo access between sessions. Never sit on a high-stakes board dilemma or team crisis alone.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#121622] border border-white/[0.08] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#E08769]/20 text-[#E08769] flex items-center justify-center font-bold">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-medium text-white">
                Bespoke Power Moves Playbook
              </h3>
              <p className="text-xs text-[#A39E93] leading-relaxed">
                A personalized operating manual for your executive voice, key stakeholder communication, boundary architecture, and promotion positioning.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#121622] border border-white/[0.08] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center font-bold">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-medium text-white">
                The Threshold Course Companion
              </h3>
              <p className="text-xs text-[#A39E93] leading-relaxed">
                Exclusive frameworks and reflection modules from Koi’s ICF & CCNI accredited curriculum: "Coaching Clients Who Come With an Ending, Not a Goal."
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#121622] border border-white/[0.08] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-400/20 text-emerald-300 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-medium text-white">
                Somatic Grounding Practices
              </h3>
              <p className="text-xs text-[#A39E93] leading-relaxed">
                Informed by Koi’s registered yoga teacher (RYT-200) expertise. Techniques to instantly down-regulate panic and maintain composure in tense meetings.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#121622] border border-white/[0.08] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#E5A93C]/20 text-[#E5A93C] flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-medium text-white">
                12-Month Forward Capstone
              </h3>
              <p className="text-xs text-[#A39E93] leading-relaxed">
                A crystallized executive blueprint covering quarterly planning, team alignment matrices, and ongoing spiritual formation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. FREQUENTLY ASKED QUESTIONS                             */}
      {/* ========================================================= */}
      <section id="faqs" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-serif text-white mb-3">
              Frequently Asked Questions About The Boost
            </h2>
            <p className="text-xs sm:text-sm text-[#A39E93]">
              Have questions about qualification, schedules, or company sponsorship?
            </p>
          </div>

          <div className="space-y-4">
            {BOOST_FAQS.map((faq, i) => (
              <div
                key={i}
                className="p-5 sm:p-6 rounded-2xl bg-[#121622] border border-white/[0.08] space-y-2"
              >
                <h3 className="font-serif text-base sm:text-lg font-medium text-white flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#E5A93C] shrink-0" />
                  {faq.q}
                </h3>
                <p className="text-xs sm:text-sm text-[#C8C2B7] leading-relaxed pl-6 font-light">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          {/* Quick return banner */}
          <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-[#182030] to-[#121622] border border-[#E5A93C]/30 text-center space-y-4">
            <h3 className="text-2xl font-serif text-white">
              Ready to Step Across Your Threshold?
            </h3>
            <p className="text-xs sm:text-sm text-[#C8C2B7] max-w-xl mx-auto font-light">
              Limited to 5 leaders per quarter to ensure deep, undivided focus from Coach Koi Rivers. Apply today to reserve your confidential evaluation call.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                onClick={() => setIsApplyOpen(true)}
                className="px-8 py-3.5 rounded-full text-xs font-semibold bg-[#E5A93C] hover:bg-[#F5C467] text-[#0B0E14] shadow-lg shadow-[#E5A93C]/20 transition-all"
              >
                Apply for 90-Day Sprint
              </button>
              <Link
                href="/movemeantnow"
                className="px-6 py-3.5 rounded-full text-xs font-medium text-white hover:text-[#E5A93C] border border-white/10 hover:border-white/20 transition-colors"
              >
                Explore Full Movemeant Catalog
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 8. FOOTER                                                 */}
      {/* ========================================================= */}
      <footer className="border-t border-white/10 bg-[#07090E] py-12 px-4 sm:px-6 lg:px-8 text-xs text-[#A39E93]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="relative h-10 w-36">
              <Image
                src="/assets/movemeant/logo.png"
                alt="Movemeant Coaching and Consultancy"
                fill
                className="object-contain object-left"
              />
            </div>
            <div className="border-l border-white/10 pl-4 text-[11px]">
              <div>5650 Whitelock Pkwy, Suite 130 #1098</div>
              <div>Elk Grove, CA 95757, United States</div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/movemeantnow" className="hover:text-white transition-colors">
              Flagship Overview
            </Link>
            <a
              href={KOI_RIVERS_LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E5A93C] flex items-center gap-1 transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
              Koi Rivers LinkedIn
            </a>
            <a
              href={`mailto:${OFFICIAL_EMAIL}`}
              className="hover:text-[#E5A93C] flex items-center gap-1 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              {OFFICIAL_EMAIL}
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-6 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#706B62]">
          <div>© 2023–2026 Movemeant Coaching and Consultancy. All Rights Reserved.</div>
          <div>UX Redesign & Generative UI Architecture by Miskat Hossain.</div>
        </div>
      </footer>

      {/* ========================================================= */}
      {/* 9. APPLICATION & INTAKE MODAL                              */}
      {/* ========================================================= */}
      {isApplyOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg rounded-3xl bg-[#121622] border border-[#E5A93C]/40 p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
            <button
              onClick={resetApplyModal}
              className="absolute top-5 right-5 p-2 rounded-full text-[#A39E93] hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {applySuccess ? (
              <div className="py-8 text-center space-y-4 animate-in zoom-in-95 duration-200">
                <div className="w-16 h-16 rounded-full bg-[#529477]/20 text-[#529477] flex items-center justify-center mx-auto border border-[#529477]/30">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-medium text-white">
                  Sprint Application Received
                </h3>
                <p className="text-xs sm:text-sm text-[#C8C2B7] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{applyForm.name}</strong>. Coach Koi Rivers and our executive coordination team will review your application within 24 business hours to confirm sprint availability.
                </p>
                <div className="p-4 rounded-2xl bg-[#0B0E14] border border-white/10 text-xs text-[#A39E93]">
                  A calendar invite and brief onboarding diagnostic have been sent to{" "}
                  <span className="text-white font-medium">{applyForm.email}</span>.
                </div>
                <button
                  onClick={resetApplyModal}
                  className="px-6 py-2.5 rounded-full text-xs font-semibold bg-[#E5A93C] text-[#0B0E14] hover:bg-[#F5C467] transition-all"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit} className="space-y-4">
                <div>
                  <span className="text-[11px] font-bold text-[#E5A93C] uppercase tracking-wider">
                    Application Form
                  </span>
                  <h3 className="text-2xl font-serif text-white font-normal mt-0.5">
                    Apply for the 90-Day Boost
                  </h3>
                  <p className="text-xs text-[#A39E93] mt-1 font-light">
                    Confidential evaluation for executive women, directors, and coaches navigating transition.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <div>
                    <label className="block text-xs font-medium text-white/90 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={applyForm.name}
                      onChange={(e) => setApplyForm({ ...applyForm, name: e.target.value })}
                      placeholder="e.g. Maya Chen"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0B0E14] border border-white/10 text-white placeholder-[#706B62] text-xs focus:outline-none focus:border-[#E5A93C]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-white/90 mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={applyForm.email}
                        onChange={(e) => setApplyForm({ ...applyForm, email: e.target.value })}
                        placeholder="maya@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#0B0E14] border border-white/10 text-white placeholder-[#706B62] text-xs focus:outline-none focus:border-[#E5A93C]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-white/90 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={applyForm.phone}
                        onChange={(e) => setApplyForm({ ...applyForm, phone: e.target.value })}
                        placeholder="(555) 000-0000"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#0B0E14] border border-white/10 text-white placeholder-[#706B62] text-xs focus:outline-none focus:border-[#E5A93C]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-white/90 mb-1">
                        Current Title / Role *
                      </label>
                      <input
                        type="text"
                        required
                        value={applyForm.title}
                        onChange={(e) => setApplyForm({ ...applyForm, title: e.target.value })}
                        placeholder="e.g. VP of Marketing / Executive Director"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#0B0E14] border border-white/10 text-white placeholder-[#706B62] text-xs focus:outline-none focus:border-[#E5A93C]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-white/90 mb-1">
                        Organization / Firm
                      </label>
                      <input
                        type="text"
                        value={applyForm.organization}
                        onChange={(e) => setApplyForm({ ...applyForm, organization: e.target.value })}
                        placeholder="e.g. HealthTech Global"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#0B0E14] border border-white/10 text-white placeholder-[#706B62] text-xs focus:outline-none focus:border-[#E5A93C]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-white/90 mb-1">
                      Current Threshold / Transition Stage
                    </label>
                    <select
                      value={applyForm.thresholdStage}
                      onChange={(e) => setApplyForm({ ...applyForm, thresholdStage: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0B0E14] border border-white/10 text-white text-xs focus:outline-none focus:border-[#E5A93C]"
                    >
                      <option value="Navigating Career Transition / Executive Exit">
                        Navigating Career Transition / Executive Exit
                      </option>
                      <option value="Stepping into Greater Scope & Executive Visibility">
                        Stepping into Greater Scope & Executive Visibility
                      </option>
                      <option value="Calling Reconstruction & Spiritual Realignment">
                        Calling Reconstruction & Spiritual Realignment
                      </option>
                      <option value="Team Culture Realignment & Restructuring">
                        Team Culture Realignment & Restructuring
                      </option>
                      <option value="Preventing or Recovering from High-Functioning Burnout">
                        Preventing or Recovering from High-Functioning Burnout
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-white/90 mb-1">
                      What is the primary breakthrough you need in the next 90 days?
                    </label>
                    <textarea
                      rows={2}
                      value={applyForm.notes}
                      onChange={(e) => setApplyForm({ ...applyForm, notes: e.target.value })}
                      placeholder="Share briefly where you currently feel hesitance, tension, or a shift in calling..."
                      className="w-full px-4 py-2 rounded-xl bg-[#0B0E14] border border-white/10 text-white placeholder-[#706B62] text-xs focus:outline-none focus:border-[#E5A93C]"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-[#E5A93C] to-[#D4972A] hover:from-[#F5C467] hover:to-[#E5A93C] text-[#0B0E14] shadow-lg shadow-[#E5A93C]/20 transition-all font-sans"
                  >
                    Submit 90-Day Boost Application
                  </button>
                  <p className="text-[10px] text-center text-[#706B62] mt-2">
                    Strictly confidential. No spam or aggressive sales follow-up.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
