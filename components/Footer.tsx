import Link from "next/link";
import { Logo } from "./Logo";
import { CtaButton } from "./Button";
import type { SiteSettings } from "@/lib/types";

export function Footer({ settings }: { settings: SiteSettings }) {
  const { chrome } = settings;
  const year = new Date().getFullYear();
  return (
    <footer className="bg-olive text-cream">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <h2 className="display-clamp text-bone">
              {settings.footer.ctaHeadlinePlain}{" "}
              <em className="text-leaf">{settings.footer.ctaHeadlineAccent}</em>
            </h2>
            <p className="mt-4 max-w-md text-cream/85">{settings.footer.subline}</p>
            <CtaButton
              href={settings.discoveryCallUrl}
              variant="leaf"
              className="mt-8"
            >
              {settings.footer.button}
            </CtaButton>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <nav aria-label="Footer pages">
              <h3 className="eyebrow !font-sans text-leaf">{chrome.footerPagesHeading}</h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                {chrome.navLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-cream/85 hover:text-bone">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              <h3 className="eyebrow !font-sans text-leaf">{chrome.footerContactHeading}</h3>
              <ul className="mt-4 space-y-2.5 text-sm text-cream/85">
                <li>
                  <a href={`tel:+1${settings.phone.replace(/\D/g, "")}`} className="hover:text-bone">
                    {settings.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${settings.email}`} className="break-all hover:text-bone">
                    {settings.email}
                  </a>
                </li>
                <li>{settings.serviceArea}</li>
                <li>{settings.hours}</li>
              </ul>
            </div>
            <nav aria-label="Legal">
              <h3 className="eyebrow !font-sans text-leaf">{chrome.footerLegalHeading}</h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                {chrome.legalLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-cream/85 hover:text-bone">
                      {l.label}
                    </Link>
                  </li>
                ))}
                {settings.patientPortalUrl && settings.patientPortalUrl !== "#" && (
                  <li>
                    <a
                      href={settings.patientPortalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cream/85 hover:text-bone"
                    >
                      {chrome.patientPortalLabel}
                    </a>
                  </li>
                )}
              </ul>
            </nav>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-cream/15 pt-8 sm:flex-row sm:items-center">
          <Logo
            light
            wordmark={chrome.logoWordmark}
            tagline={chrome.logoTagline}
          />
          <p className="text-xs text-cream/60">
            © {year} {settings.businessName} LLC · {chrome.copyrightLocation} · Designed by{" "}
            <a
              href="https://cfdesign.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/75 underline-offset-2 transition-colors hover:text-bone hover:underline"
            >
              CF Design Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
