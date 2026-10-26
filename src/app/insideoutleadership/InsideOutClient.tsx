"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Calendar,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  X,
  Star,
  Users,
  MessageSquare,
  ShieldCheck,
  Heart,
  Compass,
  Phone,
  Mail,
  Menu,
  Award,
  Zap,
  Check,
  HelpCircle,
  ExternalLink,
  BookOpen,
  Quote,
  Target,
  Layers,
  Globe,
  Clock,
  Briefcase,
  Linkedin,
  Brain,
  Trees,
  Eye,
  Send,
  Building2,
  GraduationCap,
} from "lucide-react";

// Official Links & Information
const ORIGINAL_WEBSITE_URL = "https://www.themindfulleadershiplab.com/";
const DR_FELIPE_LINKEDIN_URL = "https://www.linkedin.com/in/phil-katich/";
const OFFICIAL_EMAIL = "info@themindfulleadershiplab.com";
const MISKAT_WHATSAPP = "https://wa.me/8801825838043";
const MISKAT_LINKEDIN = "https://linkedin.com/in/miskathossain";

interface ProgramOffering {
  id: string;
  name: string;
  tagline: string;
  duration: string;
  sessions: string;
  price: string;
  badge?: string;
  popular?: boolean;
  idealFor: string;
  description: string;
  deliverables: string[];
  ctaText: string;
}

const PROGRAM_OFFERINGS: ProgramOffering[] = [
  {
    id: "discovery",
    name: "Complimentary Discovery Session",
    tagline: "30-Minute Leadership Strategy Diagnostic",
    duration: "30 min",
    sessions: "1 Session",
    price: "Free",
    badge: "Zero Commitment",
    popular: false,
    idealFor: "New & Mid-Level Managers exploring if Inside Out Leadership aligns with their current inflection point.",
    description:
      "A high-value, confidential 30-minute conversation to explore where you currently are as a leader, identify subconscious pressure triggers, and discover practical mindfulness tools that immediately anchor your presence.",
    deliverables: [
      "1-on-1 confidential diagnosis with Dr. Felipe Katich",
      "Identification of your primary high-stakes pressure trigger",
      "Overview of the Four Pillars framework tailored to your team",
      "Clear, actionable recommendation on your next leadership shift",
    ],
    ctaText: "Book Free Discovery Session",
  },
  {
    id: "individual",
    name: "Individual Inside Out Session",
    tagline: "Targeted High-Stakes Tactical Coaching Sprint",
    duration: "40 min",
    sessions: "1 Session",
    price: "$250",
    badge: "Immediate Situational Impact",
    popular: false,
    idealFor: "Leaders navigating an impending difficult conversation, high-visibility board presentation, or acute team conflict.",
    description:
      "A focused 40-minute coaching sprint designed to tackle a specific acute challenge. We untangle emotional noise, map out intentional communication talk tracks, and stabilize your nervous system so you show up grounded and authoritative.",
    deliverables: [
      "Rapid situational deconstruction & emotional regulation protocol",
      "Crucial conversation talk-track & objective clarity",
      "De-escalation tactics for high-friction stakeholders",
      "Post-session action summary & self-regulation prompts",
    ],
    ctaText: "Book 1-on-1 Session ($250)",
  },
  {
    id: "foundation",
    name: "Inside Out Leadership Foundation",
    tagline: "4-Session Core System Transformation",
    duration: "40 min / session",
    sessions: "4 Sessions",
    price: "$1,000",
    badge: "Core Framework",
    popular: false,
    idealFor: "Managers stepping into expanded scope who need a reliable, repeatable inner operating system for leadership.",
    description:
      "Systematically install the Four Pillars of Inside Out Leadership. Move beyond intellectual theory into embodied leadership habits that hold up when complexity and urgency spike in your day-to-day workflow.",
    deliverables: [
      "4 comprehensive 1-on-1 private coaching sessions with Dr. Felipe",
      "Full Four Pillars integration (Self-Awareness, Presence, Emotional Regulation, Intentional Communication)",
      "Custom nervous system regulation toolkit for high-stress meetings",
      "Email & voice note support between sessions for live scenario guidance",
      "Personalized Intentional Leadership Playbook",
    ],
    ctaText: "Enroll in Foundation ($1,000)",
  },
  {
    id: "transformation",
    name: "Lead Under Pressure Transformation Program",
    tagline: "8-Session Executive Mastery & Cultural Impact",
    duration: "40 min / session",
    sessions: "8 Sessions",
    price: "$1,800",
    badge: "Most Popular & Transformational",
    popular: true,
    idealFor: "Senior managers, directors, and emerging executives committed to leading with unwavering poise, trust, and psychological safety.",
    description:
      "Our flagship 8-session executive program. Completely rewire how you lead under pressure. Transform internal self-management into organizational magnetism, leading high-performing teams without succumbing to reactive burnout.",
    deliverables: [
      "8 deep-dive private executive coaching sessions with Dr. Felipe Katich",
      "In-depth 360° behavioral & emotional trigger diagnostic",
      "Mastery of difficult conversations & conflict de-escalation",
      "Psychological safety & team accountability culture architecture",
      "Neuroscience & meditation practices engineered for corporate schedules",
      "Direct priority asynchronous access to Dr. Felipe between sessions",
      "Comprehensive Executive Leadership Capstone & Long-Term Roadmap",
    ],
    ctaText: "Apply for Transformation ($1,800)",
  },
];

const FOUR_PILLARS = [
  {
    step: "Pillar 01",
    title: "Cultivate Self-Awareness",
    tagline: "Notice what's happening before it drives your behavior",
    description:
      "Real leadership begins with recognizing internal patterns before they leak out into reactive behavior. Learn to spot subtle shifts in physical tension, emotional surges, hidden assumptions, and automatic defensive impulses in real time.",
    bulletPoints: [
      "Recognize internal micro-triggers before reacting in high-stakes meetings",
      "Identify the unspoken cognitive biases shaping your decisions under pressure",
      "Distinguish between perceived corporate threat and actual reality",
      "Develop somatic body awareness to stay centered during tension",
    ],
    icon: Eye,
    color: "from-teal-500/20 to-teal-500/5",
    accent: "text-teal-600 dark:text-teal-400",
    border: "border-teal-500/30",
  },
  {
    step: "Pillar 02",
    title: "Be Present",
    tagline: "Stay grounded when pressure and urgency rise",
    description:
      "Instead of letting urgency, chaos, or organizational anxiety hijack your presence, you build the capacity to stay anchored. You become the calming center of gravity in the room when everyone else is spiraling.",
    bulletPoints: [
      "Anchor your nervous system in the midst of organizational chaos",
      "Create a conscious pause between external stimulus and your spoken response",
      "Filter out surface-level hysteria to focus on high-leverage outcomes",
      "Project steady, unflappable executive composure to your team",
    ],
    icon: Compass,
    color: "from-emerald-500/20 to-emerald-500/5",
    accent: "text-emerald-600 dark:text-emerald-400",
    border: "border-emerald-500/30",
  },
  {
    step: "Pillar 03",
    title: "Regulate Emotions",
    tagline: "Choose your response instead of being driven by reaction",
    description:
      "Emotional regulation is not about cold suppression or robotic detachment. It is the sophisticated skill of working with intense frustration, anxiety, and pressure without allowing them to dictate your managerial conduct.",
    bulletPoints: [
      "Master high-stakes de-escalation within yourself before addressing others",
      "Transform defensive frustration into calm, strategic curiosity",
      "Prevent emotional exhaustion, executive burnout, and decision fatigue",
      "Cultivate emotional equilibrium that builds organizational resilience",
    ],
    icon: Brain,
    color: "from-amber-500/20 to-amber-500/5",
    accent: "text-amber-600 dark:text-amber-400",
    border: "border-amber-500/30",
  },
  {
    step: "Pillar 04",
    title: "Intentional Communication",
    tagline: "Shift from defensive positions to courageous clarity and trust",
    description:
      "When internal turmoil is resolved, your speech transforms. Instead of defending your ego or avoiding tough topics, you listen with genuine curiosity, articulate boundaries with warmth, and establish unbreakable psychological safety.",
    bulletPoints: [
      "Conduct uncomfortable, crucial conversations with empathy and firmness",
      "Replace positional defensiveness with active, generative listening",
      "Communicate strategic expectations with unambiguous clarity",
      "Foster team cultures where psychological safety and accountability thrive",
    ],
    icon: MessageSquare,
    color: "from-orange-500/20 to-orange-500/5",
    accent: "text-orange-600 dark:text-orange-400",
    border: "border-orange-500/30",
  },
];

const LEADERSHIP_SCENARIOS = [
  {
    title: "The Messy Tuesday Crisis",
    context: "Executive demands shift suddenly, deadlines compress, and your team is on edge.",
    reactive: "Panicking, firing off reactive Slack messages, snapping at team members, and working late into exhaustion.",
    insideOut: "Pausing for somatic regulation, triaging priorities with grounded presence, and communicating with reassuring clarity that stabilizes the team.",
    metric: "85% reduction in team panic & rework",
  },
  {
    title: "The Difficult Peer Confrontation",
    context: "A cross-functional department head dismisses your project timeline during a leadership sync.",
    reactive: "Becoming instantly defensive, interrupting with sharp counter-arguments, and fostering lingering political resentment.",
    insideOut: "Noticing the internal ego trigger, breathing through the reaction, asking clarifying questions, and addressing the root bottleneck collaboratively.",
    metric: "Preserves key alliances & accelerates outcomes",
  },
  {
    title: "The High-Stakes Upward Presentation",
    context: "Presenting critical quarterly performance metrics to senior VPs who demand immediate answers.",
    reactive: "Imposter syndrome spikes, talking too fast, over-explaining details, and deflecting challenging inquiries defensively.",
    insideOut: "Stepping onto the stage grounded in self-worth, holding silence comfortably, delivering succinct insights, and fielding questions with poise.",
    metric: "Elevates executive presence & promotion readiness",
  },
];

const FAQS = [
  {
    q: "How is Inside Out Leadership different from standard management training?",
    a: "Most corporate leadership seminars teach external tactics—scripted conversation formulas, slide decks, or time-management matrices. But in high-pressure moments, intellectual scripts fly out the window and your nervous system takes over. Inside Out Leadership works from the inside out: we rewire your somatic self-awareness, emotional regulation, and presence first. When your internal state is steady, your external leadership communication becomes effortlessly authentic, clear, and authoritative.",
  },
  {
    q: "Who is this coaching designed for?",
    a: "Dr. Felipe's coaching is tailored specifically for new, mid-level, and emerging executives who are navigating intense competing demands: expectations from senior leadership, direct responsibilities for team performance, cross-functional politics, and high-consequence decisions. If you feel pressure creeping into your emotional reactions or team interactions, this framework is engineered for you.",
  },
  {
    q: "What happens during the complimentary 30-minute discovery session?",
    a: "The discovery call is a focused, 100% confidential strategy session with Dr. Felipe Katich. You will unpack your most pressing current leadership challenge, uncover the subconscious reaction patterns holding you back, and experience the Four Pillars framework firsthand. You will leave with tangible takeaways regardless of whether you choose to enroll in a formal program.",
  },
  {
    q: "I am already overwhelmed with meetings—how much time does this take?",
    a: "Inside Out Leadership is designed by a seasoned executive with over two decades of corporate experience; it is built specifically for time-starved leaders. 1-on-1 sessions are focused 40-minute deep dives. The mindfulness and regulation practices are micro-interventions (taking 60 seconds to 3 minutes) that integrate directly into your workday—before a tough meeting, during email triage, or between high-stakes presentations.",
  },
  {
    q: "Can my employer or organization sponsor this coaching program?",
    a: "Yes, absolutely! The majority of Dr. Felipe's clients utilize their corporate Professional Development, Executive Coaching, or Leadership Training allowances. Dr. Felipe provides formal invoices, program syllabi, and documentation tailored to enterprise HR and learning budgets.",
  },
  {
    q: "What credentials and methodology does Dr. Felipe Katich bring?",
    a: "Dr. Felipe holds a Doctorate (Ed.D.) in Organizational Change and Leadership from the University of Southern California (USC), an MBA, and a Master of Science in Leadership Science. He also maintains professional certifications in Executive Coaching, Mindful Leadership, Neuroscience, and Meditation. He bridges rigorous academic theory with over two decades of real-world boardroom leadership.",
  },
];

export default function InsideOutClient() {
  // Navigation & UI state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pitchDetailsOpen, setPitchDetailsOpen] = useState(false);
  const [activePillar, setActivePillar] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [heroPhoto, setHeroPhoto] = useState<"summit" | "portrait">("summit");

  // Booking Modal State
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<string>("discovery");
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    company: "",
    challenge: "",
    preferredTime: "Morning (9am - 12pm EST)",
  });

  // Interactive Pressure Diagnostic State
  const [diagnosticChallenge, setDiagnosticChallenge] = useState<string>("difficult_conversations");
  const [diagnosticResult, setDiagnosticResult] = useState<boolean>(true);

  const openBookingWithProgram = (programId: string) => {
    setSelectedProgram(programId);
    setIsBookingOpen(true);
    setBookingSuccess(false);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccess(true);
  };

  const resetBookingModal = () => {
    setIsBookingOpen(false);
    setTimeout(() => {
      setBookingSuccess(false);
      setBookingForm({
        name: "",
        email: "",
        phone: "",
        role: "",
        company: "",
        challenge: "",
        preferredTime: "Morning (9am - 12pm EST)",
      });
    }, 300);
  };

  return (
    <div className="min-h-screen bg-[#071321] text-[#E2E8F0] selection:bg-[#0D9488] selection:text-white font-sans antialiased overflow-x-hidden">
      {/* ========================================================= */}
      {/* 1. TOP PITCH & REDESIGN RATIONALE BAR                     */}
      {/* ========================================================= */}
      <div className="bg-[#050B14] text-[#CBD5E1] border-b border-[#1E293B] text-xs py-2.5 px-4 relative z-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2.5">
          <div className="flex items-center gap-2.5 text-center md:text-left">
            <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-[#14B8A6] animate-ping" />
            <span className="font-medium text-white/95">
              Digital Flagship Concept for <strong className="text-white">Dr. Felipe Katich</strong>
            </span>
            <span className="hidden sm:inline text-teal-300/40">•</span>
            <span className="hidden sm:inline text-slate-300">
              Inside Out Leadership™ UX Redesign by <strong className="text-teal-400">Miskat Hossain</strong>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setPitchDetailsOpen(!pitchDetailsOpen)}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0F2D3C] hover:bg-[#133D52] text-teal-300 font-medium transition-all border border-teal-500/30 text-[11px]"
            >
              <Zap className="w-3 h-3 text-[#F97316]" />
              <span>{pitchDetailsOpen ? "Hide Redesign Blueprint" : "Why Upgrade from Wix?"}</span>
              {pitchDetailsOpen ? (
                <ChevronUp className="w-3 h-3" />
              ) : (
                <ChevronDown className="w-3 h-3" />
              )}
            </button>
            <a
              href={ORIGINAL_WEBSITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
            >
              Compare Live Wix Site
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Expandable Pitch Rationale */}
        {pitchDetailsOpen && (
          <div className="max-w-7xl mx-auto mt-3 pt-3 border-t border-slate-800 pb-2 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-[11px]">
              <div className="p-3.5 rounded-xl bg-[#0B1A2C]/80 border border-teal-500/20 backdrop-blur-sm">
                <div className="font-bold text-white flex items-center gap-1.5 mb-1">
                  <Zap className="w-3.5 h-3.5 text-[#F97316]" />
                  Sub-Second Speed & Modern UX
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Replaces bloated Wix template scripts with blazing-fast Next.js architecture, instant navigation, and buttery smooth transitions.
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-[#0B1A2C]/80 border border-teal-500/20 backdrop-blur-sm">
                <div className="font-bold text-white flex items-center gap-1.5 mb-1">
                  <Award className="w-3.5 h-3.5 text-teal-400" />
                  Premium C-Suite Gravitas
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Elevates Dr. Felipe's USC Doctorate, MBA, and 20+ years executive background into an authoritative, world-class personal brand.
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-[#0B1A2C]/80 border border-teal-500/20 backdrop-blur-sm">
                <div className="font-bold text-white flex items-center gap-1.5 mb-1">
                  <Target className="w-3.5 h-3.5 text-emerald-400" />
                  High-Converting Booking Engine
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Direct interactive intake diagnostic, transparent program tiering, and frictionless discovery call booking without clunky Wix widgets.
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-[#0B1A2C]/80 border border-teal-500/20 backdrop-blur-sm">
                <div className="font-bold text-white flex items-center gap-1.5 mb-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-300" />
                  Authentic Visual Storytelling
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Seamlessly weaves Dr. Felipe's real travel photography (Chile, Guatemala, Peru) into an inspiring journey from boardroom to human mastery.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ========================================================= */}
      {/* 2. STICKY LUXURY NAVIGATION                               */}
      {/* ========================================================= */}
      <header className="sticky top-0 z-40 bg-[#071321]/90 backdrop-blur-md border-b border-[#1E293B] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Logo brand */}
          <Link href="#hero" className="flex items-center gap-3.5 group">
            <div className="relative h-12 w-48 sm:h-14 sm:w-56 transition-transform group-hover:scale-[1.02]">
              <Image
                src="/images/insideoutleadership/logo.png"
                alt="Inside Out Leadership Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            <Link
              href="#the-shift"
              className="hover:text-teal-400 transition-colors py-1"
            >
              The Shift
            </Link>
            <Link
              href="#four-pillars"
              className="hover:text-teal-400 transition-colors py-1"
            >
              The Four Pillars
            </Link>
            <Link
              href="#programs"
              className="hover:text-teal-400 transition-colors py-1"
            >
              Programs & Pricing
            </Link>
            <Link
              href="#about"
              className="hover:text-teal-400 transition-colors py-1"
            >
              About Dr. Felipe
            </Link>
            <Link
              href="#scenarios"
              className="hover:text-teal-400 transition-colors py-1"
            >
              Real Scenarios
            </Link>
            <Link
              href="#faqs"
              className="hover:text-teal-400 transition-colors py-1"
            >
              FAQs
            </Link>
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`mailto:${OFFICIAL_EMAIL}?subject=Leadership%20Inquiry%20-%20Inside%20Out%20Leadership`}
              className="text-xs font-semibold px-3.5 py-2 text-slate-300 hover:text-white border border-slate-700/80 hover:border-slate-500 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-teal-400" />
              <span>Contact</span>
            </a>
            <button
              onClick={() => openBookingWithProgram("discovery")}
              className="text-xs font-semibold px-4 py-2 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 text-white rounded-lg shadow-lg shadow-teal-900/30 transition-all flex items-center gap-1.5 hover:shadow-teal-500/20 hover:scale-[1.02]"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Discovery Call (Free)</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0A192C] border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 animate-in fade-in duration-200">
            <div className="flex flex-col space-y-2 text-sm font-medium text-slate-300">
              <Link
                href="#the-shift"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 hover:bg-slate-800 rounded-lg hover:text-teal-400"
              >
                The Shift
              </Link>
              <Link
                href="#four-pillars"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 hover:bg-slate-800 rounded-lg hover:text-teal-400"
              >
                The Four Pillars Framework
              </Link>
              <Link
                href="#programs"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 hover:bg-slate-800 rounded-lg hover:text-teal-400"
              >
                Programs & Pricing
              </Link>
              <Link
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 hover:bg-slate-800 rounded-lg hover:text-teal-400"
              >
                About Dr. Felipe Katich
              </Link>
              <Link
                href="#scenarios"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 hover:bg-slate-800 rounded-lg hover:text-teal-400"
              >
                Real Leadership Scenarios
              </Link>
              <Link
                href="#faqs"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 hover:bg-slate-800 rounded-lg hover:text-teal-400"
              >
                Frequently Asked Questions
              </Link>
            </div>
            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openBookingWithProgram("discovery");
                }}
                className="w-full py-2.5 bg-teal-500 hover:bg-teal-400 text-white font-semibold text-center rounded-lg shadow-md flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Book Free Discovery Call (30 min)
              </button>
              <a
                href={`mailto:${OFFICIAL_EMAIL}`}
                className="w-full py-2.5 border border-slate-700 text-slate-300 hover:text-white text-center rounded-lg text-sm flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4 text-teal-400" />
                {OFFICIAL_EMAIL}
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ========================================================= */}
      {/* 3. HERO SECTION: EXECUTIVE AUTHORITY & CLARITY            */}
      {/* ========================================================= */}
      <section
        id="hero"
        className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden border-b border-[#1E293B]"
      >
        {/* Background glow effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-teal-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[450px] h-[350px] bg-[#F97316]/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0E2439] border border-teal-500/30 text-teal-300 text-xs font-semibold tracking-wide shadow-sm">
                <Trees className="w-3.5 h-3.5 text-teal-400" />
                <span>Inside Out Leadership™ • Executive & Mindful Coaching</span>
              </div>

              {/* Core Hero Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-bold text-white tracking-tight leading-[1.15]">
                The quality of your leadership on the{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-teal-200 to-emerald-400">
                  outside
                </span>{" "}
                begins with the quality of your leadership on the{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FB923C] via-[#F97316] to-[#EA580C]">
                  inside.
                </span>
              </h1>

              {/* Subtitle / Value Prop */}
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                How you lead yourself under pressure shapes how you lead others. I help new and mid-level managers turn internal awareness and emotional regulation into intentional leadership—so you can lead with calm clarity, unwavering confidence, and deep trust.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={() => openBookingWithProgram("discovery")}
                  className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 text-white font-semibold rounded-xl shadow-xl shadow-teal-950/50 hover:shadow-teal-500/25 transition-all flex items-center justify-center gap-2.5 group hover:scale-[1.02]"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book 30-Min Discovery Session</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
                <Link
                  href="#four-pillars"
                  className="w-full sm:w-auto px-6 py-3.5 border border-slate-700 hover:border-teal-500/50 bg-[#0B1A2C]/60 hover:bg-[#0E2239] text-slate-200 hover:text-white font-medium rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  <Compass className="w-4 h-4 text-teal-400" />
                  <span>Explore The 4 Pillars</span>
                </Link>
              </div>

              {/* Micro Trust Indicators */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-slate-400 border-t border-slate-800/80">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  <span>30-Min Complimentary Discovery</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  <span>100% Confidential 1:1 Advisory</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  <span>Neuroscience & Meditation Backed</span>
                </div>
              </div>
            </div>

            {/* Right Media Column (5 cols) */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden border-2 border-teal-500/30 shadow-2xl shadow-teal-950/60 bg-gradient-to-b from-[#0F243A] to-[#081524] group">
                <Image
                  src={
                    heroPhoto === "summit"
                      ? "/images/insideoutleadership/dr_felipe_hero.jpg"
                      : "/images/insideoutleadership/dr_felipe_chile.jpg"
                  }
                  alt="Dr. Felipe Katich - Executive Mindful Leadership Coach"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  priority
                />

                {/* Subtle photo toggle button on top right */}
                <div className="absolute top-3.5 right-3.5 z-20 flex items-center bg-[#071321]/85 backdrop-blur-md p-1 rounded-full border border-teal-500/30 text-[10px]">
                  <button
                    onClick={() => setHeroPhoto("summit")}
                    className={`px-2.5 py-1 rounded-full transition-all ${
                      heroPhoto === "summit"
                        ? "bg-teal-500 text-white font-semibold shadow-sm"
                        : "text-slate-300 hover:text-white"
                    }`}
                  >
                    Expedition
                  </button>
                  <button
                    onClick={() => setHeroPhoto("portrait")}
                    className={`px-2.5 py-1 rounded-full transition-all ${
                      heroPhoto === "portrait"
                        ? "bg-teal-500 text-white font-semibold shadow-sm"
                        : "text-slate-300 hover:text-white"
                    }`}
                  >
                    Close-Up
                  </button>
                </div>

                {/* Subtle bottom gradient overlay for card readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050E18] via-[#050E18]/30 to-transparent pointer-events-none" />

                {/* Ambient accent border glow */}
                <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10 pointer-events-none" />

                {/* Floating Verified Credentials Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#091A2E]/90 border border-teal-500/30 backdrop-blur-md text-white shadow-xl space-y-1.5 z-10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-teal-300">
                        Lead Coach & Founder
                      </span>
                    </div>
                    <span className="text-[11px] px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 font-mono">
                      USC Ed.D.
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white flex items-center justify-between">
                    <span>Dr. Felipe (Phil) Katich</span>
                    <span className="text-xs font-normal text-teal-400">Houston, TX</span>
                  </h3>
                  <p className="text-xs text-slate-300 leading-snug">
                    Doctor of Organizational Change & Leadership (USC) • MBA • 20+ Yrs Executive Leadership
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Metric Bar Below Hero */}
          <div className="mt-16 pt-8 border-t border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-2xl bg-[#0A1A2E]/50 border border-slate-800/80">
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-300">
                20+ Years
              </div>
              <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
                Enterprise & Boardroom Leadership
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-[#0A1A2E]/50 border border-slate-800/80">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">
                USC Doctorate
              </div>
              <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
                Organizational Change & Leadership
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-[#0A1A2E]/50 border border-slate-800/80">
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FB923C] to-[#EA580C]">
                4 Pillars
              </div>
              <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
                Repeatable High-Stakes Framework
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-[#0A1A2E]/50 border border-slate-800/80">
              <div className="text-2xl sm:text-3xl font-extrabold text-teal-300">
                100% Bespoke
              </div>
              <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
                Evidence-Based Mindful Practices
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. THE SHIFT: REACTING VS. RESPONDING                     */}
      {/* ========================================================= */}
      <section id="the-shift" className="py-20 md:py-28 bg-[#091728] border-b border-[#1E293B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#F97316] px-3 py-1 rounded-full bg-[#F97316]/10 border border-[#F97316]/30">
              The Fundamental Core
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Leadership Moments Can Get Hard. <br className="hidden sm:inline" />
              How You Lead Yourself Under Pressure Shapes Everything.
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              When urgency spikes, meetings turn tense, or competing demands press from all directions, what drives your behavior?
              The Inside Out Shift is the bridge from automatic reactive habits to grounded, intentional influence.
            </p>
          </div>

          {/* Side-by-Side Comparison: Reactive vs. Inside Out */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* The Reactive Default */}
            <div className="p-7 sm:p-9 rounded-3xl bg-[#0F1E31]/70 border border-red-500/20 shadow-lg relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
              <div className="space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-xs font-semibold">
                  <X className="w-3.5 h-3.5" />
                  <span>The Reactive Default</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Driven by Knee-Jerk Urgency & Stress
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  When difficult conversations or executive pressure mount, you react reflexively. Tension takes over your physiology, decisions become rushed, and communication becomes defensive.
                </p>
                <ul className="space-y-3 pt-2 text-sm text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✕</span>
                    <span><strong>Defensive Stance:</strong> Prioritizing being right or protecting your position over listening deeply.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✕</span>
                    <span><strong>Emotional Hijack:</strong> Frustration leaks into voice tone, body language, and team interactions.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✕</span>
                    <span><strong>Micromanagement & Burnout:</strong> Compulsively controlling details, leading to exhaustion and low team autonomy.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✕</span>
                    <span><strong>Team Erosion:</strong> Psychological safety diminishes; team members hesitate to bring bad news.</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-red-500/20 text-xs text-red-300/80 font-medium">
                Result: Short-term coping that erodes long-term leadership credibility.
              </div>
            </div>

            {/* The Inside Out Shift */}
            <div className="p-7 sm:p-9 rounded-3xl bg-gradient-to-b from-[#0E283D] to-[#0A1D2F] border-2 border-teal-500/40 shadow-xl shadow-teal-950/40 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-semibold">
                  <Check className="w-3.5 h-3.5 text-teal-400" />
                  <span>The Inside Out Leadership Shift</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Anchored in Poise, Clarity & Intention
                </h3>
                <p className="text-sm text-slate-200 leading-relaxed">
                  You notice what happens within you before it dictates what you say or do. You create a purposeful space between external pressure and your conscious response.
                </p>
                <ul className="space-y-3 pt-2 text-sm text-slate-200">
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-teal-500/20 text-teal-300 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✓</span>
                    <span><strong>Intentional Response:</strong> Choosing words and actions aligned with long-term strategic values.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-teal-500/20 text-teal-300 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✓</span>
                    <span><strong>Nervous System Regulation:</strong> Remaining physically grounded and calm even when conversations get heated.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-teal-500/20 text-teal-300 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✓</span>
                    <span><strong>Radical Psychological Safety:</strong> Creating space where teams think clearly, take ownership, and collaborate courageously.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-teal-500/20 text-teal-300 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✓</span>
                    <span><strong>Authentic Executive Poise:</strong> Inspiring natural authority that commands respect without demanding it.</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-teal-500/30 text-xs text-teal-300 font-semibold flex items-center justify-between">
                <span>Result: Unshakeable executive presence, higher retention & team trust.</span>
                <span className="text-[#F97316]">★ The Inside Out Shift</span>
              </div>
            </div>
          </div>

          {/* Official Inside Out Shift Matrix Graphic */}
          <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#0B1A2C] border border-teal-500/20 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 shadow-xl">
            <div className="relative w-full md:w-72 aspect-[3/4] rounded-2xl overflow-hidden border border-teal-500/30 bg-white p-3 shrink-0 shadow-lg group">
              <Image
                src="/images/insideoutleadership/inside_out_shift_chart.png"
                alt="The Inside Out Leadership Shift Chart"
                fill
                className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-teal-400">
                Official Leadership Matrix
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                The Seven Core Transitions
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                The foundational matrix developed by Dr. Felipe Katich maps out the exact progression from traditional reactive defaults to mindful, intentional mastery across seven core leadership dimensions.
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-300 pt-1">
                <div className="p-2.5 rounded-lg bg-[#071321] border border-slate-800 flex items-center gap-2">
                  <span className="text-teal-400 font-bold">→</span>
                  <span>Autopilot to <strong>Awareness</strong></span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#071321] border border-slate-800 flex items-center gap-2">
                  <span className="text-teal-400 font-bold">→</span>
                  <span>Reactivity to <strong>Intention</strong></span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#071321] border border-slate-800 flex items-center gap-2">
                  <span className="text-teal-400 font-bold">→</span>
                  <span>Control to <strong>Trust</strong></span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#071321] border border-slate-800 flex items-center gap-2">
                  <span className="text-teal-400 font-bold">→</span>
                  <span>Pressure to <strong>Presence</strong></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. THE FOUR PILLARS FRAMEWORK                             */}
      {/* ========================================================= */}
      <section
        id="four-pillars"
        className="py-20 md:py-32 relative overflow-hidden border-b border-[#1E293B]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-semibold">
              <Compass className="w-3.5 h-3.5" />
              <span>Signature Framework</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              The Four Pillars of Inside Out Leadership™
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Real leadership isn't tested in neat theory—it's tested in the middle of a messy Tuesday.
              The Four Pillars provide four simple, repeatable practices to handle high-stakes moments with steady authority.
            </p>
          </div>

          {/* Interactive Pillars Navigation Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
            {FOUR_PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              const isActive = activePillar === idx;
              return (
                <button
                  key={pillar.step}
                  onClick={() => setActivePillar(idx)}
                  className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-all ${
                    isActive
                      ? "bg-teal-500 text-white shadow-lg shadow-teal-900/50 scale-[1.02]"
                      : "bg-[#0A1A2E] text-slate-300 hover:text-white hover:bg-[#0F2640] border border-slate-800"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{pillar.step}: {pillar.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Pillar Detailed Spotlight */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#091B2F]/90 rounded-3xl p-6 sm:p-10 border-2 border-teal-500/30 shadow-2xl backdrop-blur-md">
            {/* Left Pillar Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-lg bg-teal-500/20 text-teal-300 text-xs font-mono font-bold uppercase tracking-wider">
                  {FOUR_PILLARS[activePillar].step}
                </span>
                <span className="text-xs text-slate-400">
                  Step {activePillar + 1} of 4 in the Framework
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-bold text-white">
                {FOUR_PILLARS[activePillar].title}
              </h3>

              <p className="text-base sm:text-lg text-teal-300/90 font-medium">
                "{FOUR_PILLARS[activePillar].tagline}"
              </p>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {FOUR_PILLARS[activePillar].description}
              </p>

              <div className="space-y-3 pt-2">
                <div className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                  Key Transformational Behaviors:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {FOUR_PILLARS[activePillar].bulletPoints.map((point, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-[#071321]/80 border border-teal-500/15 flex items-start gap-2.5 text-xs text-slate-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={() => openBookingWithProgram("discovery")}
                  className="px-5 py-2.5 bg-teal-500 hover:bg-teal-400 text-white font-semibold text-xs rounded-xl shadow-md flex items-center gap-2 transition-all"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Master This in Coaching</span>
                </button>
                <div className="text-xs text-slate-400">
                  {activePillar < 3 ? (
                    <button
                      onClick={() => setActivePillar(activePillar + 1)}
                      className="hover:text-teal-300 underline font-medium flex items-center gap-1"
                    >
                      Next: {FOUR_PILLARS[activePillar + 1].title} →
                    </button>
                  ) : (
                    <button
                      onClick={() => setActivePillar(0)}
                      className="hover:text-teal-300 underline font-medium"
                    >
                      Back to Pillar 01 ↺
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Right Pillar Graphic / Framework Diagram Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[380px] aspect-square rounded-2xl overflow-hidden border border-teal-500/30 bg-[#071321] p-4 flex flex-col items-center justify-center text-center shadow-inner group">
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <Image
                    src="/images/insideoutleadership/four_pillars_diagram.png"
                    alt="Four Pillars of Inner Growth - Inside Out Leadership"
                    fill
                    className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute bottom-2 left-2 right-2 px-3 py-1.5 rounded-lg bg-[#050C16]/90 border border-teal-500/30 text-[11px] text-teal-200/90 flex items-center justify-between">
                  <span>The Four Pillars Matrix</span>
                  <span className="font-mono text-[10px] text-teal-400">Dr. Felipe Katich</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. INTERACTIVE LEADERSHIP PRESSURE DIAGNOSTIC             */}
      {/* ========================================================= */}
      <section id="assessment" className="py-20 bg-[#06101C] border-b border-[#1E293B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-400 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/25">
              Interactive Self-Check
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Where Is Your Leadership Tested Most?
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Select your primary bottleneck below to see how Inside Out practices rewire your response.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                id: "difficult_conversations",
                title: "Difficult Conversations & Feedback",
                symptom: "Hesitating to deliver direct feedback or getting defensive when challenged by peers.",
                pillar: "Pillar 04: Intentional Communication",
                shift: "Learn to separate identity from feedback, stay curiously grounded, and speak with unwavering clarity that builds mutual respect.",
                recommendedProgram: "individual",
              },
              {
                id: "overwhelm",
                title: "Urgency, Stress & Competing Demands",
                symptom: "Constant calendar fire-drills leading to rushed decisions, irritability, and chronic evening fatigue.",
                pillar: "Pillar 02: Be Present & Somatic Stability",
                shift: "Cultivate the somatic brake pedal. Filter out synthetic urgency so you lead teams with steady, centered perspective.",
                recommendedProgram: "foundation",
              },
              {
                id: "emotional_reactivity",
                title: "Emotional Triggers & Frustration Under Fire",
                symptom: "Internal anger or tension leaks out during meetings, creating regret and damaging trust.",
                pillar: "Pillar 03: Regulate Emotions",
                shift: "Deconstruct your subconscious emotional triggers. Choose purposeful words rather than reactive defenses.",
                recommendedProgram: "transformation",
              },
              {
                id: "team_trust",
                title: "Team Psychological Safety & Accountability",
                symptom: "Team hesitates to take initiative, hides errors, or relies on you for every minor approval.",
                pillar: "Pillar 01 & 04: Self-Awareness & Trust",
                shift: "Transform micromanagement into autonomous trust by examining how your internal anxiety affects team behavior.",
                recommendedProgram: "foundation",
              },
            ].map((card) => {
              const isSelected = diagnosticChallenge === card.id;
              return (
                <div
                  key={card.id}
                  onClick={() => setDiagnosticChallenge(card.id)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all border ${
                    isSelected
                      ? "bg-[#0E253A] border-teal-400 shadow-xl shadow-teal-950/50 scale-[1.01]"
                      : "bg-[#091728] border-slate-800 hover:border-slate-700 hover:bg-[#0B1E33]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-white text-base">{card.title}</h3>
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                        isSelected
                          ? "bg-teal-500 text-white"
                          : "border border-slate-700 text-slate-500"
                      }`}
                    >
                      {isSelected ? "✓" : ""}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                    <strong className="text-slate-200">The Friction:</strong> {card.symptom}
                  </p>

                  <div className="p-3 rounded-xl bg-[#06111D] border border-teal-500/20 space-y-1 text-xs">
                    <div className="text-[11px] font-mono text-teal-400 font-semibold">
                      {card.pillar}
                    </div>
                    <div className="text-slate-300 leading-snug">
                      {card.shift}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                    <span className="text-slate-400">Tailored Pathway:</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openBookingWithProgram(card.recommendedProgram);
                      }}
                      className="text-teal-400 hover:text-teal-300 font-semibold flex items-center gap-1"
                    >
                      Explore Coaching Match →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. PROGRAMS & TRANSPARENT PRICING                         */}
      {/* ========================================================= */}
      <section
        id="programs"
        className="py-20 md:py-32 bg-[#081525] border-b border-[#1E293B] relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-semibold">
              <Award className="w-3.5 h-3.5" />
              <span>Coaching Pathways</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Our Inside Out Leadership™ Programs
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Designed for busy managers who cannot afford fluffy management jargon.
              Direct, evidence-informed 1-on-1 coaching that produces measurable inner poise and team outcomes.
            </p>
          </div>

          {/* 4 Program Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {PROGRAM_OFFERINGS.map((program) => (
              <div
                key={program.id}
                className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all relative ${
                  program.popular
                    ? "bg-gradient-to-b from-[#0F2942] to-[#0A1D30] border-2 border-teal-400 shadow-2xl shadow-teal-950/60 lg:-translate-y-2"
                    : "bg-[#0A1A2E] border border-slate-800 hover:border-slate-700 hover:bg-[#0D2036]"
                }`}
              >
                {/* Popular / Featured Badge */}
                {program.badge && (
                  <div className="mb-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${
                        program.popular
                          ? "bg-[#F97316] text-white shadow-sm"
                          : "bg-teal-500/20 text-teal-300 border border-teal-500/30"
                      }`}
                    >
                      {program.badge}
                    </span>
                  </div>
                )}

                <div className="space-y-4">
                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-xl font-bold text-white">{program.name}</h3>
                    <p className="text-xs text-slate-300 mt-1 font-medium">
                      {program.tagline}
                    </p>
                  </div>

                  {/* Pricing Display */}
                  <div className="py-3 border-y border-slate-800/80 flex items-baseline justify-between">
                    <div>
                      <span className="text-3xl font-extrabold text-white">
                        {program.price}
                      </span>
                      {program.price !== "Free" && (
                        <span className="text-xs text-slate-400 ml-1">USD</span>
                      )}
                    </div>
                    <div className="text-right text-xs text-teal-400 font-mono">
                      <div>{program.sessions}</div>
                      <div className="text-slate-400 text-[11px]">{program.duration}</div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {program.description}
                  </p>

                  {/* Ideal For */}
                  <div className="p-3 rounded-xl bg-[#06111D] border border-slate-800/80 text-[11px] text-slate-300">
                    <strong className="text-white block mb-0.5">Ideal For:</strong>
                    {program.idealFor}
                  </div>

                  {/* Bullet Deliverables */}
                  <div className="space-y-2 pt-2">
                    <div className="text-[11px] uppercase tracking-wider font-semibold text-slate-400">
                      What's Included:
                    </div>
                    {program.deliverables.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-xs text-slate-300 leading-snug"
                      >
                        <Check className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA Button */}
                <div className="pt-6 mt-6 border-t border-slate-800/80">
                  <button
                    onClick={() => openBookingWithProgram(program.id)}
                    className={`w-full py-3 px-4 rounded-xl font-semibold text-xs transition-all flex items-center justify-center gap-2 ${
                      program.popular
                        ? "bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 text-white shadow-lg shadow-teal-950/40 hover:scale-[1.02]"
                        : "bg-slate-800/80 hover:bg-teal-500 hover:text-white text-slate-200 border border-slate-700/80"
                    }`}
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{program.ctaText}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Corporate / Enterprise Note */}
          <div className="mt-12 p-6 rounded-2xl bg-[#091A2C] border border-teal-500/20 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-white flex items-center justify-center sm:justify-start gap-2">
                <Building2 className="w-4 h-4 text-teal-400" />
                Enterprise & Corporate Leadership Sponsorship
              </h4>
              <p className="text-xs text-slate-300">
                Most clients expense these programs via their corporate L&D or Executive Coaching budgets. Formal invoices & W9 documentation provided.
              </p>
            </div>
            <a
              href={`mailto:${OFFICIAL_EMAIL}?subject=Corporate%20Executive%20Coaching%20Inquiry`}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold shrink-0 transition-colors border border-slate-700"
            >
              Request Corporate Invoice
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 8. ABOUT DR. FELIPE: THE HUMAN EXPEDITION                 */}
      {/* ========================================================= */}
      <section
        id="about"
        className="py-20 md:py-32 bg-[#071321] border-b border-[#1E293B] relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Story Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-semibold">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Meet Your Executive Coach</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
                From The Boardroom to Mountain Temples. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-[#F97316]">
                  Real Leadership Starts on the Inside.
                </span>
              </h2>

              <p className="text-base text-slate-300 leading-relaxed">
                After more than two decades of leading and working with executives through intense organizational change, complexity, and high-stakes turnaround, I’ve learned one immutable truth:
                <strong className="text-white"> leadership is how you show up when the pressure is on.</strong>
              </p>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                My leadership journey has taken me from executive boardrooms and large-scale enterprise restructuring to mountain temples and diverse cultures across South America and Central America. Each experience offered a distinctive lens on resilience, self-mastery, and what it truly means to lead with grounded humanity.
              </p>

              {/* Verified Credentials Box */}
              <div className="p-5 rounded-2xl bg-[#0B1A2C] border border-teal-500/25 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-teal-300 flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#F97316]" />
                  Education & Professional Credentials:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                  <div className="flex items-start gap-2">
                    <span className="text-teal-400 font-bold">▪</span>
                    <span><strong>Doctorate (Ed.D.):</strong> Organizational Change and Leadership — University of Southern California (USC)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-teal-400 font-bold">▪</span>
                    <span><strong>Master of Business Administration (MBA):</strong> Strategic Management</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-teal-400 font-bold">▪</span>
                    <span><strong>Master of Science:</strong> Leadership Science</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-teal-400 font-bold">▪</span>
                    <span><strong>Professional Certifications:</strong> Executive Coaching, Mindful Leadership, Applied Neuroscience, and Meditation</span>
                  </div>
                </div>
              </div>

              {/* Quote Block */}
              <blockquote className="p-5 rounded-2xl bg-[#0E243A]/60 border-l-4 border-teal-400 text-sm text-slate-200 italic leading-relaxed space-y-3">
                <p>
                  "Change what happens within you so you can change how you show up—and transform what happens in the room."
                </p>
                <div className="flex items-center justify-between pt-1">
                  <footer className="text-xs font-semibold text-teal-300 not-italic">
                    — Dr. Felipe Katich, Ed.D., MBA
                  </footer>
                  <div className="relative w-28 h-10 invert opacity-90">
                    <Image
                      src="/images/insideoutleadership/signature.png"
                      alt="Dr. Felipe Katich Signature"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </blockquote>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => openBookingWithProgram("discovery")}
                  className="px-6 py-3 bg-teal-500 hover:bg-teal-400 text-white font-semibold text-xs rounded-xl shadow-md transition-all flex items-center gap-2"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Start Your Journey with Dr. Felipe</span>
                </button>
                <a
                  href={DR_FELIPE_LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 rounded-xl border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white text-xs font-semibold transition-colors flex items-center gap-2"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
                  <span>Connect on LinkedIn</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Right Photo Gallery Column (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="grid grid-cols-2 gap-3.5">
                {/* Photo 1: Chile Desert */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-slate-800 group shadow-lg">
                  <Image
                    src="/images/insideoutleadership/dr_felipe_chile.jpg"
                    alt="Dr. Felipe Katich - Atacama Desert, Chile"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 text-[11px] text-white font-medium">
                    <span className="block font-bold text-teal-300">Atacama Desert</span>
                    <span className="text-slate-300 text-[10px]">Chile</span>
                  </div>
                </div>

                {/* Photo 2: Guatemala */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-slate-800 group shadow-lg">
                  <Image
                    src="/images/insideoutleadership/dr_felipe_guatemala.jpeg"
                    alt="Dr. Felipe Katich - Antigua, Guatemala"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 text-[11px] text-white font-medium">
                    <span className="block font-bold text-teal-300">Antigua</span>
                    <span className="text-slate-300 text-[10px]">Guatemala</span>
                  </div>
                </div>

                {/* Photo 3: Machu Picchu Peru */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-slate-800 group shadow-lg">
                  <Image
                    src="/images/insideoutleadership/dr_felipe_peru.jpeg"
                    alt="Dr. Felipe Katich - Machu Picchu, Peru"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 text-[11px] text-white font-medium">
                    <span className="block font-bold text-teal-300">Machu Picchu</span>
                    <span className="text-slate-300 text-[10px]">Peru</span>
                  </div>
                </div>

                {/* Photo 4: Mountaintop Mindfulness */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-slate-800 group shadow-lg">
                  <Image
                    src="/images/insideoutleadership/mountaintop.png"
                    alt="Mountaintop Mindfulness"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 text-[11px] text-white font-medium">
                    <span className="block font-bold text-teal-300">Summit Retreat</span>
                    <span className="text-slate-300 text-[10px]">Inner Presence</span>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#0A1A2E] border border-slate-800 text-center text-[11px] text-slate-400">
                Grounding executive theory with real-world cultural and mindful expeditions.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 9. REAL SCENARIOS: HOW IT SOLVES HARD DAYS               */}
      {/* ========================================================= */}
      <section id="scenarios" className="py-20 md:py-28 bg-[#091728] border-b border-[#1E293B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-400 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/25">
              Practical Applications
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Tested on the Messiest Days
            </h2>
            <p className="text-base text-slate-300">
              See the exact difference Inside Out practices make across everyday corporate leadership bottlenecks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LEADERSHIP_SCENARIOS.map((sc, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-[#0B1C2E] border border-slate-800 hover:border-teal-500/30 transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-teal-400">
                      Scenario 0{idx + 1}
                    </span>
                    <span className="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                      High-Stakes
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white">{sc.title}</h3>

                  <p className="text-xs text-slate-400 italic">
                    "{sc.context}"
                  </p>

                  <div className="space-y-2 pt-2">
                    <div className="p-3 rounded-xl bg-red-950/20 border border-red-900/30 text-xs text-slate-300">
                      <strong className="text-red-400 block mb-0.5">The Reactive Trap:</strong>
                      {sc.reactive}
                    </div>
                    <div className="p-3 rounded-xl bg-teal-950/20 border border-teal-800/30 text-xs text-slate-200">
                      <strong className="text-teal-400 block mb-0.5">The Inside Out Shift:</strong>
                      {sc.insideOut}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 text-xs font-semibold text-teal-300 flex items-center justify-between">
                  <span>Impact: {sc.metric}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-teal-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 10. FREQUENTLY ASKED QUESTIONS                            */}
      {/* ========================================================= */}
      <section id="faqs" className="py-20 md:py-28 bg-[#071321] border-b border-[#1E293B]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-400 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/25">
              Clarifications & Details
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Clear answers to help you determine if Inside Out Leadership is right for your professional goals.
            </p>
          </div>

          <div className="space-y-3.5">
            {FAQS.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all overflow-hidden ${
                    isOpen
                      ? "bg-[#0B1D30] border-teal-500/40 shadow-lg"
                      : "bg-[#091728] border-slate-800 hover:border-slate-700"
                  }`}
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-white"
                  >
                    <span>{faq.q}</span>
                    <span className="p-1 rounded-full bg-slate-800 text-slate-300 shrink-0">
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-teal-400" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-4 animate-in fade-in duration-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 11. REDESIGN PITCH CALL-TO-ACTION FOR DR. FELIPE           */}
      {/* ========================================================= */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#0B1A2C] to-[#06101C] border-b border-[#1E293B] relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#091C2E] border-2 border-teal-500/40 shadow-2xl space-y-6 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 text-teal-300 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-[#F97316]" />
                <span>Message for Dr. Felipe Katich</span>
              </div>
              <span className="text-xs text-slate-400">
                Redesign Concept by Miskat Hossain (Full-Stack UX Architect)
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Ready to elevate Inside Out Leadership into a flagship executive conversion engine?
            </h3>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Dr. Felipe, your coaching philosophy and academic credentials (USC Ed.D. + 20 years leadership) are phenomenal. Your website should match that executive tier. This redesigned concept solves slow mobile loading, generic Wix styling, and disjointed typography—transforming your web presence into an intuitive, high-converting digital home.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-300 py-2">
              <div className="p-3 rounded-xl bg-[#06111D] border border-teal-500/20">
                <strong className="text-teal-400 block mb-0.5">Instant Mobile Speed:</strong>
                Sub-second Next.js SSR eliminates heavy Wix loading spinners.
              </div>
              <div className="p-3 rounded-xl bg-[#06111D] border border-teal-500/20">
                <strong className="text-teal-400 block mb-0.5">High-Ticket C-Suite Poise:</strong>
                Bespoke color palette directly inspired by your official tree emblem.
              </div>
              <div className="p-3 rounded-xl bg-[#06111D] border border-teal-500/20">
                <strong className="text-teal-400 block mb-0.5">Turnkey Deployment:</strong>
                Can be deployed directly to your custom domain in under 24 hours.
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <a
                href={MISKAT_WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl text-xs flex items-center justify-center gap-2 transition-all shadow-lg"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Chat with Miskat on WhatsApp</span>
              </a>
              <a
                href={MISKAT_LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 bg-[#0A66C2] hover:bg-[#004182] text-white font-semibold rounded-xl text-xs flex items-center justify-center gap-2 transition-all"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>Connect with Miskat on LinkedIn</span>
              </a>
              <button
                onClick={() => openBookingWithProgram("discovery")}
                className="w-full sm:w-auto px-6 py-3 bg-teal-500 hover:bg-teal-400 text-white font-semibold rounded-xl text-xs flex items-center justify-center gap-2 transition-all"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Test Live Discovery Booking Flow</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 12. FOOTER                                                */}
      {/* ========================================================= */}
      <footer className="bg-[#040A12] text-slate-400 border-t border-[#1E293B] py-16 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Col 1: Brand & Logo (5 cols) */}
            <div className="md:col-span-5 space-y-4">
              <div className="relative h-12 w-48">
                <Image
                  src="/images/insideoutleadership/logo.png"
                  alt="Inside Out Leadership"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <p className="text-slate-300 max-w-sm leading-relaxed text-xs">
                Empowering new and mid-level managers to cultivate presence, regulate emotions under pressure, and lead with heightened clarity, intention, and trust.
              </p>
              <div className="text-slate-400 text-[11px]">
                Puerto Escondido, Oaxaca, Mexico • Houston, TX • Worldwide Virtual Advisory
              </div>
            </div>

            {/* Col 2: Navigation Links (3 cols) */}
            <div className="md:col-span-3 space-y-3">
              <h4 className="font-bold text-white uppercase tracking-wider text-xs">
                Framework & Navigation
              </h4>
              <ul className="space-y-2 text-slate-300">
                <li>
                  <Link href="#the-shift" className="hover:text-teal-400 transition-colors">
                    The Inside Out Shift
                  </Link>
                </li>
                <li>
                  <Link href="#four-pillars" className="hover:text-teal-400 transition-colors">
                    The Four Pillars
                  </Link>
                </li>
                <li>
                  <Link href="#programs" className="hover:text-teal-400 transition-colors">
                    Programs & Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="hover:text-teal-400 transition-colors">
                    About Dr. Felipe Katich
                  </Link>
                </li>
                <li>
                  <Link href="#scenarios" className="hover:text-teal-400 transition-colors">
                    Real Leadership Scenarios
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Direct Connect (4 cols) */}
            <div className="md:col-span-4 space-y-3">
              <h4 className="font-bold text-white uppercase tracking-wider text-xs">
                Direct Communication
              </h4>
              <div className="space-y-2">
                <a
                  href={`mailto:${OFFICIAL_EMAIL}?subject=Inside%20Out%20Leadership%20Discovery`}
                  className="text-teal-300 hover:text-teal-200 flex items-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5 text-teal-400" />
                  <span>{OFFICIAL_EMAIL}</span>
                </a>
                <a
                  href={DR_FELIPE_LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white flex items-center gap-2"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
                  <span>Connect with Dr. Felipe on LinkedIn</span>
                </a>
                <a
                  href={ORIGINAL_WEBSITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white flex items-center gap-2"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>themindfulleadershiplab.com (Original)</span>
                </a>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => openBookingWithProgram("discovery")}
                  className="px-4 py-2 rounded-lg bg-teal-500/20 hover:bg-teal-500/30 text-teal-300 border border-teal-500/30 text-xs font-semibold flex items-center gap-2 transition-colors"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Free Discovery Session</span>
                </button>
              </div>
            </div>
          </div>

          {/* Copyright & Redesign Credits */}
          <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-300">
            <div>
              © {new Date().getFullYear()} Inside Out Leadership™ • The Mindful Leadership Lab™. All rights reserved.
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <span>Bespoke Digital Experience Concept by</span>
              <a
                href="https://miskathossain.net"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:text-teal-300 font-semibold"
              >
                Miskat Hossain
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* ========================================================= */}
      {/* 13. INTERACTIVE DISCOVERY & BOOKING MODAL                 */}
      {/* ========================================================= */}
      {isBookingOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl bg-[#091B2F] border-2 border-teal-500/40 rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-8 space-y-6">
            {/* Close Button */}
            <button
              onClick={resetBookingModal}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>

            {!bookingSuccess ? (
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-teal-500/20 text-teal-300 text-[11px] font-semibold">
                    <Calendar className="w-3 h-3" />
                    <span>Schedule 1:1 Session</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Book with Dr. Felipe Katich
                  </h3>
                  <p className="text-xs text-slate-300">
                    Select your desired coaching program and submit your details to schedule your confidential session.
                  </p>
                </div>

                {/* Program Selector */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    Select Coaching Pathway:
                  </label>
                  <select
                    value={selectedProgram}
                    onChange={(e) => setSelectedProgram(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#05111E] border border-slate-700 text-white text-xs focus:outline-none focus:border-teal-400"
                  >
                    <option value="discovery">
                      Complimentary Discovery Session (30 min • Free)
                    </option>
                    <option value="individual">
                      Individual Inside Out Session (40 min • $250)
                    </option>
                    <option value="foundation">
                      Inside Out Leadership Foundation (4 Sessions • $1,000)
                    </option>
                    <option value="transformation">
                      Lead Under Pressure Transformation Program (8 Sessions • $1,800)
                    </option>
                  </select>
                </div>

                {/* Name & Email Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-300">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={bookingForm.name}
                      onChange={(e) =>
                        setBookingForm({ ...bookingForm, name: e.target.value })
                      }
                      className="w-full px-3 py-2 rounded-xl bg-[#05111E] border border-slate-700 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-teal-400"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-300">
                      Corporate / Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="s.jenkins@company.com"
                      value={bookingForm.email}
                      onChange={(e) =>
                        setBookingForm({ ...bookingForm, email: e.target.value })
                      }
                      className="w-full px-3 py-2 rounded-xl bg-[#05111E] border border-slate-700 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-teal-400"
                    />
                  </div>
                </div>

                {/* Role & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-300">
                      Current Role / Title
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Director of Engineering"
                      value={bookingForm.role}
                      onChange={(e) =>
                        setBookingForm({ ...bookingForm, role: e.target.value })
                      }
                      className="w-full px-3 py-2 rounded-xl bg-[#05111E] border border-slate-700 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-teal-400"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-300">
                      Preferred Time Window
                    </label>
                    <select
                      value={bookingForm.preferredTime}
                      onChange={(e) =>
                        setBookingForm({ ...bookingForm, preferredTime: e.target.value })
                      }
                      className="w-full px-3 py-2 rounded-xl bg-[#05111E] border border-slate-700 text-white text-xs focus:outline-none focus:border-teal-400"
                    >
                      <option value="Morning (9am - 12pm EST)">Morning (9am - 12pm EST)</option>
                      <option value="Afternoon (1pm - 5pm EST)">Afternoon (1pm - 5pm EST)</option>
                      <option value="Evening / Flexible">Evening / Flexible</option>
                    </select>
                  </div>
                </div>

                {/* Primary Challenge */}
                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-300">
                    What is your #1 leadership pressure point right now?
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Navigating difficult peer pushback, decision fatigue, or staying steady during executive reorganizations..."
                    value={bookingForm.challenge}
                    onChange={(e) =>
                      setBookingForm({ ...bookingForm, challenge: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-xl bg-[#05111E] border border-slate-700 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-teal-400"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 text-white font-semibold rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg shadow-teal-950/50 transition-all hover:scale-[1.01]"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Confirm Session Request</span>
                  </button>
                </div>
              </form>
            ) : (
              /* Success Confirmation */
              <div className="text-center py-6 space-y-4 animate-in zoom-in-95 duration-200">
                <div className="w-16 h-16 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center mx-auto border-2 border-teal-500/40">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Session Request Initialized!
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{bookingForm.name || "Leader"}</strong>. Your request for the{" "}
                  <strong className="text-teal-300">
                    {PROGRAM_OFFERINGS.find((p) => p.id === selectedProgram)?.name}
                  </strong>{" "}
                  has been queued.
                </p>

                <div className="p-4 rounded-2xl bg-[#05111E] border border-teal-500/20 text-xs text-slate-300 max-w-md mx-auto text-left space-y-1.5">
                  <div><strong>Email:</strong> {bookingForm.email || "Provided"}</div>
                  <div><strong>Time Preference:</strong> {bookingForm.preferredTime}</div>
                  <div><strong>Direct Notification:</strong> Direct dispatch sent to Dr. Felipe's executive inbox ({OFFICIAL_EMAIL}).</div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`mailto:${OFFICIAL_EMAIL}?subject=Session%20Booking%20Confirmation%20for%20${encodeURIComponent(
                      bookingForm.name || "Client"
                    )}&body=Name:%20${encodeURIComponent(
                      bookingForm.name
                    )}%0AEmail:%20${encodeURIComponent(
                      bookingForm.email
                    )}%0ARole:%20${encodeURIComponent(
                      bookingForm.role
                    )}%0AProgram:%20${encodeURIComponent(
                      selectedProgram
                    )}%0AChallenge:%20${encodeURIComponent(bookingForm.challenge)}`}
                    className="px-5 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-white font-semibold text-xs flex items-center gap-2"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Send Direct Calendar Invite Email</span>
                  </a>
                  <button
                    onClick={resetBookingModal}
                    className="px-4 py-2.5 rounded-xl border border-slate-700 text-slate-300 hover:text-white text-xs"
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
