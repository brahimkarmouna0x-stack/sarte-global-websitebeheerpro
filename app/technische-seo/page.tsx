import type { Metadata } from "next";
import Link from "next/link";

import { FAQAccordion } from "@/components/landing/FAQAccordion";
import { LandingCases } from "@/components/landing/LandingCases";
import { LandingLocalSeo } from "@/components/landing/LandingLocalSeo";
import { LandingProcess } from "@/components/landing/LandingProcess";
import { LandingWhyStats } from "@/components/landing/LandingWhyStats";
import { LandingFeaturesSlider } from "@/components/landing/LandingFeaturesSlider";
import { LandingFinalCTA } from "@/components/landing/LandingFinalCTA";
import { LandingHero } from "@/components/landing/LandingHero";
import { LandingTrustStats } from "@/components/landing/LandingTrustStats";
import { LandingWhy } from "@/components/landing/LandingWhy";
import { ProjectsSection } from "@/components/projects/projects-section";
import { PricingSchema } from "@/components/pricing/PricingSchema";
import { PricingSection } from "@/components/pricing/PricingSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { TrustedMarquee } from "@/components/sections/TrustedMarquee";
import { Container } from "@/components/ui/Container";
import {
  TECH_SEO_FAQ,
  TECH_SEO_FEATURES,
  TECH_SEO_FINAL_CTA,
  TECH_SEO_HERO,
  TECH_SEO_META,
  TECH_SEO_PROJECT_TYPE,
  TECH_SEO_WHY,
} from "@/constants";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildLandingMetadata,
  buildServiceSchema,
} from "@/lib/seo";

export const metadata: Metadata = buildLandingMetadata(TECH_SEO_META);

const SERVICE_NAME = "Technische SEO";

const SERVICE_JSON_LD = buildServiceSchema({
  path: TECH_SEO_META.path,
  name: SERVICE_NAME,
  description: TECH_SEO_META.description,
  offerCatalogName: "Onderdelen van technische SEO",
  offers: TECH_SEO_WHY.pillars,
});

const BREADCRUMB_JSON_LD = buildBreadcrumbSchema(SERVICE_NAME, TECH_SEO_META.path);
const FAQ_JSON_LD = buildFaqSchema(TECH_SEO_FAQ);

export default function TechnischeSeoPage() {
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
      <PricingSchema serviceSlug="technische-seo" emitFaq={false} />

      {/* 01 — Hero */}
      <LandingHero content={TECH_SEO_HERO} projectType={TECH_SEO_PROJECT_TYPE} />

      {/* 02 — Trust & social proof */}
      <TrustedMarquee />
      <LandingTrustStats />

      {/* 02b — Waarom kiezen voor ons */}
      <LandingWhyStats />

      {/* 03 — Waarom technische SEO */}
      <LandingWhy content={TECH_SEO_WHY} />

      {/* 04 — Werkwijze */}
      <LandingProcess />

      {/* 05 — Wat we doen */}
      <LandingFeaturesSlider content={TECH_SEO_FEATURES} />

      {/* 06 — Portfolio */}
      <LandingCases />
      <ProjectsSection />

      {/* 07 — Pakketten */}
      <PricingSection defaultServiceSlug="technische-seo" />

      {/* 08 — Testimonials */}
      <Testimonials />

      {/* 09 — Veelgestelde vragen */}
      <FAQAccordion items={TECH_SEO_FAQ} />

      {/* Werkzaam in heel Nederland */}
      <LandingLocalSeo serviceLabel="Technische SEO" />

      {/* 10 — Final CTA met formulier */}
      <LandingFinalCTA content={TECH_SEO_FINAL_CTA} />

      {/* Interne links */}
      <section className="lp-related" aria-label="Meer van Website Beheer Pro">
        <Container>
          <nav className="lp-related__nav" aria-label="Gerelateerde diensten">
            <Link href="/">Home</Link>
            <Link href="/websitebeheer">Websitebeheer</Link>
            <Link href="/website-onderhoud">Website onderhoud</Link>
            <Link href="/website-optimalisatie">Website optimalisatie</Link>
            <Link href="/website-beveiliging">Website beveiliging</Link>
            <Link href="/work">Portfolio</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </Container>
      </section>
    </main>
  );
}
