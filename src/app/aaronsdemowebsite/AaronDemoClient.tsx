"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Video,
  Star,
  Heart,
  Compass,
  ShieldCheck,
  Users,
  Award,
  ChevronDown,
  ChevronUp,
  MessageSquare,
  Phone,
  Mail,
  Instagram,
  Youtube,
  Linkedin,
  ExternalLink,
  X,
  Zap,
  Sun,
  Dumbbell,
  Brain,
  Smile,
  Flame,
} from "lucide-react";

export default function AaronDemoClient() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationStep, setConsultationStep] = useState(1);
  const [selectedGoal, setSelectedGoal] = useState("Spiritual Growth & Purpose");
  const [selectedPlatform, setSelectedPlatform] = useState<"zoom" | "facetime">("zoom");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<"spirit" | "mind" | "body">("spirit");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const resetModal = () => {
    setIsConsultationOpen(false);
    setTimeout(() => {
      setConsultationStep(1);
      setFormSubmitted(false);
      setFormData({ name: "", email: "", phone: "", notes: "" });
    }, 300);
  };

  const testimonials = [
    {
      name: "Katrina G.",
      role: "Mindset & Goal Achievement Client",
      duration: "1 Year Client",
      quote:
        "Aaron has been my life coach for a year. Within that year he has grown my mindset and focus. I thank him for always keeping me positive and motivated that I can accomplish anything that I put my mind to. This year I have accomplished all my goals. Thank you Aaron for always being in my corner and being the light in my life.",
      highlight: "Accomplished all my goals this year",
    },
    {
      name: "Austin P.",
      role: "Long-Term Mentorship Client",
      duration: "10+ Years Working with Aaron",
      quote:
        "Never met a more positive, uplifting guy in my life. Aaron has got a great big heart and is very good at listening. He brings many years of experience to the table and is the greatest life coach. I've been working with him for about 10 years now! He's your go-to guy and the guy you can trust 100%.",
      highlight: "A decade of trusted transformation",
    },
    {
      name: "George U.",
      role: "Emotional Healing & Fitness Client",
      duration: "Recent Mentorship",
      quote:
        "Recently I was having severe issues from a breakup and was feeling stuck, anxious, and depressed for weeks. A friend recommended Aaron. He has the wisdom and the tools that got me unstuck. I am back at the gym and thinking about a brighter, happier future! Thanks Aaron!",
      highlight: "Got unstuck after painful breakup",
    },
    {
      name: "Monica M.",
      role: "Executive & Clarity Client",
      duration: "6 Months",
      quote:
        "I had productive, successful sessions with Aaron! Very happy to have a life coach to help me navigate my own thoughts and mental overwhelming stream of ideas. I always felt a judgement-free environment and most importantly unbiased opinions from him. Truly feel like he listens.",
      highlight: "Judgement-free mental clarity",
    },
    {
      name: "Liz H.",
      role: "Personal Growth & Life Transition",
      duration: "Private Coaching",
      quote:
        "Aaron is an amazing life coach. He is very empathic and professional. My sessions with him helped me truly move forward with life. He has a versatile toolbox that can help anyone gain clarity, make great change, and create next steps while having a supportive ear by your side.",
      highlight: "Versatile toolbox for major change",
    },
    {
      name: "Raymond F.",
      role: "Anxiety Recovery Client",
      duration: "Targeted Intensive",
      quote:
        "I had a severe bout of anxiety which came out of the blue, and my nephew almost died in that huge fire in the Bronx, so I reached out to Mr. McNair. The session was incredibly beneficial, relaxing, and informative. I highly recommend that you take the leap and seek out his help.",
      highlight: "Incredibly beneficial & calming",
    },
  ];

  const faqs = [
    {
      q: "I live outside of California. Can we still work together?",
      a: "Absolutely! 100% of Aaron's current coaching consultations and ongoing sessions are conducted virtually via Zoom or FaceTime. Whether you are across the United States or international, we connect seamlessly from the comfort and privacy of your home.",
    },
    {
      q: "What is the difference between a Spiritual Mindset Coach and a traditional therapist?",
      a: "Therapy often focuses on diagnosing and unearthing past clinical traumas. Aaron's coaching is forward-focused and holistic: uniting mindset rewiring, physical vitality habits, and spiritual elevation (connecting to God / Source / Universe) to help you gain immediate clarity, raise your frequency, and build your best life.",
    },
    {
      q: "How does Aaron integrate fitness with spiritual coaching?",
      a: "Your body is your sacred temple. With decades as a certified fitness instructor, Aaron understands that sluggish physical energy creates mental fog, while physical vitality fuels spiritual clarity. We craft sustainable movement and nutrition routines that align directly with your mental goals.",
    },
    {
      q: "What can I expect in our initial consultation?",
      a: "An open, judgement-free, and inspiring 30–45 minute conversation. We will assess your current mental, physical, and spiritual baseline, identify where you feel stuck or overwhelmed, and design a customized action plan tailored to your journey.",
    },
    {
      q: "Do I need to belong to a specific religion to benefit from Aaron's coaching?",
      a: "Not at all. Aaron's spiritual framework is founded on universal unconditional compassion, divine love, and extreme daily gratitude. Whether you refer to God, Source, Universe, or your Higher Self, Aaron meets you exactly where you are.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#0C0E12] text-[#F3F4F6] selection:bg-[#E6B980] selection:text-[#0C0E12] font-sans antialiased overflow-x-hidden">
      {/* 0. Top Miskat Studio Concept Header */}
      <div className="bg-gradient-to-r from-[#181C24] via-[#1F2533] to-[#181C24] border-b border-amber-500/20 px-4 py-2.5 text-xs text-amber-200/90 flex flex-wrap items-center justify-between gap-3 sticky top-0 z-[60] backdrop-blur-md">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
          </span>
          <span className="font-semibold tracking-wider text-amber-300">
            DEMO REDESIGN CONCEPT
          </span>
          <span className="text-zinc-400 hidden sm:inline">|</span>
          <span className="text-zinc-300 hidden sm:inline">
            Custom High-Conversion Architecture for Aaron McNair
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-zinc-400 text-[11px] hidden md:inline">
            Designed by Miskat Hossain • Brand & Web Strategist for Coaches
          </span>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 text-[11px] font-medium border border-amber-500/30 transition-all hover:scale-105"
          >
            <span>Back to Miskat Portfolio</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>

      {/* 1. Aaron McNair Main Brand Navigation */}
      <header className="sticky top-[41px] z-50 px-4 sm:px-8 py-3.5 bg-[#0C0E12]/85 backdrop-blur-xl border-b border-white/[0.07] transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Wordmark */}
          <Link href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400/20 to-amber-600/10 border border-amber-400/30 flex items-center justify-center font-serif text-amber-300 font-bold text-lg tracking-wider group-hover:border-amber-400/60 group-hover:scale-105 transition-all">
              AM
            </div>
            <div>
              <div className="font-serif tracking-[0.14em] text-sm sm:text-base font-semibold text-white group-hover:text-amber-200 transition-colors uppercase">
                Aaron McNair
              </div>
              <div className="text-[10px] tracking-[0.2em] text-amber-400/80 uppercase font-medium">
                Spirituality Mindset Coach
              </div>
            </div>
          </Link>

          {/* Navigation Items */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-medium tracking-[0.16em] uppercase text-zinc-300">
            <a href="#pillars" className="hover:text-amber-300 transition-colors">
              The 3 Pillars
            </a>
            <a href="#offerings" className="hover:text-amber-300 transition-colors">
              Coaching Pathways
            </a>
            <a href="#story" className="hover:text-amber-300 transition-colors">
              About Aaron
            </a>
            <a href="#testimonials" className="hover:text-amber-300 transition-colors">
              Testimonials
            </a>
            <a href="#faq" className="hover:text-amber-300 transition-colors">
              FAQ
            </a>
          </nav>

          {/* Header Action Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsConsultationOpen(true)}
              className="relative inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs font-semibold tracking-[0.14em] uppercase bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 shadow-[0_0_25px_rgba(245,158,11,0.25)] hover:shadow-[0_0_35px_rgba(245,158,11,0.45)] transition-all hover:scale-[1.02] active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Virtual Session</span>
            </button>
          </div>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section
        id="hero"
        className="relative pt-12 pb-20 md:pt-20 md:pb-28 px-4 sm:px-8 overflow-hidden"
      >
        {/* Ambient Radial Lights */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-b from-amber-500/10 via-amber-600/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Category / Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-400/[0.06] border border-amber-400/30 text-amber-200 text-[11px] sm:text-xs font-medium tracking-[0.16em] uppercase mb-6 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span>Mindset | Spirituality | Physical Resilience</span>
            </div>

            {/* Editorial Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-normal tracking-tight text-white leading-[1.08] mb-6">
              Master Your Mind
              <br />
              <span className="italic font-light bg-gradient-to-r from-amber-200 via-amber-300 to-amber-100 bg-clip-text text-transparent">
                Master Your Life.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-zinc-300 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-8">
              Uniting decades of certified fitness coaching with profound spiritual mentorship.
              Overcome mental hurdles, awaken unconditional gratitude, and connect with
              God / Source—guiding you into enduring health, inner peace, and divine clarity.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={() => setIsConsultationOpen(true)}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-zinc-950 font-semibold text-sm tracking-[0.14em] uppercase transition-all duration-300 shadow-[0_4px_30px_rgba(245,158,11,0.3)] hover:shadow-[0_4px_45px_rgba(245,158,11,0.5)] hover:scale-[1.02] active:scale-98"
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="#pillars"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] hover:border-amber-400/40 text-white font-medium text-sm tracking-[0.14em] uppercase transition-all duration-300 backdrop-blur-md"
              >
                <span>The 3 Pillars</span>
                <ChevronDown className="w-4 h-4 text-amber-300" />
              </a>
            </div>

            {/* Triad Key Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full pt-6 border-t border-white/[0.08]">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-300 shrink-0">
                  <Sun className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">Kind Spirit</div>
                  <div className="text-[11px] text-zinc-400">Frequency & Source</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-300 shrink-0">
                  <Dumbbell className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">Strong Body</div>
                  <div className="text-[11px] text-zinc-400">Fitness & Vitality</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <div className="w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-300 shrink-0">
                  <Brain className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">Clear Mind</div>
                  <div className="text-[11px] text-zinc-400">Focus & Confidence</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Aaron McNair Cinematic Photo Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Ambient Border Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 via-transparent to-amber-300/10 rounded-3xl blur-2xl -z-10" />

            <div className="relative w-full max-w-md rounded-3xl overflow-hidden border border-white/[0.12] bg-[#14171F] shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
              {/* Photo */}
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src="/assets/aaron/aaron-portrait.jpg"
                  alt="Aaron McNair — Spirituality Mindset Coach"
                  fill
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0E12] via-[#0C0E12]/30 to-transparent" />
              </div>

              {/* Floating Testimonial / Credential Pill */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                <div className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/[0.15] text-[11px] font-medium text-amber-200 flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>5.0 Yelp Certified Rating</span>
                </div>
                <div className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/[0.15] text-[11px] font-medium text-zinc-300 flex items-center gap-1.5">
                  <Video className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Zoom / FaceTime</span>
                </div>
              </div>

              {/* Bottom Quote Overlay */}
              <div className="p-6 relative">
                <div className="text-xs uppercase tracking-[0.18em] text-amber-400 font-semibold mb-2">
                  Personal Quote
                </div>
                <p className="font-serif italic text-sm text-zinc-200 leading-relaxed mb-3">
                  “When the spirit is nourished with gratitude, the body and mind effortlessly
                  fall into divine alignment. Every morning is a new beginning.”
                </p>
                <div className="flex items-center justify-between text-xs text-zinc-400 border-t border-white/[0.08] pt-3">
                  <span className="font-medium text-white">Aaron McNair</span>
                  <span>Certified Life & Fitness Coach</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Credibility & Metrics Ribbon */}
      <section className="border-y border-white/[0.08] bg-[#10131A]/80 backdrop-blur-md py-8 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-3">
            <div className="font-serif text-3xl sm:text-4xl font-normal text-amber-300 mb-1">
              Decades+
            </div>
            <div className="text-xs uppercase tracking-[0.16em] text-zinc-400 font-medium">
              Coaching Mastery
            </div>
            <div className="text-[11px] text-zinc-500 mt-1">Certified Fitness & Life Coach</div>
          </div>

          <div className="p-3">
            <div className="font-serif text-3xl sm:text-4xl font-normal text-amber-300 mb-1">
              3 Pillars
            </div>
            <div className="text-xs uppercase tracking-[0.16em] text-zinc-400 font-medium">
              Unified Triad
            </div>
            <div className="text-[11px] text-zinc-500 mt-1">Mind • Body • Spirit Alignment</div>
          </div>

          <div className="p-3">
            <div className="font-serif text-3xl sm:text-4xl font-normal text-amber-300 mb-1">
              100%
            </div>
            <div className="text-xs uppercase tracking-[0.16em] text-zinc-400 font-medium">
              Virtual Delivery
            </div>
            <div className="text-[11px] text-zinc-500 mt-1">Worldwide via Zoom & FaceTime</div>
          </div>

          <div className="p-3">
            <div className="font-serif text-3xl sm:text-4xl font-normal text-amber-300 mb-1">
              5.0 ★
            </div>
            <div className="text-xs uppercase tracking-[0.16em] text-zinc-400 font-medium">
              Client Trust
            </div>
            <div className="text-[11px] text-zinc-500 mt-1">Decades of Enduring Results</div>
          </div>
        </div>
      </section>

      {/* 4. Strategic Redesign Analysis Banner (Why this works for Aaron) */}
      <section className="py-16 px-4 sm:px-8 bg-gradient-to-b from-[#0C0E12] via-[#12151D] to-[#0C0E12]">
        <div className="max-w-6xl mx-auto rounded-3xl p-8 sm:p-10 border border-amber-500/20 bg-gradient-to-br from-amber-500/[0.04] to-transparent relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-[11px] font-semibold tracking-wider uppercase mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Strategy Behind This Demo Redesign</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal mb-3">
                Elevating Aaron McNair from an Unformatted Website to a Premium Authority Flagship
              </h2>
              <p className="text-zinc-300 text-sm leading-relaxed">
                Aaron's previous site had decades of profound wisdom and 5-star testimonials, but
                they were trapped in dense, unformatted text blocks and outdated builder templates.
                This redesign creates an executive-level personal brand, highlights the signature
                Mind-Body-Spirit triad, and delivers a frictionless pathway for global clients to book
                consultations.
              </p>
            </div>

            <div className="flex flex-col gap-2.5 w-full lg:w-auto shrink-0">
              <div className="flex items-center gap-3 text-xs text-zinc-300 bg-white/[0.03] border border-white/[0.06] p-3 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Modern editorial typography & luxury visual breathing room</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-zinc-300 bg-white/[0.03] border border-white/[0.06] p-3 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Interactive consultation funnel tailored for Zoom & FaceTime</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-zinc-300 bg-white/[0.03] border border-white/[0.06] p-3 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Featured Yelp social proof integrated above the fold</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. The Three Core Pillars (The Unified Triad) */}
      <section id="pillars" className="py-20 md:py-28 px-4 sm:px-8 relative">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs uppercase tracking-[0.2em] text-amber-400 font-semibold mb-3">
              The Coaching Methodology
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-normal mb-6">
              The Mind • Body • Spirit Triad
            </h2>
            <p className="text-zinc-300 text-base font-light leading-relaxed">
              When we leave our human form, our spirit lives on. True fulfillment is never achieved
              by working on only physical fitness or only mental thoughts in isolation. Aaron works
              with all three facets to create lasting wholeness.
            </p>
          </div>

          {/* 3 Pillars Interactive Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1: Spirit */}
            <div className="group rounded-3xl bg-[#14171F] border border-white/[0.08] hover:border-amber-400/40 p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 hover:shadow-[0_20px_40px_rgba(245,158,11,0.1)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-amber-500/20 transition-all" />

              <div>
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden mb-6 border border-white/[0.08]">
                  <Image
                    src="/assets/aaron/spirit-graphic.jpg"
                    alt="Kind and Grateful Spirit"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-medium text-amber-300 border border-amber-400/30">
                    PILLAR 01
                  </div>
                </div>

                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-300 mb-4">
                  <Sun className="w-5 h-5" />
                </div>

                <h3 className="font-serif text-2xl text-white font-normal mb-3">
                  Kind & Grateful Spirit
                </h3>
                <p className="text-zinc-300 text-sm leading-relaxed mb-6 font-light">
                  Getting in touch with and understanding your inner self and connecting with God /
                  Source / Universe is the secret to unlocking your full potential. When you elevate
                  your vibrational frequency, you impact your higher self and everyone around you.
                </p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-xs text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Extreme gratitude and unconditional compassion</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Connecting deeply to God (Source / Universe)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Daily meditation, presence, and peaceful rituals</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  setSelectedGoal("Spiritual Growth & Purpose");
                  setIsConsultationOpen(true);
                }}
                className="w-full py-3 rounded-xl bg-white/[0.04] hover:bg-amber-400 hover:text-zinc-950 text-amber-300 text-xs font-semibold tracking-wider uppercase border border-amber-400/20 transition-all flex items-center justify-center gap-2 group/btn"
              >
                <span>Elevate Your Spirit</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>

            {/* Pillar 2: Body */}
            <div className="group rounded-3xl bg-[#14171F] border border-white/[0.08] hover:border-emerald-400/40 p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 hover:shadow-[0_20px_40px_rgba(16,185,129,0.1)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-emerald-500/20 transition-all" />

              <div>
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden mb-6 border border-white/[0.08]">
                  <Image
                    src="/assets/aaron/body-graphic.jpg"
                    alt="Strong and Healthy Body"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-medium text-emerald-300 border border-emerald-400/30">
                    PILLAR 02
                  </div>
                </div>

                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-300 mb-4">
                  <Dumbbell className="w-5 h-5" />
                </div>

                <h3 className="font-serif text-2xl text-white font-normal mb-3">
                  Strong & Healthy Body
                </h3>
                <p className="text-zinc-300 text-sm leading-relaxed mb-6 font-light">
                  Your body is your sacred temple. What many people don&rsquo;t realize is that your
                  physical health has an immense impact on your emotional state and spiritual
                  resilience. With decades as a licensed trainer, Aaron guides you to vibrant
                  physical vitality.
                </p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-xs text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Decades of certified fitness coaching experience</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Sustainable daily fitness & strength routines</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Healthy aging, plant vitality & clean nutrition</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  setSelectedGoal("Fitness & Physical Vitality");
                  setIsConsultationOpen(true);
                }}
                className="w-full py-3 rounded-xl bg-white/[0.04] hover:bg-emerald-400 hover:text-zinc-950 text-emerald-300 text-xs font-semibold tracking-wider uppercase border border-emerald-400/20 transition-all flex items-center justify-center gap-2 group/btn"
              >
                <span>Energize Your Body</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>

            {/* Pillar 3: Mind */}
            <div className="group rounded-3xl bg-[#14171F] border border-white/[0.08] hover:border-sky-400/40 p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 hover:shadow-[0_20px_40px_rgba(56,189,248,0.1)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-sky-500/20 transition-all" />

              <div>
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden mb-6 border border-white/[0.08]">
                  <Image
                    src="/assets/aaron/mind-graphic.jpg"
                    alt="Clear and Focused Mind"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-medium text-sky-300 border border-sky-400/30">
                    PILLAR 03
                  </div>
                </div>

                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-300 mb-4">
                  <Brain className="w-5 h-5" />
                </div>

                <h3 className="font-serif text-2xl text-white font-normal mb-3">
                  Clear & Focused Mind
                </h3>
                <p className="text-zinc-300 text-sm leading-relaxed mb-6 font-light">
                  Set purposeful goals and stay laser-focused. Aaron helps you navigate the mental
                  whirlwind, release anxiety, heal painful relationship or breakup wounds, and build
                  the unshakeable self-confidence needed to create your best life.
                </p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-xs text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>Breakup recovery & relationship healing</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>Anxiety relief & emotional de-escalation tools</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>Youth & young adult vision casting</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  setSelectedGoal("Mindset & Emotional Clarity");
                  setIsConsultationOpen(true);
                }}
                className="w-full py-3 rounded-xl bg-white/[0.04] hover:bg-sky-400 hover:text-zinc-950 text-sky-300 text-xs font-semibold tracking-wider uppercase border border-sky-400/20 transition-all flex items-center justify-center gap-2 group/btn"
              >
                <span>Clarify Your Mind</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Signature Coaching Pathways / Offerings */}
      <section id="offerings" className="py-20 md:py-28 px-4 sm:px-8 bg-[#10131A] relative border-y border-white/[0.07]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs uppercase tracking-[0.2em] text-amber-400 font-semibold mb-3">
              Tailored Mentorship
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-normal mb-6">
              Coaching Pathways Designed for You
            </h2>
            <p className="text-zinc-300 text-base font-light leading-relaxed">
              Every client has a unique soul journey. Whether you require private intensive
              mentorship, physical body re-conditioning, or inspirational guidance, Aaron provides
              unbiased, supportive counsel.
            </p>
          </div>

          {/* Pricing / Pathway Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Pathway 1 */}
            <div className="rounded-3xl bg-[#14171F] border border-white/[0.08] p-8 flex flex-col justify-between hover:border-amber-400/30 transition-all">
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-white/[0.04] text-[11px] font-semibold text-zinc-300 tracking-wider uppercase mb-4">
                  Signature 1-on-1
                </div>
                <h3 className="font-serif text-2xl text-white font-normal mb-2">
                  Spiritual Mindset Mentorship
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  Intensive weekly private virtual sessions designed to navigate emotional blocks,
                  raise your frequency, and connect to divine peace.
                </p>

                <div className="border-t border-white/[0.08] pt-6 mb-6 space-y-3">
                  <div className="flex items-start gap-2.5 text-xs text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Weekly 60-Minute 1-on-1 Virtual Sessions (Zoom or FaceTime)</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Personalized daily gratitude & mindfulness practices</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Breakup, anxiety & relationship healing protocols</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Direct text/email guidance between weekly calls</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  setSelectedGoal("Spiritual Growth & Purpose");
                  setIsConsultationOpen(true);
                }}
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-zinc-950 font-semibold text-xs tracking-[0.14em] uppercase transition-all hover:scale-[1.02] shadow-[0_0_25px_rgba(245,158,11,0.2)]"
              >
                Apply for 1-on-1 Mentorship
              </button>
            </div>

            {/* Pathway 2: Most Popular */}
            <div className="rounded-3xl bg-gradient-to-b from-[#1E2430] to-[#14171F] border-2 border-amber-400/50 p-8 flex flex-col justify-between shadow-[0_0_40px_rgba(245,158,11,0.15)] relative scale-[1.02]">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-amber-400 text-zinc-950 text-[11px] font-bold tracking-wider uppercase shadow-md">
                Most Comprehensive
              </div>

              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-amber-400/10 text-[11px] font-semibold text-amber-300 tracking-wider uppercase mb-4">
                  Mind & Body Complete
                </div>
                <h3 className="font-serif text-2xl text-white font-normal mb-2">
                  Total Wellness & Fitness Integration
                </h3>
                <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                  Fusing licensed fitness training with spiritual growth. Treat your body as a temple
                  while grounding your mental health in gratitude.
                </p>

                <div className="border-t border-white/[0.08] pt-6 mb-6 space-y-3">
                  <div className="flex items-start gap-2.5 text-xs text-zinc-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Complete physical fitness, strength & routine assessment</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-zinc-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Plant-based / vegan vitality & healthy aging mentorship</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-zinc-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Synchronized physical & mental accountability schedule</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-zinc-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Direct access to Aaron's 20+ years training wisdom</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  setSelectedGoal("Fitness & Physical Vitality");
                  setIsConsultationOpen(true);
                }}
                className="w-full py-4 rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 text-zinc-950 font-bold text-xs tracking-[0.14em] uppercase transition-all hover:scale-[1.02] shadow-[0_0_30px_rgba(245,158,11,0.4)]"
              >
                Start Total Wellness Journey
              </button>
            </div>

            {/* Pathway 3 */}
            <div className="rounded-3xl bg-[#14171F] border border-white/[0.08] p-8 flex flex-col justify-between hover:border-amber-400/30 transition-all">
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-white/[0.04] text-[11px] font-semibold text-zinc-300 tracking-wider uppercase mb-4">
                  Speaking & Community
                </div>
                <h3 className="font-serif text-2xl text-white font-normal mb-2">
                  AM Inspirations (AMI) & Keynotes
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  Transformational speaking for groups, retreats, youth organizations, and access to
                  the global AMI movement for human and planetary compassion.
                </p>

                <div className="border-t border-white/[0.08] pt-6 mb-6 space-y-3">
                  <div className="flex items-start gap-2.5 text-xs text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Keynote presentations on compassion, unity & wellness</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Adolescent & young adult vision workshops</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Curated inspirational media & YouTube series</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Corporate & community wellness guest lectures</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  setSelectedGoal("Speaking / AMI Community");
                  setIsConsultationOpen(true);
                }}
                className="w-full py-3.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-white font-semibold text-xs tracking-[0.14em] uppercase border border-white/[0.15] transition-all hover:scale-[1.02]"
              >
                Inquire About Speaking & AMI
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Client Testimonials (Yelp Proof) */}
      <section id="testimonials" className="py-20 md:py-28 px-4 sm:px-8 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-[11px] font-semibold tracking-wider uppercase mb-3">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>Verified Client Endorsements</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-normal mb-6">
              Lives Transformed in Mind, Body & Spirit
            </h2>
            <p className="text-zinc-300 text-base font-light leading-relaxed">
              Read real feedback from clients who have worked with Aaron across life coaching,
              anxiety recovery, breakup healing, and fitness transformations.
            </p>
          </div>

          {/* Testimonial Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-[#14171F] border border-white/[0.08] hover:border-amber-400/30 p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] font-medium text-amber-300/80 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                      {t.duration}
                    </span>
                  </div>

                  <div className="text-xs font-semibold text-white mb-2 italic">
                    "{t.highlight}"
                  </div>

                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                    "{t.quote}"
                  </p>
                </div>

                <div className="border-t border-white/[0.08] pt-4 flex items-center justify-between">
                  <div>
                    <div className="font-serif text-sm font-semibold text-white">{t.name}</div>
                    <div className="text-[11px] text-zinc-400">{t.role}</div>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-semibold">
                    Yelp Verified
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://www.yelp.com/biz/am-inspirations-life-coach-los-angeles"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-300 hover:text-amber-200 transition-colors"
            >
              <span>Read More Reviews on Aaron's Official Yelp Page</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* 8. Meet Aaron McNair (About & Story Showcase) */}
      <section id="story" className="py-20 md:py-28 px-4 sm:px-8 bg-[#10131A] border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Photos collage */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/[0.08] shadow-lg">
                <Image
                  src="/assets/aaron/hero-nature.jpg"
                  alt="Aaron Nature Meditation"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-[10px] text-zinc-300">
                  Mindfulness in Nature
                </div>
              </div>

              <div className="space-y-4">
                <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/[0.08] shadow-lg">
                  <Image
                    src="/assets/aaron/aaron-eddie.jpg"
                    alt="Aaron with Eddie"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-[10px] text-zinc-300">
                    Compassion for All Beings
                  </div>
                </div>

                <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/[0.08] shadow-lg">
                  <Image
                    src="/assets/aaron/tennis.jpg"
                    alt="Aaron playing tennis"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-[10px] text-zinc-300">
                    Lifelong Athletics
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Story */}
            <div className="lg:col-span-6">
              <div className="text-xs uppercase tracking-[0.2em] text-amber-400 font-semibold mb-3">
                The Coach's Journey
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal mb-6">
                “Unconditional Compassion and Extreme Gratitude Are the Keys to Real Joy.”
              </h2>

              <div className="text-zinc-300 text-sm sm:text-base leading-relaxed space-y-4 font-light mb-8">
                <p>
                  Born in Washington DC and raised in Maryland, Aaron attended Bible College and was
                  an avid multi-sport athlete, discovering early on that physical discipline teaches
                  profound spiritual lessons. Moving to Los Angeles, California, he spent decades
                  working as a certified personal trainer, actor, and entertainer.
                </p>
                <p>
                  In 2016, Aaron experienced a transformative spiritual awakening—embracing veganism
                  and realizing that all living beings are part of one interconnected earthly family.
                  This shift brought him closer to God / Source and clarified his ultimate life
                  calling: helping human beings heal, elevate their vibration, and cultivate inner peace.
                </p>
                <p>
                  Today, Aaron blends decades of physical training acumen with certified Spiritual
                  Life Coach credentials, delivering powerful virtual guidance to clients across the
                  globe via FaceTime and Zoom.
                </p>
              </div>

              {/* Badges / Credentials */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/[0.08]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-300 shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="text-xs text-zinc-300">Certified Life Coach</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-300 shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <span className="text-xs text-zinc-300">Decades Licensed Trainer</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-300 shrink-0">
                    <Heart className="w-4 h-4" />
                  </div>
                  <span className="text-xs text-zinc-300">Founder of AM Inspirations</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-300 shrink-0">
                    <Sun className="w-4 h-4" />
                  </div>
                  <span className="text-xs text-zinc-300">Holistic Spiritual Mentor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Frequently Asked Questions (Accordion) */}
      <section id="faq" className="py-20 md:py-28 px-4 sm:px-8 border-t border-white/[0.08]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-[0.2em] text-amber-400 font-semibold mb-3">
              Common Questions
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal mb-4">
              Everything You Need to Know
            </h2>
            <p className="text-zinc-300 text-sm">
              Answers regarding remote sessions, coaching format, and scheduling.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#14171F] border border-white/[0.08] overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 text-white hover:text-amber-200 transition-colors"
                  >
                    <span className="font-medium text-sm sm:text-base">{faq.q}</span>
                    <span className="w-7 h-7 rounded-full bg-white/[0.04] border border-white/[0.1] flex items-center justify-center shrink-0 text-amber-300">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-white/[0.04] pt-4 font-light">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. Final Call To Action Banner */}
      <section className="py-20 md:py-28 px-4 sm:px-8 relative bg-gradient-to-b from-[#10131A] via-[#161B26] to-[#0C0E12] border-t border-white/[0.08]">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-semibold tracking-wider uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready for Real Change?</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-normal mb-6 leading-tight">
            Your Journey to Inner Peace &<br />
            <span className="italic bg-gradient-to-r from-amber-200 via-amber-300 to-amber-100 bg-clip-text text-transparent">
              Highest Vibration Starts Today.
            </span>
          </h2>

          <p className="text-zinc-300 text-base sm:text-lg max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            I am currently accepting new client requests for any location worldwide via Zoom or
            FaceTime. Let us connect, raise your energy, and co-create your best life.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setIsConsultationOpen(true)}
              className="w-full sm:w-auto px-9 py-4 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-zinc-950 font-bold text-sm tracking-[0.14em] uppercase transition-all shadow-[0_4px_35px_rgba(245,158,11,0.35)] hover:shadow-[0_4px_50px_rgba(245,158,11,0.55)] hover:scale-105 active:scale-95"
            >
              Book Initial Consultation
            </button>

            <a
              href="mailto:aaron@aaronmcnair.com"
              className="w-full sm:w-auto px-7 py-4 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-white font-semibold text-xs tracking-[0.14em] uppercase border border-white/[0.12] transition-all flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4 text-amber-300" />
              <span>Direct Email Inquiries</span>
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-6 mt-12 pt-10 border-t border-white/[0.08] text-zinc-400">
            <a
              href="https://www.linkedin.com/in/aaronmcnair100/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-300 transition-colors p-2"
              aria-label="Aaron McNair LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/aaronmcnair100/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-300 transition-colors p-2"
              aria-label="Aaron McNair Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.youtube.com/@aminspirations1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-300 transition-colors p-2"
              aria-label="AM Inspirations YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a
              href="https://www.yelp.com/biz/am-inspirations-life-coach-los-angeles"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-300 transition-colors text-xs font-semibold uppercase tracking-wider"
            >
              Yelp Reviews
            </a>
          </div>
        </div>
      </section>

      {/* 11. Discrete Demo Colophon Footer */}
      <footer className="py-8 px-4 sm:px-8 bg-[#08090C] border-t border-white/[0.06] text-xs text-zinc-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <span className="text-zinc-400">Aaron McNair Coaching Concept</span> • Redesigned &
            Engineered as a Demo Website Showcase.
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-amber-300 hover:text-amber-200 transition-colors font-medium"
            >
              Portfolio of Miskat Hossain
            </Link>
            <span>•</span>
            <span>California, USA & Worldwide</span>
          </div>
        </div>
      </footer>

      {/* 12. Interactive Virtual Consultation Booking Modal */}
      {isConsultationOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-fade-in">
          <div className="relative w-full max-w-lg rounded-3xl bg-[#14171F] border border-amber-400/30 shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden">
            {/* Modal Header */}
            <div className="p-6 border-b border-white/[0.08] flex items-center justify-between bg-gradient-to-r from-amber-500/10 to-transparent">
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-amber-400 font-semibold">
                  Virtual Consultation Booking
                </div>
                <h3 className="font-serif text-xl text-white font-normal">
                  Schedule with Aaron McNair
                </h3>
              </div>
              <button
                onClick={resetModal}
                className="w-8 h-8 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-zinc-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              {formSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center text-emerald-400 mx-auto mb-4">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="font-serif text-2xl text-white mb-2">Request Received!</h4>
                  <p className="text-zinc-300 text-sm max-w-sm mx-auto mb-6">
                    Thank you, {formData.name || "friend"}. Aaron will review your consultation
                    request for <strong>{selectedGoal}</strong> via <strong>{selectedPlatform.toUpperCase()}</strong> and reach out within 24 hours.
                  </p>
                  <button
                    onClick={resetModal}
                    className="px-6 py-2.5 rounded-full bg-amber-400 text-zinc-950 font-semibold text-xs tracking-wider uppercase hover:scale-105 transition-all"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  {/* Goal selection */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                      1. Select Your Primary Focus
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        "Spiritual Growth & Purpose",
                        "Mindset & Emotional Clarity",
                        "Fitness & Physical Vitality",
                        "Breakup / Life Transition",
                      ].map((goal) => (
                        <button
                          type="button"
                          key={goal}
                          onClick={() => setSelectedGoal(goal)}
                          className={`p-2.5 rounded-xl text-xs text-left border transition-all ${
                            selectedGoal === goal
                              ? "bg-amber-400/15 border-amber-400 text-amber-200 font-semibold"
                              : "bg-white/[0.03] border-white/[0.08] text-zinc-400 hover:text-zinc-200"
                          }`}
                        >
                          {goal}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Platform selection */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                      2. Preferred Virtual Platform
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setSelectedPlatform("zoom")}
                        className={`p-3 rounded-xl border flex items-center justify-center gap-2 text-xs font-semibold transition-all ${
                          selectedPlatform === "zoom"
                            ? "bg-amber-400 text-zinc-950 border-amber-400"
                            : "bg-white/[0.03] border-white/[0.08] text-zinc-300"
                        }`}
                      >
                        <Video className="w-4 h-4" />
                        <span>Zoom Video</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setSelectedPlatform("facetime")}
                        className={`p-3 rounded-xl border flex items-center justify-center gap-2 text-xs font-semibold transition-all ${
                          selectedPlatform === "facetime"
                            ? "bg-amber-400 text-zinc-950 border-amber-400"
                            : "bg-white/[0.03] border-white/[0.08] text-zinc-300"
                        }`}
                      >
                        <Phone className="w-4 h-4" />
                        <span>FaceTime Video</span>
                      </button>
                    </div>
                  </div>

                  {/* Contact Fields */}
                  <div className="space-y-3 pt-2">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-zinc-400 mb-1">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Austin Parker"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.1] text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider text-zinc-400 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="you@domain.com"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.1] text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-amber-400"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] uppercase tracking-wider text-zinc-400 mb-1">
                          Phone / WhatsApp
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.1] text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-amber-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-zinc-400 mb-1">
                        What is your biggest current hurdle? (Optional)
                      </label>
                      <textarea
                        rows={2}
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="Tell Aaron briefly what you'd like to work through..."
                        className="w-full px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/[0.1] text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-amber-400 resize-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 text-zinc-950 font-bold text-xs tracking-[0.14em] uppercase transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:scale-[1.01] active:scale-98"
                  >
                    Confirm & Request Session
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
