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
  ChevronDown,
  ChevronUp,
  X,
  Star,
  Users,
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
  GraduationCap,
  Linkedin,
  Send,
  Sliders,
  DollarSign,
  TrendingUp,
  Flame,
  Layers,
  HeartHandshake,
  BookOpen,
  Quote,
  Eye,
  RotateCcw,
  AlertCircle,
  Building,
} from "lucide-react";

// Official Links & Information
const ORIGINAL_WEBSITE_URL = "https://movemeantnow.com/";
const KOI_RIVERS_LINKEDIN = "https://www.linkedin.com/in/koirivers/?isSelfProfile=false";
const OFFICIAL_EMAIL = "info@movemeantnow.com";
const OFFICIAL_ADDRESS = "5650 Whitelock Pkwy, Suite 130 #1098, Elk Grove, CA 95757, United States";
const JOTFORM_ENROLLMENT_URL = "https://pci.jotform.com/form/262160184299057";

export const SERVICE_OPTIONS = [
  "The Threshold™ Live Cohort (ICF + CCNI CCE — $97)",
  "The 90-Day Movemeant Momentum Boost™ Sprint",
  "Power Moves™ Executive & Leadership Coaching",
  "Team Alignment & Culture Development Consulting",
  "Complimentary 20-Minute Clarity Diagnostic Call",
] as const;

export type ServiceType = (typeof SERVICE_OPTIONS)[number];

interface ProgramOffering {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  serviceType: ServiceType;
  image: string;
  tagline: string;
  summary: string;
  outcomes: string[];
  deliverables: string[];
  idealFor: string;
  priceOrFormat: string;
  ctaText: string;
  highlight?: boolean;
}

const PROGRAM_OFFERINGS: ProgramOffering[] = [
  {
    id: "the-threshold",
    badge: "Dual-Accredited CCE Course",
    title: "The Threshold: Coaching Clients Who Come With an Ending, Not a Goal",
    subtitle: "Hold conversations where transition, identity, and faith converge without rushing clients toward the next goal.",
    serviceType: "The Threshold™ Live Cohort (ICF + CCNI CCE — $97)",
    image: "/assets/movemeant/ending-and-goal.jpg",
    tagline: "Your clients aren't stuck. They're standing in an ending.",
    summary:
      "Job loss. Divorce. Grief. Calling shifts. Faith reconstruction. Midlife mayhem. When we assign being 'stuck' to clients, we rush them toward action before they understand the sacred space they are in. Dual-accredited by both the International Coaching Federation (ICF) and Christian Coaches Network International (CCNI), this interactive course equips coaches and helping professionals to hold the space where transition and faith converge.",
    outcomes: [
      "Coach the ending before prematurely rushing to goals and metrics",
      "Integrate faith authentically without imposing dogma or spiritual bypassing",
      "Hold the whole person through grief and identity shifts, not just the task",
      "Earn 3.0 CCE hours recognized for both ICF and CCNI credential renewals",
      "Master live triad observed coaching practice with an ICF-credentialed mentor",
    ],
    deliverables: [
      "Live 3-hour interactive virtual cohort workshop",
      "Observed triad coaching practice with ICF PCC instructor feedback",
      "The Threshold Course Companion with ongoing lifetime resource access",
      "Official Certificate of Completion & CCE Transcript verification",
      "$50 credit applied toward your next Movemeant Continuing Education course",
    ],
    idealFor: "Professional coaches (ICF/CCNI), counselors, pastors, ministry leaders, educators, healthcare professionals, doulas.",
    priceOrFormat: "Live Virtual Cohort • $97 Introductory Rate (3.0 CCE Credits)",
    ctaText: "Enroll in Live Cohort ($97)",
    highlight: true,
  },
  {
    id: "power-moves",
    badge: "Executive & Corporate Coaching",
    title: "Power Moves Leadership Framework™",
    subtitle: "High-stakes executive coaching for leaders seeking growth, influence, and enduring business impact.",
    serviceType: "Power Moves™ Executive & Leadership Coaching",
    image: "/assets/movemeant/process-leadership.jpg",
    tagline: "Leadership today requires more than strong performance—it requires centered clarity.",
    summary:
      "Through the proprietary Power Moves Leadership Framework™, we partner with senior executives, corporate vice presidents, and high-impact leaders to strengthen how they lead, how their teams perform, and how personal growth translates into real commercial ROI.",
    outcomes: [
      "Shatter executive imposter syndrome and anchor unshakeable authority",
      "Navigate complex organizational restructuring and high-visibility promotions",
      "Establish bulletproof executive boundaries to eliminate burnout",
      "Master strategic communication and influence across board and C-suite levels",
      "Align operational demands with personal values and faith principles",
    ],
    deliverables: [
      "Bi-weekly confidential 1-on-1 executive coaching sessions with Koi Rivers, PCC",
      "Comprehensive 360° Leadership & Communication Diagnostic",
      "Bespoke Power Moves Playbook customized to your corporate landscape",
      "Direct asynchronous priority voice/text support between sessions",
    ],
    idealFor: "Corporate executives, senior directors, women in business, and emerging leaders stepping into greater visibility.",
    priceOrFormat: "3 to 6-Month Executive Retainers (Virtual or On-Site)",
    ctaText: "Inquire for Executive Coaching",
    highlight: false,
  },
  {
    id: "boost-sprint",
    badge: "High-Velocity Accelerator",
    title: "The Movemeant Momentum Boost™ (90-Day Sprint)",
    subtitle: "A high-velocity 90-day executive sprint engineered for leaders standing at a pivotal career threshold.",
    serviceType: "The 90-Day Movemeant Momentum Boost™ Sprint",
    image: "/assets/movemeant/koi-rivers-portrait-square.jpg",
    tagline: "Accelerate through your threshold. Turn transition into executive momentum.",
    summary:
      "When a pivotal transition strikes, you don't need a year-long open-ended retainer—you need concentrated clarity, somatic grounding, and tactical execution. The 90-Day Boost moves through three 30-day phases: The Threshold Audit, Power Moves Strategy, and Sustainable Team Momentum.",
    outcomes: [
      "Rapidly unpack and dismantle what has concluded in your previous role",
      "Design your personal executive brand and high-stakes negotiation positioning",
      "Reclaim 20–40 hours per month by eliminating reactive second-guessing",
      "Develop a crystallized 12-month forward roadmap and milestone tracker",
      "Attain emotional and somatic equilibrium under intense corporate pressure",
    ],
    deliverables: [
      "Six intensive 60-minute 1-on-1 strategy calls with Koi Rivers, PCC",
      "Full 360° Threshold Diagnostic and Somatic Grounding Tool",
      "Personalized Power Moves Playbook and negotiation scripts",
      "Priority Voxer/WhatsApp asynchronous voice memo access",
      "Capstone 12-Month Executive Forward Horizon Architecture",
    ],
    idealFor: "Leaders in active career pivots, newly promoted VPs, and executives recovering from high-functioning burnout.",
    priceOrFormat: "90-Day High-Velocity Sprint • Limited to 5 Leaders per Quarter",
    ctaText: "Explore 90-Day Boost Sub-Page",
    highlight: true,
  },
  {
    id: "team-culture",
    badge: "Organizational Consulting",
    title: "Team Alignment & Culture Development",
    subtitle: "From team friction to aligned execution—build healthy leaders and high-performing cultures.",
    serviceType: "Team Alignment & Culture Development Consulting",
    image: "/assets/movemeant/hero-texture.jpg",
    tagline: "Culture is not an annual retreat. It is what happens every day in between.",
    summary:
      "From cross-functional silos to high-stakes organizational change, leaders who cultivate an intentional lived culture position their teams to thrive. We help leadership teams build the frameworks, psychological safety, and accountability systems needed to execute shared vision.",
    outcomes: [
      "Eliminate communication silos between cross-functional departments",
      "Establish clear team norms, accountability metrics, and decision rules",
      "Design focused quarterly planning cadences with unambiguous milestones",
      "Cultivate high-trust environments where feedback is received and acted upon",
      "Ensure organizational vision ladders down into daily operational behavior",
    ],
    deliverables: [
      "Organizational Culture & Communications Diagnostic Audit",
      "Facilitated full-day or half-day executive leadership workshops",
      "Quarterly Strategic Planning Cadence & Team Charter Architecture",
      "Post-session implementation roadmaps and follow-up accountability syncs",
    ],
    idealFor: "Corporate leadership teams, non-profit boards, and high-growth enterprise departments.",
    priceOrFormat: "Custom Enterprise Advisory & Workshop Engagements",
    ctaText: "Schedule Culture Consultation",
    highlight: false,
  },
];

// Diagnostic questions
interface DiagnosticQuestion {
  id: number;
  question: string;
  subtitle: string;
  options: {
    label: string;
    description: string;
    pathway: ServiceType;
    scoreWeight: string;
  }[];
}

const DIAGNOSTIC_QUESTIONS: DiagnosticQuestion[] = [
  {
    id: 1,
    question: "Where are you or your clients currently standing?",
    subtitle: "Identify the primary inflection point defining your current reality.",
    options: [
      {
        label: "Standing in an Ending or Threshold",
        description: "Navigating job loss, career pivot, calling reconstruction, or grief—and need to hold the space before setting new goals.",
        pathway: "The Threshold™ Live Cohort (ICF + CCNI CCE — $97)",
        scoreWeight: "The Threshold Pathway",
      },
      {
        label: "Ready for High-Velocity Breakthrough (Next 90 Days)",
        description: "Need rapid, focused strategic realignment and executive positioning without committing to an open-ended year-long program.",
        pathway: "The 90-Day Movemeant Momentum Boost™ Sprint",
        scoreWeight: "Boost Sprint Pathway",
      },
      {
        label: "Stepping into Greater C-Suite / Executive Scope",
        description: "Leading complex business functions and needing confidential 1-on-1 advisory to sharpen presence, voice, and power moves.",
        pathway: "Power Moves™ Executive & Leadership Coaching",
        scoreWeight: "Executive Pathway",
      },
      {
        label: "Facing Team Friction & Culture Silos",
        description: "Leading a department or organization where culture is fractured and daily operational alignment is falling apart.",
        pathway: "Team Alignment & Culture Development Consulting",
        scoreWeight: "Team Culture Pathway",
      },
    ],
  },
  {
    id: 2,
    question: "What is your primary professional role?",
    subtitle: "This helps tailor our frameworks and continuing education accreditation.",
    options: [
      {
        label: "Professional Coach / Counselor (ICF / CCNI)",
        description: "Actively coaching clients and seeking dual-accredited continuing education hours and somatic transition tools.",
        pathway: "The Threshold™ Live Cohort (ICF + CCNI CCE — $97)",
        scoreWeight: "Coach Education",
      },
      {
        label: "Corporate Executive / VP / Senior Director",
        description: "Driving strategic performance, managing teams, and navigating executive-level visibility and scrutiny.",
        pathway: "The 90-Day Movemeant Momentum Boost™ Sprint",
        scoreWeight: "Executive Leadership",
      },
      {
        label: "Ministry, Non-Profit, or Community Leader",
        description: "Serving people through spiritual formation, discernment, and profound community transitions.",
        pathway: "The Threshold™ Live Cohort (ICF + CCNI CCE — $97)",
        scoreWeight: "Ministry & Faith Leadership",
      },
      {
        label: "Founder / Business Owner",
        description: "Scaling a business while fighting founder fatigue and seeking sustainable leadership rhythms.",
        pathway: "Power Moves™ Executive & Leadership Coaching",
        scoreWeight: "Founder Strategic Growth",
      },
    ],
  },
  {
    id: 3,
    question: "What role does faith play in your personal or professional leadership?",
    subtitle: "We believe in ethical integration without spiritual bypassing.",
    options: [
      {
        label: "Central Calling Foundation",
        description: "I want faith, scripture, and surrender to actively inform my discernment and how I develop others.",
        pathway: "The Threshold™ Live Cohort (ICF + CCNI CCE — $97)",
        scoreWeight: "Faith-Forward Integration",
      },
      {
        label: "Personal Anchor & Values Compass",
        description: "I appreciate faith-grounded integrity, ethics, and emotional depth while maintaining strong business excellence.",
        pathway: "The 90-Day Movemeant Momentum Boost™ Sprint",
        scoreWeight: "Ethical Leadership Anchor",
      },
      {
        label: "Open & Welcoming of All Backgrounds",
        description: "I value holistic, respectful human development and somatic tools that honor individual autonomy.",
        pathway: "Power Moves™ Executive & Leadership Coaching",
        scoreWeight: "Inclusive Human Development",
      },
      {
        label: "Organizational Culture Alignment",
        description: "Our focus is establishing healthy team norms, psychological safety, and lived workplace values.",
        pathway: "Team Alignment & Culture Development Consulting",
        scoreWeight: "Workplace Culture",
      },
    ],
  },
];

export interface DiagnosticArchetype {
  service: ServiceType;
  title: string;
  badge: string;
  score: number;
  description: string;
  actionStep: string;
  first30Days: string;
  somaticFocus: string;
}

export const computeDiagnosticResult = (answers: Record<number, number>): DiagnosticArchetype => {
  const q1 = answers[1] ?? 0;
  const q2 = answers[2] ?? 0;
  const q3 = answers[3] ?? 0;

  const scores: Record<ServiceType, number> = {
    "The Threshold™ Live Cohort (ICF + CCNI CCE — $97)": 0,
    "The 90-Day Movemeant Momentum Boost™ Sprint": 0,
    "Power Moves™ Executive & Leadership Coaching": 0,
    "Team Alignment & Culture Development Consulting": 0,
    "Complimentary 20-Minute Clarity Diagnostic Call": 0,
  };

  const q1Option = DIAGNOSTIC_QUESTIONS[0]?.options[q1];
  if (q1Option) scores[q1Option.pathway] += 50;

  const q2Option = DIAGNOSTIC_QUESTIONS[1]?.options[q2];
  if (q2Option) scores[q2Option.pathway] += 30;

  const q3Option = DIAGNOSTIC_QUESTIONS[2]?.options[q3];
  if (q3Option) scores[q3Option.pathway] += 20;

  let highestService: ServiceType = "The Threshold™ Live Cohort (ICF + CCNI CCE — $97)";
  let maxScore = -1;

  const candidateServices: ServiceType[] = [
    "The Threshold™ Live Cohort (ICF + CCNI CCE — $97)",
    "The 90-Day Movemeant Momentum Boost™ Sprint",
    "Power Moves™ Executive & Leadership Coaching",
    "Team Alignment & Culture Development Consulting",
  ];

  for (const s of candidateServices) {
    if (scores[s] > maxScore) {
      maxScore = scores[s];
      highestService = s;
    }
  }

  if (highestService === "Team Alignment & Culture Development Consulting") {
    return {
      service: highestService,
      title: "Team Alignment & Culture Development Consulting",
      badge: "The Lived Culture Architect",
      score: 96,
      description:
        "Your organization or department is navigating friction, cross-functional silos, or operational misalignment. Rather than rushing into another superficial annual retreat, you need an intentional, everyday operating rhythm and psychological safety framework that aligns vision with daily behavior.",
      actionStep:
        "Book a Team Culture Diagnostic Strategy Session with Koi Rivers to map out departmental friction points and design your quarterly alignment charter.",
      first30Days:
        "Comprehensive culture diagnostic audit, executive stakeholder interviews, and design of your custom team charter.",
      somaticFocus:
        "Down-regulating team anxiety, establishing respectful feedback norms, and somatic pacing in tense cross-functional meetings.",
    };
  }

  if (highestService === "The 90-Day Movemeant Momentum Boost™ Sprint") {
    return {
      service: highestService,
      title: "The Movemeant Momentum Boost™ (90-Day Executive Sprint)",
      badge: "The High-Velocity Turnaround Executive",
      score: 98,
      description:
        "You are standing at a pivotal career transition or executive promotion where year-long ambiguity is not an option. You require rapid somatic grounding, unshakeable boundary architecture, and tactical executive positioning in an intensive 90-day arc.",
      actionStep:
        "Apply for one of the 5 limited quarterly seats in the Movemeant Momentum Boost™ sprint to evaluate your transition threshold with Coach Koi Rivers.",
      first30Days:
        "Phase 1: The Threshold Audit & Somatic Grounding to dismantle what has concluded and stop reactive second-guessing.",
      somaticFocus:
        "4-7-8 vagal nerve reset and somatic boundary visualization to maintain emotional equilibrium under executive scrutiny.",
    };
  }

  if (highestService === "Power Moves™ Executive & Leadership Coaching") {
    return {
      service: highestService,
      title: "Power Moves Leadership Framework™ (Executive Advisory)",
      badge: "The Strategic Executive Visionary",
      score: 97,
      description:
        "You operate in high-stakes corporate or entrepreneurial environments where commercial results, board influence, and personal presence must align. You need confidential 1-on-1 strategic advisory to master executive voice, conquer imposter friction, and lead with centered authority.",
      actionStep:
        "Inquire for a confidential executive coaching retainer with Koi Rivers, PCC, customized to your corporate landscape and strategic objectives.",
      first30Days:
        "360° Leadership Diagnostic, stakeholder communication audit, and bespoke Power Moves Playbook construction.",
      somaticFocus:
        "Executive presence embodiment, vocal grounding, and somatic composure before high-stakes board presentations.",
    };
  }

  return {
    service: "The Threshold™ Live Cohort (ICF + CCNI CCE — $97)",
    title: "The Threshold: Coaching Clients Who Come With an Ending, Not a Goal",
    badge: "The Sacred Transition & Coach Education Specialist",
    score: 99,
    description:
      "You are a coach, counselor, ministry leader, or professional standing in a profound ending or equipping others through major life interruptions. Traditional 'goal rushing' will only cause harm—you need dual-accredited (ICF + CCNI) competencies to coach endings with somatic depth and faith-forward discernment.",
    actionStep:
      "Register for the upcoming virtual live cohort ($97 intro rate) to earn 3.0 CCE credits and participate in observed triad coaching practicums with ICF mentors.",
    first30Days:
      "Enroll in the live 3-hour intensive, receive The Threshold Course Companion, and complete your verified CCE reflection transcript.",
    somaticFocus:
      "Holding space without absorbing grief; somatic grounding anchors informed by RYT-200 principles for holding others through transition.",
  };
};

const FAQS = [
  {
    q: "What makes The Threshold™ course different from other coach education courses?",
    a: "Most coaching programs rush participants directly toward goals, SMART metrics, and rapid action plans. But when clients are standing in an ending—such as sudden job displacement, divorce, grief, faith deconstruction, or midlife transition—rushing them toward action causes emotional harm. The Threshold™ is dual-accredited by both the International Coaching Federation (ICF) and Christian Coaches Network International (CCNI) to equip you with the somatic, spiritual, and professional competencies to coach endings before rushing into goals.",
  },
  {
    q: "Can I receive continuing education credits for both ICF and CCNI from the same course?",
    a: "Yes! If you hold credentials with both organizations, the 3-hour course delivers 3.0 CCE credits recognized by both the ICF and CCNI simultaneously, in full compliance with each organization's credential renewal guidelines. To earn your credits, you must attend 90% of the live session, participate in the observed triad coaching practicum, and submit a brief 200-word written reflection.",
  },
  {
    q: "Do I need to be a Christian to enroll in Movemeant courses or work with Coach Koi?",
    a: "No. While Coach Koi Rivers is faith-forward and grounded in Christian wisdom (Proverbs 3:6), all participants are warmly welcomed. The course teaches ethical faith integration while strictly honoring client autonomy and professional coaching boundaries without spiritual bypassing.",
  },
  {
    q: "What is the 90-Day Movemeant Momentum Boost™ sub-page and sprint?",
    a: "The Boost is our dedicated high-velocity 90-day accelerator designed for executive women and senior directors standing at a pivotal career threshold. It combines bi-weekly 1-on-1 strategy sessions with Koi Rivers, priority asynchronous voice support, somatic grounding, and the Power Moves Playbook to achieve breakthrough momentum in 90 days. You can explore full details on our dedicated /movemeantnow/boost sub-page.",
  },
  {
    q: "What is your refund, transfer, and cancellation policy?",
    a: "Cancellations received at least 7 calendar days before a scheduled course are eligible for a full refund less non-refundable processing fees. Within 7 days, registrations can be transferred one time to a future Movemeant CCE course. If Movemeant cancels or reschedules, you receive a 100% full refund or immediate transfer option.",
  },
];

const UX_AUDIT_POINTS = [
  {
    id: "01",
    title: "Elimination of GoDaddy Builder Technical Bloat",
    problem:
      "The original live site (movemeantnow.com) runs on GoDaddy Website Builder 8.0 with 166KB of unminified inline styles, bloated tracking scripts, and slow initial paint times.",
    solution:
      "Re-engineered on Next.js 14 App Router with instant static compilation, sub-second TTFB, optimized Tailwind CSS tokens, and zero cumulative layout shift (CLS).",
    tag: "Performance & Core Web Vitals",
  },
  {
    id: "02",
    title: "Repair of Broken Content Loops & Information Hierarchy",
    problem:
      "The legacy homepage contained a broken loop displaying the exact phrase 'building people who build what matters' four consecutive times in raw stacked text.",
    solution:
      "Replaced with an editorial visual narrative featuring Koi's signature query: 'What if you were placed, not displaced?' alongside clear credential pillars and structured service cards.",
    tag: "Copywriting & Hierarchy",
  },
  {
    id: "03",
    title: "Hero Credential Stacking & Executive Gravitas",
    problem:
      "Koi Rivers brings 20+ years of Fortune 500 marketing leadership, ICF PCC credentials, an ICF DEIB directorship, and the 2025 Exceptional Woman of Color award, but they were buried in an unstyled bullet list on an internal page.",
    solution:
      "Brought Koi's authentic high-resolution portrait, ICF PCC seal, CCNI accreditation badge, and civic leadership credentials directly into the above-the-fold hero section.",
    tag: "Trust & Credibility",
  },
  {
    id: "04",
    title: "Frictionless Interactive Diagnostic vs Raw External Jotform",
    problem:
      "Course enrollment forced visitors off-site to a raw, unstyled Jotform link without previewing the syllabus, triad practicum details, or schedule expectations.",
    solution:
      "Embedded an interactive Generative UI Diagnostic that assesses readiness, recommends tailored pathways, and opens a seamless inline intake engine with instant feedback.",
    tag: "Conversion Funnel",
  },
  {
    id: "05",
    title: "Dedicated Sub-Page Architecture for The Boost Sprint",
    problem:
      "High-intent executive clients had no direct, focused landing experience for rapid career acceleration sprints.",
    solution:
      "Created a dedicated high-converting sub-page (/movemeantnow/boost) featuring a 3-Phase Sprint Roadmap, interactive ROI & hesitation calculator, and executive intake.",
    tag: "Sub-Page Architecture",
  },
];

export default function MovemeantClient() {
  const [pitchDetailsOpen, setPitchDetailsOpen] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [selectedService, setSelectedService] = useState<ServiceType>(
    "The Threshold™ Live Cohort (ICF + CCNI CCE — $97)"
  );
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [bookingSuccess, setBookingSuccess] = useState<boolean>(false);

  // Diagnostic state
  const [diagnosticStep, setDiagnosticStep] = useState<number>(0);
  const [diagnosticAnswers, setDiagnosticAnswers] = useState<Record<number, number>>({});
  const [diagnosticResultReady, setDiagnosticResultReady] = useState<boolean>(false);

  // Shift interactive toggle
  const [activeShiftTab, setActiveShiftTab] = useState<"ending" | "goal">("ending");

  // Booking form
  const [bookingForm, setBookingForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    organization: "",
    service: "The Threshold™ Live Cohort (ICF + CCNI CCE — $97)",
    message: "",
    preferredDate: "Next Available Live Cohort",
  });

  const openBookingWithService = (service: ServiceType) => {
    setSelectedService(service);
    setBookingForm((prev) => ({ ...prev, service }));
    setIsBookingOpen(true);
    setBookingSuccess(false);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({
      particleCount: 120,
      spread: 75,
      origin: { y: 0.6 },
      colors: ["#E5A93C", "#529477", "#F5C467", "#E08769"],
    });
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
        organization: "",
        service: "The Threshold™ Live Cohort (ICF + CCNI CCE — $97)",
        message: "",
        preferredDate: "Next Available Live Cohort",
      });
    }, 300);
  };

  const handleDiagnosticSelect = (questionId: number, optionIdx: number) => {
    setDiagnosticAnswers((prev) => ({ ...prev, [questionId]: optionIdx }));
    if (diagnosticStep < DIAGNOSTIC_QUESTIONS.length - 1) {
      setDiagnosticStep((s) => s + 1);
    } else {
      setDiagnosticResultReady(true);
    }
  };

  const resetDiagnostic = () => {
    setDiagnosticStep(0);
    setDiagnosticAnswers({});
    setDiagnosticResultReady(false);
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
              Digital Flagship Concept for <strong className="text-white">Koi Rivers, PCC</strong>
            </span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span className="text-white/70">
              Movemeant Coaching & Consultancy UX Redesign by <strong className="text-[#E5A93C]">Miskat Hossain</strong>
            </span>
            <span className="hidden sm:inline text-white/20">•</span>
            <Link
              href="/movemeantnow/boost"
              className="text-[#E5A93C] hover:underline flex items-center gap-1 font-semibold"
            >
              <span>Sub-Page: /movemeantnow/boost</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setPitchDetailsOpen(!pitchDetailsOpen)}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#161B26] hover:bg-[#202737] text-[#E5A93C] font-medium transition-all border border-[#E5A93C]/30 text-[11px]"
            >
              <Zap className="w-3 h-3 text-[#E5A93C]" />
              <span>{pitchDetailsOpen ? "Hide Redesign Blueprint" : "Why Upgrade from GoDaddy?"}</span>
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

        {/* Expandable Pitch Blueprint */}
        {pitchDetailsOpen && (
          <div className="max-w-7xl mx-auto mt-3 pt-3 border-t border-white/10 pb-2 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-[11px]">
              <div className="p-3.5 rounded-xl bg-[#121622] border border-[#E5A93C]/20">
                <div className="font-bold text-white flex items-center gap-1.5 mb-1">
                  <Zap className="w-3.5 h-3.5 text-[#E5A93C]" />
                  Sub-Second Headless Speed
                </div>
                <p className="text-[#A39E93] leading-relaxed">
                  Eliminates 166KB of GoDaddy builder script overhead. Blazing-fast Next.js architecture with instant transitions and zero layout shifts.
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-[#121622] border border-[#E5A93C]/20">
                <div className="font-bold text-white flex items-center gap-1.5 mb-1">
                  <Award className="w-3.5 h-3.5 text-amber-300" />
                  Dual ICF & CCNI Credibility
                </div>
                <p className="text-[#A39E93] leading-relaxed">
                  Positions Koi Rivers' 20+ years of Fortune 500 communications, PCC credentials, and DEIB directorship right above the fold.
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-[#121622] border border-[#E5A93C]/20">
                <div className="font-bold text-white flex items-center gap-1.5 mb-1">
                  <Sliders className="w-3.5 h-3.5 text-[#529477]" />
                  Interactive Generative UI
                </div>
                <p className="text-[#A39E93] leading-relaxed">
                  Includes The Threshold™ Diagnostic tool, interactive perspective toggles, and seamless inline intake replacing raw Jotform URLs.
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-[#121622] border border-[#E5A93C]/20">
                <div className="font-bold text-white flex items-center gap-1.5 mb-1">
                  <Layers className="w-3.5 h-3.5 text-[#E08769]" />
                  Dedicated /boost Sub-Page
                </div>
                <p className="text-[#A39E93] leading-relaxed">
                  Features a tailored 90-day executive sprint accelerator with dynamic ROI hesitation calculator and high-converting enrollment funnel.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ========================================================= */}
      {/* 2. STICKY LUXURY NAVIGATION                               */}
      {/* ========================================================= */}
      <header className="sticky top-0 z-40 bg-[#0B0E14]/90 backdrop-blur-md border-b border-white/[0.08] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Logo brand */}
          <Link href="#hero" className="flex items-center gap-3.5 group">
            <div className="relative h-11 w-44 sm:h-12 sm:w-52 transition-transform group-hover:scale-[1.02]">
              <Image
                src="/assets/movemeant/logo.png"
                alt="Movemeant Coaching and Consultancy Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#C8C2B7]">
            <a href="#the-shift" className="hover:text-[#E5A93C] transition-colors py-1">
              The Shift
            </a>
            <a href="#diagnostic" className="hover:text-[#E5A93C] transition-colors py-1">
              Diagnostic
            </a>
            <a href="#coach-education" className="hover:text-[#E5A93C] transition-colors py-1">
              Coach Education
            </a>
            <a href="#power-moves" className="hover:text-[#E5A93C] transition-colors py-1">
              Power Moves™
            </a>
            <a href="#team-culture" className="hover:text-[#E5A93C] transition-colors py-1">
              Team Culture
            </a>
            <a href="#about-koi" className="hover:text-[#E5A93C] transition-colors py-1">
              About Koi
            </a>
            <a href="#ux-audit" className="hover:text-[#E5A93C] transition-colors py-1">
              UX Audit
            </a>
            <Link
              href="/movemeantnow/boost"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#E5A93C]/10 text-[#E5A93C] border border-[#E5A93C]/30 hover:bg-[#E5A93C]/20 transition-all"
            >
              <Flame className="w-3.5 h-3.5" />
              <span>Boost Sprint</span>
            </Link>
          </nav>

          {/* CTAs */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => openBookingWithService("Complimentary 20-Minute Clarity Diagnostic Call")}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium text-white hover:text-[#E5A93C] border border-white/10 hover:border-white/20 transition-colors"
            >
              <span>Clarity Call</span>
            </button>
            <button
              onClick={() => openBookingWithService("The Threshold™ Live Cohort (ICF + CCNI CCE — $97)")}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-gradient-to-r from-[#E5A93C] to-[#D4972A] hover:from-[#F5C467] hover:to-[#E5A93C] text-[#0B0E14] shadow-lg shadow-[#E5A93C]/20 transition-all transform active:scale-95"
            >
              <span>Enroll Sept Cohort</span>
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

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0F141F] border-b border-white/10 px-6 py-5 space-y-3">
            <a
              href="#the-shift"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-white hover:text-[#E5A93C]"
            >
              The Shift: Ending vs Goal
            </a>
            <a
              href="#diagnostic"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-white hover:text-[#E5A93C]"
            >
              Interactive Diagnostic
            </a>
            <a
              href="#coach-education"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-white hover:text-[#E5A93C]"
            >
              Coach Education (ICF + CCNI)
            </a>
            <a
              href="#power-moves"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-white hover:text-[#E5A93C]"
            >
              Power Moves Leadership Framework™
            </a>
            <a
              href="#team-culture"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-white hover:text-[#E5A93C]"
            >
              Team Culture & Alignment
            </a>
            <a
              href="#about-koi"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-white hover:text-[#E5A93C]"
            >
              About Koi Rivers, PCC
            </a>
            <a
              href="#ux-audit"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-white hover:text-[#E5A93C]"
            >
              UX Redesign Audit
            </a>
            <Link
              href="/movemeantnow/boost"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-bold text-[#E5A93C] pt-2 border-t border-white/10"
            >
              → The 90-Day Boost Sprint (/boost)
            </Link>
          </div>
        )}
      </header>

      {/* ========================================================= */}
      {/* 3. HERO SECTION                                           */}
      {/* ========================================================= */}
      <section id="hero" className="relative pt-12 sm:pt-20 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-[#E5A93C]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 right-10 w-[450px] h-[350px] bg-[#529477]/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          {/* Live Cohort Banner */}
          <div className="mb-8 flex justify-center lg:justify-start">
            <button
              onClick={() => openBookingWithService("The Threshold™ Live Cohort (ICF + CCNI CCE — $97)")}
              className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#161B26] border border-[#E5A93C]/30 text-xs text-[#E5A93C] hover:border-[#E5A93C] transition-all shadow-md"
            >
              <span className="w-2 h-2 rounded-full bg-[#529477] animate-pulse" />
              <span className="font-semibold text-white">Now Enrolling:</span>
              <span className="text-[#C8C2B7]">Sept 29 Live Cohort • ICF + CCNI Accredited • $97 Intro Rate</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 text-[#E5A93C]" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Vision & Action */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#E5A93C]">
                <span className="w-6 h-[1px] bg-[#E5A93C]" />
                <span>Movemeant Coaching & Consultancy</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-light text-white tracking-tight leading-[1.12]">
                What If You Were{" "}
                <span className="font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-[#F5C467] via-[#E5A93C] to-[#E08769]">
                  Placed,
                </span>{" "}
                Not Displaced?
              </h1>

              <p className="text-base sm:text-lg text-[#C8C2B7] max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
                Dual-accredited coach education, executive consulting, and faith-forward formation for leaders who build what matters. Transforming unexpected life interruptions into profound calling and unshakeable authority.
              </p>

              {/* 4-Pillar Credential Strip */}
              <div className="pt-2 pb-2">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-2xl mx-auto lg:mx-0">
                  <div className="p-3 rounded-2xl bg-[#121622] border border-white/[0.08] text-center lg:text-left">
                    <div className="text-xs font-bold text-[#E5A93C]">ICF PCC</div>
                    <div className="text-[11px] text-[#A39E93] mt-0.5">Credentialed Coach</div>
                  </div>
                  <div className="p-3 rounded-2xl bg-[#121622] border border-white/[0.08] text-center lg:text-left">
                    <div className="text-xs font-bold text-white">ICF + CCNI</div>
                    <div className="text-[11px] text-[#A39E93] mt-0.5">Dual-Accredited CCE</div>
                  </div>
                  <div className="p-3 rounded-2xl bg-[#121622] border border-white/[0.08] text-center lg:text-left">
                    <div className="text-xs font-bold text-[#529477]">20+ Years</div>
                    <div className="text-[11px] text-[#A39E93] mt-0.5">Fortune 500 Comms</div>
                  </div>
                  <div className="p-3 rounded-2xl bg-[#121622] border border-white/[0.08] text-center lg:text-left">
                    <div className="text-xs font-bold text-amber-300">2025 Honoree</div>
                    <div className="text-[11px] text-[#A39E93] mt-0.5">Woman of Color</div>
                  </div>
                </div>
              </div>

              {/* Dual Action CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
                <button
                  onClick={() => openBookingWithService("The Threshold™ Live Cohort (ICF + CCNI CCE — $97)")}
                  className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-semibold bg-gradient-to-r from-[#E5A93C] to-[#D4972A] hover:from-[#F5C467] hover:to-[#E5A93C] text-[#0B0E14] shadow-xl shadow-[#E5A93C]/20 transition-all flex items-center justify-center gap-2 group"
                >
                  <span>Discover Coach Education</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                <Link
                  href="/movemeantnow/boost"
                  className="w-full sm:w-auto px-6 py-4 rounded-full text-sm font-medium bg-[#161B26] hover:bg-[#202737] text-white border border-white/10 transition-all flex items-center justify-center gap-2"
                >
                  <Flame className="w-4 h-4 text-[#E5A93C]" />
                  <span>The 90-Day Boost Sprint</span>
                </Link>
                <a
                  href="#diagnostic"
                  className="w-full sm:w-auto px-5 py-4 rounded-full text-sm font-medium text-[#C8C2B7] hover:text-white transition-colors flex items-center justify-center gap-1.5"
                >
                  <Sliders className="w-4 h-4 text-[#529477]" />
                  <span>Readiness Diagnostic</span>
                </a>
              </div>

              {/* Scripture Grounding Quote */}
              <div className="pt-4 border-t border-white/[0.08] max-w-xl mx-auto lg:mx-0 text-xs text-[#A39E93] italic flex items-center justify-center lg:justify-start gap-2">
                <Quote className="w-4 h-4 text-[#E5A93C] shrink-0" />
                <span>
                  "Seek His will in all you do, and He will show you which path to take." — Proverbs 3:6
                </span>
              </div>
            </div>

            {/* Right Column: Authentic Headshot & Accreditation Badges */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md">
                {/* Radiant Backdrop */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#E5A93C]/20 via-[#529477]/10 to-transparent blur-xl" />

                {/* Main Portrait Card */}
                <div className="relative rounded-3xl bg-[#121622] border border-[#E5A93C]/30 p-4 shadow-2xl overflow-hidden">
                  <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden">
                    <Image
                      src="/assets/movemeant/koi-rivers-portrait.jpg"
                      alt="Koi Rivers, PCC — Founder & Chief Strategist, Movemeant Coaching & Consultancy"
                      fill
                      className="object-cover object-top"
                      priority
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14] via-transparent to-transparent opacity-80" />

                    {/* Bottom Card Identity */}
                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#0B0E14]/85 backdrop-blur-md border border-white/10 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-serif text-lg font-medium text-white">Koi Rivers, PCC</span>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#E5A93C] text-[#0B0E14]">
                          FOUNDER
                        </span>
                      </div>
                      <p className="text-xs text-[#E5A93C]">Chief Strategist & Executive Leadership Coach</p>
                      <p className="text-[11px] text-[#A39E93]">
                        Director of DEIB, ICF Sacramento • 2025 Exceptional Woman of Color
                      </p>
                    </div>
                  </div>

                  {/* Dual Accreditation Logo Badges */}
                  <div className="pt-4 pb-1 px-2 flex items-center justify-between gap-4 border-t border-white/5 mt-3">
                    <div className="flex items-center gap-2">
                      <div className="relative h-10 w-24">
                        <Image
                          src="/assets/movemeant/icf-cce-badge.png"
                          alt="ICF CCE Continuing Coach Education Accredited"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <div className="text-[10px] text-[#706B62] uppercase tracking-wider font-semibold">
                      DUAL-ACCREDITED
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="relative h-10 w-24">
                        <Image
                          src="/assets/movemeant/ccni-accreditation-badge.png"
                          alt="Christian Coaches Network International (CCNI) Accredited"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Seal Badge */}
                <div className="absolute -top-4 -right-4 p-3 rounded-2xl bg-[#182030] border border-[#E5A93C]/40 shadow-xl hidden sm:flex items-center gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-[#E5A93C]" />
                  <div className="text-left text-[11px]">
                    <div className="font-bold text-white">ICF PCC</div>
                    <div className="text-[#A39E93]">Certified Coach</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. THE CORE SHIFT: ENDING VS GOAL                         */}
      {/* ========================================================= */}
      <section id="the-shift" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0F141F] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5A93C]/10 text-[#E5A93C] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#E5A93C]/20">
              The Movemeant Core Philosophy
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white mb-4">
              Your Clients Aren't Stuck. They're Standing in an Ending.
            </h2>
            <p className="text-base text-[#C8C2B7] font-light leading-relaxed">
              Job loss. Divorce. Grief. Calling shifts. Faith reconstruction. Midlife mayhem. When we rush clients toward goals before they understand the space they are standing in, we miss Who is waiting to meet them in the mess.
            </p>
          </div>

          {/* Interactive Perspective Switcher */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex p-1.5 rounded-full bg-[#121622] border border-white/10">
              <button
                onClick={() => setActiveShiftTab("ending")}
                className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeShiftTab === "ending"
                    ? "bg-[#E5A93C] text-[#0B0E14] shadow-md"
                    : "text-[#A39E93] hover:text-white"
                }`}
              >
                The Movemeant Way: Coach The Ending
              </button>
              <button
                onClick={() => setActiveShiftTab("goal")}
                className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeShiftTab === "goal"
                    ? "bg-rose-500/80 text-white shadow-md"
                    : "text-[#A39E93] hover:text-white"
                }`}
              >
                Traditional Coaching: Rushing to Goals
              </button>
            </div>
          </div>

          {/* Perspective Comparison Card */}
          <div className="rounded-3xl bg-[#141A28] border border-white/10 p-6 sm:p-10 shadow-2xl">
            {activeShiftTab === "ending" ? (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#529477]/20 text-[#529477] text-xs font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Transformational Somatic & Faith-Forward Coaching
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif text-white">
                    Holding Space for What Has Concluded
                  </h3>
                  <p className="text-sm text-[#C8C2B7] leading-relaxed font-light">
                    Instead of forcing people into premature action plans, Movemeant equips you to slow down, regulate the nervous system, and discern the sacred threshold. We coach the ending before rushing to the goal.
                  </p>
                  <ul className="space-y-3 text-xs text-[#E5E0D8] pt-2">
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#529477] shrink-0 mt-0.5" />
                      <span>
                        <strong>Honors True Transition:</strong> Gives dignity to loss, grief, and identity shifts rather than labeling them as laziness or lack of motivation.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#529477] shrink-0 mt-0.5" />
                      <span>
                        <strong>Ethical Faith Integration:</strong> Invites spiritual discernment and Proverbs 3:6 surrender without religious shaming or spiritual bypassing.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#529477] shrink-0 mt-0.5" />
                      <span>
                        <strong>Long-Term Authority:</strong> Once the ending is fully understood and released, new leadership moves become powerful, aligned, and permanent.
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="lg:col-span-5 bg-[#0B0E14] rounded-2xl p-6 border border-[#529477]/30 space-y-4">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#529477]">
                    The Threshold™ Framework
                  </div>
                  <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-white/10">
                    <Image
                      src="/assets/movemeant/ending-and-goal.jpg"
                      alt="The Threshold Framework: Coaching Clients Who Come with an Ending, Not a Goal"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-[11px] text-[#A39E93] italic">
                    Dual-accredited continuing education course recognized by both ICF and CCNI (3.0 CCE credits).
                  </p>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-bold">
                    <AlertCircle className="w-3.5 h-3.5" />
                    The Industry's Common Pitfall
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif text-white">
                    Why Traditional "Goal Rushing" Fails in Crisis
                  </h3>
                  <p className="text-sm text-[#C8C2B7] leading-relaxed font-light">
                    When traditional coaches hear hesitation, they default to aggressive accountability, habit tracking, and quarterly KPIs. But when someone is standing in a profound ending, pushing for goals causes burnout and emotional whiplash.
                  </p>
                  <ul className="space-y-3 text-xs text-[#E5E0D8] pt-2">
                    <li className="flex items-start gap-2.5">
                      <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <span>
                        <strong>Spiritual Bypassing:</strong> Slapping quick motivational quotes or scripture over real corporate trauma and grief.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <span>
                        <strong>Action Without Discernment:</strong> Racing to apply for jobs or launch new projects before discovering where you are truly placed.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <span>
                        <strong>High-Functioning Burnout:</strong> Masking unresolved endings behind outward corporate performance until collapse occurs.
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="lg:col-span-5 bg-[#0B0E14] rounded-2xl p-6 border border-rose-500/30 space-y-4 text-center">
                  <div className="w-12 h-12 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center mx-auto">
                    <RotateCcw className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-lg text-white">Break the Cycle of False Urgency</h4>
                  <p className="text-xs text-[#A39E93] leading-relaxed">
                    "Success stopped being about titles and outward achievement. It became about faithfulness. That shift didn't just change my career. It transformed my calling."
                  </p>
                  <div className="text-xs font-semibold text-[#E5A93C]">— Koi Rivers, PCC</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. INTERACTIVE GENERATIVE DIAGNOSTIC TOOL                  */}
      {/* ========================================================= */}
      <section id="diagnostic" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#529477]/10 text-[#529477] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#529477]/20">
              Interactive Generative Assessment
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-white mb-3">
              The Threshold™ & Leadership Readiness Diagnostic
            </h2>
            <p className="text-sm text-[#A39E93]">
              Answer 3 brief questions to determine whether you or your clients are stuck or standing in a threshold—and discover your recommended pathway.
            </p>
          </div>

          <div className="rounded-3xl bg-[#121622] border border-[#E5A93C]/30 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            {!diagnosticResultReady ? (
              <div className="space-y-6">
                {/* Progress Indicator */}
                <div className="flex items-center justify-between text-xs text-[#A39E93] pb-2 border-b border-white/10">
                  <span>Question {diagnosticStep + 1} of {DIAGNOSTIC_QUESTIONS.length}</span>
                  <span className="text-[#E5A93C] font-semibold">
                    {Math.round(((diagnosticStep + 1) / DIAGNOSTIC_QUESTIONS.length) * 100)}% Complete
                  </span>
                </div>

                {/* Question */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif text-white">
                    {DIAGNOSTIC_QUESTIONS[diagnosticStep].question}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A39E93] mt-1 font-light">
                    {DIAGNOSTIC_QUESTIONS[diagnosticStep].subtitle}
                  </p>
                </div>

                {/* Options Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  {DIAGNOSTIC_QUESTIONS[diagnosticStep].options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleDiagnosticSelect(DIAGNOSTIC_QUESTIONS[diagnosticStep].id, idx)}
                      className="p-4 rounded-2xl bg-[#0B0E14] border border-white/10 hover:border-[#E5A93C] hover:bg-[#182030] text-left transition-all group"
                    >
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <span className="font-semibold text-sm text-white group-hover:text-[#E5A93C] transition-colors">
                          {option.label}
                        </span>
                        <ArrowRight className="w-4 h-4 text-[#706B62] group-hover:text-[#E5A93C] transition-colors shrink-0 mt-0.5" />
                      </div>
                      <p className="text-xs text-[#A39E93] leading-relaxed">
                        {option.description}
                      </p>
                    </button>
                  ))}
                </div>

                {diagnosticStep > 0 && (
                  <div className="pt-2">
                    <button
                      onClick={() => setDiagnosticStep((s) => s - 1)}
                      className="text-xs text-[#A39E93] hover:text-white transition-colors"
                    >
                      ← Previous Question
                    </button>
                  </div>
                )}
              </div>
            ) : (
              (() => {
                const result = computeDiagnosticResult(diagnosticAnswers);
                return (
                  <div className="space-y-6 animate-in zoom-in-95 duration-200">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#529477]/20 text-[#529477] flex items-center justify-center font-bold">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold text-[#529477] uppercase tracking-wider">
                          Assessment Analysis Complete
                        </span>
                        <h3 className="text-2xl font-serif text-white">Your Recommended Movemeant Pathway</h3>
                      </div>
                    </div>

                    <div className="p-6 sm:p-8 rounded-2xl bg-[#0B0E14] border border-[#E5A93C]/40 space-y-5">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#E5A93C]/10 text-[#E5A93C] border border-[#E5A93C]/30">
                            Archetype: {result.badge}
                          </span>
                        </div>
                        <span className="text-xs text-[#529477] font-semibold bg-[#529477]/10 px-3 py-1 rounded-full border border-[#529477]/30">
                          {result.score}% Strategic Alignment
                        </span>
                      </div>

                      <div>
                        <h4 className="text-xl sm:text-2xl font-serif font-medium text-white">
                          {result.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-[#C8C2B7] leading-relaxed font-light mt-2">
                          {result.description}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                        <div className="p-3.5 rounded-xl bg-[#121622] border border-white/5 space-y-1">
                          <div className="text-[11px] font-bold text-[#E5A93C] uppercase tracking-wider">
                            First 30 Days Focus
                          </div>
                          <p className="text-xs text-[#E5E0D8] leading-relaxed">
                            {result.first30Days}
                          </p>
                        </div>
                        <div className="p-3.5 rounded-xl bg-[#121622] border border-white/5 space-y-1">
                          <div className="text-[11px] font-bold text-[#529477] uppercase tracking-wider">
                            Somatic & Discernment Anchor
                          </div>
                          <p className="text-xs text-[#E5E0D8] leading-relaxed">
                            {result.somaticFocus}
                          </p>
                        </div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-[#182030]/60 border border-[#E5A93C]/20 text-xs text-[#C8C2B7] space-y-1">
                        <div className="font-semibold text-white">Recommended Next Step:</div>
                        <p>{result.actionStep}</p>
                      </div>

                      <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                        <button
                          onClick={() => {
                            setSelectedService(result.service);
                            setBookingForm((prev) => ({
                              ...prev,
                              service: result.service,
                              message: `[Diagnostic Result: ${result.badge} (${result.score}% match)] — ${result.actionStep}`,
                            }));
                            setIsBookingOpen(true);
                            setBookingSuccess(false);
                          }}
                          className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-semibold bg-[#E5A93C] hover:bg-[#F5C467] text-[#0B0E14] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#E5A93C]/20"
                        >
                          <span>Proceed with {result.badge} Intake</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>

                        <button
                          onClick={resetDiagnostic}
                          className="text-xs text-[#A39E93] hover:text-white transition-colors"
                        >
                          Retake Assessment
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })()
            )}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. DUAL-ACCREDITED COACH EDUCATION (ICF + CCNI)            */}
      {/* ========================================================= */}
      <section id="coach-education" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0F141F] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5A93C]/10 text-[#E5A93C] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#E5A93C]/20">
              ICF & CCNI Dual-Accredited CCE Course
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white mb-4">
              The Threshold: Coaching Clients Who Come With an Ending, Not a Goal
            </h2>
            <p className="text-base text-[#C8C2B7] font-light leading-relaxed">
              Equipping professional coaches, ministry leaders, and helping professionals to hold the sacred space where transition and faith converge—without rushing folks toward premature action.
            </p>
          </div>

          <div className="rounded-3xl bg-[#141A28] border border-white/10 p-6 sm:p-10 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Course syllabus & structure */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-[#E5A93C]/20 text-[#E5A93C] text-xs font-bold">
                    Now Enrolling: Live Sept 29 Cohort
                  </span>
                  <span className="text-xs text-[#529477] font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    3.0 CCE Credits Included
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif text-white font-normal">
                  Ready to Go Where Most Coaches Rush Past?
                </h3>
                <p className="text-sm text-[#C8C2B7] leading-relaxed font-light">
                  Join the live, virtual September 29 cohort and learn to hold conversations where transition, identity, and faith converge. This course builds on foundational coaching skills rather than introducing coaching from the ground up, allowing credentialed coaches to sharpen their edge in navigating client endings.
                </p>

                {/* What's included checklist */}
                <div className="space-y-3 pt-2">
                  <div className="text-xs font-bold tracking-wider text-white uppercase">
                    What Is Included in Your Registration:
                  </div>
                  <ul className="space-y-2.5 text-xs text-[#C8C2B7]">
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#E5A93C] shrink-0 mt-0.5" />
                      <span>
                        <strong>Live Observed Coaching Practice:</strong> Triad coaching practicum led by an ICF-credentialed coach with immediate real-time feedback.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#E5A93C] shrink-0 mt-0.5" />
                      <span>
                        <strong>3.0 CCE Hours (ICF & CCNI):</strong> Dual-accredited continuing education hours applicable to both credential renewals.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#E5A93C] shrink-0 mt-0.5" />
                      <span>
                        <strong>The Threshold Course Companion:</strong> Lifetime ongoing access to exclusive course workbooks, reflection guides, and transition prompts.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#E5A93C] shrink-0 mt-0.5" />
                      <span>
                        <strong>Official Certificate of Completion:</strong> Verified credential transcript issued within 48 hours of approved reflection.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#E5A93C] shrink-0 mt-0.5" />
                      <span>
                        <strong>$50 Future Course Credit:</strong> Direct tuition voucher applied toward your next Movemeant Continuing Education course.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Who this serves cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
                  <div className="p-3.5 rounded-xl bg-[#0B0E14] border border-white/5 text-xs">
                    <div className="font-semibold text-white mb-1">Professional Coaches</div>
                    <p className="text-[11px] text-[#A39E93]">
                      Recognize when a client isn't just stuck, but at a pivotal ending, and coach that space first.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#0B0E14] border border-white/5 text-xs">
                    <div className="font-semibold text-white mb-1">Helping Professionals</div>
                    <p className="text-[11px] text-[#A39E93]">
                      Counselors, social workers, healthcare workers, and doulas supporting people through loss.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#0B0E14] border border-white/5 text-xs">
                    <div className="font-semibold text-white mb-1">Ministry Leaders</div>
                    <p className="text-[11px] text-[#A39E93]">
                      Integrate faith deeply without spiritual bypassing, honoring individual client autonomy.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Pricing & Enrollment Card */}
              <div className="lg:col-span-5 bg-[#0B0E14] rounded-2xl p-6 sm:p-8 border border-[#E5A93C]/40 space-y-6">
                <div>
                  <span className="text-[11px] font-bold text-[#E5A93C] uppercase tracking-wider">
                    Introductory Rate
                  </span>
                  <div className="flex items-baseline gap-3 mt-1">
                    <span className="text-4xl font-serif font-bold text-white">$97</span>
                    <span className="text-xs text-[#706B62] line-through">$249 Standard</span>
                  </div>
                  <p className="text-xs text-[#A39E93] mt-1 font-light">
                    Virtual live 3-hour intensive • Next Cohort: September 29
                  </p>
                </div>

                {/* Accreditation Seal Box */}
                <div className="p-4 rounded-xl bg-[#121622] border border-white/10 space-y-2">
                  <div className="text-[11px] text-[#A39E93] font-semibold uppercase">Accredited by:</div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="relative h-10 w-24">
                      <Image
                        src="/assets/movemeant/icf-cce-badge.png"
                        alt="ICF CCE Badge"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="relative h-10 w-24">
                      <Image
                        src="/assets/movemeant/ccni-accreditation-badge.png"
                        alt="CCNI Accreditation Badge"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Enrollment Requirements */}
                <div className="text-xs text-[#A39E93] space-y-1.5 border-t border-white/10 pt-4">
                  <div className="font-semibold text-white text-xs">CCE Completion Requirements:</div>
                  <div>• Attend at least 90% of the live 3-hour session</div>
                  <div>• Actively participate in the triad coaching practicum</div>
                  <div>• Submit 200-word written reflection within 48 hours</div>
                </div>

                <div className="pt-2 space-y-2">
                  <button
                    onClick={() => openBookingWithService("The Threshold™ Live Cohort (ICF + CCNI CCE — $97)")}
                    className="w-full py-4 rounded-xl text-xs font-semibold bg-gradient-to-r from-[#E5A93C] to-[#D4972A] hover:from-[#F5C467] hover:to-[#E5A93C] text-[#0B0E14] shadow-lg shadow-[#E5A93C]/20 transition-all font-sans"
                  >
                    Register for Sept 29 Cohort ($97)
                  </button>
                  <a
                    href={JOTFORM_ENROLLMENT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center text-[11px] text-[#706B62] hover:text-[#A39E93] transition-colors"
                  >
                    Or open direct enrollment form ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. ALL OFFERINGS & POWER MOVES FRAMEWORK™                 */}
      {/* ========================================================= */}
      <section id="power-moves" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5A93C]/10 text-[#E5A93C] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#E5A93C]/20">
              Ways to Work with Us
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white mb-4">
              Comprehensive Leadership Development & Advisory
            </h2>
            <p className="text-base text-[#C8C2B7] font-light leading-relaxed">
              From dual-accredited coach education to C-suite executive transformation and organizational culture alignment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROGRAM_OFFERINGS.map((program) => (
              <div
                key={program.id}
                className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all border ${
                  program.highlight
                    ? "bg-[#141A28] border-[#E5A93C]/40 shadow-xl"
                    : "bg-[#121622] border-white/10 hover:border-white/20"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#E5A93C]/10 text-[#E5A93C] border border-[#E5A93C]/20">
                      {program.badge}
                    </span>
                    <span className="text-xs text-[#A39E93]">{program.priceOrFormat}</span>
                  </div>

                  <h3 className="text-2xl font-serif font-normal text-white mb-2">
                    {program.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#E5A93C] italic mb-3">
                    "{program.tagline}"
                  </p>
                  <p className="text-xs sm:text-sm text-[#C8C2B7] font-light leading-relaxed mb-6">
                    {program.summary}
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="text-xs font-semibold text-white uppercase tracking-wider">
                      Key Outcomes & Deliverables:
                    </div>
                    <ul className="space-y-2 text-xs text-[#A39E93]">
                      {program.outcomes.slice(0, 3).map((outcome, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#529477] shrink-0 mt-0.5" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                  <div className="text-[11px] text-[#706B62] hidden sm:block max-w-[200px]">
                    Ideal for: {program.idealFor.slice(0, 45)}...
                  </div>
                  {program.id === "boost-sprint" ? (
                    <Link
                      href="/movemeantnow/boost"
                      className="px-5 py-2.5 rounded-full text-xs font-semibold bg-[#E5A93C] hover:bg-[#F5C467] text-[#0B0E14] transition-all flex items-center gap-1.5 ml-auto"
                    >
                      <span>Explore Boost Sub-Page</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  ) : (
                    <button
                      onClick={() => openBookingWithService(program.serviceType)}
                      className="px-5 py-2.5 rounded-full text-xs font-semibold bg-white/[0.08] hover:bg-[#E5A93C] text-white hover:text-[#0B0E14] transition-all flex items-center gap-1.5 ml-auto"
                    >
                      <span>{program.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 8. TEAM CULTURE & ORGANIZATIONAL DEVELOPMENT              */}
      {/* ========================================================= */}
      <section id="team-culture" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0F141F] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#529477]/10 text-[#529477] text-xs font-semibold uppercase tracking-wider border border-[#529477]/20">
                Organizational & Culture Architecture
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white">
                Culture Is Not an Annual Retreat. It's What Happens Every Day in Between.
              </h2>
              <p className="text-sm sm:text-base text-[#C8C2B7] font-light leading-relaxed">
                From small team dynamics to organization-wide challenges, leaders who build a clear and lived culture position their teams to thrive. Through Movemeant’s team development engagements, we help executives build the framework, alignment, and accountability needed to bring their vision to life.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-[#121622] border border-white/[0.08] space-y-1.5">
                  <div className="text-sm font-semibold text-white flex items-center gap-2">
                    <Target className="w-4 h-4 text-[#E5A93C]" />
                    Purpose & Values Alignment
                  </div>
                  <p className="text-xs text-[#A39E93]">
                    Define and align purpose, vision, and operational values that directly support organizational objectives.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#121622] border border-white/[0.08] space-y-1.5">
                  <div className="text-sm font-semibold text-white flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#529477]" />
                    Quarterly Planning Cadence
                  </div>
                  <p className="text-xs text-[#A39E93]">
                    Lead focused quarterly planning sessions with unambiguous priorities, milestone roadmaps, and action steps.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#121622] border border-white/[0.08] space-y-1.5">
                  <div className="text-sm font-semibold text-white flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#E08769]" />
                    Honest Feedback Norms
                  </div>
                  <p className="text-xs text-[#A39E93]">
                    Deep self-assessment and reflection that foster psychological safety, honest feedback, and continuous growth.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#121622] border border-white/[0.08] space-y-1.5">
                  <div className="text-sm font-semibold text-white flex items-center gap-2">
                    <Award className="w-4 h-4 text-amber-300" />
                    Sustainable Systems
                  </div>
                  <p className="text-xs text-[#A39E93]">
                    Develop team norms, operating rhythms, and communication channels that support sustainable growth.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => openBookingWithService("Team Alignment & Culture Development Consulting")}
                  className="px-6 py-3.5 rounded-full text-xs font-semibold bg-[#E5A93C] hover:bg-[#F5C467] text-[#0B0E14] transition-all flex items-center gap-2"
                >
                  <span>Book Team Strategy Session</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="rounded-3xl bg-[#121622] border border-white/10 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
                <div className="relative aspect-[16/11] w-full rounded-2xl overflow-hidden border border-white/10 mb-6">
                  <Image
                    src="/assets/movemeant/process-leadership.jpg"
                    alt="Process Leadership Framework Movemeant"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#E5A93C] font-semibold">
                    <span>ORGANIZATIONAL TRANSFORMATION</span>
                    <span>ENTERPRISE ADVISORY</span>
                  </div>
                  <p className="text-xs text-[#C8C2B7] leading-relaxed">
                    "When executive leaders step across their threshold, they don't just transform themselves—they build healthier teams, dismantle silos, and unlock compound organizational performance."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 9. EXECUTIVE BIOGRAPHY & CREDENTIALS: KOI RIVERS, PCC      */}
      {/* ========================================================= */}
      <section id="about-koi" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Bio Story */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5A93C]/10 text-[#E5A93C] text-xs font-semibold uppercase tracking-wider border border-[#E5A93C]/20">
                Founder & Chief Strategist
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white">
                Meet Koi Rivers, PCC
              </h2>

              <p className="text-sm sm:text-base text-[#C8C2B7] font-light leading-relaxed">
                Movemeant was born with a dismantling of everything I had been leaning on. Including myself. It began when God met me at my threshold, my point of surrender, and showed me the difference between leading in my own strength and being led by His.
              </p>
              <p className="text-sm sm:text-base text-[#C8C2B7] font-light leading-relaxed">
                For more than two decades, I led global marketing and communications across Fortune 500, public sector, and nonprofit organizations while coaching leaders through pivotal times of growth and change. That work eventually revealed a deeper calling: not just to coach leaders, but to equip those who develop others.
              </p>

              <div className="p-5 rounded-2xl bg-[#121622] border border-[#E5A93C]/30 text-xs italic text-[#E5E0D8] space-y-2">
                <Quote className="w-5 h-5 text-[#E5A93C]" />
                <p>
                  "For me, success stopped being about titles and outward achievement. It became about faithfulness. That shift didn't just change my career. It transformed my calling. Today, we develop coaches, strengthen leaders, and partner with organizations ready to walk with folks through their thresholds."
                </p>
                <div className="font-semibold text-[#E5A93C] not-italic">— Koi Rivers</div>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <a
                  href={KOI_RIVERS_LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-[#161B26] hover:bg-[#202737] text-white border border-white/10 hover:border-[#E5A93C] transition-all"
                >
                  <Linkedin className="w-4 h-4 text-[#0077B5]" />
                  <span>Connect on LinkedIn</span>
                  <ExternalLink className="w-3 h-3 text-[#A39E93]" />
                </a>
                <a
                  href={`mailto:${OFFICIAL_EMAIL}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/10 transition-all"
                >
                  <Mail className="w-4 h-4 text-[#E5A93C]" />
                  <span>Direct Inquiries</span>
                </a>
              </div>
            </div>

            {/* Right: Qualifications & Civic Ledger */}
            <div className="lg:col-span-6 bg-[#121622] rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6">
              <h3 className="text-xl font-serif text-white flex items-center gap-2">
                <Award className="w-5 h-5 text-[#E5A93C]" />
                Qualifications, Credentials & Civic Honours
              </h3>

              <div className="space-y-3.5 text-xs text-[#C8C2B7]">
                <div className="p-3 rounded-xl bg-[#0B0E14] border border-white/5 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#E5A93C] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Professional Certified Coach (PCC)</strong>
                    <div className="text-[#A39E93]">Credentialed by the International Coaching Federation (ICF)</div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#0B0E14] border border-white/5 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#529477] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Dual-Accredited Course Creator: The Threshold™</strong>
                    <div className="text-[#A39E93]">Dual Continuing Coach Education (CCE) accreditation through ICF and CCNI</div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#0B0E14] border border-white/5 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#E08769] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">2025-2026 Director of DEIB</strong>
                    <div className="text-[#A39E93]">International Coaching Federation (ICF) Sacramento Charter Chapter</div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#0B0E14] border border-white/5 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">2025 Exceptional Woman of Color Award Honoree</strong>
                    <div className="text-[#A39E93]">Sac Cultural Hub Excellence Recognition</div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#0B0E14] border border-white/5 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-white/70 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Academic & Professional Coaching Certifications</strong>
                    <div className="text-[#A39E93]">
                      BA Organizational Communications (CSU Sacramento) • Professional & Leadership Coaching Certification (UC Davis)
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#0B0E14] border border-white/5 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-white/70 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Civic & Community Leadership</strong>
                    <div className="text-[#A39E93]">
                      President, Mocha Moms Sacramento • Senior Fellow, Nehemiah Emerging Leaders • Past Board Director, TLCS Inc. & Sacramento Theatre Company • 40 Under 40 Honoree (Sacramento Business Journal)
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#0B0E14] border border-white/5 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#529477] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Registered Yoga Teacher (RYT-200, RPYT)</strong>
                    <div className="text-[#A39E93]">Somatic nervous system regulation and embodiment in executive presence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 10. UX DESIGNER REVIEW & CASE STUDY AUDIT                 */}
      {/* ========================================================= */}
      <section id="ux-audit" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0F141F] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5A93C]/10 text-[#E5A93C] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#E5A93C]/20">
              UX Redesign Case Study
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white mb-4">
              Comprehensive UX Audit: Why Movemeant Needed a Redesign
            </h2>
            <p className="text-base text-[#C8C2B7] font-light leading-relaxed">
              An objective UX review contrasting the limitations of GoDaddy Website Builder with a modern, high-converting digital flagship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {UX_AUDIT_POINTS.map((audit) => (
              <div
                key={audit.id}
                className="p-6 rounded-2xl bg-[#121622] border border-white/[0.08] flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-mono text-[#E5A93C] font-bold">AUDIT {audit.id}</span>
                    <span className="px-2 py-0.5 rounded-full bg-white/[0.05] text-[#A39E93] text-[10px]">
                      {audit.tag}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-medium text-white mb-2">
                    {audit.title}
                  </h3>
                  <div className="space-y-2 text-xs">
                    <div className="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300">
                      <strong>Legacy Defect:</strong> {audit.problem}
                    </div>
                    <div className="p-2.5 rounded-xl bg-[#529477]/10 border border-[#529477]/20 text-[#86B39C]">
                      <strong>UX Upgrade:</strong> {audit.solution}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sub-page highlight banner */}
          <div className="rounded-3xl bg-gradient-to-r from-[#182030] via-[#121622] to-[#0B0E14] border border-[#E5A93C]/40 p-8 sm:p-12 text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-bold text-[#E5A93C] uppercase tracking-wider">
                Dedicated Sub-Page Architecture
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-white">
                The Movemeant Momentum Boost™ (/movemeantnow/boost)
              </h3>
              <p className="text-xs sm:text-sm text-[#C8C2B7] font-light leading-relaxed">
                As part of this redesign system, we engineered a dedicated sub-page for high-intent corporate leaders and executive women seeking a 90-day transition sprint with an interactive ROI hesitation calculator.
              </p>
            </div>
            <Link
              href="/movemeantnow/boost"
              className="px-8 py-4 rounded-full text-xs font-semibold bg-[#E5A93C] hover:bg-[#F5C467] text-[#0B0E14] shadow-xl shadow-[#E5A93C]/20 transition-all flex items-center gap-2 shrink-0"
            >
              <span>Explore The Boost Sub-Page</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 11. FREQUENTLY ASKED QUESTIONS                            */}
      {/* ========================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-serif text-white mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-[#A39E93]">
              Everything you need to know about continuing education, accreditation, and working with Movemeant.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, i) => (
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
        </div>
      </section>

      {/* ========================================================= */}
      {/* 12. FINAL CALL TO ACTION                                   */}
      {/* ========================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0F141F] to-[#07090E] border-t border-white/[0.08] text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5A93C]/10 text-[#E5A93C] text-xs font-semibold uppercase tracking-wider border border-[#E5A93C]/20">
            Let's Talk Through What's Next
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-white">
            Ready to Build What Matters?
          </h2>
          <p className="text-sm sm:text-base text-[#C8C2B7] font-light leading-relaxed">
            From coach education and leadership development to executive consulting and faith-based formation, let’s discuss how we can partner.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => openBookingWithService("The Threshold™ Live Cohort (ICF + CCNI CCE — $97)")}
              className="w-full sm:w-auto px-8 py-4 rounded-full text-xs font-semibold bg-gradient-to-r from-[#E5A93C] to-[#D4972A] hover:from-[#F5C467] hover:to-[#E5A93C] text-[#0B0E14] shadow-xl shadow-[#E5A93C]/20 transition-all"
            >
              Enroll in Live Cohort ($97)
            </button>
            <button
              onClick={() => openBookingWithService("Complimentary 20-Minute Clarity Diagnostic Call")}
              className="w-full sm:w-auto px-8 py-4 rounded-full text-xs font-medium text-white hover:text-[#E5A93C] border border-white/10 hover:border-white/20 transition-colors"
            >
              Book Complimentary Clarity Call
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 13. COMPREHENSIVE FOOTER                                  */}
      {/* ========================================================= */}
      <footer className="border-t border-white/10 bg-[#05070A] py-14 px-4 sm:px-6 lg:px-8 text-xs text-[#A39E93]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-2 space-y-4">
            <div className="relative h-12 w-48">
              <Image
                src="/assets/movemeant/logo.png"
                alt="Movemeant Coaching and Consultancy Logo"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-xs text-[#A39E93] max-w-md font-light leading-relaxed">
              ICF & CCNI dual-accredited coach education, executive consulting, and transformational leadership development for today's leaders and tomorrow's coaches.
            </p>
            <div className="text-[11px] text-[#706B62]">
              <div>5650 Whitelock Pkwy, Suite 130 #1098</div>
              <div>Elk Grove, CA 95757, United States</div>
              <div className="mt-1">info@movemeantnow.com</div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="font-semibold text-white uppercase tracking-wider text-xs">
              Offerings & Links
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#coach-education" className="hover:text-white transition-colors">
                  The Threshold™ (ICF/CCNI)
                </a>
              </li>
              <li>
                <Link href="/movemeantnow/boost" className="text-[#E5A93C] hover:underline font-medium">
                  The 90-Day Boost Sprint
                </Link>
              </li>
              <li>
                <a href="#power-moves" className="hover:text-white transition-colors">
                  Power Moves Framework™
                </a>
              </li>
              <li>
                <a href="#team-culture" className="hover:text-white transition-colors">
                  Team Culture Architecture
                </a>
              </li>
              <li>
                <a href="#about-koi" className="hover:text-white transition-colors">
                  About Koi Rivers, PCC
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="font-semibold text-white uppercase tracking-wider text-xs">
              Official Connections
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href={KOI_RIVERS_LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E5A93C] flex items-center gap-1.5 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#0077B5]" />
                  <span>Koi Rivers LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href={ORIGINAL_WEBSITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Original Live Site</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${OFFICIAL_EMAIL}`}
                  className="hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>info@movemeantnow.com</span>
                </a>
              </li>
              <li className="pt-2 text-[11px] text-[#706B62]">
                Proverbs 3:6 • Seek His will in all you do.
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#706B62] gap-3">
          <div>
            © 2023–2026 Movemeant Coaching and Consultancy. All Rights Reserved. Offerings subject to change.
          </div>
          <div>
            UX Redesign Architecture & Concept by <strong className="text-[#A39E93]">Miskat Hossain</strong>.
          </div>
        </div>
      </footer>

      {/* ========================================================= */}
      {/* 14. INLINE BOOKING & INTAKE MODAL                         */}
      {/* ========================================================= */}
      {isBookingOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg rounded-3xl bg-[#121622] border border-[#E5A93C]/40 p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
            <button
              onClick={resetBookingModal}
              className="absolute top-5 right-5 p-2 rounded-full text-[#A39E93] hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {bookingSuccess ? (
              <div className="py-8 text-center space-y-4 animate-in zoom-in-95 duration-200">
                <div className="w-16 h-16 rounded-full bg-[#529477]/20 text-[#529477] flex items-center justify-center mx-auto border border-[#529477]/30">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-medium text-white">
                  Intake Request Received
                </h3>
                <p className="text-xs sm:text-sm text-[#C8C2B7] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{bookingForm.name}</strong>. Coach Koi Rivers and our executive coordination team will review your details for <strong>{bookingForm.service}</strong> and respond within 24 business hours.
                </p>
                <div className="p-4 rounded-2xl bg-[#0B0E14] border border-white/10 text-xs text-[#A39E93]">
                  A confirmation message with onboarding diagnostics has been dispatched to{" "}
                  <span className="text-white font-medium">{bookingForm.email}</span>.
                </div>
                <button
                  onClick={resetBookingModal}
                  className="px-6 py-2.5 rounded-full text-xs font-semibold bg-[#E5A93C] text-[#0B0E14] hover:bg-[#F5C467] transition-all"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div>
                  <span className="text-[11px] font-bold text-[#E5A93C] uppercase tracking-wider">
                    Executive Booking & Intake
                  </span>
                  <h3 className="text-2xl font-serif text-white font-normal mt-0.5">
                    Connect with Movemeant
                  </h3>
                  <p className="text-xs text-[#A39E93] mt-1 font-light">
                    Select your program of interest or request a confidential 20-minute clarity diagnostic.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <div>
                    <label className="block text-xs font-medium text-white/90 mb-1">
                      Program / Service of Interest *
                    </label>
                    <select
                      value={bookingForm.service}
                      onChange={(e) =>
                        setBookingForm({ ...bookingForm, service: e.target.value as ServiceType })
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0B0E14] border border-white/10 text-white text-xs focus:outline-none focus:border-[#E5A93C]"
                    >
                      {SERVICE_OPTIONS.map((srv) => (
                        <option key={srv} value={srv}>
                          {srv}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-white/90 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={bookingForm.name}
                      onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                      placeholder="e.g. Rachel Adams"
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
                        value={bookingForm.email}
                        onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                        placeholder="rachel@organization.org"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#0B0E14] border border-white/10 text-white placeholder-[#706B62] text-xs focus:outline-none focus:border-[#E5A93C]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-white/90 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={bookingForm.phone}
                        onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                        placeholder="(555) 000-0000"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#0B0E14] border border-white/10 text-white placeholder-[#706B62] text-xs focus:outline-none focus:border-[#E5A93C]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-white/90 mb-1">
                        Current Role / Title
                      </label>
                      <input
                        type="text"
                        value={bookingForm.role}
                        onChange={(e) => setBookingForm({ ...bookingForm, role: e.target.value })}
                        placeholder="e.g. ICF Coach / VP / Pastor"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#0B0E14] border border-white/10 text-white placeholder-[#706B62] text-xs focus:outline-none focus:border-[#E5A93C]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-white/90 mb-1">
                        Organization
                      </label>
                      <input
                        type="text"
                        value={bookingForm.organization}
                        onChange={(e) =>
                          setBookingForm({ ...bookingForm, organization: e.target.value })
                        }
                        placeholder="e.g. Private Practice / Firm"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#0B0E14] border border-white/10 text-white placeholder-[#706B62] text-xs focus:outline-none focus:border-[#E5A93C]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-white/90 mb-1">
                      Briefly describe where you are standing right now:
                    </label>
                    <textarea
                      rows={2}
                      value={bookingForm.message}
                      onChange={(e) => setBookingForm({ ...bookingForm, message: e.target.value })}
                      placeholder="Share a sentence on what threshold or transition you are currently facing..."
                      className="w-full px-4 py-2 rounded-xl bg-[#0B0E14] border border-white/10 text-white placeholder-[#706B62] text-xs focus:outline-none focus:border-[#E5A93C]"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-[#E5A93C] to-[#D4972A] hover:from-[#F5C467] hover:to-[#E5A93C] text-[#0B0E14] shadow-lg shadow-[#E5A93C]/20 transition-all font-sans"
                  >
                    Confirm & Submit Intake Request
                  </button>
                  <p className="text-[10px] text-center text-[#706B62] mt-2">
                    Confidential & secure. You will receive an immediate calendar link.
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
