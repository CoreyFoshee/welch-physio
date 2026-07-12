import type { Metadata } from "next";
import { ArchImage } from "@/components/ArchImage";
import { AnimatedItem, AnimatedSection } from "@/components/AnimatedSection";
import { Check } from "@/components/icons";
import { defaultAboutPage } from "@/lib/defaultContent";
import { hasImage } from "@/lib/images";
import { buildPageMetadata } from "@/lib/metadata";
import { getAboutPage } from "@/sanity/fetch";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const page = await getAboutPage();
  return buildPageMetadata(page, {
    title: defaultAboutPage.seoTitle!,
    description: defaultAboutPage.seoDescription!,
    canonical: "/about",
    absoluteTitle: true,
  });
}

export default async function AboutPage() {
  const page = await getAboutPage();

  return (
    <>
      {/* Portrait + story */}
      <AnimatedSection className="px-5 pb-20 pt-32 md:px-8 md:pb-28 md:pt-40">
        <div
          className={`mx-auto grid items-start gap-14 ${
            hasImage(page.image) ? "max-w-6xl lg:grid-cols-[0.85fr_1.15fr]" : "max-w-3xl"
          }`}
        >
          {hasImage(page.image) && (
            <AnimatedItem>
              <ArchImage
                image={page.image}
                alt={page.imageAlt}
                shape="full"
                label={page.imageCaption}
                priority
                className="mx-auto aspect-[4/5] w-full max-w-md"
                sizes="(max-width: 1024px) 100vw, 38vw"
              />
            </AnimatedItem>
          )}
          <div>
            <AnimatedItem>
              <p className="eyebrow text-sage">{page.eyebrow}</p>
            </AnimatedItem>
            <AnimatedItem>
              <h1 className="display-clamp mt-4 text-ink">
                {page.headingPlain} <em className="text-sage">{page.headingAccent}</em>
              </h1>
            </AnimatedItem>
            {page.body.map((para) => (
              <AnimatedItem key={para.slice(0, 24)}>
                <p className="mt-6 leading-relaxed text-ink/80">{para}</p>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* What I believe */}
      <AnimatedSection className="bg-mint px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <AnimatedItem>
            <p className="eyebrow text-olive">{page.beliefs.eyebrow}</p>
          </AnimatedItem>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {page.beliefs.cards.map((card) => (
              <AnimatedItem key={card.title}>
                <div className="h-full rounded-3xl bg-white p-7 shadow-[0_2px_12px_rgba(44,52,36,0.05)] transition-all duration-300 motion-safe:hover:-translate-y-1.5 motion-safe:hover:shadow-[0_12px_28px_rgba(44,52,36,0.1)]">
                  <h2 className="text-lg text-ink">{card.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">{card.body}</p>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Credentials */}
      <AnimatedSection className="px-5 pb-24 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <AnimatedItem>
            <p className="eyebrow text-sage">{page.credentials.eyebrow}</p>
          </AnimatedItem>
          <AnimatedItem>
            <h2 className="display-clamp-md mt-3 text-ink">{page.credentials.heading}</h2>
          </AnimatedItem>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {page.credentials.items.map((item) => (
              <AnimatedItem key={item}>
                <div className="flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-ink/85 shadow-[0_1px_8px_rgba(44,52,36,0.05)]">
                  <Check />
                  {item}
                </div>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
