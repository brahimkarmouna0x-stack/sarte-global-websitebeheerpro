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

const PATH = "/hosting-beheer";
const SERVICE_NAME = "Hosting beheer";

const META = {
  title: "Hosting Beheer | Professioneel Hosting Beheer — Website Beheer Pro",
  description:
    "Professioneel hosting beheer door Website Beheer Pro. Serverbeheer, hosting-optimalisatie, domeinen, SSL, back-upbeheer en 24/7 monitoring van uw hostingomgeving. Volledig ontzorgd.",
};

export const metadata: Metadata = {
  title: META.title,
  description: META.description,
  alternates: { canonical: PATH },
  keywords: [
    "hosting beheer",
    "serverbeheer",
    "hosting optimalisatie",
    "domein beheer",
    "ssl certificaat beheer",
    "website hosting nederland",
    "vps beheer",
    "hosting beheer nederland",
    "Website Beheer Pro",
  ],
  openGraph: {
    title: META.title,
    description: META.description,
    url: PATH,
    type: "website",
    images: [{ url: "/images/company-img.png", width: 1200, height: 630, alt: "Hosting beheer — Website Beheer Pro" }],
  },
  twitter: {
    card: "summary_large_image",
    title: META.title,
    description: META.description,
  },
};

const HERO: LandingHeroContent = {
  eyebrow: "Hosting beheer · Website Beheer Pro",
  badge: "Hostingspecialist · nieuwe klanten welkom",
  titleLead: "Professioneel hosting beheer —",
  titleEm: "uw server in veilige handen.",
  sub: "Website Beheer Pro beheert uw volledige hostingomgeving: serverbeheer, domeinen, SSL-certificaten, back-ups en performance-optimalisatie. U richt zich op uw bedrijf, wij op uw server.",
  primaryCta: "Hosting beheer aanvragen",
  secondaryCta: { label: "Bekijk onze aanpak", href: "#proces" },
  rating: { score: "4,9", label: "Gemiddeld 4,9 / 5 uit 100+ beoordelingen" },
  pills: [
    { label: "Serverbeheer" },
    { label: "Back-upbeheer" },
    { label: "SSL & domeinen" },
    { label: "24/7 monitoring" },
  ],
  trust: [
    "250+ hostingomgevingen beheerd",
    "Hostingspecialisten",
    "Proactief serverbeheer",
    "Maandelijks opzegbaar",
  ],
  benefits: [
    "Proactief serverbeheer & optimalisatie",
    "Dagelijkse back-ups & herstelgarantie",
    "SSL-certificaatbeheer & domeinen",
    "24/7 monitoring & directe actie bij problemen",
  ],
};

const WHY: LandingWhyContent = {
  eyebrow: "Waarom hosting beheer",
  titleLead: "Hosting zelf beheren? Dat kost",
  titleEm: "tijd die u niet heeft.",
  lead: "Hosting klinkt eenvoudig, maar professioneel beheer vraagt constante aandacht: updates, beveiliging, back-ups, SSL-verlengingen, performance-optimalisatie. Elke vergeten taak is een potentieel probleem. Website Beheer Pro neemt dit volledig van u over.",
  media: {
    image: "/images/company-img.png",
    alt: "Website Beheer Pro hosting-specialist beheert serverconfiguratie en hostingomgeving voor klanten in Nederland.",
    caption: "Website Beheer Pro · hosting",
    tag: "Hostingspecialist",
  },
  proof: [
    "Proactief serverbeheer — problemen vóór ze optreden",
    "Dagelijkse back-ups met testbare herstelgarantie",
    "SSL-beheer — nooit meer een verlopen certificaat",
  ],
  pillars: [
    {
      iconName: "layers",
      title: "Serverbeheer",
      description:
        "Proactief beheer van uw server of hostingomgeving: updates, configuratie, performance-optimalisatie en beveiligingshardening.",
    },
    {
      iconName: "shield",
      title: "Back-upbeheer",
      description:
        "Dagelijkse automatische back-ups van bestanden en database — met periodieke hersteltest zodat u zeker weet dat uw back-ups werken.",
    },
    {
      iconName: "lightning",
      title: "SSL & domeinen",
      description:
        "Automatische SSL-vernieuwing, domeinbeheer en DNS-configuratie — nooit meer een verlopen certificaat of onbereikbaar domein.",
    },
    {
      iconName: "gauge",
      title: "Performance-optimalisatie",
      description:
        "Server-caching, PHP-configuratie, database-optimalisatie en CDN-instellingen — uw website zo snel mogelijk geladen.",
    },
    {
      iconName: "cursor",
      title: "24/7 monitoring",
      description:
        "Uw hostingomgeving continu gemonitord — bij uitval of problemen worden wij direct gealarmeerd en handelen wij onmiddellijk.",
    },
  ],
  paragraphs: [
    "Professioneel hosting beheer is meer dan een server draaiende houden. Het betekent proactief beheren, optimaliseren, beveiligen en monitoren van de volledige hostingomgeving — zodat uw website altijd snel, veilig en bereikbaar is.",
    "Wij beheren hostingomgevingen voor ondernemers en bedrijven door heel Nederland — van gedeelde hosting tot VPS en dedicated servers. Elk platform, elke provider.",
  ],
};

const FEATURES: LandingFeaturesContent = {
  eyebrow: "Wat we doen",
  titleLead: "Compleet hosting beheer,",
  titleEm: "alles geregeld.",
  sub: "Kies een onderdeel en ontdek wat professioneel hosting beheer voor uw bedrijf betekent.",
  features: [
    {
      key: "server",
      iconName: "layers",
      title: "Serverbeheer",
      description:
        "Proactief beheer van uw server: updates, configuratie, beveiliging en performance — uw server altijd optimaal geconfigureerd.",
      stat: { value: "24/7", label: "beheerd" },
    },
    {
      key: "backup",
      iconName: "shield",
      title: "Back-upbeheer",
      description:
        "Dagelijkse automatische back-ups met periodieke hersteltest — uw data altijd veilig en hersteld wanneer nodig.",
      stat: { value: "dagelijks", label: "back-up" },
    },
    {
      key: "ssl",
      iconName: "lightning",
      title: "SSL & domeinen",
      description:
        "SSL-vernieuwing, domeinregistratie en DNS-beheer — nooit meer handmatige verlengingen of expiratiefouten.",
      stat: { value: "100%", label: "HTTPS" },
    },
    {
      key: "performance",
      iconName: "gauge",
      title: "Performance-optimalisatie",
      description:
        "Server-caching, PHP-tuning, database-optimalisatie en CDN-configuratie — laadtijden geoptimaliseerd voor Google en uw bezoekers.",
      stat: { value: "<2s", label: "laadtijd" },
    },
    {
      key: "monitor",
      iconName: "cursor",
      title: "24/7 hosting-monitoring",
      description:
        "Uw server en hostingomgeving continu bewaakt — bij uitval of afwijkingen direct melding en actie.",
      stat: { value: "99,9%", label: "uptime" },
    },
    {
      key: "migrate",
      iconName: "rocket",
      title: "Hosting-migraties",
      description:
        "Veilig verhuizen van uw website naar een betere hostingomgeving zonder downtime — inclusief DNS-overzetting en testfase.",
      stat: { value: "0", label: "downtime" },
    },
  ],
};

const FAQ: readonly LandingFAQItem[] = [
  {
    question: "Wat kost professioneel hosting beheer per maand?",
    answer:
      "Hosting beheer door Website Beheer Pro start vanaf €79 per maand in het Essential-plan, inclusief serverbeheer, back-upbeheer en SSL-certificaatbeheer. Voor uitgebreid serverbeheer met performance-optimalisatie en prioriteitssupport kiest u het Business- of Premium-plan.",
  },
  {
    question: "Kunnen jullie ook mijn huidige hosting beheren?",
    answer:
      "Ja. Wij beheren hostingomgevingen bij vrijwel alle grote hosting-providers in Nederland: TransIP, Antagonist, Siteground, WP Engine, Kinsta, Cloudways en meer. Wij hebben geen eigen hosting nodig — wij beheren uw bestaande omgeving.",
  },
  {
    question: "Wat houdt hosting-migratie in?",
    answer:
      "Hosting-migratie is het verhuizen van uw website naar een nieuwe of betere hostingomgeving. Wij voeren de migratie uit met nul downtime: website kopiëren, DNS overzetten op het juiste moment en de nieuwe omgeving uitgebreid testen vóór de definitieve overzetting.",
  },
  {
    question: "Hoe werken jullie back-ups?",
    answer:
      "Wij configureren dagelijkse automatische back-ups van bestanden en database op een aparte locatie. Periodiek voeren wij een hersteltest uit om te verifiëren dat uw back-ups daadwerkelijk werken. Bij calamiteiten kunnen wij uw website doorgaans binnen enkele uren herstellen.",
  },
  {
    question: "Beheren jullie ook VPS en dedicated servers?",
    answer:
      "Ja. Wij beheren gedeelde hosting, VPS (Linux/Ubuntu/Debian/CentOS) en dedicated servers. Onze hostingspecialisten configureren, optimaliseren en beveiligen uw server op maat — ongeacht het platform of de provider.",
  },
];

const FINAL_CTA: LandingFinalCtaContent = {
  eyebrow: "Klaar voor professioneel hosting beheer",
  titleLead: "Uw hosting in",
  titleEm: "veilige handen.",
  sub: "Vertel ons kort over uw hostingomgeving. Binnen één werkdag ontvangt u een vrijblijvend beheerplan op maat.",
  urgency: "Nieuwe klanten zijn welkom",
  points: [
    "Reactie binnen 1 werkdag",
    "Gratis hosting-audit bij aanmelding",
    "Maandelijks opzegbaar",
  ],
  projectType: SERVICE_NAME,
};

const SERVICE_JSON_LD = buildServiceSchema({
  path: PATH,
  name: SERVICE_NAME,
  description: META.description,
  offerCatalogName: "Onderdelen van hosting beheer",
  offers: WHY.pillars,
});

const BREADCRUMB_JSON_LD = buildBreadcrumbSchema(SERVICE_NAME, PATH);
const FAQ_JSON_LD = buildFaqSchema(FAQ);

export default function HostingBeheerPage() {
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
      <PricingSchema serviceSlug="hosting-beheer" emitFaq={false} />

      {/* 01 — Hero */}
      <LandingHero content={HERO} projectType={SERVICE_NAME} />

      {/* 02 — Trust & social proof */}
      <TrustedMarquee />
      <LandingTrustStats />

      {/* 02b — Waarom kiezen voor ons */}
      <LandingWhyStats />

      {/* 03 — Waarom hosting beheer */}
      <LandingWhy content={WHY} />

      {/* 04 — Werkwijze */}
      <LandingProcess />

      {/* 05 — Wat we doen */}
      <LandingFeaturesSlider content={FEATURES} />

      {/* 06 — Portfolio */}
      <LandingCases />
      <ProjectsSection />

      {/* 07 — Pakketten */}
      <PricingSection defaultServiceSlug="hosting-beheer" />

      {/* 08 — Testimonials */}
      <Testimonials />

      {/* 09 — Veelgestelde vragen */}
      <FAQAccordion items={FAQ} />

      {/* Werkzaam in heel Nederland */}
      <LandingLocalSeo serviceLabel="Hosting beheer" />

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
            <Link href="/website-monitoring">Website monitoring</Link>
            <Link href="/technische-seo">Technische SEO</Link>
            <Link href="/work">Portfolio</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </Container>
      </section>
    </main>
  );
}
