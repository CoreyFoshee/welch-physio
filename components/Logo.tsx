import Link from "next/link";

/**
 * Placeholder logo matching the mockups: arch + pulse-line mark, "WELCH" in
 * display type, letterspaced subline. Swap the mark for the converted SVG of
 * Welch_Horizontal_Logo_Full_Color.eps before launch — this is the only file
 * to touch.
 */
export function Logo({
  light = false,
  allWhite = false,
}: {
  light?: boolean;
  allWhite?: boolean;
}) {
  const onDark = light || allWhite;
  const main = onDark ? "text-bone" : "text-ink";
  const sub = allWhite ? "text-bone" : light ? "text-leaf" : "text-sage";
  const icon = allWhite ? "text-bone" : light ? "text-leaf" : "text-olive";
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label="Welch Physiotherapy and Wellness — home">
      <svg
        viewBox="0 0 40 40"
        className={`h-9 w-9 ${icon}`}
        aria-hidden="true"
      >
        <path
          d="M6 36 V22 a14 14 0 0 1 28 0 V36"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <path
          d="M9 28 h6 l3 -6 4 10 3 -6 h6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-xl font-semibold tracking-[0.08em] ${main}`}
        >
          WELCH
        </span>
        <span
          className={`mt-1 text-[8.5px] font-semibold uppercase tracking-[0.22em] ${sub}`}
        >
          Physiotherapy &amp; Wellness
        </span>
      </span>
    </Link>
  );
}
