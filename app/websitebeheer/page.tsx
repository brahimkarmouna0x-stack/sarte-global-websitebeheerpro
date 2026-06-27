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
  BEHEER_FAQ,
  BEHEER_FEATURES,
  BEHEER_FINAL_CTA,
  BEHEER_HERO,
  BEHEER_META,
  BEHEER_PROJECT_TYPE,
  BEHEER_WHY,
} from "@/constants";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildLandingMetadata,
  buildServiceSchema,
} from "@/lib/seo";

export const metadata: Metadata = buildLandingMetadata(BEHEER_META);

const SERVICE_NAME = "Websitebeheer";

const SERVICE_JSON_LD = buildServiceSchema({
  path: BEHEER_META.path,
  name: SERVICE_NAME,
  description: BEHEER_META.description,
  offerCatalogName: "Wat valt onder professioneel websitebeheer",
  offers: BEHEER_WHY.pillars,
});

const BREADCRUMB_JSON_LD = buildBreadcrumbSchema(SERVICE_NAME, BEHEER_META.path);
const FAQ_JSON_LD = buildFaqSchema(BEHEER_FAQ);

export default function WebsitebeheerPage() {
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
      <PricingSchema serviceSlug="websitebeheer" emitFaq={false} />

      {/* 01 — Hero */}
      <LandingHero content={BEHEER_HERO} projectType={BEHEER_PROJECT_TYPE} />

      {/* 02 — Trust & social proof */}
      <TrustedMarquee />
      <LandingTrustStats />

      {/* 02b — Waarom kiezen voor ons */}
      <LandingWhyStats />

      {/* 03 — Waarom websitebeheer uitbesteden */}
      <LandingWhy content={BEHEER_WHY} />

      {/* 04 — Werkwijze */}
      <LandingProcess />

      {/* 05 — Wat we doen */}
      <LandingFeaturesSlider content={BEHEER_FEATURES} />

      {/* 06 — Portfolio */}
      <LandingCases />
      <ProjectsSection />

      {/* 07 — Pakketten */}
      <PricingSection defaultServiceSlug="websitebeheer" />

      {/* 08 — Testimonials */}
      <Testimonials />

      {/* 09 — Veelgestelde vragen */}
      <FAQAccordion items={BEHEER_FAQ} />

      {/* Werkzaam in heel Nederland */}
      <LandingLocalSeo serviceLabel="Websitebeheer" />

      {/* 10 — Final CTA met formulier */}
      <LandingFinalCTA content={BEHEER_FINAL_CTA} />

      {/* Interne links */}
      <section className="lp-related" aria-label="Meer van Website Beheer Pro">
        <Container>
          <nav className="lp-related__nav" aria-label="Gerelateerde diensten">
            <Link href="/">Home</Link>
            <Link href="/website-onderhoud">Website onderhoud</Link>
            <Link href="/wordpress-onderhoud">WordPress onderhoud</Link>
            <Link href="/website-beveiliging">Website beveiliging</Link>
            <Link href="/technische-seo">Technische SEO</Link>
            <Link href="/work">Portfolio</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </Container>
      </section>
    </main>
  );
}
