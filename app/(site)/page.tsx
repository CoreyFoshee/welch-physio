import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { ArchImage } from "@/components/ArchImage";
import { CtaButton } from "@/components/Button";
import { ContactForm } from "@/components/ContactForm";
import { RouteMap } from "@/components/RouteMap";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedItem, AnimatedSection } from "@/components/AnimatedSection";
import { ProblemIcon, Stars, Check } from "@/components/icons";
import {
  getHomePage,
  getServices,
  getSiteSettings,
  getTestimonials,
} from "@/sanity/fetch";

export const revalidate = 60;

export const metadata: Metadata = {
  title: {
    absolute: "Concierge Physical Therapy in Tulsa, OK | Welch Physiotherapy and Wellness",
  },
  description:
    "One-on-one, doctor-led physical therapy that comes to your home, gym, or workplace in Tulsa. Book a free discovery call — no referral needed.",
  alternates: { canonical: "/" },
};

export default async function HomePage() {
  const [home, services, testimonials, settings] = await Promise.all([
    getHomePage(),
    getServices(),
    getTestimonials(),
    getSiteSettings(),
  ]);
  const cta = settings.discoveryCallUrl;

  return (
    <>
      <Hero hero={home.hero} discoveryCallUrl={cta} />

      <Marquee words={home.marqueeWords} />

      {/* Problem */}
      <AnimatedSection className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={home.problem.eyebrow}
            plain={home.problem.heading}
            intro={home.problem.intro}
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {home.problem.cards.map((card) => (
              <AnimatedItem key={card.title}>
                <div className="h-full rounded-3xl bg-white p-8 shadow-[0_2px_16px_rgba(44,52,36,0.06)] transition-all duration-300 motion-safe:hover:-translate-y-1.5 motion-safe:hover:shadow-[0_12px_32px_rgba(44,52,36,0.1)]">
                  <ProblemIcon name={card.icon} />
                  <h3 className="mt-5 text-xl text-ink">{card.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">{card.body}</p>
                </div>
              </AnimatedItem>
            ))}
          </div>
          <AnimatedItem>
            <p className="font-display mx-auto mt-14 max-w-2xl text-center text-xl italic text-sage md:text-2xl">
              {home.problem.stakesLine}
            </p>
          </AnimatedItem>
        </div>
      </AnimatedSection>

      {/* Guide */}
      <AnimatedSection className="bg-mint px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <AnimatedItem>
            <ArchImage
              image={home.guide.image}
              alt={home.guide.imageAlt}
              shape="full"
              label="Dr. Kendall Welch, DPT"
              className="mx-auto aspect-[4/5] w-full max-w-sm"
            />
          </AnimatedItem>
          <div>
            <AnimatedItem>
              <p className="eyebrow text-olive">{home.guide.eyebrow}</p>
            </AnimatedItem>
            <AnimatedItem>
              <h2 className="display-clamp-md mt-4 text-ink">{home.guide.heading}</h2>
            </AnimatedItem>
            {home.guide.body.split("\n\n").map((para) => (
              <AnimatedItem key={para.slice(0, 24)}>
                <p className="mt-5 leading-relaxed text-ink/80">{para}</p>
              </AnimatedItem>
            ))}
            <AnimatedItem>
              <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
                {home.guide.credentials.map((c) => (
                  <li key={c} className="flex items-center gap-2 text-sm font-semibold text-ink/85">
                    <Check className="text-olive" />
                    {c}
                  </li>
                ))}
              </ul>
            </AnimatedItem>
            <AnimatedItem>
              <CtaButton href="/about" variant="outline" className="mt-8">
                {home.guide.cta}
              </CtaButton>
            </AnimatedItem>
          </div>
        </div>
      </AnimatedSection>

      {/* Services overview */}
      <AnimatedSection className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow={home.servicesIntro.eyebrow}
              plain={home.servicesIntro.heading}
              align="left"
            />
            <AnimatedItem>
              <Link
                href="/services"
                className="group eyebrow flex items-center gap-2 text-olive hover:text-sage"
              >
                {home.servicesIntro.link}
                <span aria-hidden="true" className="transition-transform motion-safe:group-hover:translate-x-1">→</span>
              </Link>
            </AnimatedItem>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((svc, i) => (
              <AnimatedItem key={svc.slug}>
                <Link
                  href="/services"
                  className="group block h-full rounded-3xl bg-white p-5 shadow-[0_2px_16px_rgba(44,52,36,0.06)] transition-all duration-300 motion-safe:hover:-translate-y-1.5 motion-safe:hover:shadow-[0_12px_32px_rgba(44,52,36,0.1)]"
                >
                  <ArchImage
                    image={svc.image}
                    alt={svc.imageAlt}
                    shape="top"
                    className="aspect-[4/3] w-full"
                    sizes="(max-width: 640px) 100vw, 25vw"
                  />
                  <p className="eyebrow mt-5 text-sage">0{i + 1}</p>
                  <h3 className="mt-2 text-lg leading-snug text-ink">{svc.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">{svc.shortBlurb}</p>
                </Link>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Differentiator — signature section */}
      <AnimatedSection className="bg-olive px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow={home.differentiator.eyebrow}
            plain={home.differentiator.heading}
            intro={home.differentiator.body}
            light
          />
          <div className="mt-16 md:mt-24">
            <RouteMap nodes={home.differentiator.nodes} />
          </div>
          <AnimatedItem className="mt-14 text-center">
            <CtaButton href={cta} variant="leaf">
              {home.differentiator.cta}
            </CtaButton>
          </AnimatedItem>
        </div>
      </AnimatedSection>

      {/* Plan */}
      <AnimatedSection className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow={home.plan.eyebrow}
            plain={home.plan.heading}
          />
          <ol className="mt-16 grid gap-12 md:grid-cols-3 md:gap-6">
            {home.plan.steps.map((step, i) => (
              <AnimatedItem key={step.title}>
                <li className="relative flex flex-col items-center text-center">
                  {i < home.plan.steps.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="absolute left-[calc(50%+3rem)] top-7 hidden w-[calc(100%-6rem)] border-t-2 border-dashed border-sage/50 md:block"
                    />
                  )}
                  <span className="font-display flex h-14 w-14 items-center justify-center rounded-full border-2 border-dashed border-sage text-xl text-olive">
                    {i + 1}
                  </span>
                  <h3 className="mt-5 text-xl text-ink">{step.title}</h3>
                  <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink/70">
                    {step.body}
                  </p>
                </li>
              </AnimatedItem>
            ))}
          </ol>
          <AnimatedItem className="mt-14 text-center">
            <CtaButton href={cta}>{home.plan.cta}</CtaButton>
          </AnimatedItem>
        </div>
      </AnimatedSection>

      {/* Testimonials */}
      <AnimatedSection className="bg-cream px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={home.testimonials.eyebrow}
            plain={home.testimonials.heading}
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <AnimatedItem key={t.quoteTitle}>
                <figure className="h-full rounded-3xl bg-white p-8 shadow-[0_2px_16px_rgba(44,52,36,0.06)] transition-all duration-300 motion-safe:hover:-translate-y-1.5 motion-safe:hover:shadow-[0_12px_32px_rgba(44,52,36,0.1)]">
                  <Stars rating={t.rating} />
                  <h3 className="mt-4 text-lg text-ink">{t.quoteTitle}</h3>
                  <blockquote className="mt-3 text-sm leading-relaxed text-ink/75">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="eyebrow mt-5 text-[11px] text-sage">
                    {t.attribution}
                  </figcaption>
                </figure>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Closing stakes + mini contact strip */}
      <AnimatedSection className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow={home.closing.eyebrow}
            plain={home.closing.headingPlain}
            accent={home.closing.headingAccent}
            intro={home.closing.body}
          />
          <AnimatedItem>
            <div className="mt-12 rounded-3xl bg-white p-8 shadow-[0_2px_24px_rgba(44,52,36,0.08)] md:p-10">
              <h3 className="text-xl text-ink">{home.closing.contactHeading}</h3>
              <p className="mt-2 text-sm text-ink/70">{home.closing.contactSubline}</p>
              <div className="mt-6">
                <ContactForm variant="mini" button={home.closing.button} />
              </div>
            </div>
          </AnimatedItem>
        </div>
      </AnimatedSection>
    </>
  );
}
