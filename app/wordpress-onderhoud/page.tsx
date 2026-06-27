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
import { SITE } from "@/constants";
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

const PATH = "/wordpress-onderhoud";
const SERVICE_NAME = "WordPress onderhoud";

const META = {
  title: "WordPress Onderhoud | WordPress Beheer — Website Beheer Pro",
  description:
    "Professioneel WordPress onderhoud door Website Beheer Pro. Core-updates, plugin-beheer, dagelijkse back-ups, malware-scans en snelheidsoptimalisatie voor uw WordPress website. Vraag een vrijblijvend plan aan.",
};

export const metadata: Metadata = {
  title: META.title,
  description: META.description,
  alternates: { canonical: PATH },
  keywords: [
    "wordpress onderhoud",
    "wordpress beheer",
    "wordpress onderhoud nederland",
    "wordpress updates",
    "wordpress beveiliging",
    "wordpress back-up",
    "woocommerce onderhoud",
    "wordpress specialist",
    "Website Beheer Pro",
  ],
  openGraph: {
    title: META.title,
    description: META.description,
    url: PATH,
    type: "website",
    images: [{ url: "/images/company-img.png", width: 1200, height: 630, alt: "WordPress onderhoud — Website Beheer Pro" }],
  },
  twitter: {
    card: "summary_large_image",
    title: META.title,
    description: META.description,
  },
};

const HERO: LandingHeroContent = {
  eyebrow: "WordPress onderhoud · Website Beheer Pro",
  badge: "WordPress specialist · nieuwe klanten welkom",
  titleLead: "Professioneel WordPress onderhoud door",
  titleEm: "echte WordPress-specialisten.",
  sub: "Website Beheer Pro houdt uw WordPress website veilig, snel en up-to-date. Core-updates, plugin-beheer, dagelijkse back-ups, malware-scans en prestatie-optimalisatie — alles geregeld.",
  primaryCta: "WordPress beheer aanvragen",
  secondaryCta: { label: "Bekijk onze aanpak", href: "#proces" },
  rating: { score: "4,9", label: "Gemiddeld 4,9 / 5 uit 100+ beoordelingen" },
  pills: [
    { label: "Core & plugin-updates" },
    { label: "Dagelijkse back-ups" },
    { label: "Malware-scans" },
    { label: "Maandelijks opzegbaar" },
  ],
  trust: [
    "150+ WordPress-websites beheerd",
    "WordPress-specialisten",
    "Updates zonder downtime",
    "Maandelijks opzegbaar",
  ],
  benefits: [
    "WordPress core-updates getest & veilig",
    "Dagelijkse back-ups & snel herstel",
    "Malware-scan & firewall-bescherming",
    "Vaste WordPress-specialist",
  ],
};

const WHY: LandingWhyContent = {
  eyebrow: "Waarom WordPress onderhoud",
  titleLead: "WordPress is het populairste platform —",
  titleEm: "én het vaakst aangevallen.",
  lead: "Meer dan 40% van het web draait op WordPress. Dat maakt het ook het meest aangevallen CMS ter wereld. Verouderde plugins, zwakke wachtwoorden en onbeheerde thema's zijn verantwoordelijk voor de meeste WordPress-hacks. Professioneel WordPress onderhoud voorkomt dit.",
  media: {
    image: "/images/company-img.png",
    alt: "WordPress specialist van Website Beheer Pro voert updates en beveiligingscontroles uit voor WordPress-klanten.",
    caption: "Website Beheer Pro · WordPress",
    tag: "WordPress specialist",
  },
  proof: [
    "Core & plugin-updates getest en veilig uitgerold",
    "Dagelijkse back-ups met snel herstel",
    "Proactieve malware-beveiliging",
  ],
  pillars: [
    {
      iconName: "shield",
      title: "WordPress beveiliging",
      description:
        "Malware-scans, firewall-regels en beveiligingsupdates. Wij beschermen uw WordPress-site proactief — vóór aanvallers een kans krijgen.",
    },
    {
      iconName: "layers",
      title: "Core & plugin-updates",
      description:
        "WordPress core, thema en alle plugins bijgewerkt en getest — geen onverwachte fouten, geen downtime.",
    },
    {
      iconName: "lightning",
      title: "Prestatie-optimalisatie",
      description:
        "Caching, afbeeldingsoptimalisatie en database-onderhoud voor een snelle WordPress-site met hoge PageSpeed-scores.",
    },
    {
      iconName: "gauge",
      title: "Dagelijkse back-ups",
      description:
        "Automatische dagelijkse back-ups buiten uw server opgeslagen — snel herstel bij hacks, fouten of mislukte updates.",
    },
    {
      iconName: "chart",
      title: "Rapportage",
      description:
        "Maandelijkse rapportage over uitgevoerde updates, beveiligingsstatus en aanbevelingen voor uw WordPress-website.",
    },
  ],
  paragraphs: [
    "WordPress onderhoud is niet iets om zelf te doen als u geen technische achtergrond heeft. Een verkeerd uitgerold update-script, een plugin-conflict of een gehackte installatie kan uw website dagenlang offline halen. Website Beheer Pro neemt dit risico weg.",
    "Wij verzorgen WordPress onderhoud voor websites en WooCommerce webshops door heel Nederland. Of u nu een eenvoudige bedrijfswebsite of een complexe WooCommerce-winkel heeft — wij kennen het WordPress-ecosysteem van binnen en buiten.",
  ],
};

const FEATURES: LandingFeaturesContent = {
  eyebrow: "Wat we doen",
  titleLead: "Compleet WordPress onderhoud,",
  titleEm: "alles inbegrepen.",
  sub: "Kies een onderdeel en ontdek wat professioneel WordPress onderhoud voor uw website betekent.",
  features: [
    {
      key: "updates",
      iconName: "layers",
      title: "Core & plugin-updates",
      description:
        "WordPress core, thema en alle plugins bijgewerkt op een testomgeving en daarna veilig live gezet.",
      stat: { value: "0", label: "downtime" },
    },
    {
      key: "security",
      iconName: "shield",
      title: "Beveiliging & malware",
      description:
        "Dagelijkse malware-scans, firewall-bescherming en login-hardening — uw WordPress altijd beschermd.",
      stat: { value: "dagelijks", label: "malware-scan" },
    },
    {
      key: "backup",
      iconName: "gauge",
      title: "Dagelijkse back-ups",
      description:
        "Automatische back-ups dagelijks opgeslagen buiten uw server — met eenvoudig herstel bij incidenten.",
      stat: { value: "dagelijks", label: "back-up" },
    },
    {
      key: "speed",
      iconName: "lightning",
      title: "Snelheidsoptimalisatie",
      description:
        "Caching, afbeeldingscompressie en database-optimalisatie voor een snelle WordPress-site.",
      stat: { value: "90+", label: "PageSpeed" },
    },
    {
      key: "monitor",
      iconName: "cursor",
      title: "Uptime-monitoring",
      description:
        "24/7 bewaking — wij weten het direct als uw WordPress-site offline gaat en handelen onmiddellijk.",
      stat: { value: "99,9%", label: "uptime" },
    },
    {
      key: "report",
      iconName: "chart",
      title: "Maandelijkse rapportage",
      description:
        "Overzicht van alle uitgevoerde updates, beveiligingsstatus en aanbevelingen voor uw WordPress.",
      stat: { value: "maandelijks", label: "rapportage" },
    },
  ],
};

const FAQ: readonly LandingFAQItem[] = [
  {
    question: "Wat kost WordPress onderhoud per maand?",
    answer:
      "WordPress onderhoud start bij Website Beheer Pro vanaf €79 per maand voor het Essential-plan met core-updates, plugin-updates, dagelijkse back-ups en beveiligingsmonitoring. U ontvangt altijd een transparant plan op maat.",
  },
  {
    question: "Onderhouden jullie ook WooCommerce webshops?",
    answer:
      "Ja. Ons WordPress onderhoud omvat ook WooCommerce webshops, inclusief plugin-updates, betaalkoppeling-monitoring en prestatie-optimalisatie.",
  },
  {
    question: "Hoe worden WordPress updates veilig uitgerold?",
    answer:
      "Wij voeren updates altijd eerst uit op een staging-omgeving en testen grondig op fouten. Pas daarna rollen wij ze live — zonder downtime voor uw bezoekers.",
  },
  {
    question: "Wat als een plugin-update mijn WordPress-site breekt?",
    answer:
      "Voor elke update maken wij een back-up. Gaat er toch iets mis, dan herstellen wij onmiddellijk vanuit de meest recente back-up — zonder extra kosten voor u.",
  },
  {
    question: "Kunnen jullie ook mijn bestaande WordPress website overnemen?",
    answer:
      "Ja. Wij starten altijd met een gratis technische WordPress-check. Daarna stellen wij een passend onderhoudsplan voor, ongeacht wie uw site heeft gebouwd.",
  },
  {
    question: "Beveiliging mijn WordPress-site ook na het onderhoud?",
    answer:
      "Ja. Beveiligingsmonitoring, malware-scans en firewall-bescherming zijn doorlopend actief — niet alleen bij updates. Proactieve beveiliging is de basis van elk WordPress onderhoudsplan.",
  },
];

const FINAL_CTA: LandingFinalCtaContent = {
  eyebrow: "Klaar voor professioneel WordPress onderhoud",
  titleLead: "Uw WordPress website in",
  titleEm: "veilige handen.",
  sub: "Vertel ons kort over uw WordPress website. Binnen één werkdag ontvangt u een vrijblijvend WordPress onderhoudsplan op maat.",
  urgency: "Nieuwe WordPress-klanten zijn welkom",
  points: [
    "Reactie binnen 1 werkdag",
    "Maandelijks opzegbaar",
    "Eén vaste WordPress-specialist",
  ],
  projectType: SERVICE_NAME,
};

const SERVICE_JSON_LD = buildServiceSchema({
  path: PATH,
  name: SERVICE_NAME,
  description: META.description,
  offerCatalogName: "Wat valt onder WordPress onderhoud",
  offers: WHY.pillars,
});

const BREADCRUMB_JSON_LD = buildBreadcrumbSchema(SERVICE_NAME, PATH);
const FAQ_JSON_LD = buildFaqSchema(FAQ);

export default function WordPressOnderhoudPage() {
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
      <PricingSchema serviceSlug="wordpress-onderhoud" emitFaq={false} />

      {/* 01 — Hero */}
      <LandingHero content={HERO} projectType={SERVICE_NAME} />

      {/* 02 — Trust & social proof */}
      <TrustedMarquee />
      <LandingTrustStats />

      {/* 02b — Waarom kiezen voor ons */}
      <LandingWhyStats />

      {/* 03 — Waarom WordPress onderhoud */}
      <LandingWhy content={WHY} />

      {/* 04 — Werkwijze */}
      <LandingProcess />

      {/* 05 — Wat we doen */}
      <LandingFeaturesSlider content={FEATURES} />

      {/* 06 — Portfolio */}
      <LandingCases />
      <ProjectsSection />

      {/* 07 — Pakketten */}
      <PricingSection defaultServiceSlug="wordpress-onderhoud" />

      {/* 08 — Testimonials */}
      <Testimonials />

      {/* 09 — Veelgestelde vragen */}
      <FAQAccordion items={FAQ} />

      {/* Werkzaam in heel Nederland */}
      <LandingLocalSeo serviceLabel="WordPress onderhoud" />

      {/* 10 — Final CTA met formulier */}
      <LandingFinalCTA content={FINAL_CTA} />

      {/* Interne links */}
      <section className="lp-related" aria-label="Meer van Website Beheer Pro">
        <Container>
          <nav className="lp-related__nav" aria-label="Gerelateerde diensten">
            <Link href="/">Home</Link>
            <Link href="/websitebeheer">Websitebeheer</Link>
            <Link href="/website-onderhoud">Website onderhoud</Link>
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
