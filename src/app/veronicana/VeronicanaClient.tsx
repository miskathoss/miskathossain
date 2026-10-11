"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Calendar,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  X,
  Clock,
  Star,
  Users,
  MessageSquare,
  ShieldCheck,
  Heart,
  Compass,
  Phone,
  Mail,
  MapPin,
  Menu,
  Activity,
  Award,
  Zap,
  Check,
  HelpCircle,
  ExternalLink,
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
} from "lucide-react";

const FRESHA_BOOKING_URL =
  "https://www.fresha.com/a/myobody-balance-drogheda-unit-5-donore-road-industrial-estate-wgv6st45/booking?menu=true&pId=513856&dppub=true&employeeId=4782199&cartId=7ca92f63-e4e8-4070-8775-cfd082313588";

type TherapyCategory = "all" | "massage" | "energy" | "movement";

interface TherapyItem {
  id: string;
  title: string;
  category: "massage" | "energy" | "movement";
  tag: string;
  duration: string;
  image: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  idealFor: string;
}

const THERAPIES: TherapyItem[] = [
  {
    id: "lymphatic",
    title: "Lymphatic Drainage Massage",
    category: "massage",
    tag: "Detox & Recovery",
    duration: "60 - 75 Mins",
    image: "/assets/veronicana/massage-treatment-1.jpg",
    shortDesc:
      "A gentle, rhythmic massage technique designed to stimulate the lymphatic system, assisting natural fluid movement and relieving bloating.",
    fullDesc:
      "Lymphatic drainage uses precise, light, rhythmic pumping strokes along anatomical lymph pathways. It assists the body in clearing metabolic waste, easing systemic inflammation, post-surgical or fluid retention swelling, and leaves you feeling light and energized.",
    benefits: [
      "Stimulates lymphatic circulation & immune function",
      "Reduces water retention, puffiness & heavy limbs",
      "Accelerates post-exercise & cellular recovery",
      "Soothes the autonomic nervous system into deep rest",
    ],
    idealFor: "Water retention, post-operative swelling, immune boost, heavy legs.",
  },
  {
    id: "sports-deep-tissue",
    title: "Sports & Deep Tissue Massage",
    category: "massage",
    tag: "Pain Relief & Mobility",
    duration: "60 - 90 Mins",
    image: "/assets/veronicana/massage-treatment-2.jpg",
    shortDesc:
      "Targets deeper myofascial layers and stubborn knots using firm, intentional pressure to release chronic tension and restore full mobility.",
    fullDesc:
      "Combining targeted trigger-point therapy, cross-fiber friction, and neuromuscular techniques. Ana uses hands, forearms, and elbows to release restricted fascia, break up persistent tension knots in the neck, shoulders, and lower back, and prevent sports-related injuries.",
    benefits: [
      "Releases deep myofascial tension & chronic adhesions",
      "Restores spinal mobility & joint range of motion",
      "Alleviates desk-posture neck & lower back pain",
      "Optimizes athletic recovery & muscular balance",
    ],
    idealFor: "Athletes, chronic neck/back pain, desk workers, postural stiffness.",
  },
  {
    id: "holistic-swedish",
    title: "Holistic & Swedish Massage",
    category: "massage",
    tag: "Mind-Body Harmony",
    duration: "60 Mins",
    image: "/assets/veronicana/clinic-room.jpg",
    shortDesc:
      "A whole-person restorative treatment that harmonizes muscular release with mental serenity, honouring the deep connection of soul, mind, and body.",
    fullDesc:
      "Holistic massage treats the complete person rather than isolated symptoms. By combining fluid effleurage strokes with calming aromatherapy and mindful pressure, this session calms an overworked mind while easing muscle rigidity.",
    benefits: [
      "Lowers cortisol and promotes restful sleep",
      "Enhances peripheral blood flow and tissue oxygenation",
      "Relieves daily emotional stress and fatigue",
      "Calms nervous system overload and restores inner peace",
    ],
    idealFor: "High-stress lifestyles, burnout, physical fatigue, overall rejuvenation.",
  },
  {
    id: "sound-bath-reiki",
    title: "Reiki Healing & Sound Bath Therapy",
    category: "energy",
    tag: "Energetic Restoration",
    duration: "60 - 75 Mins",
    image: "/assets/veronicana/sound-bath.jpg",
    shortDesc:
      "An immersive energetic healing experience pairing subtle Reiki touch with resonant Tibetan singing bowls to realign your nervous system.",
    fullDesc:
      "Reiki channels subtle vital energy to unblock stagnant flow, while the harmonic frequencies of singing bowls wash over the brainwaves—guiding you into deep alpha and theta states. A sanctuary for profound emotional release and reset.",
    benefits: [
      "Guides brainwaves into restorative meditation (Theta states)",
      "Rebalances chakra and meridian energy flow",
      "Dissolves emotional tension and mental chatter",
      "Promotes deep restorative sleep and spiritual clarity",
    ],
    idealFor: "Emotional exhaustion, anxiety, chakra imbalance, spiritual grounding.",
  },
  {
    id: "reflexology",
    title: "Reflexology Therapy",
    category: "energy",
    tag: "Holistic Zone Healing",
    duration: "50 - 60 Mins",
    image: "/assets/veronicana/reflexology.jpg",
    shortDesc:
      "Ancient foot therapy applying tailored acupressure to nerve reflex points corresponding to organs and systems throughout the whole body.",
    fullDesc:
      "Based on over 5,000 years of acupressure tradition, reflexology treats the body as an interconnected matrix. By working the precise reflex zones of the soles and ankles, Ana stimulates self-healing, balances internal organs, and relieves whole-body stress.",
    benefits: [
      "Stimulates internal organ function & blood flow",
      "Relieves plantar fasciitis & foot fatigue",
      "Harmonizes meridian pathways throughout the body",
      "Induces a profoundly restorative, grounded state",
    ],
    idealFor: "Digestive sluggishness, hormonal balance, foot pain, stress relief.",
  },
  {
    id: "ear-candling",
    title: "Hopi Ear Candling & Sinus Relief",
    category: "energy",
    tag: "Sinus & Cranial Comfort",
    duration: "45 - 60 Mins",
    image: "/assets/veronicana/client-care.jpg",
    shortDesc:
      "Gentle thermal acoustic ear coning coupled with cranial and sinus drainage to clear blockages, relieve ear pressure, and soothe migraines.",
    fullDesc:
      "Using pure beeswax candles infused with calming herbs, the chimney effect produces a gentle vacuum and soothing warmth. Followed by facial lymph drainage, it provides immense relief for sinus congestion, rhinitis, tinnitus, and tension headaches.",
    benefits: [
      "Painless softening and clearing of compacted earwax",
      "Equalizes sinus and inner-ear pressure",
      "Alleviates tinnitus, rhinitis, catarrh & headaches",
      "Gentle cranial lymph massage eases facial tension",
    ],
    idealFor: "Sinusitis, ear pressure, tinnitus, hay fever, tension migraines.",
  },
  {
    id: "pilates",
    title: "1-to-1 Pilates & Movement Therapy",
    category: "movement",
    tag: "Core & Posture",
    duration: "55 Mins",
    image: "/assets/veronicana/pilates-session.jpg",
    shortDesc:
      "Bespoke private movement sessions designed to strengthen deep core stabilizers, correct postural misalignments, and prevent injury recurrence.",
    fullDesc:
      "Movement is medicine. These personalized 1-on-1 Pilates and Yogalates sessions are crafted around your unique biomechanics, complementing your massage therapy to ensure long-term spinal health, pelvic alignment, and effortless posture.",
    benefits: [
      "Strengthens pelvic floor & transverse abdominis core",
      "Corrects posture distortions & forward head tilt",
      "Increases spinal articulation & functional flexibility",
      "Complements bodywork for lasting injury prevention",
    ],
    idealFor: "Post-rehab strengthening, weak core, poor posture, flexibility goals.",
  },
  {
    id: "life-coaching",
    title: "Mindset & Life Coaching",
    category: "movement",
    tag: "Emotional Mastery",
    duration: "60 Mins (In-Person / Online)",
    image: "/assets/veronicana/life-coaching.jpg",
    shortDesc:
      "Empowering guidance to unpack emotional overwhelm, master anxiety triggers, cultivate self-compassion, and navigate life transitions with confidence.",
    fullDesc:
      "True health requires mental and emotional harmony. In these confidential sessions, Ana coaches you through proven mindset frameworks to quiet self-doubt, establish healthy boundaries, and build grounded, resilient peace.",
    benefits: [
      "Provides structured tools to overcome overwhelm & burnout",
      "Develops deep self-acceptance and emotional resilience",
      "Clarifies life priorities and builds assertive confidence",
      "Available both in-person in Drogheda or via private Zoom",
    ],
    idealFor: "Life transitions, chronic stress, boundary setting, self-worth.",
  },
];

const SYMPTOM_QUIZ = [
  {
    symptom: "Persistent muscle knots, neck stiffness, or athletic tightness",
    matchedId: "sports-deep-tissue",
    title: "Sports & Deep Tissue Massage",
    reason: "Targeted myofascial release will break down knots and restore pain-free movement.",
  },
  {
    symptom: "Water retention, sluggish circulation, or heavy bloated legs",
    matchedId: "lymphatic",
    title: "Lymphatic Drainage Massage",
    reason: "Gentle rhythmic stimulation moves stagnant lymph, easing swelling and inflammation.",
  },
  {
    symptom: "Mental burnout, racing thoughts, or sensory exhaustion",
    matchedId: "sound-bath-reiki",
    title: "Reiki Healing & Sound Bath Therapy",
    reason: "Acoustic bowl vibrations and energetic rebalancing guide your nervous system into deep theta restoration.",
  },
  {
    symptom: "Sinus congestion, ear pressure, or tension headaches",
    matchedId: "ear-candling",
    title: "Hopi Ear Candling & Sinus Relief",
    reason: "Thermal suction and cranial lymphatic massage decompress blocked facial sinuses and ears.",
  },
  {
    symptom: "Weak core, slouching posture, or recurring spinal aches",
    matchedId: "pilates",
    title: "1-to-1 Pilates Movement Therapy",
    reason: "Tailored movement builds spinal stability and neuromuscular support to keep pain away.",
  },
  {
    symptom: "Emotional overwhelm, career burnout, or lost direction",
    matchedId: "life-coaching",
    title: "Mindset & Life Coaching",
    reason: "1-on-1 strategic coaching brings emotional clarity, self-compassion, and grounded balance.",
  },
];

const FAQS = [
  {
    question: "Where is Veronicana Holistic Therapies located?",
    answer:
      "We are based inside Myobody Balance clinic at Unit 5, Donore Road Industrial Estate, Drogheda, Co. Louth, Ireland (Eircode: A92KV6F). There is free, convenient parking directly outside the premises.",
  },
  {
    question: "Can I claim my treatments with Irish health insurance?",
    answer:
      "Yes! Ana Veronica Mejger is fully accredited and registered with ANMT (Association of Neuromuscular Therapists) and is a full member of IMTA (Irish Massage Therapists Association). Depending on your private health insurance policy (e.g. Irish Life Health, Laya, VHI), you may be eligible to claim receipt reimbursements for qualified neuromuscular and massage therapies.",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "You can book directly 24/7 through our Fresha online booking calendar, where you can see real-time availability, select your preferred therapy, and receive instant SMS/email confirmations. You may also phone or WhatsApp us directly at 089 245 8879.",
  },
  {
    question: "What is the difference between Deep Tissue and Lymphatic Massage?",
    answer:
      "Deep Tissue uses firm, localized pressure with elbows and forearms to release dense muscular knots and fascia adhesions. In contrast, Lymphatic Drainage is remarkably light and rhythmic, specifically designed to stimulate lymphatic capillaries close to the skin surface without bruising, moving excess fluid and relieving puffiness.",
  },
  {
    question: "What should I wear or expect during a Sound Bath or Reiki session?",
    answer:
      "You remain fully clothed in comfortable, loose clothing throughout the entire session. You will recline comfortably supported by pillows and warm blankets while the Tibetan singing bowls and Reiki energy work restore harmony to your nervous system.",
  },
  {
    question: "Are treatments tailored if I have specific medical conditions or injuries?",
    answer:
      "Always. Every appointment begins with a thorough consultation regarding your medical history, posture, lifestyle, and goals. Ana customizes the pressure, focus areas, and treatment sequence to honour your body's unique requirements.",
  },
];

export default function VeronicanaClient() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<TherapyCategory>("all");
  const [selectedTherapy, setSelectedTherapy] = useState<TherapyItem | null>(null);
  const [selectedQuizIndex, setSelectedQuizIndex] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Inquiry form modal state
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    treatment: "Lymphatic Drainage Massage",
    preferredTime: "Morning",
    message: "",
  });

  const filteredTherapies =
    activeCategory === "all"
      ? THERAPIES
      : THERAPIES.filter((t) => t.category === activeCategory);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1E2421] selection:bg-[#2D5A46] selection:text-white font-sans antialiased">
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="bg-[#1B3B2E] text-[#E8EDEA] text-xs py-2 px-4 border-b border-[#2A4D3E]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-[#75B798] animate-pulse"></span>
            <span className="font-medium tracking-wide">
              Drogheda Clinic Open: Myobody Balance, Unit 5 Donore Rd Industrial Estate
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs text-[#C5D5CC]">
            <span className="hidden md:inline">ANMT Registered & IMTA Member</span>
            <span className="hidden md:inline">•</span>
            <a
              href="tel:0892458879"
              className="hover:text-white transition-colors flex items-center gap-1 font-semibold text-white"
            >
              <Phone className="w-3.5 h-3.5 text-[#A3D9BE]" />
              089 245 8879
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER & LUXURY NAVIGATION */}
      <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E6E1D8] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Brand Logo - ORIGINAL LOGO ONLY, NO OTHER TEXT */}
          <Link href="#hero" className="flex items-center flex-shrink-0 group">
            <div className="relative h-14 w-44 sm:h-16 sm:w-52 transition-transform group-hover:scale-[1.02]">
              <Image
                src="/assets/veronicana/logo.png"
                alt="Veronicana Holistic Therapies"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links - ALWAYS SINGLE LINE (NO WRAPPING) */}
          <nav className="hidden xl:flex items-center gap-6 xl:gap-8 text-sm font-medium text-[#3A453F] whitespace-nowrap flex-shrink-0">
            <a href="#therapies" className="hover:text-[#1B3B2E] transition-colors whitespace-nowrap">
              Treatments
            </a>
            <a href="#about" className="hover:text-[#1B3B2E] transition-colors whitespace-nowrap">
              About Veronica
            </a>
            <a href="#quiz" className="hover:text-[#1B3B2E] transition-colors whitespace-nowrap">
              Therapy Matcher
            </a>
            <a href="#philosophy" className="hover:text-[#1B3B2E] transition-colors whitespace-nowrap">
              Our Method
            </a>
            <a href="#testimonials" className="hover:text-[#1B3B2E] transition-colors whitespace-nowrap">
              Reviews
            </a>
            <a href="#faq" className="hover:text-[#1B3B2E] transition-colors whitespace-nowrap">
              FAQ
            </a>
            <a href="#location" className="hover:text-[#1B3B2E] transition-colors whitespace-nowrap">
              Clinic & Location
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3 flex-shrink-0">
            <button
              onClick={() => {
                setFormSubmitted(false);
                setInquiryModalOpen(true);
              }}
              className="text-xs uppercase tracking-wider font-semibold px-4 py-2.5 rounded-full border border-[#2D5A46] text-[#2D5A46] hover:bg-[#2D5A46]/5 transition-colors whitespace-nowrap flex-shrink-0"
            >
              Ask a Question
            </button>
            <a
              href={FRESHA_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold px-5 py-2.5 rounded-full bg-[#2D5A46] text-white hover:bg-[#1B3B2E] shadow-sm hover:shadow-md transition-all whitespace-nowrap flex-shrink-0"
            >
              <Calendar className="w-3.5 h-3.5" />
              Book on Fresha
            </a>
          </div>

          {/* Mobile Menu Button - shows on screen width < xl */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-[#1B3B2E] hover:bg-[#EBE6DE] transition-colors flex-shrink-0"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#FAF8F5] border-b border-[#E6E1D8] px-6 py-6 shadow-xl animate-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col gap-4 text-base font-medium text-[#2A3630]">
              <a
                href="#therapies"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 border-b border-[#ECE7DF]"
              >
                Treatments & Services
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 border-b border-[#ECE7DF]"
              >
                About Ana Veronica Mejger
              </a>
              <a
                href="#quiz"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 border-b border-[#ECE7DF]"
              >
                Therapy Recommender
              </a>
              <a
                href="#philosophy"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 border-b border-[#ECE7DF]"
              >
                The Veronicana Experience
              </a>
              <a
                href="#testimonials"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 border-b border-[#ECE7DF]"
              >
                Client Feedback
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 border-b border-[#ECE7DF]"
              >
                Frequently Asked Questions
              </a>
              <a
                href="#location"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 border-b border-[#ECE7DF]"
              >
                Location & Contact
              </a>
              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={FRESHA_BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-3 rounded-full bg-[#2D5A46] text-white font-semibold text-sm shadow-sm"
                >
                  Book Instant Appointment on Fresha
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setFormSubmitted(false);
                    setInquiryModalOpen(true);
                  }}
                  className="w-full text-center py-3 rounded-full border border-[#2D5A46] text-[#2D5A46] font-semibold text-sm"
                >
                  Send Direct Inquiry
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* 3. HERO SECTION */}
      <section id="hero" className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden">
        {/* Subtle decorative background organic glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#E8EFEA] rounded-full blur-3xl opacity-60 -z-10 pointer-events-none"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#F2ECE1] rounded-full blur-3xl opacity-70 -z-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Value Prop & Editorial Copy */}
            <div className="lg:col-span-7 flex flex-col items-start">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF2ED] text-[#214D3A] text-xs font-semibold tracking-wide border border-[#CDE0D4] mb-6">
                <Sparkles className="w-3.5 h-3.5 text-[#2D5A46]" />
                <span>ITEC-Qualified Therapist & Instructor • Drogheda, Co. Louth</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#14261E] tracking-tight leading-[1.15] mb-6">
                Nurturing body, mind & soul into{" "}
                <span className="italic font-normal text-[#2D5A46] underline decoration-[#C68B59]/40 decoration-wavy">
                  harmonious wholeness.
                </span>
              </h1>

              {/* Subtitle with Real Original Site Values */}
              <p className="text-lg sm:text-xl text-[#4A5750] leading-relaxed mb-8 max-w-2xl font-light">
                Discover personalized, unhurried holistic therapies in Drogheda. From clinical deep tissue
                and lymphatic drainage to Tibetan sound baths and 1:1 Pilates, we treat the{" "}
                <strong className="font-semibold text-[#1B3B2E]">whole person</strong>—restoring vitality,
                easing tension, and elevating your inner calm.
              </p>

              {/* CTA Group */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
                <a
                  href={FRESHA_BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#2D5A46] text-white font-semibold text-base shadow-lg shadow-[#2D5A46]/20 hover:bg-[#1B3B2E] hover:scale-[1.01] transition-all"
                >
                  <Calendar className="w-5 h-5 text-[#A3D9BE]" />
                  <span>Book Your Visit on Fresha</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>

                <a
                  href="#therapies"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white text-[#2D5A46] font-semibold text-base border border-[#D5DDD7] hover:bg-[#F2ECE1] transition-colors shadow-sm"
                >
                  <span>Explore All Services</span>
                  <ChevronDown className="w-4 h-4" />
                </a>
              </div>

              {/* Trust Badges Strip */}
              <div className="pt-6 border-t border-[#E8E2D7] w-full grid grid-cols-2 sm:grid-cols-4 gap-4 items-center">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#2D5A46]" />
                  <span className="text-xs font-semibold text-[#324038]">
                    ANMT Registered
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#2D5A46]" />
                  <span className="text-xs font-semibold text-[#324038]">
                    IMTA Full Member
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-[#E9AA38] text-[#E9AA38]" />
                  <span className="text-xs font-semibold text-[#324038]">
                    5.0 ★ Client Rating
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#2D5A46]" />
                  <span className="text-xs font-semibold text-[#324038]">
                    Myobody Balance Clinic
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: High-End Layered Hero Visuals */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Feature Portrait Frame */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-[#EAE4D9]">
                  <Image
                    src="/assets/veronicana/veronica-portrait.jpg"
                    alt="Ana Veronica Mejger - Holistic Therapist & Instructor"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                  {/* Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14261E]/80 via-transparent to-transparent"></div>

                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="inline-block text-[11px] uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded-full bg-[#2D5A46] text-[#E8EDEA] mb-1.5">
                      Lead Therapist & Founder
                    </span>
                    <h3 className="text-xl font-serif font-bold text-white leading-tight">
                      Ana Veronica Mejger
                    </h3>
                    <p className="text-xs text-[#E1EAE5] mt-1 font-light">
                      ITEC Qualified • Sports Massage Lead Teacher • Mindset Coach
                    </p>
                  </div>
                </div>

                {/* Floating Accreditation Badge */}
                <div className="absolute -top-5 -right-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-[#E6E1D8] flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#EAF2ED] flex items-center justify-center text-[#2D5A46] font-bold text-xs">
                    ✓
                  </div>
                  <div>
                    <div className="text-[10px] text-[#697870] font-medium leading-none">
                      Accreditation
                    </div>
                    <div className="text-xs font-bold text-[#1B3B2E] leading-tight mt-0.5">
                      IMTA & ANMT Certified
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. KEY METRICS STRIP */}
      <section className="bg-white border-y border-[#ECE7DF] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-[#EBE6DE]">
            <div className="pt-4 lg:pt-0">
              <div className="text-3xl lg:text-4xl font-serif font-bold text-[#2D5A46]">
                10+ Years
              </div>
              <div className="text-xs uppercase tracking-wider text-[#68776F] font-semibold mt-1">
                Therapeutic Excellence
              </div>
            </div>
            <div className="pt-4 lg:pt-0">
              <div className="text-3xl lg:text-4xl font-serif font-bold text-[#2D5A46]">
                1,500+
              </div>
              <div className="text-xs uppercase tracking-wider text-[#68776F] font-semibold mt-1">
                Sessions & Consultations
              </div>
            </div>
            <div className="pt-4 lg:pt-0">
              <div className="text-3xl lg:text-4xl font-serif font-bold text-[#2D5A46]">
                100%
              </div>
              <div className="text-xs uppercase tracking-wider text-[#68776F] font-semibold mt-1">
                Tailored 1-on-1 Focus
              </div>
            </div>
            <div className="pt-4 lg:pt-0">
              <div className="text-3xl lg:text-4xl font-serif font-bold text-[#2D5A46]">
                5.0 / 5
              </div>
              <div className="text-xs uppercase tracking-wider text-[#68776F] font-semibold mt-1">
                Client Satisfaction on Fresha
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE THERAPY MENU (CATEGORIZED TABS) */}
      <section id="therapies" className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest font-bold text-[#2D5A46] bg-[#EAF2ED] px-3.5 py-1.5 rounded-full inline-block mb-3">
            Therapeutic Offerings
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#14261E] tracking-tight mb-4">
            Customized Treatments for Your Body, Energy & Movement
          </h2>
          <p className="text-base sm:text-lg text-[#5A6760] font-light">
            Every session begins with personalized intake and unhurried clinical care, ensuring that
            physical pain, psychological stress, and postural habits are fully addressed.
          </p>

          {/* Category Tabs */}
          <div className="mt-8 inline-flex p-1.5 bg-[#EAE5DC] rounded-full gap-1 flex-wrap justify-center">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                activeCategory === "all"
                  ? "bg-[#2D5A46] text-white shadow-sm"
                  : "text-[#4A5750] hover:text-[#14261E]"
              }`}
            >
              All Treatments ({THERAPIES.length})
            </button>
            <button
              onClick={() => setActiveCategory("massage")}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                activeCategory === "massage"
                  ? "bg-[#2D5A46] text-white shadow-sm"
                  : "text-[#4A5750] hover:text-[#14261E]"
              }`}
            >
              Massage & Neuromuscular
            </button>
            <button
              onClick={() => setActiveCategory("energy")}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                activeCategory === "energy"
                  ? "bg-[#2D5A46] text-white shadow-sm"
                  : "text-[#4A5750] hover:text-[#14261E]"
              }`}
            >
              Energy, Sound & Sinus
            </button>
            <button
              onClick={() => setActiveCategory("movement")}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                activeCategory === "movement"
                  ? "bg-[#2D5A46] text-white shadow-sm"
                  : "text-[#4A5750] hover:text-[#14261E]"
              }`}
            >
              Pilates & Mindset
            </button>
          </div>
        </div>

        {/* Therapy Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTherapies.map((therapy) => (
            <div
              key={therapy.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#E6E0D6] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Card Image */}
              <div className="relative h-56 w-full overflow-hidden bg-[#ECE7DF]">
                <Image
                  src={therapy.image}
                  alt={therapy.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] font-bold text-[#2D5A46] tracking-wide shadow-sm">
                  {therapy.tag}
                </div>
                <div className="absolute bottom-4 right-4 bg-[#14261E]/80 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] font-medium text-white flex items-center gap-1.5">
                  <Clock className="w-3 h-3 text-[#A3D9BE]" />
                  <span>{therapy.duration}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-serif font-bold text-[#14261E] mb-2 group-hover:text-[#2D5A46] transition-colors">
                    {therapy.title}
                  </h3>
                  <p className="text-sm text-[#526059] leading-relaxed mb-4 line-clamp-3">
                    {therapy.shortDesc}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-1.5 mb-6 text-xs text-[#3C4A42]">
                    {therapy.benefits.slice(0, 3).map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#2D5A46] flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 border-t border-[#F0EBE3] flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedTherapy(therapy)}
                    className="text-xs font-semibold text-[#2D5A46] hover:text-[#1B3B2E] transition-colors flex items-center gap-1"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>

                  <a
                    href={FRESHA_BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs uppercase tracking-wider font-bold px-4 py-2 rounded-full bg-[#2D5A46] text-white hover:bg-[#1B3B2E] transition-colors"
                  >
                    Book on Fresha
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. INTERACTIVE THERAPY RECOMMENDER (QUIZ WIDGET) */}
      <section id="quiz" className="bg-[#1B3B2E] text-white py-20 relative overflow-hidden">
        {/* Subtle background ring */}
        <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full border border-[#2D5A46]/40 pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#A3D9BE] bg-[#2A4D3E] px-3.5 py-1.5 rounded-full inline-block mb-3">
              Interactive Diagnostic Tool
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-3">
              Not sure which treatment your body needs?
            </h2>
            <p className="text-sm sm:text-base text-[#C2D6CC] font-light">
              Select the primary symptom you are experiencing today to see our recommended therapeutic pathway.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#142C22] p-6 sm:p-8 rounded-3xl border border-[#2D5A46]/60 shadow-2xl">
            {/* Symptom selector list */}
            <div className="lg:col-span-6 space-y-2.5">
              <label className="text-xs uppercase tracking-wider font-bold text-[#9BBBAA] block mb-2">
                1. Select your primary physical or emotional priority:
              </label>
              {SYMPTOM_QUIZ.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedQuizIndex(index)}
                  className={`w-full text-left p-3.5 rounded-2xl text-xs sm:text-sm font-medium transition-all flex items-center justify-between gap-3 ${
                    selectedQuizIndex === index
                      ? "bg-[#2D5A46] text-white font-semibold shadow-md ring-1 ring-[#A3D9BE]/50"
                      : "bg-[#1B3B2E]/70 text-[#C2D6CC] hover:bg-[#1B3B2E] hover:text-white"
                  }`}
                >
                  <span>{item.symptom}</span>
                  <ChevronDown
                    className={`w-4 h-4 flex-shrink-0 transition-transform ${
                      selectedQuizIndex === index ? "-rotate-90 text-[#A3D9BE]" : "text-[#557B69]"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Recommendation Result Card */}
            <div className="lg:col-span-6 bg-[#FAF8F5] text-[#1E2421] p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col justify-between min-h-[320px]">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#2D5A46] bg-[#EAF2ED] px-3 py-1 rounded-full inline-block mb-3">
                  Recommended Treatment Plan
                </span>
                <h3 className="text-2xl font-serif font-bold text-[#14261E] mb-3">
                  {SYMPTOM_QUIZ[selectedQuizIndex].title}
                </h3>
                <p className="text-sm text-[#4E5C54] leading-relaxed mb-4">
                  {SYMPTOM_QUIZ[selectedQuizIndex].reason}
                </p>
                <div className="p-3.5 bg-[#F2ECE1] rounded-xl text-xs text-[#5C5346] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2D5A46] flex-shrink-0" />
                  <span>Available at Myobody Balance clinic or bookable directly on Fresha.</span>
                </div>
              </div>

              <div className="pt-6 border-t border-[#E8E2D7] mt-6 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={FRESHA_BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto text-center px-6 py-3 rounded-full bg-[#2D5A46] text-white text-xs uppercase tracking-wider font-bold hover:bg-[#1B3B2E] transition-colors"
                >
                  Book This Treatment
                </a>
                <button
                  onClick={() => {
                    const found = THERAPIES.find(
                      (t) => t.id === SYMPTOM_QUIZ[selectedQuizIndex].matchedId
                    );
                    if (found) setSelectedTherapy(found);
                  }}
                  className="w-full sm:w-auto text-center px-4 py-3 rounded-full border border-[#D5DDD7] text-xs font-semibold text-[#2D5A46] hover:bg-white transition-colors"
                >
                  Read Treatment Protocol
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. ABOUT ANA VERONICA MEJGER & THE PHILOSOPHY */}
      <section id="about" className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image & Credential Stack */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#E6E1D8] aspect-[4/5] bg-white">
              <Image
                src="/assets/veronicana/atmosphere-hero.jpg"
                alt="Veronicana Holistic Clinic Atmosphere"
                fill
                className="object-cover"
              />
            </div>

            {/* Overlapping small portrait */}
            <div className="absolute -bottom-8 -right-6 w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden border-4 border-white shadow-xl bg-white">
              <Image
                src="/assets/veronicana/veronica-portrait.jpg"
                alt="Ana Veronica Mejger portrait"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Narrative & Credentials */}
          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-widest font-bold text-[#2D5A46] bg-[#EAF2ED] px-3.5 py-1.5 rounded-full inline-block mb-3">
              The Heart Behind Veronicana
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#14261E] tracking-tight mb-6">
              "We believe taking care of your soul, mind and body unites every part of you into a whole."
            </h2>

            <div className="space-y-4 text-base text-[#4E5C54] font-light leading-relaxed mb-8">
              <p>
                At <strong className="font-semibold text-[#14261E]">Veronicana Holistic Therapies</strong>,
                we depart from hurried, generic appointments. Founded by{" "}
                <strong className="font-semibold text-[#14261E]">Ana Veronica Mejger</strong> in Drogheda,
                our clinic is anchored in the conviction that true healing requires time, empathy, and
                unbroken attention.
              </p>
              <p>
                As an <strong className="font-semibold text-[#14261E]">ITEC-qualified therapist</strong>,
                full member of the <strong className="font-semibold text-[#14261E]">IMTA</strong>, and
                registered with the <strong className="font-semibold text-[#14261E]">ANMT</strong>, Ana also
                serves as a lead teacher for Level 3 sports massage therapy. Her extensive clinical
                mastery across anatomy, physiology, vibrational sound healing, and movement therapy ensures
                every treatment addresses the root cause rather than transient symptoms.
              </p>
            </div>

            {/* Accreditation Badges Card */}
            <div className="bg-white p-6 rounded-2xl border border-[#E6E1D8] shadow-sm mb-8">
              <h4 className="text-xs uppercase tracking-wider font-bold text-[#14261E] mb-4">
                Professional Accreditations & Memberships
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EAF2ED] flex items-center justify-center text-[#2D5A46] font-bold text-sm">
                    ANMT
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#14261E]">ANMT Registered</div>
                    <div className="text-[11px] text-[#6E7B73]">Association of Neuromuscular Therapists</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EAF2ED] flex items-center justify-center text-[#2D5A46] font-bold text-sm">
                    IMTA
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#14261E]">IMTA Full Member</div>
                    <div className="text-[11px] text-[#6E7B73]">Irish Massage Therapists Association</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EAF2ED] flex items-center justify-center text-[#2D5A46] font-bold text-sm">
                    ITEC
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#14261E]">ITEC Certified</div>
                    <div className="text-[11px] text-[#6E7B73]">International Therapy Examination Council</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EAF2ED] flex items-center justify-center text-[#2D5A46] font-bold text-sm">
                    EDU
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#14261E]">Sports Massage Lead Teacher</div>
                    <div className="text-[11px] text-[#6E7B73]">Level 3 Neuromuscular Educator</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a
                href={FRESHA_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-[#2D5A46] text-white text-xs uppercase tracking-wider font-bold hover:bg-[#1B3B2E] transition-colors"
              >
                Schedule with Ana Veronica
              </a>
              <a
                href="https://www.linkedin.com/in/ana-veronica-mejger-b65251210/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#4A5750] hover:text-[#0077B5] transition-colors"
              >
                <Linkedin className="w-4 h-4 text-[#0077B5]" />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 8. THE 4-STEP CLIENT JOURNEY */}
      <section id="philosophy" className="bg-[#F3EFE8] py-20 md:py-28 border-y border-[#E6E1D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-bold text-[#2D5A46] bg-white px-3.5 py-1.5 rounded-full inline-block mb-3 border border-[#DCD6CA]">
              The Veronicana Protocol
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#14261E] tracking-tight mb-4">
              A Four-Stage Journey to Lasting Vitality
            </h2>
            <p className="text-base text-[#526059] font-light">
              We never rush. Here is what you can anticipate from your first arrival at our Drogheda sanctuary.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-7 rounded-3xl border border-[#E6E0D6] shadow-sm relative">
              <span className="text-4xl font-serif font-bold text-[#D3C7B5] block mb-4">01</span>
              <h3 className="text-lg font-serif font-bold text-[#14261E] mb-2">
                Postural & Lifestyle Intake
              </h3>
              <p className="text-xs sm:text-sm text-[#5C6A62] leading-relaxed">
                We sit down to discuss your daily physical demands, pain triggers, emotional stress levels,
                and previous injuries. No cookie-cutter assumptions.
              </p>
            </div>

            <div className="bg-white p-7 rounded-3xl border border-[#E6E0D6] shadow-sm relative">
              <span className="text-4xl font-serif font-bold text-[#D3C7B5] block mb-4">02</span>
              <h3 className="text-lg font-serif font-bold text-[#14261E] mb-2">
                Customized Protocol
              </h3>
              <p className="text-xs sm:text-sm text-[#5C6A62] leading-relaxed">
                Ana tailors the ideal modality blend—whether that combines deep tissue release with lymphatic
                drainage, or Hopi candling with cranial soothing.
              </p>
            </div>

            <div className="bg-white p-7 rounded-3xl border border-[#E6E0D6] shadow-sm relative">
              <span className="text-4xl font-serif font-bold text-[#D3C7B5] block mb-4">03</span>
              <h3 className="text-lg font-serif font-bold text-[#14261E] mb-2">
                Hands-On Release & Reset
              </h3>
              <p className="text-xs sm:text-sm text-[#5C6A62] leading-relaxed">
                Experience deliberate, focused neuromuscular release in a serene, heated, private treatment
                room designed for total nervous system decompression.
              </p>
            </div>

            <div className="bg-white p-7 rounded-3xl border border-[#E6E0D6] shadow-sm relative">
              <span className="text-4xl font-serif font-bold text-[#D3C7B5] block mb-4">04</span>
              <h3 className="text-lg font-serif font-bold text-[#14261E] mb-2">
                Aftercare & Movement Guidance
              </h3>
              <p className="text-xs sm:text-sm text-[#5C6A62] leading-relaxed">
                You leave with practical postural cues, hydration guidance, and ergonomic or Pilates
                recommendations to ensure pain relief endures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. AUTHENTIC CLIENT TESTIMONIALS */}
      <section id="testimonials" className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-[#2D5A46] bg-[#EAF2ED] px-3.5 py-1.5 rounded-full inline-block mb-3">
            Client Experiences
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#14261E] tracking-tight mb-3">
            Trusted by Patients Across Drogheda & Beyond
          </h2>
          <p className="text-sm text-[#5C6A62] font-light">
            Verified feedback from appointments booked through Fresha and our Drogheda clinic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-[#E6E1D8] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex gap-1 text-[#E9AA38] mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-sm text-[#3E4D45] leading-relaxed italic mb-6">
                "Veronica is wonderfully knowledgeable and passionate about what she does. Her deep tissue
                massage released shoulder knots I had struggled with for months. She explained every step,
                making me feel completely at ease."
              </p>
            </div>
            <div className="pt-4 border-t border-[#F0EBE3] flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#EAF2ED] text-[#2D5A46] font-bold text-xs flex items-center justify-center">
                SM
              </div>
              <div>
                <div className="text-xs font-bold text-[#14261E]">Sarah M.</div>
                <div className="text-[10px] text-[#6E7B73]">Drogheda • Deep Tissue Massage</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-[#E6E1D8] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex gap-1 text-[#E9AA38] mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-sm text-[#3E4D45] leading-relaxed italic mb-6">
                "The Sound Bath and Reiki session was pure magic. I walked in feeling overwhelmed with work
                stress and left feeling completely refreshed, calm, and grounded. Veronica has such gentle,
                healing energy."
              </p>
            </div>
            <div className="pt-4 border-t border-[#F0EBE3] flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#EAF2ED] text-[#2D5A46] font-bold text-xs flex items-center justify-center">
                LK
              </div>
              <div>
                <div className="text-xs font-bold text-[#14261E]">Liam K.</div>
                <div className="text-[10px] text-[#6E7B73]">Louth • Sound Bath & Reiki</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-[#E6E1D8] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex gap-1 text-[#E9AA38] mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-sm text-[#3E4D45] leading-relaxed italic mb-6">
                "Her lymphatic drainage massage is extraordinary. After just one session, my heavy legs and
                fluid retention disappeared. You can tell she has years of teaching and medical experience.
                Highly recommend!"
              </p>
            </div>
            <div className="pt-4 border-t border-[#F0EBE3] flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#EAF2ED] text-[#2D5A46] font-bold text-xs flex items-center justify-center">
                ED
              </div>
              <div>
                <div className="text-xs font-bold text-[#14261E]">Emma D.</div>
                <div className="text-[10px] text-[#6E7B73]">Bettystown • Lymphatic Drainage</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FREQUENTLY ASKED QUESTIONS */}
      <section id="faq" className="py-20 bg-white border-t border-[#ECE7DF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs uppercase tracking-widest font-bold text-[#2D5A46] bg-[#EAF2ED] px-3.5 py-1.5 rounded-full inline-block mb-3">
              Common Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#14261E] tracking-tight mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-[#5C6A62]">
              Everything you need to know prior to booking your holistic session.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-[#E6E1D8] overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full text-left p-5 sm:p-6 bg-[#FAF8F5] hover:bg-[#F5F1E9] flex items-center justify-between gap-4 transition-colors"
                  >
                    <span className="font-serif font-bold text-base sm:text-lg text-[#14261E]">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#2D5A46] flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="p-5 sm:p-6 bg-white border-t border-[#E6E1D8] text-sm text-[#4E5C54] leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 11. LOCATION, CLINIC DETAILS & CONTACT FORM */}
      <section id="location" className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Clinic Location Details */}
          <div className="lg:col-span-5 bg-[#1B3B2E] text-white p-8 sm:p-10 rounded-3xl shadow-xl flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-[#A3D9BE] bg-[#2A4D3E] px-3.5 py-1.5 rounded-full inline-block mb-4">
                Visit Our Clinic
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-6">
                Veronicana at Myobody Balance
              </h3>

              <div className="space-y-6 text-sm text-[#D3E0D8]">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-[#A3D9BE] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-semibold">Address:</strong>
                    <span>
                      Unit 5, Donore Road Industrial Estate, Drogheda, Co. Louth, Ireland
                    </span>
                    <div className="text-xs text-[#A3D9BE] mt-1 font-mono font-bold">
                      Eircode: A92KV6F
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-[#A3D9BE] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-semibold">Phone / WhatsApp:</strong>
                    <a href="tel:0892458879" className="hover:text-white transition-colors">
                      089 245 8879
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-[#A3D9BE] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-semibold">Direct Email:</strong>
                    <a
                      href="mailto:info@veronicanaholistictherapies.com"
                      className="hover:text-white transition-colors"
                    >
                      info@veronicanaholistictherapies.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-[#A3D9BE] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-semibold">Hours:</strong>
                    <span>Monday - Saturday by Appointment</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-[#2A4D3E] mt-8 flex flex-col gap-3">
              <a
                href={FRESHA_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3.5 rounded-full bg-[#A3D9BE] text-[#1B3B2E] font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors shadow-sm"
              >
                Book Appointment on Fresha
              </a>
              <div className="flex items-center justify-center gap-4 pt-2 text-[#C2D6CC]">
                <a
                  href="https://www.instagram.com/veronicanacoaching/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors p-1"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://www.facebook.com/veronicanaholistictherapies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors p-1"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCZmALDv0hrAXCqlUoyq_zzw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors p-1"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ana-veronica-mejger-b65251210/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors p-1"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Direct Consultation Message Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-[#E6E1D8] shadow-sm">
            <span className="text-xs uppercase tracking-widest font-bold text-[#2D5A46] bg-[#EAF2ED] px-3.5 py-1.5 rounded-full inline-block mb-3">
              Inquire Directly
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#14261E] mb-2">
              Send a Question or Booking Request
            </h3>
            <p className="text-sm text-[#5C6A62] font-light mb-8">
              Have specific questions about treatment suitability, medical history, or group sessions?
              Ana will personally respond within 24 hours.
            </p>

            {formSubmitted ? (
              <div className="p-8 rounded-2xl bg-[#EAF2ED] border border-[#CDE0D4] text-center">
                <div className="w-12 h-12 rounded-full bg-[#2D5A46] text-white flex items-center justify-center mx-auto mb-3">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-serif font-bold text-[#14261E] mb-1">
                  Thank You, Your Message Is Received
                </h4>
                <p className="text-xs text-[#4A5750] max-w-md mx-auto mb-4">
                  Ana Veronica will review your details and get back to you shortly via your preferred
                  contact method.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="text-xs font-semibold text-[#2D5A46] underline"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#2F3C34] mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Maeve O'Connor"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#D5DDD7] bg-[#FAF8F5] text-sm focus:outline-none focus:ring-2 focus:ring-[#2D5A46]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#2F3C34] mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 089 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#D5DDD7] bg-[#FAF8F5] text-sm focus:outline-none focus:ring-2 focus:ring-[#2D5A46]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#2F3C34] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. maeve@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#D5DDD7] bg-[#FAF8F5] text-sm focus:outline-none focus:ring-2 focus:ring-[#2D5A46]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#2F3C34] mb-1.5">
                      Therapy of Interest
                    </label>
                    <select
                      value={formData.treatment}
                      onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#D5DDD7] bg-[#FAF8F5] text-sm focus:outline-none focus:ring-2 focus:ring-[#2D5A46]"
                    >
                      {THERAPIES.map((t) => (
                        <option key={t.id} value={t.title}>
                          {t.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2F3C34] mb-1.5">
                    Your Message, Symptoms or Ideal Times
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us a little about what you are seeking relief for, preferred days, or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#D5DDD7] bg-[#FAF8F5] text-sm focus:outline-none focus:ring-2 focus:ring-[#2D5A46]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#2D5A46] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#1B3B2E] transition-colors shadow-sm"
                >
                  Send Message to Ana Veronica
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 12. DESIGNER CREDITS & UX RATIONALE CALLOUT */}
      <section className="bg-[#EAE4D9] border-t border-[#DCD6CA] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2D5A46]"></span>
            <p className="text-xs text-[#526059]">
              <strong className="text-[#14261E]">UX Redesign Concept</strong> created for Ana Veronica
              Mejger • Veronicana Holistic Therapies. Live preview on{" "}
              <span className="font-semibold text-[#2D5A46]">miskathossain.net</span>.
            </p>
          </div>
          <div className="text-xs text-[#6B7971]">
            Redesigned & Developed by{" "}
            <a
              href="https://miskathossain.net"
              className="font-bold text-[#14261E] hover:text-[#2D5A46] underline decoration-[#2D5A46]"
            >
              Miskat Hossain
            </a>{" "}
            • 3D & Digital Experience Designer
          </div>
        </div>
      </section>

      {/* 13. FOOTER */}
      <footer className="bg-[#14261E] text-[#CCD9D1] py-14 border-t border-[#23382D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative h-12 w-40 bg-white/95 rounded-xl px-2 py-1 shadow-sm">
                  <Image
                    src="/assets/veronicana/logo.png"
                    alt="Veronicana Holistic Therapies"
                    fill
                    className="object-contain p-1"
                  />
                </div>
              </div>
              <p className="text-xs text-[#9BB0A4] leading-relaxed max-w-sm mb-4">
                Dedicated to restoring the harmony of soul, mind, and body through authentic clinical
                massage, lymphatic wellness, vibration sound healing, and personalized movement in
                Drogheda, Co. Louth.
              </p>
              <div className="text-xs text-[#7F9488]">
                ANMT Registered • IMTA Full Member • ITEC Qualified
              </div>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-wider font-bold text-white mb-4">
                Quick Navigation
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="#therapies" className="hover:text-white transition-colors">
                    All Therapies
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    About Ana Veronica
                  </a>
                </li>
                <li>
                  <a href="#quiz" className="hover:text-white transition-colors">
                    Therapy Recommender
                  </a>
                </li>
                <li>
                  <a href="#philosophy" className="hover:text-white transition-colors">
                    Our 4-Stage Method
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-white transition-colors">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#location" className="hover:text-white transition-colors">
                    Location & Directions
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-wider font-bold text-white mb-4">
                Clinic Location
              </h4>
              <address className="not-italic text-xs text-[#9BB0A4] space-y-1.5 leading-relaxed">
                <div>MYOBODY Balance Clinic</div>
                <div>Unit 5 Donore Road Industrial Estate</div>
                <div>Drogheda, Co. Louth, Ireland</div>
                <div className="text-white font-mono font-bold">A92KV6F</div>
                <div className="pt-2">
                  <a href="tel:0892458879" className="text-white hover:text-[#A3D9BE] block">
                    Ph: 089 245 8879
                  </a>
                  <a
                    href="mailto:info@veronicanaholistictherapies.com"
                    className="text-white hover:text-[#A3D9BE] block break-all"
                  >
                    info@veronicanaholistictherapies.com
                  </a>
                </div>
              </address>
            </div>
          </div>

          <div className="pt-8 border-t border-[#23382D] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6F8276]">
            <div>
              © {new Date().getFullYear()} Veronicana Holistic Therapies. All rights reserved.
            </div>
            <div>
              Bookings managed securely via{" "}
              <a
                href={FRESHA_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline hover:text-[#A3D9BE]"
              >
                Fresha
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* 14. DETAIL MODAL FOR SELECTED THERAPY */}
      {selectedTherapy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#FAF8F5] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#E6E1D8] shadow-2xl relative">
            {/* Close Button */}
            <button
              onClick={() => setSelectedTherapy(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 text-[#14261E] hover:bg-white flex items-center justify-center shadow-md transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-64 w-full bg-[#EAE4D9]">
              <Image
                src={selectedTherapy.image}
                alt={selectedTherapy.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14261E]/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-5 left-6 right-6 text-white">
                <span className="text-[11px] uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-[#2D5A46] text-white inline-block mb-1.5">
                  {selectedTherapy.tag}
                </span>
                <h3 className="text-2xl font-serif font-bold text-white">
                  {selectedTherapy.title}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="flex items-center gap-4 text-xs text-[#526059] pb-4 border-b border-[#ECE7DF]">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#2D5A46]" />
                  <span>Duration: <strong>{selectedTherapy.duration}</strong></span>
                </div>
                <div>•</div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#2D5A46]" />
                  <span>Location: <strong>Myobody Balance, Drogheda</strong></span>
                </div>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-[#14261E] mb-2">
                  Clinical Overview
                </h4>
                <p className="text-sm text-[#4A5750] leading-relaxed">
                  {selectedTherapy.fullDesc}
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-[#14261E] mb-2.5">
                  Key Therapeutic Benefits
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#3C4A42]">
                  {selectedTherapy.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 bg-white p-2.5 rounded-xl border border-[#E6E1D8]">
                      <Check className="w-3.5 h-3.5 text-[#2D5A46] flex-shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-[#F2ECE1] rounded-2xl text-xs text-[#524B40]">
                <strong>Ideal For:</strong> {selectedTherapy.idealFor}
              </div>

              <div className="pt-4 border-t border-[#ECE7DF] flex flex-col sm:flex-row items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedTherapy(null)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full border border-[#D5DDD7] text-xs font-semibold text-[#4A5750] hover:bg-white transition-colors"
                >
                  Close Window
                </button>
                <a
                  href={FRESHA_BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#2D5A46] text-white text-xs uppercase tracking-wider font-bold hover:bg-[#1B3B2E] transition-colors text-center shadow-md"
                >
                  Book Session on Fresha
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 15. INQUIRY POPUP MODAL */}
      {inquiryModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#FAF8F5] rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-[#E6E1D8] shadow-2xl relative">
            <button
              onClick={() => setInquiryModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white text-[#14261E] hover:bg-[#F0EBE3] flex items-center justify-center shadow-sm transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {formSubmitted ? (
              <div className="text-center py-6">
                <div className="w-12 h-12 rounded-full bg-[#2D5A46] text-white flex items-center justify-center mx-auto mb-3">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-serif font-bold text-[#14261E] mb-1">
                  Inquiry Sent Successfully
                </h4>
                <p className="text-xs text-[#4A5750] max-w-sm mx-auto mb-4">
                  Ana Veronica has received your inquiry and will reach out to you within 24 hours.
                </p>
                <button
                  onClick={() => setInquiryModalOpen(false)}
                  className="px-6 py-2.5 rounded-full bg-[#2D5A46] text-white text-xs font-semibold"
                >
                  Close
                </button>
              </div>
            ) : (
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#2D5A46] bg-[#EAF2ED] px-3 py-1 rounded-full inline-block mb-2">
                  Direct Contact
                </span>
                <h3 className="text-2xl font-serif font-bold text-[#14261E] mb-1">
                  Ask Ana Veronica
                </h3>
                <p className="text-xs text-[#5C6A62] mb-6">
                  Inquire about treatment options, appointments, or pricing.
                </p>

                <form onSubmit={handleFormSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-[#2F3C34] mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5DDD7] bg-white text-xs focus:outline-none focus:ring-2 focus:ring-[#2D5A46]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#2F3C34] mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="089 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5DDD7] bg-white text-xs focus:outline-none focus:ring-2 focus:ring-[#2D5A46]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#2F3C34] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5DDD7] bg-white text-xs focus:outline-none focus:ring-2 focus:ring-[#2D5A46]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#2F3C34] mb-1">
                      Message / Question
                    </label>
                    <textarea
                      rows={3}
                      placeholder="What would you like to know?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5DDD7] bg-white text-xs focus:outline-none focus:ring-2 focus:ring-[#2D5A46]"
                    ></textarea>
                  </div>

                  <div className="pt-2 flex items-center justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setInquiryModalOpen(false)}
                      className="px-4 py-2 text-xs font-semibold text-[#5C6A62]"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-full bg-[#2D5A46] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#1B3B2E]"
                    >
                      Submit Inquiry
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 16. STICKY BOTTOM FLOATING MOBILE CTA */}
      <div className="sm:hidden fixed bottom-4 left-4 right-4 z-30">
        <a
          href={FRESHA_BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3.5 px-6 rounded-full bg-[#2D5A46] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl hover:bg-[#1B3B2E] transition-all"
        >
          <Calendar className="w-4 h-4 text-[#A3D9BE]" />
          <span>Book Appointment on Fresha</span>
        </a>
      </div>
    </div>
  );
}
