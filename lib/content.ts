import {
  BadgeCheck,
  Building2,
  FileCheck2,
  Handshake,
  Landmark,
  LineChart,
  ShieldCheck,
  Target,
} from "lucide-react";

export const phoneNumber = "(313) 555-0198";
export const contactEmail = "info@principalequitycapital.com";

export const benefits = [
  {
    title: "African American businesses can compete",
    description:
      "African American small businesses can access public-sector opportunities with the right registration, positioning, and pursuit strategy.",
    icon: Landmark,
  },
  {
    title: "A proven path simplifies the process",
    description:
      "Clear systems help reduce confusion around SAM, proposals, 8(a), GSA, and contract targeting for owners new to government work.",
    icon: ShieldCheck,
  },
  {
    title: "Guidance built around results",
    description:
      "Principal Equity Capital helps African American entrepreneurs move from interest to action with practical, contract-focused support.",
    icon: Target,
  },
];

export const services = [
  {
    title: "Government Contract Consulting",
    description:
      "Strategic guidance for African American small businesses entering or growing within the federal, state, and local contracting market.",
    icon: Building2,
  },
  {
    title: "Proposal Guidance",
    description:
      "Support with proposal readiness, opportunity fit, narrative clarity, and submission discipline.",
    icon: FileCheck2,
  },
  {
    title: "Contract Acquisition Strategy",
    description:
      "A focused plan for identifying targets, sequencing pursuits, and building momentum toward wins.",
    icon: LineChart,
  },
  {
    title: "8(a) and GSA Pathways",
    description:
      "Advisory support for long-range positioning toward 8(a) and GSA Schedule advantages.",
    icon: BadgeCheck,
  },
];

export const processSteps = [
  "Consultation",
  "Strategy",
  "Contract Targeting",
  "Execution Support",
];

export const differentiators = [
  "African American small businesses are the primary focus of the advisory model.",
  "Minority-owned and general small businesses are supported as secondary audiences.",
  "Practical guidance toward 8(a) Program readiness in roughly one year.",
  "Long-range planning for GSA Schedule positioning in roughly two years.",
  "Contract-first strategy: more pursuits and wins can accelerate qualification.",
  "Combined 8(a) and GSA advantages can make future contract wins more accessible.",
];

export const values = [
  {
    title: "African American business focus",
    description:
      "A consultancy built first for African American owners who have capability, ambition, and the need for a clearer path into public-sector revenue.",
    icon: Handshake,
  },
  {
    title: "Detroit roots, nationwide reach",
    description:
      "Support designed for Detroit-area African American businesses and small companies across the United States pursuing government contracts.",
    icon: Landmark,
  },
];

export const pathwayOptions = [
  {
    id: "8a",
    label: "8(a)",
    eyebrow: "SBA pathway",
    title: "8(a) helps eligible disadvantaged businesses compete.",
    description:
      "The SBA 8(a) Business Development Program supports eligible socially and economically disadvantaged small business owners with business development assistance and access to certain competitive and sole-source opportunities.",
    benefits: [
      "Creates a clearer route into federal contracting for qualified firms.",
      "Can support set-aside and sole-source contracting opportunities.",
      "Adds training, technical assistance, and business development support.",
    ],
    note: "Certification is a powerful tool, but it does not guarantee contract awards.",
  },
  {
    id: "gsa",
    label: "GSA",
    eyebrow: "Schedule pathway",
    title: "GSA can make it easier for agencies to buy from you.",
    description:
      "The GSA Multiple Award Schedule lets approved sellers offer commercial products, services, and solutions to eligible government buyers at pre-negotiated prices.",
    benefits: [
      "Gives buyers a familiar contract vehicle for purchasing.",
      "Can increase visibility with federal, state, local, tribal, and eligible buyers.",
      "Helps position pricing, offerings, and terms in a government-ready format.",
    ],
    note: "A Schedule is not instant revenue; it works best with active targeting and relationship-building.",
  },
  {
    id: "combined",
    label: "Combined",
    eyebrow: "Strategic advantage",
    title: "8(a) plus GSA can strengthen the path to contract wins.",
    description:
      "For African American small business owners, the combined strategy is about reducing friction: 8(a) can support targeted opportunity access, while GSA can give buyers a structured way to purchase.",
    benefits: [
      "Builds a stronger contracting profile over time.",
      "Helps agencies understand both eligibility and buying path.",
      "Supports a repeatable system for targeting, proposing, and following through.",
    ],
    note: "Principal Equity Capital helps sequence the steps so owners do not chase every program at once.",
  },
];

export const faqs = [
  {
    question: "What is the 8(a) Program?",
    answer:
      "The SBA 8(a) Business Development Program is a federal contracting and business development program for eligible socially and economically disadvantaged small business owners. It can provide business development support and access to certain competitive and sole-source contracting opportunities.",
  },
  {
    question: "How can 8(a) benefit an African American small business owner?",
    answer:
      "For a qualified firm, 8(a) can help create a more focused route into federal contracting, including set-aside opportunities, business development assistance, mentorship pathways, and training. It should be treated as a growth tool, not a guarantee of awards.",
  },
  {
    question: "What is a GSA Schedule?",
    answer:
      "A GSA Schedule, also called the Multiple Award Schedule, is a government contract vehicle where approved sellers offer commercial products, services, and solutions to eligible government buyers at pre-negotiated prices.",
  },
  {
    question: "How can GSA benefit the client?",
    answer:
      "GSA can make purchasing easier for agencies because the seller's offerings, pricing, and terms are already structured through a recognized buying channel. For the client, that can improve visibility, credibility, and access to buyers who prefer using established contract vehicles.",
  },
  {
    question: "Why think about 8(a) and GSA together?",
    answer:
      "8(a) can help with eligibility-driven contracting strategy, while GSA can help with the buying path. Together, they can make it easier for the right buyer to understand why the business qualifies and how to purchase from it.",
  },
  {
    question: "Where should a new business start?",
    answer:
      "Most businesses should start with fundamentals: SAM readiness, NAICS alignment, capability positioning, target agencies, and a practical pursuit plan. Principal Equity Capital helps organize those steps before chasing advanced programs.",
  },
];
