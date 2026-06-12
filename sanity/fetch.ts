import { client } from "./client";
import { sanityConfigured } from "./env";
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
} from "@/lib/defaultContent";
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
} from "@/lib/types";

const REVALIDATE = 60;

function isPlainObject(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}

/**
 * Merge a (possibly partial) Sanity document over the default copy so that
 * any field left empty in the CMS falls back to the canonical copy.
 */
function mergeWithDefaults<T>(defaults: T, fromCms: unknown): T {
  if (fromCms === null || fromCms === undefined) return defaults;
  if (isPlainObject(defaults) && isPlainObject(fromCms)) {
    const out: Record<string, unknown> = { ...defaults };
    for (const key of new Set([...Object.keys(defaults), ...Object.keys(fromCms)])) {
      out[key] = mergeWithDefaults(
        (defaults as Record<string, unknown>)[key],
        fromCms[key],
      );
    }
    return out as T;
  }
  if (Array.isArray(fromCms) && fromCms.length === 0) return defaults;
  if (typeof fromCms === "string" && fromCms.trim() === "") return defaults;
  return fromCms as T;
}

async function fetchDoc<T>(query: string, defaults: T): Promise<T> {
  if (!sanityConfigured || !client) return defaults;
  try {
    const data = await client.fetch(query, {}, { next: { revalidate: REVALIDATE } });
    return mergeWithDefaults(defaults, data);
  } catch (err) {
    console.error("Sanity fetch failed; using default content.", err);
    return defaults;
  }
}

async function fetchList<T>(query: string, defaults: T[]): Promise<T[]> {
  if (!sanityConfigured || !client) return defaults;
  try {
    const data = await client.fetch<T[] | null>(query, {}, { next: { revalidate: REVALIDATE } });
    if (!data || data.length === 0) return defaults;
    return data;
  } catch (err) {
    console.error("Sanity fetch failed; using default content.", err);
    return defaults;
  }
}

export const getSiteSettings = () =>
  fetchDoc<SiteSettings>(`*[_id == "siteSettings"][0]`, defaultSiteSettings);

export const getHomePage = () =>
  fetchDoc<HomePage>(`*[_id == "homePage"][0]`, defaultHomePage);

export const getServicesPage = () =>
  fetchDoc<ServicesPage>(`*[_id == "servicesPage"][0]`, defaultServicesPage);

export const getExpectPage = () =>
  fetchDoc<ExpectPage>(`*[_id == "expectPage"][0]`, defaultExpectPage);

export const getAboutPage = () =>
  fetchDoc<AboutPage>(`*[_id == "aboutPage"][0]`, defaultAboutPage);

export const getFaqPage = () =>
  fetchDoc<FaqPage>(`*[_id == "faqPage"][0]`, defaultFaqPage);

export const getServices = () =>
  fetchList<Service>(
    `*[_type == "service"] | order(order asc) {
      title, "slug": slug.current, audienceEyebrow, summary, shortBlurb,
      outcomes, image, "imageAlt": image.alt, order, featured
    }`,
    defaultServices,
  );

export const getExpectSteps = () =>
  fetchList<ExpectStep>(
    `*[_type == "expectStep"] | order(order asc) {
      stepLabel, title, subtitle, body, image, "imageAlt": image.alt, order
    }`,
    defaultExpectSteps,
  );

export const getTestimonials = () =>
  fetchList<Testimonial>(
    `*[_type == "testimonial" && featured == true][0...3] {
      quoteTitle, quote, attribution, rating, featured
    }`,
    defaultTestimonials,
  );

export const getFaqs = () =>
  fetchList<Faq>(
    `*[_type == "faq"] | order(order asc) { question, answer, order }`,
    defaultFaqs,
  );

export const getPolicies = () =>
  fetchList<Policy>(
    `*[_type == "policy"] { title, "slug": slug.current, body }`,
    defaultPolicies,
  );
