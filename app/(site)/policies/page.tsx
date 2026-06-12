import type { Metadata } from "next";
import { AnimatedItem, AnimatedSection } from "@/components/AnimatedSection";
import { defaultPoliciesPage } from "@/lib/defaultContent";
import { buildPageMetadata } from "@/lib/metadata";
import { getPolicies, getPoliciesPage } from "@/sanity/fetch";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPoliciesPage();
  return buildPageMetadata(page, {
    title: defaultPoliciesPage.seoTitle!,
    description: defaultPoliciesPage.seoDescription!,
    canonical: "/policies",
  });
}

export default async function PoliciesPage() {
  const [page, policies] = await Promise.all([getPoliciesPage(), getPolicies()]);

  return (
    <div className="px-5 pb-24 pt-32 md:px-8 md:pt-40">
      <div className="mx-auto max-w-3xl">
        <AnimatedSection as="div">
          <AnimatedItem>
            <p className="eyebrow text-sage">{page.eyebrow}</p>
          </AnimatedItem>
          <AnimatedItem>
            <h1 className="display-clamp mt-4 text-ink">{page.heading}</h1>
          </AnimatedItem>
        </AnimatedSection>
        <div className="mt-14 space-y-8">
          {policies.map((policy) => (
            <AnimatedSection
              as="div"
              key={policy.slug}
              id={policy.slug}
              className="scroll-mt-28 rounded-3xl bg-white p-8 shadow-[0_2px_16px_rgba(44,52,36,0.06)] md:p-10"
            >
              <AnimatedItem>
                <h2 className="text-2xl text-ink">{policy.title}</h2>
              </AnimatedItem>
              {policy.body.map((para) => (
                <AnimatedItem key={para.slice(0, 24)}>
                  <p className="mt-4 leading-relaxed text-ink/75">{para}</p>
                </AnimatedItem>
              ))}
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
