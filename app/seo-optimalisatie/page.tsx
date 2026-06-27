import type { Metadata } from "next";
import Link from "next/link";

import { FAQAccordion } from "@/components/landing/FAQAccordion";
import { LandingCases } from "@/components/landing/LandingCases";
import { LandingLocalSeo } from "@/components/landing/LandingLocalSeo";
import { LandingWhyStats } from "@/components/landing/LandingWhyStats";
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
  SEO_FAQ,
  SEO_FEATURES,
  SEO_FINAL_CTA,
  SEO_HERO,
  SEO_META,
  SEO_PROJECT_TYPE,
  SEO_WHY,
} from "@/constants";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildLandingMetadata,
  buildServiceSchema,
} from "@/lib/seo";

export const metadata: Metadata = buildLandingMetadata(SEO_META);

const SERVICE_NAME = "SEO optimalisatie";

const SERVICE_JSON_LD = buildServiceSchema({
  path: SEO_META.path,
  name: SERVICE_NAME,
  description: SEO_META.description,
  offerCatalogName: "Onderdelen van SEO-optimalisatie",
  offers: SEO_WHY.pillars,
});

const BREADCRUMB_JSON_LD = buildBreadcrumbSchema(SERVICE_NAME, SEO_META.path);
const FAQ_JSON_LD = buildFaqSchema(SEO_FAQ);

export default function SeoOptimalisatiePage() {
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
      <PricingSchema serviceSlug="seo" emitFaq={false} />

      {/* 01 â€” Hero */}
      <LandingHero content={SEO_HERO} projectType={SEO_PROJECT_TYPE} />

      {/* 02 â€” Trust & social proof */}
      <TrustedMarquee />
      <LandingTrustStats />

      {/* 02b â€” Waarom kiezen voor ons */}
      <LandingWhyStats />

      {/* 03 â€” Waarom SEO */}
      <LandingWhy content={SEO_WHY} />

      {/* 04 â€” Werkwijze */}
      <LandingProcess />

      {/* 05 â€” Onze aanpak */}
      <LandingFeaturesSlider content={SEO_FEATURES} />

      {/* 06 â€” Portfolio */}
      {/* Resultaten voor onze klanten */}
      <LandingCases />

      <ProjectsSection />

      {/* 07 â€” Pakketten */}
      <PricingSection defaultServiceSlug="seo" />

      {/* 08 â€” Testimonials */}
      <Testimonials />

      {/* 09 â€” Veelgestelde vragen */}
      <FAQAccordion items={SEO_FAQ} />

      {/* Werkzaam in heel Nederland */}
      <LandingLocalSeo serviceLabel="SEO optimalisatie" />

      {/* 10 â€” Final CTA met formulier */}
      <LandingFinalCTA content={SEO_FINAL_CTA} />

      {/* Interne links */}
      <section className="lp-related" aria-label="Meer van Website Beheer Pro">
        <Container>
          <nav className="lp-related__nav" aria-label="Gerelateerde pagina's">
            <Link href="/">Home</Link>
            <Link href="/website-laten-maken">Website laten maken</Link>
            <Link href="/landing-page-laten-maken">Landing page laten maken</Link>
            <Link href="/wordpress-website-laten-maken">WordPress website laten maken</Link>
            <Link href="/work">Portfolio</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </Container>
      </section>
    </main>
  );
}
