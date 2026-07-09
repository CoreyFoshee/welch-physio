"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArchImage } from "./ArchImage";
import { CtaButton } from "./Button";
import { MiniRoute } from "./RouteMap";
import { EASE } from "./AnimatedSection";
import type { HomePage } from "@/lib/types";

export function Hero({
  hero,
  discoveryCallUrl,
}: {
  hero: HomePage["hero"];
  discoveryCallUrl: string;
}) {
  const reduced = useReducedMotion();
  const item: Variants = reduced
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.5 } } }
    : {
        hidden: { opacity: 0, y: 28 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
      };

  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-32 md:px-8 md:pb-24 md:pt-40">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p variants={item} className="eyebrow text-sage">
            {hero.eyebrow}
          </motion.p>
          <motion.h1 variants={item} className="display-clamp mt-5 text-ink">
            {hero.headlinePlain}{" "}
            <em className="text-sage">{hero.headlineAccent}</em>
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-ink/75 md:text-lg"
          >
            {hero.subhead}
          </motion.p>
          <motion.div
            variants={item}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <CtaButton href={discoveryCallUrl} className="w-full sm:w-auto">
              {hero.primaryCta}
            </CtaButton>
            <CtaButton
              href="/what-to-expect"
              variant="outline"
              className="w-full sm:w-auto"
            >
              {hero.secondaryCta}
            </CtaButton>
          </motion.div>
          <motion.ul
            variants={item}
            className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[13px] font-semibold text-ink/80"
          >
            {hero.trustItems.map((t) => (
              <li key={t} className="flex items-center gap-1.5">
                <span className="text-sage" aria-hidden="true">✓</span>
                {t}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
          className="relative mx-auto flex w-full max-w-md flex-col items-center"
        >
          <ArchImage
            image={hero.image}
            alt={hero.imageAlt}
            shape="full"
            priority
            className="aspect-[4/5] w-full"
            sizes="(max-width: 1024px) 100vw, 38vw"
          />
          {hero.badgeTitle && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5, ease: EASE }}
              className="absolute -left-2 top-10 rounded-2xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur md:-left-8"
            >
              <p className="eyebrow text-[10px] text-olive">{hero.badgeTitle}</p>
              <p className="mt-0.5 text-xs text-ink/70">{hero.badgeSub}</p>
            </motion.div>
          )}
          {hero.routeLabels.length > 0 && <MiniRoute labels={hero.routeLabels} />}
        </motion.div>
      </div>
    </section>
  );
}
