import type {
  AboutPage,
  ExpectPage,
  ExpectStep,
  Faq,
  FaqPage,
  HomePage,
  NavLink,
  PoliciesPage,
  Policy,
  Service,
  ServicesPage,
  SiteSettings,
  Testimonial,
} from "./types";

const defaultNavLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "What to Expect", href: "/what-to-expect" },
  { label: "FAQ", href: "/faq" },
];

const defaultLegalLinks: NavLink[] = [
  { label: "Privacy policy", href: "/policies#privacy" },
  { label: "Cancellation policy", href: "/policies#cancellation" },
  { label: "Good Faith Estimate", href: "/policies#good-faith-estimate" },
];

const PT_EVERYWHERE_BOOKING = "https://app.pteverywhere.com/welchphysio/bookingonline";

/**
 * Canonical site copy (client-approved via the content review doc, Jul 2026).
 * Used as:
 * 1. The source for `npm run seed` (populates Sanity), and
 * 2. The render fallback whenever Sanity is unconfigured or a field is empty,
 *    so the site never ships blank.
 */

export const defaultSiteSettings: SiteSettings = {
  businessName: "Welch Physiotherapy and Wellness",
  tagline: "Mobile, personalized, family oriented physical therapy · Tulsa, OK",
  phone: "(918) 340-2493",
  email: "info@welchphysio.com",
  serviceArea: "Serving the Tulsa metro",
  hours: "By appointment only",
  bookingUrl: PT_EVERYWHERE_BOOKING,
  discoveryCallUrl: PT_EVERYWHERE_BOOKING,
  // Patient portal lives in PT Everywhere (same platform as booking)
  patientPortalUrl: PT_EVERYWHERE_BOOKING,
  // Intake questionnaires are sent directly through the PT Everywhere portal
  questionnaireUrl: "#",
  socialLinks: [],
  chrome: {
    logoWordmark: "WELCH",
    logoTagline: "Physiotherapy & Wellness",
    navCta: "Book a call",
    navLinks: defaultNavLinks,
    footerPagesHeading: "Pages",
    footerContactHeading: "Contact",
    footerLegalHeading: "Legal",
    patientPortalLabel: "Patient portal",
    copyrightLocation: "Tulsa, OK",
    legalLinks: defaultLegalLinks,
    contactForm: {
      namePlaceholder: "Name",
      phonePlaceholder: "Phone",
      emailPlaceholder: "Email",
      messagePlaceholder: "What's going on?",
      miniContactPlaceholder: "Phone or email",
      sendingLabel: "Sending…",
      honeypotLabel: "Don't fill this out:",
    },
    faqContactOrCall: "Or call/text",
  },
  footer: {
    ctaHeadlinePlain: "Keeping Tulsa moving —",
    ctaHeadlineAccent: "expert physical therapy, delivered to you.",
    subline: "Book a free 15-minute discovery call. No referral needed.",
    button: "Book a free discovery call",
  },
  stickyMobileBar: "Book a free call",
};

export const defaultHomePage: HomePage = {
  hero: {
    eyebrow: "Mobile, personalized, family oriented physical therapy · Tulsa, OK",
    headlinePlain: "Keeping Tulsa Moving.",
    headlineAccent: "Expert physical therapy, delivered to you.",
    subhead:
      "One-on-one care for active adults and busy families. We come to you — your home, your gym, or your workplace. No waiting rooms. No rushed visits. Just a clear plan to get you back to what you love.",
    primaryCta: "Book a free discovery call",
    secondaryCta: "What is the process?",
    image: null,
    imageAlt: "Physical therapist guiding an athlete through a lunge in a home gym",
    trustItems: [
      "Doctor of Physical Therapy",
      "One-on-one, every single visit",
      "Serving the Tulsa metro",
    ],
    badgeTitle: "",
    badgeSub: "",
    routeLabels: [],
  },
  marqueeWords: ["Manual therapy", "Movement", "Stabilization", "Sports rehab", "Recovery"],
  problem: {
    eyebrow: "Not sure where to start?",
    heading: "Let's figure out what is going on.",
    intro:
      "Whether you're dealing with a new injury, lingering pain, or simply aren't sure who to see, a thorough evaluation is often the best place to start. As a Doctor of Physical Therapy, I can assess your symptoms, identify potential orthopedic causes, and help determine the right path forward. If physical therapy is the right fit, we'll create a personalized plan together. If not, I'll help guide you toward the appropriate provider or next step.",
    cards: [
      {
        title: "For active adults and busy parents",
        body: "Overuse injuries? Recovering after pregnancy? Or simply lifting little ones all day? If you are struggling to find time to prioritize your own health — get expert care designed to fit your goals and keep you moving.",
        icon: "clock",
      },
      {
        title: "For athletes",
        body: "Helping high school, college, and recreational athletes recover from injury and perform at their best.",
        icon: "sheet",
      },
      {
        title: "For lifelong movers",
        body: "Whether it's pickleball, cycling, tennis, golf, or running, your treatment plan is built around your goals.",
        icon: "stop",
      },
    ],
    stakesLine:
      "It costs more than money — it costs miles, lifts, seasons, and time with the people you love.",
  },
  guide: {
    eyebrow: "Your guide",
    heading: "Hi, I'm Dr. Kendall Welch, PT, DPT, OCS.",
    body: "I work with individuals dealing with pain or injuries across all stages of life — from high school athletes to busy parents and working professionals. I'm excited to bring a mobile, concierge-style physical therapy service to Tulsa, designed for people who don't have the time or flexibility for traditional clinic visits multiple times per week.",
    credentials: [
      "Doctor of Physical Therapy (DPT)",
      "Board Certified Orthopaedic Clinical Specialist (OCS)",
      "Certified in Trigger Point Dry Needling",
      "Pregnancy & Postpartum Corrective Exercise Specialist",
    ],
    image: null,
    imageAlt: "Portrait of Dr. Kendall Welch, DPT",
    imageCaption: "Dr. Kendall Welch, DPT",
    cta: "More about my approach",
  },
  servicesIntro: {
    eyebrow: "Services",
    heading: "Care built around your goals",
    link: "All services",
  },
  differentiator: {
    eyebrow: "",
    heading: "Physical therapy that travels with you.",
    body: "Concierge, onsite care for busy schedules. I bring the clinic — table, tools, and a full treatment plan — to wherever your day is happening.",
    nodes: [
      {
        label: "Your home",
        body: "Sessions in your living room — perfect for busy families or remote workers.",
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
    cta: "Book a discovery call to see if you're in my service area",
  },
  plan: {
    eyebrow: "Your plan",
    heading: "Three simple steps",
    steps: [
      {
        title: "Book a free discovery call",
        body: "A 15-minute phone call. Tell me what's going on and ask questions. We'll decide together if we're a fit.",
      },
      {
        title: "Get your personalized plan",
        body: "A full one-on-one evaluation wherever you choose, with a clear roadmap on day one.",
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
    eyebrow: "Stuck in a pain cycle?",
    headingPlain: "Invest in your body today,",
    headingAccent: "get the results you want tomorrow.",
    body: "Most aches respond fastest in the first weeks. The longer you wait, the longer the road back. One free phone call is all it takes to know your next step.",
    contactHeading: "Prefer to send a message first?",
    contactSubline: "Fill this out and I'll text or email you back — usually same day.",
    button: "Send message",
  },
  seoTitle: "Mobile Physical Therapy in Tulsa, OK | Welch Physiotherapy and Wellness",
  seoDescription:
    "One-on-one, doctor-led physical therapy that comes to your home, gym, or workplace in Tulsa. Book a free discovery call — no referral needed.",
};

export const defaultServices: Service[] = [
  {
    title: "Injury evaluation and recovery",
    slug: "sports-rehab",
    audienceEyebrow: "For busy moms, runners, cyclists, golfers, HIIT gym goers, and desk workers",
    summary:
      "Evaluation of acute or chronic injuries with easy access for questions along the way.",
    shortBlurb: "Not sure what is hurting? Let's chat.",
    outcomes: [
      "Sprains and strains, shoulder or hip impingement, rotator cuff tears, patellofemoral pain",
      "Neck pain, headaches, radicular pain (\u201Csciatica\u201D or pinched nerve), sacroiliac dysfunction, herniated discs, pregnancy or postpartum related pain",
      "Bursitis, elbow or wrist pain, plantar fasciitis",
    ],
    image: null,
    imageAlt: "Runner training on a trail",
    order: 1,
    featured: true,
  },
  {
    title: "Pain relief & manual therapy",
    slug: "pain-relief",
    audienceEyebrow: "For stubborn pain that you can't get rid of",
    summary:
      "Hands-on treatment — joint mobilization and targeted soft-tissue work — paired with movement that makes the change last.",
    shortBlurb:
      "Hands-on treatment for stubborn neck, back, and joint pain that hasn't budged.",
    outcomes: [
      "Calm pain down in the first visits using hands-on manual therapy, dry needling, myofascial cupping, ASTYM/Graston, or KT taping — whatever we determine best fits your needs",
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
    audienceEyebrow: "Stay ahead of the pain or injury",
    summary:
      "A head-to-toe movement assessment that finds weak links before they cost you more time and money.",
    shortBlurb:
      "The critical next step after hands-on intervention — how do we keep you moving well.",
    outcomes: [
      "Personalized, updated, easy to access stretches and exercises",
      "Targeted strength & mobility plan of care",
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
  headingPlain: "Not your average PT visit.",
  headingAccent: "",
  intro:
    "Every plan is built one-on-one around your body and your goals — with manual therapy, movement retraining, and stabilization at the core.",
  cta: "Book a free discovery call",
  pricing: {
    heading: "Transparent, out-of-network pricing.",
    body: "No referrals needed. Superbills provided for HSA/FSA and out-of-network reimbursement. Exact rates and packages are covered on your free discovery call.",
    cta: "Ask about pricing",
  },
  seoTitle: "Physical Therapy Services in Tulsa | Injury Recovery, Pain Relief & More",
  seoDescription:
    "Injury evaluation, manual therapy, movement & performance, and wellness memberships — one-on-one care built around your goals.",
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
  seoTitle: "What to Expect",
  seoDescription:
    "From a free discovery call to long-term wellness: exactly how mobile physical therapy with Dr. Welch works, step by step.",
};

export const defaultAboutPage: AboutPage = {
  eyebrow: "About",
  headingPlain: "Care the way",
  headingAccent: "you need it.",
  body: [
    "I'm Dr. Kendall Welch, a Doctor of Physical Therapy and the founder of Welch Physiotherapy and Wellness here in Tulsa.",
    "I work with individuals dealing with pain or injuries across all stages of life — from high school athletes to busy parents and working professionals. I'm excited to bring a mobile, concierge-style physical therapy service to Tulsa, designed for people who don't have the time or flexibility for traditional clinic visits multiple times per week.",
    "Whether you're a remote worker with limited breaks, someone juggling a packed schedule after work, or a parent trying to coordinate care for a high school athlete, I'm here to make high-quality physical therapy more accessible and convenient.",
    "My approach blends manual therapy, movement retraining, and stabilization — reducing pain with hands-on care, then building the strength and control needed to keep it from coming back.",
  ],
  image: null,
  imageAlt: "Portrait of Dr. Kendall Welch in natural light",
  imageCaption: "Dr. Welch portrait, natural light",
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
    items: [
      "Doctor of Physical Therapy (DPT)",
      "Board Certified Clinical Specialist in Orthopaedic Physical Therapy (OCS)",
      "Certified in Trigger Point Dry Needling",
      "Pregnancy and Postpartum Corrective Exercise Specialist",
      "Advanced training in manual therapy",
      "CPR / First aid certified",
    ],
  },
  offClock: {
    heading: "Off the clock",
    body: "When I'm not treating, you can find me enjoying quality time with my family near the pool, or exploring Tulsa's patios and parks. In my free time I enjoy playing volleyball, pickleball, and golf.",
    cta: "Work with me",
  },
  seoTitle: "About Dr. Kendall Welch, PT, DPT, OCS | Welch Physiotherapy",
  seoDescription:
    "Meet Dr. Kendall Welch, Doctor of Physical Therapy and founder of Tulsa's mobile, concierge physiotherapy practice for active adults and busy families.",
};

export const defaultTestimonials: Testimonial[] = [
  {
    quote:
      "We were blessed to get to work with Dr. Welch when my son was a freshman in high school. My son had a brachial plexus injury, and was paralyzed in his arm. We had a neurologist tell us that he could possibly not be able to move it for the rest of his life. My son is an athlete and that information was heartbreaking to us all. Dr. Welch worked with him for approximately nine weeks and was very positive with him and kept him thinking he was going to fully recover. She was personable and made us feel like family. I'm happy to report he got feeling back in his shoulder and it functions properly today as he is now a collegiate baseball player. Dr. Welch was a blessing to our family during this scary time and I truly believe she was the reason my son had a full recovery.",
    attribution: "Amy",
    rating: 5,
    featured: true,
  },
  {
    quote:
      "Being able to have Kendall use her expertise to work with one of the top athletes in the state at that time and help him recover to get back on the floor to compete was a true blessing for our team. Her patience and knowledge, along with knowing what athletes need, developed a strong foundation of trust. I highly recommend her to any athlete, coach, or organization seeking her care and support.",
    attribution: "Lenny",
    rating: 5,
    featured: true,
  },
  {
    quote:
      "Dr. Welch helped me tremendously when I was 6 weeks postpartum and had immediate onset of crippling low back pain. She was able to keep me calm and help me with immediate pain relief, along with guiding me back to being able to work out comfortably. I was able to avoid excessive out of pocket medical costs by working with her. I am so thankful!",
    attribution: "Katelyn",
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
      "I'm an out-of-network, cash-based practice — that's what makes one-on-one mobile visits possible. You can request a superbill after each visit to submit for out-of-network reimbursement, and HSA/FSA cards are accepted.",
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
      "You get a Doctor of Physical Therapy with orthopedic board certification one-on-one for the entire visit — no techs, no shared appointments. Your plan is built around your goals and schedule, not an insurance template.",
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
      "Something went wrong sending your message. Call or text (918) 340-2493 instead.",
  },
  closingHeading: "Didn't find your answer?",
  closingSubline: "Ask me directly on a free 15-minute discovery call.",
  closingCta: "Book a free discovery call",
  seoTitle: "FAQ & Contact",
  seoDescription:
    "Answers on referrals, insurance, pricing, locations, and policies — plus a quick way to message Dr. Welch directly.",
};

export const defaultPoliciesPage: PoliciesPage = {
  eyebrow: "Legal",
  heading: "Policies",
  seoTitle: "Policies",
  seoDescription:
    "Cancellation policy, payment details, Good Faith Estimate rights, and our Notice of Privacy Practices.",
};

const PRACTICE_NAME = "Welch Physiotherapy and Wellness LLC";

/** Full HIPAA Notice of Privacy Practices supplied by the client (effective June 1, 2026). */
const noticeOfPrivacyPractices: string[] = [
  "Effective Date: June 1, 2026",
  "THIS NOTICE DESCRIBES HOW MEDICAL INFORMATION ABOUT YOU MAY BE USED AND DISCLOSED AND HOW YOU CAN GET ACCESS TO THIS INFORMATION. PLEASE REVIEW THIS NOTICE CAREFULLY.",
  "If you have any questions about this notice, please contact our privacy officer: Kendall Welch, (918) 340-2493.",
  `1. Summary of Rights and Obligations Concerning Health Information. ${PRACTICE_NAME} is committed to preserving the privacy and confidentiality of your health information, which is required both by federal and state law. We are required by law to provide you with this notice of our legal duties, your rights, and our privacy practices, with respect to using and disclosing your health information that is created or retained by ${PRACTICE_NAME}. Each time you visit us, we make a record of your visit. Typically, this record contains your symptoms, examination and test results, our assessment of your condition, a record of your treatment interventions, and a plan for future care or treatment. We have an ethical and legal obligation to protect the privacy of your health information, and we will only use or disclose this information in limited circumstances. In general, we may use and disclose your health information to: plan your care and treatment; provide treatment by us or others; communicate with other providers such as referring physicians; receive payment from you, your health plan, or your health insurer; make quality assessments and work to improve the care we render and the outcomes we achieve, known as health care operations; make you aware of services and treatments that may be of interest to you; and comply with state and federal laws that require us to disclose your health information. We may also use or disclose your health information where you have authorized us to do so.`,
  `Although your health record belongs to ${PRACTICE_NAME}, the information in your record belongs to you. You have the right to: ensure the accuracy of your health record; request confidential communications between you and your provider and request limits on the use and disclosure of your health information; and request an accounting of certain uses and disclosures of health information we have made about you.`,
  "We are required to: maintain the privacy of your health information; provide you with notice, such as this Notice of Privacy Practices, as to our legal duties and privacy practices with respect to information we collect and maintain about you; abide by the terms of our most current Notice of Privacy Practices; notify you if we are unable to agree to a requested restriction; and accommodate reasonable requests you may have to communicate health information by alternative means or at alternative locations.",
  "We reserve the right to change our practices and to make the new provisions effective for all your health information that we maintain. Should our information practices change, a revised Notice of Privacy Practices will be available upon request. If there is a material change, a revised Notice of Privacy Practices will be distributed to the extent required by law. We will not use or disclose your health information without your authorization, except as described in our most current Notice of Privacy Practices.",
  "2. We may use or disclose your medical information in the following ways:",
  "Treatment. We may use and disclose your protected health information to provide, coordinate and manage your rehab care. That may include consulting with other health care providers about your health care or referring you to another health care provider for treatment, including physicians, nurses, and other health care providers involved in your care. For example, we may release your protected health information to a specialist to whom you have been referred to ensure that the specialist has the necessary information he or she needs to diagnose and/or treat you.",
  "Payment. We may use and disclose your health information so that we may bill and collect payment for the services that we provided to you. For example, we may contact your health insurer to verify your eligibility for benefits, and may need to disclose to it some details of your medical condition or expected course of treatment. We may use or disclose your information so that a bill may be sent to you, your health insurer, or a family member. The information on or accompanying the bill may include information that identifies you and your diagnosis, as well as services rendered, any procedures performed, and supplies used. If, however, you pay cash at the time of service, we will not disclose your protected health information to your health plan or any other responsible payer unless you sign an authorization for us to do so. If we agree to await payment from your health plan or put you on a payment plan, we may provide health information to a collection agency, small claims court or other court of competent jurisdiction in the event your claims for our services are not paid within 90 days and you have not made alternative payment arrangements with us.",
  "Health Care Operations. We may use and disclose your health information to assist in the operation of our practice. For example, we may use information in your health record to assess the care and outcomes in your case and others like it as part of a continuous effort to improve the quality and effectiveness of the healthcare and services we provide. We may use and disclose your health information to conduct cost-management and business planning activities for our practice.",
  `Business Associates. ${PRACTICE_NAME} sometimes contracts with third-party business associates for services. Examples include answering services, transcriptionists, billing services, consultants, and legal counsel. We may disclose your health information to our business associates so that they can perform the job we have asked them to do. To protect your health information, however, we require our business associates to appropriately safeguard your information.`,
  "Appointment Reminders. We may use and disclose information in your medical record to contact you as a reminder that you have an appointment. We usually will call you at home the day before your appointment and leave a message for you on your answering machine or with an individual who responds to our telephone call. However, you may request that we call you only at a certain number or that we refrain from leaving messages, and we will endeavor to accommodate all reasonable requests.",
  "Treatment Options. We may use and disclose your health information in order to inform you of alternative treatments.",
  "Release to Family/Friends. Our staff, using their professional judgment, may disclose to a family member, other relative, close personal friend or any other person you identify, your health information to the extent it is relevant to that person's involvement in your care or for payment related to your care. We will provide you with an opportunity to object to such a disclosure whenever we practicably can do so. We may disclose the health information of minor children to their parents or guardians unless such disclosure is otherwise prohibited by law.",
  "Health-Related Benefits and Services. We may use and disclose health information to tell you about health-related benefits or services that may be of interest to you. In face-to-face communications, such as appointments with your provider, we may tell you about other products and services that may be of interest to you.",
  "Newsletters and Other Communications. We may use your personal information in order to communicate to you via newsletters (including electronic newsletters, subject to applicable anti-spam laws), mailings, or other means regarding treatment options, health related information, disease management programs, wellness programs, or other community based initiatives or activities in which our practice is participating.",
  "Disaster Relief. We may disclose your health information in disaster relief situations where disaster relief organizations seek your health information to coordinate your care, or notify family and friends of your location and condition. We will provide you with an opportunity to agree or object to such a disclosure whenever we practicably can do so.",
  "Marketing. In most circumstances, we are required by law to receive your written authorization before we use or disclose your health information for marketing purposes. However, we may provide you with promotional gifts of nominal value and market services or products to you in face-to-face communications. Under no circumstances will we sell our patient lists or your health information to a third party without your written authorization.",
  "Public Health Activities. We may disclose medical information about you for public health activities. These activities generally include: licensing and certification carried out by public health authorities; prevention or control of disease, injury, or disability; reports of births and deaths; reports of child abuse or neglect; notifications to people who may have been exposed to a disease or may be at risk for contracting or spreading a disease or condition; organ or tissue donation; and notifications to appropriate government authorities if we believe a patient has been the victim of abuse, neglect, or domestic violence. We will make this disclosure when required by law, or if you agree to the disclosure, or when authorized by law and in our professional judgment disclosure is required to prevent serious harm.",
  "Food and Drug Administration (FDA). We may disclose to the FDA and other regulatory agencies of the federal and state government health information relating to adverse events with respect to food, supplements, products and product defects, or post-marketing monitoring information to enable product recalls, repairs, or replacement.",
  "Workers Compensation. We may disclose your health information to the extent authorized by and to the extent necessary to comply with laws relating to workers' compensation or other similar programs established by law.",
  `Law Enforcement. We may release your health information: in response to a court order, subpoena, warrant, summons, or similar process as authorized under state or federal law; to identify or locate a suspect, fugitive, material witness, or similar person; about the victim of a crime if, under certain limited circumstances, we are unable to obtain the person's agreement; about a death we believe may be the result of criminal conduct; about criminal conduct at ${PRACTICE_NAME}; to coroners or medical examiners; in emergency circumstances to report a crime, the location of the crime or victims, or the identity, description, or location of the person who committed the crime; to authorized federal officials for intelligence, counterintelligence, and other national security activities authorized by law; and to authorized federal officials so they may conduct special investigations or provide protection to the President, other authorized persons, or foreign heads of state.`,
  "De-identified Information. We may use your health information to create \u201Cde-identified\u201D information, or we may disclose your information to a business associate so that the business associate can create de-identified information on our behalf. When we \u201Cde-identify\u201D health information, we remove information that identifies you as the source of the information. Health information is considered \u201Cde-identified\u201D only if there is no reasonable basis to believe that the health information could be used to identify you.",
  "Personal Representative. If you have a personal representative, such as a legal guardian, we will treat that person as if that person is you with respect to disclosures of your health information. If you become deceased, we may disclose health information to an executor or administrator of your estate to the extent that person is acting as your personal representative.",
  "HTLV-III Test. If we perform the HTLV-III test on you (to determine if you have been exposed to HIV), we will not disclose the results of the test to anyone but you without your written consent unless otherwise required by law. We also will not disclose the fact that you have taken the test to anyone without your written consent unless otherwise required by law.",
  "Limited Data Set. We may use and disclose a limited data set that does not contain specific readily identifiable information about you for research, public health, and health care operations. We may not disseminate the limited data set unless we enter into a data use agreement with the recipient in which the recipient agrees to limit the use of that data set to the purposes for which it was provided, ensure the security of the data, and not identify the information or use it to contact any individual.",
  "3. Authorization for Other Uses of Medical Information. Uses of medical information not covered by our most current Notice of Privacy Practices or the laws that apply to us will be made only with your written authorization. You should be aware that we are not responsible for any further disclosures made by the party you authorize us to release information to. If you provide us with authorization to use or disclose medical information about you, you may revoke that authorization, in writing, at any time. If you revoke your authorization, we will no longer use or disclose medical information about you for the reasons covered by your written authorization, except to the extent that we have already taken action in reliance on your authorization or, if the authorization was obtained as a condition of obtaining insurance coverage and the insurer has the right to contest a claim or the insurance coverage itself. We are unable to take back any disclosures we have already made with your authorization, and we are required to retain our records of the care that we provided to you.",
  "4. Your Health Information Rights. You have the following rights regarding medical information we gather about you:",
  "A. Right to Obtain a Paper Copy of This Notice. You have the right to a paper copy of this Notice of Privacy Practices at any time. Even if you have agreed to receive this notice electronically, you are still entitled to a paper copy.",
  "B. Right to Inspect and Copy. You have the right to inspect and copy medical information that may be used to make decisions about your care. This includes medical and billing records. To inspect and copy medical information, you must submit a written request to our privacy officer. We will supply you with a form for such a request. If you request a copy of your medical information, we may charge a reasonable fee for the costs of labor, postage, and supplies associated with your request. We may not charge you a fee if you require your medical information for a claim for benefits under the Social Security Act (such as claims for Social Security, Supplemental Security Income, and any other state or federal needs-based benefit program). If your medical information is maintained in an electronic health record, you also have the right to request that an electronic copy of your record be sent to you or to another individual or entity. We may charge you a reasonable cost-based fee limited to the labor costs associated with transmitting the electronic health record.",
  `C. Right to Amend. If you feel that medical information we have about you is incorrect or incomplete, you may ask us to amend the information. You have the right to request an amendment for as long as we retain the information. To request an amendment, your request must be made in writing and submitted to our privacy officer. In addition, you must provide a reason that supports your request. We may deny your request for an amendment if it is not in writing or does not include a reason to support the request. In addition, we may deny your request if you ask us to amend information that: was not created by us, unless the person or entity that created the information is no longer available to make the amendment; is not part of the medical information kept by or for ${PRACTICE_NAME}; is not part of the information which you would be permitted to inspect and copy; or is accurate and complete. If we deny your request for amendment, you may submit a statement of disagreement. We may reasonably limit the length of this statement. Your letter of disagreement will be included in your medical record, but we may also include a rebuttal statement.`,
  "D. Right to an Accounting of Disclosures. You have the right to request an accounting of disclosures of your health information made by us. In your accounting, we are not required to list certain disclosures, including: disclosures made for treatment, payment, and health care operations purposes or disclosures made incidental to treatment, payment, and health care operations (however, if the disclosures were made through an electronic health record, you have the right to request an accounting for such disclosures that were made during the previous 3 years); disclosures made pursuant to your authorization; disclosures made to create a limited data set; and disclosures made directly to you. To request an accounting of disclosures, you must submit your request in writing to our privacy officer. Your request must state a time period which may not be longer than six years and may not include dates before April 14, 2003. Your request should indicate in what form you would like the accounting of disclosures (for example, on paper or electronically by e-mail). The first accounting of disclosures you request within any 12-month period will be free. For additional requests within the same period, we may charge you for the reasonable costs of providing the accounting of disclosures. We will notify you of the costs involved and you may choose to withdraw or modify your request at that time, before any costs are incurred. Under limited circumstances mandated by federal and state law, we may temporarily deny your request for an accounting of disclosures.",
  "E. Right to Request Restrictions. You have the right to request a restriction or limitation on the medical information we use or disclose about you for treatment, payment, or health care operations. If you paid out-of-pocket for a specific item or service, you have the right to request that medical information with respect to that item or service not be disclosed to a health plan for purposes of payment or health care operations, and we are required to honor that request. You also have the right to request a limit on the medical information we communicate about you to someone who is involved in your care or the payment for your care. Except as noted above, we are not required to agree to your request. If we do agree, we will comply with your request unless the restricted information is needed to provide you with emergency treatment. To request restrictions, you must make your request in writing to our privacy officer. In your request, you must tell us: what information you want to limit; whether you want to limit our use, disclosure, or both; and to whom you want the limits to apply.",
  "F. Right to Request Confidential Communications. You have the right to request that we communicate with you about medical matters in a certain way or at a certain location. For example, you can ask that we only contact you at work or by e-mail. To request confidential communications, you must make your request in writing to your provider or our privacy officer. We will not ask you the reason for your request. We will accommodate all reasonable requests. Your request must specify how or where you wish to be contacted.",
  "G. Right to Receive Notice of a Breach. We are required to notify you by first class mail or by e-mail (if you have indicated a preference to receive information by e-mail) of any breaches of Unsecured Protected Health Information as soon as possible, but in any event, no later than 60 days following the discovery of the breach. \u201CUnsecured Protected Health Information\u201D is information that is not secured through the use of a technology or methodology identified by the Secretary of the U.S. Department of Health and Human Services to render the Protected Health Information unusable, unreadable, and undecipherable to unauthorized users. The notice is required to include: a brief description of the breach, including the date of the breach and the date of its discovery, if known; a description of the type of Unsecured Protected Health Information involved in the breach; steps you should take to protect yourself from potential harm resulting from the breach; a brief description of actions we are taking to investigate the breach, mitigate losses, and protect against further breaches; and contact information to permit you to ask questions or obtain additional information. In the event the breach involves 10 or more patients whose contact information is out of date, we will post a notice of the breach on the home page of our website or in a major print or broadcast media. If the breach involves more than 500 patients in the state or jurisdiction, we will send notices to prominent media outlets. If the breach involves more than 500 patients, we are required to immediately notify the Secretary. We also are required to submit an annual report to the Secretary of breaches that involved less than 500 patients during the year and will maintain a written log of breaches involving less than 500 patients.",
  "5. Complaints. If you believe your privacy rights have been violated, you may file a complaint with us or with the Secretary of the U.S. Department of Health and Human Services, 200 Independence Ave, S.W., Washington, D.C. 20201. To file a complaint with us, contact our privacy officer at the contact information listed above. All complaints must be submitted in writing and should be submitted within 180 days of when you knew or should have known that the alleged violation occurred. See the Office for Civil Rights website, www.hhs.gov/ocr/hipaa, for more information. You will not be penalized for filing a complaint.",
];

export const defaultPolicies: Policy[] = [
  {
    title: "Cancellation policy",
    slug: "cancellation",
    body: [
      "Your appointment time is reserved exclusively for you. Reschedule or cancel at no charge up to 24 hours before your visit by call, text, or email. Cancellations within 24 hours are charged 50% of the visit rate; no-shows are charged in full.",
    ],
  },
  {
    title: "Payment & Good Faith Estimate",
    slug: "good-faith-estimate",
    body: [
      "Welch Physiotherapy and Wellness is an out-of-network practice. Payment (card, HSA, FSA) is due at time of service, and superbills are provided for reimbursement by request. Under the No Surprises Act, you have the right to receive a Good Faith Estimate of expected charges — one is provided before your first visit and any time on request.",
    ],
  },
  {
    title: "Notice of Privacy Practices",
    slug: "privacy",
    body: noticeOfPrivacyPractices,
  },
];
