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
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildServiceSchema,
} from "@/lib/seo";
import type {
  LandingFAQItem,
  LandingFeaturesContent,
  LandingFinalCtaContent,
  LandingHeroContent,
  LandingWhyContent,
} from "@/constants/landing-nieuwe-website";

const PATH = "/website-optimalisatie";
const SERVICE_NAME = "Website optimalisatie";

const META = {
  title: "Website Optimalisatie | Snellere & Betere Website — Website Beheer Pro",
  description:
    "Professionele website optimalisatie door Website Beheer Pro. Snelheidsoptimalisatie, Core Web Vitals, conversie-optimalisatie en technische verbeteringen. Uw website sneller, beter en hoger in Google.",
};

export const metadata: Metadata = {
  title: META.title,
  description: META.description,
  alternates: { canonical: PATH },
  keywords: [
    "website optimalisatie",
    "website sneller maken",
    "core web vitals",
    "website performance",
    "conversie optimalisatie",
    "pagespeed optimalisatie",
    "website verbeteren",
    "Website Beheer Pro",
  ],
  openGraph: {
    title: META.title,
    description: META.description,
    url: PATH,
    type: "website",
    images: [{ url: "/images/company-img.png", width: 1200, height: 630, alt: "Website optimalisatie — Website Beheer Pro" }],
  },
  twitter: {
    card: "summary_large_image",
    title: META.title,
    description: META.description,
  },
};

const HERO: LandingHeroContent = {
  eyebrow: "Website optimalisatie · Website Beheer Pro",
  badge: "Optimalisatiespecialist · nieuwe klanten welkom",
  titleLead: "Website optimalisatie die uw",
  titleEm: "resultaten meetbaar verbetert.",
  sub: "Website Beheer Pro optimaliseert uw website op snelheid, gebruikservaring en conversie. Core Web Vitals, laadtijden, technische SEO en conversie-optimalisatie — meetbaar beter, aantoonbaar resultaat.",
  primaryCta: "Website optimalisatie aanvragen",
  secondaryCta: { label: "Bekijk onze aanpak", href: "#proces" },
  rating: { score: "4,9", label: "Gemiddeld 4,9 / 5 uit 100+ beoordelingen" },
  pills: [
    { label: "Snelheidsoptimalisatie" },
    { label: "Core Web Vitals" },
    { label: "Conversie-optimalisatie" },
    { label: "Technische verbeteringen" },
  ],
  trust: [
    "200+ websites geoptimaliseerd",
    "Optimalisatiespecialisten",
    "Meetbaar resultaat",
    "Maandelijks opzegbaar",
  ],
  benefits: [
    "Snelheidsoptimalisatie & Core Web Vitals",
    "Technische SEO-verbeteringen",
    "Conversie-optimalisatie & UX",
    "Maandelijkse performance-rapportage",
  ],
};

const WHY: LandingWhyContent = {
  eyebrow: "Waarom website optimalisatie",
  titleLead: "Een trage website verliest",
  titleEm: "bezoekers — en omzet.",
  lead: "53% van de bezoekers verlaat een website die langer dan 3 seconden laadt. Google straft trage websites af in de zoekresultaten. Een niet-geoptimaliseerde website kost u elke dag bezoekers, leads en omzet. Website optimalisatie keert dit om.",
  media: {
    image: "/images/company-img.png",
    alt: "Website Beheer Pro optimalisatiespecialist analyseert en verbetert website performance voor klanten.",
    caption: "Website Beheer Pro · optimalisatie",
    tag: "Optimalisatiespecialist",
  },
  proof: [
    "Gemiddeld 40% snellere laadtijden na optimalisatie",
    "Core Web Vitals: LCP, CLS en INP naar groen",
    "Aantoonbare conversie-verbeteringen",
  ],
  pillars: [
    {
      iconName: "lightning",
      title: "Snelheidsoptimalisatie",
      description:
        "Laadtijden drastisch verbeteren via image-optimalisatie, caching, code-minificatie, CDN-configuratie en server-tuning.",
    },
    {
      iconName: "gauge",
      title: "Core Web Vitals",
      description:
        "LCP, CLS en INP naar een groen Google-score — de officiële performance-metrics die uw Google-ranking beïnvloeden.",
    },
    {
      iconName: "cursor",
      title: "Conversie-optimalisatie",
      description:
        "CTA-plaatsing, formulier-optimalisatie, paginastructuur en UX-verbeteringen die bezoekers omzetten in klanten.",
    },
    {
      iconName: "chart",
      title: "Technische SEO",
      description:
        "Canonical-tags, structured data, sitemap, robots.txt, interne linkstructuur — technische SEO-basis op orde.",
    },
    {
      iconName: "shield",
      title: "Rapportage & meting",
      description:
        "Maandelijkse performance-rapportage met voor/na-vergelijking — meetbaar inzicht in de verbeteringen en aanbevelingen.",
    },
  ],
  paragraphs: [
    "Website optimalisatie is geen eenmalige actie. Een website degradeert in de tijd: plugins worden zwaarder, afbeeldingen groot, code verouderd. Doorlopende optimalisatie zorgt dat uw website blijft presteren.",
    "Wij optimaliseren websites voor ondernemers en bedrijven door heel Nederland — WordPress, WooCommerce, Next.js, maatwerk. Elk platform profiteert van professionele optimalisatie.",
  ],
};

const FEATURES: LandingFeaturesContent = {
  eyebrow: "Wat we doen",
  titleLead: "Complete website optimalisatie,",
  titleEm: "meetbaar beter.",
  sub: "Kies een onderdeel en ontdek wat professionele website optimalisatie voor uw bedrijf betekent.",
  features: [
    {
      key: "speed",
      iconName: "lightning",
      title: "Snelheidsoptimalisatie",
      description:
        "Image-optimalisatie, lazy loading, caching, CDN en code-minificatie — uw website razendsnel geladen op elk apparaat.",
      stat: { value: "<2s", label: "laadtijd" },
    },
    {
      key: "cwv",
      iconName: "gauge",
      title: "Core Web Vitals",
      description:
        "LCP, CLS en INP optimaliseren naar Google's groen-score — beter gevonden, meer vertrouwen van bezoekers.",
      stat: { value: "groen", label: "Core Web Vitals" },
    },
    {
      key: "conversion",
      iconName: "cursor",
      title: "Conversie-optimalisatie",
      description:
        "CTA-optimalisatie, formulier-verbeteringen en UX-aanpassingen die uw conversieratio meetbaar verhogen.",
      stat: { value: "+30%", label: "conversie" },
    },
    {
      key: "seo",
      iconName: "chart",
      title: "Technische SEO",
      description:
        "Structured data, canonical-tags, sitemap, crawlability en interne links — de technische SEO-basis volledig op orde.",
      stat: { value: "top 3", label: "Google" },
    },
    {
      key: "mobile",
      iconName: "rocket",
      title: "Mobiele optimalisatie",
      description:
        "Responsive design, mobile Core Web Vitals en touch-UX — uw website optimaal op smartphone en tablet.",
      stat: { value: "100%", label: "mobiel" },
    },
    {
      key: "report",
      iconName: "shield",
      title: "Performance-rapportage",
      description:
        "Maandelijkse rapportage met voor/na-vergelijking, benchmark en aanbevelingen voor verdere verbetering.",
      stat: { value: "maandelijks", label: "rapport" },
    },
  ],
};

const FAQ: readonly LandingFAQItem[] = [
  {
    question: "Wat kost website optimalisatie?",
    answer:
      "Website optimalisatie bij Website Beheer Pro start vanaf €79 per maand als onderdeel van ons beheerplan. Voor een eenmalige performance-audit en optimalisatieronde kunt u ook een losse opdracht plaatsen — neem contact op voor een vrijblijvende offerte.",
  },
  {
    question: "Hoe lang duurt website optimalisatie?",
    answer:
      "Een eerste optimalisatieronde duurt doorgaans 1 tot 2 weken, afhankelijk van de complexiteit van uw website en de omvang van de verbeterpunten. Performance-optimalisatie is daarna een doorlopend proces in onze beheerplannen.",
  },
  {
    question: "Wat zijn Core Web Vitals en waarom zijn ze belangrijk?",
    answer:
      "Core Web Vitals zijn Google's officiële performance-metrics: LCP (laadsnelheid), CLS (visuele stabiliteit) en INP (interactiviteit). Een slechte score leidt tot een lagere positie in Google's zoekresultaten. Wij optimaliseren uw website naar een groene score op alle drie metrics.",
  },
  {
    question: "Verbetert website optimalisatie ook mijn Google-ranking?",
    answer:
      "Ja. Snelheid en Core Web Vitals zijn officieel bevestigde Google-rankingfactoren. Een snellere, beter geoptimaliseerde website heeft een voordeel in de zoekresultaten boven tragere concurrenten — in combinatie met sterke technische SEO.",
  },
  {
    question: "Werken jullie ook met WordPress website optimalisatie?",
    answer:
      "Ja. Wij optimaliseren WordPress en WooCommerce-websites intensief — inclusief plugin-optimalisatie, database-opschoning, caching-configuratie (WP Rocket, LiteSpeed) en server-tuning. WordPress is ons meestgeoptimaliseerde platform.",
  },
];

const FINAL_CTA: LandingFinalCtaContent = {
  eyebrow: "Klaar voor professionele website optimalisatie",
  titleLead: "Uw website sneller, beter",
  titleEm: "en hoger in Google.",
  sub: "Vertel ons kort over uw website. Binnen één werkdag ontvangt u een vrijblijvende performance-analyse en voorstel.",
  urgency: "Nieuwe optimalisatieklanten zijn welkom",
  points: [
    "Reactie binnen 1 werkdag",
    "Gratis performance-analyse inbegrepen",
    "Maandelijks opzegbaar",
  ],
  projectType: SERVICE_NAME,
};

const SERVICE_JSON_LD = buildServiceSchema({
  path: PATH,
  name: SERVICE_NAME,
  description: META.description,
  offerCatalogName: "Onderdelen van website optimalisatie",
  offers: WHY.pillars,
});

const BREADCRUMB_JSON_LD = buildBreadcrumbSchema(SERVICE_NAME, PATH);
const FAQ_JSON_LD = buildFaqSchema(FAQ);

export default function WebsiteOptimalisatiePage() {
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
      <PricingSchema serviceSlug="website-optimalisatie" emitFaq={false} />

      {/* 01 — Hero */}
      <LandingHero content={HERO} projectType={SERVICE_NAME} />

      {/* 02 — Trust & social proof */}
      <TrustedMarquee />
      <LandingTrustStats />

      {/* 02b — Waarom kiezen voor ons */}
      <LandingWhyStats />

      {/* 03 — Waarom website optimalisatie */}
      <LandingWhy content={WHY} />

      {/* 04 — Werkwijze */}
      <LandingProcess />

      {/* 05 — Wat we doen */}
      <LandingFeaturesSlider content={FEATURES} />

      {/* 06 — Portfolio */}
      <LandingCases />
      <ProjectsSection />

      {/* 07 — Pakketten */}
      <PricingSection defaultServiceSlug="website-optimalisatie" />

      {/* 08 — Testimonials */}
      <Testimonials />

      {/* 09 — Veelgestelde vragen */}
      <FAQAccordion items={FAQ} />

      {/* Werkzaam in heel Nederland */}
      <LandingLocalSeo serviceLabel="Website optimalisatie" />

      {/* 10 — Final CTA met formulier */}
      <LandingFinalCTA content={FINAL_CTA} />

      {/* Interne links */}
      <section className="lp-related" aria-label="Meer van Website Beheer Pro">
        <Container>
          <nav className="lp-related__nav" aria-label="Gerelateerde diensten">
            <Link href="/">Home</Link>
            <Link href="/websitebeheer">Websitebeheer</Link>
            <Link href="/website-onderhoud">Website onderhoud</Link>
            <Link href="/technische-seo">Technische SEO</Link>
            <Link href="/website-beveiliging">Website beveiliging</Link>
            <Link href="/website-monitoring">Website monitoring</Link>
            <Link href="/work">Portfolio</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </Container>
      </section>
    </main>
  );
}
