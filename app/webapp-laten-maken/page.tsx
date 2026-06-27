import type { Metadata } from "next";
import Link from "next/link";

import { FAQAccordion } from "@/components/landing/FAQAccordion";
import { LandingCases } from "@/components/landing/LandingCases";
import { LandingLocalSeo } from "@/components/landing/LandingLocalSeo";
import { LandingWhyStats } from "@/components/landing/LandingWhyStats";
import { LandingComparison } from "@/components/landing/LandingComparison";
import { LandingFeaturesSlider } from "@/components/landing/LandingFeaturesSlider";
import { LandingFinalCTA } from "@/components/landing/LandingFinalCTA";
import { LandingHero } from "@/components/landing/LandingHero";
import { LandingProcess } from "@/components/landing/LandingProcess";
import { LandingTrustStats } from "@/components/landing/LandingTrustStats";
import { LandingWhy } from "@/components/landing/LandingWhy";
import { ProjectsSection } from "@/components/projects/projects-section";
import { PricingSchema } from "@/components/pricing/PricingSchema";
import { PricingSection } from "@/components/pricing/PricingSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { TrustedMarquee } from "@/components/sections/TrustedMarquee";
import { Container } from "@/components/ui/Container";
import {
  WEBAPP_COMPARISON,
  WEBAPP_FAQ,
  WEBAPP_FEATURES,
  WEBAPP_FINAL_CTA,
  WEBAPP_HERO,
  WEBAPP_META,
  WEBAPP_PROJECT_TYPE,
  WEBAPP_WHY,
} from "@/constants";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildLandingMetadata,
  buildServiceSchema,
} from "@/lib/seo";

export const metadata: Metadata = buildLandingMetadata(WEBAPP_META);

const SERVICE_NAME = "Webapp laten maken";

const SERVICE_JSON_LD = buildServiceSchema({
  path: WEBAPP_META.path,
  name: SERVICE_NAME,
  description: WEBAPP_META.description,
  offerCatalogName: "Voordelen van een maatwerk webapp",
  offers: WEBAPP_WHY.pillars,
});

const BREADCRUMB_JSON_LD = buildBreadcrumbSchema(SERVICE_NAME, WEBAPP_META.path);
const FAQ_JSON_LD = buildFaqSchema(WEBAPP_FAQ);

export default function WebappLatenMakenPage() {
  return (
    <main className="wlm" id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_JSON_LD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
      />
      {/* emitFaq=false: this page already emits a FAQPage above */}
      <PricingSchema serviceSlug="web-development" emitFaq={false} />

      {/* 01 â€” Hero */}
      <LandingHero content={WEBAPP_HERO} projectType={WEBAPP_PROJECT_TYPE} />

      {/* 02 â€” Trust & social proof */}
      <TrustedMarquee />
      <LandingTrustStats />

      {/* 02b â€” Waarom kiezen voor ons */}
      <LandingWhyStats />

      {/* 03 â€” Waarom een maatwerk webapp */}
      <LandingWhy content={WEBAPP_WHY} />

      {/* 04 â€” Werkwijze */}
      <LandingProcess />

      {/* 05 â€” Features */}
      <LandingFeaturesSlider content={WEBAPP_FEATURES} />

      {/* 06 â€” Webapp vs standaardpakket */}
      <LandingComparison content={WEBAPP_COMPARISON} />

      {/* 07 â€” Portfolio */}
      {/* Resultaten voor onze klanten */}
      <LandingCases />

      <ProjectsSection />

      {/* 08 â€” Pakketten */}
      <PricingSection defaultServiceSlug="web-development" />

      {/* 09 â€” Testimonials */}
      <Testimonials />

      {/* 10 â€” Veelgestelde vragen */}
      <FAQAccordion items={WEBAPP_FAQ} />

      {/* Werkzaam in heel Nederland */}
      <LandingLocalSeo serviceLabel="Webapp laten maken" />

      {/* 11 â€” Final CTA met formulier */}
      <LandingFinalCTA content={WEBAPP_FINAL_CTA} />

      {/* Interne links */}
      <section className="lp-related" aria-label="Meer van Website Beheer Pro">
        <Container>
          <nav className="lp-related__nav" aria-label="Gerelateerde pagina's">
            <Link href="/">Home</Link>
            <Link href="/nextjs-website-laten-maken">Next.js website laten maken</Link>
            <Link href="/website-laten-maken">Website laten maken</Link>
            <Link href="/services/mobile-development">Mobiele apps</Link>
            <Link href="/work">Portfolio</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </Container>
      </section>
    </main>
  );
}
