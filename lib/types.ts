export type SanityImageRef = {
  asset?: { _ref?: string; url?: string };
  alt?: string;
} | null;

export interface SiteSettings {
  businessName: string;
  tagline: string;
  phone: string;
  email: string;
  serviceArea: string;
  hours: string;
  bookingUrl: string;
  discoveryCallUrl: string;
  patientPortalUrl: string;
  questionnaireUrl: string;
  socialLinks: { label: string; url: string }[];
  announcement?: string;
  footer: {
    ctaHeadlinePlain: string;
    ctaHeadlineAccent: string;
    subline: string;
    button: string;
  };
  stickyMobileBar: string;
}

export interface ProblemCard {
  title: string;
  body: string;
  icon: string;
}

export interface RouteNode {
  label: string;
  body: string;
}

export interface PlanStep {
  title: string;
  body: string;
}

export interface HomePage {
  hero: {
    eyebrow: string;
    headlinePlain: string;
    headlineAccent: string;
    subhead: string;
    primaryCta: string;
    secondaryCta: string;
    image: SanityImageRef;
    imageAlt: string;
    trustItems: string[];
    badgeTitle: string;
    badgeSub: string;
    routeLabels: string[];
  };
  marqueeWords: string[];
  problem: {
    eyebrow: string;
    heading: string;
    intro: string;
    cards: ProblemCard[];
    stakesLine: string;
  };
  guide: {
    eyebrow: string;
    heading: string;
    body: string;
    credentials: string[];
    image: SanityImageRef;
    imageAlt: string;
    cta: string;
  };
  servicesIntro: {
    eyebrow: string;
    heading: string;
    link: string;
  };
  differentiator: {
    eyebrow: string;
    heading: string;
    body: string;
    nodes: RouteNode[];
    cta: string;
  };
  plan: {
    eyebrow: string;
    heading: string;
    steps: PlanStep[];
    cta: string;
  };
  testimonials: {
    eyebrow: string;
    heading: string;
  };
  closing: {
    eyebrow: string;
    headingPlain: string;
    headingAccent: string;
    body: string;
    contactHeading: string;
    contactSubline: string;
    button: string;
  };
}

export interface Service {
  title: string;
  slug: string;
  audienceEyebrow: string;
  summary: string;
  shortBlurb: string;
  outcomes: string[];
  image: SanityImageRef;
  imageAlt: string;
  order: number;
  featured: boolean;
}

export interface ServicesPage {
  eyebrow: string;
  headingPlain: string;
  headingAccent: string;
  intro: string;
  cta: string;
  pricing: { heading: string; body: string; cta: string };
}

export interface ExpectStep {
  stepLabel: string;
  title: string;
  subtitle: string;
  body: string;
  image: SanityImageRef;
  imageAlt: string;
  order: number;
}

export interface ExpectPage {
  eyebrow: string;
  heading: string;
  intro: string;
  policiesBand: {
    eyebrow: string;
    heading: string;
    items: { title: string; body: string }[];
  };
  closingHeading: string;
  closingCta: string;
}

export interface AboutPage {
  eyebrow: string;
  headingPlain: string;
  headingAccent: string;
  body: string[];
  image: SanityImageRef;
  imageAlt: string;
  beliefs: { eyebrow: string; cards: { title: string; body: string }[] };
  credentials: { eyebrow: string; heading: string; items: string[] };
  offClock: { heading: string; body: string; cta: string };
}

export interface Testimonial {
  quoteTitle: string;
  quote: string;
  attribution: string;
  rating: number;
  featured: boolean;
}

export interface Faq {
  question: string;
  answer: string;
  order: number;
}

export interface FaqPage {
  eyebrow: string;
  heading: string;
  contact: {
    eyebrow: string;
    heading: string;
    subline: string;
    button: string;
    success: string;
    error: string;
  };
  closingHeading: string;
  closingSubline: string;
  closingCta: string;
}

export interface Policy {
  title: string;
  slug: string;
  body: string[];
}
