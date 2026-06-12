import { config } from "dotenv";

config({ path: ".env.local" });
config({ path: ".env" });

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
  defaultPoliciesPage,
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

/** Sanity requires `_key` on every object inside an array — seed data must include them. */
function addArrayKeys<T>(value: T, path = "root"): T {
  if (Array.isArray(value)) {
    return value.map((item, index) => {
      const itemPath = `${path}[${index}]`;
      if (item !== null && typeof item === "object" && !Array.isArray(item)) {
        const obj = item as Record<string, unknown>;
        const keyed =
          typeof obj._key === "string" && obj._key.length > 0
            ? obj
            : { _key: itemPath.replace(/[^a-zA-Z0-9]+/g, "_"), ...obj };
        return addArrayKeys(keyed, itemPath);
      }
      return item;
    }) as T;
  }
  if (value !== null && typeof value === "object") {
    const out: Record<string, unknown> = {};
    for (const [key, child] of Object.entries(value as Record<string, unknown>)) {
      out[key] = addArrayKeys(child, `${path}.${key}`);
    }
    return out as T;
  }
  return value;
}

/** Alt text lives on `image.alt` in the schema — not as a top-level `imageAlt` field. */
function stripImageAlt<T>(value: T): T {
  if (Array.isArray(value)) {
    return value.map(stripImageAlt) as T;
  }
  if (value !== null && typeof value === "object") {
    const out: Record<string, unknown> = {};
    for (const [key, child] of Object.entries(value as Record<string, unknown>)) {
      if (key === "imageAlt") continue;
      out[key] = stripImageAlt(child);
    }
    return out as T;
  }
  return value;
}

function prepareDoc<T extends object>(doc: T): T {
  return addArrayKeys(stripImageAlt(stripNullImages(doc)));
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
    { id: "policiesPage", type: "policiesPage", doc: defaultPoliciesPage },
  ];

  for (const s of singletons) {
    tx.createOrReplace({
      _id: s.id,
      _type: s.type,
      ...prepareDoc(s.doc),
    });
  }

  for (const svc of defaultServices) {
    tx.createOrReplace({
      _id: `service-${svc.slug}`,
      _type: "service",
      ...prepareDoc(svc),
      slug: { _type: "slug", current: svc.slug },
    });
  }

  for (const step of defaultExpectSteps) {
    tx.createOrReplace({
      _id: `expectStep-${step.order}`,
      _type: "expectStep",
      ...prepareDoc(step),
    });
  }

  defaultTestimonials.forEach((t, i) => {
    tx.createOrReplace({
      _id: `testimonial-seed-${i + 1}`,
      _type: "testimonial",
      ...prepareDoc(t),
    });
  });

  for (const f of defaultFaqs) {
    tx.createOrReplace({ _id: `faq-${f.order}`, _type: "faq", ...prepareDoc(f) });
  }

  for (const p of defaultPolicies) {
    const { slug, ...rest } = p;
    tx.createOrReplace({
      _id: `policy-${slug}`,
      _type: "policy",
      ...prepareDoc(rest),
      slug: { _type: "slug", current: slug },
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
