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
  Play,
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
  Mic,
  Smile,
  Quote,
  Flame,
  Target,
  Layers,
  Globe,
  Clock,
  Briefcase,
  FileText,
  Linkedin,
  Instagram,
  Facebook,
  Youtube
} from "lucide-react";

// Official links
const DISCOVERY_CALL_URL = "https://bookme.name/ShelleyBridgman";
const AMAZON_BOOK_URL =
  "https://www.amazon.co.uk/Stand-Up-Yourself-Shelley-J-Bridgman/dp/0957571208";
const PURPOSE_PDF_URL =
  "https://shelleybridgman.com/wp-content/uploads/2025/06/ShelleyBridgman_4W_Approach_Final.pdf";
const YOUTUBE_SHOWREEL_URL = "https://www.youtube.com/embed/el1a2Dw2gFU";
const YOUTUBE_TEDX_URL = "https://www.youtube.com/embed/V7BdX_CmH7U";

interface KeynoteTopic {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  takeaways: string[];
  idealFor: string;
}

const KEYNOTE_TOPICS: KeynoteTopic[] = [
  {
    id: "paradox-of-change",
    badge: "Most Requested Keynote",
    title: "The Paradox of Transformational Change",
    subtitle: "Transform yourself to inspire exponential growth in your organization",
    description:
      "We all love the idea of transformation — until, of course, it involves us actually changing. Organizational growth starts at the top, but most leaders would rather send their team on a retreat than confront their own subconscious roadblocks. In this eye-opening, humor-filled session, Shelley introduces the Diversity Thinking Process to help leaders stop sabotaging their own culture and lead with genuine authenticity.",
    takeaways: [
      "Reconnect with your true purpose rather than steering blindly without a rudder",
      "Discover the neurological link between self-awareness and peak performance",
      "Learn how genuine authenticity builds trust and high-retention teams",
      "Cultivate an innovation mindset that sparks exponential business breakthroughs",
      "Walk away with an actionable roadmap for lasting institutional change"
    ],
    idealFor: "Annual Leadership Summits, C-Suite Conferences, Executive Retreats, All-Hands"
  },
  {
    id: "fearless-mindset",
    badge: "Mindset & Resilience",
    title: "Developing a Fearless Mindset",
    subtitle: "Unlock your full potential by embracing, not avoiding, your fears",
    description:
      "You've ticked the corporate boxes. You're successful on paper. Yet deep down, there's a nagging whisper that you're holding back from playing at your highest level. The culprit isn't lack of talent or opportunity — it's fear. The goal isn't to eliminate fear, but to decipher and harness it as high-octane fuel for breakthrough decisions.",
    takeaways: [
      "Reframe fear from an obstacle into your most reliable compass for growth",
      "Deconstruct the crucial difference between fear of rejection vs. fear of failure",
      "Pinpoint and dismantle the subconscious roadblocks holding back your vision",
      "Break through your internal glass ceiling and negotiate from conviction",
      "Inspire your organization with fearless, grounded, and empathetic leadership"
    ],
    idealFor: "Entrepreneurs, Emerging Executives, Tech Leaders, High-Stakes Teams"
  },
  {
    id: "high-performance-thought-leaders",
    badge: "Influence & Innovation",
    title: "The Mindset of High-Performance Thought Leaders",
    subtitle: "Unlock the mental blueprint for influence, innovation, and impact",
    description:
      "The relentless pursuit of success — fueled by caffeine and 60-hour work weeks — often leaves leaders drained and disconnected. Meanwhile, top-tier innovators seem to operate with calm, effortless clarity. The difference isn't how hard they grind; it's how they think. Shelley breaks down the psychology of high-performance thought leadership.",
    takeaways: [
      "Uncover the subconscious thinking traps that keep smart leaders perpetually stuck",
      "Balance uncompromising conviction with deep psychological self-awareness",
      "Shift from transactional hustle to high-leverage strategic influence",
      "Grant yourself permission to stop grinding toward burnout and lead with joy",
      "Establish a respected personal brand and thought leadership authority"
    ],
    idealFor: "Industry Conferences, Founder Forums, Executive Offsites, Thought Leadership Summits"
  }
];

const PURPOSE_PILLARS = [
  {
    number: "01",
    letter: "WHO",
    title: "Who You Are",
    focus: "Identity & Authentic Core",
    description:
      "Peel back decades of social conditioning, corporate masks, and fear of rejection. Reclaim the authentic self you were born to be so you lead with magnetic conviction.",
    actionItem: "Audit your masks, dismantle imposter syndrome, and establish unshakeable grounding."
  },
  {
    number: "02",
    letter: "WHAT",
    title: "What You Do",
    focus: "Zone of Genius & Clarity",
    description:
      "Cut through busywork and superficial tactics. Identify the exact superpower and psychological gifts where your work creates 10x value effortlessly.",
    actionItem: "Eliminate low-leverage grind and focus 80% of your energy on your highest contribution."
  },
  {
    number: "03",
    letter: "WHO",
    title: "Who You Serve",
    focus: "Tribe & Impact Alignment",
    description:
      "Stop trying to please everyone. Discover the precise audiences, teams, and clients whose lives and businesses you are uniquely positioned to transform.",
    actionItem: "Clarify your core audience profile and attract clients aligned with your mission."
  },
  {
    number: "04",
    letter: "WHY",
    title: "Why It Matters",
    focus: "Enduring Legacy & Fulfillment",
    description:
      "Anchor your career in a purpose greater than quarterly profits. When your 'Why' is crystal-clear, burnout dissolves and sustained momentum becomes second nature.",
    actionItem: "Define your legacy compass to navigate high-stakes decisions with effortless clarity."
  }
];

const SELF_ASSESSMENT_PROMPTS = [
  {
    symptom: "I am achieving outward success, but feeling hollow, exhausted, or near burnout.",
    diagnosis: "Purpose Misalignment & Depleted Energy",
    recommendation:
      "You are likely operating from learned expectations rather than your authentic core. The 4W Purpose Model will help strip away draining tasks and reconnect your daily work with deep fulfillment.",
    match: "1:1 Executive Coaching Program"
  },
  {
    symptom: "My leadership team avoids difficult truths and resists necessary organizational change.",
    diagnosis: "Subconscious Fear of Conflict & Culture Sabotage",
    recommendation:
      "When leaders avoid vulnerability, organizations stagnate. Shelley’s keynote 'The Paradox of Transformational Change' creates a safe, humorous, and provocative catalyst for true cultural alignment.",
    match: "Keynote Speaking / Leadership Summit"
  },
  {
    symptom: "I hesitate to speak up, play bigger, or pitch high-level opportunities out of fear.",
    diagnosis: "Fear of Rejection vs. Fear of Failure",
    recommendation:
      "Fear is not an enemy to kill — it is a signal of untapped potential. Shelley's 'Developing a Fearless Mindset' session reframes subconscious blocks so you operate with calm authority.",
    match: "Keynote / Intensive Workshop"
  },
  {
    symptom: "I want to clarify my personal brand and transition from executive to recognized thought leader.",
    diagnosis: "Unclaimed Uniqueness & Diluted Positioning",
    recommendation:
      "Watering down your message to please everyone guarantees mediocrity. Shelley helps you claim your unique voice, leverage your life story, and publish high-authority insights.",
    match: "1:1 Strategic Thought Leadership Mentorship"
  }
];

const TESTIMONIALS = [
  {
    quote:
      "Everyone is still talking about your presentation at the launch conference last week. You brought incredible wit, psychological depth, and warmth. We are all looking forward to doing more work with you.",
    author: "National Grid",
    role: "Leadership Conference Committee",
    category: "keynote",
    rating: 5
  },
  {
    quote:
      "I have been coming to these corporate leadership events for years and have to say your presentation is the best we've ever heard. Practical, humorous, and deeply memorable.",
    author: "Sainsbury's",
    role: "Executive Development Series",
    category: "keynote",
    rating: 5
  },
  {
    quote:
      "Your Keynote was the absolute highlight of the conference. You tackled difficult topics of identity and fear with such delightful humour that the entire auditorium was captivated.",
    author: "BT Openreach",
    role: "Annual Conference Organisers",
    category: "keynote",
    rating: 5
  },
  {
    quote:
      "The delegates absolutely loved your speech! Your honesty and ability to connect personal resilience to professional excellence resonated deeply with every psychotherapist and leader in attendance.",
    author: "British Association for Counselling & Psychotherapy (BACP)",
    role: "National Annual Conference",
    category: "keynote",
    rating: 5
  },
  {
    quote:
      "Her perspective is worth some serious thought. You won’t hear this on any of the cable or internet news shows. Shelley operates on a much higher psychological level.",
    author: "CJ Business Consultant",
    role: "Senior Management Advisor",
    category: "coaching",
    rating: 5
  },
  {
    quote:
      "Working with Shelley transformed how I approach high-stakes leadership. She helped me untangle decades of self-doubt and own my voice without apology. The ROI on my peace of mind has been immeasurable.",
    author: "Managing Director",
    role: "Fintech Enterprise, London",
    category: "coaching",
    rating: 5
  }
];

const CORE_VALUES = [
  {
    name: "Equality",
    icon: Users,
    image: "/assets/shelleybridgman/ShelleyBridgman-equality.webp",
    desc: "Committed to creating truly inclusive cultures where every person has equal opportunity to thrive without bias."
  },
  {
    name: "Growth",
    icon: Flame,
    image: "/assets/shelleybridgman/ShelleyBridgman-growth.webp",
    desc: "Helping individuals uncover their hidden strengths and cultivate determination balanced with humility."
  },
  {
    name: "Compassion",
    icon: Heart,
    desc: "Every encounter occurs for a purpose. Meeting each client with deep empathy, active listening, and warmth."
  },
  {
    name: "Integrity",
    icon: ShieldCheck,
    desc: "Real transformation requires radical trust. Aligning every action, word, and framework with ethical rigor."
  },
  {
    name: "Freedom",
    icon: Sparkles,
    desc: "Empowering those who feel trapped by corporate dogma or shame to break free, reclaim their power, and flourish."
  }
];

const PRESS_OUTLETS = [
  "BBC News",
  "Sky News",
  "ITV",
  "Channel 4",
  "BBC Radio 4",
  "The Scotsman",
  "Evening Standard",
  "Psychologies Magazine",
  "Therapy Today",
  "Time Out New York"
];

const CORPORATE_CLIENTS = [
  "Sainsbury's",
  "Barclays",
  "Morgan Stanley",
  "National Grid",
  "BT Openreach",
  "Merck",
  "Kent Police",
  "Brighton & Hove",
  "UKCP",
  "BACP"
];

export default function ShelleyClient() {
  // UI States
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<string>("paradox-of-change");
  const [activeQuizIndex, setActiveQuizIndex] = useState<number>(0);
  const [testimonialFilter, setTestimonialFilter] = useState<string>("all");
  const [activeVideoModal, setActiveVideoModal] = useState<string | null>(null);
  const [ebookModalOpen, setEbookModalOpen] = useState(false);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [pitchDetailsOpen, setPitchDetailsOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  // Form states
  const [ebookForm, setEbookForm] = useState({ name: "", email: "" });
  const [ebookSubmitted, setEbookSubmitted] = useState(false);
  const [inquiryForm, setInquiryForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "Keynote Speaking",
    message: ""
  });
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  const filteredTestimonials =
    testimonialFilter === "all"
      ? TESTIMONIALS
      : TESTIMONIALS.filter((t) => t.category === testimonialFilter);

  const activeKeynote =
    KEYNOTE_TOPICS.find((k) => k.id === selectedTopic) || KEYNOTE_TOPICS[0];

  const handleEbookSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEbookSubmitted(true);
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySubmitted(true);
  };

  // Close modals on Escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveVideoModal(null);
        setInquiryModalOpen(false);
        setEbookModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1E1926] selection:bg-[#654994] selection:text-white font-sans antialiased overflow-x-hidden">
      {/* ========================================================= */}
      {/* 1. INTERACTIVE PITCH & REDESIGN RATIONALE BAR             */}
      {/* ========================================================= */}
      <div className="bg-[#1A1228] text-[#E8E2F2] border-b border-[#312547] text-xs py-2.5 px-4 relative z-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2.5">
          <div className="flex items-center gap-2 text-center md:text-left">
            <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-[#A882DD] animate-ping" />
            <span className="font-medium text-white/90">
              Redesign Concept for <strong className="text-white">Shelley Bridgman</strong>
            </span>
            <span className="hidden sm:inline text-purple-300/60">•</span>
            <span className="hidden sm:inline text-purple-200/80">
              High-Performance Editorial Flagship by Miskat Hossain
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setPitchDetailsOpen(!pitchDetailsOpen)}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#654994]/50 hover:bg-[#654994] text-white font-medium transition-all border border-purple-400/30 text-[11px]"
            >
              <Zap className="w-3 h-3 text-amber-300" />
              <span>{pitchDetailsOpen ? "Hide Redesign Notes" : "Why Redesign from WordPress?"}</span>
              {pitchDetailsOpen ? (
                <ChevronUp className="w-3 h-3" />
              ) : (
                <ChevronDown className="w-3 h-3" />
              )}
            </button>
            <a
              href="https://shelleybridgman.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-purple-300 hover:text-white flex items-center gap-1 transition-colors"
            >
              Compare Live Site
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Expandable Pitch Breakdown */}
        {pitchDetailsOpen && (
          <div className="max-w-7xl mx-auto mt-3 pt-3 border-t border-purple-900/50 pb-2 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-[11px]">
              <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-800/30">
                <div className="font-bold text-white flex items-center gap-1.5 mb-1">
                  <Zap className="w-3.5 h-3.5 text-amber-300" />
                  0.3s Sub-Second Speed
                </div>
                <p className="text-purple-200/80 leading-relaxed">
                  Eliminates heavy WordPress Elementor bloat, 20+ plugins, and slow database delays for instant luxury navigation.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-800/30">
                <div className="font-bold text-white flex items-center gap-1.5 mb-1">
                  <CrownIcon className="w-3.5 h-3.5 text-purple-300" />
                  Executive Authority
                </div>
                <p className="text-purple-200/80 leading-relaxed">
                  Replaces generic template aesthetics with bespoke luxury typography fitting a TEDx speaker, published author, and UKCP clinician.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-800/30">
                <div className="font-bold text-white flex items-center gap-1.5 mb-1">
                  <Target className="w-3.5 h-3.5 text-emerald-400" />
                  High-Ticket Conversion
                </div>
                <p className="text-purple-200/80 leading-relaxed">
                  Frictionless direct booking for corporate keynotes & discovery calls, interactive 4W assessment, and video showreels.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-800/30">
                <div className="font-bold text-white flex items-center gap-1.5 mb-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-300" />
                  Zero Security Worries
                </div>
                <p className="text-purple-200/80 leading-relaxed">
                  Static modern React architecture removes vulnerable WordPress PHP plugins, database breaches, and maintenance headaches.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ========================================================= */}
      {/* 2. STICKY LUXURY NAVIGATION                               */}
      {/* ========================================================= */}
      <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#EAE3D6] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Logo brand */}
          <Link href="#hero" className="flex items-center gap-3 group">
            <div className="relative h-12 w-48 sm:h-14 sm:w-56 transition-transform group-hover:scale-[1.02]">
              <Image
                src="/assets/shelleybridgman/Shelley-Bridgman-Logo.jpg"
                alt="Shelley Bridgman Logo"
                fill
                className="object-contain object-left mix-blend-multiply"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-[#3D334D] whitespace-nowrap">
            <a href="#speaking" className="hover:text-[#654994] transition-colors">
              Keynote Speaking
            </a>
            <a href="#coaching" className="hover:text-[#654994] transition-colors">
              Executive Coaching
            </a>
            <a href="#framework" className="hover:text-[#654994] transition-colors">
              4W Purpose Model™
            </a>
            <a href="#book" className="hover:text-[#654994] transition-colors">
              The Book
            </a>
            <a href="#about" className="hover:text-[#654994] transition-colors">
              About Shelley
            </a>
            <a href="#testimonials" className="hover:text-[#654994] transition-colors">
              Client Proof
            </a>
            <a href="#faq" className="hover:text-[#654994] transition-colors">
              FAQ
            </a>
          </nav>

          {/* Desktop Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => {
                setInquirySubmitted(false);
                setInquiryModalOpen(true);
              }}
              className="text-xs uppercase tracking-wider font-semibold px-4 py-2.5 rounded-full border border-[#654994] text-[#654994] hover:bg-[#654994]/5 transition-colors whitespace-nowrap"
            >
              Inquire
            </button>
            <a
              href={DISCOVERY_CALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold px-5 py-2.5 rounded-full bg-[#654994] text-white hover:bg-[#523A7A] shadow-md hover:shadow-lg transition-all whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5" />
              Book Discovery Call
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#1E1926] hover:bg-[#ECE6DA] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF8F5] border-b border-[#EAE3D6] px-6 py-6 shadow-xl animate-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col gap-4 text-base font-medium text-[#292236]">
              <a
                href="#speaking"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 border-b border-[#EAE3D6]"
              >
                Keynote Speaking
              </a>
              <a
                href="#coaching"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 border-b border-[#EAE3D6]"
              >
                Executive Coaching
              </a>
              <a
                href="#framework"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 border-b border-[#EAE3D6]"
              >
                The 4W Purpose Model™
              </a>
              <a
                href="#book"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 border-b border-[#EAE3D6]"
              >
                Stand-Up For Yourself (Book)
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 border-b border-[#EAE3D6]"
              >
                About Shelley Bridgman
              </a>
              <a
                href="#testimonials"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 border-b border-[#EAE3D6]"
              >
                Client Testimonials
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 border-b border-[#EAE3D6]"
              >
                FAQ
              </a>
              <div className="pt-2 flex flex-col gap-3">
                <a
                  href={DISCOVERY_CALL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-3 rounded-full bg-[#654994] text-white font-bold text-xs uppercase tracking-wider"
                >
                  Book Discovery Call
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* ========================================================= */}
      {/* 3. HERO SECTION (EDITORIAL MASTERCLASS)                   */}
      {/* ========================================================= */}
      <section
        id="hero"
        className="relative pt-12 pb-20 md:pt-20 md:pb-32 bg-gradient-to-b from-[#FAF8F5] via-[#F4EFE6] to-[#FAF8F5] overflow-hidden"
      >
        {/* Subtle decorative background circles */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#654994]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute -top-24 right-0 w-[400px] h-[400px] bg-amber-400/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Narrative & Authority */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Executive Accreditations Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#E0D8CB] shadow-sm text-xs font-semibold text-[#5A457D]">
                <Sparkles className="w-3.5 h-3.5 text-[#654994]" />
                <span>UKCP Psychotherapist • Keynote Speaker • Published Author</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#181224] leading-[1.12] tracking-tight">
                Own Your Uniqueness. <br />
                <span className="bg-gradient-to-r from-[#654994] via-[#7B59B3] to-[#4A3272] bg-clip-text text-transparent">
                  Elevate Your Leadership.
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl text-[#4A4156] leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Empowering driven executives, founders, and leaders to unlock their authentic
                purpose, transform subconscious fear into breakthrough fuel, and create the
                unique difference they were born to make.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href={DISCOVERY_CALL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#654994] text-white font-bold text-sm uppercase tracking-wider hover:bg-[#523A7A] shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
                >
                  <Calendar className="w-4 h-4 text-purple-200" />
                  <span>Book Complimentary Discovery Call</span>
                </a>
                <button
                  onClick={() => setActiveVideoModal("showreel")}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full bg-white border border-[#D8CEBE] text-[#332A42] font-semibold text-sm hover:bg-[#F2ECE0] hover:border-[#654994] transition-all"
                >
                  <div className="w-6 h-6 rounded-full bg-[#654994]/10 flex items-center justify-center text-[#654994]">
                    <Play className="w-3 h-3 fill-current ml-0.5" />
                  </div>
                  <span>Watch Shelley In Action</span>
                </button>
              </div>

              {/* Authority Stats Pill */}
              <div className="pt-8 border-t border-[#E5DDD0] grid grid-cols-2 sm:grid-cols-4 gap-4 text-center lg:text-left">
                <div>
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-[#181224]">
                    35+
                  </div>
                  <div className="text-xs text-[#6B6178] font-medium">
                    Years Psychotherapy
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-[#654994]">
                    100+
                  </div>
                  <div className="text-xs text-[#6B6178] font-medium">
                    Keynotes Delivered
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-[#181224]">
                    5x
                  </div>
                  <div className="text-xs text-[#6B6178] font-medium">
                    Edinburgh Solo Shows
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-[#654994]">
                    Top 2
                  </div>
                  <div className="text-xs text-[#6B6178] font-medium">
                    Toastmasters UK Speaker
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: High-Res Executive Portrait */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Glow ring */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-[#654994]/20 to-amber-200/30 rounded-3xl blur-2xl -z-10" />

                {/* Main image container */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-[#EAE3D6]">
                  <Image
                    src="/assets/shelleybridgman/ShelleyBridgman-headshot.webp"
                    alt="Shelley Bridgman - Performance Coach & Keynote Speaker"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                  {/* Subtle dark gradient overlay at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent" />

                  {/* Name overlay */}
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <p className="text-lg font-serif font-bold">Shelley Bridgman</p>
                    <p className="text-xs text-purple-200">
                      Performance Mindset Coach • Keynote Speaker • Author
                    </p>
                  </div>
                </div>


                {/* Floating TEDx Card */}
                <button
                  onClick={() => setActiveVideoModal("tedx")}
                  className="absolute -top-4 -right-4 sm:top-6 sm:-right-6 bg-[#1A1228] text-white p-3.5 rounded-2xl shadow-xl border border-purple-800/40 hover:scale-105 transition-transform text-left group"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-[10px] uppercase font-bold tracking-wider text-red-400">
                      TEDx Speaker
                    </span>
                  </div>
                  <p className="text-xs font-serif font-bold text-white group-hover:text-purple-300 transition-colors">
                    &ldquo;Dare To Be You&rdquo;
                  </p>
                  <p className="text-[10px] text-purple-300/80">Click to watch talk →</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. TRUST & DISTINCTION: CORPORATE CLIENTS & MEDIA LOGOS   */}
      {/* ========================================================= */}
      <section className="py-12 bg-white border-y border-[#ECE5D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <p className="text-xs uppercase tracking-widest font-bold text-[#7A6E8A]">
              Trusted By Global Organizations & Industry Leaders
            </p>
          </div>

          {/* Corporate Clients Grid */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 opacity-85">
            {CORPORATE_CLIENTS.map((client, idx) => (
              <div
                key={idx}
                className="px-4 py-2 rounded-xl bg-[#FAF8F5] border border-[#EAE3D6] text-xs font-bold tracking-wide text-[#3A304A] shadow-sm hover:border-[#654994] transition-all hover:-translate-y-0.5"
              >
                {client}
              </div>
            ))}
          </div>

          <div className="text-center mt-10 mb-5">
            <p className="text-[11px] uppercase tracking-widest font-semibold text-[#8C809E]">
              As Featured Across National Press & Media
            </p>
          </div>

          {/* Press / Media Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 opacity-75">
            {PRESS_OUTLETS.map((press, idx) => (
              <span
                key={idx}
                className="text-xs font-serif italic text-[#594F69] bg-[#F7F4EC] px-3 py-1 rounded-full border border-[#ECE5D8]"
              >
                {press}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. SIGNATURE KEYNOTE SPEAKING SPOTLIGHT                   */}
      {/* ========================================================= */}
      <section id="speaking" className="scroll-mt-20 py-20 lg:py-28 bg-[#FAF8F5] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#654994]/10 text-[#654994] text-xs font-bold uppercase tracking-wider mb-3">
              <Mic className="w-3.5 h-3.5" />
              Keynote Speaking
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#181224] tracking-tight">
              Unfiltered Wisdom. Bold Insight. <br className="hidden sm:inline" />
              Humour That Sparks Real Change.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#5A5166] leading-relaxed">
              Shelley delivers no-nonsense keynote presentations that challenge leaders to
              rethink transformation, fear, and true identity. With sharp wit from her decade
              in stand-up comedy and 35 years of clinical psychotherapy, she cuts through corporate noise
              to reveal what is truly holding your people back.
            </p>
          </div>

          {/* Keynote Topic Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {KEYNOTE_TOPICS.map((topic) => {
              const active = topic.id === selectedTopic;
              return (
                <button
                  key={topic.id}
                  onClick={() => setSelectedTopic(topic.id)}
                  className={`px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                    active
                      ? "bg-[#654994] text-white shadow-md scale-105"
                      : "bg-white text-[#4A405A] border border-[#DDD5C7] hover:border-[#654994] hover:text-[#654994]"
                  }`}
                >
                  {topic.title}
                </button>
              );
            })}
          </div>

          {/* Active Keynote Card Showcase */}
          <div className="bg-white rounded-3xl border border-[#E5DDD0] shadow-xl overflow-hidden p-6 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Keynote Details */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-[#654994] text-xs font-bold">
                  <Award className="w-3.5 h-3.5 text-[#654994]" />
                  {activeKeynote.badge}
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#181224] leading-tight">
                  {activeKeynote.title}
                </h3>

                <h4 className="text-base sm:text-lg font-medium text-[#654994]">
                  {activeKeynote.subtitle}
                </h4>

                <p className="text-sm sm:text-base text-[#52495E] leading-relaxed">
                  {activeKeynote.description}
                </p>

                {/* Key Takeaways */}
                <div className="pt-2">
                  <h5 className="text-xs uppercase tracking-wider font-bold text-[#181224] mb-3">
                    Key Audience Takeaways:
                  </h5>
                  <ul className="space-y-2.5">
                    {activeKeynote.takeaways.map((takeaway, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-[#3E354C]">
                        <CheckCircle2 className="w-4 h-4 text-[#654994] flex-shrink-0 mt-0.5" />
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ideal For Pill */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-2 text-xs">
                  <span className="font-bold text-[#181224] uppercase tracking-wider">
                    Recommended For:
                  </span>
                  <span className="text-[#654994] font-medium bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
                    {activeKeynote.idealFor}
                  </span>
                </div>

                {/* Action CTAs */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => {
                      setInquiryForm({
                        ...inquiryForm,
                        interest: `Keynote: ${activeKeynote.title}`
                      });
                      setInquirySubmitted(false);
                      setInquiryModalOpen(true);
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#654994] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#523A7A] shadow-md transition-all"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Check Shelley’s Availability</span>
                  </button>
                  <button
                    onClick={() => setActiveVideoModal("showreel")}
                    className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-[#F5EFE3] text-[#332A42] font-semibold text-xs hover:bg-[#EAE2D2] transition-colors"
                  >
                    <Play className="w-3.5 h-3.5 fill-current text-[#654994]" />
                    <span>Watch Showreel</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Keynote Stage Photo & One-Sheet Preview */}
              <div className="lg:col-span-5 space-y-6">
                <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3] border border-[#E2D9CB]">
                  <Image
                    src="/assets/shelleybridgman/ShelleyBridgman-speaking.jpg"
                    alt="Shelley Bridgman Keynote Speaking"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-5">
                    <p className="text-white text-xs font-medium">
                      “Humour isn’t just entertainment — it’s a powerful tool for connection and lasting transformation.”
                    </p>
                  </div>
                </div>

                {/* Event Organizer Checklist Box */}
                <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#E5DDD0]">
                  <div className="flex items-center justify-between mb-3">
                    <h5 className="text-xs uppercase tracking-wider font-bold text-[#181224] flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-[#654994]" />
                      For Event Professionals
                    </h5>
                    <span className="text-[11px] text-[#654994] font-semibold">
                      Full Technical Rider Ready
                    </span>
                  </div>
                  <p className="text-xs text-[#5C5368] leading-relaxed mb-4">
                    Shelley provides custom event prep, pre-event stakeholder calls, custom slides,
                    flexible 45 to 90-minute formats, and interactive post-speech Q&A.
                  </p>
                  <a
                    href={PURPOSE_PDF_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#654994] hover:text-[#523A7A] transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    Download Shelley’s 4W Model & Speaker One-Sheet (PDF) →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. INTERACTIVE VIDEO THEATRE (TEDx & SHOWREEL)            */}
      {/* ========================================================= */}
      <section className="py-16 bg-[#161022] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/70 border border-red-500/30 text-red-300 text-xs font-bold tracking-wider uppercase">
                <Play className="w-3 h-3 fill-current text-red-400" />
                Featured TEDx Talk
              </div>
              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-white leading-tight">
                “Dare To Be You” <br />
                <span className="text-purple-300">TEDxKingstonUponThames</span>
              </h3>
              <p className="text-sm sm:text-base text-purple-200/80 leading-relaxed">
                Do you think you need to change yourself to become successful and fulfilled?
                What if you already possess everything you will ever need? What if the true goal
                of life isn’t reinventing yourself — but becoming who you already are?
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => setActiveVideoModal("tedx")}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  Watch TEDx Video
                </button>
                <button
                  onClick={() => setActiveVideoModal("showreel")}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-purple-900/40 hover:bg-purple-900/70 text-purple-200 border border-purple-700/50 font-semibold text-xs tracking-wider transition-all"
                >
                  Watch Speaker Showreel
                </button>
              </div>
            </div>

            {/* Right Video Mockup */}
            <div className="lg:col-span-6">
              <div
                onClick={() => setActiveVideoModal("tedx")}
                className="relative rounded-2xl overflow-hidden shadow-2xl border border-purple-800/40 cursor-pointer group aspect-video bg-black"
              >
                <Image
                  src="/assets/shelleybridgman/ShelleyBridgman-headshot.webp"
                  alt="TEDx Preview"
                  fill
                  className="object-cover opacity-80 group-hover:opacity-90 group-hover:scale-105 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-red-600 group-hover:scale-110 flex items-center justify-center text-white shadow-2xl transition-transform">
                    <Play className="w-7 h-7 fill-current ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/90 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-xl">
                  <span>TEDxKingstonUponThames: Dare To Be You</span>
                  <span className="text-red-400 font-semibold">18 Mins</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. EXECUTIVE COACHING & THE 4W PURPOSE MODEL™             */}
      {/* ========================================================= */}
      <section id="coaching" className="scroll-mt-20 py-20 lg:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#654994]/10 text-[#654994] text-xs font-bold uppercase tracking-wider mb-3">
              <Compass className="w-3.5 h-3.5" />
              Executive Coaching
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#181224] tracking-tight">
              Coaching That Connects You With Your Purpose
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#5A5166] leading-relaxed">
              You were born to make a difference — let’s make sure you don’t burn out before
              you get there. Shelley’s 1:1 coaching strips away the noise, clarifies your mission,
              and builds a strategic operating rhythm tailored to your unique psychological strengths.
            </p>
          </div>

          {/* Coaching 2-Column Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            {/* Left Photo & Philosophy */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/5] border border-[#E5DDD0] bg-[#FAF8F5]">
                <Image
                  src="/assets/shelleybridgman/ShelleyBridgman-coaching.jpg"
                  alt="Shelley Bridgman Executive Coaching"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="font-serif font-bold text-lg mb-1">
                      “No fluff. No quick fixes.”
                    </p>
                    <p className="text-xs text-purple-200">
                      Just deep, transformative psychology that helps you make an enduring impact.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Highlight Card */}
              <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E5DDD0]">
                <div className="text-xs font-bold uppercase tracking-wider text-[#654994] mb-1">
                  How We Begin
                </div>
                <ol className="text-xs text-[#4A4056] space-y-2 mt-2">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-[#654994]">1.</span>
                    <span><strong>We Talk:</strong> An honest, confidential discovery conversation regarding the difference you want to make.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-[#654994]">2.</span>
                    <span><strong>Custom Roadmap:</strong> A personalized growth strategy matching your goals, rhythm, and mindset.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-[#654994]">3.</span>
                    <span><strong>Deep-Dive Execution:</strong> Regular high-impact coaching sessions, accountability, and psychological recalibration.</span>
                  </li>
                </ol>
              </div>
            </div>

            {/* Right Coaching Outlines */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#181224]">
                What You Gain From Working With Shelley:
              </h3>
              <p className="text-sm sm:text-base text-[#52495E] leading-relaxed">
                If you are like most ambitious leaders, you have been pushing relentlessly — but
                the harder you grind, the further fulfillment seems. Joy slips away, replaced
                by decision fatigue. Our work together will feel like a genuine turning point.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  "Know precisely who you are beneath expectations",
                  "Stop chasing superficial goals and start creating",
                  "Overcome the fear of rejection and visibility",
                  "Create sustainable momentum without exhaustion",
                  "Build psychological resilience against chronic stress",
                  "Feel genuine excitement for your future again"
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EAE3D6] flex items-start gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#654994]/10 text-[#654994] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-xs font-semibold text-[#2F273D]">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href={DISCOVERY_CALL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#654994] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#523A7A] shadow-md transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Complimentary Discovery Call</span>
                </a>
                <button
                  onClick={() => {
                    setInquiryForm({
                      ...inquiryForm,
                      interest: "Executive 1:1 Coaching"
                    });
                    setInquirySubmitted(false);
                    setInquiryModalOpen(true);
                  }}
                  className="w-full sm:w-auto text-xs font-bold uppercase tracking-wider px-6 py-4 rounded-full border border-[#654994] text-[#654994] hover:bg-[#654994]/5 transition-colors text-center"
                >
                  Inquire About Bespoke Retainers
                </button>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* 8. THE 4W PURPOSE MODEL™ ARCHITECTURE                     */}
          {/* ========================================================= */}
          <div id="framework" className="scroll-mt-20 pt-16 border-t border-[#EAE3D6]">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#654994] bg-purple-50 px-3 py-1 rounded-full">
                Signature Framework
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#181224] mt-3">
                The 4W Purpose Model™
              </h3>
              <p className="text-xs sm:text-sm text-[#61576E] mt-2">
                Developed over 35 years of clinical psychotherapy and performance coaching to help
                you uncover your purpose in a fraction of the time.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {PURPOSE_PILLARS.map((pillar) => (
                <div
                  key={pillar.number}
                  className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E5DDD0] hover:border-[#654994] transition-all hover:shadow-lg group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl font-serif font-bold text-[#654994]/30 group-hover:text-[#654994] transition-colors">
                        {pillar.number}
                      </span>
                      <span className="text-xs font-bold tracking-widest uppercase px-2.5 py-0.5 rounded bg-white border border-[#E0D7C8] text-[#554A66]">
                        {pillar.letter}
                      </span>
                    </div>

                    <h4 className="text-xl font-serif font-bold text-[#181224] mb-1">
                      {pillar.title}
                    </h4>
                    <p className="text-xs font-semibold text-[#654994] mb-3">
                      {pillar.focus}
                    </p>
                    <p className="text-xs text-[#52495E] leading-relaxed mb-4">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#EAE3D6] text-[11px] text-[#4A4056] font-medium">
                    <span className="font-bold text-[#181224]">Key Shift: </span>
                    {pillar.actionItem}
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive Self-Assessment Matcher */}
            <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#F5EFE6] to-[#FAF8F5] border border-[#E0D8CB] shadow-sm">
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#654994]">
                    Interactive Diagnostic
                  </span>
                  <h4 className="text-xl sm:text-2xl font-serif font-bold text-[#181224] mt-1">
                    Where Are You Feeling Friction Right Now?
                  </h4>
                  <p className="text-xs text-[#665D73] mt-1">
                    Select your current challenge to view Shelley&apos;s recommended approach:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {SELF_ASSESSMENT_PROMPTS.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveQuizIndex(idx)}
                      className={`p-3.5 rounded-xl text-left text-xs transition-all border ${
                        activeQuizIndex === idx
                          ? "bg-white border-[#654994] shadow-md ring-2 ring-[#654994]/20"
                          : "bg-white/70 border-[#E2D9CB] hover:bg-white text-[#4A4056]"
                      }`}
                    >
                      <span className="font-semibold block text-[#181224]">
                        {item.symptom}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Selected Result Box */}
                <div className="bg-white p-5 rounded-2xl border border-[#DED4C4] shadow-sm animate-in fade-in duration-200">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold text-[#654994] uppercase tracking-wider">
                      Diagnosis: {SELF_ASSESSMENT_PROMPTS[activeQuizIndex].diagnosis}
                    </span>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-purple-100 text-[#654994]">
                      Recommended: {SELF_ASSESSMENT_PROMPTS[activeQuizIndex].match}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#443B52] leading-relaxed">
                    {SELF_ASSESSMENT_PROMPTS[activeQuizIndex].recommendation}
                  </p>
                  <div className="mt-4 pt-3 border-t border-[#F0EBE0] flex items-center justify-end">
                    <a
                      href={DISCOVERY_CALL_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#654994] hover:text-[#523A7A]"
                    >
                      <span>Explore this in a Discovery Call</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 9. ABOUT SHELLEY & HER EXTRAORDINARY STORY                */}
      {/* ========================================================= */}
      <section id="about" className="scroll-mt-20 py-20 lg:py-28 bg-[#FAF8F5] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Story Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#654994]/10 text-[#654994] text-xs font-bold uppercase tracking-wider">
                <Smile className="w-3.5 h-3.5" />
                The Story Behind The Voice
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#181224] tracking-tight">
                From Suppression &amp; Stand-Up Comedy to True Purpose
              </h2>

              <p className="text-sm sm:text-base text-[#4F465C] leading-relaxed">
                After decades of grappling with identity — feeling different from the age of five
                and suppressing her true self — Shelley faced debilitating shame, bankruptcy,
                and despair. She emerged with one question: <em>Why am I here?</em> The answer was
                clear: <strong>to serve a purpose</strong>. She found the courage to claim her authentic
                identity, transition, and step boldly into the light.
              </p>

              <p className="text-sm sm:text-base text-[#4F465C] leading-relaxed">
                Her public speaking journey began in a corporate presentation where she realized she
                needed polish. Joining Toastmasters International, she rose to become one of the top two
                speakers in Great Britain. A judge challenged her to try stand-up comedy — sparking a
                decade-long run with <strong>5 one-woman solo shows at the Edinburgh Festival</strong>,
                performances at the Leicester Square Theatre, runs in Rome, and a seven-day engagement
                Off-Broadway in New York City.
              </p>

              <p className="text-sm sm:text-base text-[#4F465C] leading-relaxed">
                Along the way, Shelley discovered that humour is not merely entertainment: it is
                the fastest path to dissolve defensive corporate ego and unlock genuine transformation.
                Combining her clinical psychotherapy background with master storytelling, she arms
                leaders with the courage to live the lives they were born to lead.
              </p>

              {/* Quote Card */}
              <div className="p-6 rounded-2xl bg-white border border-[#E5DDD0] shadow-sm relative">
                <Quote className="w-8 h-8 text-[#654994]/20 absolute top-4 right-4" />
                <p className="font-serif italic text-base text-[#2E243D] leading-relaxed mb-2">
                  &ldquo;In the depth of winter, I finally learned that within me there lay an invincible summer.&rdquo;
                </p>
                <p className="text-xs uppercase font-bold tracking-wider text-[#654994]">
                  — Albert Camus
                </p>
              </div>

              {/* Core Values Pills */}
              <div className="pt-4">
                <h4 className="text-xs uppercase tracking-wider font-bold text-[#181224] mb-3">
                  Shelley&apos;s Core Guiding Values:
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {CORE_VALUES.map((val, idx) => {
                    const Icon = val.icon;
                    return (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-white border border-[#E5DDD0] text-xs hover:border-[#654994] transition-colors"
                      >
                        <div className="flex items-center gap-2 font-bold text-[#181224] mb-1.5">
                          {val.image ? (
                            <div className="relative w-4 h-4 rounded overflow-hidden flex-shrink-0">
                              <Image
                                src={val.image}
                                alt={val.name}
                                fill
                                className="object-contain"
                              />
                            </div>
                          ) : (
                            <Icon className="w-3.5 h-3.5 text-[#654994] flex-shrink-0" />
                          )}
                          <span>{val.name}</span>
                        </div>
                        <p className="text-[11px] text-[#695F75] leading-normal">{val.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Photos Stack */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-square border border-[#E5DDD0]">
                <Image
                  src="/assets/shelleybridgman/ShelleyBridgman-about-true-purpose-image.webp"
                  alt="Shelley Bridgman True Purpose"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-square border border-[#E5DDD0]">
                <Image
                  src="/assets/shelleybridgman/ShelleyBridgman-about-true-purpose-image-2.webp"
                  alt="Shelley Bridgman Author & Coach"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Vision Card */}
              <div className="p-6 rounded-2xl bg-[#1A1228] text-white border border-purple-900/40">
                <div className="flex items-center gap-3.5 mb-3.5">
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-purple-400/30 flex-shrink-0 bg-purple-950">
                    <Image
                      src="/assets/shelleybridgman/ShelleyBridgman-about-my-vision.webp"
                      alt="Shelley Bridgman Vision"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h5 className="text-xs uppercase tracking-widest font-bold text-purple-300">
                      Shelley&apos;s Core Vision
                    </h5>
                    <p className="text-[11px] text-purple-200/70">Equal Opportunity &bull; Contribution</p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-purple-100 leading-relaxed italic font-serif">
                  &ldquo;My vision is to live in a world where all people have equal opportunity,
                  and are defined by their contribution — not by their culture, colour, faith,
                  gender, sexuality, or disability.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 10. PUBLISHED BOOK: STAND-UP FOR YOURSELF                 */}
      {/* ========================================================= */}
      <section id="book" className="scroll-mt-20 py-20 lg:py-28 bg-white border-y border-[#ECE5D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Book Visual Mockup */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-64 sm:w-72 aspect-[3/4] rounded-2xl shadow-2xl overflow-hidden border-2 border-[#E0D8CA] group">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#654994] to-[#39245C] p-6 text-white flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-purple-200">
                      Published Work
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-white mt-3 leading-tight">
                      STAND-UP FOR YOURSELF
                    </h3>
                    <p className="text-xs text-purple-200 mt-2 font-medium">
                      And Become The Hero or Shero You Were Born to Be
                    </p>
                  </div>
                  <div className="pt-6 border-t border-purple-400/30">
                    <p className="text-sm font-serif font-bold text-white">Shelley J. Bridgman</p>
                    <p className="text-[10px] text-purple-300">Foreword &amp; Clinical Insights</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Book Description */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider">
                <BookOpen className="w-3.5 h-3.5 text-amber-700" />
                The Inspiring Memoir &amp; Mindset Blueprint
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#181224] leading-tight">
                Stand-Up For Yourself &amp; Become The Hero Or Shero You Were Born To Be
              </h2>

              <p className="text-sm sm:text-base text-[#4F465C] leading-relaxed">
                This isn’t just a biography. It’s a candid, occasionally comical, and deeply human
                account of how Shelley went from being suicidal, bankrupt, and loathing mirrors
                to becoming an international speaker, psychotherapist, and coach who helps leaders
                stand up for themselves.
              </p>

              <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E5DDD0] space-y-3">
                <p className="text-xs sm:text-sm font-serif italic text-[#332A42]">
                  &ldquo;An inspiring, no-holds-barred account of one woman&apos;s quest to find her true self...
                  A unique story told with delightfully dry humour about identity, acceptance, and courage.&rdquo;
                </p>
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                  <span className="text-xs text-[#6B6178] font-bold ml-2">Amazon UK 5-Star Rated</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={AMAZON_BOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#181224] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#654994] shadow-md transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Order On Amazon UK</span>
                </a>
                <button
                  onClick={() => {
                    setEbookSubmitted(false);
                    setEbookModalOpen(true);
                  }}
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-[#F5EFE3] text-[#332A42] font-semibold text-xs tracking-wider hover:bg-[#EAE2D2] transition-colors"
                >
                  <FileText className="w-4 h-4 text-[#654994]" />
                  <span>Download Free Purpose eBook</span>
                </button>
              </div>
            </div>
          </div>

          {/* 3 Core Book Takeaways & Authentic Assets */}
          <div className="mt-16 pt-12 border-t border-[#ECE5D8] grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E5DDD0] text-center flex flex-col items-center hover:border-[#654994] transition-all hover:shadow-md">
              <div className="relative w-16 h-16 mb-4">
                <Image
                  src="/assets/shelleybridgman/ShelleyBridgman-book-shelley-stop-pretending.webp"
                  alt="Stop Pretending to be someone you're not"
                  fill
                  className="object-contain"
                />
              </div>
              <h4 className="text-base font-serif font-bold text-[#181224] mb-2">
                Stop Pretending
              </h4>
              <p className="text-xs text-[#594E66] leading-relaxed">
                Break the exhausting cycle of corporate conformity, imposter syndrome, and hiding behind defensive masks.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E5DDD0] text-center flex flex-col items-center hover:border-[#654994] transition-all hover:shadow-md">
              <div className="relative w-16 h-16 mb-4">
                <Image
                  src="/assets/shelleybridgman/ShelleyBridgman-book-shelley-learn-how-to-be.webp"
                  alt="Learn How To Be Confident In Your Own Skin"
                  fill
                  className="object-contain"
                />
              </div>
              <h4 className="text-base font-serif font-bold text-[#181224] mb-2">
                Learn How To Be
              </h4>
              <p className="text-xs text-[#594E66] leading-relaxed">
                Ground yourself in deep psychological self-awareness, radical vulnerability, and unshakeable inner resilience.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E5DDD0] text-center flex flex-col items-center hover:border-[#654994] transition-all hover:shadow-md">
              <div className="relative w-16 h-16 mb-4">
                <Image
                  src="/assets/shelleybridgman/ShelleyBridgman-book-shelley-be-the-best-version.webp"
                  alt="Be The Best Version Of You"
                  fill
                  className="object-contain"
                />
              </div>
              <h4 className="text-base font-serif font-bold text-[#181224] mb-2">
                Be The Best Version
              </h4>
              <p className="text-xs text-[#594E66] leading-relaxed">
                Own your uniqueness, command rooms with magnetic authority, and make the lasting difference you were born to create.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 11. VERIFIED TESTIMONIALS & SOCIAL PROOF                  */}
      {/* ========================================================= */}
      <section id="testimonials" className="scroll-mt-20 py-20 lg:py-28 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#654994] bg-purple-50 px-3 py-1 rounded-full">
              Endorsements
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#181224] mt-3">
              Words From Conference Delegates &amp; Clients
            </h2>
            <p className="text-xs sm:text-sm text-[#61576E] mt-2">
              From Fortune 500 auditoriums to private executive retainers.
            </p>

            {/* Category Filter */}
            <div className="flex justify-center gap-2 mt-6">
              {[
                { label: "All Reviews", value: "all" },
                { label: "Keynote Speaking", value: "keynote" },
                { label: "1:1 Coaching", value: "coaching" }
              ].map((btn) => (
                <button
                  key={btn.value}
                  onClick={() => setTestimonialFilter(btn.value)}
                  className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider transition-all ${
                    testimonialFilter === btn.value
                      ? "bg-[#654994] text-white shadow-sm"
                      : "bg-white text-[#52495E] border border-[#DDD5C7] hover:border-[#654994]"
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTestimonials.map((t, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#E5DDD0] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-[#3E354C] leading-relaxed italic mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div className="pt-4 border-t border-[#F0EAE0]">
                  <p className="text-xs font-bold text-[#181224]">{t.author}</p>
                  <p className="text-[11px] text-[#786D87]">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 12. FREE EBOOK LEAD MAGNET: ENTREPRENEUR ON PURPOSE       */}
      {/* ========================================================= */}
      <section className="py-16 bg-[#654994] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-[11px] uppercase tracking-widest font-bold px-3 py-1 rounded-full bg-white/20 text-white">
                Complimentary Guide
              </span>
              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-white">
                Becoming an Entrepreneur on Purpose
              </h3>
              <p className="text-sm sm:text-base text-purple-100/90 leading-relaxed max-w-xl">
                Download Shelley&apos;s free eBook to reconnect with your driving mission,
                dismantle subconscious fear, and build a high-impact business without burnout.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-2xl text-[#181224]">
                {ebookSubmitted ? (
                  <div className="text-center py-6 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <Check className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-serif font-bold">Your Guide Is Ready!</h4>
                    <p className="text-xs text-[#52495E]">
                      Download Shelley&apos;s 4W Approach framework directly or check your inbox.
                    </p>
                    <div className="pt-2 flex flex-col sm:flex-row gap-2 justify-center">
                      <a
                        href={PURPOSE_PDF_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#654994] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#523A7A] transition-all shadow-md"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>Download 4W Approach (PDF)</span>
                      </a>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleEbookSubmit} className="space-y-3">
                    <h4 className="text-base font-serif font-bold text-[#181224] mb-2">
                      Get Your Free Instant Copy
                    </h4>
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Your Full Name"
                        value={ebookForm.name}
                        onChange={(e) => setEbookForm({ ...ebookForm, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#D5CDBD] text-xs focus:outline-none focus:ring-2 focus:ring-[#654994]"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        required
                        placeholder="Your Professional Email"
                        value={ebookForm.email}
                        onChange={(e) => setEbookForm({ ...ebookForm, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#D5CDBD] text-xs focus:outline-none focus:ring-2 focus:ring-[#654994]"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-[#654994] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#523A7A] transition-colors"
                    >
                      Instant Download →
                    </button>
                    <p className="text-[10px] text-[#7A7087] text-center">
                      Zero spam. Unsubscribe anytime in one click.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 13. FREQUENTLY ASKED QUESTIONS                            */}
      {/* ========================================================= */}
      <section id="faq" className="scroll-mt-20 py-20 bg-white border-b border-[#ECE5D8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#654994]">
              Clear Answers
            </span>
            <h2 className="text-3xl font-serif font-bold text-[#181224] mt-2">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "What types of events does Shelley speak at?",
                a: "Shelley delivers keynotes at global leadership summits, corporate conferences, executive retreats, associations, and university forums. Her talks can be delivered in-person or virtually, with standard keynote formats ranging from 45 to 90 minutes plus interactive Q&A."
              },
              {
                q: "How does Shelley’s comedy background benefit corporate keynotes?",
                a: "Humour is the ultimate antidote to corporate defensiveness. Instead of lecturing, Shelley uses dry British wit and relatable storytelling to make challenging topics like unconscious fear, diversity, and leadership vulnerability engaging and memorable."
              },
              {
                q: "What is the structure of the 1:1 Executive Coaching program?",
                a: "Shelley’s coaching begins with a comprehensive purpose audit using The 4W Purpose Model™. Retainers typically span 3 to 6 months, featuring bi-weekly strategic sessions, on-demand executive sounding board access, and tailored psychological mindset reprogramming."
              },
              {
                q: "How far in advance should we book Shelley for a keynote?",
                a: "Conference committees and corporate organizers typically secure Shelley 3 to 9 months in advance. However, last-minute keynote inquiries can be accommodated depending on calendar availability."
              },
              {
                q: "Can Shelley customize her presentation to our corporate theme?",
                a: "Absolutely. Shelley conducts a pre-event discovery briefing with your executive committee to ensure her stories, data, and takeaways align seamlessly with your organization's mission and audience goals."
              }
            ].map((faq, idx) => (
              <div
                key={idx}
                className="border border-[#E5DDD0] rounded-2xl overflow-hidden bg-[#FAF8F5]"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif font-bold text-sm sm:text-base text-[#181224]"
                >
                  <span>{faq.q}</span>
                  {expandedFaq === idx ? (
                    <ChevronUp className="w-4 h-4 text-[#654994]" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#8C809E]" />
                  )}
                </button>
                {expandedFaq === idx && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#52495E] leading-relaxed border-t border-[#EDE6DA]">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 14. FINAL EXECUTIVE CALL-TO-ACTION                        */}
      {/* ========================================================= */}
      <section className="py-20 lg:py-28 bg-[#181224] text-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-[#654994]/30 border border-purple-500/30 flex items-center justify-center mx-auto text-purple-300">
            <Sparkles className="w-8 h-8" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
            If You’re Ready to Step Into Your Greatness by Embracing Your Purpose, Let’s Talk.
          </h2>

          <p className="text-base sm:text-lg text-purple-200/80 leading-relaxed max-w-2xl mx-auto">
            Book a complimentary discovery call directly on Shelley’s calendar or reach out
            regarding corporate keynote availability.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href={DISCOVERY_CALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#654994] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#523A7A] shadow-xl hover:-translate-y-0.5 transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Complimentary Discovery Call</span>
            </a>
            <button
              onClick={() => {
                setInquirySubmitted(false);
                setInquiryModalOpen(true);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs uppercase tracking-wider transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>Send Direct Inquiry</span>
            </button>
          </div>

          <div className="pt-8 border-t border-purple-900/50 max-w-md mx-auto text-center">
            <p className="text-xs text-purple-300/80 font-serif italic">
              “My version of hell is dying and then meeting the person I could have been.”
            </p>
            <p className="text-[11px] font-bold text-purple-400 mt-1">— Shelley Bridgman</p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 15. FOOTER & SOCIAL CONNECT                               */}
      {/* ========================================================= */}
      <footer className="bg-[#110C1A] text-[#9E94AD] text-xs py-12 border-t border-purple-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-purple-900/40">
            {/* Branding */}
            <div>
              <p className="text-white font-serif font-bold text-base">Shelley Bridgman</p>
              <p className="text-[11px] text-[#7A6F8A]">
                Purpose-Driven Peak Performance Coach • Keynote Speaker • UKCP Psychotherapist
              </p>
            </div>

            {/* Direct Contacts */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
              <a
                href="mailto:shelley@shelleybridgman.com"
                className="hover:text-white transition-colors"
              >
                shelley@shelleybridgman.com
              </a>
              <span>•</span>
              <div className="flex items-center gap-3 text-purple-300">
                <a
                  href="https://www.linkedin.com/in/purpose-drivenpeakperformancecoach/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com/shelleybridgman/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://www.facebook.com/shelley.bridgman2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCXCwf6wBm9V-lgTiqH3--iQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#6B6178]">
            <p>© {new Date().getFullYear()} Shelley Bridgman. All Rights Reserved.</p>
            <p>
              Redesigned Digital Experience Concept Crafted by{" "}
              <Link href="/" className="text-purple-300 hover:text-white font-semibold">
                Miskat Hossain
              </Link>
            </p>
          </div>
        </div>
      </footer>

      {/* ========================================================= */}
      {/* 16. VIDEO MODAL (TEDx / SHOWREEL)                         */}
      {/* ========================================================= */}
      {activeVideoModal && (
        <div
          onClick={() => setActiveVideoModal(null)}
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl bg-[#161022] rounded-3xl overflow-hidden border border-purple-800 shadow-2xl cursor-default"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 px-6 border-b border-purple-900/60">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-300">
                  {activeVideoModal === "tedx"
                    ? "TEDx Talk: Dare To Be You"
                    : "Shelley Bridgman Speaker Showreel"}
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={() => setActiveVideoModal("tedx")}
                    className={`text-[11px] px-2.5 py-1 rounded-full ${
                      activeVideoModal === "tedx"
                        ? "bg-red-600 text-white font-bold"
                        : "text-purple-300 hover:text-white"
                    }`}
                  >
                    TEDx
                  </button>
                  <button
                    onClick={() => setActiveVideoModal("showreel")}
                    className={`text-[11px] px-2.5 py-1 rounded-full ${
                      activeVideoModal === "showreel"
                        ? "bg-[#654994] text-white font-bold"
                        : "text-purple-300 hover:text-white"
                    }`}
                  >
                    Showreel
                  </button>
                </div>
              </div>
              <button
                onClick={() => setActiveVideoModal(null)}
                className="p-1 rounded-lg text-purple-300 hover:text-white hover:bg-purple-900/50"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video iFrame */}
            <div className="aspect-video w-full bg-black">
              <iframe
                src={
                  activeVideoModal === "tedx"
                    ? `${YOUTUBE_TEDX_URL}?autoplay=1`
                    : `${YOUTUBE_SHOWREEL_URL}?autoplay=1`
                }
                title="Shelley Bridgman Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 17. INQUIRY MODAL                                         */}
      {/* ========================================================= */}
      {inquiryModalOpen && (
        <div
          onClick={() => setInquiryModalOpen(false)}
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#E5DDD0] relative cursor-default"
          >
            <button
              onClick={() => setInquiryModalOpen(false)}
              className="absolute top-5 right-5 p-1 rounded-full hover:bg-gray-100 text-[#554A66]"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {inquirySubmitted ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-14 h-14 rounded-full bg-purple-100 text-[#654994] flex items-center justify-center mx-auto">
                  <Check className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#181224]">
                  Message Received
                </h3>
                <p className="text-xs sm:text-sm text-[#554A66] leading-relaxed">
                  Thank you for reaching out. Shelley and her executive team will review your inquiry
                  and respond within 24 business hours.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={DISCOVERY_CALL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#654994] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#523A7A] transition-all shadow-md"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Directly on Calendar</span>
                  </a>
                  <button
                    onClick={() => setInquiryModalOpen(false)}
                    className="px-5 py-2.5 rounded-full bg-gray-100 hover:bg-gray-200 text-[#554A66] text-xs font-semibold"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#654994] bg-purple-50 px-3 py-1 rounded-full inline-block mb-2">
                  Direct Contact
                </span>
                <h3 className="text-2xl font-serif font-bold text-[#181224] mb-1">
                  Inquire with Shelley Bridgman
                </h3>
                <p className="text-xs text-[#6B6178] mb-6">
                  For corporate keynote booking, 1:1 coaching retainers, or media requests.
                </p>

                <form onSubmit={handleInquirySubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-[#2F263D] mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={inquiryForm.name}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5CDBD] text-xs focus:outline-none focus:ring-2 focus:ring-[#654994]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-[#2F263D] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="jane@company.com"
                        value={inquiryForm.email}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5CDBD] text-xs focus:outline-none focus:ring-2 focus:ring-[#654994]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#2F263D] mb-1">
                        Phone (Optional)
                      </label>
                      <input
                        type="tel"
                        placeholder="+44 7123 456789"
                        value={inquiryForm.phone}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5CDBD] text-xs focus:outline-none focus:ring-2 focus:ring-[#654994]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#2F263D] mb-1">
                      Primary Interest *
                    </label>
                    <select
                      value={inquiryForm.interest}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, interest: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5CDBD] text-xs focus:outline-none focus:ring-2 focus:ring-[#654994] bg-white"
                    >
                      <option value="Keynote Speaking">Keynote Speaking / Leadership Summit</option>
                      <option value="Executive 1:1 Coaching">Executive 1:1 Coaching Program</option>
                      <option value="Corporate Diversity Workshop">Corporate Diversity &amp; Mindset Workshop</option>
                      <option value="Press / Media Interview">Press or Podcast Interview</option>
                      <option value="Other Inquiries">Other Inquiries</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#2F263D] mb-1">
                      Event Date / Details / Goals
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Share details about your event, audience size, or coaching aspirations..."
                      value={inquiryForm.message}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5CDBD] text-xs focus:outline-none focus:ring-2 focus:ring-[#654994]"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setInquiryModalOpen(false)}
                      className="px-4 py-2 text-xs font-semibold text-[#665D73]"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-full bg-[#654994] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#523A7A]"
                    >
                      Submit Inquiry
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 18. FREE EBOOK DOWNLOAD MODAL                             */}
      {/* ========================================================= */}
      {ebookModalOpen && (
        <div
          onClick={() => setEbookModalOpen(false)}
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-[#E5DDD0] relative cursor-default"
          >
            <button
              onClick={() => setEbookModalOpen(false)}
              className="absolute top-5 right-5 p-1 rounded-full hover:bg-gray-100 text-[#554A66]"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {ebookSubmitted ? (
              <div className="text-center py-6 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif font-bold text-[#181224]">
                  Check Your Inbox!
                </h3>
                <p className="text-xs text-[#554A66]">
                  We have sent your download link for &ldquo;Becoming an Entrepreneur on Purpose&rdquo;.
                </p>
                <div className="pt-3 flex flex-col gap-2">
                  <a
                    href={PURPOSE_PDF_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-[#654994] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#523A7A] shadow-md transition-all text-center"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Download 4W Approach (PDF) Now</span>
                  </a>
                  <button
                    onClick={() => setEbookModalOpen(false)}
                    className="w-full py-2 text-xs font-semibold text-[#665D73] hover:text-[#181224]"
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#654994] bg-purple-50 px-3 py-1 rounded-full inline-block mb-2">
                  Free Resource
                </span>
                <h3 className="text-xl font-serif font-bold text-[#181224] mb-1">
                  Download Shelley&apos;s Purpose Guide
                </h3>
                <p className="text-xs text-[#6B6178] mb-5">
                  Enter your details to receive &ldquo;Becoming an Entrepreneur on Purpose&rdquo; instantly.
                </p>

                <form onSubmit={handleEbookSubmit} className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#2F263D] mb-1">Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={ebookForm.name}
                      onChange={(e) => setEbookForm({ ...ebookForm, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5CDBD] text-xs focus:outline-none focus:ring-2 focus:ring-[#654994]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#2F263D] mb-1">Email</label>
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={ebookForm.email}
                      onChange={(e) => setEbookForm({ ...ebookForm, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5CDBD] text-xs focus:outline-none focus:ring-2 focus:ring-[#654994]"
                    />
                  </div>
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-[#654994] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#523A7A]"
                    >
                      Download eBook Now →
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 19. MOBILE STICKY FLOATING CTA BAR                        */}
      {/* ========================================================= */}
      <div className="sm:hidden fixed bottom-4 left-4 right-4 z-40">
        <a
          href={DISCOVERY_CALL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3.5 px-6 rounded-full bg-[#654994] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-2xl hover:bg-[#523A7A] transition-all"
        >
          <Calendar className="w-4 h-4 text-purple-200" />
          <span>Book Discovery Call With Shelley</span>
        </a>
      </div>
    </div>
  );
}

// Small helper Crown icon for pitch bar
function CrownIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" />
    </svg>
  );
}
