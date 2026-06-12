import { AnimatedItem } from "./AnimatedSection";

export function SectionHeading({
  eyebrow,
  plain,
  accent,
  intro,
  align = "center",
  light = false,
  level = 2,
}: {
  eyebrow?: string;
  plain: string;
  accent?: string;
  intro?: string;
  align?: "center" | "left";
  light?: boolean;
  level?: 1 | 2;
}) {
  const Tag = level === 1 ? "h1" : "h2";
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto" : ""}`}>
      {eyebrow && (
        <AnimatedItem>
          <p className={`eyebrow mb-4 ${light ? "text-leaf" : "text-sage"} ${alignCls}`}>
            {eyebrow}
          </p>
        </AnimatedItem>
      )}
      <AnimatedItem>
        <Tag
          className={`display-clamp-md ${light ? "text-bone" : "text-ink"} ${alignCls}`}
        >
          {plain}{" "}
          {accent && <em className={light ? "text-leaf" : "text-sage"}>{accent}</em>}
        </Tag>
      </AnimatedItem>
      {intro && (
        <AnimatedItem>
          <p
            className={`mt-5 text-base leading-relaxed ${light ? "text-cream/90" : "text-ink/75"} ${alignCls}`}
          >
            {intro}
          </p>
        </AnimatedItem>
      )}
    </div>
  );
}
