import type { Metadata } from "next";

import { AboutCompany } from "@/components/sections/AboutCompany";
import { PageHero } from "@/components/page/PageHero";
import { CallToAction } from "@/components/sections/CallToAction";
import { ImpactStats } from "@/components/sections/ImpactStats";
import { Process } from "@/components/sections/Process";
import { TeamShowcase } from "@/components/sections/TeamShowcase";
import { Testimonials } from "@/components/sections/Testimonials";
import { SITE } from "@/constants";
import { buildBreadcrumbSchema } from "@/lib/seo";

const PATH = "/over-ons";
const PAGE_TITLE = "Over ons — Professioneel Websitebeheer | Website Beheer Pro";
const PAGE_DESC =
  "Website Beheer Pro is de specialist in professioneel websitebeheer, website onderhoud, beveiliging en technische SEO voor ondernemers en bedrijven in Nederland. Leer ons kennen.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: PATH },
  keywords: [
    "over ons",
    "websitebeheer specialist",
    "website onderhoud nederland",
    "professioneel websitebeheer",
    "website beheer bureau",
    "Website Beheer Pro",
  ],
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: PATH,
    type: "website",
    images: [{ url: "/images/company-img.png", width: 1200, height: 630, alt: "Over ons — Website Beheer Pro" }],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESC,
  },
};

const HERO = {
  icon: "shield" as const,
  eyebrow: "Over ons · Websitebeheer specialist",
  titleLead: "Een gefocust team dat",
  titleEm: "uw website beheert.",
  intro:
    "Website Beheer Pro is een gespecialiseerd team van senior websitebeheer-experts in Nederland. Wij houden uw website veilig, snel en up-to-date — zodat u zich volledig op uw bedrijf kunt richten.",
  align: "center" as const,
};

const ABOUT_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${SITE.url}${PATH}/#aboutpage`,
  url: `${SITE.url}${PATH}`,
  name: PAGE_TITLE,
  description: PAGE_DESC,
  inLanguage: "nl-NL",
  isPartOf: { "@id": `${SITE.url}/#website` },
  about: { "@id": `${SITE.url}/#organization` },
};

const BREADCRUMB_JSON_LD = buildBreadcrumbSchema("Over ons", PATH);

export default function OverOnsPage() {
  return (
    <main className="about-page" id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ABOUT_JSON_LD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }}
      />
      <PageHero content={HERO} id="about-h" />
      <AboutCompany />
      <ImpactStats />
      <Process />
      <TeamShowcase />
      <Testimonials />
      <CallToAction />
    </main>
  );
}
