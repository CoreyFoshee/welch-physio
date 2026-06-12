"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "./AnimatedSection";
import type { RouteNode } from "@/lib/types";

function NodeDot({ light }: { light?: boolean }) {
  return (
    <span
      className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${
        light ? "border-leaf bg-olive" : "border-sage bg-bone"
      }`}
      aria-hidden="true"
    >
      <span className={`h-3 w-3 rounded-full ${light ? "bg-leaf" : "bg-sage"}`} />
    </span>
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

/** Full differentiator route: dashed path across olive band with three nodes. */
export function RouteMap({ nodes }: { nodes: RouteNode[] }) {
  const reduced = useReducedMotion();
  return (
    <div className="relative">
      {/* Desktop: horizontal dotted path behind the three nodes */}
      <svg
        viewBox="0 0 1000 120"
        className="absolute left-0 top-5 hidden w-full md:block"
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M40 80 C 200 10, 360 100, 500 55 S 820 20, 960 70"
          fill="none"
          stroke="#C0CA74"
          strokeWidth="2.5"
          strokeDasharray="1 12"
          strokeLinecap="round"
          initial={reduced ? undefined : { pathLength: 0 }}
          whileInView={reduced ? undefined : { pathLength: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.8, ease: EASE }}
        />
      </svg>
      {/* Mobile: vertical dotted line */}
      <div
        className="absolute bottom-4 left-5 top-4 border-l-2 border-dashed border-leaf/50 md:hidden"
        aria-hidden="true"
      />
      <ol className="relative grid gap-10 md:grid-cols-3 md:gap-8">
        {nodes.map((node, i) => (
          <motion.li
            key={node.label}
            className="flex items-start gap-4 md:flex-col md:items-center md:text-center"
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.4 + i * 0.3, duration: 0.5, ease: EASE }}
          >
            <NodeDot light />
            <div className="md:mt-4">
              <h3 className="eyebrow !font-sans text-leaf">{node.label}</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-cream/90">
                {node.body}
              </p>
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
