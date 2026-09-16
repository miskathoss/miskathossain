"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/data/site";
import {
  X,
  Check,
  ArrowRight,
  ArrowLeft,
  Calendar,
  Sparkles,
  Mail,
  CheckCircle2,
} from "lucide-react";

interface IntakeData {
  coachingType: string;
  primaryGoal: string;
  packageTier: string;
}

const coachingTypes = [
  "Business & Revenue",
  "Executive & Leadership",
  "Life Coaching",
  "Mindset Coaching",
  "Career & Transition",
  "Health & Performance",
  "Other Advisory / Consulting",
];

const primaryGoals = [
  "Validate my offer & start booking 5-figure clients",
  "Upgrade outdated branding to match my real expertise",
  "Command corporate credibility & premium retainers",
  "Build an automated, high-converting booking funnel",
  "Launch a new high-ticket mastermind / group program",
];

const packageTiers = [
  {
    id: "Essentials",
    name: "Authority Essentials",
    subtitle: "Foundational Brand & Single-Page Web System",
  },
  {
    id: "Coaching Suite",
    name: "Coaching Suite (Signature)",
    subtitle: "Complete Brand & Multi-Page Conversion System",
    isPopular: true,
  },
  {
    id: "VIP",
    name: "VIP Transformation",
    subtitle: "End-to-End Brand, Web & Growth Partner",
  },
  {
    id: "Undecided",
    name: "Need Guidance",
    subtitle: "I'd like to discuss the best fit on the call",
  },
];

export function IntakeModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [data, setData] = useState<IntakeData>({
    coachingType: "",
    primaryGoal: "",
    packageTier: "",
  });

  useEffect(() => {
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent<{ tier?: string }>;
      if (customEvent.detail?.tier) {
        setData((prev) => ({ ...prev, packageTier: customEvent.detail.tier || "" }));
      }
      setIsOpen(true);
      setStep(1);
    };

    window.addEventListener("open-intake-modal", handleOpen);
    return () => window.removeEventListener("open-intake-modal", handleOpen);
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSelectType = (type: string) => {
    setData((prev) => ({ ...prev, coachingType: type }));
    setStep(2);
  };

  const handleSelectGoal = (goal: string) => {
    setData((prev) => ({ ...prev, primaryGoal: goal }));
    setStep(3);
  };

  const handleSelectTier = (tierId: string) => {
    setData((prev) => ({ ...prev, packageTier: tierId }));
    setStep(4);
  };

  const generateMailto = () => {
    const subject = encodeURIComponent(`Strategy Call: ${data.coachingType} Coaching`);
    const body = encodeURIComponent(
      `Hi Miskat,\n\nI would like to schedule a strategy call for my coaching practice.\n\n` +
        `• Coaching Niche: ${data.coachingType}\n` +
        `• Primary Goal: ${data.primaryGoal}\n` +
        `• Desired Package: ${data.packageTier}\n\n` +
        `Looking forward to connecting.`
    );
    return `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 select-none animate-in fade-in duration-300">
      {/* Backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        className="absolute inset-0 bg-black/80 backdrop-blur-xl"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-dark-surface border border-white/[0.14] rounded-[32px] p-6 sm:p-10 shadow-[0_30px_90px_rgba(0,0,0,0.8)] z-10 overflow-hidden">
        {/* Top Glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-40 bg-rose/20 rounded-full blur-3xl pointer-events-none" />

        {/* Top Bar: Step Indicator + Close Button */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.08]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-rose animate-pulse" />
            <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-cream/60">
              STRATEGY ALIGNMENT &bull; STEP {step} OF 4
            </span>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close modal"
            className="w-8 h-8 rounded-full border border-white/[0.14] bg-white/[0.04] hover:bg-white/[0.1] hover:border-white/[0.3] flex items-center justify-center text-cream/70 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* STEP 1: What type of coaching do you do? */}
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <span className="text-xs font-mono text-rose uppercase tracking-widest block mb-1">
                QUESTION 01
              </span>
              <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                What type of coaching do you do?
              </h3>
              <p className="text-xs sm:text-sm text-cream/60 font-light mt-1">
                Select the primary focus of your practice.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {coachingTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => handleSelectType(type)}
                  className={`p-4 rounded-2xl border text-left text-sm transition-all duration-200 flex items-center justify-between group ${
                    data.coachingType === type
                      ? "border-rose bg-rose/10 text-white font-medium shadow-[0_0_20px_rgba(224,40,79,0.2)]"
                      : "border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/[0.2] text-cream/85"
                  }`}
                >
                  <span>{type}</span>
                  <ArrowRight className="w-4 h-4 text-cream/30 group-hover:text-rose group-hover:translate-x-0.5 transition-all" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 2: What is your primary goal? */}
        {step === 2 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-rose uppercase tracking-widest block mb-1">
                  QUESTION 02
                </span>
                <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                  What is your primary goal for the new website?
                </h3>
              </div>
            </div>

            <div className="space-y-3">
              {primaryGoals.map((goal) => (
                <button
                  key={goal}
                  onClick={() => handleSelectGoal(goal)}
                  className={`w-full p-4 rounded-2xl border text-left text-sm transition-all duration-200 flex items-center justify-between group ${
                    data.primaryGoal === goal
                      ? "border-rose bg-rose/10 text-white font-medium shadow-[0_0_20px_rgba(224,40,79,0.2)]"
                      : "border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/[0.2] text-cream/85"
                  }`}
                >
                  <span>{goal}</span>
                  <ArrowRight className="w-4 h-4 text-cream/30 group-hover:text-rose group-hover:translate-x-0.5 transition-all shrink-0 ml-3" />
                </button>
              ))}
            </div>

            <button
              onClick={() => setStep(1)}
              className="inline-flex items-center gap-1.5 text-xs text-cream/50 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Question 1</span>
            </button>
          </div>
        )}

        {/* STEP 3: Which package tier fits your goals? */}
        {step === 3 && (
          <div className="space-y-6">
            <div>
              <span className="text-xs font-mono text-rose uppercase tracking-widest block mb-1">
                QUESTION 03
              </span>
              <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                Which package tier best fits your goals?
              </h3>
            </div>

            <div className="space-y-3">
              {packageTiers.map((tier) => (
                <button
                  key={tier.id}
                  onClick={() => handleSelectTier(tier.id)}
                  className={`w-full p-4.5 rounded-2xl border text-left transition-all duration-200 flex items-center justify-between group ${
                    data.packageTier === tier.id
                      ? "border-rose bg-rose/10 text-white font-medium shadow-[0_0_20px_rgba(224,40,79,0.2)]"
                      : "border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/[0.2] text-cream/85"
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-white text-base">
                        {tier.name}
                      </span>
                      {tier.isPopular && (
                        <span className="text-[9px] font-mono uppercase px-2 py-0.5 rounded-full bg-rose text-white">
                          POPULAR
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-cream/60 font-light mt-0.5">
                      {tier.subtitle}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-cream/30 group-hover:text-rose group-hover:translate-x-0.5 transition-all shrink-0 ml-3" />
                </button>
              ))}
            </div>

            <button
              onClick={() => setStep(2)}
              className="inline-flex items-center gap-1.5 text-xs text-cream/50 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Question 2</span>
            </button>
          </div>
        )}

        {/* STEP 4: Summary & Instant Calendar Booking */}
        {step === 4 && (
          <div className="space-y-6 text-center">
            <div className="w-12 h-12 rounded-full bg-rose/20 border border-rose/40 flex items-center justify-center mx-auto text-rose">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                Profile Confirmed. Let&apos;s Align.
              </h3>
              <p className="text-sm text-cream/70 font-light mt-2 max-w-md mx-auto">
                Your coaching profile has been qualified. Select a convenient 20-minute slot on Miskat&apos;s direct calendar to discuss strategy and project start dates.
              </p>
            </div>

            {/* Answer Summary Card */}
            <div className="p-4.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] text-left text-xs space-y-2 max-w-md mx-auto">
              <div className="flex justify-between">
                <span className="text-cream/50">COACHING NICHE:</span>
                <span className="text-white font-medium">{data.coachingType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-cream/50">PRIMARY GOAL:</span>
                <span className="text-white font-medium text-right max-w-[240px] truncate">
                  {data.primaryGoal}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-cream/50">PACKAGE FIT:</span>
                <span className="text-rose font-semibold">{data.packageTier}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href={siteConfig.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-rose hover:bg-rose/90 text-white text-xs sm:text-sm font-semibold tracking-[0.16em] uppercase transition-all shadow-[0_4px_24px_rgba(224,40,79,0.4)] hover:shadow-[0_6px_30px_rgba(224,40,79,0.55)] active:scale-[0.98]"
              >
                <Calendar className="w-4 h-4" />
                <span>BOOK TIME ON CALENDLY</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={generateMailto()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-white/[0.18] hover:border-white/[0.35] bg-white/[0.04] hover:bg-white/[0.1] text-cream text-xs sm:text-sm font-medium tracking-[0.14em] uppercase transition-all"
              >
                <Mail className="w-4 h-4 text-cream/70" />
                <span>SEND VIA EMAIL</span>
              </a>
            </div>

            <button
              onClick={() => setStep(3)}
              className="inline-flex items-center gap-1.5 text-xs text-cream/40 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Modify Answers</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
