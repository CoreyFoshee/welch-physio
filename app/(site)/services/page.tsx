import type { Metadata } from "next";
import { ArchImage } from "@/components/ArchImage";
import { CtaButton } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedItem, AnimatedSection } from "@/components/AnimatedSection";
import { Check } from "@/components/icons";
import { defaultServicesPage } from "@/lib/defaultContent";
import { buildPageMetadata } from "@/lib/metadata";
import { getServices, getServicesPage, getSiteSettings } from "@/sanity/fetch";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const page = await getServicesPage();
  return buildPageMetadata(page, {
    title: defaultServicesPage.seoTitle!,
    description: defaultServicesPage.seoDescription!,
    canonical: "/services",
    absoluteTitle: true,
  });
}

export default async function ServicesPage() {
  const [page, services, settings] = await Promise.all([
    getServicesPage(),
    getServices(),
    getSiteSettings(),
  ]);
  const cta = settings.discoveryCallUrl;

  return (
    <>
      <AnimatedSection className="px-5 pb-4 pt-32 md:px-8 md:pt-40">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={page.eyebrow}
            plain={page.headingPlain}
            accent={page.headingAccent}
            intro={page.intro}
            align="left"
            level={1}
          />
          <AnimatedItem>
            <CtaButton href={cta} className="mt-8">
              {page.cta}
            </CtaButton>
          </AnimatedItem>
        </div>
      </AnimatedSection>

      <div className="px-5 py-16 md:px-8">
        <div className="mx-auto max-w-7xl space-y-8">
          {services.map((svc, i) => (
            <AnimatedSection
              as="div"
              key={svc.slug}
              className="rounded-3xl bg-white p-6 shadow-[0_2px_16px_rgba(44,52,36,0.06)] md:p-10"
            >
              <div
                className={`grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <AnimatedItem>
                  <ArchImage
                    image={svc.image}
                    alt={svc.imageAlt}
                    shape="full"
                    label={svc.title}
                    className="mx-auto aspect-[4/3] w-full max-w-md"
                    sizes="(max-width: 1024px) 100vw, 35vw"
                  />
                </AnimatedItem>
                <div>
                  <AnimatedItem>
                    <p className="eyebrow text-sage">{svc.audienceEyebrow}</p>
                  </AnimatedItem>
                  <AnimatedItem>
                    <h2 className="mt-3 text-2xl text-ink md:text-3xl">{svc.title}</h2>
                  </AnimatedItem>
                  <AnimatedItem>
                    <p className="mt-4 leading-relaxed text-ink/75">{svc.summary}</p>
                  </AnimatedItem>
                  <AnimatedItem>
                    <ul className="mt-6 space-y-2.5">
                      {svc.outcomes.map((o) => (
                        <li key={o} className="flex items-center gap-2.5 text-sm font-semibold text-ink/85">
                          <Check />
                          {o}
                        </li>
                      ))}
                    </ul>
                  </AnimatedItem>
                </div>
              </div>
            </AnimatedSection>
          ))}

          {/* Pricing / transparency card */}
          <AnimatedSection as="div" className="rounded-3xl bg-cream p-8 md:p-12">
            <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <AnimatedItem>
                  <h2 className="text-2xl text-ink md:text-3xl">{page.pricing.heading}</h2>
                </AnimatedItem>
                <AnimatedItem>
                  <p className="mt-4 leading-relaxed text-ink/75">{page.pricing.body}</p>
                </AnimatedItem>
              </div>
              <AnimatedItem>
                <CtaButton href={cta}>{page.pricing.cta}</CtaButton>
              </AnimatedItem>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </>
  );
}
