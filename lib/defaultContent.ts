import type {
  AboutPage,
  ExpectPage,
  ExpectStep,
  Faq,
  FaqPage,
  HomePage,
  Policy,
  Service,
  ServicesPage,
  SiteSettings,
  Testimonial,
} from "./types";

/**
 * Canonical site copy (from WEBSITE-COPY.md). Used as:
 * 1. The source for `npm run seed` (populates Sanity), and
 * 2. The render fallback whenever Sanity is unconfigured or a field is empty,
 *    so the site never ships blank.
 */

export const defaultSiteSettings: SiteSettings = {
  businessName: "Welch Physiotherapy and Wellness",
  tagline: "Doctor-led concierge physical therapy · Tulsa, OK",
  phone: "(903) 918-2611",
  email: "kwelchphysio@gmail.com",
  serviceArea: "Serving the Tulsa metro",
  hours: "Mon–Fri, by appointment",
  // TODO: replace with real scheduler URL (Calendly/Jane/etc.) when client provides it
  bookingUrl: "/faq#contact",
  discoveryCallUrl: "/faq#contact",
  // TODO: replace with patient portal login URL when client provides it
  patientPortalUrl: "#",
  // TODO: replace with intake questionnaire URL when client provides it
  questionnaireUrl: "#",
  socialLinks: [],
  footer: {
    ctaHeadlinePlain: "Ready to move",
    ctaHeadlineAccent: "without pain again?",
    subline: "Book a free 15-minute discovery call. No referral needed.",
    button: "Book a free discovery call",
  },
  stickyMobileBar: "Book a free call",
};

export const defaultHomePage: HomePage = {
  hero: {
    eyebrow: "Doctor-led concierge physical therapy · Tulsa, OK",
    headlinePlain: "Keep doing what you love.",
    headlineAccent: "We'll handle the pain.",
    subhead:
      "One-on-one physical therapy that comes to you — your home, your gym, or your workplace. No waiting rooms. No rushed visits. Just a clear plan to get you back to running, lifting, and living.",
    primaryCta: "Book a free discovery call",
    secondaryCta: "See how it works",
    image: null,
    imageAlt: "Physical therapist guiding an athlete through a lunge in a home gym",
    trustItems: [
      "Doctor of Physical Therapy",
      "One-on-one, every single visit",
      "Serving the Tulsa metro",
    ],
    badgeTitle: "Next-day visits",
    badgeSub: "We come to you",
    routeLabels: ["Home", "Gym", "Work"],
  },
  marqueeWords: ["Manual therapy", "Movement", "Stabilization", "Sports rehab", "Recovery"],
  problem: {
    eyebrow: "Sound familiar?",
    heading: "Pain shouldn't put your life on pause.",
    intro:
      "You've tried waiting it out. Maybe you've even tried a clinic where you were one of three patients on the schedule. There's a better way.",
    cards: [
      {
        title: "Rushed, crowded clinics",
        body: "Bounced between techs and tables, with 15 distracted minutes of actual hands-on care.",
        icon: "clock",
      },
      {
        title: "Cookie-cutter sheets",
        body: "The same generic exercise printout everyone gets — whether you're a runner or a new grandparent.",
        icon: "sheet",
      },
      {
        title: "\u201CJust stop doing it\u201D",
        body: "Advice that asks you to give up training, golf, or pickup games instead of fixing the real cause.",
        icon: "stop",
      },
    ],
    stakesLine:
      "It costs more than money — it costs miles, lifts, seasons, and time with the people you love.",
  },
  guide: {
    eyebrow: "Your guide",
    heading: "Hi, I'm Dr. Kendall Welch.",
    body: "I started Welch Physiotherapy and Wellness because I watched too many active adults get passed around busy clinics and told to settle for less.\n\nYou deserve a clinician who knows your name, your goals, and your sport — and who shows up where life actually happens. Every visit is one-on-one with me, from evaluation to your final session.",
    credentials: [
      "Doctor of Physical Therapy (DPT)",
      "Licensed physical therapist · Oklahoma",
      "Manual therapy, movement & stabilization",
      "Sports rehab for active adults",
    ],
    image: null,
    imageAlt: "Portrait of Dr. Kendall Welch, DPT",
    cta: "More about my approach",
  },
  servicesIntro: {
    eyebrow: "Services",
    heading: "Care built around your goals",
    link: "All services",
  },
  differentiator: {
    eyebrow: "The Welch difference",
    heading: "Physical therapy that travels with you.",
    body: "Concierge, onsite care for busy schedules. I bring the clinic — table, tools, and a full treatment plan — to wherever your day is happening.",
    nodes: [
      {
        label: "Your home",
        body: "Sessions in your living room — perfect for early mornings and families.",
      },
      {
        label: "Your gym",
        body: "Rehab where you train, using the equipment you'll actually use.",
      },
      {
        label: "Your workplace",
        body: "Lunchtime visits that don't blow up your calendar.",
      },
    ],
    cta: "Check if you're in my service area",
  },
  plan: {
    eyebrow: "Your plan",
    heading: "Three simple steps back to full speed",
    steps: [
      {
        title: "Book a free discovery call",
        body: "A 15-minute phone call. Tell me what's going on and ask anything. We'll decide together if we're a fit.",
      },
      {
        title: "Get your personalized plan",
        body: "A full one-on-one evaluation wherever you choose, with a clear diagnosis and roadmap on day one.",
      },
      {
        title: "Get back to what you love",
        body: "Hands-on treatment, smart progressions, and real-time updates until you're confident again.",
      },
    ],
    cta: "Start with step one — it's free",
  },
  testimonials: {
    eyebrow: "Patient stories",
    heading: "Results you can feel",
  },
  closing: {
    eyebrow: "Imagine six weeks from now",
    headingPlain: "Don't let a fixable problem",
    headingAccent: "become your new normal.",
    body: "Most aches respond fastest in the first weeks. The longer you wait, the longer the road back. One free phone call is all it takes to know your next step.",
    contactHeading: "Prefer to send a message first?",
    contactSubline: "Fill this out and I'll text or email you back — usually same day.",
    button: "Send message",
  },
};

export const defaultServices: Service[] = [
  {
    title: "Sports rehab & injury recovery",
    slug: "sports-rehab",
    audienceEyebrow: "For runners, lifters, golfers & weekend athletes",
    summary:
      "Sprains, strains, tendinopathy, and post-surgical rehab with a return-to-sport plan — not just \u201Crest and see.\u201D",
    shortBlurb:
      "Get back to running, lifting, and competing — stronger than before the injury.",
    outcomes: [
      "Return to your sport with a tested plan",
      "Rebuild strength past pre-injury levels",
      "Know exactly what to do between visits",
    ],
    image: null,
    imageAlt: "Runner training on a Tulsa trail",
    order: 1,
    featured: true,
  },
  {
    title: "Pain relief & manual therapy",
    slug: "pain-relief",
    audienceEyebrow: "For stubborn neck, back & joint pain",
    summary:
      "Hands-on treatment — joint mobilization and targeted soft-tissue work — paired with movement that makes the change last.",
    shortBlurb:
      "Hands-on treatment for stubborn neck, back, and joint pain that hasn't budged.",
    outcomes: [
      "Calm pain down in the first visits",
      "Fix the cause, not just the symptom",
      "Sleep, sit, and move comfortably again",
    ],
    image: null,
    imageAlt: "Manual therapy on a treatment table",
    order: 2,
    featured: true,
  },
  {
    title: "Movement & performance",
    slug: "movement-performance",
    audienceEyebrow: "For active adults who want to stay ahead of injury",
    summary:
      "A head-to-toe movement assessment that finds weak links and asymmetries before they cost you a season.",
    shortBlurb:
      "Find the weak links before they become injuries. Move efficiently, train confidently.",
    outcomes: [
      "A personal movement scorecard",
      "Targeted strength & mobility programming",
      "Train with confidence, not caution",
    ],
    image: null,
    imageAlt: "Lifter being coached at a gym",
    order: 3,
    featured: true,
  },
  {
    title: "Wellness memberships",
    slug: "wellness-memberships",
    audienceEyebrow: "For graduates & proactive movers",
    summary:
      "Ongoing tune-ups, programming updates, and priority scheduling so good movement becomes your default.",
    shortBlurb:
      "Ongoing tune-ups and programming to keep you doing what you love, for good.",
    outcomes: [
      "Monthly hands-on tune-up visits",
      "Evolving home & gym programming",
      "Priority booking and member rates",
    ],
    image: null,
    imageAlt: "Mobile PT setting up a treatment table in a living room",
    order: 4,
    featured: true,
  },
];

export const defaultServicesPage: ServicesPage = {
  eyebrow: "Services",
  headingPlain: "Who I help, and the results",
  headingAccent: "you can expect.",
  intro:
    "Every plan is built one-on-one around your body and your goals — with manual therapy, movement retraining, and stabilization at the core.",
  cta: "Book a free discovery call",
  pricing: {
    heading: "Transparent, out-of-network pricing.",
    body: "No referrals needed. Superbills provided for HSA/FSA and out-of-network reimbursement. Exact rates and packages are covered on your free discovery call.",
    cta: "Ask about pricing",
  },
};

export const defaultExpectSteps: ExpectStep[] = [
  {
    stepLabel: "Step 1 · Free",
    title: "The discovery call",
    subtitle: "15 minutes by phone",
    body: "We talk through what's going on, what you've tried, and what you want to get back to. I'll tell you honestly whether I'm the right fit — and if I'm not, I'll point you to someone who is. No pressure, no obligation.",
    image: null,
    imageAlt: "Dr. Welch on a discovery phone call",
    order: 1,
  },
  {
    stepLabel: "Step 2 · 75–90 min",
    title: "Your first visit",
    subtitle: "At your home, gym, or workplace",
    body: "A full one-on-one evaluation: history, movement assessment, strength and mobility testing, and hands-on treatment on day one. You leave with a clear diagnosis, a roadmap, and your first exercises in the patient portal.",
    image: null,
    imageAlt: "First-visit evaluation in a home gym",
    order: 2,
  },
  {
    stepLabel: "Step 3 · Weekly-ish",
    title: "Ongoing care",
    subtitle: "60-minute one-on-one sessions",
    body: "Manual therapy plus progressive movement and stabilization work, adjusted every visit. Your home program updates in the portal, and you can message me between sessions whenever questions come up.",
    image: null,
    imageAlt: "Hands-on treatment during an ongoing care session",
    order: 3,
  },
  {
    stepLabel: "Step 4 · Graduation",
    title: "Membership & wellness",
    subtitle: "Stay ahead of the next injury",
    body: "When you've hit your goals, you choose what's next: a maintenance membership with monthly tune-ups and evolving programming, or simply priority access whenever you need me again.",
    image: null,
    imageAlt: "Athlete training confidently after graduating from care",
    order: 4,
  },
];

export const defaultExpectPage: ExpectPage = {
  eyebrow: "What to expect",
  heading: "Your journey, step by step.",
  intro:
    "From a 15-minute phone call to long-term wellness — here's exactly how care with Welch Physiotherapy works, so there are no surprises.",
  policiesBand: {
    eyebrow: "Good to know",
    heading: "Simple, fair policies.",
    items: [
      {
        title: "Cancellation policy",
        body: "Life happens. Reschedule or cancel free up to 24 hours before your visit. Inside 24 hours, a 50% fee applies; no-shows are billed in full.",
      },
      {
        title: "What to wear & have ready",
        body: "Comfortable clothes you can move in, a little floor space, and any imaging or notes from past providers if you have them.",
      },
      {
        title: "Payment & superbills",
        body: "Card, HSA, or FSA at time of service. I provide superbills for out-of-network reimbursement and never surprise-bill you.",
      },
    ],
  },
  closingHeading: "Still wondering if this is right for you?",
  closingCta: "Book a free discovery call",
};

export const defaultAboutPage: AboutPage = {
  eyebrow: "About",
  headingPlain: "Care the way it",
  headingAccent: "should have always been.",
  body: [
    "I'm Dr. Kendall Welch, a Doctor of Physical Therapy and the founder of Welch Physiotherapy and Wellness here in Tulsa.",
    "In traditional clinics, I watched motivated, active people get fifteen rushed minutes and a photocopied exercise sheet — then get discharged the moment insurance said so. I built this practice to be the opposite: one clinician, one patient, a full hour, wherever your life happens.",
    "My approach blends manual therapy, movement retraining, and stabilization — calming pain down with hands-on care, then building the strength and control that keeps it from coming back.",
  ],
  image: null,
  imageAlt: "Portrait of Dr. Kendall Welch in natural light",
  beliefs: {
    eyebrow: "What I believe",
    cards: [
      {
        title: "One-on-one, always",
        body: "You will never share my attention with another patient. Every minute of every visit is yours.",
      },
      {
        title: "Movement is medicine",
        body: "Hands-on therapy opens the window; smart movement and stabilization keep it open.",
      },
      {
        title: "Meet people where they are",
        body: "Literally. Your home, gym, or workplace — care should fit your life, not interrupt it.",
      },
      {
        title: "Honest timelines",
        body: "Clear goals, measurable progress, and a straight answer about how long things take.",
      },
    ],
  },
  credentials: {
    eyebrow: "Credentials & training",
    heading: "Qualified to guide you",
    // [Client to confirm/extend this list before launch.]
    items: [
      "Doctor of Physical Therapy (DPT)",
      "Licensed physical therapist — State of Oklahoma",
      "Advanced training in manual therapy",
      "Movement & stabilization specialization",
      "Sports rehabilitation for active adults",
      "CPR / First aid certified",
    ],
  },
  offClock: {
    heading: "Off the clock",
    body: "When I'm not treating, you'll find me training, exploring Tulsa's trails, and testing every coffee shop with outlet seating. I practice what I prescribe — movement, daily.",
    cta: "Work with me",
  },
};

export const defaultTestimonials: Testimonial[] = [
  {
    quoteTitle: "Back to half-marathons",
    quote:
      "After months of knee pain, I figured my running days were done. Kendall met me at my gym, rebuilt my stride, and I just PR'd my half.",
    attribution: "Placeholder · Runner, 41",
    rating: 5,
    featured: true,
  },
  {
    quoteTitle: "Pain-free workdays",
    quote:
      "She worked around my schedule — literally came to my office. My neck pain is gone and I finally understand why it started.",
    attribution: "Placeholder · Engineer, 38",
    rating: 5,
    featured: true,
  },
  {
    quoteTitle: "Stronger than pre-injury",
    quote:
      "One-on-one every visit is a different universe from my old clinic. I'm lifting heavier now than before I got hurt.",
    attribution: "Placeholder · Coach, 35",
    rating: 5,
    featured: true,
  },
];

export const defaultFaqs: Faq[] = [
  {
    question: "Do I need a referral or prescription?",
    answer:
      "No. Oklahoma has direct access, which means you can start physical therapy without a physician referral. If anything outside my scope shows up, I'll refer you to the right provider.",
    order: 1,
  },
  {
    question: "Do you take insurance?",
    answer:
      "I'm an out-of-network, cash-based practice — that's what makes one-on-one hour-long visits possible. You'll receive a superbill after each visit to submit for out-of-network reimbursement, and HSA/FSA cards are accepted.",
    order: 2,
  },
  {
    question: "Where do sessions happen?",
    answer:
      "Wherever works for you: your home, your gym, or your workplace anywhere in the Tulsa metro. I bring the treatment table and all equipment. A leased clinic space is coming soon — mobile visits will always remain an option.",
    order: 3,
  },
  {
    question: "What does a visit cost?",
    answer:
      "Pricing is simple and transparent, with single-visit and package options. We'll go over exact rates on your free discovery call so there are never surprises.",
    order: 4,
  },
  {
    question: "How is this different from a regular PT clinic?",
    answer:
      "You get a Doctor of Physical Therapy one-on-one for the entire visit — no techs, no shared appointments, no 15-minute slots. Your plan is built around your sport and your schedule, not an insurance template.",
    order: 5,
  },
  {
    question: "What should I wear or have ready?",
    answer:
      "Comfortable clothes you can move in and a bit of open floor space. If you have imaging, surgical notes, or past PT records, have them handy — helpful, but not required.",
    order: 6,
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Reschedule or cancel free up to 24 hours before your visit. Within 24 hours, a 50% fee applies; missed visits without notice are billed in full. Emergencies are always handled with grace — just communicate.",
    order: 7,
  },
  {
    question: "How do I access my home exercises?",
    answer:
      "Through the patient portal. After your first visit you'll get a login with your personalized program — video demos, sets and reps, and progress tracking — updated after every session.",
    order: 8,
  },
];

export const defaultFaqPage: FaqPage = {
  eyebrow: "FAQ",
  heading: "Questions, answered.",
  contact: {
    eyebrow: "Get in touch",
    heading: "Send me a message",
    subline: "I'll reply by text or email, usually the same day.",
    button: "Send message",
    success: "Got it — I'll be in touch shortly, usually the same day.",
    error:
      "Something went wrong sending your message. Call or text (903) 918-2611 instead.",
  },
  closingHeading: "Didn't find your answer?",
  closingSubline: "Ask me directly on a free 15-minute discovery call.",
  closingCta: "Book a free discovery call",
};

export const defaultPolicies: Policy[] = [
  {
    title: "Cancellation policy",
    slug: "cancellation",
    body: [
      "Your appointment time is reserved exclusively for you. Reschedule or cancel at no charge up to 24 hours before your visit by call, text, or email. Cancellations within 24 hours are charged 50% of the visit rate; no-shows are charged in full. Genuine emergencies are always handled case by case — just reach out.",
    ],
  },
  {
    title: "Payment & Good Faith Estimate",
    slug: "good-faith-estimate",
    body: [
      "Welch Physiotherapy and Wellness is an out-of-network practice. Payment (card, HSA, FSA) is due at time of service, and superbills are provided for reimbursement. Under the No Surprises Act, you have the right to receive a Good Faith Estimate of expected charges — one is provided before your first visit and any time on request.",
    ],
  },
  {
    title: "Privacy",
    slug: "privacy",
    body: [
      "Your health information is handled in accordance with HIPAA. Contact form submissions are used only to respond to your inquiry and are never sold or shared.",
      // [Full privacy policy to be finalized with the client.]
    ],
  },
];
