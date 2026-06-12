import type { Metadata } from "next";

export interface PageSeo {
  seoTitle?: string;
  seoDescription?: string;
}

export function buildPageMetadata(
  seo: PageSeo | undefined,
  fallback: {
    title: string;
    description: string;
    canonical: string;
    absoluteTitle?: boolean;
  },
): Metadata {
  const title = seo?.seoTitle?.trim() || fallback.title;
  return {
    title: fallback.absoluteTitle ? { absolute: title } : title,
    description: seo?.seoDescription?.trim() || fallback.description,
    alternates: { canonical: fallback.canonical },
  };
}
