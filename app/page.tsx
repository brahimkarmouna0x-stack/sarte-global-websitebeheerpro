import type { Metadata } from "next";

import { AboutCompany } from "@/components/sections/AboutCompany";
import { CallToAction } from "@/components/sections/CallToAction";
import { Hero } from "@/components/sections/Hero";
import { ImpactStats } from "@/components/sections/ImpactStats";
import { Journal } from "@/components/sections/Journal";
import { LocalBusinesses } from "@/components/sections/LocalBusinesses";
import { PricingSchema } from "@/components/pricing/PricingSchema";
import { PricingSection } from "@/components/pricing/PricingSection";
import { ProjectsSection } from "@/components/projects/projects-section";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { TeamShowcase } from "@/components/sections/TeamShowcase";
import { TechStack } from "@/components/sections/TechStack";
import { Testimonials } from "@/components/sections/Testimonials";
import { TrustedMarquee } from "@/components/sections/TrustedMarquee";
import { HashScrollOnLoad } from "@/components/ui/HashScrollOnLoad";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ManagementComparison } from "@/components/sections/ManagementComparison";
import { MethodologySteps } from "@/components/sections/MethodologySteps";
import { SITE } from "@/constants";
import { areaServedNL } from "@/lib/seo";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const SITE_URL = SITE.url;

const HOMEPAGE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#service`,
  name: "Website Beheer Pro — Professioneel Website Beheer",
  url: SITE_URL,
  description:
    "Website Beheer Pro verzorgt professioneel Website Beheer, website onderhoud, beveiliging, monitoring en technische SEO voor ondernemers en bedrijven in Nederland. Altijd veilig, snel en up-to-date.",
  areaServed: areaServedNL(),
  serviceType: [
    "Website Beheer",
    "Website onderhoud",
    "WordPress onderhoud",
    "Website beveiliging",
    "Website monitoring",
    "Hosting beheer",
    "Technische SEO",
    "Website support",
    "Website optimalisatie",
  ],
  parentOrganization: { "@id": `${SITE_URL}/#organization` },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Website Beheer Pro — Beheerplannen",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Essential Onderhoudsplan",
        price: "79",
        priceCurrency: "EUR",
        description:
          "Maandelijkse software-updates, dagelijkse back-ups, beveiligingsmonitoring en uptime-monitoring 24/7.",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "79",
          priceCurrency: "EUR",
          referenceQuantity: {
            "@type": "QuantitativeValue",
            value: "1",
            unitCode: "MON",
          },
        },
      },
      {
        "@type": "Offer",
        name: "Business Onderhoudsplan",
        price: "149",
        priceCurrency: "EUR",
        description:
          "Volledig onderhoud plus 2 uur wijzigingen, snelheidsoptimalisatie, rapportage en prioriteit support.",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "149",
          priceCurrency: "EUR",
          referenceQuantity: {
            "@type": "QuantitativeValue",
            value: "1",
            unitCode: "MON",
          },
        },
      },
      {
        "@type": "Offer",
        name: "Premium Beheerplan",
        price: "299",
        priceCurrency: "EUR",
        description:
          "Proactief beheer met 5 uur ontwikkeling, dedicated aanspreekpunt, SLA en kwartaal-strategiegesprek.",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "299",
          priceCurrency: "EUR",
          referenceQuantity: {
            "@type": "QuantitativeValue",
            value: "1",
            unitCode: "MON",
          },
        },
      },
    ],
  },
};

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Wat is professioneel Website Beheer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Professioneel Website Beheer omvat alle technische taken die uw website veilig, snel en actueel houden: software-updates, dagelijkse back-ups, beveiligingsmonitoring, uptime-bewaking, snelheidsoptimalisatie en technische SEO. Website Beheer Pro neemt dit volledige traject uit handen.",
      },
    },
    {
      "@type": "Question",
      name: "Wat kost website onderhoud per maand?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Website onderhoud start bij Website Beheer Pro vanaf €79 per maand voor het Essential-plan met updates, back-ups en monitoring. Het Business-plan (€149/mnd) biedt ook 2 uur wijzigingen en snelheidsoptimalisatie. Het Premium-plan (€299/mnd) is volledig ontzorgd beheer met SLA en doorontwikkeling.",
      },
    },
    {
      "@type": "Question",
      name: "Onderhouden jullie ook websites die iemand anders heeft gebouwd?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Website Beheer Pro neemt het beheer over van elke bestaande website, ongeacht het platform of de oorspronkelijke bouwer. We starten altijd met een gratis technische check.",
      },
    },
    {
      "@type": "Question",
      name: "Hoe snel reageren jullie bij een probleem of storing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dankzij onze 24/7 monitoring detecteren wij problemen gemiddeld binnen één minuut. Bij het Essential-plan reageren wij binnen 48 uur; Business binnen 24 uur; Premium heeft een SLA van 4 uur.",
      },
    },
    {
      "@type": "Question",
      name: "Kunnen jullie ook WordPress websites beheren?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absoluut. WordPress-beheer is onze specialiteit: core-updates, plugin-beheer, malware-scans, firewall-bescherming, dagelijkse back-ups en prestatie-optimalisatie — alles inbegrepen in ons WordPress onderhoudspakket.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <main id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HOMEPAGE_JSON_LD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
      />
      <HashScrollOnLoad />
      <PricingSchema serviceSlug="website-onderhoud" />
      <Hero />
      <Testimonials />
      <TrustedMarquee />
      <AboutCompany />
      <WhyChooseUs />
      <Services />
      <ManagementComparison />
      <PricingSection />
      <LocalBusinesses />
      <TechStack />
      <MethodologySteps />
      <ProjectsSection />
      <Process />
      <ImpactStats />
      <TeamShowcase />
      <Journal limit={3} />
      <CallToAction />
    </main>
  );
}
