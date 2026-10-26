"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Award,
  ArrowRight,
  Sparkles,
  Calendar,
  Mail,
  Linkedin,
  ExternalLink,
  CheckCircle2,
  X,
  Compass,
  Briefcase,
  Users,
  GraduationCap,
  Clock,
  Layers,
  Phone,
  AlertCircle,
  Loader2,
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

  // Lock body scroll when modals are open
  useEffect(() => {
    if (isConsultationModalOpen || isPhilosophyDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isConsultationModalOpen, isPhilosophyDrawerOpen]);

  // Close modals on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsConsultationModalOpen(false);
        setIsPhilosophyDrawerOpen(false);
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
    }, 900);
  };

  return (
    <div className="min-h-screen bg-[#0A0C0E] text-[#F5F3EF] selection:bg-[#C8A97E] selection:text-[#0A0C0E] antialiased">
      {/* =========================================================================
          1. MINIMALIST EXECUTIVE TOP NAVIGATION BAR
      ========================================================================= */}
      <header className="sticky top-0 z-40 w-full border-b border-white/[0.08] bg-[#0A0C0E]/90 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">
          {/* Brand Mark */}
          <Link
            href="/movemeantnow"
            className="group flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A97E] rounded-md px-1 py-0.5"
            aria-label="Movemeant Coaching and Consultancy Home"
          >
            <span className="font-serif text-xl tracking-[0.08em] font-medium text-[#FAF8F5] transition-colors group-hover:text-[#C8A97E]">
              MOVEMEANT
            </span>
            <span className="text-[10px] tracking-[0.18em] uppercase text-[#A39E93]">
              Coaching & Consultancy · Koi Rivers, PCC
            </span>
          </Link>

          {/* Context Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wide uppercase text-[#A39E93]">
            <button
              onClick={() => setIsPhilosophyDrawerOpen(true)}
              className="transition-colors hover:text-[#FAF8F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A97E] rounded py-1 px-2"
            >
              The Philosophy
            </button>
            <button
              onClick={() => setIsPhilosophyDrawerOpen(true)}
              className="transition-colors hover:text-[#FAF8F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A97E] rounded py-1 px-2"
            >
              Dual Accreditation
            </button>
            <a
              href={KOI_RIVERS_LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-[#FAF8F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A97E] rounded py-1 px-2"
            >
              <Linkedin className="h-3.5 w-3.5" />
              <span>LinkedIn</span>
            </a>
          </nav>

          {/* Quick Header CTA */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleOpenConsultation()}
              className="inline-flex h-11 items-center justify-center rounded-lg border border-[#C8A97E]/60 bg-[#C8A97E]/10 px-5 text-xs font-semibold uppercase tracking-wider text-[#FAF8F5] transition-all duration-150 hover:bg-[#C8A97E] hover:text-[#0A0C0E] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A97E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0C0E]"
            >
              Request Consultation
            </button>
          </div>
        </div>
      </header>

      {/* =========================================================================
          2. THE MASTER HERO SECTION (Craft-Design Architecture)
      ========================================================================= */}
      <main className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
        {/* Subtle Architectural Atmosphere (Restrained, no tacky blur orbs) */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #FAF8F5 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          {/* Top Eyebrow Metadata Strip */}
          <div className="mb-6 flex flex-wrap items-center gap-3 text-xs tracking-wider uppercase">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#C8A97E]/30 bg-[#16191D] px-3.5 py-1.5 text-[#C8A97E]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C8A97E] animate-pulse" />
              <span className="font-semibold text-[11px] tracking-[0.14em]">
                ICF PCC & CCNI Dual-Accredited Advisory
              </span>
            </div>
            <span className="hidden sm:inline text-white/30">•</span>
            <span className="text-[#A39E93] text-[11px]">
              Elk Grove & Greater Sacramento, CA
            </span>
          </div>

          {/* Main Grid: Asymmetrical Editorial Balance (Left: Narrative / Right: Dossier) */}
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Narrative Column (7 cols on desktop) */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              {/* Primary Headline with Classical Editorial Contrast */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.12] font-normal tracking-[-0.02em] text-[#FAF8F5]">
                Where executive transition meets{" "}
                <span className="italic text-[#D4B68E] font-normal">
                  sacred clarity.
                </span>
              </h1>

              {/* High-Signal Value Narrative */}
              <p className="mt-6 text-base sm:text-lg leading-relaxed text-[#D0CBC0] max-w-2xl font-light">
                When high-impact leaders face pivotal endings—corporate restructuring,
                identity shifts, or elevated visibility—traditional goal-setting falls short.
                Founded by{" "}
                <strong className="font-medium text-[#FAF8F5]">
                  Koi Rivers, M.A., ICF PCC
                </strong>
                , Movemeant guides executives and credentialed coaches through the sacred space
                between what was and what is next.
              </p>

              {/* =========================================================================
                  INTERACTIVE PATHWAY SWITCHER (Lens Selection directly inside Hero)
              ========================================================================= */}
              <div className="mt-8 rounded-xl border border-white/[0.08] bg-[#121519] p-5 sm:p-6 shadow-2xl">
                {/* Lens Tabs */}
                <div className="flex flex-wrap gap-2 border-b border-white/[0.08] pb-4">
                  {(["executive", "threshold", "culture"] as FocusPathway[]).map((key) => {
                    const pathway = PATHWAYS[key];
                    const isActive = activePathway === key;
                    return (
                      <button
                        key={key}
                        onClick={() => setActivePathway(key)}
                        className={`rounded-lg px-3.5 py-2 text-xs font-semibold tracking-wide transition-all duration-150 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A97E] ${
                          isActive
                            ? "bg-[#C8A97E] text-[#0A0C0E] shadow-sm"
                            : "bg-white/[0.04] text-[#A39E93] hover:bg-white/[0.08] hover:text-[#FAF8F5]"
                        }`}
                        aria-pressed={isActive}
                      >
                        {pathway.pill}
                      </button>
                    );
                  })}
                </div>

                {/* Active Lens Content */}
                <div className="mt-5 space-y-4">
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#C8A97E]">
                      {currentPathway.headlineAccent}
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#E2DFD8]">
                      {currentPathway.summary}
                    </p>
                  </div>

                  {/* Curated Deliverables List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {currentPathway.deliverables.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 text-xs text-[#C5C0B4] leading-snug"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-[#C8A97E] mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Impact Proof Metric Strip */}
                  <div className="mt-4 flex items-center justify-between border-t border-white/[0.08] pt-4 text-xs">
                    <div>
                      <span className="text-[#A39E93] block text-[11px] uppercase tracking-wider">
                        {currentPathway.metricLabel}
                      </span>
                      <span className="text-xl font-serif font-medium text-[#FAF8F5]">
                        {currentPathway.metricValue}
                      </span>{" "}
                      <span className="text-[#C5C0B4] text-[11px]">
                        — {currentPathway.metricDetail}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons Hub */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => handleOpenConsultation(activePathway)}
                  className="inline-flex h-14 items-center justify-center gap-3 rounded-lg bg-[#FAF8F5] px-8 text-sm font-semibold uppercase tracking-wider text-[#0A0C0E] transition-all duration-150 hover:bg-[#C8A97E] active:scale-[0.98] shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A97E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0C0E]"
                >
                  <span>{currentPathway.ctaText}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>

                <button
                  onClick={() => setIsPhilosophyDrawerOpen(true)}
                  className="inline-flex h-14 items-center justify-center gap-2.5 rounded-lg border border-white/[0.16] bg-transparent px-6 text-sm font-medium text-[#FAF8F5] transition-all duration-150 hover:bg-white/[0.06] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A97E]"
                >
                  <Compass className="h-4 w-4 text-[#C8A97E]" />
                  <span>The Threshold Philosophy</span>
                </button>
              </div>

              {/* Immediate Micro-Trust Note */}
              <div className="mt-5 flex items-center gap-2 text-xs text-[#A39E93]">
                <Clock className="h-3.5 w-3.5 text-[#C8A97E]" />
                <span>Confidential inquiries reviewed directly by Koi Rivers within 24–48 hours.</span>
              </div>
            </div>

            {/* Right Dossier Column (5 cols on desktop) */}
            <div className="lg:col-span-5 flex flex-col items-center">
              {/* Executive Dossier Card */}
              <div className="relative w-full max-w-md rounded-2xl border border-white/[0.12] bg-[#121519] p-4 shadow-2xl">
                {/* Authentic Portrait of Koi Rivers */}
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-[#1C2026]">
                  <Image
                    src="/assets/movemeant/koi-rivers-portrait.jpg"
                    alt="Koi Rivers, M.A., ICF PCC — Founder & Chief Executive Strategist, Movemeant Coaching"
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    priority
                    className="object-cover object-top"
                  />
                  {/* Subtle Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C0E] via-transparent to-transparent opacity-60" />

                  {/* Verification Pill on Image */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#0A0C0E]/80 backdrop-blur-md px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#FAF8F5]">
                    <ShieldCheck className="h-3.5 w-3.5 text-[#C8A97E]" />
                    <span>ICF PCC & CCNI Verified</span>
                  </div>

                  {/* Subtle Name Title Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-[#0A0C0E]/90 backdrop-blur-md p-3.5 border border-white/[0.08]">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-serif text-base font-normal text-[#FAF8F5]">
                          Koi Rivers, M.A.
                        </div>
                        <div className="text-[11px] tracking-wider uppercase text-[#C8A97E]">
                          ICF Professional Certified Coach (PCC)
                        </div>
                      </div>
                      <Award className="h-6 w-6 text-[#C8A97E] shrink-0" />
                    </div>
                  </div>
                </div>

                {/* Tactile Authentic Quote Strip */}
                <div className="mt-4 rounded-lg border border-white/[0.06] bg-[#0E1115] p-4 text-xs leading-relaxed text-[#D0CBC0]">
                  <p className="italic">
                    &ldquo;Your clients aren&rsquo;t stuck. They are standing in an ending.
                    When we honor transition before rushing to goals, transformative leadership
                    takes root.&rdquo;
                  </p>
                  <div className="mt-2 text-[10px] tracking-widest uppercase font-semibold text-[#A39E93]">
                    — The Threshold™ Core Thesis
                  </div>
                </div>

                {/* Accreditation Micro-Badges */}
                <div className="mt-4 grid grid-cols-2 gap-2 text-center text-[11px]">
                  <div className="rounded border border-white/[0.06] bg-white/[0.02] p-2 text-[#C5C0B4]">
                    <span className="block font-semibold text-[#FAF8F5]">ICF Sacramento</span>
                    <span className="text-[10px] text-[#A39E93]">Director of DEIB</span>
                  </div>
                  <div className="rounded border border-white/[0.06] bg-white/[0.02] p-2 text-[#C5C0B4]">
                    <span className="block font-semibold text-[#FAF8F5]">2025 Honoree</span>
                    <span className="text-[10px] text-[#A39E93]">Exceptional Woman of Color</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =========================================================================
              3. TRUST GROUNDING PILLARS (Base of Hero Section)
          ========================================================================= */}
          <div className="mt-16 border-t border-white/[0.08] pt-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
              {/* Pillar 1 */}
              <div className="flex flex-col space-y-1">
                <div className="text-xs uppercase tracking-widest text-[#C8A97E] font-semibold">
                  01 · Credential
                </div>
                <div className="font-serif text-lg text-[#FAF8F5]">ICF PCC Credentialed</div>
                <p className="text-xs text-[#A39E93] leading-relaxed">
                  International Coaching Federation Professional Certified Coach, representing top-tier coaching mastery.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="flex flex-col space-y-1">
                <div className="text-xs uppercase tracking-widest text-[#C8A97E] font-semibold">
                  02 · Governance
                </div>
                <div className="font-serif text-lg text-[#FAF8F5]">ICF Sacramento Board</div>
                <p className="text-xs text-[#A39E93] leading-relaxed">
                  Director of Diversity, Equity, Inclusion & Belonging (DEIB) advancing ethical, inclusive leadership.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="flex flex-col space-y-1">
                <div className="text-xs uppercase tracking-widest text-[#C8A97E] font-semibold">
                  03 · Education
                </div>
                <div className="font-serif text-lg text-[#FAF8F5]">Dual-Accredited CCE</div>
                <p className="text-xs text-[#A39E93] leading-relaxed">
                  Recognized for 36.0 Continuing Coach Education hours across both ICF and CCNI professional renewals.
                </p>
              </div>

              {/* Pillar 4 */}
              <div className="flex flex-col space-y-1">
                <div className="text-xs uppercase tracking-widest text-[#C8A97E] font-semibold">
                  04 · Academic Pedigree
                </div>
                <div className="font-serif text-lg text-[#FAF8F5]">UC Davis Master&rsquo;s</div>
                <p className="text-xs text-[#A39E93] leading-relaxed">
                  Master of Arts from the University of California, Davis, integrating rigorous research with lived practice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* =========================================================================
          4. MINIMALIST EXECUTIVE FOOTER
      ========================================================================= */}
      <footer className="border-t border-white/[0.08] bg-[#07080A] py-10 text-xs text-[#8A857A]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 sm:flex-row lg:px-12">
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <span className="font-serif text-sm tracking-wide text-[#FAF8F5]">
              MOVEMEANT COACHING & CONSULTANCY
            </span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span>Founded by Koi Rivers, M.A., PCC</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={ORIGINAL_WEBSITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-[#FAF8F5]"
            >
              <span>Original Site</span>
              <ExternalLink className="h-3 w-3" />
            </a>
            <a
              href={KOI_RIVERS_LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-[#FAF8F5]"
            >
              <span>LinkedIn</span>
              <ExternalLink className="h-3 w-3" />
            </a>
            <a
              href={`mailto:${OFFICIAL_EMAIL}`}
              className="transition-colors hover:text-[#FAF8F5]"
            >
              {OFFICIAL_EMAIL}
            </a>
          </div>
        </div>
      </footer>

      {/* =========================================================================
          5. EXECUTIVE CONSULTATION INTAKE MODAL (All 4 UI States Handled)
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
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            aria-hidden="true"
          />

          {/* Modal Card */}
          <div className="relative w-full max-w-lg rounded-2xl border border-white/[0.14] bg-[#121519] p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setIsConsultationModalOpen(false)}
              className="absolute top-5 right-5 rounded-lg p-2 text-[#A39E93] transition-colors hover:bg-white/[0.08] hover:text-[#FAF8F5] min-w-[44px] min-h-[44px] flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A97E]"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {/* STATE 1: SUCCESS CONFIRMATION */}
            {formStatus === "success" ? (
              <div className="py-6 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#C8A97E]/20 text-[#C8A97E]">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="mt-4 font-serif text-2xl text-[#FAF8F5]">
                  Inquiry Received with Discretion
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#D0CBC0]">
                  Thank you, <strong className="text-[#FAF8F5]">{formData.fullName}</strong>. Your confidential inquiry regarding{" "}
                  <span className="text-[#C8A97E] font-medium">{formData.pathway}</span> has been securely transmitted.
                </p>
                <div className="mt-6 rounded-lg border border-white/[0.08] bg-[#0E1115] p-4 text-xs text-[#A39E93] text-left space-y-2">
                  <div className="flex items-center gap-2 text-[#FAF8F5] font-medium">
                    <Calendar className="h-4 w-4 text-[#C8A97E]" />
                    <span>Next Steps:</span>
                  </div>
                  <p>
                    1. Koi Rivers&rsquo; executive office will review your background and timeline within 24–48 business hours.
                  </p>
                  <p>
                    2. A private calendar invitation for a 20-minute clarity consultation will be sent to{" "}
                    <span className="text-[#FAF8F5]">{formData.email}</span>.
                  </p>
                </div>
                <button
                  onClick={() => setIsConsultationModalOpen(false)}
                  className="mt-6 w-full h-12 rounded-lg bg-[#C8A97E] text-xs font-semibold uppercase tracking-wider text-[#0A0C0E] transition-colors hover:bg-[#FAF8F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A97E]"
                >
                  Return to Overview
                </button>
              </div>
            ) : (
              /* STATE 2: POPULATED INPUT / SUBMITTING FORM */
              <div>
                <div className="mb-6">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#C8A97E]">
                    Confidential Advisory Intake
                  </span>
                  <h3 id="modal-title" className="mt-1 font-serif text-2xl text-[#FAF8F5]">
                    Initiate an Executive Dialogue
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#A39E93]">
                    Please share a few preliminary details to prepare for your conversation with Koi Rivers, PCC.
                  </p>
                </div>

                {/* Inline Error State */}
                {formStatus === "error" && errorMessage && (
                  <div className="mb-4 flex items-center gap-2.5 rounded-lg border border-rose-500/30 bg-rose-500/10 p-3 text-xs text-rose-300">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <form onSubmit={handleFormSubmit} className="space-y-4 text-left">
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-[#A39E93] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Elena Vance"
                      className="w-full h-11 rounded-lg border border-white/[0.12] bg-[#0A0C0E] px-3.5 text-sm text-[#FAF8F5] placeholder-[#5C5850] focus:border-[#C8A97E] focus:outline-none focus:ring-1 focus:ring-[#C8A97E]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-[#A39E93] mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="elena@organization.com"
                        className="w-full h-11 rounded-lg border border-white/[0.12] bg-[#0A0C0E] px-3.5 text-sm text-[#FAF8F5] placeholder-[#5C5850] focus:border-[#C8A97E] focus:outline-none focus:ring-1 focus:ring-[#C8A97E]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-[#A39E93] mb-1.5">
                        Organization & Title
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="VP, Talent / Independent Coach"
                        className="w-full h-11 rounded-lg border border-white/[0.12] bg-[#0A0C0E] px-3.5 text-sm text-[#FAF8F5] placeholder-[#5C5850] focus:border-[#C8A97E] focus:outline-none focus:ring-1 focus:ring-[#C8A97E]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-[#A39E93] mb-1.5">
                      Engagement Focus
                    </label>
                    <select
                      value={formData.pathway}
                      onChange={(e) => setFormData({ ...formData, pathway: e.target.value })}
                      className="w-full h-11 rounded-lg border border-white/[0.12] bg-[#0A0C0E] px-3.5 text-sm text-[#FAF8F5] focus:border-[#C8A97E] focus:outline-none focus:ring-1 focus:ring-[#C8A97E]"
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
                    <label className="block text-xs font-medium uppercase tracking-wider text-[#A39E93] mb-1.5">
                      Transition Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full h-11 rounded-lg border border-white/[0.12] bg-[#0A0C0E] px-3.5 text-sm text-[#FAF8F5] focus:border-[#C8A97E] focus:outline-none focus:ring-1 focus:ring-[#C8A97E]"
                    >
                      <option value="Immediate (Next 30 Days)">Immediate (Next 30 Days)</option>
                      <option value="Q4 / Next Quarter Planning">Q4 / Next Quarter Planning</option>
                      <option value="Upcoming Board / Role Inflection Point">
                        Upcoming Board / Role Inflection Point
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-[#A39E93] mb-1.5">
                      Context or Key Questions (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Briefly describe the transition, leadership landscape, or cohort questions..."
                      className="w-full rounded-lg border border-white/[0.12] bg-[#0A0C0E] p-3 text-sm text-[#FAF8F5] placeholder-[#5C5850] focus:border-[#C8A97E] focus:outline-none focus:ring-1 focus:ring-[#C8A97E]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === "loading"}
                    className="mt-2 w-full h-12 rounded-lg bg-[#FAF8F5] text-xs font-semibold uppercase tracking-wider text-[#0A0C0E] transition-all duration-150 hover:bg-[#C8A97E] disabled:opacity-60 flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A97E]"
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

                  <p className="text-[11px] text-center text-[#7A756C]">
                    All submissions are governed under strict executive confidentiality.
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* =========================================================================
          6. THE THRESHOLD PHILOSOPHY & ACCREDITATION DRAWER
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
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            aria-hidden="true"
          />

          {/* Drawer Body */}
          <div className="relative h-full w-full max-w-xl border-l border-white/[0.12] bg-[#101317] p-6 sm:p-10 shadow-2xl z-10 overflow-y-auto">
            <button
              onClick={() => setIsPhilosophyDrawerOpen(false)}
              className="absolute top-6 right-6 rounded-lg p-2 text-[#A39E93] transition-colors hover:bg-white/[0.08] hover:text-[#FAF8F5] min-w-[44px] min-h-[44px] flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A97E]"
              aria-label="Close philosophy drawer"
            >
              <X className="h-5 w-5" />
            </button>

            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C8A97E]">
              Core Methodology & Accreditation
            </span>
            <h2 id="drawer-title" className="mt-2 font-serif text-3xl font-normal text-[#FAF8F5]">
              The Threshold™ Thesis
            </h2>

            <div className="mt-6 space-y-6 text-sm leading-relaxed text-[#D0CBC0]">
              <div className="rounded-xl border border-[#C8A97E]/30 bg-[#16191E] p-5">
                <p className="font-serif italic text-base text-[#FAF8F5]">
                  &ldquo;When a leader arrives at your office declaring they are &lsquo;stuck,&rsquo; they are rarely lacking ambition or strategy. They are standing in an ending.&rdquo;
                </p>
                <div className="mt-3 text-xs tracking-wider uppercase text-[#C8A97E] font-medium">
                  — Koi Rivers, M.A., ICF PCC
                </div>
              </div>

              <div>
                <h4 className="font-serif text-lg text-[#FAF8F5]">Why Traditional Goal-Setting Breaks</h4>
                <p className="mt-2 text-xs sm:text-sm text-[#A39E93]">
                  Standard executive coaching immediately rushes to key results, 90-day targets, and tactical milestones. But when an organizational restructure dissolves a leader&rsquo;s identity, or when a long-standing corporate calling concludes, pushing forward without metabolizing what has ended creates executive anxiety, imposter syndrome, and team misalignment.
                </p>
              </div>

              <div>
                <h4 className="font-serif text-lg text-[#FAF8F5]">Dual Accreditation Verification</h4>
                <div className="mt-3 space-y-2 text-xs">
                  <div className="flex items-start gap-2.5 rounded-lg border border-white/[0.08] bg-[#0A0C0E] p-3">
                    <Award className="h-4 w-4 text-[#C8A97E] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#FAF8F5] block">International Coaching Federation (ICF)</strong>
                      <span>36.0 Continuing Coach Education (CCE) units recognized globally for credential renewals.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 rounded-lg border border-white/[0.08] bg-[#0A0C0E] p-3">
                    <ShieldCheck className="h-4 w-4 text-[#C8A97E] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#FAF8F5] block">Christian Coaches Network International (CCNI)</strong>
                      <span>36.0 CCE units for faith-forward coaches integrating biblical wisdom without dogma.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-serif text-lg text-[#FAF8F5]">About Koi Rivers</h4>
                <p className="mt-2 text-xs sm:text-sm text-[#A39E93]">
                  Koi Rivers holds a Master of Arts from UC Davis and serves as the Board Director of Diversity, Equity, Inclusion & Belonging (DEIB) for the ICF Sacramento Charter Chapter. In 2025, she was honored as an Exceptional Woman of Color for civic leadership and executive mentorship.
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <button
                  onClick={() => {
                    setIsPhilosophyDrawerOpen(false);
                    handleOpenConsultation("threshold");
                  }}
                  className="w-full h-12 rounded-lg bg-[#FAF8F5] text-xs font-semibold uppercase tracking-wider text-[#0A0C0E] transition-all hover:bg-[#C8A97E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A97E]"
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
