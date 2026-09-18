"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navigation/Navbar";
import { Footer } from "@/components/Footer/Footer";
import { IntakeModal } from "@/components/Common/IntakeModal";
import { siteConfig } from "@/data/site";
import {
  Check,
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  Zap,
  Clock,
  ChevronDown,
  Mail,
  Calendar,
} from "lucide-react";

type Currency = "USD" | "EUR" | "GBP";

interface CurrencyOption {
  code: Currency;
  label: string;
  symbol: string;
  name: string;
}

const currencies: CurrencyOption[] = [
  { code: "USD", label: "USD", symbol: "$", name: "US Dollar" },
  { code: "EUR", label: "EUR", symbol: "€", name: "Euro" },
  { code: "GBP", label: "GBP", symbol: "£", name: "British Pound" },
];

interface PricingTier {
  tierNumber: string;
  badge?: string;
  title: string;
  prices: Record<Currency, string>;
  subtitle: string;
  description: string;
  isPopular?: boolean;
  deliverables: {
    isHighlight?: boolean;
    text: string;
  }[];
  ctaText: string;
  ctaHref: string;
}

const pricingTiers: PricingTier[] = [
  {
    tierNumber: "TIER 01",
    title: "AUTHORITY ESSENTIALS",
    prices: {
      USD: "Starting at $1,499 USD",
      EUR: "Starting at €1,399 EUR",
      GBP: "Starting at £1,199 GBP",
    },
    subtitle: "FOUNDATIONAL BRAND IDENTITY & SINGLE-PAGE WEB SYSTEM",
    description:
      "Designed for emerging high-ticket coaches who need an undeniable, high-trust digital presence to validate their premium offer and book clients immediately.",
    deliverables: [
      { text: "Core Brand Strategy & Messaging Narrative" },
      { text: "Logo System, Typography & Color Palette" },
      { text: "Custom 1-Page High-Converting Landing Page" },
      { text: "Integrated Private Intake & Discovery Booking Funnel" },
      { text: "Complete Web Launch & Basic SEO Setup" },
    ],
    ctaText: "BOOK DISCOVERY CALL",
    ctaHref: siteConfig.calendly,
  },
  {
    tierNumber: "TIER 02",
    badge: "SIGNATURE OFFERING",
    title: "COACHING SUITE",
    prices: {
      USD: "Starting at $2,499 USD",
      EUR: "Starting at €2,349 EUR",
      GBP: "Starting at £1,999 GBP",
    },
    subtitle: "COMPLETE BRAND IDENTITY & MULTI-PAGE CONVERSION SYSTEM",
    description:
      "The definitive transformation for established coaches ready to command 5-figure retainers, elevate their executive positioning, and consistently attract ideal clients.",
    isPopular: true,
    deliverables: [
      { text: "Everything in Authority Essentials, plus:", isHighlight: true },
      { text: "Custom 4–5 Page Website (Home, About/Bio, Coaching Offers, Client Stories, Booking)" },
      { text: "Comprehensive Brand Guidelines & Social Media Graphic Templates" },
      { text: "High-Converting Lead Magnet / PDF Guide Layout Design" },
      { text: "Mobile-First Conversion Architecture & Speed Optimization" },
      { text: "CMS Handover Training + 30-Day Post-Launch Support" },
    ],
    ctaText: "DISCUSS YOUR PROJECT",
    ctaHref: siteConfig.calendly,
  },
  {
    tierNumber: "TIER 03",
    title: "VIP TRANSFORMATION",
    prices: {
      USD: "Starting at $4,499 USD",
      EUR: "Starting at €4,199 EUR",
      GBP: "Starting at £3,599 GBP",
    },
    subtitle: "END-TO-END BRAND, WEB & GROWTH PARTNER",
    description:
      "Maximum support for top-tier coaches, masterminds, and keynote speakers seeking total market authority, custom copywriting, and ongoing strategic design execution.",
    deliverables: [
      { text: "Everything in Coaching Suite, plus:", isHighlight: true },
      { text: "Strategic Messaging & Copywriting Refinement for Sales Funnels" },
      { text: "Complete LinkedIn Authority Suite (Banner, Post & Carousel Templates)" },
      { text: "Priority 14-Day Rapid Deployment & Direct Slack Access" },
      { text: "60-Day Post-Launch Conversion Optimization & A/B Support" },
      { text: "Dedicated Design Sprint for Mastermind Decks & Sales Collateral" },
    ],
    ctaText: "APPLY FOR VIP PARTNER",
    ctaHref: siteConfig.calendly,
  },
];

const faqs = [
  {
    question: "How does the payment schedule work?",
    answer:
      "All engagements are split into two milestone payments: a 50% initial deposit to secure your dedicated design sprint on Miskat's production calendar, and the remaining 50% upon final delivery, sign-off, and prior to official launch.",
  },
  {
    question: "What is the expected turnaround time for each tier?",
    answer:
      "Authority Essentials typically deploys within 10 to 14 business days. The flagship Executive Suite runs across 3 to 4 weeks of collaborative brand and multi-page development. VIP Transformation features a dedicated rapid 14-day priority deployment with 60 days of continuous post-launch optimization.",
  },
  {
    question: "What if I already have a logo or existing brand guidelines?",
    answer:
      "I can customize your scope accordingly. If your foundational brand identity is already corporate-ready, I can redirect strategic hours into deeper bespoke web interactions, corporate presentation decks, or higher-converting lead generation funnels.",
  },
  {
    question: "Who owns the code, design files, and intellectual property?",
    answer:
      "You own 100% of everything. Upon project completion and final payment, full intellectual property rights, production-ready Figma design master files, vector assets, and source code are handed over directly to you.",
  },
  {
    question: "Will I be able to update content myself after launch?",
    answer:
      "Yes. Every build includes an intuitive CMS setup and a personalized video walkthrough demonstrating how to edit text, publish new case studies, and update pricing without touching a line of code.",
  },
  {
    question: "Can we add custom pages or specialized integrations later?",
    answer:
      "Absolutely. All platforms are architected cleanly and modularly. You can seamlessly expand with additional landing pages, client portals, podcast hubs, or bespoke payment gateways as your practice expands.",
  },
  {
    question: "Can I pay in EUR or GBP instead of USD?",
    answer:
      "Yes. Invoices can be issued in USD ($), EUR (€), or GBP (£) based on your preference. Payments are settled securely via Wise or direct international wire transfer with zero conversion markups.",
  },
];

export function InvestmentClient() {
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>("USD");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  return (
    <main className="relative bg-dark min-h-screen text-cream overflow-x-hidden selection:bg-rose selection:text-white">
      <Navbar />

      {/* Cinematic Background Atmosphere Glows */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[450px] bg-rose/[0.07] rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-[800px] right-0 w-[450px] h-[450px] bg-blue-600/[0.04] rounded-full blur-[160px] pointer-events-none" />

      {/* Header Section */}
      <section className="relative pt-32 sm:pt-40 lg:pt-44 pb-12 sm:pb-16 px-6 sm:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Category Tag */}
          <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold tracking-[0.24em] uppercase text-rose mb-4 sm:mb-6">
            <span className="w-8 h-[1px] bg-rose" />
            <span>EXECUTIVE PARTNERSHIP &bull; PRIVATE INVESTMENT TIERS</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-[-0.04em] text-cream leading-[1.06] mb-6 sm:mb-8">
            PREDICTABLE INVESTMENT. <br />
            <span className="font-semibold text-white">CATEGORY-DEFINING IMPACT.</span>
          </h1>

          {/* Subtitle / Positioning Narrative */}
          <p className="max-w-2xl text-base sm:text-lg text-cream/70 font-light leading-relaxed mb-10 sm:mb-12">
            Transparent, fixed-scope partnership tiers engineered for high-ticket coaches,
            thought leaders, and advisory practices ready to command premium retainers
            and validate 5-figure client engagements.
          </p>

          {/* Trust Value Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-5 pt-4 border-t border-white/[0.08] max-w-4xl">
            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <div className="w-8 h-8 rounded-full bg-rose/10 border border-rose/30 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4 text-rose" />
              </div>
              <div className="text-xs">
                <span className="font-semibold text-white block">Fixed-Scope Guarantee</span>
                <span className="text-cream/50 text-[11px]">No surprise hourly billing</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <div className="w-8 h-8 rounded-full bg-rose/10 border border-rose/30 flex items-center justify-center shrink-0">
                <Zap className="w-4 h-4 text-rose" />
              </div>
              <div className="text-xs">
                <span className="font-semibold text-white block">Direct Senior Direction</span>
                <span className="text-cream/50 text-[11px]">Zero agency outsourcing</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <div className="w-8 h-8 rounded-full bg-rose/10 border border-rose/30 flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4 text-rose" />
              </div>
              <div className="text-xs">
                <span className="font-semibold text-white block">Rapid Turnaround</span>
                <span className="text-cream/50 text-[11px]">Agile 2 to 4-week delivery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="relative px-6 sm:px-12 lg:px-24 pb-20 sm:pb-28">
        <div className="max-w-7xl mx-auto">
          {/* Switchable Currency Selector */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-white/[0.08]">
            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-cream/70">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-wider text-cream/50">
                DISPLAY CURRENCY:
              </span>
              <span className="text-white font-medium">
                {selectedCurrency === "USD" && "US Dollars ($ USD)"}
                {selectedCurrency === "EUR" && "Euros (€ EUR)"}
                {selectedCurrency === "GBP" && "British Pounds (£ GBP)"}
              </span>
            </div>

            {/* Currency Switcher Buttons */}
            <div className="inline-flex items-center p-1 rounded-full bg-white/[0.04] border border-white/[0.12] backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
              {currencies.map((curr) => {
                const isActive = selectedCurrency === curr.code;
                return (
                  <button
                    key={curr.code}
                    onClick={() => setSelectedCurrency(curr.code)}
                    type="button"
                    aria-label={`Switch price to ${curr.name} (${curr.code})`}
                    className={`relative px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 flex items-center gap-1.5 ${
                      isActive
                        ? "bg-rose text-white shadow-[0_2px_14px_rgba(224,40,79,0.5)] scale-[1.02]"
                        : "text-cream/75 hover:text-white hover:bg-white/[0.08] active:scale-95"
                    }`}
                  >
                    <span className={isActive ? "text-white" : "text-rose font-bold"}>
                      {curr.symbol}
                    </span>
                    <span>{curr.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-8 items-stretch">
            {pricingTiers.map((tier) => (
              <div
                key={tier.title}
                className={`relative flex flex-col justify-between rounded-[32px] p-8 sm:p-10 transition-all duration-300 ${
                  tier.isPopular
                    ? "bg-gradient-to-b from-white/[0.09] to-white/[0.03] border-2 border-rose/70 shadow-[0_24px_70px_rgba(224,40,79,0.2)] ring-1 ring-rose/40 lg:-translate-y-3"
                    : "bg-white/[0.03] border border-white/[0.1] hover:bg-white/[0.05] hover:border-white/[0.22] shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
                }`}
              >
                {/* Popular Signature Badge */}
                {tier.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-rose text-white text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase shadow-[0_4px_16px_rgba(224,40,79,0.5)]">
                    <Sparkles className="w-3 h-3" />
                    <span>{tier.badge}</span>
                  </div>
                )}

                <div>
                  {/* Tier Number & Category */}
                  <div className="flex items-center justify-between text-xs font-mono text-cream/40 mb-3">
                    <span className="tracking-widest">{tier.tierNumber}</span>
                    {tier.isPopular && (
                      <span className="text-rose font-semibold tracking-wider text-[11px]">
                        MOST POPULAR
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] text-white mb-2">
                    {tier.title}
                  </h2>

                  {/* Subtitle */}
                  <p className="text-[11px] sm:text-xs text-rose font-medium tracking-[0.16em] uppercase leading-relaxed mb-6">
                    {tier.subtitle}
                  </p>

                  {/* Price Anchor */}
                  <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] mb-6">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-mono uppercase tracking-wider text-cream/50">
                        INVESTMENT ANCHOR
                      </span>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-rose/90 px-2.5 py-0.5 rounded-full bg-rose/10 border border-rose/20 font-semibold">
                        {selectedCurrency}
                      </span>
                    </div>
                    <div className="text-2xl sm:text-3xl font-light tracking-tight text-white transition-all duration-200">
                      {tier.prices[selectedCurrency]}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-cream/70 leading-relaxed font-light mb-8">
                    {tier.description}
                  </p>

                  {/* Deliverables Header */}
                  <div className="border-t border-white/[0.08] pt-6 mb-8">
                    <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-cream/40 mb-4">
                      WHAT&apos;S INCLUDED:
                    </div>

                    {/* Deliverables List */}
                    <div className="space-y-3.5">
                      {tier.deliverables.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 text-xs sm:text-sm leading-snug"
                        >
                          <div
                            className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                              item.isHighlight
                                ? "bg-rose text-white"
                                : "bg-rose/20 text-rose"
                            }`}
                          >
                            <Check className="w-2.5 h-2.5" />
                          </div>
                          <span
                            className={
                              item.isHighlight
                                ? "text-white font-medium"
                                : "text-cream/85 font-light"
                            }
                          >
                            {item.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Bottom CTA */}
                <div className="pt-6 border-t border-white/[0.08] mt-4">
                  <a
                    href={siteConfig.calendly}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor-text="BOOK"
                    className={`w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-full text-xs sm:text-sm font-semibold tracking-[0.16em] uppercase transition-all duration-300 ${
                      tier.isPopular
                        ? "bg-rose hover:bg-rose/90 text-white shadow-[0_4px_24px_rgba(224,40,79,0.45)] hover:shadow-[0_6px_30px_rgba(224,40,79,0.6)] active:scale-[0.98]"
                        : "bg-white/[0.06] hover:bg-white/[0.12] text-cream border border-white/[0.18] hover:border-white/[0.35] backdrop-blur-md active:scale-[0.98]"
                    }`}
                  >
                    <span>{tier.ctaText}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Comparison / Value Pillars */}
      <section className="relative px-6 sm:px-12 lg:px-24 py-16 sm:py-24 border-t border-white/[0.06] bg-dark-pure/60">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold tracking-[0.24em] uppercase text-rose mb-3">
              <span className="w-8 h-[1px] bg-rose" />
              <span>THE MISKAT HOSSAIN STANDARD</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-[-0.03em] text-cream leading-[1.1]">
              ENGINEERED FOR <br />
              <span className="font-semibold text-white">MEASURABLE ROI.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.08]">
              <div className="text-rose text-xl sm:text-2xl font-mono mb-4">01 /</div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Executive Positioning First
              </h3>
              <p className="text-sm text-cream/70 font-light leading-relaxed">
                Design without messaging creates confusion. Every tier starts with strategic narrative alignment so your website speaks directly to high-paying enterprise buyers.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.08]">
              <div className="text-rose text-xl sm:text-2xl font-mono mb-4">02 /</div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Bespoke Code &amp; Speed
              </h3>
              <p className="text-sm text-cream/70 font-light leading-relaxed">
                No slow template builders or bloated plugins. Built natively with modern, ultra-fast web standards for instant mobile loading and flawless UX.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.08]">
              <div className="text-rose text-xl sm:text-2xl font-mono mb-4">03 /</div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Conversion Architecture
              </h3>
              <p className="text-sm text-cream/70 font-light leading-relaxed">
                Every headline, layout section, and call-to-action is engineered to guide ideal prospects from curiosity into committed strategy sessions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="relative px-6 sm:px-12 lg:px-24 py-16 sm:py-24 border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-3 text-xs sm:text-sm font-semibold tracking-[0.24em] uppercase text-rose mb-3">
              <span className="w-8 h-[1px] bg-rose" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
              <span className="w-8 h-[1px] bg-rose" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-[-0.03em] text-cream">
              TRANSPARENCY <span className="font-semibold text-white">FIRST.</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.02] transition-colors"
                  >
                    <span className="text-base sm:text-lg font-medium text-white pr-4">
                      {faq.question}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 bg-rose border-rose text-white" : "text-cream/60"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 border-t border-white/[0.04]">
                      <p className="text-sm sm:text-base text-cream/70 font-light leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom Booking Invitation */}
      <section className="relative px-6 sm:px-12 lg:px-24 py-16 sm:py-24 border-t border-white/[0.06] bg-gradient-to-b from-dark to-dark-pure text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-rose/10 border border-rose/30 flex items-center justify-center text-rose mb-6">
            <Calendar className="w-6 h-6" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-light tracking-[-0.03em] text-cream mb-4">
            READY TO ELEVATE YOUR <span className="font-semibold text-white">AUTHORITY?</span>
          </h2>

          <p className="text-sm sm:text-base text-cream/70 font-light leading-relaxed mb-8 max-w-xl">
            Book a private 30-minute discovery session to review your brand positioning, discuss scope requirements, and secure your dedicated sprint.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href={siteConfig.calendly}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-text="BOOK"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-4 px-8 rounded-full bg-rose hover:bg-rose/90 text-white text-xs sm:text-sm font-semibold tracking-[0.16em] uppercase transition-all duration-300 shadow-[0_4px_24px_rgba(224,40,79,0.4)] hover:shadow-[0_6px_32px_rgba(224,40,79,0.55)] active:scale-[0.98]"
            >
              <span>SCHEDULE STRATEGY CALL</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${siteConfig.email}`}
              data-cursor-text="EMAIL"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-4 px-8 rounded-full border border-white/[0.18] hover:border-white/[0.35] bg-white/[0.04] hover:bg-white/[0.1] text-cream text-xs sm:text-sm font-medium tracking-[0.16em] uppercase transition-all duration-300 backdrop-blur-md active:scale-[0.98]"
            >
              <Mail className="w-4 h-4 text-cream/70" />
              <span>DIRECT INQUIRY</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer & Global Modal */}
      <Footer />
      <IntakeModal />
    </main>
  );
}
