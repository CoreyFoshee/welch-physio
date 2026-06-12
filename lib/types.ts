export type SanityImageRef = {
  asset?: { _ref?: string; url?: string };
  alt?: string;
} | null;

export interface NavLink {
  label: string;
  href: string;
}

export interface ContactFormCopy {
  namePlaceholder: string;
  phonePlaceholder: string;
  emailPlaceholder: string;
  messagePlaceholder: string;
  miniContactPlaceholder: string;
  sendingLabel: string;
  honeypotLabel: string;
}

export interface SiteChrome {
  logoWordmark: string;
  logoTagline: string;
  navCta: string;
  navLinks: NavLink[];
  footerPagesHeading: string;
  footerContactHeading: string;
  footerLegalHeading: string;
  patientPortalLabel: string;
  copyrightLocation: string;
  legalLinks: NavLink[];
  contactForm: ContactFormCopy;
  faqContactOrCall: string;
}

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
  chrome: SiteChrome;
  footer: {
    ctaHeadlinePlain: string;
    ctaHeadlineAccent: string;
    subline: string;
    button: string;
  };
  stickyMobileBar: string;
}

export interface PageSeoFields {
  seoTitle?: string;
  seoDescription?: string;
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

export interface HomePage extends PageSeoFields {
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
    imageCaption: string;
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

export interface ServicesPage extends PageSeoFields {
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

export interface ExpectPage extends PageSeoFields {
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

export interface AboutPage extends PageSeoFields {
  eyebrow: string;
  headingPlain: string;
  headingAccent: string;
  body: string[];
  image: SanityImageRef;
  imageAlt: string;
  imageCaption: string;
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

export interface FaqPage extends PageSeoFields {
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

export interface PoliciesPage extends PageSeoFields {
  eyebrow: string;
  heading: string;
}
