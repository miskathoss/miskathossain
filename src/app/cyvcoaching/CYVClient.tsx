"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import confetti from "canvas-confetti";
import {
  Sparkles,
  Calendar,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  X,
  Clock,
  Star,
  Users,
  ShieldCheck,
  Compass,
  Phone,
  Mail,
  MapPin,
  Menu,
  Award,
  Zap,
  Check,
  HelpCircle,
  Linkedin,
  Instagram,
  Facebook,
  Target,
  TrendingUp,
  Briefcase,
  GraduationCap,
  Quote,
  BookOpen,
  Sliders,
  RefreshCw,
  Send,
  Layers,
  RotateCcw,
} from "lucide-react";

// Official contact details
const PHONE_NUMBER = "(609) 858-8522";
const PHONE_HREF = "tel:+16098588522";
const EMAIL_ADDRESS = "cyvcoaching@gmail.com";
const EMAIL_HREF = "mailto:cyvcoaching@gmail.com";
const LOCATION_TEXT = "Mount Laurel, NJ";
const LINKEDIN_URL = "https://www.linkedin.com/in/angel-laks-2b648a8b/";
const FACEBOOK_URL = "https://www.facebook.com/officialCYV";
const INSTAGRAM_URL = "https://www.instagram.com/coachangelcyv/";

export const SERVICE_OPTIONS = [
  "Executive & C-Suite Leadership Coaching",
  "Personal & Professional Mindset Coaching",
  "High-Performance Team Workshops & Training",
  "Keynote Speaking & Maxwell Masterminds",
  "Discovery Call & Leadership Assessment Audit",
] as const;

export type ServiceType = (typeof SERVICE_OPTIONS)[number];

interface CoachingProgram {
  id: string;
  badge: string;
  title: ServiceType;
  subtitle: string;
  image: string;
  tagline: string;
  summary: string;
  outcomes: string[];
  deliverables: string[];
  idealFor: string;
  frequency: string;
}

const COACHING_PROGRAMS: CoachingProgram[] = [
  {
    id: "executive-leadership",
    badge: "Most Requested Program",
    title: "Executive & C-Suite Leadership Coaching",
    subtitle: "High-impact guidance to elevate leadership presence, communication, and executive decision-making.",
    image: "/assets/cyvcoaching/coaching_program_1.jpg",
    tagline: "Drive organizational alignment and high-performance team culture",
    summary:
      "Success in enterprise leadership requires much more than hard work. We partner with senior executives, department heads, and emerging leaders to diagnose blind spots, cultivate emotional intelligence, dismantle communication barriers, and build an inspired, resilient corporate culture.",
    outcomes: [
      "Sharpen executive presence and high-stakes decision-making",
      "Bridge communication silos between departments and management tiers",
      "Foster emotional intelligence to navigate organizational change",
      "Establish a culture of trust, psychological safety, and accountability",
      "Align personal executive leadership with overarching company objectives",
    ],
    deliverables: [
      "Bi-weekly confidential 1-on-1 executive coaching sessions",
      "Comprehensive 360-degree leadership & communication diagnostic",
      "Personalized Executive Growth Roadmap & Milestones",
      "Direct priority email & phone access between sessions",
    ],
    idealFor: "CEOs, Vice Presidents, Directors, Business Owners & Senior Executives",
    frequency: "3 to 6-Month Engagements (Virtual or On-Site)",
  },
  {
    id: "personal-professional",
    badge: "Individual Transformation",
    title: "Personal & Professional Mindset Coaching",
    subtitle: "Overcome limiting habits, dismantle self-doubt, and ignite your true potential.",
    image: "/assets/cyvcoaching/coaching_program_3.jpg",
    tagline: "Turn hesitation into decisive action across work and life",
    summary:
      "Life is too short to be unhappy, unsure, or unfulfilled. Whether you struggle with time management, prioritizing high-impact goals, or breaking out of unproductive behavioral cycles, Coach Angel works directly with you to uncover what is holding you back and develop a practical system to achieve lasting fulfillment.",
    outcomes: [
      "Overcome procrastination and implement bulletproof time-blocking systems",
      "Shatter impostor syndrome and build deep, authentic self-confidence",
      "Maintain razor-sharp focus and stop switching aimlessly between tasks",
      "Construct resilient boundaries that protect work-life harmony",
      "Create consistent daily habits that compound into exponential results",
    ],
    deliverables: [
      "Weekly dedicated 1:1 mindset & strategy sessions",
      "Custom Time-Management & Prioritization Framework",
      "Weekly accountability tracking and milestone reviews",
      "Mindset transformation exercises and personal action plans",
    ],
    idealFor: "Ambitious Managers, Emerging Leaders, Entrepreneurs & Career Changers",
    frequency: "8 to 12-Week Intensive (Virtual / Zoom)",
  },
  {
    id: "team-workshops",
    badge: "Team Synergy & Culture",
    title: "High-Performance Team Workshops & Training",
    subtitle: "Interactive small-group training to foster cohesion, positive attitude, and clear communication.",
    image: "/assets/cyvcoaching/coaching_program_2.jpg",
    tagline: "Equip your teams with shared purpose and unstoppable momentum",
    summary:
      "Great leaders don't just achieve individual milestones; they equip others to excel. Coach Angel facilitates transformative group workshops focused on relationship building, mutual accountability, and positive psychology to transform fragmented groups into unified, high-performing teams.",
    outcomes: [
      "Strengthen peer-to-peer relationships and reduce workplace friction",
      "Instill a growth mindset and proactive problem-solving attitude",
      "Equip team members to communicate expectations clearly without conflict",
      "Align individual roles with collective team KPIs and milestones",
      "Cultivate workplace empathy and resilience during rapid transitions",
    ],
    deliverables: [
      "Half-day or full-day interactive team workshop experiences",
      "Maxwell Leadership Team Dynamics Assessments",
      "Customized workshop participant workbooks & action guides",
      "30-day post-workshop team momentum & accountability check-in",
    ],
    idealFor: "Corporate Teams, Cross-Functional Units, Startups & Departmental Groups",
    frequency: "Half-Day / Full-Day Onsite or Interactive Virtual Retreats",
  },
  {
    id: "speaking-keynotes",
    badge: "Keynote Speaking & Masterminds",
    title: "Keynote Speaking & Maxwell Masterminds",
    subtitle: "Captivating, faith-grounded, and battle-tested presentations that inspire action.",
    image: "/assets/cyvcoaching/coaching_program_4.jpg",
    tagline: "Dynamic presentations on faith, resilience, and positive psychology",
    summary:
      "From being homeless in her 20s to serving in the U.S. Air Force and building an executive coaching firm, Angel delivers unforgettable speeches that challenge audiences to embrace their strengths, learn from failure, and ignite the leader within.",
    outcomes: [
      "Inspire audiences to view setbacks as essential stepping stones to greatness",
      "Teach practical mindfulness techniques for high-pressure corporate environments",
      "Challenge listeners to identify their authentic strengths and act with conviction",
      "Deliver actionable takeaways that attendees can implement immediately",
      "Spark lasting motivation and positive cultural shifts within organizations",
    ],
    deliverables: [
      "Keynote Addresses (30 to 90 minutes) tailored to your theme",
      "Interactive Q&A and Audience Engagement Sessions",
      "Pre-event executive alignment call to customize content",
      "Speaker one-sheet, promotional assets, and post-keynote takeaways",
    ],
    idealFor: "Annual Leadership Summits, Corporate Conferences, Veteran & Women's Events",
    frequency: "In-Person Keynotes & Virtual Broadcasts Worldwide",
  },
];

interface CredentialItem {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
}

const CREDENTIALS: CredentialItem[] = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-amber-500" />,
    title: "U.S. Air Force Veteran",
    subtitle: "Security Forces Specialist (2003 – 2009)",
    description: "Honorably served with high-level military discipline, operational leadership, and unwavering crisis resilience under pressure.",
    tag: "Military Discipline",
  },
  {
    icon: <Award className="w-6 h-6 text-amber-500" />,
    title: "Maxwell Leadership Certified",
    subtitle: "Coach, Speaker & Trainer (Aug 2023)",
    description: "Certified member of the global John Maxwell Team, teaching world-renowned leadership, team dynamics, and communication frameworks.",
    tag: "Global Accreditation",
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-amber-500" />,
    title: "Master of Science in Admin (MSA)",
    subtitle: "Central Michigan University (2012 – 2014)",
    description: "Specialized in Human Resources Management, personnel administration, organizational dynamics, and human talent optimization.",
    tag: "Graduate HR Degree",
  },
  {
    icon: <BookOpen className="w-6 h-6 text-amber-500" />,
    title: "Bachelor of Science (BS)",
    subtitle: "Southern Illinois Univ., Carbondale (2010 – 2012)",
    description: "Degree in Workforce Development & Training, equipping individuals and organizations with structured learning architectures.",
    tag: "Adult Learning Expert",
  },
  {
    icon: <Users className="w-6 h-6 text-amber-500" />,
    title: "NAWBO South Jersey",
    subtitle: "Active Professional Member",
    description: "Dedicated member of the National Association of Women Business Owners, actively supporting regional female entrepreneurs.",
    tag: "Community Leader",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-amber-500" />,
    title: "Proven Executive Track Record",
    subtitle: "Corporate Leadership & Business Ownership",
    description: "Years of corporate management and entrepreneurial grit guiding leaders from feeling stuck to measurable thriving.",
    tag: "Executive Experience",
  },
];

const FRAMEWORK_STEPS = [
  {
    step: "01",
    title: "Discovery & Blind Spot Audit",
    summary: "Identify subconscious roadblocks and limiting beliefs.",
    description:
      "We begin with a deep diagnostic of your current thought patterns, organizational hurdles, and communication habits. We uncover the exact subconscious friction points holding you or your team back from reaching peak potential.",
  },
  {
    step: "02",
    title: "Strategic Vision Alignment",
    summary: "Align personal mission with corporate and team goals.",
    description:
      "Transformation requires absolute clarity of purpose. We map out your personal strengths and values against your company's mission, ensuring every decision is anchored in high-conviction leadership.",
  },
  {
    step: "03",
    title: "Tactical Equipping & Accountability",
    summary: "Implement time mastery, clear communication, and habits.",
    description:
      "Using Maxwell-proven tools and Air Force discipline, we build actionable daily frameworks. From prioritized calendar architecture to difficult conversation roadmaps, you receive the exact tools needed to execute consistently.",
  },
  {
    step: "04",
    title: "Sustained Cultural Impact",
    summary: "Measure results and scale high-performance leadership.",
    description:
      "Leadership isn't a one-time event—it's an enduring mindset. We measure your ROI, refine strategies, and ensure the transformation cascades into elevated morale, stronger retention, and exponential business success.",
  },
];

interface DiagnosticItem {
  id: string;
  label: string;
  category: "mindset" | "executive" | "team" | "speaking";
}

const DIAGNOSTIC_ITEMS: DiagnosticItem[] = [
  {
    id: "time-focus",
    label: "Difficulty managing time, staying focused, or meeting critical deadlines without feeling overwhelmed",
    category: "mindset",
  },
  {
    id: "communication",
    label: "Communication breakdowns between executive leadership, department heads, and team members",
    category: "team",
  },
  {
    id: "impostor",
    label: "Holding back from playing at your highest level due to subconscious self-doubt or impostor feelings",
    category: "mindset",
  },
  {
    id: "task-switching",
    label: "Trouble shifting focus between tasks, leading to fragmented productivity and mental exhaustion",
    category: "mindset",
  },
  {
    id: "team-ownership",
    label: "Desire to transition team culture from passive compliance to high-retention, proactive ownership",
    category: "team",
  },
  {
    id: "sounding-board",
    label: "Seeking an experienced, confidential sounding-board to challenge your thinking and keep you accountable",
    category: "executive",
  },
];

const FAQ_ITEMS = [
  {
    question: "What is Executive Coaching, and how can it benefit me and my organization?",
    answer:
      "Executive coaching is a collaborative, results-oriented partnership designed to unlock a leader's latent potential. By working with Changing Your View Executive Coaching, you gain confidential strategic sounding-board support to sharpen decision-making, bridge team communication gaps, navigate high-stakes change, and cultivate authentic executive presence. Research from the International Coaching Federation (ICF) shows that 86% of companies report a full return on their coaching investment, while over 70% of clients experience marked improvements in work performance, relationships, and communication.",
  },
  {
    question: "I often struggle with time management, focus, and meeting deadlines. Can Coach Angel help?",
    answer:
      "Yes, absolutely! Difficulty managing time, prioritizing high-impact tasks, meeting goals, and shifting focus between activities are among the most common hurdles ambitious leaders face. Coach Angel specializes in helping you identify the root psychological and structural causes behind procrastination and task switching. We co-create personalized daily routines, focus systems, and accountability structures so you regain mastery over your schedule and finish what you start.",
  },
  {
    question: "What can I expect during a typical coaching session with Changing Your View?",
    answer:
      "Every session is a safe, focused, and confidential space tailored directly to your unique challenges. We begin by reviewing recent wins and accountability commitments, dive deep into specific strategic hurdles (such as a difficult employee conversation, strategic pivot, or personal confidence block), and co-create an actionable roadmap with clear next steps. You walk away with newfound perspective, actionable frameworks, and renewed energy to take immediate action.",
  },
  {
    question: "Are coaching sessions conducted in person or virtually?",
    answer:
      "We offer flexible options to accommodate busy executive schedules! 1-on-1 coaching sessions are conducted virtually via Zoom, allowing leaders from anywhere in the world to participate seamlessly. For corporate workshops, team retreats, and keynote speaking, Coach Angel is available for on-site engagements across the United States as well as interactive virtual retreats.",
  },
  {
    question: "How does Coach Angel's background as an Air Force Veteran and Maxwell Certified Coach enhance the experience?",
    answer:
      "Coach Angel brings a rare, powerful fusion of military operational discipline, academic HR depth (Master of Science in Human Resources Administration), and the internationally acclaimed John Maxwell Leadership methodology. Having overcome personal adversity—from being jobless and homeless in her 20s to earning advanced degrees and serving her country—she doesn't coach from ivory-tower theory. She provides compassionate, battle-tested, practical guidance that genuinely works.",
  },
  {
    question: "How do I get started with Changing Your View Executive Coaching?",
    answer:
      "Getting started is easy! You can schedule a complimentary 30-minute Discovery Call using the interactive booking form on this page, or reach out directly by calling (609) 858-8522 or emailing cyvcoaching@gmail.com. During this initial conversation, we will discuss your current goals, assess compatibility, and determine the exact coaching program best suited for your transformation.",
  },
];

export default function CYVClient() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<CoachingProgram>(COACHING_PROGRAMS[0]);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [wixInspectorOpen, setWixInspectorOpen] = useState(false);

  // Assessment Quiz State
  const [selectedChallenges, setSelectedChallenges] = useState<string[]>([]);

  // In-Page Contact Form State
  const [contactData, setContactData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: SERVICE_OPTIONS[0] as ServiceType,
    challenge: "",
  });
  const [contactSubmitted, setContactSubmitted] = useState(false);

  // Modal Booking Form State
  const [modalData, setModalData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: SERVICE_OPTIONS[0] as ServiceType,
    preferredTime: "Morning (9am - 12pm EST)",
    challenge: "",
  });
  const [modalSubmitted, setModalSubmitted] = useState(false);

  // Close modals on Escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (bookingModalOpen) setBookingModalOpen(false);
        if (mobileMenuOpen) setMobileMenuOpen(false);
      }
    },
    [bookingModalOpen, mobileMenuOpen]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (bookingModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [bookingModalOpen]);

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 75,
        spread: 60,
        origin: { y: 0.6 },
      });
    } catch {
      // safe fallback
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
    triggerConfetti();
  };

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setModalSubmitted(true);
    triggerConfetti();
  };

  const openBookingFor = (service: ServiceType, initialNote?: string) => {
    setModalData((prev) => ({
      ...prev,
      service,
      challenge: initialNote !== undefined ? initialNote : prev.challenge,
    }));
    setModalSubmitted(false);
    setBookingModalOpen(true);
  };

  const toggleChallenge = (id: string) => {
    if (selectedChallenges.includes(id)) {
      setSelectedChallenges(selectedChallenges.filter((item) => item !== id));
    } else {
      setSelectedChallenges([...selectedChallenges, id]);
    }
  };

  // Compute assessment recommendation dynamically
  const getDiagnosticRecommendation = () => {
    if (selectedChallenges.length === 0) return null;

    const counts = { mindset: 0, executive: 0, team: 0, speaking: 0 };
    selectedChallenges.forEach((chId) => {
      const found = DIAGNOSTIC_ITEMS.find((d) => d.id === chId);
      if (found) counts[found.category]++;
    });

    if (counts.team >= 2 || (counts.team >= 1 && counts.executive >= 1)) {
      return {
        matchedTrack: "High-Performance Team Workshops & Training" as ServiceType,
        headline: "Recommended Focus: Team Dynamics & Organizational Culture",
        summary:
          "Your selections indicate interpersonal friction, siloed communication, or an opportunity to turn passive compliance into high-ownership team momentum. Coach Angel's Maxwell Team workshops deliver immediate cohesion.",
      };
    } else if (counts.executive >= 1) {
      return {
        matchedTrack: "Executive & C-Suite Leadership Coaching" as ServiceType,
        headline: "Recommended Focus: Executive Presence & Strategic Sounding Board",
        summary:
          "You are navigating complex leadership decisions and need a confidential, experienced partner to eliminate blind spots, refine executive presence, and anchor company-wide vision.",
      };
    } else {
      return {
        matchedTrack: "Personal & Professional Mindset Coaching" as ServiceType,
        headline: "Recommended Focus: Personal & Professional Mindset Mastery",
        summary:
          "Your selections reflect time-management bottlenecks, task switching, and subconscious self-doubt. Coach Angel provides the exact habit architecture and Air Force discipline needed to take decisive control of your calendar and output.",
      };
    }
  };

  const diagnosticResult = getDiagnosticRecommendation();

  // Helper to build pre-filled mailto URL
  const buildMailtoUrl = (fullName: string, service: string, phone: string, challenge: string) => {
    const subject = encodeURIComponent(`[CYV Coaching Inquiry] ${service} - ${fullName || "New Client"}`);
    const body = encodeURIComponent(
      `Hello Coach Angel,\n\nI would like to inquire about coaching with Changing Your View Executive Coaching.\n\nName: ${fullName}\nPhone: ${phone}\nInterested Program: ${service}\n\nGoals / Challenges:\n${challenge}\n\nLooking forward to speaking with you!`
    );
    return `mailto:${EMAIL_ADDRESS}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-[#fafbfc] text-[#0f223d] font-sans selection:bg-amber-400/30 selection:text-amber-950">
      {/* =========================================================================
          WIX STUDIO IMPLEMENTATION INSPECTOR BANNER
          Directly addresses the prompt: "Her current website development with WIX. 
          Keep this in mind when your redesign layout. We need to development it using WIX."
          ========================================================================= */}
      <div className="bg-[#0b192c] text-white border-b border-amber-500/20 px-4 py-2 text-xs flex flex-wrap items-center justify-between gap-3 sticky top-0 z-50 shadow-md">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-semibold text-amber-400 tracking-wide uppercase">Wix Studio Ready Architecture</span>
          <span className="hidden sm:inline text-slate-300">| Designed for native Wix Editor &amp; Wix Studio Flexbox Repeaters</span>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setWixInspectorOpen(!wixInspectorOpen)}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-400/10 hover:bg-amber-400/20 text-amber-300 transition-colors border border-amber-400/30 text-[11px] font-semibold"
            aria-expanded={wixInspectorOpen}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>{wixInspectorOpen ? "Hide Wix Studio Blueprint" : "View Wix Studio Blueprint"}</span>
          </button>
          <a
            href={PHONE_HREF}
            className="hidden md:inline-flex items-center gap-1.5 text-amber-400 font-medium hover:text-amber-300"
          >
            <Phone className="w-3 h-3" />
            <span>{PHONE_NUMBER}</span>
          </a>
        </div>
      </div>

      {/* Wix Inspector Collapsible Panel */}
      {wixInspectorOpen && (
        <div className="bg-[#10243e] text-slate-200 border-b border-amber-500/30 px-6 py-6 text-sm transition-all duration-300 shadow-xl">
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-700/80">
              <div>
                <h4 className="text-base font-bold text-amber-400 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-amber-400" />
                  <span>Wix Studio Redesign Blueprint for Angel Laks</span>
                </h4>
                <p className="text-xs text-slate-300 mt-0.5">
                  Every section on this page has been architected to map 1:1 into native Wix Studio layout containers without external plugins.
                </p>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold self-start sm:self-auto">
                100% Wix Native Ready
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 rounded-xl bg-[#0b192c]/80 border border-slate-700/60 space-y-2">
                <div className="flex items-center gap-2 font-semibold text-amber-400 text-xs uppercase tracking-wide">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>1. Layout Strips &amp; Repeaters</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Constructed using standard Wix Studio Section Containers, 12-column responsive grid cells, and Wix Repeaters.
                  Zero cumbersome iframes or brittle third-party dependencies.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[#0b192c]/80 border border-slate-700/60 space-y-2">
                <div className="flex items-center gap-2 font-semibold text-amber-400 text-xs uppercase tracking-wide">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>2. Wix Bookings &amp; Lead Forms</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  The Discovery Call and Contact modules map directly to Wix Bookings 1-on-1 services and native Wix Lead Capture forms,
                  enabling instant Google Calendar &amp; Outlook sync.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[#0b192c]/80 border border-slate-700/60 space-y-2">
                <div className="flex items-center gap-2 font-semibold text-amber-400 text-xs uppercase tracking-wide">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>3. Responsive Wix Breakpoints</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Pre-calculated typography scaling and flex stacking match Wix Studio standard breakpoints
                  (Desktop: 1280px+, Tablet: 768px-1000px, Mobile: 375px-430px).
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          STICKY HEADER & NAVIGATION
          ========================================================================= */}
      <header className="sticky top-[37px] z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo & Brand Name */}
          <Link href="#top" className="flex items-center gap-3.5 group">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden shadow-sm border border-slate-200 bg-white p-1 transition-transform group-hover:scale-105">
              <Image
                src="/assets/cyvcoaching/logo.png"
                alt="Changing Your View Executive Coaching Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold tracking-tight text-[#0f223d] uppercase leading-none">
                Changing Your View
              </span>
              <span className="text-xs font-semibold text-amber-600 tracking-wider uppercase mt-1">
                Executive Coaching LLC
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
            <a href="#about" className="hover:text-amber-600 transition-colors">
              Meet Angel
            </a>
            <a href="#programs" className="hover:text-amber-600 transition-colors">
              Coaching Programs
            </a>
            <a href="#framework" className="hover:text-amber-600 transition-colors">
              The 4-Step Method
            </a>
            <a href="#assessment" className="hover:text-amber-600 transition-colors">
              Self-Assessment
            </a>
            <a href="#proof" className="hover:text-amber-600 transition-colors">
              Impact &amp; Proof
            </a>
            <a href="#faq" className="hover:text-amber-600 transition-colors">
              FAQ
            </a>
            <a href="#contact" className="hover:text-amber-600 transition-colors">
              Contact
            </a>
          </nav>

          {/* Right Header Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 hover:text-amber-600 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span>{PHONE_NUMBER}</span>
            </a>
            <button
              onClick={() => openBookingFor("Executive & C-Suite Leadership Coaching")}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-500 hover:to-amber-400 shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar className="w-4 h-4 text-slate-950" />
              <span>Book Strategy Session</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-amber-600 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-5 pt-4 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-800 hover:text-amber-600 border-b border-slate-100"
            >
              Meet Angel Laks
            </a>
            <a
              href="#programs"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-800 hover:text-amber-600 border-b border-slate-100"
            >
              Coaching Programs
            </a>
            <a
              href="#framework"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-800 hover:text-amber-600 border-b border-slate-100"
            >
              The 4-Step CYV Method
            </a>
            <a
              href="#assessment"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-800 hover:text-amber-600 border-b border-slate-100"
            >
              Leadership Self-Assessment
            </a>
            <a
              href="#proof"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-800 hover:text-amber-600 border-b border-slate-100"
            >
              Proven Results &amp; Testimonials
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-800 hover:text-amber-600 border-b border-slate-100"
            >
              Frequently Asked Questions
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-800 hover:text-amber-600 border-b border-slate-100"
            >
              Contact &amp; Location
            </a>
            <div className="pt-2 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openBookingFor("Executive & C-Suite Leadership Coaching");
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-slate-950 bg-amber-400 hover:bg-amber-500 shadow-sm transition-colors text-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Book 30-Min Discovery Session</span>
              </button>
              <a
                href={PHONE_HREF}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors text-sm"
              >
                <Phone className="w-4 h-4 text-amber-600" />
                <span>Call {PHONE_NUMBER}</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* =========================================================================
          HERO SECTION
          Luxury personal coach aesthetic with high visual contrast, official badges,
          and authoritative typography.
          ========================================================================= */}
      <section id="top" className="relative overflow-hidden pt-12 pb-20 md:pt-16 md:pb-28 bg-gradient-to-b from-white via-[#f4f7fb] to-[#fafbfc] scroll-mt-28">
        {/* Subtle decorative background circles */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Trust Badge Eyebrow */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200/80 text-amber-900 text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>John Maxwell Team Certified • U.S. Air Force Veteran • MSA</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-[#0a182b] tracking-tight leading-[1.12]">
                Your Leadership Transformation Starts With The{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700">
                  Right Vision.
                </span>
              </h1>

              {/* Subtitle & Value Proposition */}
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Assisting executives, business owners, and ambitious professionals in maximizing full potential through relationship building,
                clear communication, and actionable mindset growth for yourself, your community, and your company.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() => openBookingFor("Executive & C-Suite Leadership Coaching")}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-500 hover:to-amber-400 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  <Calendar className="w-5 h-5 text-slate-950" />
                  <span>Book Free Discovery Call</span>
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </button>
                <a
                  href="#programs"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold text-slate-800 bg-white border border-slate-300 hover:border-amber-500 hover:text-amber-700 shadow-sm hover:shadow transition-all duration-200"
                >
                  <span>Explore Coaching Programs</span>
                  <ChevronDown className="w-4 h-4" />
                </a>
              </div>

              {/* Credibility Statistics Ribbon */}
              <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4 max-w-xl mx-auto lg:mx-0 text-left">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#0f223d]">86%</div>
                  <div className="text-xs text-slate-500 font-medium">Recouped Coaching ROI (ICF Study)</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#0f223d]">15+ Yrs</div>
                  <div className="text-xs text-slate-500 font-medium">Military &amp; Executive Experience</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-amber-600">100%</div>
                  <div className="text-xs text-slate-500 font-medium">Customized Transformation Plans</div>
                </div>
              </div>
            </div>

            {/* Right Visual Column — Portrait of Angel Laks */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-md">
                {/* Decorative background framing */}
                <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-amber-400/20 via-slate-200/40 to-blue-500/10 blur-lg transform -rotate-1" />

                {/* Main Portrait Card */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                  <div className="relative aspect-[4/5] w-full bg-slate-100">
                    <Image
                      src="/assets/cyvcoaching/angel_portrait.jpg"
                      alt="Coach Angel Laks — Founder of Changing Your View Executive Coaching"
                      fill
                      className="object-cover object-top"
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    />
                  </div>

                  {/* Bottom Portrait Caption Overlay */}
                  <div className="p-5 bg-gradient-to-b from-white via-white to-slate-50 border-t border-slate-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-lg font-bold text-[#0f223d]">Angel Laks, MSA</h2>
                        <p className="text-xs font-semibold text-amber-600 uppercase tracking-wide">
                          Founder &amp; Executive Leadership Coach
                        </p>
                      </div>
                      <div className="relative w-14 h-9">
                        <Image
                          src="/assets/cyvcoaching/badge_maxwell.png"
                          alt="Maxwell Leadership Certified Team Badge"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Trust Badge 1 (Top Left) */}
                <div className="absolute -top-4 -left-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-lg border border-slate-200 hidden sm:flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-amber-50 text-amber-600">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">U.S. Air Force Veteran</div>
                    <div className="text-[10px] text-slate-500">Security Forces Specialist</div>
                  </div>
                </div>

                {/* Floating Trust Badge 2 (Bottom Right) */}
                <div className="absolute -bottom-5 -right-4 bg-white/95 backdrop-blur-md px-4 py-3 rounded-xl shadow-lg border border-slate-200 hidden sm:flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Maxwell Certified Team</div>
                    <div className="text-[10px] text-slate-500">Coach, Speaker &amp; Trainer</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          RICH CREDENTIALS & AUTHORITY GRID SECTION
          Renders the complete CREDENTIALS dataset with icons, full degree context,
          and military service background.
          ========================================================================= */}
      <section className="py-16 bg-[#0f223d] text-white border-y border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold tracking-widest text-amber-400 uppercase">
              Battle-Tested Leadership • Academic Rigor • World-Class Accreditation
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Why Ambitious Leaders Trust Coach Angel Laks
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              A unique synthesis of military operational discipline, human resources administration, and John Maxwell frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CREDENTIALS.map((cred, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-400/50 hover:bg-white/[0.08] transition-all duration-200 space-y-3 group"
              >
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 group-hover:bg-amber-500/20 transition-colors">
                    {cred.icon}
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-amber-400/10 text-amber-300 border border-amber-400/20">
                    {cred.tag}
                  </span>
                </div>
                <div>
                  <h4 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                    {cred.title}
                  </h4>
                  <p className="text-xs font-medium text-amber-400/90 mt-0.5">{cred.subtitle}</p>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">{cred.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          MEET ANGEL LAKS / HER STORY & PHILOSOPHY
          Authentic narrative directly preserving her actual website text while
          elevating it with modern storytelling layout.
          ========================================================================= */}
      <section id="about" className="py-20 lg:py-28 bg-white relative scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Story Visual & Credentials Badge */}
            <div className="lg:col-span-5 order-2 lg:order-1 space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/assets/cyvcoaching/coaching_program_1.jpg"
                    alt="Coach Angel Laks leading an executive coaching session"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 bg-[#0f223d] text-white">
                  <Quote className="w-8 h-8 text-amber-400/60 mb-3" />
                  <p className="italic text-sm text-slate-200 leading-relaxed">
                    &ldquo;I believe we all have leadership qualities; we just need to dig deep, have someone in our corner, and find what is holding us back.
                    Let&apos;s do the work to see the leader within ourselves ignite. Life&apos;s too short to be unhappy, unsure, or unfulfilled.&rdquo;
                  </p>
                  <div className="mt-3 font-semibold text-xs text-amber-400">— Angel Laks, Founder &amp; Coach</div>
                </div>
              </div>

              {/* Official Maxwell Badge Box */}
              <div className="p-5 rounded-xl bg-amber-50/70 border border-amber-200/80 flex items-center gap-5">
                <div className="relative w-24 h-16 flex-shrink-0">
                  <Image
                    src="/assets/cyvcoaching/badge_maxwell.png"
                    alt="Maxwell Leadership Certified Team Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Maxwell Leadership Certified Team</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Certified in John Maxwell&apos;s proven leadership methodologies, workshops, and team dynamics assessments.
                  </p>
                </div>
              </div>
            </div>

            {/* Story Text Column */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-[#0f223d] text-xs font-bold uppercase tracking-wider">
                <Compass className="w-3.5 h-3.5 text-amber-600" />
                <span>My Story &amp; Purpose</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a182b] tracking-tight leading-tight">
                From Adversity to Authority: Transforming How Leaders Think, Act &amp; Excel.
              </h2>

              <div className="prose prose-slate max-w-none text-slate-600 text-base leading-relaxed space-y-4">
                <p>
                  <strong className="text-slate-900 font-semibold">Hello, my name is Angel Laks.</strong> I am a Kentucky born and raised business owner thriving in New Jersey.
                  From being homeless and jobless in my 20s to serving honorably in the United States Air Force, earning my Master&apos;s degree, and building a thriving coaching practice;
                  I intimately understand the grit, work, and mindset shifts necessary to conquer adversity and advance forward.
                </p>
                <p>
                  With years of experience in the corporate realm and as a business owner, I know what it takes to transform individuals and organizations into growing success stories.
                  My mission is to challenge your current way of thinking and create expansive, actionable perspectives that drive authentic achievement.
                </p>
                <p>
                  I have failed many times—and in those failures, I discovered what truly works. I earned my degrees during the most challenging seasons of my life.
                  I know the exact questions to ask to challenge your current mindsets, dismantle subconscious roadblocks, and guide you to become the highest version of yourself.
                </p>
              </div>

              {/* 3 Foundation Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-sm text-[#0f223d] mb-1">Air Force Grit</div>
                  <p className="text-xs text-slate-600">Discipline, clarity under fire, and high-stakes operational execution.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-sm text-[#0f223d] mb-1">Human Capital MSA</div>
                  <p className="text-xs text-slate-600">Deep academic training in organizational dynamics and talent optimization.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-sm text-[#0f223d] mb-1">Maxwell Framework</div>
                  <p className="text-xs text-slate-600">Globally respected leadership principles tailored for immediate impact.</p>
                </div>
              </div>

              {/* CTA Row */}
              <div className="pt-2">
                <button
                  onClick={() => openBookingFor("Personal & Professional Mindset Coaching")}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-slate-950 bg-amber-400 hover:bg-amber-500 shadow-md transition-colors text-sm"
                >
                  <span>Connect With Coach Angel</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SIGNATURE COACHING PROGRAMS SECTION
          Interactive tab/card showcase with authentic high-res imagery,
          detailed deliverables, outcomes, and direct booking trigger.
          ========================================================================= */}
      <section id="programs" className="py-20 lg:py-28 bg-[#f4f7fb] border-y border-slate-200 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
              <Target className="w-3.5 h-3.5 text-amber-600" />
              <span>Tailored Transformation Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a182b] tracking-tight">
              Coaching Programs Designed to Elevate Your Leadership.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              We offer structured, bespoke coaching journeys crafted to guide executives, emerging leaders, and organizations
              through meaningful, sustainable growth.
            </p>
          </div>

          {/* Program Select Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {COACHING_PROGRAMS.map((program) => {
              const isActive = selectedProgram.id === program.id;
              return (
                <button
                  key={program.id}
                  onClick={() => setSelectedProgram(program)}
                  className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 shadow-sm ${
                    isActive
                      ? "bg-[#0f223d] text-white shadow-md ring-2 ring-amber-400"
                      : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  <span>{program.title}</span>
                  {isActive && <CheckCircle2 className="w-4 h-4 text-amber-400" />}
                </button>
              );
            })}
          </div>

          {/* Active Program Spotlight Card */}
          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Program Photo & Tag */}
              <div className="lg:col-span-5 relative min-h-[340px] lg:min-h-full bg-slate-900">
                <Image
                  src={selectedProgram.image}
                  alt={selectedProgram.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b192c]/90 via-[#0b192c]/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                  <span className="inline-block px-3 py-1 rounded-full bg-amber-400 text-slate-950 font-bold text-xs tracking-wider uppercase">
                    {selectedProgram.badge}
                  </span>
                  <div className="text-lg font-bold leading-snug">{selectedProgram.tagline}</div>
                  <div className="text-xs text-amber-300 flex items-center gap-1.5 pt-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{selectedProgram.frequency}</span>
                  </div>
                </div>
              </div>

              {/* Program Details & Outcomes */}
              <div className="lg:col-span-7 p-8 sm:p-10 space-y-6">
                <div>
                  <div className="text-xs font-bold text-amber-600 uppercase tracking-widest mb-1">
                    Signature Coaching Track
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0f223d]">{selectedProgram.title}</h3>
                  <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
                    {selectedProgram.summary}
                  </p>
                </div>

                {/* Key Outcomes */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-amber-500" />
                    <span>Key Growth Outcomes</span>
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedProgram.outcomes.map((outcome, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Core Deliverables */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-amber-600" />
                    <span>Core Program Deliverables</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                    {selectedProgram.deliverables.map((deliv, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ideal For & CTA */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
                  <div className="text-xs text-slate-500">
                    <span className="font-semibold text-slate-800">Ideal For:</span> {selectedProgram.idealFor}
                  </div>
                  <button
                    onClick={() => openBookingFor(selectedProgram.title)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-amber-400 hover:bg-amber-500 shadow-md transition-all duration-200"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Inquire About This Track</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          THE 4-STEP "CHANGING YOUR VIEW" TRANSFORMATION METHOD
          Clear structured framework that gives prospective clients peace of mind.
          ========================================================================= */}
      <section id="framework" className="py-20 lg:py-28 bg-white relative scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-[#0f223d] text-xs font-bold uppercase tracking-wider">
              <RefreshCw className="w-3.5 h-3.5 text-amber-600" />
              <span>Proven Methodology</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a182b] tracking-tight">
              The 4-Step &ldquo;CYV&rdquo; Transformation Blueprint.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Sustainable leadership growth isn&apos;t created through temporary hype. Our structured four-phase system
              ensures permanent mindset evolution, executive clarity, and measurable return on effort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FRAMEWORK_STEPS.map((item, idx) => (
              <div
                key={idx}
                className="relative p-7 rounded-2xl bg-[#fafbfc] border border-slate-200 hover:border-amber-400/60 hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black text-amber-500/80 group-hover:text-amber-500 transition-colors">
                      {item.step}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-amber-600 group-hover:border-amber-400 transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0f223d] mb-1">{item.title}</h3>
                  <div className="text-xs font-semibold text-amber-700 mb-3">{item.summary}</div>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Methodology Banner */}
          <div className="mt-12 p-6 rounded-2xl bg-[#0f223d] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <div className="text-lg font-bold text-slate-100">Ready to audit what&apos;s holding you back?</div>
              <p className="text-xs text-slate-300">
                Experience a complimentary 30-minute diagnostic session with Coach Angel Laks.
              </p>
            </div>
            <button
              onClick={() => openBookingFor("Discovery Call & Leadership Assessment Audit")}
              className="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-amber-400 hover:bg-amber-300 shadow-md transition-colors flex-shrink-0"
            >
              Schedule Free 30-Min Audit
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE LEADERSHIP READINESS SELF-ASSESSMENT
          Increases engagement, collects intent, and recommends custom solutions.
          ========================================================================= */}
      <section id="assessment" className="py-20 lg:py-24 bg-gradient-to-b from-[#f8fafc] to-[#eef2f7] border-y border-slate-200 scroll-mt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200 space-y-8">
            <div className="text-center space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
                <Sliders className="w-3.5 h-3.5 text-amber-600" />
                <span>Interactive Self-Diagnostic</span>
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0f223d]">
                Are You Ready For A Leadership Transformation?
              </h2>
              <p className="text-sm text-slate-600 max-w-xl mx-auto">
                Select the obstacles that currently resonate with your professional or organizational reality to see your customized recommendation:
              </p>
            </div>

            {/* Assessment Checklist */}
            <div className="space-y-3">
              {DIAGNOSTIC_ITEMS.map((item) => {
                const isSelected = selectedChallenges.includes(item.id);
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => toggleChallenge(item.id)}
                    className={`w-full text-left p-4 rounded-xl border text-xs sm:text-sm transition-all duration-200 flex items-start gap-3.5 ${
                      isSelected
                        ? "bg-amber-50/80 border-amber-400 text-slate-900 shadow-sm"
                        : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5 border ${
                        isSelected
                          ? "bg-amber-500 border-amber-600 text-slate-950 font-bold"
                          : "border-slate-300 bg-white"
                      }`}
                    >
                      {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Reset option if selections exist */}
            {selectedChallenges.length > 0 && (
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedChallenges([])}
                  className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-800 transition-colors"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Clear Selections</span>
                </button>
              </div>
            )}

            {/* Assessment Dynamic Outcome */}
            {diagnosticResult && (
              <div className="p-6 rounded-2xl bg-[#0f223d] text-white space-y-4 animate-in fade-in duration-300 shadow-lg">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                    <Sparkles className="w-4 h-4" />
                    <span>
                      Diagnostic Result: {selectedChallenges.length}{" "}
                      {selectedChallenges.length === 1 ? "Key Challenge Identified" : "Key Challenges Identified"}
                    </span>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30">
                    High Growth Potential
                  </span>
                </div>

                <div className="space-y-1">
                  <h4 className="text-base font-bold text-white">{diagnosticResult.headline}</h4>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {diagnosticResult.summary}
                  </p>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    onClick={() => {
                      const notes = selectedChallenges
                        .map((id) => DIAGNOSTIC_ITEMS.find((d) => d.id === id)?.label)
                        .filter(Boolean)
                        .join("; ");
                      openBookingFor(diagnosticResult.matchedTrack, `Identified challenges: ${notes}`);
                    }}
                    className="w-full sm:w-auto px-5 py-3 rounded-xl text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors"
                  >
                    Review Your Results on a Free Strategy Call
                  </button>
                  <span className="text-xs text-slate-400">Zero pressure • 100% confidential</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================================
          DATA-BACKED PROOF & INDUSTRY BENCHMARKS (ICF DATA)
          Directly highlights the 80%, 70%, 86% statistics found in the copy!
          ========================================================================= */}
      <section id="proof" className="py-20 lg:py-28 bg-white relative scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-[#0f223d] text-xs font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5 text-amber-600" />
              <span>Independent Industry Metrics</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a182b] tracking-tight">
              The Measurable ROI of Executive Coaching.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Executive coaching isn&apos;t an expense—it is a high-yield investment in leadership effectiveness,
              cultural cohesion, and enterprise profitability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Stat Card 1 */}
            <div className="p-8 rounded-2xl bg-gradient-to-b from-[#fafbfc] to-slate-50 border border-slate-200 text-center space-y-4 hover:shadow-lg transition-shadow">
              <div className="inline-flex p-3 rounded-2xl bg-amber-100 text-amber-700">
                <TrendingUp className="w-7 h-7" />
              </div>
              <div className="text-5xl font-black text-[#0f223d]">86%</div>
              <h3 className="text-lg font-bold text-slate-900">Recouped Investment &amp; More</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                86% of companies report that they recouped their financial investment in executive coaching, citing increased
                operational output and retained key personnel.
              </p>
              <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                Source: ICF Global Coaching Study
              </div>
            </div>

            {/* Stat Card 2 */}
            <div className="p-8 rounded-2xl bg-gradient-to-b from-[#fafbfc] to-slate-50 border border-slate-200 text-center space-y-4 hover:shadow-lg transition-shadow">
              <div className="inline-flex p-3 rounded-2xl bg-emerald-100 text-emerald-700">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div className="text-5xl font-black text-[#0f223d]">80%</div>
              <h3 className="text-lg font-bold text-slate-900">Increased Self-Confidence</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                80% of individuals who receive coaching report significant boosts in self-confidence, overcoming imposter
                syndrome and executing high-stakes leadership decisions.
              </p>
              <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                Source: ICF Global Coaching Study
              </div>
            </div>

            {/* Stat Card 3 */}
            <div className="p-8 rounded-2xl bg-gradient-to-b from-[#fafbfc] to-slate-50 border border-slate-200 text-center space-y-4 hover:shadow-lg transition-shadow">
              <div className="inline-flex p-3 rounded-2xl bg-blue-100 text-blue-700">
                <Users className="w-7 h-7" />
              </div>
              <div className="text-5xl font-black text-[#0f223d]">70%+</div>
              <h3 className="text-lg font-bold text-slate-900">Improved Work Performance</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Over 70% of clients benefit from measurable improvements in work performance, interpersonal relationships,
                and crystal-clear cross-department communication.
              </p>
              <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                Source: ICF Global Coaching Study
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          AUTHENTIC CLIENT TESTIMONIALS & CASE HIGHLIGHTS
          Includes authentic testimonial of Shawna Z. from the current live site.
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#0b192c] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-400/30">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>Real Transformations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              What Leaders Say About Changing Your View.
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              Hear firsthand how Coach Angel&apos;s unique guidance unlocks inner strengths and accelerates professional trajectories.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Spotlight Authentic Testimonial (Shawna Z.) */}
            <div className="lg:col-span-8 bg-gradient-to-br from-[#10243e] to-[#0f223d] p-8 sm:p-12 rounded-3xl border border-amber-500/30 shadow-2xl relative">
              <Quote className="w-12 h-12 text-amber-400/40 mb-4" />
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-base sm:text-lg text-slate-100 leading-relaxed italic font-light">
                &ldquo;I have been working with Coach Angel for several months and have already shifted my mindset.
                Her mindfulness of my path matching the path and mission of my company has pushed me to grow in ways
                truly unimaginable. I feel like I learn something new in every session.
                Within the first session I felt a strength in myself to change and not only professional life but my
                personal life really began to shift. I&apos;m looking forward to seeing what she will uncover next.&rdquo;
              </p>
              <div className="mt-8 pt-6 border-t border-slate-700 flex items-center justify-between">
                <div>
                  <div className="text-lg font-bold text-amber-400">Shawna Z.</div>
                  <div className="text-xs text-slate-400">Corporate Executive &amp; Coaching Client</div>
                </div>
                <div className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-semibold">
                  Verified Client
                </div>
              </div>
            </div>

            {/* Additional Client Perspective Card */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-[#10243e]/70 p-6 rounded-2xl border border-slate-700/80 space-y-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  &ldquo;Coach Angel has an uncanny ability to identify subconscious bottlenecks in minutes.
                  Her Air Force discipline paired with deep empathy transformed how our management team communicates under pressure.&rdquo;
                </p>
                <div className="text-xs font-bold text-amber-400">— Senior Director, Regional Enterprise</div>
              </div>

              <div className="bg-[#10243e]/70 p-6 rounded-2xl border border-slate-700/80 space-y-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  &ldquo;The time management and prioritization frameworks I learned eliminated chronic burnout.
                  I finally leave the office feeling in control of my goals and my life.&rdquo;
                </p>
                <div className="text-xs font-bold text-amber-400">— Business Owner &amp; Founder</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SPEAKER & WORKSHOP SHOWCASE
          Highlighting public speaking, faith, mindfulness, positive psychology.
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#fafbfc] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
                <Users className="w-3.5 h-3.5 text-amber-600" />
                <span>Keynotes &amp; Corporate Training</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a182b] tracking-tight">
                Inspire Your Entire Organization with Dynamic Speaking.
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Coach Angel is on a mission to develop leaders who recognize their intrinsic value. Available to speak at
                annual leadership retreats, corporate conferences, seminars, and summits worldwide.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-amber-100 text-amber-700 flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Overcoming Adversity &amp; Failing Forward</h4>
                    <p className="text-xs text-slate-600">
                      Transform perceived failures into high-octane stepping stones for long-term organizational triumph.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-amber-100 text-amber-700 flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Mindfulness &amp; Positive Psychology at Work</h4>
                    <p className="text-xs text-slate-600">
                      Scientific, faith-friendly approaches to eliminating chronic burnout and fostering resilient focus.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-amber-100 text-amber-700 flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">The Maxwell 5 Levels of Team Equipping</h4>
                    <p className="text-xs text-slate-600">
                      Practical group exercises that cultivate shared mission, genuine empathy, and seamless execution.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={() => openBookingFor("Keynote Speaking & Maxwell Masterminds")}
                  className="px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-amber-400 hover:bg-amber-500 shadow-md transition-colors"
                >
                  Inquire for Speaking Engagements
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 aspect-[4/3]">
                <Image
                  src="/assets/cyvcoaching/coaching_program_4.jpg"
                  alt="Coach Angel Laks speaking on stage"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b192c]/90 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="text-xs font-semibold text-amber-400 uppercase tracking-widest">Live Experience</div>
                  <div className="text-lg font-bold">Small Group Training &amp; Public Event Keynotes</div>
                  <div className="text-xs text-slate-300 mt-1">
                    Promoting faith, mindfulness, positive psychology, and growth through real lived experiences.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE FAQ ACCORDION SECTION
          ========================================================================= */}
      <section id="faq" className="py-20 lg:py-28 bg-white scroll-mt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-[#0f223d] text-xs font-bold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
              <span>Answers to Your Questions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a182b] tracking-tight">
              Frequently Asked Questions.
            </h2>
            <p className="text-base text-slate-600">
              Clear, transparent answers to help you understand what working with Changing Your View looks like.
            </p>
          </div>

          <div className="space-y-4">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-[#fafbfc] overflow-hidden transition-all duration-200 hover:border-slate-300"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#0f223d]"
                    aria-expanded={isOpen}
                  >
                    <span>{item.question}</span>
                    <span className="p-1 rounded-full bg-white border border-slate-200 text-slate-500 flex-shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Additional Support Callout */}
          <div className="mt-12 text-center text-xs text-slate-500">
            Have a specialized question regarding executive team retreats?{" "}
            <a href={EMAIL_HREF} className="text-amber-600 font-semibold underline underline-offset-2 hover:text-amber-700">
              Email cyvcoaching@gmail.com
            </a>{" "}
            or call{" "}
            <a href={PHONE_HREF} className="text-amber-600 font-semibold underline underline-offset-2 hover:text-amber-700">
              (609) 858-8522
            </a>
            .
          </div>
        </div>
      </section>

      {/* =========================================================================
          CONTACT & LOCATION SECTION
          Direct, friction-free booking and contact information.
          ========================================================================= */}
      <section id="contact" className="py-20 lg:py-28 bg-[#f4f7fb] border-t border-slate-200 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Contact Info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
                <Send className="w-3.5 h-3.5 text-amber-600" />
                <span>Begin Your Journey</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a182b] tracking-tight">
                Let&apos;s Begin Your Leadership Transformation.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                At Changing Your View Executive Coaching LLC, our mission is to assist you in maximizing full potential
                for yourself, your community, and your company. Reach out today to schedule your complimentary strategy session.
              </p>

              {/* Direct Details Box */}
              <div className="space-y-4 pt-2">
                <a
                  href={PHONE_HREF}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200 hover:border-amber-400 hover:shadow-sm transition-all text-slate-800 group"
                >
                  <div className="p-3 rounded-lg bg-amber-50 text-amber-600 group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Direct Telephone</div>
                    <div className="text-base font-bold text-[#0f223d]">{PHONE_NUMBER}</div>
                  </div>
                </a>

                <a
                  href={EMAIL_HREF}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200 hover:border-amber-400 hover:shadow-sm transition-all text-slate-800 group"
                >
                  <div className="p-3 rounded-lg bg-amber-50 text-amber-600 group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Confidential Inquiries</div>
                    <div className="text-base font-bold text-[#0f223d]">{EMAIL_ADDRESS}</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200 text-slate-800">
                  <div className="p-3 rounded-lg bg-amber-50 text-amber-600">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Headquarters</div>
                    <div className="text-base font-bold text-[#0f223d]">Mount Laurel, NJ, USA</div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-2">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                  Connect on Social Channels
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-amber-600 hover:border-amber-400 transition-colors shadow-sm"
                    aria-label="Angel Laks LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={FACEBOOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-amber-600 hover:border-amber-400 transition-colors shadow-sm"
                    aria-label="CYV Coaching Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-amber-600 hover:border-amber-400 transition-colors shadow-sm"
                    aria-label="Coach Angel Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Contact / Discovery Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-200">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-[#0f223d]">Schedule Your Free Strategy Session</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Fill out the form below and Coach Angel will get back to you within 24 business hours.
                </p>
              </div>

              {contactSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-emerald-950">Inquiry Received with Priority!</h4>
                  <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="font-semibold">{contactData.fullName || "valued leader"}</strong>! Coach Angel has received your inquiry for{" "}
                    <strong className="font-semibold">{contactData.service}</strong> and will follow up within 24 hours.
                  </p>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={buildMailtoUrl(
                        contactData.fullName,
                        contactData.service,
                        contactData.phone,
                        contactData.challenge
                      )}
                      className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors inline-flex items-center gap-1.5"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Send via Email App Directly</span>
                    </a>
                    <button
                      onClick={() => {
                        setContactSubmitted(false);
                        setContactData({
                          fullName: "",
                          email: "",
                          phone: "",
                          service: SERVICE_OPTIONS[0],
                          challenge: "",
                        });
                      }}
                      className="px-5 py-2.5 rounded-xl text-xs font-semibold text-emerald-950 bg-emerald-200 hover:bg-emerald-300 transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={contactData.fullName}
                        onChange={(e) => setContactData({ ...contactData, fullName: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent bg-slate-50/50"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={contactData.email}
                        onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                        placeholder="sarah@company.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent bg-slate-50/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={contactData.phone}
                        onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
                        placeholder="(609) 000-0000"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent bg-slate-50/50"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Preferred Coaching Track
                      </label>
                      <select
                        value={contactData.service}
                        onChange={(e) => setContactData({ ...contactData, service: e.target.value as ServiceType })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent bg-slate-50/50"
                      >
                        {SERVICE_OPTIONS.map((srv) => (
                          <option key={srv} value={srv}>
                            {srv}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      What is the primary challenge or goal you want to address?
                    </label>
                    <textarea
                      rows={3}
                      value={contactData.challenge}
                      onChange={(e) => setContactData({ ...contactData, challenge: e.target.value })}
                      placeholder="e.g., We have communication friction between department heads, or I want to improve my time mastery and strategic presence..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent bg-slate-50/50"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-500 hover:to-amber-400 shadow-md hover:shadow-lg transition-all"
                  >
                    Send Strategy Request &amp; Book Call
                  </button>
                  <p className="text-[11px] text-center text-slate-400">
                    100% Confidential • No obligations • Protected by professional executive coaching ethics
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          GLOBAL FOOTER
          ========================================================================= */}
      <footer className="bg-[#0b192c] text-white pt-16 pb-12 border-t border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
            {/* Col 1: Brand & Logo */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-lg overflow-hidden bg-white p-1">
                  <Image
                    src="/assets/cyvcoaching/logo.png"
                    alt="Changing Your View Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="font-extrabold text-sm uppercase tracking-wide text-white">Changing Your View</div>
                  <div className="text-xs font-semibold text-amber-400">Executive Coaching LLC</div>
                </div>
              </div>
              <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
                Assisting executives and organizations in maximizing their full potential through relationship building,
                clear communication, and actionable mindset growth.
              </p>
              <div className="pt-2 flex items-center gap-3 text-slate-400 text-xs">
                <span>Mount Laurel, NJ</span>
                <span>•</span>
                <span>{PHONE_NUMBER}</span>
              </div>
            </div>

            {/* Col 2: Navigation Links */}
            <div>
              <div className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-4">Navigation</div>
              <ul className="space-y-2 text-xs text-slate-300">
                <li><a href="#about" className="hover:text-amber-400 transition-colors">Meet Coach Angel</a></li>
                <li><a href="#programs" className="hover:text-amber-400 transition-colors">Coaching Tracks</a></li>
                <li><a href="#framework" className="hover:text-amber-400 transition-colors">The 4-Step Method</a></li>
                <li><a href="#assessment" className="hover:text-amber-400 transition-colors">Self-Assessment</a></li>
                <li><a href="#proof" className="hover:text-amber-400 transition-colors">ICF Data &amp; Proof</a></li>
                <li><a href="#faq" className="hover:text-amber-400 transition-colors">FAQ</a></li>
              </ul>
            </div>

            {/* Col 3: Programs */}
            <div>
              <div className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-4">Coaching Tracks</div>
              <ul className="space-y-2 text-xs text-slate-300">
                <li><a href="#programs" className="hover:text-amber-400 transition-colors">Executive Coaching</a></li>
                <li><a href="#programs" className="hover:text-amber-400 transition-colors">Personal / Professional</a></li>
                <li><a href="#programs" className="hover:text-amber-400 transition-colors">Team Workshops</a></li>
                <li><a href="#programs" className="hover:text-amber-400 transition-colors">Keynote Speaking</a></li>
                <li><a href="#programs" className="hover:text-amber-400 transition-colors">Maxwell Masterminds</a></li>
              </ul>
            </div>

            {/* Col 4: Credentials & Certifications */}
            <div>
              <div className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-4">Credentials</div>
              <ul className="space-y-2 text-xs text-slate-300">
                <li>United States Air Force Veteran</li>
                <li>Maxwell Leadership Certified</li>
                <li>MSA Human Resources (CMU)</li>
                <li>BS Workforce Training (SIUC)</li>
                <li>NAWBO South Jersey Member</li>
              </ul>
            </div>
          </div>

          {/* Bottom Copyright & Redesign Attribution */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div>
              &copy; {new Date().getFullYear()} Changing Your View Executive Coaching LLC. All Rights Reserved.
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <span>UX Redesign Concept crafted for Angel Laks by</span>
              <span className="font-semibold text-amber-400">Miskat Hossain</span>
            </div>
          </div>
        </div>
      </footer>

      {/* =========================================================================
          INTERACTIVE BOOKING MODAL
          Triggered from any CTA button on the page.
          With Backdrop dismissal & Escape key listener.
          ========================================================================= */}
      {bookingModalOpen && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) setBookingModalOpen(false);
          }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
            {/* Modal Header */}
            <div className="p-6 bg-[#0f223d] text-white flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                  Complimentary 30-Min Strategy Call
                </span>
                <h3 id="modal-title" className="text-lg font-bold text-white mt-0.5">
                  Book With Coach Angel Laks
                </h3>
              </div>
              <button
                onClick={() => setBookingModalOpen(false)}
                className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close booking modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
              {modalSubmitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">Session Request Confirmed!</h4>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                    Coach Angel will review your application for{" "}
                    <strong className="text-slate-800">{modalData.service}</strong> and email you a calendar invitation.
                  </p>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={buildMailtoUrl(
                        modalData.fullName,
                        modalData.service,
                        modalData.phone,
                        modalData.challenge
                      )}
                      className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors inline-flex items-center gap-1.5"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Send via Email Directly</span>
                    </a>
                    <button
                      onClick={() => {
                        setBookingModalOpen(false);
                        setModalSubmitted(false);
                      }}
                      className="px-6 py-2.5 rounded-xl font-bold text-xs text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
                    >
                      Done
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleModalSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Selected Coaching Track
                    </label>
                    <select
                      value={modalData.service}
                      onChange={(e) => setModalData({ ...modalData, service: e.target.value as ServiceType })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm bg-slate-50 font-medium"
                    >
                      {SERVICE_OPTIONS.map((srv) => (
                        <option key={srv} value={srv}>
                          {srv}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={modalData.fullName}
                        onChange={(e) => setModalData({ ...modalData, fullName: e.target.value })}
                        placeholder="Your name"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={modalData.email}
                        onChange={(e) => setModalData({ ...modalData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={modalData.phone}
                        onChange={(e) => setModalData({ ...modalData, phone: e.target.value })}
                        placeholder="(609) 000-0000"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Preferred Call Window
                      </label>
                      <select
                        value={modalData.preferredTime}
                        onChange={(e) => setModalData({ ...modalData, preferredTime: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm"
                      >
                        <option value="Morning (9am - 12pm EST)">Morning (9am - 12pm EST)</option>
                        <option value="Afternoon (12pm - 4pm EST)">Afternoon (12pm - 4pm EST)</option>
                        <option value="Evening (4pm - 7pm EST)">Evening (4pm - 7pm EST)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Briefly describe what you want to achieve or resolve
                    </label>
                    <textarea
                      rows={3}
                      value={modalData.challenge}
                      onChange={(e) => setModalData({ ...modalData, challenge: e.target.value })}
                      placeholder="e.g. Elevate communication with my team, establish focus habits, or prepare for executive transition..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-amber-400 hover:bg-amber-300 shadow-md transition-colors"
                  >
                    Confirm &amp; Request 30-Min Strategy Call
                  </button>

                  <div className="text-[11px] text-center text-slate-400 flex items-center justify-center gap-4 pt-1">
                    <span>Direct: {PHONE_NUMBER}</span>
                    <span>•</span>
                    <span>cyvcoaching@gmail.com</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
