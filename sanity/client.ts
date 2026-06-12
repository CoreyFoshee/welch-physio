import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { apiVersion, dataset, projectId, sanityConfigured } from "./env";

export const client = sanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
      token: process.env.SANITY_API_READ_TOKEN,
      perspective: "published",
    })
  : null;

const builder = client ? imageUrlBuilder(client) : null;

export function urlFor(source: SanityImageSource) {
  return builder ? builder.image(source) : null;
}
