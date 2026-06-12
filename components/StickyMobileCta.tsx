"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CtaButton } from "./Button";

/** Sticky bottom "Book a call" bar on mobile — appears after the hero scrolls out. */
export function StickyMobileCta({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.85);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-x-0 bottom-0 z-40 border-t border-olive/10 bg-bone/95 p-3 backdrop-blur md:hidden"
          initial={{ y: 80 }}
          animate={{ y: 0 }}
          exit={{ y: 80 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <CtaButton href={href} className="w-full">
            {label}
          </CtaButton>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
