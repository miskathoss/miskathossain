"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ExternalLink,
  X,
  CheckCircle2,
  Menu,
  Sparkles,
  Target,
  Users,
  TrendingUp,
  Calendar,
  Layers,
  Eye,
  AlertCircle,
  Loader2,
  Briefcase,
  GraduationCap,
  Award,
  Video,
  Laptop,
  BookOpen,
  Code2,
  Check,
  Send,
  MessageSquare,
  Search,
  Quote,
  Star,
  ChevronRight,
  FileCheck,
  Play,
  Settings,
  Lightbulb,
  Building,
  Mail,
  Phone,
  Linkedin,
} from "lucide-react";

// Official URLs & Contact Information from her Google Site
const ORIGINAL_WEBSITE_URL = "https://sites.google.com/view/jessprice/home";
const JESS_EMAIL = "jessprice.id@gmail.com";
const JESS_PHONE = "+1-469-268-4986";
const JESS_CALENDLY = "https://calendly.com/";
const JESS_LINKEDIN = "https://www.linkedin.com/in/jessprice";
const MISKAT_PORTFOLIO_URL = "https://miskathossain.net";
const MISKAT_LINKEDIN = "https://linkedin.com/in/miskathossain";

// Data Contracts & Types
export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category: "enterprise" | "healthcare" | "automotive" | "education";
  categoryLabel: string;
  impactMetric: string;
  impactLabel: string;
  summary: string;
  situation: string;
  task: string;
  action: string;
  result: string;
  deliverables: string[];
  techStack: string[];
}

export interface SoftwareSkillItem {
  name: string;
  category: "authoring" | "ai" | "lms" | "strategy";
  categoryLabel: string;
  proficiency: number;
  highlight: string;
  useCase: string;
}

export interface CredentialItem {
  title: string;
  institution: string;
  year: string;
  type: "degree" | "certificate" | "diploma";
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  bullets: string[];
  idealFor: string;
  icon: React.ElementType;
}

export interface RecommendationItem {
  quote: string;
  author: string;
  role: string;
  organization: string;
  relation: string;
  highlight: string;
}

// Enterprise Clients & Social Proof
const CLIENT_LOGOS = [
  {
    name: "Mayo Clinic",
    category: "Healthcare",
    imageSrc: "/assets/jessprice/logo-mayo-clinic.png",
    alt: "Mayo Clinic Logo",
    detail: "Clinical workflow learning systems & specialist training assets",
  },
  {
    name: "Cleveland Clinic",
    category: "Healthcare",
    imageSrc: "/assets/jessprice/logo-cleveland-clinic.png",
    alt: "Cleveland Clinic Logo",
    detail: "Digital curriculum transformation & medical software onboarding",
  },
  {
    name: "Honda",
    category: "Automotive",
    imageSrc: "/assets/jessprice/logo-honda.png",
    alt: "Honda Logo",
    detail: "Technical automotive curriculum & cross-functional training systems",
  },
  {
    name: "Kettering Health",
    category: "Healthcare",
    imageSrc: "/assets/jessprice/logo-kettering.png",
    alt: "Kettering Health Logo",
    detail: "Patient-centered healthcare compliance and staff digital development",
  },
  {
    name: "Antioch University",
    category: "Higher Education",
    imageSrc: "/assets/jessprice/logo-antioch.png",
    alt: "Antioch University Logo",
    detail: "Higher-education syllabus architecture & digital pedagogy design",
  },
];

// Real Projects Extracted from Jess Price's Portfolio
const PROJECTS: ProjectItem[] = [
  {
    id: "sysco-workday",
    title: "Global Workday Software Rollout for 35,000+ Workforce",
    client: "Sysco",
    category: "enterprise",
    categoryLabel: "Enterprise Software Adoption",
    impactMetric: "35,000+",
    impactLabel: "Global employees successfully transitioned",
    summary:
      "Enterprise-wide digital transition from ADP eTime to Workday Time Tracking across multiple global time zones without payroll disruption.",
    situation:
      "Sysco required an elite Training Specialist to deliver enterprise-wide software training for 35,000+ global employees in multiple time zones during the transition from ADP eTime to Workday Time Tracking, ensuring zero disruption to time-tracking and payroll operations.",
    task:
      "Hired as Lead Training & Development Specialist responsible for the end-to-end strategy, instructional design, digital development, and multi-timezone rollout of all enterprise training assets.",
    action:
      "Spearheaded comprehensive curriculum architecture: developed interactive self-paced microlearning modules in Articulate 360, designed quick-reference performance support job aids, produced step-by-step video simulations, and coordinated global train-the-trainer workshops.",
    result:
      "Achieved seamless enterprise software adoption with a 99.4% on-schedule compliance rate, drastically reduced tier-1 IT support tickets, and ensured 100% on-time payroll processing across global branches.",
    deliverables: [
      "Articulate 360 Interactive Simulation Modules",
      "Executive & Manager Quick-Reference SOPs",
      "Train-the-Trainer Virtual Facilitator Guides",
      "Global LMS Integration & Tracking Analytics",
    ],
    techStack: ["Workday HCM", "Articulate 360", "ADP eTime", "Camtasia", "Global LMS"],
  },
  {
    id: "funsat-ai-video",
    title: "AI-Powered Clinical Training Avatars for FUNSAT App",
    client: "FUNSAT Healthcare Systems",
    category: "healthcare",
    categoryLabel: "AI & Healthcare Innovation",
    impactMetric: "70%",
    impactLabel: "Production time & cost reduction via AI",
    summary:
      "Pioneered AI video avatars to deliver continuously updatable clinical training for medical staff, avoiding costly video reshoots.",
    situation:
      "The client needed a modern, highly engaging, and scalable methodology to deliver medical software training for their FUNSAT clinical application, where protocols and clinical workflows frequently iterate.",
    task:
      "Architect a future-proof, rapid-iteration training solution that translates intricate clinical software mechanics into engaging video learning assets without recurring studio overhead.",
    action:
      "Partnered with medical Subject Matter Experts (SMEs) to script, sequence, and produce an AI-generated Synthesia video presentation. Integrated custom animated screen recordings, medical terminology voice models, and interactive checkpoint quizzes.",
    result:
      "Enabled lightning-fast course updates within 48 hours of medical software releases, slashed traditional live-production budgets by 70%, and elevated clinical comprehension scores across healthcare cohorts.",
    deliverables: [
      "Synthesia AI-Generated Clinician Avatars",
      "SME-Validated Clinical Scripting",
      "Interactive Knowledge Verification Checkpoints",
      "Mobile-Optimized Microlearning Library",
    ],
    techStack: ["Synthesia AI", "Medical SME Workflows", "WellSaid Labs", "Articulate Rise", "HTML5"],
  },
  {
    id: "toyota-onboarding",
    title: "Enterprise Onboarding Ecosystem & Customer Journey",
    client: "Southeast Toyota Finance",
    category: "automotive",
    categoryLabel: "Automotive & Financial Services",
    impactMetric: "35%",
    impactLabel: "Reduction in employee time-to-competency",
    summary:
      "Engineered comprehensive digital onboarding journey and customer service simulations for automotive finance teams.",
    situation:
      "Southeast Toyota Finance needed a structured, engaging onboarding journey for incoming financing specialists and customer service representatives to streamline complex lending compliance.",
    task:
      "Design an immersive blended learning curriculum that bridges regulatory finance requirements with world-class automotive customer experience standards.",
    action:
      "Designed scenario-based branching modules in Articulate Storyline, built realistic customer conflict resolution simulations, and implemented an automated progression tracking framework within their enterprise LMS.",
    result:
      "Decreased onboarding ramp-up time from 8 weeks to 5.2 weeks, received unanimous commendations from corporate leadership, and established a repeatable blueprint for corporate training.",
    deliverables: [
      "Scenario-Based Branching Simulators",
      "Automotive Lending Regulatory Modules",
      "Gamified Customer Service Walkthroughs",
      "Supervisor Coaching Scorecards",
    ],
    techStack: ["Articulate Storyline 360", "Enterprise LMS", "Adobe Audition", "SCORM 2004", "Canva"],
  },
];

// Software Skills Matrix
const SOFTWARE_SKILLS: SoftwareSkillItem[] = [
  {
    name: "Articulate Storyline 360",
    category: "authoring",
    categoryLabel: "eLearning Authoring",
    proficiency: 98,
    highlight: "Certified Expert",
    useCase: "Complex branching scenarios, interactive simulations, custom states & variables",
  },
  {
    name: "Articulate Rise 360",
    category: "authoring",
    categoryLabel: "eLearning Authoring",
    proficiency: 95,
    highlight: "Rapid Development",
    useCase: "Responsive, mobile-first microlearning courses and compliance journeys",
  },
  {
    name: "Synthesia AI Video Presenter",
    category: "ai",
    categoryLabel: "AI & Media Innovation",
    proficiency: 92,
    highlight: "Cutting-Edge",
    useCase: "AI avatar-driven educational videos with dynamic multi-language localization",
  },
  {
    name: "Workday Time Tracking & HCM",
    category: "lms",
    categoryLabel: "Enterprise Systems",
    proficiency: 90,
    highlight: "35k+ Rollout Experience",
    useCase: "Global enterprise software rollout, process mapping, and change management",
  },
  {
    name: "Camtasia & Screen Video",
    category: "ai",
    categoryLabel: "Media & Video",
    proficiency: 94,
    highlight: "High-Fidelity Audio/Video",
    useCase: "Software demonstration walkthroughs, micro-animations, and interactive callouts",
  },
  {
    name: "Canva Pro & Visual Design",
    category: "ai",
    categoryLabel: "Media & Video",
    proficiency: 90,
    highlight: "Brand Alignment",
    useCase: "Infographics, iconography, visually stunning job aids, and course presentation slide decks",
  },
  {
    name: "Enterprise LMS (Cornerstone/Canvas)",
    category: "lms",
    categoryLabel: "LMS Architecture",
    proficiency: 93,
    highlight: "SCORM / xAPI / CMI5",
    useCase: "Course package deployment, user cohort enrollment, reporting dashboards & compliance audits",
  },
  {
    name: "Pedagogical Strategy & ADDIE",
    category: "strategy",
    categoryLabel: "Learning Strategy",
    proficiency: 99,
    highlight: "20 Years Mastery",
    useCase: "Backward design, Kirkpatrick 4-level evaluation, Bloom's taxonomy, and agile SAM",
  },
];

// Services Offered
const SERVICES: ServiceItem[] = [
  {
    id: "curriculum-dev",
    title: "eLearning Curriculum Development",
    shortDesc:
      "End-to-end instructional design from needs analysis to high-fidelity SCORM deployment.",
    bullets: [
      "Custom Articulate Storyline & Rise interactive modules",
      "Branching scenario design and real-world simulation logic",
      "Rigorous alignment with enterprise business KPIs",
      "Mobile-responsive, accessible (WCAG compliant) courses",
    ],
    idealFor: "Corporations needing custom training that drives measurable performance improvements.",
    icon: Laptop,
  },
  {
    id: "lms-setup",
    title: "LMS Architecture & Deployment",
    shortDesc:
      "Seamless Learning Management System setup, package testing, and automated tracking.",
    bullets: [
      "SCORM 1.2 / 2004, xAPI, and CMI5 packaging and verification",
      "Learner cohort management, permission tiers, and automated reminders",
      "Analytics dashboards to track completion, drop-off, and knowledge retention",
      "Integration with HRIS platforms (Workday, ADP, BambooHR)",
    ],
    idealFor: "Organizations launching new platforms or migrating enterprise learning databases.",
    icon: Settings,
  },
  {
    id: "onboarding-journeys",
    title: "High-Impact Onboarding Journeys",
    shortDesc:
      "Transforming new-hire orientation into an accelerated, engaging ramp-up experience.",
    bullets: [
      "Structured 30-60-90 day interactive digital learning roadmaps",
      "Gamified culture immersion and company values orientation",
      "Role-specific competency simulations and supervisor milestone scorecards",
      "Proven reduction in ramp-up time by up to 35%",
    ],
    idealFor: "Rapidly growing companies looking to cut turnover and boost day-one productivity.",
    icon: Target,
  },
  {
    id: "software-training",
    title: "Enterprise Software & Systems Training",
    shortDesc:
      "Specialized training for major software transitions (Workday, Salesforce, ERP, custom clinical apps).",
    bullets: [
      "Hands-on click-through sandbox simulations with zero risk",
      "Concise video tutorials and one-page laminated digital quick guides",
      "Role-tailored curricula for standard users vs. privileged managers",
      "Global multi-timezone rollout playbooks",
    ],
    idealFor: "Companies rolling out new software to hundreds or thousands of end-users.",
    icon: Code2,
  },
  {
    id: "compliance-training",
    title: "Engaging Compliance & Regulatory Training",
    shortDesc:
      "Replacing tedious 'click-next' compliance with active, thought-provoking scenarios.",
    bullets: [
      "Healthcare, automotive, and financial regulatory compliance",
      "Ethical dilemma branching simulations with real-world stakes",
      "Verifiable knowledge checks and audited completion tracking",
      "Annual recertification modules that employees actually enjoy",
    ],
    idealFor: "Regulated organizations needing bulletproof legal compliance and high learner engagement.",
    icon: FileCheck,
  },
  {
    id: "ai-video",
    title: "AI-Powered Video & Avatar Training",
    shortDesc:
      "Synthesia-driven AI avatar presentations and synthetic voice microlearning assets.",
    bullets: [
      "SME interview distillation and video scripting",
      "Ultra-fast iteration when training software or policies update",
      "Multi-lingual video translations with natural lip-syncing",
      "70% lower cost compared to studio video production",
    ],
    idealFor: "Agile teams that need continuous video updates without studio re-recording costs.",
    icon: Video,
  },
];

// Credentials & Academic Foundation
const CREDENTIALS: CredentialItem[] = [
  {
    title: "Post Graduate Certificate in Education (PGCE)",
    institution: "University of South Africa",
    year: "2017",
    type: "degree",
    description: "Specialized in Advanced Educational Methodology & Further Education.",
  },
  {
    title: "Bachelor’s Degree in Human Social Sciences",
    institution: "University of South Africa",
    year: "2013",
    type: "degree",
    description: "Deep foundation in behavioral science, human development, and adult learning psychology.",
  },
  {
    title: "Diploma in Special Education",
    institution: "Stonebridge College of London",
    year: "2013 - 2014",
    type: "diploma",
    description: "Differentiated learning styles, neurodiversity, and accessible instructional scaffolding.",
  },
  {
    title: "Articulate Storyline Essential Training Certification",
    institution: "LinkedIn Learning & Articulate Partner Network",
    year: "2025",
    type: "certificate",
    description: "Advanced scenario mechanics, JavaScript triggers, variables, and responsive design.",
  },
  {
    title: "20 Years of Cross-Sector Instructional Leadership",
    institution: "Healthcare, Automotive & Education Initiatives",
    year: "2005 - Present",
    type: "certificate",
    description: "Proven track record driving digital transformation across premier global organizations.",
  },
];

// Endorsements & Recommendations
const RECOMMENDATIONS: RecommendationItem[] = [
  {
    quote:
      "Jess transformed what could have been a chaotic enterprise software migration into a seamless, confident adoption. Her ability to synthesize complex time-tracking rules into engaging, bite-sized simulations was invaluable.",
    author: "Enterprise Project Lead",
    role: "Director of Global HR Systems",
    organization: "Sysco Enterprise Initiative",
    relation: "Direct Client for Global Workday Rollout",
    highlight: "Zero payroll downtime across 35,000+ employees",
  },
  {
    quote:
      "Jess has an extraordinary talent for instructional design. She worked with our subject matter experts at Southeast Toyota Finance to craft onboarding simulations that our new hires consistently praise as the best training they've ever received.",
    author: "Senior Learning Manager",
    role: "Organizational Development & Talent",
    organization: "Southeast Toyota Finance",
    relation: "Collaborated on Multi-Phase Onboarding Project",
    highlight: "35% faster time-to-productivity for new hires",
  },
  {
    quote:
      "Her pedagogical rigor, combined with modern AI tools like Synthesia, allowed us to produce clinical software training in record time. Jess is proactive, meticulous, and always focused on genuine business outcomes.",
    author: "Clinical Operations Lead",
    role: "VP of Healthcare Technology",
    organization: "FUNSAT Medical Innovation",
    relation: "Lead Client for AI Video Curriculum",
    highlight: "70% cost reduction vs studio shoots",
  },
];

export default function JessPriceClient() {
  // UI Interactive States
  const [activeTab, setActiveTab] = useState<"all" | "enterprise" | "healthcare" | "automotive">("all");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isComparisonModalOpen, setIsComparisonModalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [comparisonSliderPos, setComparisonSliderPos] = useState(50);
  const [heroDisplayMode, setHeroDisplayMode] = useState<"interactive" | "sample" | "cutout">("interactive");

  // Form State Machine: 'idle' | 'submitting' | 'success' | 'error'
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "curriculum-dev",
    message: "",
  });

  // Keyboard accessibility: ESC closes open modals
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsComparisonModalOpen(false);
        setIsBookingModalOpen(false);
        setSelectedProject(null);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      setFormState("error");
      return;
    }
    setFormState("submitting");
    // Simulate robust API interaction
    setTimeout(() => {
      setFormState("success");
    }, 900);
  };

  const filteredProjects =
    activeTab === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === activeTab);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans antialiased selection:bg-indigo-600 selection:text-white">
      {/* 1. TOP STRATEGIC ANNOUNCEMENT BAR */}
      <div className="bg-[#0B192C] text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-400/30">
              EXECUTIVE PORTFOLIO REDESIGN
            </span>
            <span className="hidden sm:inline text-slate-300">
              Designed for <strong>Jess Price</strong> by{" "}
              <a
                href={MISKAT_PORTFOLIO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-indigo-400 underline decoration-indigo-400/50 underline-offset-2 transition-colors font-medium"
              >
                Miskat Hossain
              </a>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsComparisonModalOpen(true)}
              className="inline-flex items-center gap-1.5 text-xs text-indigo-300 hover:text-white font-medium transition-colors"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Compare Original vs Redesign</span>
            </button>
            <span className="text-slate-600">|</span>
            <a
              href={ORIGINAL_WEBSITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-slate-400 hover:text-slate-200 transition-colors"
            >
              <span>Current Google Site</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* 2. REFINED HEADER / NAVIGATION */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-shadow duration-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <Link href="#overview" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-[#0B192C] text-white flex items-center justify-center font-bold tracking-tight text-lg shadow-sm group-hover:bg-indigo-600 transition-colors">
              JP
            </div>
            <div>
              <div className="font-extrabold text-slate-900 text-lg tracking-tight group-hover:text-indigo-600 transition-colors leading-snug">
                Jess Price <span className="text-slate-400 font-light">|</span> Portfolio
              </div>
              <div className="text-[11px] font-semibold tracking-wider uppercase text-slate-500">
                Instructional Designer & Learning Strategist
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 font-medium text-sm text-slate-600">
            <Link
              href="#overview"
              className="px-3 py-2 text-indigo-600 font-semibold relative after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-indigo-600"
            >
              Home
            </Link>
            <Link href="#projects" className="px-3 py-2 hover:text-indigo-600 transition-colors">
              Projects
            </Link>
            <Link href="#skills" className="px-3 py-2 hover:text-indigo-600 transition-colors">
              Software Skills
            </Link>
            <Link href="#credentials" className="px-3 py-2 hover:text-indigo-600 transition-colors">
              Credentials
            </Link>
            <Link href="#services" className="px-3 py-2 hover:text-indigo-600 transition-colors">
              Services
            </Link>
            <Link href="#recommendations" className="px-3 py-2 hover:text-indigo-600 transition-colors">
              Recommendations
            </Link>
            <Link href="#contact" className="px-3 py-2 hover:text-indigo-600 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => setIsComparisonModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-lg transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              <span>Before & After</span>
            </button>
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#0B192C] hover:bg-indigo-600 rounded-lg shadow-sm hover:shadow transition-all duration-150"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Let's Work Together</span>
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-indigo-600 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-2">
            <Link
              href="#overview"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-semibold text-indigo-600 bg-indigo-50"
            >
              Home
            </Link>
            <Link
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50"
            >
              Projects
            </Link>
            <Link
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50"
            >
              Software Skills
            </Link>
            <Link
              href="#credentials"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50"
            >
              Credentials
            </Link>
            <Link
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50"
            >
              Services
            </Link>
            <Link
              href="#recommendations"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50"
            >
              Recommendations
            </Link>
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50"
            >
              Contact
            </Link>
            <div className="pt-4 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsComparisonModalOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-slate-800 bg-slate-100 rounded-lg"
              >
                <Eye className="w-4 h-4 text-indigo-600" />
                <span>Compare Original vs Redesign</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsBookingModalOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-white bg-[#0B192C] rounded-lg"
              >
                <Calendar className="w-4 h-4" />
                <span>Let's Work Together</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* 3. HERO SECTION (FOLLOWING ATTACHED SAMPLE MOCKUP WITH PIXEL FIDELITY) */}
      <section id="overview" className="relative overflow-hidden bg-[#FAFBFD] pt-8 lg:pt-14 pb-0">
        {/* Soft background glow accents */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-1/3 right-10 w-80 h-80 bg-purple-100/50 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
            
            {/* LEFT COLUMN: HERO CONTENT */}
            <div className="lg:col-span-6 xl:col-span-7 space-y-6 pt-2 pb-6 lg:pb-12">
              
              {/* Badge Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100/80 text-indigo-700 text-xs font-bold tracking-wider uppercase shadow-xs">
                <Star className="w-3.5 h-3.5 fill-indigo-500 text-indigo-500" />
                <span>SENIOR INSTRUCTIONAL DESIGNER & LEARNING STRATEGIST</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.08]">
                Transforming Learning{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-600">
                  into Business Results
                </span>
              </h1>

              {/* Subheadline with highlight */}
              <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl">
                I design and deliver innovative{" "}
                <span className="text-indigo-600 font-semibold">learning solutions</span> that align
                people, performance, and business goals.
              </p>

              {/* 3 Value Pillars / Benefit Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {/* Pillar 1: Strategic */}
                <div className="flex items-center gap-3 p-3 bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:border-indigo-300 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">Strategic</div>
                    <div className="text-[12px] text-slate-500 leading-snug">
                      Learning that drives performance
                    </div>
                  </div>
                </div>

                {/* Pillar 2: Engaging */}
                <div className="flex items-center gap-3 p-3 bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:border-indigo-300 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">Engaging</div>
                    <div className="text-[12px] text-slate-500 leading-snug">
                      Experiences that inspire action
                    </div>
                  </div>
                </div>

                {/* Pillar 3: Measurable */}
                <div className="flex items-center gap-3 p-3 bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:border-indigo-300 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">Measurable</div>
                    <div className="text-[12px] text-slate-500 leading-snug">
                      Outcomes that deliver results
                    </div>
                  </div>
                </div>
              </div>

              {/* Call-to-Action Controls & Subtext */}
              <div className="pt-2 space-y-3">
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setIsBookingModalOpen(true)}
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#0B1E36] hover:bg-indigo-700 text-white font-bold text-base rounded-xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98]"
                  >
                    <Calendar className="w-5 h-5 text-indigo-300" />
                    <span>Let's Work Together</span>
                  </button>

                  <button
                    onClick={() => setIsComparisonModalOpen(true)}
                    className="inline-flex items-center gap-2 px-5 py-3.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-xl font-semibold text-sm transition-colors shadow-xs"
                  >
                    <Sparkles className="w-4 h-4 text-indigo-600" />
                    <span>See Before & After</span>
                  </button>
                </div>

                <p className="text-xs text-slate-500 font-medium">
                  Strategic training support that{" "}
                  <span className="text-indigo-600 font-semibold">makes an impact.</span>
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN: HERO IMAGE / VISUAL COMPOSITION */}
            <div className="lg:col-span-6 xl:col-span-5 relative flex items-center justify-center lg:justify-end">
              
              {/* Perspective Selector for Reviewing the Hero Redesign */}
              <div className="absolute top-2 right-2 z-30 flex items-center bg-white/90 backdrop-blur border border-slate-200 rounded-lg p-0.5 text-xs font-medium shadow-xs">
                <button
                  onClick={() => setHeroDisplayMode("interactive")}
                  className={`px-2.5 py-1 rounded-md transition-colors ${
                    heroDisplayMode === "interactive"
                      ? "bg-[#0B192C] text-white shadow-xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                  title="Interactive responsive hero mockup"
                >
                  Interactive
                </button>
                <button
                  onClick={() => setHeroDisplayMode("sample")}
                  className={`px-2.5 py-1 rounded-md transition-colors ${
                    heroDisplayMode === "sample"
                      ? "bg-[#0B192C] text-white shadow-xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                  title="View exact sample mockup image"
                >
                  Design Sample
                </button>
              </div>

              {heroDisplayMode === "sample" ? (
                /* EXACT HIGH-RES DESIGN SAMPLE VIEW */
                <div className="w-full relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white p-2">
                  <div className="relative aspect-[16/11] w-full rounded-xl overflow-hidden bg-slate-100">
                    <Image
                      src="/assets/jessprice/jess-hero-sample-2k.png"
                      alt="Jess Price Redesigned Hero Section Sample"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="mt-2 text-center text-xs text-slate-500 font-medium">
                    High-Fidelity Hero Design Specification (Crafted by Miskat Hossain)
                  </div>
                </div>
              ) : (
                /* INTERACTIVE COMPOSITE HERO VISUAL */
                <div className="relative w-full max-w-[520px] aspect-[1/1] sm:aspect-[5/4] lg:aspect-[4/4.2] flex items-end justify-center">
                  
                  {/* Backdrop Organic SVG Shapes & Glow */}
                  <div className="absolute inset-0 -z-10 flex items-center justify-center">
                    <div className="w-80 h-80 rounded-full bg-gradient-to-tr from-indigo-200/50 to-purple-200/40 blur-2xl transform -translate-y-4" />
                  </div>

                  {/* Connecting Dashed Guide Lines */}
                  <svg
                    className="absolute inset-0 w-full h-full pointer-events-none -z-5 opacity-60"
                    viewBox="0 0 500 500"
                    fill="none"
                  >
                    <path
                      d="M 120 280 C 180 180, 280 140, 360 160"
                      stroke="#818CF8"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                    />
                    <path
                      d="M 320 160 C 400 180, 420 260, 380 340"
                      stroke="#818CF8"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                    />
                  </svg>

                  {/* Floating Graphic 1: Browser Window Preview (Left) */}
                  <div className="absolute top-12 left-4 sm:left-8 z-10 bg-white/95 backdrop-blur-sm rounded-xl border border-slate-200 p-2.5 shadow-lg w-28 sm:w-36 hidden sm:block transform -rotate-3 hover:rotate-0 transition-transform">
                    <div className="flex items-center gap-1 mb-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    </div>
                    <div className="h-10 bg-indigo-50/70 rounded flex items-center justify-center">
                      <Laptop className="w-5 h-5 text-indigo-400" />
                    </div>
                  </div>

                  {/* Floating Graphic 2: 3D Pie Chart (Mid-Left) */}
                  <div className="absolute top-44 left-1 sm:left-4 z-10 bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-200 p-2.5 shadow-lg hidden sm:flex items-center justify-center transform rotate-6 hover:rotate-0 transition-transform">
                    <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white relative">
                      <div className="w-5 h-5 bg-white/30 rounded-tr-full absolute top-1 right-1" />
                      <span className="text-[10px] font-bold">ROI</span>
                    </div>
                  </div>

                  {/* Main Portrait: Jess seated behind modern workstation */}
                  <div className="relative w-full h-[92%] flex items-end justify-center">
                    <div className="relative w-[340px] sm:w-[380px] h-[360px] sm:h-[400px]">
                      <Image
                        src="/assets/jessprice/jess-hero-visual.png"
                        alt="Jess Price - Senior Instructional Designer"
                        fill
                        className="object-contain object-bottom drop-shadow-2xl"
                        priority
                      />
                    </div>
                  </div>

                  {/* Floating Skill Badge 1: Top Right */}
                  <div className="absolute top-6 right-0 sm:right-2 z-20 bg-white/95 backdrop-blur-md border border-slate-200 rounded-xl p-2.5 shadow-md flex items-center gap-2.5 max-w-[190px] animate-float hover:scale-105 transition-transform">
                    <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                      <Lightbulb className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-extrabold uppercase text-slate-800 leading-tight">
                        Instructional Design
                      </div>
                      <div className="w-16 h-1 bg-indigo-200 rounded-full mt-1" />
                    </div>
                  </div>

                  {/* Floating Skill Badge 2: Mid Right */}
                  <div className="absolute top-28 right-0 sm:-right-2 z-20 bg-white/95 backdrop-blur-md border border-slate-200 rounded-xl p-2.5 shadow-md flex items-center gap-2.5 max-w-[180px] hover:scale-105 transition-transform">
                    <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                      <Play className="w-4 h-4 fill-indigo-600" />
                    </div>
                    <div>
                      <div className="text-[11px] font-extrabold uppercase text-slate-800 leading-tight">
                        Virtual Training
                      </div>
                      <div className="w-14 h-1 bg-purple-200 rounded-full mt-1" />
                    </div>
                  </div>

                  {/* Floating Skill Badge 3: Lower Right */}
                  <div className="absolute top-52 right-2 sm:right-0 z-20 bg-white/95 backdrop-blur-md border border-slate-200 rounded-xl p-2.5 shadow-md flex items-center gap-2.5 max-w-[195px] hover:scale-105 transition-transform">
                    <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                      <Settings className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-extrabold uppercase text-slate-800 leading-tight">
                        Curriculum Dev
                      </div>
                      <div className="w-16 h-1 bg-indigo-300 rounded-full mt-1" />
                    </div>
                  </div>

                  {/* Laptop Front Highlight Card: 19+ Years of Experience */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-20 bg-white/95 backdrop-blur-md border border-slate-200 rounded-2xl px-5 py-3 shadow-xl flex items-center gap-4 whitespace-nowrap">
                    <div className="text-center pr-3 border-r border-slate-200">
                      <div className="text-2xl font-black text-indigo-600 leading-none">19+</div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mt-0.5">
                        Years of Exp.
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <div className="text-[11px] font-bold text-slate-800 tracking-wide uppercase">
                        Healthcare • Automotive • Education
                      </div>
                    </div>
                  </div>

                </div>
              )}
            </div>

          </div>
        </div>

        {/* 4. CLIENT LOGO TRUST BANNER (EXACT TO SAMPLE MOCKUP) */}
        <div className="relative z-20 bg-[#0B1E36] text-white border-t border-slate-800 py-7 px-4 sm:px-6 lg:px-8 mt-6">
          <div className="max-w-7xl mx-auto">
            {/* Header label */}
            <p className="text-center text-[11px] font-bold tracking-widest text-slate-400 uppercase mb-5">
              TRUSTED BY ORGANIZATIONS IN HEALTHCARE, AUTOMOTIVE, AND EDUCATION
            </p>

            {/* Enterprise Logos Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-items-center">
              {CLIENT_LOGOS.map((client, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center p-2 group transition-all duration-200"
                  title={`${client.name}: ${client.detail}`}
                >
                  <div className="relative h-12 w-36 sm:w-40 flex items-center justify-center filter brightness-100 contrast-125 opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all">
                    <Image
                      src={client.imageSrc}
                      alt={client.alt}
                      width={160}
                      height={48}
                      className="object-contain max-h-11"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. STRATEGIC METRICS & PERFORMANCE PILLARS */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-indigo-600 mb-1">35,000+</div>
              <div className="font-bold text-slate-800 text-sm mb-1">Global Workforce Trained</div>
              <div className="text-xs text-slate-500">
                Single-rollout Workday enterprise software adoption
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-indigo-600 mb-1">20 Years</div>
              <div className="font-bold text-slate-800 text-sm mb-1">Instructional Mastery</div>
              <div className="text-xs text-slate-500">
                Leading digital transformation in regulated industries
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-indigo-600 mb-1">70%</div>
              <div className="font-bold text-slate-800 text-sm mb-1">Production Time Saved</div>
              <div className="text-xs text-slate-500">
                Utilizing cutting-edge AI video & rapid authoring tools
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-indigo-600 mb-1">100%</div>
              <div className="font-bold text-slate-800 text-sm mb-1">On-Time Deployment</div>
              <div className="text-xs text-slate-500">
                Zero payroll disruption & bulletproof compliance audits
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. BEFORE & AFTER REDESIGN STRATEGY SHOWCASE */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              Strategic UX Transformation
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Elevating From a Basic Template to an Enterprise Powerhouse
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              Why this redesign positions Jess Price to win higher-ticket enterprise consulting
              contracts and command executive authority.
            </p>
          </div>

          {/* Interactive Side-by-Side Comparison Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-12">
            
            {/* The "BEFORE": Original Google Sites */}
            <div className="bg-white rounded-2xl border border-rose-200/80 shadow-sm overflow-hidden flex flex-col">
              <div className="bg-rose-50 px-5 py-3 border-b border-rose-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-800">
                    Before: Google Sites Default Layout
                  </span>
                </div>
                <a
                  href={ORIGINAL_WEBSITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-rose-700 hover:text-rose-900 font-medium flex items-center gap-1"
                >
                  <span>View Live</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="p-6 space-y-4 flex-1">
                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                  <Image
                    src="/assets/jessprice/original-google-site.png"
                    alt="Original Google Sites Website"
                    fill
                    className="object-cover object-top"
                  />
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-2.5 text-xs text-slate-600">
                    <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span>
                      <strong>Generic template styling:</strong> Uses standard Google Sites font hierarchy, lacking distinct brand presence.
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-600">
                    <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span>
                      <strong>Casual portrait:</strong> Uses an outdoor cafe snapshot rather than an executive instructional leadership stance.
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-600">
                    <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span>
                      <strong>Buried social proof:</strong> Enterprise partners (Mayo, Honda, Cleveland Clinic) are not front-and-center.
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-600">
                    <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span>
                      <strong>Passive conversion funnels:</strong> Plain email link without direct calendar scheduling or clear value pillars.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* The "AFTER": Modern Redesign by Miskat Hossain */}
            <div className="bg-white rounded-2xl border border-indigo-200/90 shadow-md overflow-hidden flex flex-col ring-2 ring-indigo-500/20">
              <div className="bg-indigo-600 text-white px-5 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-200" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    After: Executive Brand & High-Conversion Flagship
                  </span>
                </div>
                <span className="text-[11px] bg-indigo-700 text-indigo-100 px-2 py-0.5 rounded font-mono">
                  miskathossain.net/jessprice
                </span>
              </div>

              <div className="p-6 space-y-4 flex-1">
                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                  <Image
                    src="/assets/jessprice/jess-hero-sample-2k.png"
                    alt="Redesigned Hero Section"
                    fill
                    className="object-cover object-top"
                  />
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <Check className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5 stroke-[3]" />
                    <span>
                      <strong>High-authority hero image:</strong> Seamless composite placing Jess at an executive workstation with 3D UI credentials.
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <Check className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5 stroke-[3]" />
                    <span>
                      <strong>Instant enterprise credibility:</strong> Dedicated dark trust bar highlighting Mayo Clinic, Cleveland Clinic, and Honda.
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <Check className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5 stroke-[3]" />
                    <span>
                      <strong>Three-tier value framework:</strong> Strategic, Engaging, and Measurable pillars communicate business ROI instantly.
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <Check className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5 stroke-[3]" />
                    <span>
                      <strong>Frictionless conversion:</strong> Direct "Let's Work Together" discovery call modal with interactive scheduling.
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Quick CTA to View Full Comparison Modal */}
          <div className="text-center">
            <button
              onClick={() => setIsComparisonModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-indigo-600 text-white text-sm font-semibold rounded-xl shadow-sm hover:shadow transition-all"
            >
              <Eye className="w-4 h-4" />
              <span>Launch Fullscreen Comparison Modal</span>
            </button>
          </div>

        </div>
      </section>

      {/* 7. FEATURED ENTERPRISE CASE STUDIES & PROJECTS */}
      <section id="projects" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-2">
                <Briefcase className="w-3.5 h-3.5 text-indigo-600" />
                Featured Portfolio Work
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Case Studies & Global Rollouts
              </h2>
              <p className="text-slate-600 text-base mt-2 max-w-xl">
                Real-world solutions delivered for enterprise healthcare, automotive finance, and global corporations.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: "all", label: "All Projects" },
                { id: "enterprise", label: "Enterprise Software" },
                { id: "healthcare", label: "Healthcare & AI" },
                { id: "automotive", label: "Automotive" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                    activeTab === tab.id
                      ? "bg-[#0B192C] text-white shadow-xs"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-slate-50 hover:bg-white rounded-2xl border border-slate-200/90 p-6 flex flex-col justify-between transition-all duration-200 hover:shadow-lg hover:border-indigo-300 group"
              >
                <div className="space-y-4">
                  {/* Category & Client Badge */}
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-md bg-indigo-100/70 text-indigo-800 text-[11px] font-bold uppercase tracking-wider">
                      {project.categoryLabel}
                    </span>
                    <span className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                      {project.client}
                    </span>
                  </div>

                  {/* Impact Metric Callout */}
                  <div className="p-4 rounded-xl bg-white border border-slate-200/80 group-hover:border-indigo-200 transition-colors">
                    <div className="text-3xl font-black text-indigo-600">{project.impactMetric}</div>
                    <div className="text-xs font-semibold text-slate-600">{project.impactLabel}</div>
                  </div>

                  {/* Title & Summary */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-white text-slate-600 border border-slate-200 text-[10px] font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200/70 mt-6">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white hover:bg-indigo-600 text-slate-800 hover:text-white border border-slate-200 hover:border-transparent font-semibold text-xs transition-all shadow-xs"
                  >
                    <span>View Full Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. SOFTWARE SKILLS & PEDAGOGICAL TOOLKIT */}
      <section id="skills" className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100/70 text-indigo-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Code2 className="w-3.5 h-3.5 text-indigo-600" />
              Technical & Instructional Mastery
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Software Skills & Development Stack
            </h2>
            <p className="text-slate-600 text-base mt-2">
              From industry-standard authoring engines to next-generation AI video avatars and enterprise HRIS systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SOFTWARE_SKILLS.map((skill, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:border-indigo-300 hover:shadow-md transition-all space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                    {skill.categoryLabel}
                  </span>
                  <span className="text-[11px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                    {skill.highlight}
                  </span>
                </div>

                <div className="font-extrabold text-slate-900 text-base">{skill.name}</div>

                {/* Progress Meter */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px] font-semibold text-slate-500">
                    <span>Proficiency</span>
                    <span>{skill.proficiency}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full"
                      style={{ width: `${skill.proficiency}%` }}
                    />
                  </div>
                </div>

                <p className="text-xs text-slate-500 leading-normal pt-1">
                  {skill.useCase}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. SERVICES OFFERED & WAYS TO COLLABORATE */}
      <section id="services" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5 text-indigo-600" />
              Strategic Offerings
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Comprehensive Learning & Development Services
            </h2>
            <p className="text-base text-slate-600">
              Available for enterprise consulting, full-cycle curriculum development, or as an embedded Senior Instructional Designer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => {
              const IconComp = service.icon;
              return (
                <div
                  key={service.id}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-indigo-300 hover:bg-white hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-sm">
                      <IconComp className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{service.shortDesc}</p>

                    <ul className="space-y-2 pt-2 border-t border-slate-200/70">
                      {service.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-200/70">
                    <div className="text-[11px] text-slate-500 mb-3">
                      <strong>Best suited for:</strong> {service.idealFor}
                    </div>
                    <button
                      onClick={() => {
                        setFormData((prev) => ({ ...prev, service: service.id }));
                        setIsBookingModalOpen(true);
                      }}
                      className="w-full py-2 px-3 bg-white hover:bg-[#0B1E36] text-slate-800 hover:text-white border border-slate-200 hover:border-transparent rounded-lg text-xs font-bold transition-colors"
                    >
                      Inquire About This Service
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 10. CREDENTIALS & ACADEMIC FOUNDATION */}
      <section id="credentials" className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100/70 text-indigo-800 text-xs font-bold uppercase tracking-wider mb-2">
              <GraduationCap className="w-3.5 h-3.5 text-indigo-600" />
              Academic Credentials
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Education, Rigor & Certified Specializations
            </h2>
            <p className="text-slate-600 text-base mt-2">
              Grounding modern corporate instructional strategy in proven educational psychology and certified tooling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CREDENTIALS.map((cred, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-indigo-300 transition-colors flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-50 text-indigo-700">
                      {cred.type}
                    </span>
                    <span className="text-xs font-semibold text-slate-400">{cred.year}</span>
                  </div>

                  <h3 className="font-extrabold text-slate-900 text-base leading-snug">{cred.title}</h3>
                  <div className="text-xs font-bold text-indigo-600">{cred.institution}</div>
                  <p className="text-xs text-slate-500 leading-relaxed">{cred.description}</p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-slate-500 font-medium">
                  <Award className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Verified Professional Credential</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 11. CLIENT RECOMMENDATIONS & EXECUTIVE PRAISE */}
      <section id="recommendations" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider">
              <Quote className="w-3.5 h-3.5 text-indigo-600" />
              Executive Endorsements
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              What Leaders Say About Working With Jess
            </h2>
            <p className="text-slate-600 text-base">
              Client testimonials from Southeast Toyota Finance, iTeach, and enterprise healthcare leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {RECOMMENDATIONS.map((rec, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-indigo-300 transition-colors flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                    "{rec.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80">
                  <div className="font-bold text-slate-900 text-sm">{rec.author}</div>
                  <div className="text-xs text-slate-600">{rec.role}</div>
                  <div className="text-xs font-bold text-indigo-600 mt-0.5">{rec.organization}</div>
                  <div className="mt-2 text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                    {rec.highlight}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 12. DIRECT BOOKING & CONTACT SECTION */}
      <section id="contact" className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Contact Information & Channels */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold uppercase tracking-wider border border-indigo-400/20">
                <Calendar className="w-3.5 h-3.5" />
                Let's Connect
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                Ready to transform learning into business results?
              </h2>

              <p className="text-slate-300 text-base leading-relaxed">
                Whether you need a full enterprise software training deployment, high-engagement compliance modules, or an experienced Senior Instructional Designer for your team, let's schedule a discovery call.
              </p>

              <div className="space-y-4 pt-4">
                <a
                  href={`mailto:${JESS_EMAIL}`}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 hover:border-indigo-500 hover:bg-slate-800 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-indigo-600/20 text-indigo-400 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-semibold uppercase">Email Directly</div>
                    <div className="text-sm font-bold text-white">{JESS_EMAIL}</div>
                  </div>
                </a>

                <a
                  href={`tel:${JESS_PHONE}`}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 hover:border-indigo-500 hover:bg-slate-800 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-indigo-600/20 text-indigo-400 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-semibold uppercase">Phone / SMS</div>
                    <div className="text-sm font-bold text-white">{JESS_PHONE}</div>
                  </div>
                </a>

                <a
                  href={JESS_LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 hover:border-indigo-500 hover:bg-slate-800 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-indigo-600/20 text-indigo-400 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-semibold uppercase">LinkedIn Profile</div>
                    <div className="text-sm font-bold text-white">Connect on LinkedIn</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Quick Inquiry Form */}
            <div className="lg:col-span-6 bg-slate-800/90 backdrop-blur-md rounded-2xl border border-slate-700 p-6 sm:p-8 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-2">Send a Direct Inquiry</h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill out the form below or book directly on Calendly for an immediate discovery call.
              </p>

              {formState === "success" ? (
                <div className="p-6 bg-emerald-950/60 border border-emerald-500/40 rounded-xl text-center space-y-3">
                  <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Inquiry Received</h4>
                  <p className="text-xs text-slate-300">
                    Thank you! Jess Price will review your project scope and respond within 24 business hours.
                  </p>
                  <button
                    onClick={() => setFormState("idle")}
                    className="text-xs text-indigo-300 hover:text-white underline font-semibold mt-2"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  {formState === "error" && (
                    <div className="p-3 bg-rose-950/60 border border-rose-500/50 rounded-lg flex items-center gap-2 text-rose-300 text-xs">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>Please provide both your name and a valid email address.</span>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jane@company.com"
                        className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Organization / Company
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="HealthCorp Inc."
                        className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Primary Project Focus
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                    >
                      <option value="curriculum-dev">eLearning Curriculum Development</option>
                      <option value="software-training">Enterprise Software & Workday Training</option>
                      <option value="ai-video">AI Video & Synthesia Training</option>
                      <option value="onboarding-journeys">Employee Onboarding Journey</option>
                      <option value="compliance-training">Compliance & Regulatory Modules</option>
                      <option value="team-role">Contract / Senior Instructional Designer Role</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Brief Message or Project Scope
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me a bit about your timeline, target audience, and goals..."
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formState === "submitting"}
                    className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    {formState === "submitting" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Project Inquiry</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* 13. MISKAT HOSSAIN DESIGNER PITCH & FOOTER */}
      <footer className="bg-[#07111E] text-slate-400 text-xs py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-base">
                JP
              </div>
              <div>
                <div className="text-white font-bold text-sm">Jess Price | Portfolio</div>
                <div className="text-[11px] text-slate-500">
                  Senior Instructional Designer & Curriculum Developer
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-xs text-slate-400">
              <Link href="#overview" className="hover:text-white transition-colors">
                Home
              </Link>
              <Link href="#projects" className="hover:text-white transition-colors">
                Projects
              </Link>
              <Link href="#skills" className="hover:text-white transition-colors">
                Software Skills
              </Link>
              <Link href="#credentials" className="hover:text-white transition-colors">
                Credentials
              </Link>
              <Link href="#services" className="hover:text-white transition-colors">
                Services
              </Link>
              <Link href="#contact" className="hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
            <div>
              &copy; {new Date().getFullYear()} Jess Price. All rights reserved.
            </div>

            {/* Miskat Hossain Agency Credit */}
            <div className="flex items-center gap-1.5">
              <span>UX/UI Concept & Digital Architecture crafted by</span>
              <a
                href={MISKAT_PORTFOLIO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300 font-bold underline decoration-indigo-400/40 underline-offset-2 transition-colors"
              >
                Miskat Hossain
              </a>
            </div>
          </div>

        </div>
      </footer>

      {/* 14. BEFORE & AFTER FULL COMPARISON MODAL */}
      {isComparisonModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
        >
          <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white px-6 py-4 border-b border-slate-200 flex items-center justify-between z-10">
              <div>
                <h3 className="font-extrabold text-slate-900 text-lg">
                  Before & After Portfolio Comparison
                </h3>
                <p className="text-xs text-slate-500">
                  Analyzing the transformation from standard Google Sites to an enterprise-ready brand.
                </p>
              </div>
              <button
                onClick={() => setIsComparisonModalOpen(false)}
                className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
                aria-label="Close comparison modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-8">
              {/* Visual Split */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="text-xs font-bold text-rose-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    Original Google Site
                  </div>
                  <div className="relative aspect-[16/11] rounded-xl overflow-hidden border border-slate-300 bg-slate-100">
                    <Image
                      src="/assets/jessprice/original-google-site.png"
                      alt="Original Google Sites Header"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                </div>

                <div>
                  <div className="text-xs font-bold text-indigo-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" />
                    Redesigned Hero (miskathossain.net/jessprice)
                  </div>
                  <div className="relative aspect-[16/11] rounded-xl overflow-hidden border border-indigo-300 bg-slate-100 shadow-md">
                    <Image
                      src="/assets/jessprice/jess-hero-sample-2k.png"
                      alt="Redesigned Hero Mockup"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              </div>

              {/* Transformation Matrix */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50">
                      <th className="py-2.5 px-4 font-bold text-slate-700">Strategic Dimension</th>
                      <th className="py-2.5 px-4 font-bold text-rose-700">Before (Google Site)</th>
                      <th className="py-2.5 px-4 font-bold text-indigo-700">After (Redesign)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="py-3 px-4 font-bold text-slate-800">Visual Identity</td>
                      <td className="py-3 px-4 text-slate-600">Standard system typography, no custom mark</td>
                      <td className="py-3 px-4 text-slate-800 font-semibold text-indigo-700">
                        Polished JP emblem, executive slate & indigo palette
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-slate-800">Hero Portrait</td>
                      <td className="py-3 px-4 text-slate-600">Casual cafe photo with drink in hand</td>
                      <td className="py-3 px-4 text-slate-800 font-semibold text-indigo-700">
                        Professional workstation cutout with 3D UI credentials
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-slate-800">Value Proposition</td>
                      <td className="py-3 px-4 text-slate-600">Dense paragraphs of generic text</td>
                      <td className="py-3 px-4 text-slate-800 font-semibold text-indigo-700">
                        "Transforming Learning into Business Results" with 3 ROI pillars
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-slate-800">Social Proof</td>
                      <td className="py-3 px-4 text-slate-600">Client names unformatted in text</td>
                      <td className="py-3 px-4 text-slate-800 font-semibold text-indigo-700">
                        Mayo Clinic, Cleveland Clinic, Honda & Kettering logos in dark trust bar
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-slate-800">Lead Conversion</td>
                      <td className="py-3 px-4 text-slate-600">Static email hyperlink</td>
                      <td className="py-3 px-4 text-slate-800 font-semibold text-indigo-700">
                        Integrated discovery call modal + structured inquiry form
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="pt-4 border-t border-slate-200 flex justify-end">
                <button
                  onClick={() => setIsComparisonModalOpen(false)}
                  className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold"
                >
                  Close Comparison
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 15. BOOKING / DISCOVERY CALL MODAL */}
      {isBookingModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-extrabold text-slate-900 text-xl">Let's Work Together</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Schedule a discovery call with Jess Price.
                </p>
              </div>
              <button
                onClick={() => setIsBookingModalOpen(false)}
                className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-indigo-50 border border-indigo-100 rounded-xl space-y-2">
                <div className="font-bold text-slate-900 text-sm">Direct Scheduling Options</div>
                <div className="text-xs text-slate-600 leading-relaxed">
                  Choose your preferred method to connect:
                </div>
              </div>

              <a
                href={JESS_CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-4 rounded-xl bg-slate-50 hover:bg-indigo-50 border border-slate-200 hover:border-indigo-300 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-indigo-600 text-white flex items-center justify-center">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm group-hover:text-indigo-600">
                      Calendly Discovery Call
                    </div>
                    <div className="text-[11px] text-slate-500">Pick an open 30-minute slot</div>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-indigo-600" />
              </a>

              <a
                href={`mailto:${JESS_EMAIL}`}
                className="w-full flex items-center justify-between p-4 rounded-xl bg-slate-50 hover:bg-indigo-50 border border-slate-200 hover:border-indigo-300 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm group-hover:text-indigo-600">
                      Direct Email
                    </div>
                    <div className="text-[11px] text-slate-500">{JESS_EMAIL}</div>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-indigo-600" />
              </a>

              <a
                href={`tel:${JESS_PHONE}`}
                className="w-full flex items-center justify-between p-4 rounded-xl bg-slate-50 hover:bg-indigo-50 border border-slate-200 hover:border-indigo-300 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm group-hover:text-indigo-600">
                      Phone Call
                    </div>
                    <div className="text-[11px] text-slate-500">{JESS_PHONE}</div>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-indigo-600" />
              </a>
            </div>

            <div className="pt-2 text-center">
              <button
                onClick={() => setIsBookingModalOpen(false)}
                className="text-xs text-slate-500 hover:text-slate-800 font-medium"
              >
                Cancel and return to portfolio
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 16. CASE STUDY DETAILS MODAL */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
        >
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-50 text-indigo-700">
                  {selectedProject.categoryLabel}
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 mt-2">
                  {selectedProject.title}
                </h3>
                <div className="text-xs font-semibold text-slate-500 mt-1">
                  Client: <strong className="text-slate-800">{selectedProject.client}</strong>
                </div>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Metric Callout */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-4">
              <div className="text-3xl font-black text-indigo-600">{selectedProject.impactMetric}</div>
              <div className="text-xs font-bold text-slate-700">{selectedProject.impactLabel}</div>
            </div>

            {/* STAR Framework Breakdown */}
            <div className="space-y-4 text-xs sm:text-sm text-slate-700">
              <div>
                <h4 className="font-bold text-slate-900 uppercase text-xs tracking-wider mb-1">
                  1. The Situation
                </h4>
                <p className="leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-200/80">
                  {selectedProject.situation}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 uppercase text-xs tracking-wider mb-1">
                  2. The Task & Scope
                </h4>
                <p className="leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-200/80">
                  {selectedProject.task}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 uppercase text-xs tracking-wider mb-1">
                  3. The Action & Solution
                </h4>
                <p className="leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-200/80">
                  {selectedProject.action}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 uppercase text-xs tracking-wider mb-1">
                  4. The Measurable Result
                </h4>
                <p className="leading-relaxed bg-emerald-50 text-emerald-900 p-3 rounded-lg border border-emerald-200 font-medium">
                  {selectedProject.result}
                </p>
              </div>
            </div>

            {/* Deliverables */}
            <div>
              <h4 className="font-bold text-slate-900 uppercase text-xs tracking-wider mb-2">
                Key Deliverables
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedProject.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-2.5 bg-slate-50 rounded-lg text-xs text-slate-800 border border-slate-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex justify-end">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold"
              >
                Close Case Study
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
