"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Heart,
  Brain,
  Award,
  Users,
  User,
  Building2,
  Calendar,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  X,
  Star,
  Zap,
  Check,
  Menu,
  Play,
  Sun,
  Flower2,
  Compass,
  Layers,
  PhoneCall,
  Mail,
} from "lucide-react";

export default function NeuroNuanceClient() {
  // Mobile drawer & Modals
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [storyModalOpen, setStoryModalOpen] = useState(false);

  // Active FAQ
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // Booking Modal State
  const [bookingType, setBookingType] = useState<"individual" | "organization">("individual");
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [bookingFormData, setBookingFormData] = useState({
    name: "",
    email: "",
    organization: "",
    interest: "Dr. Joe Dispenza NCS Workshop (CYMCNR)",
    message: "",
  });

  // Transformation Readiness Diagnostic State
  const [diagnosticAudience, setDiagnosticAudience] = useState<"individual" | "organization">("individual");
  const [selectedPriority, setSelectedPriority] = useState<string>("stress-patterns");

  const diagnosticPriorities = {
    individual: [
      {
        id: "stress-patterns",
        label: "Repetitive Stress & Emotional Reactivity",
        desc: "Feeling hijacked by habitual stress responses, anxiety, or autoimmune/fatigue cycles.",
        recommendation: "Building Personal Resilience™ + The Coherent Self™ Coaching",
      },
      {
        id: "habit-plateau",
        label: "Breaking Outdated Habits & Self-Doubt",
        desc: "Knowing logically what to do, but unable to break automatic subconscious behavioral loops.",
        recommendation: "Change Your Mind… Create New Results (CYMCNR) Live Online Workshop",
      },
      {
        id: "life-transition",
        label: "Major Life Crossroads & Purpose Alignment",
        desc: "Stepping into a new chapter, career shift, or seeking embodied self-direction.",
        recommendation: "Embodied Leadership Integration (9-Session Journey)",
      },
    ],
    organization: [
      {
        id: "team-burnout",
        label: "Executive Burnout & High-Pressure Strain",
        desc: "Leadership fatigue, diminished innovation, and fragmented strategic focus across teams.",
        recommendation: "HeartMath® Executive Coherence & Stress Diagnostics",
      },
      {
        id: "culture-change",
        label: "Overcoming Resistance to Change",
        desc: "Organizational restructuring or strategic pivot meeting stubborn cultural inertia.",
        recommendation: "In-Person Corporate NCS Workshop: Change Your Mind… Create New Results",
      },
      {
        id: "collective-focus",
        label: "Team Synchronization & Culture Elevation",
        desc: "Creating high-trust, synchronized flow states and psychological safety among key groups.",
        recommendation: "NN | Synced Group Meditation & Coherence Retreats",
      },
    ],
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSubmitted(true);
  };

  const resetBookingModal = () => {
    setIsConsultationModalOpen(false);
    setTimeout(() => {
      setBookingSubmitted(false);
      setBookingFormData({
        name: "",
        email: "",
        organization: "",
        interest: "Dr. Joe Dispenza NCS Workshop (CYMCNR)",
        message: "",
      });
    }, 300);
  };

  // Testimonials data
  const testimonials = [
    {
      name: "Katina Constantinou",
      role: "Principal",
      company: "Sugar",
      type: "organization",
      badge: "Corporate NCS Training",
      quote:
        "Cristi facilitated the NCS training with clarity and care. The experience was engaging, grounded, and easy to apply. I left with a better understanding of myself and practical tools I continue to use in everyday life.",
    },
    {
      name: "Chanelle B",
      role: "Brand Manager",
      company: "Vanguard Eco Solutions",
      type: "organization",
      badge: "Team Leadership Workshop",
      quote:
        "It was refreshing to be taught by someone who truly embodies what they teach. Cristi holds the knowledge but also delivers it with passion and vulnerability. Her presence created real openness across our team.",
    },
    {
      name: "Sandra Rogoza",
      role: "Vice President, Revenue Operations",
      company: "LootzySoft",
      type: "individual",
      badge: "Executive Transformation",
      quote:
        "I applied what I learned to reverse engineer the experience I wanted. Within two months, I attracted my ideal role, in an ideal company, working with ideal people. The neuroscience framework works.",
    },
    {
      name: "Private Coaching Client",
      role: "Founder & Creative Director",
      company: "The Coherent Self™",
      type: "individual",
      badge: "1-on-1 Mentorship",
      quote:
        "Getting the outside-view perspective and answering some tough questions for myself unlocked a clarity I hadn't felt in years. The connection, understanding, and neuro-coherence tools are truly life-altering.",
    },
  ];

  // FAQs
  const faqs = [
    {
      q: "How does NeuroNuance serve both individuals and organizations with the same methodology?",
      a: "Transformation always operates at the level of the human nervous system. Whether an individual is rewiring an ingrained personal habit or an executive team is navigating a massive strategic restructuring, the biological mechanisms are identical: moving from a state of survival, stress, and reactive autopilot into elevated heart-brain coherence, intentional focus, and measurable neuroplasticity. We don't maintain separate methodologies; we apply the same scientific rigor through tailored individual coaching or collaborative team workshops.",
    },
    {
      q: "What is Dr. Joe Dispenza's 'Change Your Mind… Create New Results' (CYMCNR) program?",
      a: "CYMCNR is the official corporate and professional curriculum developed by Dr. Joe Dispenza and delivered globally exclusively by certified NeuroChangeSolutions (NCS) consultants like Cristi Trudgeon. It combines cutting-edge neuroscience, brainwave models, mental rehearsal exercises, and practical behavioral frameworks to help participants move beyond past programming and create new, sustainable outcomes.",
    },
    {
      q: "What makes HeartMath® coherence different from standard mindfulness?",
      a: "While mindfulness often focuses on cognitive awareness, HeartMath® focuses on physiological coherence—the synchronization between your heart rhythm pattern (HRV), autonomic nervous system, and brain chemistry. Using clinically validated biofeedback techniques, Cristi teaches clients how to regulate stress chemistry in real time, shifting from cortisol depletion to high-performance focus and emotional renewal.",
    },
    {
      q: "Can this redesign be natively implemented on Squarespace 7.1?",
      a: "Yes, 100%. Every single section in this proposed architecture has been deliberately structured to map directly to Squarespace 7.1's Fluid Engine. It uses native Squarespace Grid containers, standard Section Dividers, Squarespace Form Blocks (fixing the current newsletter storage error on the live site), Squarespace Accordions, and native Calendly/Acuity embed blocks without requiring brittle custom plugins.",
    },
    {
      q: "What are the options for booking workshops or individual coaching?",
      a: "Individuals can book single private sessions ($110 USD) or structured packages like The Coherent Self™ (6 sessions, $600 USD) and open online NCS workshops. Organizations can arrange private in-person or virtual team workshops, customized executive coherence retreats, and synced group meditation sessions by scheduling a 15-minute consultation.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#221B28] font-sans antialiased selection:bg-[#5C3677] selection:text-white">
      {/* ========================================================================= */}
      {/* 1. NAVBAR / HEADER (Matches Exact Reference)                               */}
      {/* ========================================================================= */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#EFE9F3] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Brand Logo & Tagline */}
          <Link href="/neuronuance" className="flex items-center gap-3 shrink-0 group">
            <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
              <Image
                src="/assets/neuronuance/logo.png"
                alt="NeuroNuance Inc. Logo"
                width={48}
                height={48}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold tracking-tight text-[#15444D] leading-tight">
                NeuroNuance Inc.
              </span>
              <span className="font-serif italic text-xs text-[#5C3677]">
                Where Science Meets Spirit
              </span>
            </div>
          </Link>

          {/* Center Navigation Links - Strict single line */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-8 text-sm font-medium text-[#4A474D] whitespace-nowrap">
            <Link
              href="/neuronuance"
              className="text-[#133842] font-semibold pb-1 border-b-2 border-[#133842] transition-colors whitespace-nowrap"
            >
              Home
            </Link>
            <a
              href="#cymcnr"
              className="hover:text-[#5C3677] pb-1 border-b-2 border-transparent transition-colors whitespace-nowrap"
            >
              Training &amp; Programs
            </a>
            <a
              href="#offerings"
              className="hover:text-[#5C3677] pb-1 border-b-2 border-transparent transition-colors whitespace-nowrap"
            >
              Coaching &amp; NLP
            </a>
            <a
              href="#about"
              className="hover:text-[#5C3677] pb-1 border-b-2 border-transparent transition-colors whitespace-nowrap"
            >
              About
            </a>
            <a
              href="#offerings"
              className="hover:text-[#5C3677] pb-1 border-b-2 border-transparent transition-colors whitespace-nowrap"
            >
              Shop
            </a>
            <a
              href="#contact"
              className="hover:text-[#5C3677] pb-1 border-b-2 border-transparent transition-colors whitespace-nowrap"
            >
              Contact
            </a>
          </nav>

          {/* Right Action CTA */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsConsultationModalOpen(true)}
              className="hidden sm:inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-[#5C3677] hover:bg-[#482860] text-white text-sm font-medium shadow-sm transition-all active:scale-[0.98]"
            >
              <span>Let’s Talk</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-[#15444D] hover:bg-gray-100"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#EFE9F3] bg-white px-5 py-6 space-y-4 shadow-xl">
            <div className="grid gap-3 text-base font-medium text-[#2C2633]">
              <Link
                href="/neuronuance"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-[#133842] font-semibold hover:bg-[#FAF6FC] rounded-lg"
              >
                Home
              </Link>
              <a
                href="#cymcnr"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 hover:bg-[#FAF6FC] rounded-lg"
              >
                Training &amp; Programs
              </a>
              <a
                href="#offerings"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 hover:bg-[#FAF6FC] rounded-lg"
              >
                Coaching &amp; NLP
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 hover:bg-[#FAF6FC] rounded-lg"
              >
                About Cristi
              </a>
              <a
                href="#testimonials"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 hover:bg-[#FAF6FC] rounded-lg"
              >
                Client Testimonials
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 hover:bg-[#FAF6FC] rounded-lg"
              >
                Contact
              </a>
            </div>
            <div className="pt-4 border-t border-[#EFE9F3]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsConsultationModalOpen(true);
                }}
                className="w-full py-3 rounded-full bg-[#5C3677] text-white font-medium text-sm text-center shadow-md"
              >
                Book Free Consultation
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ========================================================================= */}
      {/* 2. HERO SECTION (Identical to User Reference Design)                       */}
      {/* ========================================================================= */}
      <section className="relative pt-10 sm:pt-14 pb-6 overflow-hidden bg-[#FAF9F6]">
        {/* Soft Flowing Lavender Ribbon Curve in Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
          <svg
            className="absolute -bottom-10 -left-20 w-[650px] sm:w-[850px] h-[400px] text-[#EDE4F5]/60"
            viewBox="0 0 800 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-50,380 C150,340 280,260 420,180 C560,100 680,120 850,220 L850,450 L-50,450 Z"
              fill="currentColor"
            />
            <path
              d="M-50,320 C180,280 320,190 480,120 C620,60 720,90 850,160"
              stroke="#DBC9EC"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-4 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6 pt-2 lg:pt-0">
              {/* Eyebrow */}
              <div className="tracking-[0.25em] text-xs font-semibold text-[#385665] uppercase">
                Where Science Meets Spirit
              </div>

              {/* Two-Tone Master Headline */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[4.25rem] leading-[1.08] tracking-tight font-medium">
                <span className="block text-[#0E3A43]">More clarity.</span>
                <span className="block text-[#5B3478]">New possibilities.</span>
              </h1>

              {/* Subheadline & Lead */}
              <div className="space-y-3 pt-1">
                <p className="text-base sm:text-lg text-[#252525] font-normal leading-snug">
                  Life changes. So can the way you move through it.
                </p>
                <p className="text-sm sm:text-base text-[#525252] leading-relaxed max-w-xl">
                  Explore coaching, workshops and shared experiences with Cristi Trudgeon — for the shifts
                  you want to make in your relationships, work, habits or sense of self.
                </p>
              </div>

              {/* CTA Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                <button
                  onClick={() => setIsConsultationModalOpen(true)}
                  className="px-6 sm:px-7 py-3.5 rounded-full bg-[#5C3677] hover:bg-[#482860] text-white text-xs sm:text-sm font-medium shadow-sm transition-all flex items-center gap-2 active:scale-[0.98]"
                >
                  <span>Book Your Free 15-Minute Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setStoryModalOpen(true)}
                  className="px-5 sm:px-6 py-3.5 rounded-full bg-white/90 hover:bg-white text-[#2C2433] text-xs sm:text-sm font-medium border border-[#DCD3E2] shadow-xs hover:border-[#5C3677] transition-all flex items-center gap-2"
                >
                  <Play className="w-3.5 h-3.5 fill-[#2C2433] text-[#2C2433]" />
                  <span>Watch My Story</span>
                </button>
              </div>
            </div>

            {/* Right Media Column: Desk Portrait */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end relative">
              <div className="relative w-full max-w-lg lg:max-w-none rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src="/assets/neuronuance/cristi-desk-portrait.png"
                  alt="Cristi Trudgeon - Transformational Coaching & Neuroscience"
                  width={574}
                  height={396}
                  className="w-full h-auto object-cover rounded-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. VALUE PILLARS RIBBON (Curved Wave 4-Pillar Bar)                        */}
        {/* ========================================================================= */}
        <div className="mt-12 sm:mt-16 bg-white rounded-t-[2.5rem] sm:rounded-t-[3rem] border-t border-[#ECE1F3] shadow-[0_-4px_20px_rgba(92,54,119,0.03)] py-6 sm:py-8 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 divide-y lg:divide-y-0 lg:divide-x divide-gray-100">
              {/* Pillar 1: Evidence-Based */}
              <div className="flex items-center gap-3.5 pt-4 lg:pt-0 lg:px-4">
                <div className="w-12 h-12 rounded-full bg-[#F3EBF7] text-[#7A3EA6] flex items-center justify-center shrink-0">
                  <Brain className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[11px] sm:text-xs font-bold tracking-wider text-[#2A2333] uppercase leading-snug">
                    Evidence-Based <br className="hidden sm:inline" /> Approach
                  </h4>
                </div>
              </div>

              {/* Pillar 2: Heart-Centered */}
              <div className="flex items-center gap-3.5 pt-4 lg:pt-0 lg:px-4">
                <div className="w-12 h-12 rounded-full bg-[#E5F5F3] text-[#248579] flex items-center justify-center shrink-0">
                  <Flower2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[11px] sm:text-xs font-bold tracking-wider text-[#2A2333] uppercase leading-snug">
                    Heart-Centered <br className="hidden sm:inline" /> Coaching
                  </h4>
                </div>
              </div>

              {/* Pillar 3: Individual & Group */}
              <div className="flex items-center gap-3.5 pt-4 lg:pt-0 lg:px-4">
                <div className="w-12 h-12 rounded-full bg-[#EFEAF7] text-[#63438E] flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[11px] sm:text-xs font-bold tracking-wider text-[#2A2333] uppercase leading-snug">
                    Individual &amp; Group <br className="hidden sm:inline" /> Experiences
                  </h4>
                </div>
              </div>

              {/* Pillar 4: Real Tools */}
              <div className="flex items-center gap-3.5 pt-4 lg:pt-0 lg:px-4">
                <div className="w-12 h-12 rounded-full bg-[#EAF3EC] text-[#347A5A] flex items-center justify-center shrink-0">
                  <Sun className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[11px] sm:text-xs font-bold tracking-wider text-[#2A2333] uppercase leading-snug">
                    Real Tools <br className="hidden sm:inline" /> For Lasting Change
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. THE UNIFIED METHOD: INDIVIDUALS & ORGANIZATIONS                         */}
      {/* ========================================================================= */}
      <section id="the-bridge" className="py-20 bg-white border-t border-[#ECE1F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#5C3677]">
              The Core Philosophy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#15444D] tracking-tight">
              One Biology. Two Applications. Infinite Potential.
            </h2>
            <p className="text-base sm:text-lg text-[#554E5B] leading-relaxed">
              Why do individuals and organizations thrive under the exact same NeuroNuance methodology?
              Because an organization is simply an interconnected network of human nervous systems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {/* Pillar 1 */}
            <div className="p-7 rounded-2xl bg-[#FCFAFE] border border-[#E9DAF2] hover:border-[#B385D6] transition-all hover:shadow-md space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#EFE3F7] text-[#5C3677] flex items-center justify-center">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#15444D]">
                1. The Neuroscience of Change
              </h3>
              <p className="text-sm text-[#5D4E68] leading-relaxed">
                95% of who we are by age 35 is a memorized set of behaviors, emotional reactions, and
                subconscious beliefs. Whether breaking personal anxiety or corporate inertia, we teach
                participants how to step out of familiar brainwave states and physically rewire neural networks.
              </p>
              <div className="pt-2 text-xs font-semibold text-[#5C3677] flex items-center gap-1">
                <span>Applied in: CYMCNR Workshops &amp; 1-on-1 Sessions</span>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="p-7 rounded-2xl bg-[#FCFAFE] border border-[#E9DAF2] hover:border-[#B385D6] transition-all hover:shadow-md space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#EAF3FA] text-[#1E5B80] flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#15444D]">
                2. Heart-Brain Coherence
              </h3>
              <p className="text-sm text-[#5D4E68] leading-relaxed">
                Stress floods the bloodstream with cortisol and adrenaline, shutting down creative problem-solving
                in both individuals and executive boardrooms. HeartMath® techniques train you to consciously shift heart rate
                variability (HRV), unlocking cognitive clarity, stamina, and intuitive foresight.
              </p>
              <div className="pt-2 text-xs font-semibold text-[#1E5B80] flex items-center gap-1">
                <span>Applied in: HeartMath® Diagnostics &amp; Resilience</span>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="p-7 rounded-2xl bg-[#FCFAFE] border border-[#E9DAF2] hover:border-[#B385D6] transition-all hover:shadow-md space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#FCF3EB] text-[#A25F18] flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#15444D]">
                3. Collective Flow &amp; Synchronization
              </h3>
              <p className="text-sm text-[#5D4E68] leading-relaxed">
                When people meditate or work together in a state of shared physiological coherence,
                communication friction drops and collective intelligence soars. Our synced group experiences
                harmonize individuals into a shared, high-trust frequency.
              </p>
              <div className="pt-2 text-xs font-semibold text-[#A25F18] flex items-center gap-1">
                <span>Applied in: NN | Synced Meditation &amp; Corporate Offsites</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. DR. JOE DISPENZA'S NCS WORKSHOPS (CYMCNR)                               */}
      {/* ========================================================================= */}
      <section id="cymcnr" className="py-20 bg-gradient-to-b from-white via-[#FAF5FC] to-white border-t border-[#EFE9F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Workshop Details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFE5F7] text-[#5C3677] text-xs font-bold uppercase tracking-wider border border-[#DAC4ED]">
                <Brain className="w-4 h-4 text-[#5C3677]" />
                Official NeuroChangeSolutions Program
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#15444D] tracking-tight leading-tight">
                Change Your Mind… <br />
                <span className="text-[#5C3677]">Create New Results.</span>
              </h2>

              <p className="text-base sm:text-lg text-[#554761] leading-relaxed">
                Developed by global neuroscientist and author <strong>Dr. Joe Dispenza</strong>, this curriculum
                translates brain science into practical daily frameworks. Personally trained by Dr. Joe,
                Cristi guides participants step-by-step through the process of rewiring habits and mastering mental rehearsal.
              </p>

              {/* What You Gain Grid */}
              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white border border-[#E7D7F0] space-y-1.5 shadow-xs">
                  <div className="flex items-center gap-2 font-bold text-sm text-[#15444D]">
                    <Sparkles className="w-4 h-4 text-[#5C3677]" />
                    <span>Demystifying Neuroscience</span>
                  </div>
                  <p className="text-xs text-[#63546F] leading-relaxed">
                    Understand brainwaves (Beta, Alpha, Theta) and how automatic memory networks keep you bound to past habits.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#E7D7F0] space-y-1.5 shadow-xs">
                  <div className="flex items-center gap-2 font-bold text-sm text-[#15444D]">
                    <Heart className="w-4 h-4 text-[#5C3677]" />
                    <span>Mental Rehearsal Mastery</span>
                  </div>
                  <p className="text-xs text-[#63546F] leading-relaxed">
                    Condition your neurological architecture for new outcomes before physical manifestation occurs.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#E7D7F0] space-y-1.5 shadow-xs">
                  <div className="flex items-center gap-2 font-bold text-sm text-[#15444D]">
                    <Zap className="w-4 h-4 text-[#5C3677]" />
                    <span>Stress Chemistry Regulation</span>
                  </div>
                  <p className="text-xs text-[#63546F] leading-relaxed">
                    Move immediately from chronic survival reactivity to high-clarity creative coherence.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#E7D7F0] space-y-1.5 shadow-xs">
                  <div className="flex items-center gap-2 font-bold text-sm text-[#15444D]">
                    <Users className="w-4 h-4 text-[#5C3677]" />
                    <span>Post-Training Integration</span>
                  </div>
                  <p className="text-xs text-[#63546F] leading-relaxed">
                    Includes physical workbook, official journal, and <strong>two 1-on-1 private coaching sessions</strong>.
                  </p>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setIsConsultationModalOpen(true)}
                  className="px-6 py-3 rounded-full bg-[#5C3677] hover:bg-[#482860] text-white text-sm font-semibold shadow-md transition-all flex items-center gap-2"
                >
                  <span>Apply for Next Training</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <span className="text-xs text-[#6E5D7D]">
                  Open to both individual professionals &amp; corporate teams.
                </span>
              </div>
            </div>

            {/* Right Column: Pricing & Format Card */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-gradient-to-br from-[#2D143D] via-[#481E67] to-[#1E092B] text-white p-6 sm:p-8 shadow-2xl relative overflow-hidden">
                <div className="relative space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[#EBD7FC] text-xs font-semibold border border-white/20">
                      Standard Curriculum
                    </span>
                    <span className="text-xs text-purple-200">2-Day Intensive</span>
                  </div>

                  <div>
                    <span className="text-xs uppercase tracking-wider text-purple-200 block">
                      Live Virtual or In-Person Workshop
                    </span>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="font-serif text-4xl sm:text-5xl font-bold text-white">$600</span>
                      <span className="text-purple-200 text-sm font-medium">USD / participant</span>
                    </div>
                    <p className="text-xs text-purple-200/80 mt-1">
                      (Contact Cristi directly for organization and team volume pricing)
                    </p>
                  </div>

                  <div className="space-y-3 pt-2 border-t border-white/15 text-xs sm:text-sm text-purple-100">
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#D8B4F8] shrink-0 mt-0.5" />
                      <span>Full 2-Day live training facilitated by Cristi Trudgeon</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#D8B4F8] shrink-0 mt-0.5" />
                      <span>Official NCS 30-Day Genius Journal &amp; Participant Manual</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#D8B4F8] shrink-0 mt-0.5" />
                      <span>Dr. Joe Dispenza's guided meditation audio models</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#D8B4F8] shrink-0 mt-0.5" />
                      <span><strong>Two 1-on-1 private coaching sessions</strong> included post-training</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => setIsConsultationModalOpen(true)}
                      className="w-full py-3.5 rounded-full bg-white hover:bg-[#FAF4FC] text-[#3B1953] font-bold text-sm text-center shadow-lg transition-all"
                    >
                      Reserve Your Workshop Seat
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. COMPLETE OFFERINGS MATRIX                                               */}
      {/* ========================================================================= */}
      <section id="offerings" className="py-20 bg-white border-t border-[#EDE5F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#5C3677]">
              Comprehensive Services
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#15444D] tracking-tight">
              Transformational Journeys Tailored to Your Scale
            </h2>
            <p className="text-base text-[#5D4E68]">
              Transparent investments for individuals, emerging leaders, and full corporate teams.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
            {/* Card 1: The Coherent Self */}
            <div className="rounded-3xl bg-[#FCFAFE] border border-[#E7D6F0] p-7 flex flex-col justify-between hover:border-[#9B5BC7] transition-all hover:shadow-lg space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#EFE5F7] text-[#5C3677] text-xs font-bold uppercase tracking-wider">
                    1-on-1 Coaching
                  </span>
                  <span className="text-xs font-medium text-[#7A6A88]">Individual</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#15444D]">The Coherent Self™</h3>
                <p className="text-sm text-[#554761] leading-relaxed">
                  A personalized, embodied coaching journey to dismantle limiting subconscious loops,
                  regulate emotional triggers, and establish high-frequency alignment.
                </p>
                <div className="pt-2 border-t border-[#EDE0F4] space-y-2 text-xs text-[#4F4158]">
                  <div className="flex justify-between py-1">
                    <span>Single 75-Min Session:</span>
                    <strong className="text-[#15444D]">$110 USD</strong>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Coherent Foundations (3 Sessions):</span>
                    <strong className="text-[#15444D]">$315 USD ($105/ea)</strong>
                  </div>
                  <div className="flex justify-between py-1 bg-[#F5EAF9] px-2 rounded">
                    <span>The Coherent Self (6 Sessions):</span>
                    <strong className="text-[#5C3677]">$600 USD (Most Popular)</strong>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Leadership Integration (9 Sessions):</span>
                    <strong className="text-[#15444D]">$855 USD ($95/ea)</strong>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsConsultationModalOpen(true)}
                className="w-full py-3 rounded-full bg-[#5C3677] hover:bg-[#482860] text-white text-xs font-bold uppercase tracking-wider transition-all"
              >
                Apply for Coaching
              </button>
            </div>

            {/* Card 2: HeartMath Services */}
            <div className="rounded-3xl bg-[#FCFAFE] border border-[#E7D6F0] p-7 flex flex-col justify-between hover:border-[#1E5B80] transition-all hover:shadow-lg space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#EBF5FB] text-[#1E5B80] text-xs font-bold uppercase tracking-wider">
                    Biofeedback &amp; HRV
                  </span>
                  <span className="text-xs font-medium text-[#7A6A88]">Both Paths</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#15444D]">HeartMath® Services</h3>
                <p className="text-sm text-[#554761] leading-relaxed">
                  Clinically validated protocols to measure, monitor, and master your physiological coherence.
                  Transforms nervous system exhaustion into sustainable mental endurance.
                </p>
                <div className="pt-2 border-t border-[#EDE0F4] space-y-2 text-xs text-[#4F4158]">
                  <div className="flex justify-between py-1 bg-[#EBF5FB]/60 px-2 rounded">
                    <span>Stress &amp; Well-Being Diagnostic:</span>
                    <strong className="text-[#1E5B80]">$50 USD (Report Incl.)</strong>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Building Personal Resilience™:</span>
                    <strong className="text-[#15444D]">Custom Mentorship</strong>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Science &amp; Practice of Heart Coherence:</span>
                    <strong className="text-[#15444D]">8-Hour Intensive · $395</strong>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsConsultationModalOpen(true)}
                className="w-full py-3 rounded-full bg-[#1E5B80] hover:bg-[#164764] text-white text-xs font-bold uppercase tracking-wider transition-all"
              >
                Request Assessment
              </button>
            </div>

            {/* Card 3: Organization & Team Immersion */}
            <div className="rounded-3xl bg-[#FCFAFE] border border-[#E7D6F0] p-7 flex flex-col justify-between hover:border-[#8E52B7] transition-all hover:shadow-lg space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#FAF0FD] text-[#5C3677] text-xs font-bold uppercase tracking-wider">
                    Teams &amp; Summits
                  </span>
                  <span className="text-xs font-medium text-[#7A6A88]">Organizations</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#15444D]">Corporate Immersions</h3>
                <p className="text-sm text-[#554761] leading-relaxed">
                  Full corporate workshops and experiential retreats. Unites leadership teams around shared vision,
                  eradicates team burnout, and fosters psychological resilience.
                </p>
                <div className="pt-2 border-t border-[#EDE0F4] space-y-2 text-xs text-[#4F4158]">
                  <div className="flex items-start gap-2 py-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#5C3677] shrink-0 mt-0.5" />
                    <span>In-person or virtual CYMCNR corporate delivery</span>
                  </div>
                  <div className="flex items-start gap-2 py-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#5C3677] shrink-0 mt-0.5" />
                    <span><strong>NN | Synced Group Meditation</strong> with immersive audio</span>
                  </div>
                  <div className="flex items-start gap-2 py-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#5C3677] shrink-0 mt-0.5" />
                    <span>Customized executive coaching &amp; cohort retainers</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsConsultationModalOpen(true)}
                className="w-full py-3 rounded-full bg-[#5C3677] hover:bg-[#482860] text-white text-xs font-bold uppercase tracking-wider transition-all"
              >
                Inquire for Teams
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. CLIENT TESTIMONIALS                                                     */}
      {/* ========================================================================= */}
      <section id="testimonials" className="py-20 bg-[#FAF9F6] border-t border-[#EFE9F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#5C3677]">
              Client Experiences
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#15444D] tracking-tight">
              In Their Own Words
            </h2>
            <p className="text-sm sm:text-base text-[#5D4E68]">
              Proven impact across leadership teams, corporate brand directors, and individual clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="p-7 sm:p-8 rounded-3xl bg-white border border-[#E8D9F2] hover:border-[#B385D6] transition-all hover:shadow-md flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-0.5 rounded-full bg-[#EFE5F7] text-[#5C3677] text-xs font-semibold">
                      {t.badge}
                    </span>
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-sm sm:text-base text-[#3E3147] italic leading-relaxed">
                    "{t.quote}"
                  </blockquote>
                </div>

                <div className="pt-4 border-t border-[#EFE5F7] flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#5C3677] to-[#783FA4] text-white flex items-center justify-center font-bold text-xs font-serif">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#15444D]">{t.name}</h4>
                    <p className="text-xs text-[#71617F]">
                      {t.role} • <span className="font-medium text-[#5C3677]">{t.company}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. ABOUT CRISTI TRUDGEON                                                   */}
      {/* ========================================================================= */}
      <section id="about" className="py-20 bg-white border-t border-[#EFE9F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left: Cristi's Portrait */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[4/4.8]">
                <Image
                  src="/assets/neuronuance/cristi-portrait.jpg"
                  alt="Cristi Trudgeon"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 p-4 rounded-2xl bg-white border border-[#DAC3EC] shadow-lg max-w-[240px]">
                <p className="text-xs italic text-[#44364F]">
                  "Strive not to be a success… but rather to be of value."
                </p>
                <span className="text-[10px] text-[#5C3677] font-bold block mt-1">
                  — Albert Einstein
                </span>
              </div>
            </div>

            {/* Right: Her Journey */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#5C3677]">
                Meet Your Guide
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#15444D] tracking-tight">
                "My Diagnoses Did Not Have to Define My Life."
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-[#574963] leading-relaxed">
                <p>
                  I’m Cristi Trudgeon, founder of NeuroNuance Inc., an Erickson Certified Professional
                  Coach and a Certified NeuroChangeSolutions (NCS) Consultant personally trained by Dr. Joe Dispenza.
                </p>
                <p>
                  My journey began from profound adversity. Living with five diagnosed autoimmune conditions,
                  I had accepted fatigue, pain, and limitation as my permanent cards in life. Then, I watched my
                  sister make an astonishing, rapid transformation through this neuroscience-based curriculum.
                  I had to understand it for myself.
                </p>
                <p>
                  As I applied these principles, I witnessed tangible physical shifts within my own body that
                  challenged everything I thought was biologically set in stone. That awakening gave me a purpose:
                  to help leaders, teams, and individuals access their innate neural capacity to recreate their reality.
                </p>
              </div>

              {/* Credentials */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <div className="px-3.5 py-1.5 rounded-full bg-[#FAF5FC] border border-[#DFCEEC] text-xs font-semibold text-[#5C3677]">
                  Calgary, Alberta • Serving Globally
                </div>
                <div className="px-3.5 py-1.5 rounded-full bg-[#FAF5FC] border border-[#DFCEEC] text-xs font-semibold text-[#5C3677]">
                  ICF Credentialed (ECPC)
                </div>
                <div className="px-3.5 py-1.5 rounded-full bg-[#FAF5FC] border border-[#DFCEEC] text-xs font-semibold text-[#5C3677]">
                  HeartMath® Licensed Coach
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. FAQS                                                                    */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#FAF9F6] border-t border-[#EFE9F3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#5C3677]">
              Frequently Asked Questions
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#15444D] tracking-tight">
              Understanding the Work &amp; Engagement Models
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-[#E7D7F0] overflow-hidden transition-all bg-white"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-serif font-bold text-base sm:text-lg text-[#15444D] hover:text-[#5C3677] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <div className="w-8 h-8 rounded-full bg-[#F3EAF8] text-[#5C3677] flex items-center justify-center shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 text-sm sm:text-base text-[#554761] leading-relaxed border-t border-[#EFE3F7] pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. FINAL CTA                                                              */}
      {/* ========================================================================= */}
      <section id="contact" className="py-20 bg-gradient-to-br from-[#2D143D] via-[#481E67] to-[#1E092B] text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[#EBD7FC] text-xs font-semibold border border-white/20 uppercase tracking-wider">
            Your Next Chapter Begins Here
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Ready to Bridge Science &amp; Spirit in Your Life or Organization?
          </h2>
          <p className="text-base sm:text-lg text-purple-200/90 max-w-2xl mx-auto leading-relaxed">
            Schedule a complimentary 15-minute consultation with Cristi Trudgeon to explore your next step.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setIsConsultationModalOpen(true)}
              className="px-8 py-4 rounded-full bg-white hover:bg-[#FAF4FC] text-[#3B1953] font-bold text-base shadow-xl transition-all flex items-center gap-2"
            >
              <span>Book Your Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-base border border-white/30 backdrop-blur-md transition-all inline-flex items-center gap-2"
            >
              <ArrowUpRight className="w-4 h-4" />
              <span>Miskat's Website</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11. FOOTER                                                                 */}
      {/* ========================================================================= */}
      <footer className="bg-[#1C0B28] text-[#D8CEE2] py-14 border-t border-[#341849]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-10">
            {/* Col 1 */}
            <div className="space-y-4 md:col-span-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white p-1">
                  <Image
                    src="/assets/neuronuance/logo.png"
                    alt="NeuroNuance"
                    width={40}
                    height={40}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <span className="block font-serif text-lg font-bold text-white">
                    NeuroNuance Inc.
                  </span>
                  <span className="block text-[10px] text-[#A595B4] uppercase tracking-wider">
                    Where Science Meets Spirit
                  </span>
                </div>
              </div>
              <p className="text-xs text-[#B5A5C4] leading-relaxed max-w-sm">
                Transformational coaching, Dr. Joe Dispenza's Change Your Mind… Create New Results
                workshops, and HeartMath® coherence services for individuals, executive leaders, and organizations.
              </p>
              <p className="text-xs text-[#8E79A1]">
                Calgary, Alberta, Canada • Available globally in-person &amp; virtually
              </p>
            </div>

            {/* Col 2 */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Programs</h4>
              <ul className="space-y-2 text-xs text-[#B5A5C4]">
                <li><a href="#cymcnr" className="hover:text-white transition-colors">NCS Workshop (CYMCNR)</a></li>
                <li><a href="#offerings" className="hover:text-white transition-colors">The Coherent Self™ Coaching</a></li>
                <li><a href="#offerings" className="hover:text-white transition-colors">HeartMath® Resilience</a></li>
                <li><a href="#the-bridge" className="hover:text-white transition-colors">Synced Group Meditation</a></li>
              </ul>
            </div>

            {/* Col 3 */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Stay Connected</h4>
              <p className="text-xs text-[#B5A5C4]">
                Sign up for Cristi's newsletter with insights on neuroscience, heart coherence, and habit mastery.
              </p>
              <form onSubmit={(e) => { e.preventDefault(); alert("Thank you for subscribing!"); }} className="space-y-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  required
                  className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-xs text-white placeholder-purple-200/50 focus:outline-none focus:border-[#B385D6]"
                />
                <button
                  type="submit"
                  className="w-full py-2 rounded-lg bg-[#5C3677] hover:bg-[#482860] text-white text-xs font-semibold transition-all"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8E79A1]">
            <p>© {new Date().getFullYear()} NeuroNuance Inc. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <span>Prepared for Cristi Trudgeon</span>
              <span>•</span>
              <Link href="/" target="_blank" className="text-[#D8B4F8] hover:underline">
                Designed &amp; Architected by Miskat Hossain
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* ========================================================================= */}
      {/* 12. WATCH MY STORY VIDEO MODAL                                             */}
      {/* ========================================================================= */}
      {storyModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setStoryModalOpen(false)}
              className="absolute top-5 right-5 p-2 text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#5C3677]">
                <Play className="w-4 h-4 fill-[#5C3677]" />
                <span>Cristi's Personal Journey</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#15444D]">
                Where Science Meets Spirit: The NeuroNuance Story
              </h3>
              <div className="relative aspect-video rounded-2xl bg-[#1E092B] overflow-hidden flex items-center justify-center border border-[#E9DAF2]">
                <Image
                  src="/assets/neuronuance/cristi-desk-portrait.png"
                  alt="Cristi Story"
                  fill
                  className="object-cover opacity-60"
                />
                <div className="relative z-10 text-center p-4">
                  <div className="w-14 h-14 rounded-full bg-[#5C3677] text-white flex items-center justify-center mx-auto mb-2 shadow-lg">
                    <Play className="w-6 h-6 fill-white ml-0.5" />
                  </div>
                  <p className="text-white text-xs font-medium">
                    "From 5 Autoimmune Diagnoses to Neuroplastic Freedom"
                  </p>
                </div>
              </div>
              <p className="text-xs text-[#5D4E68] leading-relaxed">
                Cristi shares how shifting out of survival brainwaves and activating heart-brain coherence
                physically rewired her health, inspired her training with Dr. Joe Dispenza, and led to the creation of NeuroNuance.
              </p>
              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => {
                    setStoryModalOpen(false);
                    setIsConsultationModalOpen(true);
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#5C3677] text-white text-xs font-bold uppercase tracking-wider"
                >
                  Book Consultation With Cristi
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 13. CONSULTATION MODAL                                                     */}
      {/* ========================================================================= */}
      {isConsultationModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative animate-in zoom-in-95 duration-200">
            <button
              onClick={resetBookingModal}
              className="absolute top-5 right-5 p-2 text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>

            {!bookingSubmitted ? (
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div className="space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#5C3677]">
                    Complimentary 15-Minute Call
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#15444D]">
                    Connect with Cristi Trudgeon
                  </h3>
                  <p className="text-xs text-[#5D4E68]">
                    Explore coaching, Dr. Joe Dispenza's workshops, or organization programs.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setBookingType("individual")}
                    className={`py-2 px-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                      bookingType === "individual"
                        ? "bg-[#5C3677] text-white border-[#5C3677]"
                        : "bg-gray-50 border-gray-200 text-gray-700"
                    }`}
                  >
                    <User className="w-3.5 h-3.5" />
                    <span>For Myself</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setBookingType("organization")}
                    className={`py-2 px-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                      bookingType === "organization"
                        ? "bg-[#1E5B80] text-white border-[#1E5B80]"
                        : "bg-gray-50 border-gray-200 text-gray-700"
                    }`}
                  >
                    <Building2 className="w-3.5 h-3.5" />
                    <span>For My Organization</span>
                  </button>
                </div>

                <div className="space-y-3 pt-2 text-xs">
                  <div>
                    <label className="block font-medium text-gray-700 mb-1">Your Full Name</label>
                    <input
                      type="text"
                      required
                      value={bookingFormData.name}
                      onChange={(e) => setBookingFormData({ ...bookingFormData, name: e.target.value })}
                      placeholder="e.g. Sandra Rogoza"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#5C3677]"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={bookingFormData.email}
                      onChange={(e) => setBookingFormData({ ...bookingFormData, email: e.target.value })}
                      placeholder="e.g. sandra@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#5C3677]"
                    />
                  </div>

                  {bookingType === "organization" && (
                    <div>
                      <label className="block font-medium text-gray-700 mb-1">Organization / Company Name</label>
                      <input
                        type="text"
                        value={bookingFormData.organization}
                        onChange={(e) => setBookingFormData({ ...bookingFormData, organization: e.target.value })}
                        placeholder="e.g. Vanguard Eco Solutions"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#5C3677]"
                      />
                    </div>
                  )}

                  <div>
                    <label className="block font-medium text-gray-700 mb-1">Area of Primary Interest</label>
                    <select
                      value={bookingFormData.interest}
                      onChange={(e) => setBookingFormData({ ...bookingFormData, interest: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#5C3677] bg-white"
                    >
                      <option>Dr. Joe Dispenza NCS Workshop (CYMCNR)</option>
                      <option>The Coherent Self™ 1-on-1 Coaching</option>
                      <option>HeartMath® Stress &amp; Well-Being Assessment</option>
                      <option>Corporate / Executive Team Workshop</option>
                      <option>NN | Synced Group Meditation</option>
                      <option>Other / General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-medium text-gray-700 mb-1">What would you like to explore or change?</label>
                    <textarea
                      rows={3}
                      value={bookingFormData.message}
                      onChange={(e) => setBookingFormData({ ...bookingFormData, message: e.target.value })}
                      placeholder="Tell Cristi a little about what you'd like to shift..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#5C3677] resize-none"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-[#5C3677] hover:bg-[#482860] text-white font-bold text-sm shadow-md transition-all"
                  >
                    Request Consultation
                  </button>
                </div>
              </form>
            ) : (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#EFE5F7] text-[#5C3677] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#15444D]">
                  Consultation Request Received
                </h3>
                <p className="text-xs sm:text-sm text-[#5D4E68] max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong>{bookingFormData.name || "friend"}</strong>. Your inquiry regarding{" "}
                  <strong>{bookingFormData.interest}</strong> has been received. Cristi will follow up shortly to arrange your 15-minute session.
                </p>
                <div className="pt-4">
                  <button
                    onClick={resetBookingModal}
                    className="px-6 py-2.5 rounded-full bg-[#5C3677] text-white text-xs font-bold"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
