import type { Metadata } from "next";
import { FaqAccordion } from "@/components/FaqAccordion";
import { ContactForm } from "@/components/ContactForm";
import { CtaButton } from "@/components/Button";
import { AnimatedItem, AnimatedSection } from "@/components/AnimatedSection";
import { defaultFaqPage } from "@/lib/defaultContent";
import { buildPageMetadata } from "@/lib/metadata";
import { getFaqPage, getFaqs, getSiteSettings } from "@/sanity/fetch";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const page = await getFaqPage();
  return buildPageMetadata(page, {
    title: defaultFaqPage.seoTitle!,
    description: defaultFaqPage.seoDescription!,
    canonical: "/faq",
  });
}

export default async function FaqPage() {
  const [page, faqs, settings] = await Promise.all([
    getFaqPage(),
    getFaqs(),
    getSiteSettings(),
  ]);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <AnimatedSection className="px-5 pb-8 pt-32 md:px-8 md:pt-40">
        <div className="mx-auto max-w-7xl">
          <AnimatedItem>
            <p className="eyebrow text-sage">{page.eyebrow}</p>
          </AnimatedItem>
          <AnimatedItem>
            <h1 className="display-clamp mt-4 text-ink">{page.heading}</h1>
          </AnimatedItem>
        </div>
      </AnimatedSection>

      <div className="px-5 pb-20 md:px-8">
        <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[1.5fr_1fr]">
          <AnimatedSection as="div">
            <AnimatedItem>
              <FaqAccordion faqs={faqs} />
            </AnimatedItem>
          </AnimatedSection>

          {/* Sticky contact card */}
          <AnimatedSection as="div" id="contact" className="lg:sticky lg:top-28">
            <AnimatedItem>
              <div className="rounded-3xl bg-olive p-8 md:p-9">
                <p className="eyebrow text-leaf">{page.contact.eyebrow}</p>
                <h2 className="font-display mt-3 text-2xl text-bone">
                  {page.contact.heading}
                </h2>
                <p className="mt-2 text-sm text-cream/85">{page.contact.subline}</p>
                <div className="mt-6">
                  <ContactForm
                    variant="full"
                    button={page.contact.button}
                    successMessage={page.contact.success}
                    errorMessage={page.contact.error}
                    formCopy={settings.chrome.contactForm}
                  />
                </div>
                <p className="mt-6 border-t border-cream/15 pt-5 text-sm text-cream/80">
                  {settings.chrome.faqContactOrCall}{" "}
                  <a
                    href={`tel:+1${settings.phone.replace(/\D/g, "")}`}
                    className="font-semibold text-leaf hover:text-mint"
                  >
                    {settings.phone}
                  </a>
                </p>
              </div>
            </AnimatedItem>
          </AnimatedSection>
        </div>
      </div>

      <AnimatedSection className="px-5 py-20 text-center md:px-8 md:py-24">
        <AnimatedItem>
          <h2 className="display-clamp-md text-ink">{page.closingHeading}</h2>
        </AnimatedItem>
        <AnimatedItem>
          <p className="mt-4 text-ink/70">{page.closingSubline}</p>
        </AnimatedItem>
        <AnimatedItem>
          <CtaButton href={settings.discoveryCallUrl} className="mt-8">
            {page.closingCta}
          </CtaButton>
        </AnimatedItem>
      </AnimatedSection>
    </>
  );
}
