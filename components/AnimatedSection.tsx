"use client";

import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import type { ReactNode } from "react";

export const EASE = [0.22, 1, 0.36, 1] as const;

export function useRevealVariants() {
  const reduced = useReducedMotion();
  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  };
  const item: Variants = reduced
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5 } },
      }
    : {
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: EASE },
        },
      };
  return { container, item };
}

export function AnimatedSection({
  children,
  className,
  as = "section",
  id,
}: {
  children: ReactNode;
  className?: string;
  as?: "section" | "div" | "li";
  id?: string;
}) {
  const { container } = useRevealVariants();
  const Tag = motion[as];
  return (
    <Tag
      id={id}
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </Tag>
  );
}

export function AnimatedItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const { item } = useRevealVariants();
  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  );
}
