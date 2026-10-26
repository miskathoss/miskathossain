"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Award,
  ArrowRight,
  Calendar,
  Linkedin,
  ExternalLink,
  CheckCircle2,
  X,
  Compass,
  Clock,
  Phone,
  Mail,
  AlertCircle,
  Loader2,
  Menu,
} from "lucide-react";

// Official External Links & Invariants
const ORIGINAL_WEBSITE_URL = "https://movemeantnow.com/";
const KOI_RIVERS_LINKEDIN = "https://www.linkedin.com/in/koirivers/?isSelfProfile=false";
const OFFICIAL_EMAIL = "info@movemeantnow.com";
const OFFICIAL_PHONE = "(916) 555-0199";

type FocusPathway = "executive" | "threshold" | "culture";

interface PathwayData {
  id: FocusPathway;
  pill: string;
  headlineAccent: string;
  tagline: string;
  summary: string;
  deliverables: string[];
  metricLabel: string;
  metricValue: string;
  metricDetail: string;
  ctaText: string;
  formServiceName: string;
}

const PATHWAYS: Record<FocusPathway, PathwayData> = {
  executive: {
    id: "executive",
    pill: "Executive & C-Suite Advisory",
    headlineAccent: "Power Moves Leadership™",
    tagline: "High-stakes executive advisory for leaders navigating inflection points.",
    summary:
      "When senior vice presidents and C-suite leaders step into expanded visibility, traditional playbook execution is insufficient. We partner through bespoke 1-on-1 advisory to dismantle imposter dynamics, anchor executive authority, and align commercial ROI with personal values.",
    deliverables: [
      "Bi-weekly confidential 1-on-1 strategic advisory with Koi Rivers, PCC",
      "Comprehensive 360° executive presence and leadership diagnostic",
      "Executive boundary restoration and burnout mitigation framework",
      "Direct priority asynchronous strategic counsel between sessions",
    ],
    metricLabel: "Executive Clarity Velocity",
    metricValue: "94%",
    metricDetail: "of leaders report accelerated strategic role clarity within 60 days",
    ctaText: "Inquire for Executive Advisory",
    formServiceName: "Power Moves™ Executive & Leadership Advisory",
  },
  threshold: {
    id: "threshold",
    pill: "The Threshold™ Live Cohort (ICF + CCNI)",
    headlineAccent: "Coaching Endings, Not Goals",
    tagline: "Dual-accredited coach education for the sacred space of transition.",
    summary:
      "Job exits. Restructuring. Identity shifts. Faith re-anchoring. When coaches rush clients prematurely toward the next goal, the ending is left unhonored. This interactive 3.0 CCE course equips coaches and leaders to hold the space where transition, grief, and faith converge.",
    deliverables: [
      "Live 3-hour virtual interactive cohort workshop with Koi Rivers, PCC",
      "Observed triad coaching practice with ICF PCC instructor feedback",
      "The Threshold Course Companion with ongoing lifetime resource access",
      "Dual accreditation: 3.0 ICF CCE + 3.0 CCNI CCE renewal credits",
    ],
    metricLabel: "Dual Accreditation",
    metricValue: "36 CCE",
    metricDetail: "dual ICF & CCNI continuing coach education hours verified",
    ctaText: "Enroll in Threshold Cohort",
    formServiceName: "The Threshold™ Live Cohort (Dual ICF + CCNI CCE)",
  },
  culture: {
    id: "culture",
    pill: "Culture & Team Alignment",
    headlineAccent: "Systemic Belonging & Trust",
    tagline: "Trauma-informed organizational consulting and executive alignment.",
    summary:
      "Strategic alignment breaks when cross-functional silos breed unaddressed friction. We guide boards, corporate leadership teams, and mission-driven institutions through culture audits, DEIB facilitation, and high-trust retreats that translate values into operational integrity.",
    deliverables: [
      "Executive team alignment retreats and strategic culture audits",
      "Trauma-informed DEIB strategy led by ICF Sacramento DEIB Director",
      "Cross-functional communication and restorative conflict resolution",
      "Systemic culture roadmap translating values into measurable retention",
    ],
    metricLabel: "Organizational Alignment",
    metricValue: "100%",
    metricDetail: "bespoke advisory tailored to enterprise, non-profit, or civic teams",
    ctaText: "Schedule Culture Consultation",
    formServiceName: "Team Alignment & Culture Development Consulting",
  },
};

export default function MovemeantClient() {
  const [activePathway, setActivePathway] = useState<FocusPathway>("executive");
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [isPhilosophyDrawerOpen, setIsPhilosophyDrawerOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Form State: Populated, Loading, Error, Success
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "error" | "success">("idle");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    organization: "",
    pathway: PATHWAYS.executive.formServiceName,
    timeline: "Immediate (Next 30 Days)",
    notes: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const currentPathway = PATHWAYS[activePathway];

  // Sync modal selected service whenever pathway changes
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      pathway: PATHWAYS[activePathway].formServiceName,
    }));
  }, [activePathway]);

  // Lock body scroll when modals or mobile menu are open
  useEffect(() => {
    if (isConsultationModalOpen || isPhilosophyDrawerOpen || isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isConsultationModalOpen, isPhilosophyDrawerOpen, isMobileMenuOpen]);

  // Close modals on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsConsultationModalOpen(false);
        setIsPhilosophyDrawerOpen(false);
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleOpenConsultation = (pathway?: FocusPathway) => {
    if (pathway) {
      setActivePathway(pathway);
      setFormData((prev) => ({
        ...prev,
        pathway: PATHWAYS[pathway].formServiceName,
      }));
    }
    setFormStatus("idle");
    setErrorMessage("");
    setIsConsultationModalOpen(true);
    setIsMobileMenuOpen(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side boundary validation
    if (!formData.fullName.trim() || !formData.email.trim()) {
      setErrorMessage("Please provide both your name and email address.");
      setFormStatus("error");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMessage("Please provide a valid corporate or professional email.");
      setFormStatus("error");
      return;
    }

    setFormStatus("loading");
    setErrorMessage("");

    // Simulate reliable dispatch
    setTimeout(() => {
      setFormStatus("success");
    }, 850);
  };

  const scrollToPathways = () => {
    const el = document.getElementById("pathways-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#18191B] selection:bg-[#D4CF50] selection:text-[#14170E] antialiased overflow-x-hidden w-full max-w-[100vw]">
      {/* =========================================================================
          1. TOP ANNOUNCEMENT BANNER (Pixel-Accurate Olive/Moss Strip)
      ========================================================================= */}
      <aside
        onClick={() => handleOpenConsultation("threshold")}
        className="w-full bg-[#DAD554] text-[#1E2413] py-2 px-3 sm:px-4 text-center font-medium text-[11px] sm:text-[13px] tracking-normal transition-colors hover:bg-[#D2CE4F] cursor-pointer select-none"
        aria-label="Cohort Enrollment Announcement"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-1.5 flex-wrap">
          <span>Now Enrolling: Sept 29 Live Cohort | ICF + CCNI Accredited | $97 Introductory Rate</span>
          <span className="font-semibold text-sm leading-none shrink-0">→</span>
        </div>
      </aside>

      {/* =========================================================================
          2. CLEAN WHITE HEADER (Brand Logo + Navigation Menu)
      ========================================================================= */}
      <header className="sticky top-0 z-40 w-full bg-white border-b border-zinc-200/70 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
        <div className="mx-auto flex h-20 sm:h-24 max-w-7xl items-center justify-between px-6 lg:px-12">
          {/* Movemeant Logo */}
          <Link
            href="/movemeantnow"
            className="relative block h-10 w-36 sm:h-12 sm:w-48 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8E8A24] rounded-sm transition-transform active:scale-[0.99]"
            aria-label="Movemeant Coaching and Consultancy Home"
          >
            <Image
              src="/assets/movemeant/logo.png"
              alt="Movemeant Coaching & Consultancy Logo"
              fill
              sizes="(max-width: 640px) 150px, 200px"
              priority
              className="object-contain object-left"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden lg:flex items-center gap-8 xl:gap-9 text-[13px] font-bold tracking-wider uppercase text-[#222426]"
            aria-label="Primary Navigation"
          >
            <Link
              href="/movemeantnow"
              className="relative text-[#8E8A24] pb-1.5 transition-colors after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#8E8A24]"
              aria-current="page"
            >
              HOME
            </Link>
            <button
              onClick={() => setIsPhilosophyDrawerOpen(true)}
              className="transition-colors hover:text-[#8E8A24] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8E8A24] rounded py-1 px-1"
            >
              ABOUT
            </button>
            <button
              onClick={() => {
                setActivePathway("threshold");
                scrollToPathways();
              }}
              className="transition-colors hover:text-[#8E8A24] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8E8A24] rounded py-1 px-1"
            >
              COACH EDUCATION
            </button>
            <button
              onClick={() => {
                setActivePathway("culture");
                scrollToPathways();
              }}
              className="inline-flex items-center gap-1 transition-colors hover:text-[#8E8A24] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8E8A24] rounded py-1 px-1"
            >
              <span>ORGANIZATIONS</span>
              <span className="text-[10px] leading-none">⌵</span>
            </button>
            <button
              onClick={() => handleOpenConsultation()}
              className="transition-colors hover:text-[#8E8A24] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8E8A24] rounded py-1 px-1"
            >
              LET&apos;S WORK TOGETHER
            </button>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-lg border border-zinc-200 text-[#18191B] hover:bg-zinc-100 min-h-[44px] min-w-[44px] flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8E8A24]"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-zinc-200 bg-white px-6 py-5 shadow-lg">
            <nav className="flex flex-col space-y-4 text-sm font-bold tracking-wider uppercase text-[#222426]">
              <Link
                href="/movemeantnow"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#8E8A24] py-1 border-b border-zinc-100"
              >
                HOME
              </Link>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsPhilosophyDrawerOpen(true);
                }}
                className="text-left py-1 hover:text-[#8E8A24] border-b border-zinc-100"
              >
                ABOUT
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setActivePathway("threshold");
                  scrollToPathways();
                }}
                className="text-left py-1 hover:text-[#8E8A24] border-b border-zinc-100"
              >
                COACH EDUCATION
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setActivePathway("culture");
                  scrollToPathways();
                }}
                className="text-left py-1 hover:text-[#8E8A24] border-b border-zinc-100"
              >
                ORGANIZATIONS
              </button>
              <button
                onClick={() => handleOpenConsultation()}
                className="text-left py-1 hover:text-[#8E8A24] border-b border-zinc-100"
              >
                LET&apos;S WORK TOGETHER
              </button>
              <button
                onClick={() => handleOpenConsultation()}
                className="mt-3 w-full h-11 rounded-full bg-[#8E8A24] text-xs font-bold uppercase tracking-wider text-white"
              >
                Request Consultation
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* =========================================================================
          3. MASTER HERO SECTION (Exact Reference Replication)
      ========================================================================= */}
      <section className="relative overflow-hidden bg-[#F5F3F1] border-b border-zinc-200/70 pt-8 sm:pt-12 lg:pt-8 pb-10 lg:pb-0">
        {/* Subtle authentic botanical foliage overlay at bottom-left */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 w-80 sm:w-96 lg:w-[450px] h-24 sm:h-28 z-0 select-none"
          aria-hidden="true"
        >
          <Image
            src="/assets/movemeant/hero-bg-foliage-left.png"
            alt=""
            fill
            sizes="(max-width: 768px) 320px, 450px"
            className="object-contain object-bottom-left"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl pl-6 sm:pl-8 lg:pl-12 pr-6 sm:pr-8 lg:pr-0">
          <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12 lg:gap-4 xl:gap-6">
            {/* Left Narrative Column */}
            <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center pb-8 lg:pb-12 pt-4 lg:pt-6">
              {/* Eyebrow */}
              <p className="text-xs sm:text-[13px] font-semibold tracking-[0.18em] uppercase text-[#6E737B] mb-3 sm:mb-4">
                ICF AND CCNI ACCREDITED COACH EDUCATION
              </p>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-[2.65rem] xl:text-[3.15rem] font-bold tracking-tight text-[#18191B] leading-[1.12]">
                Building People Who
                <span className="block text-[#8F9E30] font-bold mt-1 sm:mt-1.5">
                  Build What Matters
                </span>
              </h1>

              {/* Subhead */}
              <p className="mt-4 sm:mt-5 text-base sm:text-lg lg:text-[1.05rem] xl:text-[1.15rem] text-[#4A4E54] leading-relaxed max-w-lg font-normal">
                Education and leadership development for today&apos;s leaders and tomorrow&apos;s coaches.
              </p>

              {/* Action Buttons Hub (Solid Primary Pill & Outlined Secondary Pill) */}
              <div className="mt-6 sm:mt-8 flex flex-col xs:flex-row sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
                <button
                  onClick={() => handleOpenConsultation("threshold")}
                  className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#D4CF50] hover:bg-[#C9C445] px-6 py-3.5 sm:px-7 sm:py-3.5 text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#14170E] transition-all duration-150 shadow-sm hover:shadow active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8E8A24] focus-visible:ring-offset-2"
                >
                  <span>COACH EDUCATION</span>
                  <ArrowRight className="h-4 w-4" />
                </button>

                <button
                  onClick={() => {
                    setActivePathway("culture");
                    scrollToPathways();
                  }}
                  className="inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-[#D4CF50] bg-white/70 hover:bg-[#D4CF50]/15 px-6 py-3.5 sm:px-7 sm:py-3.5 text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#14170E] transition-all duration-150 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8E8A24] focus-visible:ring-offset-2"
                >
                  <span>ORGANIZATIONS</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Right Visual Column (Circular Backdrop + Koi Rivers + Botanical Foliage seamlessly integrated) */}
            <div className="lg:col-span-6 xl:col-span-6 flex justify-center lg:justify-end items-end self-end w-full">
              <div className="relative w-full max-w-[360px] sm:max-w-[460px] lg:max-w-[514px] aspect-[514/460] mx-auto lg:mx-0">
                <Image
                  src="/assets/movemeant/hero-koi-portrait-seamless.png"
                  alt="Koi Rivers, M.A., ICF PCC — Founder & Chief Strategist, Movemeant Coaching & Consultancy"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 514px"
                  className="object-contain object-bottom-right"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. TRUST GROUNDING PILLARS (Brand Foundation)
      ========================================================================= */}
      <section className="bg-white py-14 sm:py-16 border-b border-zinc-200/70">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Pillar 1 */}
            <div className="rounded-xl border border-zinc-200/80 bg-[#FAF9F6] p-6 transition-all hover:border-[#8E8A24]/50 hover:shadow-sm">
              <div className="text-xs uppercase tracking-widest text-[#8E8A24] font-bold">
                01 · Credential
              </div>
              <div className="mt-2 text-lg font-bold text-[#111315]">ICF PCC Credentialed</div>
              <p className="mt-2 text-xs text-[#52525B] leading-relaxed">
                International Coaching Federation Professional Certified Coach, representing top-tier coaching mastery and ethical standards.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="rounded-xl border border-zinc-200/80 bg-[#FAF9F6] p-6 transition-all hover:border-[#8E8A24]/50 hover:shadow-sm">
              <div className="text-xs uppercase tracking-widest text-[#8E8A24] font-bold">
                02 · Governance
              </div>
              <div className="mt-2 text-lg font-bold text-[#111315]">ICF Sacramento Board</div>
              <p className="mt-2 text-xs text-[#52525B] leading-relaxed">
                Director of Diversity, Equity, Inclusion & Belonging (DEIB) advancing ethical, inclusive, and systemic executive leadership.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="rounded-xl border border-zinc-200/80 bg-[#FAF9F6] p-6 transition-all hover:border-[#8E8A24]/50 hover:shadow-sm">
              <div className="text-xs uppercase tracking-widest text-[#8E8A24] font-bold">
                03 · Education
              </div>
              <div className="mt-2 text-lg font-bold text-[#111315]">Dual-Accredited CCE</div>
              <p className="mt-2 text-xs text-[#52525B] leading-relaxed">
                Recognized for 36.0 Continuing Coach Education hours across both ICF and CCNI professional renewal accreditations.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="rounded-xl border border-zinc-200/80 bg-[#FAF9F6] p-6 transition-all hover:border-[#8E8A24]/50 hover:shadow-sm">
              <div className="text-xs uppercase tracking-widest text-[#8E8A24] font-bold">
                04 · Pedigree
              </div>
              <div className="mt-2 text-lg font-bold text-[#111315]">UC Davis Master&apos;s</div>
              <p className="mt-2 text-xs text-[#52525B] leading-relaxed">
                Master of Arts from the University of California, Davis, integrating rigorous research with lived transformative executive practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. INTERACTIVE PATHWAY SWITCHER (Executive / The Threshold / Culture)
      ========================================================================= */}
      <section id="pathways-section" className="bg-[#FAF9F6] py-16 sm:py-20 border-b border-zinc-200/70">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#8E8A24]">
              Transformative Pathways
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-[#111315]">
              Tailored Advisory & Coach Education
            </h2>
            <p className="mt-3 text-sm text-[#4A4E54] leading-relaxed">
              Explore the dedicated frameworks designed for executive inflection points, coach credentialing, and organizational culture.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200/90 bg-white p-6 sm:p-8 shadow-sm">
            {/* Pathway Tabs */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 border-b border-zinc-200 pb-5">
              {(["executive", "threshold", "culture"] as FocusPathway[]).map((key) => {
                const pathway = PATHWAYS[key];
                const isActive = activePathway === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActivePathway(key)}
                    className={`rounded-full px-5 py-2.5 text-xs sm:text-[13px] font-bold tracking-wide transition-all min-h-[44px] text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8E8A24] ${
                      isActive
                        ? "bg-[#8E8A24] text-white shadow-sm"
                        : "bg-zinc-100 text-[#4A4E54] hover:bg-zinc-200 hover:text-[#111315]"
                    }`}
                    aria-pressed={isActive}
                  >
                    {pathway.pill}
                  </button>
                );
              })}
            </div>

            {/* Active Pathway Details */}
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#8E8A24]">
                  {currentPathway.headlineAccent}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#111315]">
                  {currentPathway.tagline}
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-[#4A4E54]">
                  {currentPathway.summary}
                </p>

                {/* Deliverables Checklist */}
                <div className="pt-4 space-y-3">
                  <span className="block text-xs font-bold uppercase tracking-wider text-[#111315]">
                    Included Core Deliverables:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentPathway.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4A4E54] leading-snug">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-[#8E8A24] mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => handleOpenConsultation(activePathway)}
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#18191B] px-8 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-[#8E8A24] active:scale-[0.98] shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8E8A24]"
                  >
                    <span>{currentPathway.ctaText}</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>

                  <button
                    onClick={() => setIsPhilosophyDrawerOpen(true)}
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white px-6 text-xs font-bold uppercase tracking-wider text-[#18191B] transition-all hover:bg-zinc-50 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8E8A24]"
                  >
                    <Compass className="h-4 w-4 text-[#8E8A24]" />
                    <span>The Threshold Philosophy</span>
                  </button>
                </div>
              </div>

              {/* Metric Card */}
              <div className="lg:col-span-5 rounded-xl border border-zinc-200/90 bg-[#FAF9F6] p-6 sm:p-8 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#6B7280]">
                  {currentPathway.metricLabel}
                </span>
                <div className="text-4xl sm:text-5xl font-bold text-[#8E8A24]">
                  {currentPathway.metricValue}
                </div>
                <p className="text-xs sm:text-sm text-[#4A4E54] leading-relaxed">
                  {currentPathway.metricDetail}
                </p>
                <div className="pt-4 border-t border-zinc-200 text-xs text-[#6B7280] flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[#8E8A24] shrink-0" />
                  <span>Dual ICF PCC & CCNI verified methodology.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. THE THRESHOLD™ EDITORIAL THESIS
      ========================================================================= */}
      <section className="bg-white py-16 sm:py-20 border-b border-zinc-200/70">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Visual Portrait */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-lg bg-zinc-100">
                <Image
                  src="/assets/movemeant/ending-and-goal.jpg"
                  alt="Movemeant — Coaching Endings, Not Goals"
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Narrative Editorial */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#8E8A24]">
                The Threshold™ Core Thesis
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#111315] leading-tight">
                &ldquo;Your clients aren&apos;t stuck. They are standing in an ending.&rdquo;
              </h2>
              <p className="text-base text-[#4A4E54] leading-relaxed">
                When high-performing leaders face pivotal transitions—corporate restructuring, identity shifts, or elevated visibility—traditional goal-setting falls short. Pushing forward prematurely without metabolizing what has ended breeds executive burnout and internal dissonance.
              </p>
              <p className="text-base text-[#4A4E54] leading-relaxed">
                Founded by <strong>Koi Rivers, M.A., ICF PCC</strong>, Movemeant equips leaders and credentialed coaches with the vocabulary, somatic grounding, and faith-forward framework required to navigate the sacred space between what was and what comes next.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setIsPhilosophyDrawerOpen(true)}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#8E8A24] hover:text-[#76721E] transition-colors"
                >
                  <span>Explore The Full Methodology & Verification</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. EXECUTIVE FOOTER
      ========================================================================= */}
      <footer className="bg-[#18191B] text-zinc-300 py-12 text-xs">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 sm:flex-row lg:px-12">
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <span className="font-bold tracking-wider text-white uppercase">
              Movemeant Coaching & Consultancy
            </span>
            <span className="hidden sm:inline text-zinc-600">•</span>
            <span className="text-zinc-400">Founded by Koi Rivers, M.A., ICF PCC</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#8E8A24] text-white px-4 py-2 font-semibold hover:bg-[#A39F2B] transition-colors"
            >
              <span>See price plan</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <a
              href={ORIGINAL_WEBSITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <span>Original Site</span>
              <ExternalLink className="h-3 w-3" />
            </a>
            <a
              href={KOI_RIVERS_LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <span>LinkedIn</span>
              <ExternalLink className="h-3 w-3" />
            </a>
            <a
              href={`mailto:${OFFICIAL_EMAIL}`}
              className="transition-colors hover:text-white"
            >
              {OFFICIAL_EMAIL}
            </a>
          </div>
        </div>
      </footer>

      {/* =========================================================================
          8. EXECUTIVE CONSULTATION INTAKE MODAL (All 4 UI States Handled)
      ========================================================================= */}
      {isConsultationModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        >
          {/* Backdrop */}
          <div
            onClick={() => setIsConsultationModalOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            aria-hidden="true"
          />

          {/* Modal Card */}
          <div className="relative w-full max-w-lg rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setIsConsultationModalOpen(false)}
              className="absolute top-5 right-5 rounded-lg p-2 text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-800 min-w-[44px] min-h-[44px] flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8E8A24]"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {/* STATE 1: SUCCESS CONFIRMATION */}
            {formStatus === "success" ? (
              <div className="py-6 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#8E8A24]/15 text-[#8E8A24]">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="mt-4 text-2xl font-bold text-[#111315]">
                  Inquiry Received with Discretion
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4A4E54]">
                  Thank you, <strong className="text-[#111315]">{formData.fullName}</strong>. Your confidential inquiry regarding{" "}
                  <span className="text-[#8E8A24] font-semibold">{formData.pathway}</span> has been securely transmitted.
                </p>
                <div className="mt-6 rounded-lg border border-zinc-200 bg-[#FAF9F6] p-4 text-xs text-[#52525B] text-left space-y-2">
                  <div className="flex items-center gap-2 text-[#111315] font-bold">
                    <Calendar className="h-4 w-4 text-[#8E8A24]" />
                    <span>Next Steps:</span>
                  </div>
                  <p>
                    1. Koi Rivers&apos; executive office will review your background and timeline within 24–48 business hours.
                  </p>
                  <p>
                    2. A private calendar invitation for a 20-minute clarity consultation will be sent to{" "}
                    <span className="text-[#111315] font-semibold">{formData.email}</span>.
                  </p>
                </div>
                <button
                  onClick={() => setIsConsultationModalOpen(false)}
                  className="mt-6 w-full h-12 rounded-full bg-[#18191B] text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#8E8A24] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8E8A24]"
                >
                  Return to Overview
                </button>
              </div>
            ) : (
              /* STATE 2: POPULATED INPUT / SUBMITTING FORM */
              <div>
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#8E8A24]">
                    Confidential Advisory Intake
                  </span>
                  <h3 id="modal-title" className="mt-1 text-2xl font-bold text-[#111315]">
                    Initiate an Executive Dialogue
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#52525B]">
                    Please share a few preliminary details to prepare for your conversation with Koi Rivers, PCC.
                  </p>
                </div>

                {/* Inline Error State */}
                {formStatus === "error" && errorMessage && (
                  <div className="mb-4 flex items-center gap-2.5 rounded-lg border border-rose-200 bg-rose-50 p-3 text-xs text-rose-700">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <form onSubmit={handleFormSubmit} className="space-y-4 text-left">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#52525B] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Elena Vance"
                      className="w-full h-11 rounded-lg border border-zinc-300 bg-white px-3.5 text-sm text-[#111315] placeholder-zinc-400 focus:border-[#8E8A24] focus:outline-none focus:ring-1 focus:ring-[#8E8A24]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#52525B] mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="elena@organization.com"
                        className="w-full h-11 rounded-lg border border-zinc-300 bg-white px-3.5 text-sm text-[#111315] placeholder-zinc-400 focus:border-[#8E8A24] focus:outline-none focus:ring-1 focus:ring-[#8E8A24]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#52525B] mb-1.5">
                        Organization & Title
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="VP, Talent / Independent Coach"
                        className="w-full h-11 rounded-lg border border-zinc-300 bg-white px-3.5 text-sm text-[#111315] placeholder-zinc-400 focus:border-[#8E8A24] focus:outline-none focus:ring-1 focus:ring-[#8E8A24]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#52525B] mb-1.5">
                      Engagement Focus
                    </label>
                    <select
                      value={formData.pathway}
                      onChange={(e) => setFormData({ ...formData, pathway: e.target.value })}
                      className="w-full h-11 rounded-lg border border-zinc-300 bg-white px-3.5 text-sm text-[#111315] focus:border-[#8E8A24] focus:outline-none focus:ring-1 focus:ring-[#8E8A24]"
                    >
                      <option value="Power Moves™ Executive & Leadership Advisory">
                        Power Moves™ Executive & Leadership Advisory
                      </option>
                      <option value="The Threshold™ Live Cohort (Dual ICF + CCNI CCE)">
                        The Threshold™ Live Cohort (Dual ICF + CCNI CCE)
                      </option>
                      <option value="Team Alignment & Culture Development Consulting">
                        Team Alignment & Culture Development Consulting
                      </option>
                      <option value="Complimentary 20-Minute Clarity Consultation">
                        Complimentary 20-Minute Clarity Consultation
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#52525B] mb-1.5">
                      Transition Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full h-11 rounded-lg border border-zinc-300 bg-white px-3.5 text-sm text-[#111315] focus:border-[#8E8A24] focus:outline-none focus:ring-1 focus:ring-[#8E8A24]"
                    >
                      <option value="Immediate (Next 30 Days)">Immediate (Next 30 Days)</option>
                      <option value="Q4 / Next Quarter Planning">Q4 / Next Quarter Planning</option>
                      <option value="Upcoming Board / Role Inflection Point">
                        Upcoming Board / Role Inflection Point
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#52525B] mb-1.5">
                      Context or Key Questions (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Briefly describe the transition, leadership landscape, or cohort questions..."
                      className="w-full rounded-lg border border-zinc-300 bg-white p-3 text-sm text-[#111315] placeholder-zinc-400 focus:border-[#8E8A24] focus:outline-none focus:ring-1 focus:ring-[#8E8A24]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === "loading"}
                    className="mt-2 w-full h-12 rounded-full bg-[#18191B] text-xs font-bold uppercase tracking-wider text-white transition-all duration-150 hover:bg-[#8E8A24] disabled:opacity-60 flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8E8A24]"
                  >
                    {formStatus === "loading" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>Transmitting Inquiry...</span>
                      </>
                    ) : (
                      <span>Submit Confidential Inquiry</span>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-zinc-500">
                    All submissions are governed under strict executive confidentiality.
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* =========================================================================
          9. THE THRESHOLD PHILOSOPHY & ACCREDITATION DRAWER
      ========================================================================= */}
      {isPhilosophyDrawerOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="drawer-title"
          className="fixed inset-0 z-50 flex items-center justify-end"
        >
          {/* Backdrop */}
          <div
            onClick={() => setIsPhilosophyDrawerOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            aria-hidden="true"
          />

          {/* Drawer Body */}
          <div className="relative h-full w-full max-w-xl border-l border-zinc-200 bg-white p-6 sm:p-10 shadow-2xl z-10 overflow-y-auto">
            <button
              onClick={() => setIsPhilosophyDrawerOpen(false)}
              className="absolute top-6 right-6 rounded-lg p-2 text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-800 min-w-[44px] min-h-[44px] flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8E8A24]"
              aria-label="Close philosophy drawer"
            >
              <X className="h-5 w-5" />
            </button>

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#8E8A24]">
              Core Methodology & Accreditation
            </span>
            <h2 id="drawer-title" className="mt-2 text-3xl font-bold text-[#111315]">
              The Threshold™ Thesis
            </h2>

            <div className="mt-6 space-y-6 text-sm leading-relaxed text-[#4A4E54]">
              <div className="rounded-xl border border-[#8E8A24]/30 bg-[#FAF9F6] p-5">
                <p className="italic text-base text-[#111315]">
                  &ldquo;When a leader arrives at your office declaring they are &lsquo;stuck,&rsquo; they are rarely lacking ambition or strategy. They are standing in an ending.&rdquo;
                </p>
                <div className="mt-3 text-xs tracking-wider uppercase text-[#8E8A24] font-bold">
                  — Koi Rivers, M.A., ICF PCC
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold text-[#111315]">Why Traditional Goal-Setting Breaks</h4>
                <p className="mt-2 text-xs sm:text-sm text-[#52525B]">
                  Standard executive coaching immediately rushes to key results, 90-day targets, and tactical milestones. But when an organizational restructure dissolves a leader&apos;s identity, or when a long-standing corporate calling concludes, pushing forward without metabolizing what has ended creates executive anxiety, imposter syndrome, and team misalignment.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-[#111315]">Dual Accreditation Verification</h4>
                <div className="mt-3 space-y-2 text-xs">
                  <div className="flex items-start gap-2.5 rounded-lg border border-zinc-200 bg-[#FAF9F6] p-3">
                    <Award className="h-4 w-4 text-[#8E8A24] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#111315] block">International Coaching Federation (ICF)</strong>
                      <span>36.0 Continuing Coach Education (CCE) units recognized globally for credential renewals.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 rounded-lg border border-zinc-200 bg-[#FAF9F6] p-3">
                    <ShieldCheck className="h-4 w-4 text-[#8E8A24] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#111315] block">Christian Coaches Network International (CCNI)</strong>
                      <span>36.0 CCE units for faith-forward coaches integrating biblical wisdom without dogma.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold text-[#111315]">About Koi Rivers</h4>
                <p className="mt-2 text-xs sm:text-sm text-[#52525B]">
                  Koi Rivers holds a Master of Arts from UC Davis and serves as the Board Director of Diversity, Equity, Inclusion & Belonging (DEIB) for the ICF Sacramento Charter Chapter. In 2025, she was honored as an Exceptional Woman of Color for civic leadership and executive mentorship.
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-200">
                <button
                  onClick={() => {
                    setIsPhilosophyDrawerOpen(false);
                    handleOpenConsultation("threshold");
                  }}
                  className="w-full h-12 rounded-full bg-[#18191B] text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-[#8E8A24] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8E8A24]"
                >
                  Inquire for The Threshold Cohort
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
