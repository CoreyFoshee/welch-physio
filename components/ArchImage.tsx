import Image from "next/image";
import { urlFor } from "@/sanity/client";
import type { SanityImageRef } from "@/lib/types";

/**
 * Signature arch-masked image. Renders the Sanity image when one is set;
 * otherwise ships a styled placeholder (brand gradient + leaf-vein pattern)
 * so the build never blocks on photography.
 */
export function ArchImage({
  image,
  alt,
  shape = "full",
  label,
  className = "",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 40vw",
}: {
  image?: SanityImageRef;
  alt: string;
  shape?: "full" | "top";
  label?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  const shapeCls = shape === "full" ? "arch-full" : "arch-top rounded-b-xl";
  const url =
    image?.asset && urlFor(image)
      ? urlFor(image)!.width(1200).fit("max").auto("format").url()
      : null;

  return (
    <div
      className={`group relative overflow-hidden ${shapeCls} ${className}`}
    >
      {url ? (
        <Image
          src={url}
          alt={image?.alt ?? alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-[1.04]"
        />
      ) : (
        <div
          role="img"
          aria-label={alt}
          className="absolute inset-0 bg-gradient-to-b from-sage via-olive to-ink transition-transform duration-700 motion-safe:group-hover:scale-[1.04]"
        >
          {/* leaf-vein pattern */}
          <svg
            className="absolute inset-0 h-full w-full opacity-25"
            viewBox="0 0 400 600"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
          >
            <g fill="none" stroke="#D2E8C5" strokeWidth="1">
              <path d="M200 620 C 195 480 190 320 200 140 C 205 80 210 40 200 -20" />
              <path d="M200 520 C 150 470 110 430 60 410" />
              <path d="M200 440 C 255 395 300 360 350 345" />
              <path d="M200 360 C 150 315 105 280 55 265" />
              <path d="M200 280 C 250 240 295 210 345 195" />
              <path d="M200 200 C 155 165 115 140 70 128" />
              <path d="M200 130 C 245 100 285 80 330 70" />
            </g>
          </svg>
        </div>
      )}
      {label && (
        <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-bone/90 px-3 py-1.5 text-[11px] font-semibold tracking-wide text-ink backdrop-blur">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-sage" aria-hidden="true" />
          {label}
        </span>
      )}
    </div>
  );
}
