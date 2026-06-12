"use client";

import { Fragment } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "./AnimatedSection";
import type { RouteNode } from "@/lib/types";

const DOT_SIZE = "2.5rem"; // h-10 / w-10

function NodeDot({ light }: { light?: boolean }) {
  return (
    <span
      className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 ${
        light ? "border-leaf bg-olive" : "border-sage bg-bone"
      }`}
      aria-hidden="true"
    >
      <span className={`h-3 w-3 rounded-full ${light ? "bg-leaf" : "bg-sage"}`} />
    </span>
  );
}

/** Solid bar that draws on scroll between two dot edges. */
function RouteConnector({
  reduced,
  delay,
  direction = "horizontal",
}: {
  reduced: boolean | null;
  delay: number;
  direction?: "horizontal" | "vertical";
}) {
  const isHorizontal = direction === "horizontal";

  return (
    <motion.div
      className={`origin-left bg-leaf ${
        isHorizontal ? "h-0.5 w-full" : "h-full w-0.5 origin-top"
      }`}
      initial={
        reduced
          ? { scaleX: 1, scaleY: 1 }
          : { scaleX: isHorizontal ? 0 : 1, scaleY: isHorizontal ? 1 : 0 }
      }
      whileInView={{ scaleX: 1, scaleY: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay, duration: 0.7, ease: EASE }}
      aria-hidden="true"
    />
  );
}

/** Small dotted HOME → GYM → WORK strip used under the hero image. */
export function MiniRoute({ labels }: { labels: string[] }) {
  const reduced = useReducedMotion();
  return (
    <div className="relative mt-6 w-full max-w-sm">
      <svg viewBox="0 0 320 40" className="w-full" aria-hidden="true">
        <motion.path
          d="M10 30 C 80 5, 140 40, 200 18 S 290 12, 310 24"
          fill="none"
          stroke="#8B9E6C"
          strokeWidth="2"
          strokeDasharray="2 7"
          strokeLinecap="round"
          initial={reduced ? undefined : { pathLength: 0 }}
          whileInView={reduced ? undefined : { pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: EASE }}
        />
      </svg>
      <div className="mt-1 flex justify-between px-1">
        {labels.map((label, i) => (
          <motion.span
            key={label}
            className="eyebrow flex items-center gap-1.5 text-[11px] text-olive"
            initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.35, duration: 0.4, ease: EASE }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-leaf" aria-hidden="true" />
            {label}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

/** Full differentiator route: solid segments connecting Home → Gym → Workplace. */
export function RouteMap({ nodes }: { nodes: RouteNode[] }) {
  const reduced = useReducedMotion();
  const segmentDelay = (i: number) => 0.2 + i * 0.65;
  const dotDelay = (i: number) => i * 0.65;

  return (
    <ol className="relative mx-auto grid max-w-4xl gap-0 overflow-visible md:grid-cols-3 md:gap-8">
      {nodes.map((node, i) => (
        <Fragment key={node.label}>
          {i > 0 && (
            <li
              className="flex h-6 justify-start pl-5 md:hidden"
              aria-hidden="true"
            >
              <RouteConnector
                reduced={reduced}
                delay={segmentDelay(i - 1)}
                direction="vertical"
              />
            </li>
          )}

          <motion.li
            className="relative flex items-start gap-4 overflow-visible md:flex-col md:items-center md:text-center"
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: dotDelay(i), duration: 0.5, ease: EASE }}
          >
            {/* Desktop: edge-to-edge from this dot's right rim to the next dot's left rim */}
            {i < nodes.length - 1 && (
              <div
                className="pointer-events-none absolute top-5 z-0 hidden h-0.5 -translate-y-1/2 md:block"
                style={{
                  left: `calc(50% + ${DOT_SIZE} / 2)`,
                  width: `calc(100% + 2rem - ${DOT_SIZE})`,
                }}
                aria-hidden="true"
              >
                <RouteConnector
                  reduced={reduced}
                  delay={segmentDelay(i)}
                  direction="horizontal"
                />
              </div>
            )}

            <motion.div
              className="md:mb-4"
              initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: dotDelay(i), duration: 0.4, ease: EASE }}
            >
              <NodeDot light />
            </motion.div>

            <div>
              <h3 className="eyebrow !font-sans text-leaf">{node.label}</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-cream/90 md:mx-auto">
                {node.body}
              </p>
            </div>
          </motion.li>
        </Fragment>
      ))}
    </ol>
  );
}
