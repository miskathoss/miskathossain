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
  title: string;
  category: string;
  client: string;
  tagline: string;
  description: string;
  image: string;
  tags: string[];
  year: string;
  caseStudy: CaseStudyData;
}

export const projects: Project[] = [
  {
    id: "teams-of-men",
    slug: "teams-of-men",
    number: "01",
    title: "TeamsOfMen",
    category: "Brand Identity & Web Platform",
    client: "Kip Ioane",
    tagline: "Empowering Coaches. Enlightening Players. Reimagining Manhood.",
    description:
      "A bold, purpose-driven brand identity and high-impact digital platform built to equip the next generation with character, leadership, and integrity on and off the athletic field.",
    image: "/assets/projects/teams-of-men.png",
    tags: ["Brand Identity", "Design System", "Web Platform", "Coaching"],
    year: "2025",
    caseStudy: {
      challenge:
        "Athletic coaching culture often leans into aggressive, outdated archetypes. Kip Ioane founded TeamsOfMen to revolutionize player development by blending athletic discipline with emotional intelligence, accountability, and purpose. The challenge was building an identity that command respect from collegiate athletic directors while feeling deeply human and transformative to young athletes.",
      thinking:
        "We needed visual strength without toxic bravado. The strategy positioned TeamsOfMen as an institutional authority—clean, structured, and unapologetic in its commitment to character building over short-term accolades.",
      direction:
        "High-contrast sports typography paired with architectural geometry. Deep obsidian navy backgrounds contrasted by luminous electric cobalt and crisp chalk whites, reflecting the discipline of the field and the clarity of mental growth.",
      identityDetails: [
        "Monolithic wordmark with custom ligature signifying unity and collective strength",
        "Comprehensive typographic hierarchy optimized for athletic proposals and digital curriculum",
        "Custom iconography for core pillars: Character, Leadership, Accountability, and Purpose",
      ],
      webDetails: [
        "Streamlined navigation directing athletic directors toward institutional license tiers",
        "Video storytelling integration spotlighting real coach-athlete conversations",
        "Fast-loading, accessible digital playbook repository designed for mobile sideline access",
      ],
      result:
        "TeamsOfMen established immediate credibility across regional high schools and collegiate athletic departments, dramatically speeding up curriculum licensing inquiries and workshop bookings.",
      deliverables: [
        "Brand Identity System",
        "Visual Language & Guidelines",
        "Responsive Web Architecture",
        "Curriculum Presentation Deck",
      ],
      metrics: [
        { label: "Players Impacted", value: "10,000+" },
        { label: "Coaches Empowered", value: "500+" },
        { label: "Communities Reached", value: "75+" },
      ],
    },
  },
  {
    id: "christopher-miller",
    slug: "christopher-miller",
    number: "02",
    title: "Christopher Miller",
    category: "Brand Identity & Web Experience",
    client: "Christopher Miller",
    tagline: "More People. Brighter Futures.",
    description:
      "A heart-centred, strengths-based coaching identity and editorial digital experience created to help leaders, couples, and entrepreneurs build lives with clarity, connection, and purpose.",
    image: "/assets/projects/christopher-miller.png",
    tags: ["Visual Identity", "UI/UX Design", "Editorial Web", "Strategy"],
    year: "2025",
    caseStudy: {
      challenge:
        "Executive and life coaching websites often fall into generic corporate clichés or overly mystical aesthetics. Christopher Miller needed a brand that reflected genuine intellectual rigor, empathetic coaching depth, and an inviting, organic atmosphere.",
      thinking:
        "We formulated the concept of 'Grounded Elevation'—anchoring the brand in nature-inspired richness, editorial serif typography, and tactile photography that conveys immediate warmth and psychological safety.",
      direction:
        "Earthy forest greens, deep espresso blacks, and warm cream whites. Handcrafted organic leaf monogram combined with refined editorial layout that reads like a high-end personal monograph.",
      identityDetails: [
        "Leaf-and-crest monogram symbolizing individual growth rooted in core values",
        "Bespoke script accent accents highlighting human handwritten resonance",
        "Restrained color palette radiating calmness, focus, and emotional clarity",
      ],
      webDetails: [
        "Segmented audience pathways for Leaders, Couples, and Entrepreneurs",
        "Interactive virtual coffee scheduling funnel reducing friction for first-time clients",
        "Immersive photography framing Christopher in natural Pacific Northwest greenery",
      ],
      result:
        "The digital experience elevated Christopher's consulting positioning, doubling client inbound inquiries and allowing him to transition seamlessly into premium multi-month advisory retainers.",
      deliverables: [
        "Core Brand Strategy",
        "Logo & Monogram Suite",
        "Editorial Web Design",
        "Client Intake Experience",
      ],
      metrics: [
        { label: "Inquiry Conversion", value: "+140%" },
        { label: "Retainer Value", value: "2.5x" },
        { label: "Client Satisfaction", value: "100%" },
      ],
    },
  },
  {
    id: "cara-walker",
    slug: "cara-walker",
    number: "03",
    title: "Cara Walker",
    category: "Web Redesign & Digital Experience",
    client: "Cara Walker",
    tagline: "The Power of a Collaborative Culture.",
    description:
      "A luminous, editorial personal brand and digital presence for an educator and learning development specialist cultivating vibrant organizational culture and collective impact.",
    image: "/assets/projects/cara-walker.png",
    tags: ["Web Design", "Art Direction", "Personal Branding"],
    year: "2024",
    caseStudy: {
      challenge:
        "Cara Walker is a premier learning and development specialist whose previous website did not capture her radiant energy, structured pedagogical frameworks, or ability to unify diverse organizational teams.",
      thinking:
        "Position Cara as both an insightful academic thinker and an inspiring, approachable facilitator. The digital presence had to balance warm interpersonal photography with crisp, strategic service structuring.",
      direction:
        "Airy, sunlit composition with warm alabaster backgrounds, charcoal typography, and subtle organic leaf motifs that echo her iconic golden leaf earrings.",
      identityDetails: [
        "Textured display serif headline typography evoking editorial literary quality",
        "Humanized handwriting signatures emphasizing 'People. Ideas. Growth. Together.'",
        "Minimalist badge system articulating her key coaching pillars",
      ],
      webDetails: [
        "Fluid single-scroll storytelling structure mapping her collaborative philosophy",
        "Strategic workshop showcase highlighting organizational culture transformations",
        "Responsive mobile-first layout prioritizing fast speaking and consultation booking",
      ],
      result:
        "The redesign established Cara as a top-tier keynote speaker and facilitator, securing invitations from regional educational boards and corporate learning institutions.",
      deliverables: [
        "Website Redesign",
        "Art Direction & Color Palette",
        "Content Architecture",
        "Interactive Engagement Flow",
      ],
      metrics: [
        { label: "Speaking Inquiries", value: "+95%" },
        { label: "Page Engagement", value: "3.2m" },
        { label: "Bounce Rate", value: "-45%" },
      ],
    },
  },
  {
    id: "midwest-crochet",
    slug: "midwest-crochet",
    number: "04",
    title: "Midwest Crochet Society",
    category: "Brand Identity & Web Platform",
    client: "Melissa",
    tagline: "More Than Yarn, A Community.",
    description:
      "A tactile, community-first brand and workshop platform bringing fiber artists together through creative shared experiences, connection, and belonging.",
    image: "/assets/projects/midwest-crochet.png",
    tags: ["Brand System", "Community Platform", "UI/UX Design"],
    year: "2024",
    caseStudy: {
      challenge:
        "Traditional fiber crafts are often represented by either antiquated grandma tropes or faceless ecommerce shops. Melissa wanted Midwest Crochet Society to feel modern, inclusive, and vibrant—a physical and digital haven for crafters of all backgrounds.",
      thinking:
        "Crafting is fundamentally about mindfulness and human connection. We engineered a visual world that celebrates the tactile texture of yarn and the warmth of creative gathering spaces.",
      direction:
        "Warm terracotta, muted ochre, and soft fleece creams. Playful yarn ball stamp insignia paired with contemporary grotesque typography and handwritten creative accents.",
      identityDetails: [
        "Artisanal woodcut-style yarn ball logo with modern curved lettering",
        "Handwritten script affirmations: 'Creativity builds brighter days'",
        "Playful badge system representing workshop tiers and skill levels",
      ],
      webDetails: [
        "Interactive workshop schedule with frictionless one-click registration",
        "Community gallery showcasing member projects and regional fiber meetups",
        "Warm, accessible layout tested across devices for diverse demographic ease",
      ],
      result:
        "Midwest Crochet Society sold out all inaugural workshop seasons within 48 hours of launch, expanding from a local meetup into a regionally celebrated fiber arts collective.",
      deliverables: [
        "Brand Identity & Stamp Mark",
        "Workshop Booking Platform",
        "Social Visual Guidelines",
        "Community Event Collateral",
      ],
      metrics: [
        { label: "Workshops Sold Out", value: "100%" },
        { label: "Active Members", value: "1,200+" },
        { label: "Community Events", value: "40+" },
      ],
    },
  },
  {
    id: "tamika",
    slug: "tamika",
    number: "05",
    title: "Tamika Leadership",
    category: "Executive Brand & Web Experience",
    client: "Tamika",
    tagline: "Unlocking High-Performance Leadership.",
    description:
      "A refined executive coaching presence balancing institutional gravitas with authentic empathy, converting corporate leadership inquiries and board-level engagements.",
    image: "/assets/projects/tamika.png",
    tags: ["Executive Branding", "Web Design", "Lead Generation"],
    year: "2024",
    caseStudy: {
      challenge:
        "Executive coaches at the highest tier require a brand that speaks fluently to Fortune 500 executives and boardroom directors without feeling sterile or unapproachable.",
      thinking:
        "We developed a sophisticated, minimalist executive narrative centered on clarity of vision, emotional resilience, and measurable organizational leadership outcomes.",
      direction:
        "Monochrome foundation with warm bronze highlights, generous negative space, and commanding typography that communicates decisive clarity.",
      identityDetails: [
        "Sleek geometric monogram communicating structured authority",
        "Premium editorial layout with generous breathing room",
        "Executive testimonial framing highlighting C-suite endorsement",
      ],
      webDetails: [
        "High-conversion executive advisory inquiry portal",
        "Structured breakdown of bespoke 1-on-1 coaching frameworks",
        "Mobile-optimized performance for time-sensitive executives",
      ],
      result:
        "Established Tamika as a trusted advisor for Fortune 500 executive suites, driving a 3x increase in direct corporate referral conversions.",
      deliverables: [
        "Executive Brand Identity",
        "High-Conversion Web Experience",
        "Proposal Design System",
      ],
      metrics: [
        { label: "C-Suite Inquiries", value: "+180%" },
        { label: "Booking Efficiency", value: "3x" },
        { label: "Client Retention", value: "92%" },
      ],
    },
  },
];
