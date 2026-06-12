"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Logo } from "./Logo";
import { CtaButton } from "./Button";
import { EASE } from "./AnimatedSection";
import type { SiteChrome } from "@/lib/types";

export function Nav({
  bookingUrl,
  chrome,
}: {
  bookingUrl: string;
  chrome: SiteChrome;
}) {
  const links = chrome.navLinks;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const reduced = useReducedMotion();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const mobileMenu =
    mounted &&
    createPortal(
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col justify-between bg-olive px-6 pb-10 pt-28 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav aria-label="Mobile">
              <ul className="space-y-2">
                {links.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={reduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 * i, duration: 0.45, ease: EASE }}
                  >
                    <Link
                      href={l.href}
                      className="font-display block py-2 text-4xl text-bone"
                    >
                      {l.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
            >
              <CtaButton href={bookingUrl} variant="leaf" className="w-full">
                Book a call
              </CtaButton>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body,
    );

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-300 ${
          open
            ? "bg-olive"
            : scrolled
              ? "bg-bone/85 shadow-[0_2px_24px_rgba(44,52,36,0.08)] backdrop-blur-md"
              : "bg-transparent"
        }`}
      >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 md:px-8">
        <Logo
          allWhite={open}
          wordmark={chrome.logoWordmark}
          tagline={chrome.logoTagline}
        />
        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-[13px] font-semibold uppercase tracking-[0.12em] transition-colors hover:text-sage ${
                pathname === l.href ? "text-sage underline underline-offset-8" : "text-ink"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <CtaButton href={bookingUrl} className="!px-5 !py-2.5">
            {chrome.navCta}
          </CtaButton>
        </nav>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="relative z-[60] flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`h-0.5 w-6 rounded transition-all duration-300 ${
              open ? "translate-y-1 rotate-45 bg-bone" : "bg-ink"
            }`}
          />
          <span
            className={`h-0.5 w-6 rounded transition-all duration-300 ${
              open ? "-translate-y-1 -rotate-45 bg-bone" : "bg-ink"
            }`}
          />
        </button>
      </div>
      </div>
      {mobileMenu}
    </header>
  );
}
