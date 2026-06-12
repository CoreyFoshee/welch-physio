import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "olive" | "leaf" | "outline" | "outline-light";

const styles: Record<Variant, string> = {
  olive:
    "bg-olive text-bone hover:bg-ink",
  leaf:
    "bg-leaf text-ink hover:bg-mint",
  outline:
    "border border-olive/40 text-olive hover:border-olive hover:bg-olive/5",
  "outline-light":
    "border border-bone/40 text-bone hover:border-bone hover:bg-bone/10",
};

export function CtaButton({
  href,
  children,
  variant = "olive",
  arrow = true,
  className = "",
  external,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
  external?: boolean;
}) {
  const isExternal = external ?? /^https?:/.test(href);
  const cls = `group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[13px] font-semibold uppercase tracking-[0.14em] transition-colors duration-300 ${styles[variant]} ${className}`;
  const inner = (
    <>
      <span>{children}</span>
      {arrow && (
        <span
          aria-hidden="true"
          className="transition-transform duration-300 motion-safe:group-hover:translate-x-1"
        >
          →
        </span>
      )}
    </>
  );
  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}
