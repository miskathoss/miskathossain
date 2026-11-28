export interface CaseStudyData {
  challenge: string;
  thinking: string;
  direction: string;
  identityDetails: string[];
  webDetails: string[];
  result: string;
  deliverables: string[];
  metrics?: { label: string; value: string }[];
}

export interface Project {
  id: string;
  slug: string;
  number: string;
  featured?: boolean;
  liveUrl?: string;
  title: string;
  category: string;
  client: string;
  tagline: string;
  description: string;
  image: string;
  fullImage?: string;
  gallery?: string[];
  tags: string[];
  year: string;
  caseStudy: CaseStudyData;
}

export const projects: Project[] = [
  {
    id: "carolyn-greiner",
    slug: "carolyn-greiner",
    number: "01",
    title: "Carolyn Greiner",
    category: "Learning Systems & Web Experience",
    client: "Carolyn Greiner",
    tagline: "Learning Strategies That Improve Workforce Performance.",
    description:
      "A sophisticated personal brand and high-converting digital platform built for an enterprise Learning & Development consultant helping organizations design scalable learning systems, lead change, and deliver measurable outcomes.",
    image: "/assets/projects/carolyn-greiner.png",
    fullImage: "/assets/projects/carolyn-greiner-full.png",
    tags: ["Web Design", "Brand Identity", "L&D Consulting", "UI/UX"],
    year: "2026",
    caseStudy: {
      challenge:
        "Senior corporate learning executives needed clear proof of institutional capability and measurable business ROI. Carolyn Greiner brings over 15 years of elite expertise designing workforce learning frameworks, but her previous presence lacked the executive gravitas needed to command multi-stage enterprise advisory contracts.",
      thinking:
        "I positioned Carolyn as an indispensable strategic partner aligned directly to high-level organizational goals. The digital experience was architected around four core pillars: 15+ Years in L&D, Strategic Partner Alignment, Measurable Impact, and End-to-End Implementation.",
      direction:
        "Deep obsidian carbon canvas contrasted with warm executive amber-gold accents and clean editorial typography, projecting executive authority, intellectual warmth, and pedagogical precision.",
      identityDetails: [
        "Monogram 'CG' wordmark balancing classical geometric symmetry with modern executive elegance",
        "Bespoke typography hierarchy tailored for enterprise proposal downloads and client pitch summaries",
        "Four-pillar visual credential framework communicating instant credibility above the fold",
      ],
      webDetails: [
        "High-impact dual call-to-actions ('Learn More' and 'View My Work') driving qualified corporate leads",
        "Streamlined portfolio showcase highlighting custom curriculum design and organizational change systems",
        "Direct LinkedIn networking integration allowing enterprise leaders to connect seamlessly",
      ],
      result:
        "Elevated Carolyn's consulting positioning, allowing her to secure high-ticket corporate contracts and scale her advisory practice with enterprise partners.",
      deliverables: [
        "Brand Identity System",
        "Responsive Web Design",
        "Credential Architecture",
        "Enterprise Pitch Collateral",
      ],
      metrics: [
        { label: "Enterprise Inquiries", value: "+160%" },
        { label: "Experience Proven", value: "15+ Yrs" },
        { label: "Client Satisfaction", value: "100%" },
      ],
    },
  },
  {
    id: "ilana-ridge",
    slug: "ilana-ridge",
    number: "02",
    liveUrl: "https://ilanaridge.com/",
    title: "Ilana Ridge",
    category: "Author, Executive Coach & Conscious Leadership",
    client: "Ilana Ridge",
    tagline: "You are not broken. You are becoming.",
    description:
      "An editorial author platform and executive coaching website crafted for ICF PCC-certified coach and creator of The Spiral™ methodology—uniting literary presence, two published books, and leadership advisory under one warm, grounded digital home.",
    image: "/assets/projects/ilana-ridge.png",
    fullImage: "/assets/projects/ilana-ridge-full.png",
    tags: ["Web Design", "Brand Identity", "Author Platform", "Executive Coaching"],
    year: "2026",
    caseStudy: {
      challenge:
        "With 16+ years guiding executive leaders alongside two published books—'The Bible of Spirit' and the 'North Star Discovery Workbook'—Ilana Ridge needed a unified digital home that spoke simultaneously to personal transformation seekers and C-suite leaders without diluting either voice or falling into generic self-help clichés.",
      thinking:
        "We structured the narrative around The Spiral™ philosophy: growth is not linear optimization, it is embodied remembering. The information architecture moves visitors seamlessly from contemplation ('You are not here to fix yourself') into clear dual pathways—'For The Seeker' and 'For The Leader'—before presenting her books, podcast conversation, free 3-chapter sample download, and corporate advisory inquiries.",
      direction:
        "Warm sunlit canvas cream (#FAF7F2) paired with deep midnight navy contrast bands (#0C1A24) and terracotta burnt orange (#D45D2C) accents. Classic serif headlines (Playfair Display) alongside clean humanist sans-serif UI and an 'IR' spiral monogram balance literary gravity with executive poise.",
      identityDetails: [
        "Bespoke 'IR' monogram incorporating a subtle spiral motif connecting personal transformation with conscious leadership",
        "Dual-contrast editorial system alternating warm cream storytelling sections with high-authority dark navy manifesto ribbons",
        "Cohesive canon presentation uniting The Bible of Spirit, North Star Discovery Workbook, and Book III trilogy teaser",
      ],
      webDetails: [
        "Segmented pathways ('For The Seeker' & 'For The Leader') addressing deep inner alignment alongside executive leadership",
        "Built-in lead capture offering the first three chapters of The Bible of Spirit paired with Books2Read and Amazon ordering links",
        "Structured collaboration gateways covering Reader Reflections, Corporate Alignment workshops, and Speaking/Podcasts",
      ],
      result:
        "Unified Ilana's literary canon, Spiral™ framework, and executive coaching practice into a calm, authoritative flagship platform that converts readers into book buyers and corporate leaders into advisory inquiries.",
      deliverables: [
        "Monogram & Editorial Identity",
        "Full Responsive Web Platform",
        "Book Canon & Field Guide Showcase",
        "Executive Advisory & Lead Funnel",
      ],
      metrics: [
        { label: "Coaching Mastery", value: "16+ Yrs" },
        { label: "Published Canon", value: "2 Books" },
        { label: "Core Methodology", value: "The Spiral™" },
      ],
    },
  },
  {
    id: "neuronuance",
    slug: "neuronuance",
    number: "03",
    liveUrl: "https://www.neuronuanceinc.com/",
    title: "NeuroNuance Inc.",
    category: "Neuroscience Coaching & Corporate Coherence",
    client: "Cristi Trudgeon — NeuroNuance Inc.",
    tagline: "Where Science Meets Spirit.",
    description:
      "A high-trust multi-page web platform and booking ecosystem built for Certified NeuroChangeSolutions Consultant & HeartMath® Certified Trainer Cristi Trudgeon—bridging Dr. Joe Dispenza's methodology, biofeedback commerce, and executive coaching.",
    image: "/assets/projects/neuronuance.png",
    fullImage: "/assets/projects/neuronuance-full.png",
    tags: ["Web Design", "E-Commerce", "Coaching Funnel", "UI/UX"],
    year: "2026",
    caseStudy: {
      challenge:
        "NeuroNuance Inc. serves both individuals seeking lasting personal change and organizations navigating executive burnout. With certifications spanning Dr. Joe Dispenza's NeuroChangeSolutions (NCS), HeartMath® Resilience training, and biofeedback hardware sales, Cristi needed a calm, authoritative platform that made science-backed transformation intuitive rather than overly clinical.",
      thinking:
        "Designed around the twin pillars of 'Science Meets Spirit': immediate above-the-fold credential authority (500+ coaching hours, NLP Master Practitioner, HeartMath® & NCS certifications) flows directly into 'Two Pathways to Lasting Change'—contrasting the 16-hour CYM-CNR immersive workshop with the 8-hour Heart Coherence™ program, three 1:1 coaching tiers, and a dedicated HeartMath® hardware suite.",
      direction:
        "Serene light-lavender canvas anchored by deep royal plum and forest emerald teal accents, pairing timeless Libre Baskerville editorial serifs with crisp Almarai sans-serif UI and rounded pill calls-to-action.",
      identityDetails: [
        "Dual-hue authority palette uniting royal plum ('Spirit' & featured Coherent Self™ tier) with emerald teal ('HeartMath® Suite')",
        "Visual credential strip highlighting NCS Certified Consultant, HeartMath® Trainer, and Erickson Professional Coach rigor",
        "Transparent tiered 1:1 pricing cards paired with a Supported Places equity commitment reflecting Cristi's mission",
      ],
      webDetails: [
        "Dual conversion architecture featuring workshop syllabus exploration alongside a 15-minute discovery fit-call funnel",
        "Dedicated corporate solutions band spotlighting flexible 4 half-day executive schedules for teams and leaders",
        "Integrated e-commerce cart & product experience for Inner Balance™ sensors paired with a 10-review client carousel",
      ],
      result:
        "Transformed NeuroNuance Inc. into an unmistakable category authority—earning a 5-star LinkedIn recommendation from founder Cristi Trudgeon and streamlining bookings across workshops, 1:1 coaching, and corporate cohorts.",
      deliverables: [
        "Multi-Page Web Platform",
        "Workshop & 1:1 Tier Architecture",
        "HeartMath® Shop Integration",
        "Executive Consultation Funnel",
      ],
      metrics: [
        { label: "Coaching Hours", value: "500+" },
        { label: "Workshop Formats", value: "16h & 8h" },
        { label: "Client Endorsement", value: "5.0 ★" },
      ],
    },
  },
  {
    id: "samsara",
    slug: "samsara",
    number: "04",
    title: "Samsara",
    category: "Brand Identity & Emblem System",
    client: "Samsara Foundation",
    tagline: "Compassion, Awareness, and Healing in Every Beginning.",
    description:
      "A tender, deeply meaningful brand identity and emblem crafted for a non-profit foundation dedicated to pregnancy loss awareness, emotional healing, and maternal support.",
    image: "/assets/projects/samsara.jpg",
    tags: ["Brand Identity", "Emblem Design", "Non-Profit", "Visual System"],
    year: "2022",
    caseStudy: {
      challenge:
        "Pregnancy loss and abortion awareness require the utmost delicacy, empathy, and emotional sensitivity. Samsara needed a brand identity that avoids clinical detachment or grim melancholy, conveying instead sacred tenderness, dignity, and profound maternal compassion.",
      thinking:
        "The design concept draws from the pure beginning of life and the delicate journey of growth in the womb. The logo weaves together the organic seed of life with the pure unfolding petals of a blooming lotus bud—honoring life's delicate fragility and eternal memory.",
      direction:
        "Soft blush rose (#E85A88), serene lavender orchid, and soothing mineral white tones. A circular protective emblem enclosing the lotus-bud silhouette, paired with gentle, welcoming sans-serif typography.",
      identityDetails: [
        "Sacred lotus-bud emblem merging the seed of origin with an unfolding flower of pure innocence",
        "Gentle pastel color harmony evoking psychological safety, warmth, and tender maternal care",
        "Restrained, sensitive typography hierarchy suited for advocacy materials, support circles, and community guides",
      ],
      webDetails: [
        "Compassionate digital narrative guiding grieving parents toward immediate support and community counseling",
        "Educational awareness resources presented with calming visual breathing room",
        "Frictionless donation and volunteer onboarding pathways for regional advocacy networks",
      ],
      result:
        "The new identity gave Samsara an iconic, universally empathetic visual voice, rallying widespread donor engagement and community support across healthcare and counseling organizations.",
      deliverables: [
        "Emblem & Iconography System",
        "Brand Guidelines & Color Harmony",
        "Advocacy Collateral",
        "Community Awareness Visuals",
      ],
      metrics: [
        { label: "Community Reach", value: "25k+" },
        { label: "Donor Engagement", value: "+120%" },
        { label: "Partner Clinics", value: "40+" },
      ],
    },
  },
  {
    id: "ami-probashi",
    slug: "ami-probashi",
    number: "05",
    title: "Ami Probashi",
    category: "Mobile App UI/UX & Product Design",
    client: "Ami Probashi",
    tagline: "Empowering Global Migrants Through Digital Autonomy.",
    description:
      "A comprehensive mobile app redesign and UI/UX case study transforming government migration services, BMET registration, job matching, and mandatory training into an accessible, human-centric mobile application.",
    image: "/assets/projects/ami-probashi.jpg",
    fullImage: "/assets/projects/ami-probashi-presentation.jpg",
    tags: ["Mobile App Design", "UI/UX Case Study", "GovTech", "Product Design"],
    year: "2025",
    caseStudy: {
      challenge:
        "Millions of aspiring overseas workers face complex bureaucratic hurdles, fraudulent middlemen, and confusing paperwork when preparing for international employment. The original Ami Probashi app needed a comprehensive UI/UX overhaul to serve users with diverse literacy levels and varying smartphone capabilities.",
      thinking:
        "Radical clarity and zero cognitive load. Every workflow—from BMET registration and clearance to passport verification, pre-departure orientation, and direct job applications—was redesigned into step-by-step, icon-supported micro-journeys.",
      direction:
        "Deep emerald forest tones (#006A4E) honoring Bangladeshi national identity, crisp card containers, high-contrast typography, and universally intuitive service iconography.",
      identityDetails: [
        "Bold, athletic display typography for the case study presentation reflecting migrant resilience and ambition",
        "Standardized icon system for official services: BMET clearance, medical center bookings, vaccine certificates, and BRAC services",
        "Clear verification badge states eliminating confusion regarding application approval status",
      ],
      webDetails: [
        "Streamlined job search interface with clear salary breakdowns (e.g. Riyal/month) and direct apply flows",
        "'Services Near Me' location-based discovery module for physical training centers and medical test hubs",
        "Fast mobile-first layout optimized for low-bandwidth cellular connections",
      ],
      result:
        "The redesigned product architecture dramatically lowered application abandonment rates, giving millions of expatriate workers safe, transparent, and direct access to life-changing employment overseas.",
      deliverables: [
        "Mobile Application UI/UX Redesign",
        "Design System & Component Library",
        "Onboarding & Registration Flow",
        "Comprehensive Case Study Presentation",
      ],
      metrics: [
        { label: "Registered Workers", value: "5M+" },
        { label: "Step Completion", value: "+85%" },
        { label: "Middleman Elimination", value: "100%" },
      ],
    },
  },
  {
    id: "semla-ai",
    slug: "semla-ai",
    number: "06",
    title: "Semla AI",
    category: "AI Platform & Web Design",
    client: "Semla AI",
    tagline: "Elevate Your Data. Unlock Predictive Intelligence.",
    description:
      "An ethereal, high-performance web experience and brand system for an advanced artificial intelligence platform unlocking data potential through automated analytics and visualization.",
    image: "/assets/projects/semla-ai.png",
    fullImage: "/assets/projects/semla-ai-full.jpg",
    tags: ["Web Platform", "AI Experience", "Brand Identity", "Visual System"],
    year: "2024",
    caseStudy: {
      challenge:
        "Artificial intelligence platforms frequently suffer from cold, generic tech templates full of meaningless particle animations. Semla AI needed a brand that felt sophisticated, intelligent, and commercially actionable for enterprise executives seeking concrete data transformation.",
      thinking:
        "I synthesized futuristic precision with approachable human interaction. The narrative leads with 'Elevate Your Data', framing complex machine learning algorithms into clear commercial outcomes: AI-powered tailoring, automated design generation, and assisted measurement.",
      direction:
        "Midnight indigo canvas (#0E1326) paired with electric sky blue (#4C82FB), dual Latin-Arabic wordmark typography, and sleek modern isometric illustrations.",
      identityDetails: [
        "Dual-script brand mark uniting modern English 'semla' with elegant Arabic 'سمলা' typography",
        "Modular feature card system showcasing custom tailored AI capabilities and measurement tools",
        "Visual trust architecture integrating enterprise partners (OpenAI, Tara, Astri)",
      ],
      webDetails: [
        "Frictionless 'Reserve a Meeting' modal and inline executive intake form",
        "Dynamic Blog & News hub highlighting developments in machine learning and healthcare AI",
        "Responsive mobile layout maintaining crisp visual hierarchy across all viewport resolutions",
      ],
      result:
        "Positioned Semla AI as an elite enterprise analytics contender, accelerating seed-round investor discussions and closing multiple enterprise pilot deployments.",
      deliverables: [
        "Full Responsive Web Platform",
        "Bilingual Brand Mark (EN/AR)",
        "Interactive Product Showcase",
        "Executive Lead Generation Funnel",
      ],
      metrics: [
        { label: "Pilot Signups", value: "+210%" },
        { label: "Investor Traction", value: "$2.5M" },
        { label: "Engagement Time", value: "4.5m" },
      ],
    },
  },
  {
    id: "tw-communications",
    slug: "tw-communications",
    number: "07",
    featured: false,
    title: "TW Communications",
    category: "Web Platform & SaaS Experience",
    client: "TW Communications",
    tagline: "The Future of Business Communications Starts Here.",
    description:
      "A dynamic, high-tech web platform and visual system designed for a nationwide VoIP and Cloud PBX provider delivering enterprise communication infrastructure.",
    image: "/assets/projects/tw-communications.jpg",
    fullImage: "/assets/projects/tw-communications-full.jpg",
    gallery: ["/assets/projects/tw-communications-mockup.jpg"],
    tags: ["UI/UX Design", "SaaS Platform", "Cloud Infrastructure", "Web Architecture"],
    year: "2025",
    caseStudy: {
      challenge:
        "The business telecom space is crowded with legacy providers whose websites feel rigid, cluttered, and outdated. TW Communications required a modern, tech-forward platform that proves their 99.9% uptime, showcases 70+ software integrations, and converts enterprise decision-makers and reseller partners.",
      thinking:
        "Position TW Communications as an agile, cutting-edge telecommunications leader. The site was architected to present high-complexity technical features (advanced call management, cloud PBX, nationwide VoIP) through crystal-clear visual hierarchy and frictionless conversion funnels.",
      direction:
        "Deep futuristic cobalt and navy (#0B1B3D) with electric neon lime accents (#B4F000), glassmorphic solution cards, and clean tech typography communicating precision, uptime, and modern scale.",
      identityDetails: [
        "High-impact geometric 'TW' monogram symbolizing seamless signal transfer and connectivity",
        "Electric lime signal accent color cutting through deep obsidian blues for high-converting interactive targets",
        "Tech iconography library for 70+ integrations (Salesforce, Teams, HubSpot, Drift, ConnectWise)",
      ],
      webDetails: [
        "Split conversion pathways for 'Request a Demo' and 'Get a Quote' tailored to enterprise vs reseller needs",
        "Interactive integrations directory spotlighting enterprise CRM and productivity software",
        "Interactive solutions grid breaking down Cloud PBX, Call Management, and White-Label Reseller options",
      ],
      result:
        "The launch established TW Communications as an industry frontrunner, decreasing sales cycle friction and increasing qualified inbound demo requests by 175%.",
      deliverables: [
        "Full Responsive Web Platform",
        "Interactive Solutions Architecture",
        "Integration Showcase System",
        "Reseller Onboarding Flow",
      ],
      metrics: [
        { label: "Uptime Guaranteed", value: "99.9%" },
        { label: "Software Integrations", value: "70+" },
        { label: "Demo Inquiries", value: "+175%" },
      ],
    },
  },
];
