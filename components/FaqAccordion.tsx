"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { Faq } from "@/lib/types";

export function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const reduced = useReducedMotion();

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => {
        const open = openIndex === i;
        return (
          <div
            key={faq.question}
            className="rounded-2xl bg-white shadow-[0_1px_8px_rgba(44,52,36,0.06)]"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : i)}
              aria-expanded={open}
              aria-controls={`faq-panel-${i}`}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="font-display text-lg text-ink">{faq.question}</span>
              <motion.span
                aria-hidden="true"
                animate={{ rotate: open ? 45 : 0 }}
                transition={{ duration: reduced ? 0 : 0.25 }}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-mint text-lg leading-none text-olive"
              >
                +
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  id={`faq-panel-${i}`}
                  initial={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  animate={reduced ? { opacity: 1 } : { height: "auto", opacity: 1 }}
                  exit={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="space-y-4 px-6 pb-6 text-sm leading-relaxed text-ink/75">
                    {faq.answer.split("\n\n").map((paragraph) => (
                      <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
