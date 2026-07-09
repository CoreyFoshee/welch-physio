export const SITE_NAME = "Welch Physiotherapy and Wellness";

export const DEFAULT_DESCRIPTION =
  "One-on-one, doctor-led physical therapy that comes to your home, gym, or workplace in Tulsa. Book a free discovery call — no referral needed.";

/** Canonical production URL; override with NEXT_PUBLIC_SITE_URL for previews. */
export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  return (raw || "https://welchphysio.com").replace(/\/$/, "");
}
