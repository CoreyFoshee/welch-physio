import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import { getSiteUrl } from "@/lib/site";
import { getSiteSettings } from "@/sanity/fetch";

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = await getSiteSettings();
  const businessJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: `${settings.businessName} LLC`,
    description: settings.tagline,
    telephone: `+1${settings.phone.replace(/\D/g, "")}`,
    email: settings.email,
    url: getSiteUrl(),
    areaServed: { "@type": "City", name: "Tulsa", address: { "@type": "PostalAddress", addressRegion: "OK" } },
    medicalSpecialty: "PhysicalTherapy",
    founder: { "@type": "Person", name: "Dr. Kendall Welch", honorificSuffix: "DPT" },
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
      />
      <Nav bookingUrl={settings.discoveryCallUrl} chrome={settings.chrome} />
      <main className="flex-1">{children}</main>
      <Footer settings={settings} />
      <StickyMobileCta
        href={settings.discoveryCallUrl}
        label={settings.stickyMobileBar}
      />
    </>
  );
}
