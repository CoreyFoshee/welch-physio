/**
 * Seed the Sanity dataset with the canonical site copy.
 *
 * Usage:
 *   NEXT_PUBLIC_SANITY_PROJECT_ID=xxx SANITY_API_WRITE_TOKEN=yyy npm run seed
 *
 * Safe to re-run: uses createOrReplace for singletons and deterministic IDs
 * for list documents, so edits made in the Studio to *other* documents are
 * untouched, but re-seeding overwrites seeded docs with the canonical copy.
 */
import { createClient } from "@sanity/client";
import {
  defaultAboutPage,
  defaultExpectPage,
  defaultExpectSteps,
  defaultFaqPage,
  defaultFaqs,
  defaultHomePage,
  defaultPolicies,
  defaultServices,
  defaultServicesPage,
  defaultSiteSettings,
  defaultTestimonials,
} from "../lib/defaultContent";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !token) {
  console.error(
    "Missing env vars. Set NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_API_WRITE_TOKEN (a token with write access), then re-run `npm run seed`.",
  );
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2025-06-01",
  token,
  useCdn: false,
});

// Strip null image placeholders — editors upload real images in the Studio.
function stripNullImages<T>(value: T): T {
  return JSON.parse(
    JSON.stringify(value, (_k, v) => (v === null ? undefined : v)),
  );
}

async function run() {
  const tx = client.transaction();

  const singletons: { id: string; type: string; doc: object }[] = [
    { id: "siteSettings", type: "siteSettings", doc: defaultSiteSettings },
    { id: "homePage", type: "homePage", doc: defaultHomePage },
    { id: "servicesPage", type: "servicesPage", doc: defaultServicesPage },
    { id: "expectPage", type: "expectPage", doc: defaultExpectPage },
    { id: "aboutPage", type: "aboutPage", doc: defaultAboutPage },
    { id: "faqPage", type: "faqPage", doc: defaultFaqPage },
  ];

  for (const s of singletons) {
    tx.createOrReplace({
      _id: s.id,
      _type: s.type,
      ...stripNullImages(s.doc),
    });
  }

  for (const svc of defaultServices) {
    tx.createOrReplace({
      _id: `service-${svc.slug}`,
      _type: "service",
      ...stripNullImages(svc),
      slug: { _type: "slug", current: svc.slug },
    });
  }

  for (const step of defaultExpectSteps) {
    tx.createOrReplace({
      _id: `expectStep-${step.order}`,
      _type: "expectStep",
      ...stripNullImages(step),
    });
  }

  defaultTestimonials.forEach((t, i) => {
    tx.createOrReplace({
      _id: `testimonial-seed-${i + 1}`,
      _type: "testimonial",
      ...t,
    });
  });

  for (const f of defaultFaqs) {
    tx.createOrReplace({ _id: `faq-${f.order}`, _type: "faq", ...f });
  }

  for (const p of defaultPolicies) {
    tx.createOrReplace({
      _id: `policy-${p.slug}`,
      _type: "policy",
      ...p,
      slug: { _type: "slug", current: p.slug },
    });
  }

  await tx.commit();
  console.log(
    `Seeded ${singletons.length} singletons, ${defaultServices.length} services, ${defaultExpectSteps.length} steps, ${defaultTestimonials.length} testimonials, ${defaultFaqs.length} FAQs, ${defaultPolicies.length} policies → ${projectId}/${dataset}`,
  );
}

run().catch((err) => {
  console.error("Seed failed:", err.message ?? err);
  process.exit(1);
});
