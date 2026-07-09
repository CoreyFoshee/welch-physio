import type { Metadata } from "next";
import { ArchImage } from "@/components/ArchImage";
import { CtaButton } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedItem, AnimatedSection } from "@/components/AnimatedSection";
import { defaultExpectPage } from "@/lib/defaultContent";
import { hasImage } from "@/lib/images";
import { buildPageMetadata } from "@/lib/metadata";
import { getExpectPage, getExpectSteps, getSiteSettings } from "@/sanity/fetch";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const page = await getExpectPage();
  return buildPageMetadata(page, {
    title: defaultExpectPage.seoTitle!,
    description: defaultExpectPage.seoDescription!,
    canonical: "/what-to-expect",
  });
}

export default async function WhatToExpectPage() {
  const [page, steps, settings] = await Promise.all([
    getExpectPage(),
    getExpectSteps(),
    getSiteSettings(),
  ]);
  const cta = settings.discoveryCallUrl;

  return (
    <>
      <AnimatedSection className="px-5 pb-6 pt-32 md:px-8 md:pt-40">
        <SectionHeading
          eyebrow={page.eyebrow}
          plain={page.heading}
          intro={page.intro}
          level={1}
        />
      </AnimatedSection>

      {/* Vertical dashed timeline */}
      <div className="px-5 py-14 md:px-8">
        <ol className="relative mx-auto max-w-5xl space-y-10">
          <span
            aria-hidden="true"
            className="absolute bottom-8 left-5 top-8 border-l-2 border-dashed border-sage/40 md:left-7"
          />
          {steps.map((step, i) => (
            <AnimatedSection as="li" key={step.title} className="relative pl-16 md:pl-24">
              <span className="font-display absolute left-0 top-6 flex h-10 w-10 items-center justify-center rounded-full border-2 border-dashed border-sage bg-bone text-lg text-olive md:h-14 md:w-14 md:text-xl">
                {i + 1}
              </span>
              <AnimatedItem>
                <div
                  className={`grid items-center gap-8 rounded-3xl bg-white p-6 shadow-[0_2px_16px_rgba(44,52,36,0.06)] md:p-9 ${
                    hasImage(step.image) ? "md:grid-cols-[1.3fr_0.7fr]" : ""
                  }`}
                >
                  <div>
                    <p className="eyebrow text-sage">{step.stepLabel}</p>
                    <h2 className="mt-2.5 text-2xl text-ink">{step.title}</h2>
                    <p className="mt-1.5 text-sm font-semibold italic text-olive">
                      {step.subtitle}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-ink/75">{step.body}</p>
                  </div>
                  {hasImage(step.image) && (
                    <ArchImage
                      image={step.image}
                      alt={step.imageAlt}
                      shape="full"
                      className="aspect-[4/3] w-full max-md:hidden"
                      sizes="25vw"
                    />
                  )}
                </div>
              </AnimatedItem>
            </AnimatedSection>
          ))}
        </ol>
      </div>

      {/* Policies band */}
      <AnimatedSection className="bg-olive px-5 py-20 md:px-8 md:py-24" id="policies">
        <div className="mx-auto max-w-6xl">
          <AnimatedItem>
            <p className="eyebrow text-leaf">{page.policiesBand.eyebrow}</p>
          </AnimatedItem>
          <AnimatedItem>
            <h2 className="display-clamp-md mt-3 text-bone">{page.policiesBand.heading}</h2>
          </AnimatedItem>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {page.policiesBand.items.map((item) => (
              <AnimatedItem key={item.title}>
                <h3 className="font-display text-lg text-leaf">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/90">{item.body}</p>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Closing CTA */}
      <AnimatedSection className="px-5 py-20 text-center md:px-8 md:py-28">
        <AnimatedItem>
          <h2 className="display-clamp-md text-ink">{page.closingHeading}</h2>
        </AnimatedItem>
        <AnimatedItem>
          <CtaButton href={cta} className="mt-8">
            {page.closingCta}
          </CtaButton>
        </AnimatedItem>
      </AnimatedSection>
    </>
  );
}
