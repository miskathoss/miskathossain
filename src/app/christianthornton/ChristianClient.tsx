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
  Shield,
  Award,
  Sparkles,
  Clock,
  Building2,
  Users,
  Target,
  Compass,
  Mail,
  Linkedin,
  Calendar,
  Layers,
  Eye,
  AlertCircle,
  Loader2,
  Briefcase,
  TrendingUp,
  MapPin,
  Anchor,
  FileText,
  Phone,
} from "lucide-react";

// Official URLs & Contact Information
const ORIGINAL_WEBSITE_URL = "https://christiandavidthornton.com/";
const CHRISTIAN_LINKEDIN_URL = "https://www.linkedin.com/in/christian-d-thornton/";
const OFFICIAL_EMAIL = "contact@christiandavidthornton.com";
const MISKAT_PORTFOLIO_URL = "https://miskathossain.net";
const MISKAT_LINKEDIN = "https://linkedin.com/in/miskathossain";

type VisualPerspective = "executive" | "navy" | "comparison";

interface DisciplineItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  metric: string;
  metricLabel: string;
}

const DISCIPLINES: DisciplineItem[] = [
  {
    id: "leadership",
    number: "01",
    title: "Executive Leadership & Strategy",
    tagline: "Visionary alignment for mission-driven enterprises",
    description:
      "Transforming complex organizations into disciplined, mission-focused operations. Providing executive leadership, strategic board governance, and change management that build long-term institutional resilience.",
    deliverables: [
      "Strategic Planning & 3-5 Year Mission Alignment Roadmaps",
      "Executive Team Restructuring & Governance Architecture",
      "Crisis Navigation & High-Stakes Change Management",
      "CEO Advisory & Board-Level Stakeholder Alignment",
    ],
    metric: "12+ Yrs",
    metricLabel: "Executive nonprofit leadership experience",
  },
  {
    id: "performance",
    number: "02",
    title: "Organizational Performance & Scale",
    tagline: "Proven systems that accelerate reach and sustainable revenue",
    description:
      "Scaling organizations through rigorous operational discipline and revenue diversification. Championed nationwide program expansion while preserving quality standards and mission integrity.",
    deliverables: [
      "Operational Efficiency Audits & Scalable SOP Playbooks",
      "Revenue Model Diversification (Civic, Corporate, Philanthropic)",
      "Multi-State Expansion Strategy & Compliance Systems",
      "KPI Dashboards & Executive Accountability Metrics",
    ],
    metric: "4x",
    metricLabel: "Organizational scale achieved in under 24 months",
  },
  {
    id: "talent",
    number: "03",
    title: "Talent & Resilient Culture",
    tagline: "Cultivating high-accountability teams grounded in purpose",
    description:
      "Great strategies fail without cohesive, resilient cultures. Drawing on elite military leadership and corporate governance to mentor executives, retain top talent, and build psychologically safe environments.",
    deliverables: [
      "Executive Mentorship & Leadership Bench Cultivation",
      "Culture Health Diagnostic & Cross-Functional Alignment",
      "Employee Engagement & High-Trust Team Building",
      "Keynote Addresses & Executive Strategic Facilitation",
    ],
    metric: "650%",
    metricLabel: "Revenue growth unlocked via team alignment",
  },
  {
    id: "alliances",
    number: "04",
    title: "Strategic Alliances & Economic Impact",
    tagline: "Forging coalitions across public, private, and civic sectors",
    description:
      "Connecting government bodies, economic development corporations, and civic stakeholders. Architecting high-impact coalitions that bridge veterans, healthcare, and state economies.",
    deliverables: [
      "Public-Private Partnership (P3) Architecture & Negotiations",
      "Economic Development & Regional Workforce Coalitions",
      "Military-to-Civilian Credentialing & Talent Pipelines",
      "Government Relations & Legislative Strategic Advisory",
    ],
    metric: "65+ EDOs",
    metricLabel: "Economic development alliances & 25+ gov agencies",
  },
];

interface PartnerLogo {
  id: string;
  name: string;
  imageSrc: string;
  alt: string;
  relationship: string;
}

const PARTNERS: PartnerLogo[] = [
  {
    id: "nasa",
    name: "NASA",
    imageSrc: "/assets/christianthornton/logo-nasa-crop.png",
    alt: "NASA insignia logo",
    relationship: "Mission alignment, aerospace leadership & high-reliability operations",
  },
  {
    id: "fiserv",
    name: "Fiserv",
    imageSrc: "/assets/christianthornton/logo-fiserv-crop.png",
    alt: "Fiserv corporate wordmark",
    relationship: "Fintech enterprise engagement, corporate alliances & workforce development",
  },
  {
    id: "mayo",
    name: "Mayo Clinic",
    imageSrc: "/assets/christianthornton/logo-mayo-crop.png",
    alt: "Mayo Clinic heraldic crest",
    relationship: "Healthcare workforce pipelines & military medical credentialing initiatives",
  },
  {
    id: "usna",
    name: "U.S. Naval Academy",
    imageSrc: "/assets/christianthornton/logo-usna-crop.png",
    alt: "U.S. Naval Academy insignia",
    relationship: "Naval leadership standards, character development & institutional ethics",
  },
  {
    id: "navy",
    name: "U.S. Navy",
    imageSrc: "/assets/christianthornton/logo-navy-crop.png",
    alt: "U.S. Navy eagle and crossed anchors emblem",
    relationship: "Veteran service, command discipline & operational defense leadership",
  },
  {
    id: "wce",
    name: "WCE",
    imageSrc: "/assets/christianthornton/logo-wce-crop.png",
    alt: "Wisconsin Center for Economic Excellence logo",
    relationship: "Statewide economic expansion, chamber leadership & civic advocacy",
  },
];

export default function ChristianClient() {
  // Navigation & Interactive UI States
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isServicesDrawerOpen, setIsServicesDrawerOpen] = useState(false);
  const [isComparisonModalOpen, setIsComparisonModalOpen] = useState(false);
  const [activePerspective, setActivePerspective] = useState<VisualPerspective>("executive");
  const [activeDisciplineIndex, setActiveDisciplineIndex] = useState(0);

  // Form State adhering to the 4 essential UI states (Populated, Loading, Error, Success)
  const [formStatus, setFormStatus] = useState<"empty" | "populated" | "loading" | "error" | "success">("empty");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    organization: "",
    focusArea: "Executive Leadership & Strategy",
    message: "",
  });
  const [formErrorMsg, setFormErrorMsg] = useState("");

  // Handle form change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formStatus === "error" || formStatus === "empty") {
      setFormStatus("populated");
      setFormErrorMsg("");
    }
  };

  // Handle form submission
  const handleSubmitContact = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim()) {
      setFormStatus("error");
      setFormErrorMsg("Please enter your name and email address to route your executive briefing.");
      return;
    }
    setFormStatus("loading");
    // Simulate high-reliability API dispatch
    setTimeout(() => {
      setFormStatus("success");
    }, 1200);
  };

  // Close modals on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsContactModalOpen(false);
        setIsServicesDrawerOpen(false);
        setIsComparisonModalOpen(false);
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#F4F9FD] text-[#0A1E3F] font-sans antialiased selection:bg-[#EE5014] selection:text-white">
      {/* ── TOP DESIGNER BANNER ── */}
      <div className="bg-[#091B33] text-white text-xs py-2 px-4 border-b border-slate-800/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2.5">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 font-semibold text-[#EE5014] uppercase tracking-wider text-[11px]">
              <span className="w-2 h-2 rounded-full bg-[#EE5014] animate-pulse" />
              UX Redesign Concept
            </span>
            <span className="text-slate-400 hidden sm:inline">•</span>
            <span className="text-slate-300 font-medium">Christian David Thornton</span>
            <span className="text-slate-500 hidden md:inline">|</span>
            <span className="text-slate-400 hidden md:inline">
              Executive Leadership &amp; Strategy
            </span>
          </div>

          <div className="flex items-center gap-3 ml-auto">
            <button
              onClick={() => setIsComparisonModalOpen(true)}
              className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-300 hover:text-white bg-white/10 hover:bg-white/15 px-2.5 py-1 rounded transition-colors"
              title="Compare original website with redesigned hero"
            >
              <Eye className="w-3.5 h-3.5 text-[#EE5014]" />
              <span>Original vs Redesign</span>
            </button>

            <a
              href={ORIGINAL_WEBSITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-400 hover:text-slate-200 transition-colors"
            >
              <span>christiandavidthornton.com</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <span className="text-slate-600 hidden sm:inline">|</span>

            <a
              href={MISKAT_PORTFOLIO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-300 hover:text-[#EE5014] transition-colors"
            >
              <span>By Miskat Hossain</span>
            </a>
          </div>
        </div>
      </div>

      {/* ── HEADER / NAVIGATION ── */}
      <header className="relative z-40 bg-[#EDF6FD]/90 backdrop-blur-md border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-24 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/christianthornton"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EE5014] rounded-lg"
          >
            <div className="flex flex-col">
              <span className="text-2xl sm:text-[26px] font-extrabold tracking-tight text-[#0A1E3F] group-hover:text-[#EE5014] transition-colors">
                Christian Thornton
              </span>
              <span className="text-[10px] tracking-[0.22em] uppercase font-semibold text-slate-500">
                President • CEO • Veteran
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            <button
              onClick={() => setIsComparisonModalOpen(true)}
              className="text-[15px] font-medium text-slate-700 hover:text-[#EE5014] transition-colors"
            >
              About
            </button>
            <button
              onClick={() => setIsServicesDrawerOpen(true)}
              className="text-[15px] font-medium text-slate-700 hover:text-[#EE5014] transition-colors inline-flex items-center gap-1"
            >
              <span>Services</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#EE5014]" />
            </button>
            <a
              href={CHRISTIAN_LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] font-medium text-slate-700 hover:text-[#EE5014] transition-colors inline-flex items-center gap-1.5"
            >
              <span>Media &amp; Press</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
            <button
              onClick={() => setIsServicesDrawerOpen(true)}
              className="text-[15px] font-medium text-slate-700 hover:text-[#EE5014] transition-colors"
            >
              Insights &amp; Articles
            </button>
          </nav>

          {/* Desktop Contact CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="inline-flex items-center justify-center bg-[#EE5014] hover:bg-[#d6450f] text-white px-7 py-3 rounded-lg font-semibold text-base shadow-sm hover:shadow-md transition-all duration-150 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#EE5014]"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="bg-[#EE5014] text-white text-sm font-semibold px-4 py-2 rounded-lg"
            >
              Contact
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 text-slate-700 hover:text-[#0A1E3F] hover:bg-slate-200/50 rounded-lg transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-6 py-5 space-y-4 shadow-lg animate-in slide-in-from-top duration-200">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsComparisonModalOpen(true);
              }}
              className="block w-full text-left font-medium text-slate-800 hover:text-[#EE5014] py-2"
            >
              About Christian Thornton
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsServicesDrawerOpen(true);
              }}
              className="block w-full text-left font-medium text-slate-800 hover:text-[#EE5014] py-2"
            >
              Leadership Services &amp; Disciplines
            </button>
            <a
              href={CHRISTIAN_LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-left font-medium text-slate-800 hover:text-[#EE5014] py-2"
            >
              LinkedIn Profile &amp; Media
            </a>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsContactModalOpen(true);
              }}
              className="w-full bg-[#EE5014] text-white font-semibold py-3 rounded-lg text-center"
            >
              Initiate Contact
            </button>
          </div>
        )}
      </header>

      {/* ── HERO SECTION ── */}
      <main className="relative overflow-hidden bg-gradient-to-b from-[#EDF6FD] via-[#F3F8FD] to-[#FFFFFF]">
        {/* Subtle decorative architectural grid lines in background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage: `radial-gradient(#93B4D7 0.75px, transparent 0.75px), radial-gradient(#93B4D7 0.75px, #F4F9FD 0.75px)`,
            backgroundSize: `36px 36px`,
            backgroundPosition: `0 0, 18px 18px`,
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-16 pb-12 sm:pb-16 lg:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* ── LEFT COLUMN: HEADLINE, COPY, DUAL CTAs ── */}
            <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8 z-10">
              {/* Eyebrow Tagline with Orange Dash Accent */}
              <div className="inline-flex items-center gap-3">
                <span className="w-8 h-[3px] bg-[#EE5014] rounded-full shrink-0" />
                <span className="text-xs sm:text-[13px] font-bold tracking-[0.2em] uppercase text-slate-600">
                  Leadership • Strategy • Lasting Impact
                </span>
              </div>

              {/* Main Headline */}
              <div className="space-y-1">
                <h1 className="text-[40px] sm:text-[54px] md:text-[62px] lg:text-[66px] xl:text-[72px] font-black tracking-[-0.03em] leading-[1.04] text-[#0A1E3F]">
                  Building Stronger
                  <br />
                  Organizations.
                </h1>
                <h2 className="text-[40px] sm:text-[54px] md:text-[62px] lg:text-[66px] xl:text-[72px] font-black tracking-[-0.03em] leading-[1.04] text-[#EE5014]">
                  Expanding Their Impact.
                </h2>
              </div>

              {/* Subhead / Lead Paragraph */}
              <p className="text-slate-600 text-lg sm:text-[19px] md:text-xl font-normal leading-relaxed max-w-xl">
                I work with executives, teams and mission-driven organizations to strengthen leadership,
                improve performance and create meaningful, lasting impact.
              </p>

              {/* Dual Action CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2.5 bg-[#EE5014] hover:bg-[#d6450f] text-white px-8 py-4 rounded-lg font-bold text-base sm:text-lg shadow-sm hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#EE5014]"
                >
                  <span>Work With Me</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  onClick={() => setIsServicesDrawerOpen(true)}
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-orange-50/70 text-[#EE5014] border-[1.5px] border-[#EE5014] px-8 py-4 rounded-lg font-bold text-base sm:text-lg shadow-sm hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#EE5014]"
                >
                  <span>Explore Services</span>
                </button>
              </div>

              {/* Executive Credential Badges */}
              <div className="pt-4 border-t border-slate-200/80 grid grid-cols-3 gap-4 max-w-lg">
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#0A1E3F] tracking-tight">
                    12+ <span className="text-[#EE5014] text-lg">Yrs</span>
                  </div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Executive Leadership
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#0A1E3F] tracking-tight">
                    4x <span className="text-[#EE5014] text-lg">Scale</span>
                  </div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Rapid Growth In 24 Mo
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#0A1E3F] tracking-tight">
                    18 <span className="text-[#EE5014] text-lg">States</span>
                  </div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Nationwide Footprint
                  </div>
                </div>
              </div>
            </div>

            {/* ── RIGHT COLUMN: HERO VISUAL & ARCHITECTURAL MOTIF ── */}
            <div className="lg:col-span-5 xl:col-span-5 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[520px] aspect-[4/5] sm:aspect-[5/6] rounded-2xl overflow-hidden border border-slate-200/80 shadow-2xl bg-[#E8EFF6]">
                {/* Visual Perspective Switcher: Executive Portrait vs Navy Whites */}
                {activePerspective === "executive" && (
                  <div className="relative w-full h-full">
                    {/* Stepped Architectural Background Layers */}
                    <div className="absolute inset-0 z-0 bg-gradient-to-tr from-[#DBE7F2] via-[#E6EFF7] to-[#F1F7FC]">
                      {/* Step 3 (Left / Lowest) */}
                      <div className="absolute left-0 bottom-0 w-[30%] h-[60%] bg-gradient-to-b from-[#D4E3F1] to-[#C7DBED] border-r border-white/60 shadow-md" />
                      {/* Step 2 (Middle) */}
                      <div className="absolute left-[30%] bottom-0 w-[32%] h-[78%] bg-gradient-to-b from-[#DDE8F4] to-[#CFE0F0] border-r border-white/60 shadow-lg" />
                      {/* Step 1 (Right / Tallest) */}
                      <div className="absolute right-0 bottom-0 w-[42%] h-[92%] bg-gradient-to-b from-[#E7EFF7] to-[#D7E6F3] shadow-xl" />
                    </div>

                    {/* Christian Thornton Cutout in Grey Double-Breasted Suit */}
                    <Image
                      src="/assets/christianthornton/christian-sample-hero-crop.png"
                      alt="Christian David Thornton in tailored executive grey suit with navy tie"
                      fill
                      priority
                      className="object-cover object-center z-10 drop-shadow-2xl"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 520px"
                    />

                    {/* Subtle bottom gradient vignette to blend with card footer */}
                    <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#0A1E3F]/40 to-transparent z-20 pointer-events-none" />
                  </div>
                )}

                {activePerspective === "navy" && (
                  <div className="relative w-full h-full bg-[#0A1E3F]">
                    <Image
                      src="/assets/christianthornton/Dress-Whites-1024x1020.jpg"
                      alt="Christian David Thornton in U.S. Navy Dress Whites"
                      fill
                      className="object-cover object-top z-10"
                      sizes="(max-width: 768px) 100vw, 520px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E3F] via-transparent to-black/30 z-20" />
                    <div className="absolute bottom-6 left-6 right-6 z-30 text-white">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#EE5014] text-xs font-bold uppercase tracking-wider mb-2">
                        <Anchor className="w-3.5 h-3.5" />
                        U.S. Navy Veteran
                      </div>
                      <p className="text-sm text-slate-200 font-medium">
                        Grounding executive strategy in military operational excellence, honor, and resilient command.
                      </p>
                    </div>
                  </div>
                )}

                {activePerspective === "comparison" && (
                  <div className="relative w-full h-full bg-slate-900 p-4 flex flex-col justify-center items-center text-center text-white">
                    <Image
                      src="/assets/christianthornton/sample-design-mockup.png"
                      alt="Original Design Sample by User"
                      fill
                      className="object-contain p-2"
                    />
                    <div className="absolute bottom-4 inset-x-4 bg-[#0A1E3F]/90 backdrop-blur-md p-3 rounded-lg border border-slate-700 text-xs">
                      <span className="font-bold text-[#EE5014]">Mockup Blueprint:</span> Verified pixel-accurate alignment with requested design.
                    </div>
                  </div>
                )}

                {/* Perspective Switcher Controls */}
                <div className="absolute bottom-4 right-4 z-30 bg-white/95 backdrop-blur-md rounded-xl p-1.5 shadow-lg border border-slate-200/80 flex items-center gap-1">
                  <button
                    onClick={() => setActivePerspective("executive")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      activePerspective === "executive"
                        ? "bg-[#EE5014] text-white shadow-sm"
                        : "text-slate-600 hover:text-[#0A1E3F] hover:bg-slate-100"
                    }`}
                  >
                    Executive
                  </button>
                  <button
                    onClick={() => setActivePerspective("navy")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                      activePerspective === "navy"
                        ? "bg-[#0A1E3F] text-white shadow-sm"
                        : "text-slate-600 hover:text-[#0A1E3F] hover:bg-slate-100"
                    }`}
                  >
                    <Anchor className="w-3 h-3 text-[#EE5014]" />
                    <span>Navy</span>
                  </button>
                  <button
                    onClick={() => setIsComparisonModalOpen(true)}
                    className="p-1.5 text-slate-500 hover:text-[#0A1E3F] rounded-lg hover:bg-slate-100 transition-colors"
                    title="Expand Before & After Comparison"
                  >
                    <Eye className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── BOTTOM SOCIAL PROOF / PARTNER LOGOS BAR ── */}
        <section className="relative z-20 bg-white border-t border-slate-200/80 py-8 lg:py-10 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#EE5014]" />
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500">
                  Trusted Institutional &amp; Enterprise Collaborations
                </span>
              </div>
              <span className="text-xs text-slate-400 font-medium">
                Public-private alliances, defense leadership &amp; executive advisory
              </span>
            </div>

            {/* 6 Grid Columns with Hairline Vertical Dividers */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 items-center gap-6 sm:gap-8 lg:gap-0">
              {PARTNERS.map((partner, idx) => (
                <div
                  key={partner.id}
                  className="group relative flex items-center justify-center py-2 px-4 transition-transform duration-200 hover:-translate-y-1"
                >
                  {/* Vertical divider on desktop */}
                  {idx > 0 && (
                    <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 h-10 w-px bg-slate-200" />
                  )}

                  {/* Logo Image */}
                  <div className="relative w-28 h-14 flex items-center justify-center filter grayscale contrast-125 opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-200">
                    <Image
                      src={partner.imageSrc}
                      alt={partner.alt}
                      width={110}
                      height={60}
                      className="object-contain max-h-12 w-auto"
                    />
                  </div>

                  {/* Accessible Hover Tooltip */}
                  <div className="absolute -top-14 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 z-30 bg-[#0A1E3F] text-white text-[11px] rounded-lg py-1.5 px-3 whitespace-nowrap shadow-xl">
                    <span className="font-bold text-[#EE5014]">{partner.name}</span>: {partner.relationship}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#0A1E3F]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER CREDENTIALS & VALUE ARCHITECTURE ── */}
      <footer className="bg-[#091B33] text-white border-t border-slate-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-slate-400">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <span className="text-white font-extrabold text-lg">Christian Thornton</span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span>President, CEO &amp; U.S. Navy Veteran</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <button
              onClick={() => setIsServicesDrawerOpen(true)}
              className="hover:text-[#EE5014] transition-colors"
            >
              Services &amp; Advisory
            </button>
            <button
              onClick={() => setIsComparisonModalOpen(true)}
              className="hover:text-[#EE5014] transition-colors"
            >
              Design Blueprint
            </button>
            <a
              href={CHRISTIAN_LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#EE5014] transition-colors inline-flex items-center gap-1.5"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href={ORIGINAL_WEBSITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#EE5014] transition-colors inline-flex items-center gap-1"
            >
              <span>Original Site</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="text-xs text-slate-500">
            Redesigned with precision by{" "}
            <a
              href={MISKAT_PORTFOLIO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 font-semibold hover:text-[#EE5014]"
            >
              Miskat Hossain
            </a>
          </div>
        </div>
      </footer>

      {/* ── MODAL: WORK WITH ME / EXECUTIVE INQUIRY (4 UI STATES) ── */}
      {isContactModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150"
        >
          <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
            {/* Modal Header */}
            <div className="bg-[#0A1E3F] text-white p-6 sm:p-8 relative">
              <button
                onClick={() => setIsContactModalOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#EE5014] mb-2">
                <span className="w-2 h-2 rounded-full bg-[#EE5014]" />
                Confidential Strategic Advisory
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Work With Christian Thornton
              </h3>
              <p className="text-slate-300 text-sm mt-1">
                Direct briefing intake for corporate boards, non-profit executives, and civic organizations.
              </p>
            </div>

            {/* Modal Body: Handling the 4 Essential UI States */}
            <div className="p-6 sm:p-8">
              {/* SUCCESS STATE */}
              {formStatus === "success" && (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-black text-[#0A1E3F]">
                    Briefing Received
                  </h4>
                  <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                    Thank you, <strong className="text-[#0A1E3F]">{formData.fullName}</strong>. Your inquiry regarding{" "}
                    <span className="text-[#EE5014] font-semibold">{formData.focusArea}</span> has been routed to Christian Thornton&apos;s executive office. You will receive an initial response within 24 business hours.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`mailto:${OFFICIAL_EMAIL}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-[#EE5014] bg-slate-100 px-4 py-2.5 rounded-lg"
                    >
                      <Mail className="w-4 h-4" />
                      <span>{OFFICIAL_EMAIL}</span>
                    </a>
                    <button
                      onClick={() => {
                        setFormStatus("empty");
                        setIsContactModalOpen(false);
                      }}
                      className="bg-[#0A1E3F] text-white text-sm font-semibold px-6 py-2.5 rounded-lg hover:bg-slate-800 transition-colors"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              )}

              {/* LOADING STATE */}
              {formStatus === "loading" && (
                <div className="text-center py-12 space-y-4">
                  <Loader2 className="w-10 h-10 text-[#EE5014] animate-spin mx-auto" />
                  <h4 className="text-lg font-bold text-[#0A1E3F]">
                    Routing Strategic Briefing...
                  </h4>
                  <p className="text-xs text-slate-500">
                    Encrypting priority executive communication channel.
                  </p>
                </div>
              )}

              {/* POPULATED / EMPTY / ERROR STATE (Interactive Form) */}
              {(formStatus === "empty" || formStatus === "populated" || formStatus === "error") && (
                <form onSubmit={handleSubmitContact} className="space-y-4">
                  {formStatus === "error" && (
                    <div className="p-3.5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
                      <span>{formErrorMsg || "Please fill in all required fields."}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g. Admiral / Director Jane Doe"
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-[#EE5014] focus:ring-2 focus:ring-[#EE5014]/20 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="jane.doe@organization.org"
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-[#EE5014] focus:ring-2 focus:ring-[#EE5014]/20 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Organization / Chamber
                      </label>
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleInputChange}
                        placeholder="e.g. State Economic Development Corp"
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-[#EE5014] focus:ring-2 focus:ring-[#EE5014]/20 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Focus Area
                      </label>
                      <select
                        name="focusArea"
                        value={formData.focusArea}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-[#EE5014] focus:ring-2 focus:ring-[#EE5014]/20 outline-none transition-all bg-white"
                      >
                        <option>Executive Leadership &amp; Strategy</option>
                        <option>Organizational Scale &amp; Performance</option>
                        <option>Talent &amp; Resilient Culture Building</option>
                        <option>Strategic Alliances &amp; Public-Private Coalitions</option>
                        <option>Keynote Address &amp; Speaking Engagement</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Briefing / Strategic Objective
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Outline your organization's current inflection point, strategic horizon, or event timing..."
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-[#EE5014] focus:ring-2 focus:ring-[#EE5014]/20 outline-none transition-all resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between gap-3">
                    <a
                      href={CHRISTIAN_LINKEDIN_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-[#0A1E3F]"
                    >
                      <Linkedin className="w-3.5 h-3.5 text-[#EE5014]" />
                      <span>Verify on LinkedIn</span>
                    </a>

                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 bg-[#EE5014] hover:bg-[#d6450f] text-white px-7 py-3 rounded-lg font-bold text-sm shadow-md active:scale-[0.98] transition-all"
                    >
                      <span>Submit Strategic Inquiry</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ── MODAL: EXPLORE SERVICES & DISCIPLINES DRAWER ── */}
      {isServicesDrawerOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150"
        >
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-slate-200">
            {/* Header */}
            <div className="bg-[#0A1E3F] text-white p-6 sm:p-8 sticky top-0 z-10 flex items-center justify-between border-b border-slate-800">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#EE5014]">
                  Disciplines of Impact
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mt-1">
                  Christian Thornton’s Advisory Services
                </h3>
              </div>
              <button
                onClick={() => setIsServicesDrawerOpen(false)}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close services modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content: Tabs for Disciplines */}
            <div className="p-6 sm:p-8 space-y-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 border-b border-slate-200 pb-4">
                {DISCIPLINES.map((d, i) => (
                  <button
                    key={d.id}
                    onClick={() => setActiveDisciplineIndex(i)}
                    className={`py-3 px-4 rounded-xl text-left transition-all ${
                      activeDisciplineIndex === i
                        ? "bg-[#0A1E3F] text-white shadow-md"
                        : "hover:bg-slate-100 text-slate-700"
                    }`}
                  >
                    <div className="text-[11px] font-bold text-[#EE5014] uppercase tracking-wider">
                      {d.number}
                    </div>
                    <div className="font-bold text-sm truncate">{d.title}</div>
                  </button>
                ))}
              </div>

              {/* Active Discipline Highlight */}
              {DISCIPLINES[activeDisciplineIndex] && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  <div className="md:col-span-8 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-[#EE5014] text-xs font-bold">
                      {DISCIPLINES[activeDisciplineIndex].tagline}
                    </div>
                    <h4 className="text-2xl font-black text-[#0A1E3F]">
                      {DISCIPLINES[activeDisciplineIndex].title}
                    </h4>
                    <p className="text-slate-600 leading-relaxed text-base">
                      {DISCIPLINES[activeDisciplineIndex].description}
                    </p>

                    <div className="pt-2">
                      <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                        Key Advisory Deliverables
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {DISCIPLINES[activeDisciplineIndex].deliverables.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-[#EE5014] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-4 bg-[#F3F8FD] p-6 rounded-2xl border border-slate-200/80 space-y-4 text-center">
                    <div className="text-4xl font-black text-[#0A1E3F]">
                      {DISCIPLINES[activeDisciplineIndex].metric}
                    </div>
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      {DISCIPLINES[activeDisciplineIndex].metricLabel}
                    </div>
                    <button
                      onClick={() => {
                        setIsServicesDrawerOpen(false);
                        setIsContactModalOpen(true);
                      }}
                      className="w-full bg-[#EE5014] hover:bg-[#d6450f] text-white py-3 rounded-lg font-bold text-sm transition-all"
                    >
                      Inquire on this Discipline
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ── MODAL: BEFORE & AFTER COMPARISON BLUEPRINT ── */}
      {isComparisonModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-150"
        >
          <div className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-slate-200">
            <div className="bg-[#0A1E3F] text-white p-6 sm:p-8 flex items-center justify-between sticky top-0 z-10">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#EE5014]">
                  Craft-Design Evaluation
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mt-1">
                  Redesign Blueprint vs Original Experience
                </h3>
              </div>
              <button
                onClick={() => setIsComparisonModalOpen(false)}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close comparison modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Reference Design Mockup */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#EE5014]">
                      Redesign Reference (Approved Spec)
                    </span>
                    <span className="text-xs text-slate-400">Sample Upload</span>
                  </div>
                  <div className="relative aspect-video rounded-xl overflow-hidden border border-slate-300 shadow-md">
                    <Image
                      src="/assets/christianthornton/sample-design-mockup.png"
                      alt="Sample design mockup"
                      fill
                      className="object-contain bg-slate-100"
                    />
                  </div>
                  <p className="text-xs text-slate-600">
                    High-contrast typography, brand orange (#EE5014), architectural stepped pillars, and 6 credential partner logos.
                  </p>
                </div>

                {/* Live Implementation Highlights */}
                <div className="space-y-4 bg-[#F4F9FD] p-6 rounded-2xl border border-slate-200">
                  <h4 className="text-lg font-bold text-[#0A1E3F]">
                    Key UX &amp; Architecture Enhancements
                  </h4>
                  <ul className="space-y-3 text-sm text-slate-700">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#EE5014] shrink-0 mt-0.5" />
                      <span><strong>High-Fidelity Typography:</strong> Heavyweight navy headline &amp; energetic orange accent compliant with WCAG AAA contrast ratio &gt; 12:1.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#EE5014] shrink-0 mt-0.5" />
                      <span><strong>The 4 Essential UI States:</strong> Intake drawer with Loading, Populated, Error, and Empty states to prevent CLS.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#EE5014] shrink-0 mt-0.5" />
                      <span><strong>Architectural Metaphor:</strong> Stepped rectangular pillars symbolizing institutional foundation and organizational resilience.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#EE5014] shrink-0 mt-0.5" />
                      <span><strong>Verified Credentials:</strong> Direct integration with Christian&apos;s real career achievements (12+ yrs, 4x growth, 18 states, U.S. Navy).</span>
                    </li>
                  </ul>

                  <div className="pt-2 flex items-center gap-3">
                    <a
                      href={ORIGINAL_WEBSITE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-slate-700 hover:text-[#EE5014] inline-flex items-center gap-1"
                    >
                      <span>Visit Live Website</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <span className="text-slate-300">•</span>
                    <a
                      href={CHRISTIAN_LINKEDIN_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-slate-700 hover:text-[#EE5014] inline-flex items-center gap-1"
                    >
                      <span>Christian&apos;s LinkedIn</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
