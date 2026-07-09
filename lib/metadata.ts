import type { Metadata } from "next";
import { urlFor } from "@/sanity/client";
import { DEFAULT_DESCRIPTION, getSiteUrl, SITE_NAME } from "@/lib/site";
import type { SanityImageRef } from "@/lib/types";

export interface PageSeo {
  seoTitle?: string;
  seoDescription?: string;
  ogImage?: SanityImageRef;
}

const TITLE_SUFFIX = ` | ${SITE_NAME}`;

function resolveDisplayTitle(
  seo: PageSeo | undefined,
  fallback: { title: string; absoluteTitle?: boolean },
): string {
  const raw = seo?.seoTitle?.trim() || fallback.title;
  if (fallback.absoluteTitle || raw.includes(SITE_NAME)) return raw;
  return `${raw}${TITLE_SUFFIX}`;
}

function resolveDescription(
  seo: PageSeo | undefined,
  fallbackDescription: string,
): string {
  return seo?.seoDescription?.trim() || fallbackDescription || DEFAULT_DESCRIPTION;
}

type ShareImage = { url: string; width: number; height: number; alt: string };

function resolveShareImages(ogImage?: SanityImageRef): ShareImage[] {
  const fallback: ShareImage = {
    url: "/opengraph-image",
    width: 1200,
    height: 630,
    alt: SITE_NAME,
  };

  if (!ogImage?.asset) return [fallback];

  const builder = urlFor(ogImage);
  if (!builder) return [fallback];

  const url = builder.width(1200).height(630).fit("crop").auto("format").url();
  return [
    {
      url,
      width: 1200,
      height: 630,
      alt: ogImage.alt?.trim() || SITE_NAME,
    },
  ];
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
  const displayTitle = resolveDisplayTitle(seo, fallback);
  const description = resolveDescription(seo, fallback.description);
  const shareImages = resolveShareImages(seo?.ogImage);
  const twitterImages = shareImages.map((img) => img.url);
  const canonicalPath = fallback.canonical.startsWith("/")
    ? fallback.canonical
    : `/${fallback.canonical}`;

  return {
    title: fallback.absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: canonicalPath },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: SITE_NAME,
      title: displayTitle,
      description,
      url: canonicalPath,
      images: shareImages,
    },
    twitter: {
      card: "summary_large_image",
      title: displayTitle,
      description,
      images: twitterImages,
    },
  };
}

export function rootMetadataExtras(): Pick<Metadata, "metadataBase" | "openGraph" | "twitter" | "icons" | "robots" | "applicationName"> {
  return {
    metadataBase: new URL(getSiteUrl()),
    applicationName: SITE_NAME,
    robots: { index: true, follow: true },
    icons: {
      icon: [{ url: "/icon", type: "image/png", sizes: "32x32" }],
      apple: [{ url: "/apple-icon", type: "image/png", sizes: "180x180" }],
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: SITE_NAME,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: SITE_NAME,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      images: ["/opengraph-image"],
    },
  };
}
