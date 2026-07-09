import type { SanityImageRef } from "./types";

/**
 * True only when a real photo has been uploaded in the Studio.
 * While photography is pending, image slots are hidden entirely
 * (client request) instead of showing styled placeholders.
 */
export function hasImage(image?: SanityImageRef | null): boolean {
  return Boolean(image?.asset);
}
