import type { Metadata } from "next";

import { PageHero } from "@/components/page/PageHero";
import { CallToAction } from "@/components/sections/CallToAction";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { SERVICES, SITE } from "@/constants";

const PATH = "/services";
const PAGE_TITLE = "Diensten | Websitebeheer, onderhoud & SEO — Website Beheer Pro";
const PAGE_DESC =
  "Ontdek alle diensten van Website Beheer Pro: professioneel websitebeheer, website onderhoud, WordPress onderhoud, beveiliging, monitoring, hosting beheer en technische SEO — één partner voor uw website.";

export const metadata: Metadata = {
  // `absolute`: PAGE_TITLE already carries the brand; skip the root title template.
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESC,
  alternates: { canonical: PATH },
  keywords: [
    "diensten Website Beheer Pro",
    "websitebeheer",
    "website onderhoud",
    "wordpress onderhoud",
    "website beveiliging",
    "technische seo",
    "hosting beheer",
    "website monitoring",
    "website support",
  ],
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: PATH,
    type: "website",
    images: [{ url: "/images/company-img.png", width: 1200, height: 800, alt: PAGE_TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESC,
    images: ["/images/company-img.png"],
  },
};

const HERO = {
  icon: "layers" as const,
  eyebrow: "Diensten · Website Beheer Pro",
  titleLead: "Professioneel websitebeheer,",
  titleEm: "negen gespecialiseerde diensten.",
  intro:
    "Van websitebeheer en website onderhoud tot beveiliging, monitoring en technische SEO. Bekijk wat Website Beheer Pro voor uw bedrijf kan betekenen.",
  align: "center" as const,
};

// BreadcrumbList — gives every /services/[slug] detail page a real parent URL.
const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
    { "@type": "ListItem", position: 2, name: "Diensten", item: `${SITE.url}${PATH}` },
  ],
};

// ItemList of every service, linking to its canonical URL (the four keyword
// offerings use their dedicated landing page via `service.href`).
const ITEM_LIST_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Diensten van Website Beheer Pro",
  itemListElement: SERVICES.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: service.name,
    description: service.tagline,
    url: `${SITE.url}${service.href}`,
  })),
};

export default function ServicesHubPage() {
  return (
    <main className="services-hub" id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ITEM_LIST_JSON_LD) }}
      />
      <PageHero content={HERO} id="services-hub-h" />
      <Services />
      <Testimonials />
      <CallToAction />
    </main>
  );
}
