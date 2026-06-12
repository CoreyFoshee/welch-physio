import { defineField, defineType, type SchemaTypeDefinition } from "sanity";

const str = (name: string, title?: string) =>
  defineField({ name, title, type: "string" });
const txt = (name: string, title?: string) =>
  defineField({ name, title, type: "text", rows: 4 });
const img = (name: string, title?: string) =>
  defineField({
    name,
    title,
    type: "image",
    options: { hotspot: true },
    fields: [{ name: "alt", type: "string", title: "Alt text" }],
  });
const strList = (name: string, title?: string) =>
  defineField({ name, title, type: "array", of: [{ type: "string" }] });

const seoFields = [
  str("seoTitle", "SEO title"),
  txt("seoDescription", "SEO description"),
  img("ogImage", "Open Graph image"),
];

const siteSettings = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  fields: [
    str("businessName"),
    str("tagline"),
    str("phone"),
    str("email"),
    str("serviceArea"),
    str("hours"),
    defineField({
      name: "bookingUrl",
      type: "string",
      description: "External scheduler URL for booking PT appointments",
    }),
    defineField({
      name: "discoveryCallUrl",
      type: "string",
      description: "Scheduler URL for free discovery calls (powers most CTAs)",
    }),
    str("patientPortalUrl", "Patient portal URL"),
    str("questionnaireUrl", "Intake questionnaire URL"),
    defineField({
      name: "socialLinks",
      type: "array",
      of: [
        {
          type: "object",
          fields: [str("label"), str("url")],
        },
      ],
    }),
    str("announcement", "Announcement bar (optional)"),
    defineField({
      name: "chrome",
      title: "Site chrome (nav, footer, forms)",
      type: "object",
      fields: [
        str("logoWordmark", "Logo wordmark"),
        str("logoTagline", "Logo tagline"),
        str("navCta", "Nav / menu CTA label"),
        defineField({
          name: "navLinks",
          type: "array",
          of: [{ type: "object", fields: [str("label"), str("href")] }],
        }),
        str("footerPagesHeading"),
        str("footerContactHeading"),
        str("footerLegalHeading"),
        str("patientPortalLabel"),
        str("copyrightLocation", "Copyright location line"),
        defineField({
          name: "legalLinks",
          type: "array",
          of: [{ type: "object", fields: [str("label"), str("href")] }],
        }),
        defineField({
          name: "contactForm",
          type: "object",
          fields: [
            str("namePlaceholder"),
            str("phonePlaceholder"),
            str("emailPlaceholder"),
            str("messagePlaceholder"),
            str("miniContactPlaceholder"),
            str("sendingLabel"),
            str("honeypotLabel"),
          ],
        }),
        str("faqContactOrCall", "FAQ contact prefix"),
      ],
    }),
    defineField({
      name: "footer",
      type: "object",
      fields: [
        str("ctaHeadlinePlain", "CTA headline (plain part)"),
        str("ctaHeadlineAccent", "CTA headline (sage italic part)"),
        str("subline"),
        str("button"),
      ],
    }),
    str("stickyMobileBar", "Sticky mobile bar label"),
  ],
});

const homePage = defineType({
  name: "homePage",
  title: "Home page",
  type: "document",
  fields: [
    defineField({
      name: "hero",
      type: "object",
      fields: [
        str("eyebrow"),
        str("headlinePlain", "Headline (plain part)"),
        str("headlineAccent", "Headline (sage italic part)"),
        txt("subhead"),
        str("primaryCta"),
        str("secondaryCta"),
        img("image"),
        strList("trustItems", "Trust strip items"),
        str("badgeTitle", "Floating badge title"),
        str("badgeSub", "Floating badge subline"),
        strList("routeLabels", "Route labels (Home/Gym/Work)"),
      ],
    }),
    strList("marqueeWords", "Marquee words"),
    defineField({
      name: "problem",
      type: "object",
      fields: [
        str("eyebrow"),
        str("heading"),
        txt("intro"),
        defineField({
          name: "cards",
          type: "array",
          of: [
            {
              type: "object",
              fields: [str("title"), txt("body"), str("icon")],
            },
          ],
        }),
        txt("stakesLine", "Stakes line (italic)"),
      ],
    }),
    defineField({
      name: "guide",
      type: "object",
      fields: [
        str("eyebrow"),
        str("heading"),
        txt("body"),
        strList("credentials"),
        img("image"),
        str("imageCaption", "Image overlay caption"),
        str("cta"),
      ],
    }),
    defineField({
      name: "servicesIntro",
      type: "object",
      fields: [str("eyebrow"), str("heading"), str("link")],
    }),
    defineField({
      name: "differentiator",
      type: "object",
      fields: [
        str("eyebrow"),
        str("heading"),
        txt("body"),
        defineField({
          name: "nodes",
          type: "array",
          of: [{ type: "object", fields: [str("label"), txt("body")] }],
        }),
        str("cta"),
      ],
    }),
    defineField({
      name: "plan",
      type: "object",
      fields: [
        str("eyebrow"),
        str("heading"),
        defineField({
          name: "steps",
          type: "array",
          of: [{ type: "object", fields: [str("title"), txt("body")] }],
        }),
        str("cta"),
      ],
    }),
    defineField({
      name: "testimonials",
      type: "object",
      fields: [str("eyebrow"), str("heading")],
    }),
    defineField({
      name: "closing",
      type: "object",
      fields: [
        str("eyebrow"),
        str("headingPlain", "Heading (plain part)"),
        str("headingAccent", "Heading (sage italic part)"),
        txt("body"),
        str("contactHeading", "Mini contact card heading"),
        str("contactSubline"),
        str("button"),
      ],
    }),
    ...seoFields,
  ],
});

const service = defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    str("title"),
    defineField({ name: "slug", type: "slug", options: { source: "title" } }),
    str("audienceEyebrow", "Audience eyebrow"),
    txt("summary"),
    txt("shortBlurb", "Short blurb (home page card)"),
    strList("outcomes"),
    img("image"),
    defineField({ name: "order", type: "number" }),
    defineField({ name: "featured", type: "boolean", initialValue: true }),
  ],
  orderings: [
    {
      title: "Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
});

const servicesPage = defineType({
  name: "servicesPage",
  title: "Services page",
  type: "document",
  fields: [
    str("eyebrow"),
    str("headingPlain", "Heading (plain part)"),
    str("headingAccent", "Heading (sage italic part)"),
    txt("intro"),
    str("cta"),
    defineField({
      name: "pricing",
      type: "object",
      title: "Pricing card",
      fields: [str("heading"), txt("body"), str("cta")],
    }),
    ...seoFields,
  ],
});

const expectStep = defineType({
  name: "expectStep",
  title: "What-to-expect step",
  type: "document",
  fields: [
    str("stepLabel", "Step label (e.g. Step 1 · Free)"),
    str("title"),
    str("subtitle"),
    txt("body"),
    img("image"),
    defineField({ name: "order", type: "number" }),
  ],
  orderings: [
    {
      title: "Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
});

const expectPage = defineType({
  name: "expectPage",
  title: "What to Expect page",
  type: "document",
  fields: [
    str("eyebrow"),
    str("heading"),
    txt("intro"),
    defineField({
      name: "policiesBand",
      type: "object",
      fields: [
        str("eyebrow"),
        str("heading"),
        defineField({
          name: "items",
          type: "array",
          of: [{ type: "object", fields: [str("title"), txt("body")] }],
        }),
      ],
    }),
    str("closingHeading"),
    str("closingCta"),
    ...seoFields,
  ],
});

const aboutPage = defineType({
  name: "aboutPage",
  title: "About page",
  type: "document",
  fields: [
    str("eyebrow"),
    str("headingPlain", "Heading (plain part)"),
    str("headingAccent", "Heading (sage italic part)"),
    defineField({
      name: "body",
      title: "Story paragraphs",
      type: "array",
      of: [{ type: "text", rows: 4 }],
    }),
    img("image", "Portrait"),
    str("imageCaption", "Image overlay caption"),
    defineField({
      name: "beliefs",
      type: "object",
      fields: [
        str("eyebrow"),
        defineField({
          name: "cards",
          type: "array",
          of: [{ type: "object", fields: [str("title"), txt("body")] }],
        }),
      ],
    }),
    defineField({
      name: "credentials",
      type: "object",
      fields: [str("eyebrow"), str("heading"), strList("items")],
    }),
    defineField({
      name: "offClock",
      title: "Off the clock card",
      type: "object",
      fields: [str("heading"), txt("body"), str("cta")],
    }),
    ...seoFields,
  ],
});

const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    str("quoteTitle", "Quote title"),
    txt("quote"),
    str("attribution"),
    defineField({
      name: "rating",
      type: "number",
      initialValue: 5,
      validation: (r) => r.min(1).max(5),
    }),
    defineField({ name: "featured", type: "boolean", initialValue: true }),
  ],
});

const faq = defineType({
  name: "faq",
  title: "FAQ",
  type: "document",
  fields: [
    str("question"),
    txt("answer"),
    str("category"),
    defineField({ name: "order", type: "number" }),
  ],
  orderings: [
    {
      title: "Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
});

const faqPage = defineType({
  name: "faqPage",
  title: "FAQ page",
  type: "document",
  fields: [
    str("eyebrow"),
    str("heading"),
    defineField({
      name: "contact",
      type: "object",
      title: "Contact card",
      fields: [
        str("eyebrow"),
        str("heading"),
        str("subline"),
        str("button"),
        str("success", "Success message"),
        str("error", "Error message"),
      ],
    }),
    str("closingHeading"),
    str("closingSubline"),
    str("closingCta"),
    ...seoFields,
  ],
});

const policy = defineType({
  name: "policy",
  title: "Policy",
  type: "document",
  fields: [
    str("title"),
    defineField({ name: "slug", type: "slug", options: { source: "title" } }),
    defineField({
      name: "body",
      title: "Body paragraphs",
      type: "array",
      of: [{ type: "text", rows: 5 }],
    }),
  ],
});

const policiesPage = defineType({
  name: "policiesPage",
  title: "Policies page",
  type: "document",
  fields: [str("eyebrow"), str("heading"), ...seoFields],
});

export const schemaTypes: SchemaTypeDefinition[] = [
  siteSettings,
  homePage,
  servicesPage,
  expectPage,
  aboutPage,
  faqPage,
  policiesPage,
  service,
  expectStep,
  testimonial,
  faq,
  policy,
];
