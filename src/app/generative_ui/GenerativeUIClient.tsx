"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import confetti from "canvas-confetti";
import {
  Sparkles,
  Zap,
  ArrowRight,
  ShieldCheck,
  Compass,
  Target,
  Sliders,
  Award,
  Layers,
  CheckCircle2,
  Copy,
  Check,
  ExternalLink,
  Flame,
  RotateCcw,
  BookOpen,
  Users,
  Briefcase,
  Quote,
  X,
  Send,
  HelpCircle,
} from "lucide-react";
import MovemeantClient from "../movemeantnow/MovemeantClient";
import MovemeantBoostClient from "../movemeantnow/boost/MovemeantBoostClient";

// Scenarios for quick generative prompt selection
interface ScenarioPreset {
  id: string;
  name: string;
  role: string;
  stakes: string;
  inflection: string;
  faithGrounding: "central" | "ethical" | "inclusive";
  velocity: "90day" | "cohort" | "retainer";
  defaultPrompt: string;
}

const PRESET_SCENARIOS: ScenarioPreset[] = [
  {
    id: "restructuring-vp",
    name: "Corporate Restructuring Exit",
    role: "VP of Enterprise Marketing / Senior Corporate Leader",
    stakes: "Executive Exit, Severance Negotiation, Identity Shift",
    inflection: "Facing an unexpected corporate ending after 15+ years; need to pause panic and pivot without burning out.",
    faithGrounding: "central",
    velocity: "90day",
    defaultPrompt: "Recently transitioned out of a Fortune 500 VP role following restructuring. Struggling with loss of identity and corporate momentum. Need focused clarity on whether to pursue another C-suite role or launch an independent strategic advisory firm, grounded in faith.",
  },
  {
    id: "coach-education",
    name: "ICF / CCNI Coach Accreditation",
    role: "Practicing Executive Coach / Transition Counselor",
    stakes: "ICF PCC Renewal, Dual CCE Hours, Ending Competencies",
    inflection: "Clients arrive with grief, job loss, or life disruption, and traditional goal-setting frameworks feel abrasive.",
    faithGrounding: "central",
    velocity: "cohort",
    defaultPrompt: "I am a credentialed coach looking to sharpen my practice. My clients keep coming with endings (divorce, job loss, burnout) instead of clear goals. I want dual ICF and CCNI accredited continuing education (3.0 CCEs) that teaches how to hold the threshold.",
  },
  {
    id: "promotion-scope",
    name: "Executive Visibility & Power Moves",
    role: "Newly Promoted Senior Director / Emerging VP",
    stakes: "Boardroom Influence, C-Suite Presence, Boundary Architecture",
    inflection: "Stepping into expanded executive scope; facing internal imposter friction and calendar burnout.",
    faithGrounding: "ethical",
    velocity: "retainer",
    defaultPrompt: "Promoted to oversee three cross-functional departments with high executive scrutiny. Constantly pulled into meetings with zero strategic thinking time. Need 1-on-1 confidential executive coaching to establish unshakeable authority and boundaries.",
  },
  {
    id: "culture-alignment",
    name: "Cross-Functional Culture Rift",
    role: "Chief Operating Officer / Department Head",
    stakes: "Team Friction, Communication Silos, Lived Workplace Culture",
    inflection: "Department teams are divided into operational silos; annual retreats produced no real behavioral shift.",
    faithGrounding: "inclusive",
    velocity: "retainer",
    defaultPrompt: "Our leadership team has strong individual performers but fractured team communication. Need an intentional organizational culture intervention and quarterly planning rhythm to translate vision into daily team norms.",
  },
];

interface GeneratedBlueprint {
  archetype: string;
  headline: string;
  diagnosticDiagnosis: string;
  recommendedService: string;
  serviceHref: string;
  somaticProtocol: {
    title: string;
    technique: string;
    cadence: string;
  };
  scriptureAnchor: {
    verse: string;
    text: string;
    application: string;
  };
  milestoneRoadmap: {
    phase1: { name: string; focus: string };
    phase2: { name: string; focus: string };
    phase3: { name: string; focus: string };
  };
  keyPowerMove: string;
}

export default function GenerativeUIClient() {
  const [activeTab, setActiveTab] = useState<"generative" | "flagship" | "boost">("generative");
  const [selectedPresetId, setSelectedPresetId] = useState<string>("restructuring-vp");
  const [customPrompt, setCustomPrompt] = useState<string>(PRESET_SCENARIOS[0].defaultPrompt);
  const [userRole, setUserRole] = useState<string>(PRESET_SCENARIOS[0].role);
  const [faithPreference, setFaithPreference] = useState<"central" | "ethical" | "inclusive">("central");
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [copiedBlueprint, setCopiedBlueprint] = useState<boolean>(false);

  // Synthesized blueprint state
  const [blueprint, setBlueprint] = useState<GeneratedBlueprint>({
    archetype: "The Threshold Sovereign",
    headline: "Transforming Sudden Corporate Displacement into Grounded Executive Calling",
    diagnosticDiagnosis:
      "You are experiencing somatic and cognitive resistance because your previous corporate identity has ended, but your nervous system is still racing on high-alert urgency. Conventional goal rushing will lead to premature contract commitments or burnout.",
    recommendedService: "The 90-Day Movemeant Momentum Boost™ Sprint",
    serviceHref: "/movemeantnow/boost",
    somaticProtocol: {
      title: "4-7-8 Parasympathetic Vagal Reset (RYT-Informed)",
      technique: "Inhale through nose for 4 counts, hold for 7 counts, exhale slowly through mouth for 8 counts. Repeat 4 cycles before high-stakes conversations.",
      cadence: "Twice daily upon waking and prior to any negotiation call.",
    },
    scriptureAnchor: {
      verse: "Proverbs 3:5–6",
      text: "Trust in the LORD with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
      application: "Release the compulsion to script the next five years today. Surrender the ending so God can reveal the placement.",
    },
    milestoneRoadmap: {
      phase1: {
        name: "Days 1–30: The Ending Audit",
        focus: "Dismantle residual corporate narratives; regulate the nervous system; audit what must be completely concluded.",
      },
      phase2: {
        name: "Days 31–60: Power Moves Positioning",
        focus: "Architect your executive presence, uncompromised boundary blueprint, and high-stakes negotiation leverage.",
      },
      phase3: {
        name: "Days 61–90: Momentum Stewardship",
        focus: "Deploy a 12-month forward horizon roadmap and establish permanent, healthy executive rhythms.",
      },
    },
    keyPowerMove: "Decline to accept any role or project out of scarcity within the first 30 days of your threshold.",
  });

  // Booking Modal
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalSuccess, setModalSuccess] = useState<boolean>(false);
  const [bookingForm, setBookingForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    organization: "",
    notes: "",
  });

  const handlePresetSelect = (preset: ScenarioPreset) => {
    setSelectedPresetId(preset.id);
    setCustomPrompt(preset.defaultPrompt);
    setUserRole(preset.role);
    setFaithPreference(preset.faithGrounding);
  };

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      // Synthesize custom blueprint based on current prompt & options
      let newBlueprint: GeneratedBlueprint;

      if (selectedPresetId === "coach-education" || customPrompt.toLowerCase().includes("coach") || customPrompt.toLowerCase().includes("cce")) {
        newBlueprint = {
          archetype: "The Sacred Transition & Coach Education Specialist",
          headline: "Equipping You to Coach Endings with Dual-Accredited Authority (ICF + CCNI)",
          diagnosticDiagnosis:
            "Your clients aren't stuck—they are standing in a sacred ending. Pushing them toward rapid goals creates cognitive whiplash. You need the professional, somatic, and spiritual competencies to hold the space where transition and faith converge.",
          recommendedService: "The Threshold™ Live Cohort (ICF + CCNI CCE — $97)",
          serviceHref: "/movemeantnow#coach-education",
          somaticProtocol: {
            title: "Somatic Mirroring & Triad Grounding",
            technique: "Grounding the coach's nervous system to prevent secondary trauma when clients weep over career or relational dissolution.",
            cadence: "During live triad practicum and pre-session centering rituals.",
          },
          scriptureAnchor: {
            verse: "Ecclesiastes 3:1",
            text: "There is a time for everything, and a season for every activity under the heavens: a time to be born and a time to die...",
            application: "Give clients permission to mourn what has concluded before demanding they harvest what is next.",
          },
          milestoneRoadmap: {
            phase1: {
              name: "Hour 1: Deconstructing False Urgency",
              focus: "Explore why goal rushing harms transitioning clients and master the 4 Threshold Indicators.",
            },
            phase2: {
              name: "Hour 2: Observed Triad Practicum",
              focus: "Participate in real-time observed coaching with mentor feedback from ICF-credentialed instructors.",
            },
            phase3: {
              name: "Hour 3: Ethical Faith Integration & CCE Credit",
              focus: "Honor client autonomy without spiritual bypassing; submit 200-word reflection for 3.0 CCE certificates.",
            },
          },
          keyPowerMove: "Ask your client: 'What if you didn't need to fix this ending, but simply honor what it taught you?'",
        };
      } else if (selectedPresetId === "culture-alignment" || customPrompt.toLowerCase().includes("team") || customPrompt.toLowerCase().includes("culture")) {
        newBlueprint = {
          archetype: "The Lived Workplace Culture Architect",
          headline: "Aligning Everyday Team Norms & Dismantling Cross-Functional Silos",
          diagnosticDiagnosis:
            "Culture is not an annual offsite retreat—it is what happens every day in between. Your organization has individual stars trapped in fractured communication silos. You need an intentional operational charter and psychological safety framework.",
          recommendedService: "Team Alignment & Culture Development Consulting",
          serviceHref: "/movemeantnow#team-culture",
          somaticProtocol: {
            title: "Collective Down-Regulation in High-Conflict Syncs",
            technique: "Structured 60-second breathing pause before debate rounds to keep executive amygdalas calm and collaborative.",
            cadence: "Integrated into all weekly cross-functional executive staff meetings.",
          },
          scriptureAnchor: {
            verse: "Colossians 3:14",
            text: "And over all these virtues put on love, which binds them all together in perfect unity.",
            application: "Lead with empathy that dismantles defensive corporate silos and invites genuine mutual accountability.",
          },
          milestoneRoadmap: {
            phase1: {
              name: "Month 1: Diagnostic Friction Audit",
              focus: "Unpack hidden cross-functional bottlenecks and anonymous team feedback across all director levels.",
            },
            phase2: {
              name: "Month 2: Executive Alignment Workshop",
              focus: "Facilitate intensive leadership alignment session to establish shared operating norms and decision rules.",
            },
            phase3: {
              name: "Month 3: Lived Operational Rhythms",
              focus: "Embed quarterly planning cadences, team accountability charters, and post-session milestone tracking.",
            },
          },
          keyPowerMove: "Replace vague 'values statements' on company walls with unambiguous behavioral rules for Slack and meetings.",
        };
      } else if (selectedPresetId === "promotion-scope" || customPrompt.toLowerCase().includes("director") || customPrompt.toLowerCase().includes("board")) {
        newBlueprint = {
          archetype: "The Strategic Executive Visionary",
          headline: "Anchoring C-Suite Gravitas & Shattering Imposter Friction",
          diagnosticDiagnosis:
            "You have achieved the title, but you are still operating with individual contributor reflexes. Leading at this altitude requires delegating tactical fires, establishing bulletproof calendar boundaries, and executing high-leverage power moves.",
          recommendedService: "Power Moves™ Executive & Leadership Coaching",
          serviceHref: "/movemeantnow#power-moves",
          somaticProtocol: {
            title: "Executive Voice & Posture Embodiment",
            technique: "Rooted pelvic floor grounding, slowed vocal cadence, and intentional silence before answering board inquiries.",
            cadence: "10 minutes before every executive committee or board presentation.",
          },
          scriptureAnchor: {
            verse: "2 Timothy 1:7",
            text: "For God has not given us a spirit of fear, but of power and of love and of a sound mind.",
            application: "Reject imposter narratives; your seat at the table is ordained for strategic stewardship.",
          },
          milestoneRoadmap: {
            phase1: {
              name: "Month 1–2: 360° Leadership Audit",
              focus: "Map stakeholder expectations, identify communication friction, and build your bespoke Power Moves Playbook.",
            },
            phase2: {
              name: "Month 3–4: High-Stakes Influence",
              focus: "Master executive voice, negotiation positioning, and calendar architecture to reclaim 30+ strategic hours monthly.",
            },
            phase3: {
              name: "Month 5–6: Enduring Enterprise Legacy",
              focus: "Develop high-performing succession pathways, team alignment, and sustainable spiritual rhythms.",
            },
          },
          keyPowerMove: "Audit your calendar and ruthlessly decline 3 recurring meetings where your presence adds zero strategic value.",
        };
      } else {
        newBlueprint = {
          archetype: "The High-Velocity Turnaround Executive",
          headline: "Turn Your Transition Threshold Into Executive Velocity (90-Day Sprint)",
          diagnosticDiagnosis:
            "You are standing at an inflection point where conventional goal-rushing will generate friction. You need rapid somatic grounding, unshakeable boundary architecture, and tactical executive positioning in an intensive 90-day arc.",
          recommendedService: "The 90-Day Movemeant Momentum Boost™ Sprint",
          serviceHref: "/movemeantnow/boost",
          somaticProtocol: {
            title: "4-7-8 Parasympathetic Vagal Reset",
            technique: "Regulate nervous system panic; prevent knee-jerk career acceptance out of scarcity.",
            cadence: "Daily morning somatic grounding and prior to career negotiations.",
          },
          scriptureAnchor: {
            verse: "Proverbs 3:5–6",
            text: "In all your ways submit to Him, and He will make your paths straight.",
            application: "Acknowledge the ending and trust that you are placed, not displaced.",
          },
          milestoneRoadmap: {
            phase1: {
              name: "Days 1–30: The Threshold Audit",
              focus: "Dismantle the prior role; somatic grounding; stop reactive second-guessing.",
            },
            phase2: {
              name: "Days 31–60: Power Moves Strategic Architecture",
              focus: "Personal executive brand, negotiation scripts, boundary blueprint.",
            },
            phase3: {
              name: "Days 61–90: Sustainable Momentum & Horizon",
              focus: "12-month forward milestones, team culture matrix, self-sustaining pace.",
            },
          },
          keyPowerMove: "Do not interview for any role until you have articulated what you are officially releasing from your last role.",
        };
      }

      setBlueprint(newBlueprint);
      setIsGenerating(false);

      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
        colors: ["#E5A93C", "#529477", "#F5C467"],
      });
    }, 600);
  };

  const copyBlueprintToClipboard = () => {
    const text = `
=== MOVEMEANT GENERATIVE EXECUTIVE BLUEPRINT ===
Archetype: ${blueprint.archetype}
Focus: ${blueprint.headline}

[DIAGNOSTIC DIAGNOSIS]
${blueprint.diagnosticDiagnosis}

[RECOMMENDED MOVEMEANT PROGRAM]
${blueprint.recommendedService}

[SOMATIC GROUNDING PROTOCOL]
${blueprint.somaticProtocol.title}
Technique: ${blueprint.somaticProtocol.technique}
Cadence: ${blueprint.somaticProtocol.cadence}

[FAITH & SCRIPTURE ANCHOR]
${blueprint.scriptureAnchor.verse} - "${blueprint.scriptureAnchor.text}"
Application: ${blueprint.scriptureAnchor.application}

[3-PHASE MILESTONE ROADMAP]
- ${blueprint.milestoneRoadmap.phase1.name}: ${blueprint.milestoneRoadmap.phase1.focus}
- ${blueprint.milestoneRoadmap.phase2.name}: ${blueprint.milestoneRoadmap.phase2.focus}
- ${blueprint.milestoneRoadmap.phase3.name}: ${blueprint.milestoneRoadmap.phase3.focus}

[KEY POWER MOVE]
${blueprint.keyPowerMove}
=================================================
Synthesized via Movemeant Generative UI Redesign Architecture by Miskat Hossain.
Founder: Koi Rivers, PCC (Movemeant Coaching & Consultancy)
`;

    navigator.clipboard.writeText(text);
    setCopiedBlueprint(true);
    setTimeout(() => setCopiedBlueprint(false), 2500);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#E5A93C", "#529477", "#F5C467"],
    });
    setModalSuccess(true);
  };

  return (
    <div className="min-h-screen bg-[#0B0E14] text-[#E5E0D8] selection:bg-[#E5A93C] selection:text-[#0B0E14] font-sans antialiased overflow-x-hidden">
      {/* ========================================================= */}
      {/* 1. GENERATIVE UI ARCHITECTURE TOP BANNER                  */}
      {/* ========================================================= */}
      <div className="bg-[#07090E] border-b border-white/[0.08] text-xs py-2.5 px-4 relative z-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2.5">
          <div className="flex items-center gap-2.5 flex-wrap justify-center md:justify-start">
            <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#E5A93C] text-[#0B0E14] uppercase tracking-wider">
              Generative UI Mode
            </span>
            <span className="text-white font-medium">
              Movemeant Adaptive Interface Architecture
            </span>
            <span className="text-white/30 hidden sm:inline">•</span>
            <span className="text-white/70">
              Redesigned for <strong className="text-white">Koi Rivers, PCC</strong> by <strong className="text-[#E5A93C]">Miskat Hossain</strong>
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <Link
              href="/movemeantnow"
              className="text-[#E5A93C] hover:underline flex items-center gap-1 font-semibold"
            >
              <span>Sub-Page: /movemeantnow</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
            <span className="text-white/30">•</span>
            <Link
              href="/movemeantnow/boost"
              className="text-[#E5A93C] hover:underline flex items-center gap-1 font-semibold"
            >
              <span>Sub-Page: /boost</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 2. NAVIGATION & MODE SWITCHER                             */}
      {/* ========================================================= */}
      <header className="sticky top-0 z-40 bg-[#0B0E14]/90 backdrop-blur-md border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link href="/movemeantnow" className="relative h-11 w-44 sm:h-12 sm:w-52">
              <Image
                src="/assets/movemeant/logo.png"
                alt="Movemeant Coaching and Consultancy Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </Link>
            <div className="hidden lg:flex items-center gap-2 pl-4 border-l border-white/10">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono text-[#E5A93C] bg-[#E5A93C]/10 border border-[#E5A93C]/30">
                /generative_ui
              </span>
            </div>
          </div>

          {/* Interactive Mode Pills */}
          <div className="flex items-center gap-1.5 p-1 rounded-full bg-[#121622] border border-white/10 text-xs">
            <button
              onClick={() => setActiveTab("generative")}
              className={`px-3.5 py-1.5 rounded-full font-medium transition-all ${
                activeTab === "generative"
                  ? "bg-[#E5A93C] text-[#0B0E14] font-semibold shadow-md"
                  : "text-[#A39E93] hover:text-white"
              }`}
            >
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Generative Blueprint Studio</span>
              </span>
            </button>
            <button
              onClick={() => setActiveTab("flagship")}
              className={`px-3.5 py-1.5 rounded-full font-medium transition-all ${
                activeTab === "flagship"
                  ? "bg-[#E5A93C] text-[#0B0E14] font-semibold shadow-md"
                  : "text-[#A39E93] hover:text-white"
              }`}
            >
              <span>Flagship Redesign</span>
            </button>
            <button
              onClick={() => setActiveTab("boost")}
              className={`px-3.5 py-1.5 rounded-full font-medium transition-all ${
                activeTab === "boost"
                  ? "bg-[#E5A93C] text-[#0B0E14] font-semibold shadow-md"
                  : "text-[#A39E93] hover:text-white"
              }`}
            >
              <span>Boost Sprint (/boost)</span>
            </button>
          </div>

          {/* External Compare Link */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://movemeantnow.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#A39E93] hover:text-white flex items-center gap-1 transition-colors"
            >
              <span>Original Site</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </header>

      {/* ========================================================= */}
      {/* 3. CONDITIONAL RENDER BASED ON MODE                       */}
      {/* ========================================================= */}
      {activeTab === "flagship" ? (
        <div>
          <div className="bg-[#121622] border-b border-white/10 py-3 text-center text-xs text-[#C8C2B7]">
            Viewing the Full Flagship Redesign for Movemeant Coaching & Consultancy.{" "}
            <button
              onClick={() => setActiveTab("generative")}
              className="text-[#E5A93C] underline font-semibold ml-1"
            >
              Switch back to Generative Blueprint Studio ↑
            </button>
          </div>
          <MovemeantClient />
        </div>
      ) : activeTab === "boost" ? (
        <div>
          <div className="bg-[#121622] border-b border-white/10 py-3 text-center text-xs text-[#C8C2B7]">
            Viewing the Specialized 90-Day Executive Accelerator Sub-Page.{" "}
            <button
              onClick={() => setActiveTab("generative")}
              className="text-[#E5A93C] underline font-semibold ml-1"
            >
              Switch back to Generative Blueprint Studio ↑
            </button>
          </div>
          <MovemeantBoostClient />
        </div>
      ) : (
        <main className="relative pt-12 pb-24 px-4 sm:px-6 lg:px-8">
          {/* Ambient Lighting */}
          <div className="absolute top-20 left-1/4 -translate-x-1/2 w-[700px] h-[350px] bg-[#E5A93C]/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute top-1/3 right-10 w-[500px] h-[350px] bg-[#529477]/10 rounded-full blur-[160px] pointer-events-none" />

          <div className="max-w-7xl mx-auto space-y-12">
            {/* Header Hero */}
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#161B26] border border-[#E5A93C]/30 text-xs text-[#E5A93C] font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>ADAPTIVE GENERATIVE UI ARCHITECTURE</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-[1.12]">
                Generative Leadership &{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#F5C467] via-[#E5A93C] to-[#E08769]">
                  Threshold Synthesizer
                </span>
              </h1>
              <p className="text-base sm:text-lg text-[#C8C2B7] font-light leading-relaxed">
                Traditional coaching websites force every visitor through identical static copy. Movemeant’s Generative UI synthesizes a personalized executive transition canvas, somatic regulation protocol, and dual-accredited roadmap in real-time.
              </p>
            </div>

            {/* Generative Interactive Studio */}
            <div className="rounded-3xl bg-[#121622] border border-[#E5A93C]/30 p-6 sm:p-10 shadow-2xl space-y-8">
              {/* Presets Row */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-white uppercase tracking-wider">
                    Select a Leadership Transition Scenario or Customize Below:
                  </span>
                  <span className="text-[#A39E93]">4 Curated Enterprise Archetypes</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {PRESET_SCENARIOS.map((preset) => (
                    <button
                      key={preset.id}
                      onClick={() => handlePresetSelect(preset)}
                      className={`p-3.5 rounded-2xl text-left transition-all border ${
                        selectedPresetId === preset.id
                          ? "bg-[#182030] border-[#E5A93C] text-white shadow-md shadow-[#E5A93C]/10"
                          : "bg-[#0B0E14] border-white/10 hover:border-white/20 text-[#A39E93]"
                      }`}
                    >
                      <div className="text-xs font-semibold text-white mb-1 flex items-center justify-between">
                        <span>{preset.name}</span>
                        {selectedPresetId === preset.id && (
                          <Check className="w-3.5 h-3.5 text-[#E5A93C]" />
                        )}
                      </div>
                      <p className="text-[11px] text-[#A39E93] leading-relaxed line-clamp-2">
                        {preset.role}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Prompt & Parameters Box */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-8 space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-white uppercase tracking-wider mb-2">
                      Leadership Prompt & Context (Live Synthesis Input):
                    </label>
                    <textarea
                      rows={4}
                      value={customPrompt}
                      onChange={(e) => setCustomPrompt(e.target.value)}
                      placeholder="Describe your current threshold, organizational pivot, or coaching challenge..."
                      className="w-full p-4 rounded-2xl bg-[#0B0E14] border border-white/10 text-white placeholder-[#706B62] text-xs leading-relaxed focus:outline-none focus:border-[#E5A93C] transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-[#C8C2B7] mb-1">
                        Professional Scope / Role:
                      </label>
                      <input
                        type="text"
                        value={userRole}
                        onChange={(e) => setUserRole(e.target.value)}
                        placeholder="e.g. VP of Operations / Certified Coach"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B0E14] border border-white/10 text-white text-xs focus:outline-none focus:border-[#E5A93C]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#C8C2B7] mb-1">
                        Faith & Values Anchor:
                      </label>
                      <select
                        value={faithPreference}
                        onChange={(e) =>
                          setFaithPreference(e.target.value as "central" | "ethical" | "inclusive")
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B0E14] border border-white/10 text-white text-xs focus:outline-none focus:border-[#E5A93C]"
                      >
                        <option value="central">Central Calling Foundation (Proverbs 3:6)</option>
                        <option value="ethical">Ethical Leadership Compass</option>
                        <option value="inclusive">Inclusive Somatic Human Development</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 bg-[#0B0E14] p-5 rounded-2xl border border-white/10 space-y-4">
                  <div className="text-xs font-semibold text-white uppercase tracking-wider flex items-center gap-2">
                    <Sliders className="w-4 h-4 text-[#E5A93C]" />
                    <span>Engine Specifications</span>
                  </div>
                  <div className="space-y-2 text-xs text-[#A39E93]">
                    <div className="flex justify-between border-b border-white/5 pb-1">
                      <span>Accreditation Base:</span>
                      <strong className="text-white">ICF PCC + CCNI</strong>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-1">
                      <span>Somatic Framework:</span>
                      <strong className="text-white">RYT-200 Vagal Reset</strong>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-1">
                      <span>Leadership Engine:</span>
                      <strong className="text-white">Power Moves™</strong>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-1">
                      <span>Speed to Output:</span>
                      <strong className="text-[#529477] font-mono">&lt; 0.6s Dynamic</strong>
                    </div>
                  </div>

                  <button
                    onClick={handleGenerate}
                    disabled={isGenerating}
                    className="w-full py-3.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-[#E5A93C] to-[#D4972A] hover:from-[#F5C467] hover:to-[#E5A93C] text-[#0B0E14] shadow-lg shadow-[#E5A93C]/20 transition-all flex items-center justify-center gap-2"
                  >
                    {isGenerating ? (
                      <>
                        <RotateCcw className="w-4 h-4 animate-spin" />
                        <span>Synthesizing Architecture...</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4" />
                        <span>Synthesize Executive Blueprint</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Synthesized Live Generative Output Display */}
              <div className="pt-4 border-t border-white/10 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#529477]/20 text-[#529477] flex items-center justify-center font-bold">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-[#529477] uppercase tracking-wider">
                        Generated Blueprint Canvas
                      </div>
                      <h3 className="font-serif text-2xl text-white">
                        {blueprint.archetype}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={copyBlueprintToClipboard}
                      className="px-4 py-2 rounded-full text-xs font-medium bg-[#161B26] hover:bg-[#202737] text-white border border-white/10 hover:border-[#E5A93C] transition-all flex items-center gap-1.5"
                    >
                      {copiedBlueprint ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#529477]" />
                          <span>Copied Blueprint!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-[#E5A93C]" />
                          <span>Copy Executive Plan</span>
                        </>
                      )}
                    </button>
                    <button
                      onClick={() => {
                        setBookingForm((prev) => ({
                          ...prev,
                          notes: `[Generative UI Payload: ${blueprint.archetype}] — ${blueprint.headline}`,
                        }));
                        setIsModalOpen(true);
                        setModalSuccess(false);
                      }}
                      className="px-5 py-2 rounded-full text-xs font-semibold bg-[#E5A93C] text-[#0B0E14] hover:bg-[#F5C467] transition-all flex items-center gap-1.5 shadow-md"
                    >
                      <span>Proceed with This Plan</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Main Blueprint Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Left Column: Diagnosis & Milestones */}
                  <div className="lg:col-span-8 space-y-5">
                    {/* Focus card */}
                    <div className="p-6 rounded-2xl bg-[#0B0E14] border border-[#E5A93C]/40 space-y-2">
                      <span className="text-[11px] font-bold text-[#E5A93C] uppercase tracking-wider">
                        Executive Focus & Diagnosis
                      </span>
                      <h4 className="text-xl font-serif text-white">
                        {blueprint.headline}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#C8C2B7] font-light leading-relaxed pt-1">
                        {blueprint.diagnosticDiagnosis}
                      </p>
                    </div>

                    {/* 3-Phase Roadmap */}
                    <div className="p-6 rounded-2xl bg-[#0B0E14] border border-white/10 space-y-4">
                      <div className="text-xs font-semibold text-white uppercase tracking-wider flex items-center gap-2">
                        <Flame className="w-4 h-4 text-[#E5A93C]" />
                        <span>Synthesized 3-Phase Transition Trajectory</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                        <div className="p-3.5 rounded-xl bg-[#121622] border border-white/5 space-y-1.5">
                          <div className="font-bold text-[#E5A93C]">
                            {blueprint.milestoneRoadmap.phase1.name}
                          </div>
                          <p className="text-[11px] text-[#A39E93] leading-relaxed">
                            {blueprint.milestoneRoadmap.phase1.focus}
                          </p>
                        </div>
                        <div className="p-3.5 rounded-xl bg-[#121622] border border-white/5 space-y-1.5">
                          <div className="font-bold text-[#529477]">
                            {blueprint.milestoneRoadmap.phase2.name}
                          </div>
                          <p className="text-[11px] text-[#A39E93] leading-relaxed">
                            {blueprint.milestoneRoadmap.phase2.focus}
                          </p>
                        </div>
                        <div className="p-3.5 rounded-xl bg-[#121622] border border-white/5 space-y-1.5">
                          <div className="font-bold text-[#E08769]">
                            {blueprint.milestoneRoadmap.phase3.name}
                          </div>
                          <p className="text-[11px] text-[#A39E93] leading-relaxed">
                            {blueprint.milestoneRoadmap.phase3.focus}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Key Power Move */}
                    <div className="p-4 rounded-xl bg-[#182030]/80 border border-[#E5A93C]/30 flex items-start gap-3">
                      <Target className="w-5 h-5 text-[#E5A93C] shrink-0 mt-0.5" />
                      <div className="text-xs">
                        <strong className="text-white">Actionable Power Move: </strong>
                        <span className="text-[#E5E0D8]">{blueprint.keyPowerMove}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Somatic & Faith Protocols */}
                  <div className="lg:col-span-4 space-y-5">
                    {/* Recommended Program */}
                    <div className="p-5 rounded-2xl bg-[#0B0E14] border border-[#529477]/40 space-y-2.5">
                      <span className="text-[10px] font-bold text-[#529477] uppercase tracking-wider">
                        Matched Movemeant Offering
                      </span>
                      <h5 className="font-serif text-base text-white">
                        {blueprint.recommendedService}
                      </h5>
                      <div className="pt-1">
                        <Link
                          href={blueprint.serviceHref}
                          className="inline-flex items-center gap-1.5 text-xs text-[#E5A93C] hover:underline font-semibold"
                        >
                          <span>Explore Offering Details</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>

                    {/* Somatic Protocol */}
                    <div className="p-5 rounded-2xl bg-[#0B0E14] border border-white/10 space-y-2">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-white">
                        <ShieldCheck className="w-4 h-4 text-[#529477]" />
                        <span>Somatic Nervous System Protocol</span>
                      </div>
                      <div className="text-xs text-[#E5A93C] font-medium">
                        {blueprint.somaticProtocol.title}
                      </div>
                      <p className="text-[11px] text-[#A39E93] leading-relaxed">
                        {blueprint.somaticProtocol.technique}
                      </p>
                      <div className="text-[10px] text-[#706B62] pt-1">
                        Cadence: {blueprint.somaticProtocol.cadence}
                      </div>
                    </div>

                    {/* Faith Anchor */}
                    <div className="p-5 rounded-2xl bg-[#0B0E14] border border-white/10 space-y-2">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-white">
                        <BookOpen className="w-4 h-4 text-[#E5A93C]" />
                        <span>Faith & Calling Grounding</span>
                      </div>
                      <div className="text-xs text-[#E5A93C] font-serif italic">
                        {blueprint.scriptureAnchor.verse}
                      </div>
                      <p className="text-[11px] text-[#C8C2B7] italic leading-relaxed">
                        "{blueprint.scriptureAnchor.text}"
                      </p>
                      <p className="text-[11px] text-[#A39E93] pt-1">
                        {blueprint.scriptureAnchor.application}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sub-Pages Quick Access */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="p-6 rounded-3xl bg-[#121622] border border-white/10 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[11px] font-bold text-[#E5A93C] uppercase tracking-wider">
                    Sub-Page /movemeantnow
                  </span>
                  <h3 className="font-serif text-2xl text-white">
                    Movemeant Digital Flagship Redesign
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A39E93] font-light leading-relaxed">
                    Explore the complete redesign of Movemeant Coaching & Consultancy for Koi Rivers, PCC. Dual-accredited coach education, Power Moves framework, and full UX case study audit.
                  </p>
                </div>
                <Link
                  href="/movemeantnow"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold bg-[#E5A93C] text-[#0B0E14] hover:bg-[#F5C467] transition-all w-fit"
                >
                  <span>Visit /movemeantnow</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="p-6 rounded-3xl bg-[#121622] border border-white/10 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[11px] font-bold text-[#529477] uppercase tracking-wider">
                    Sub-Page /boost
                  </span>
                  <h3 className="font-serif text-2xl text-white">
                    The 90-Day Momentum Boost™ Sprint
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A39E93] font-light leading-relaxed">
                    A dedicated high-velocity accelerator sub-page for executive women and leaders standing at a career threshold. Features an interactive Generative ROI & hesitation calculator.
                  </p>
                </div>
                <Link
                  href="/movemeantnow/boost"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold bg-[#529477] text-white hover:bg-[#68A88B] transition-all w-fit"
                >
                  <span>Visit /boost</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Intake Modal for Generative Output */}
          {isModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
              <div className="relative w-full max-w-lg rounded-3xl bg-[#121622] border border-[#E5A93C]/40 p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-5 right-5 p-2 rounded-full text-[#A39E93] hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {modalSuccess ? (
                  <div className="py-8 text-center space-y-4 animate-in zoom-in-95 duration-200">
                    <div className="w-16 h-16 rounded-full bg-[#529477]/20 text-[#529477] flex items-center justify-center mx-auto border border-[#529477]/30">
                      <Check className="w-8 h-8" />
                    </div>
                    <h3 className="font-serif text-2xl font-medium text-white">
                      Generative Plan Dispatched
                    </h3>
                    <p className="text-xs sm:text-sm text-[#C8C2B7] max-w-md mx-auto leading-relaxed">
                      Thank you, <strong>{bookingForm.name}</strong>. Your customized blueprint for <strong>{blueprint.archetype}</strong> has been transmitted to Coach Koi Rivers. We will follow up within 24 business hours.
                    </p>
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="px-6 py-2.5 rounded-full text-xs font-semibold bg-[#E5A93C] text-[#0B0E14] hover:bg-[#F5C467] transition-all"
                    >
                      Done
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleBookingSubmit} className="space-y-4">
                    <div>
                      <span className="text-[11px] font-bold text-[#E5A93C] uppercase tracking-wider">
                        Generative Intake
                      </span>
                      <h3 className="text-2xl font-serif text-white font-normal mt-0.5">
                        Reserve Your Strategy Call
                      </h3>
                      <p className="text-xs text-[#A39E93] mt-1 font-light">
                        Pre-populated with your synthesized archetype: <strong>{blueprint.archetype}</strong>
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
                          value={bookingForm.name}
                          onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                          placeholder="e.g. Elena Rostova"
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
                            placeholder="elena@organization.org"
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

                      <div>
                        <label className="block text-xs font-medium text-white/90 mb-1">
                          Current Role / Organization
                        </label>
                        <input
                          type="text"
                          value={bookingForm.role}
                          onChange={(e) => setBookingForm({ ...bookingForm, role: e.target.value })}
                          placeholder="e.g. Senior Director, HealthTech"
                          className="w-full px-4 py-2.5 rounded-xl bg-[#0B0E14] border border-white/10 text-white placeholder-[#706B62] text-xs focus:outline-none focus:border-[#E5A93C]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-white/90 mb-1">
                          Generated Context & Notes:
                        </label>
                        <textarea
                          rows={2}
                          value={bookingForm.notes}
                          onChange={(e) => setBookingForm({ ...bookingForm, notes: e.target.value })}
                          className="w-full px-4 py-2 rounded-xl bg-[#0B0E14] border border-white/10 text-white text-xs focus:outline-none focus:border-[#E5A93C]"
                        />
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-3.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-[#E5A93C] to-[#D4972A] hover:from-[#F5C467] hover:to-[#E5A93C] text-[#0B0E14] shadow-lg shadow-[#E5A93C]/20 transition-all"
                      >
                        Submit Intake with Generated Blueprint
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          )}
        </main>
      )}

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#07090E] py-10 px-4 sm:px-6 lg:px-8 text-xs text-[#A39E93]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            © 2023–2026 Movemeant Coaching & Consultancy • Generative UI Concept by{" "}
            <strong className="text-white">Miskat Hossain</strong>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/movemeantnow" className="hover:text-white transition-colors">
              /movemeantnow Flagship
            </Link>
            <Link href="/movemeantnow/boost" className="hover:text-white transition-colors">
              /boost Accelerator
            </Link>
            <a
              href="https://www.linkedin.com/in/koirivers/?isSelfProfile=false"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E5A93C] transition-colors"
            >
              Koi Rivers LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
