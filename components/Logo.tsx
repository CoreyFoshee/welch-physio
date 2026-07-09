import Link from "next/link";
import { BRAND, BrandMark, BrandWordmark } from "@/lib/brandAssets";

/**
 * Official logo lockup, vector-traced from Welch_Horizontal Logo Full Color.eps:
 * blob-and-dots mark, Recline "WELCH" wordmark (outlined paths), letterspaced subline.
 */
export function Logo({
  light = false,
  allWhite = false,
  tagline = "Physiotherapy & Wellness",
}: {
  light?: boolean;
  allWhite?: boolean;
  wordmark?: string;
  tagline?: string;
}) {
  // Color variants follow the brand guide: leaf/sage mark + olive type on light
  // backgrounds, cream mark + bone type on dark, all-bone for the overlay menu.
  const blobColor = allWhite ? BRAND.bone : light ? BRAND.logoCream : BRAND.logoLeaf;
  const dotColor = allWhite ? BRAND.bone : BRAND.logoSage;
  const main = light || allWhite ? "text-bone" : "text-ink";
  const sub = allWhite ? "text-bone" : light ? "text-leaf" : "text-sage";
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label="Welch Physiotherapy and Wellness — home">
      <BrandMark size={30} blobColor={blobColor} dotColor={dotColor} />
      <span className="flex flex-col leading-none">
        <span className={main}>
          <BrandWordmark height={17} />
        </span>
        <span
          className={`mt-1 text-[8.5px] font-semibold uppercase tracking-[0.22em] ${sub}`}
        >
          {tagline}
        </span>
      </span>
    </Link>
  );
}
