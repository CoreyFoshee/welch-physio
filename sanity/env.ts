export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
export const apiVersion = "2025-06-01";

/** True when a Sanity project is configured; otherwise the site renders default copy. */
export const sanityConfigured = projectId.length > 0;
