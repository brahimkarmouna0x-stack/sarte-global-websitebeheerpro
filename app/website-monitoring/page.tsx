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

const PATH = "/website-monitoring";
const SERVICE_NAME = "Website monitoring";

const META = {
  title: "Website Monitoring | 24/7 Website Monitoring — Website Beheer Pro",
  description:
    "24/7 website monitoring door Website Beheer Pro. Uptime-monitoring, performance-monitoring, beveiligingsmonitoring en directe meldingen bij uitval. Wij weten het eerder dan u.",
};

export const metadata: Metadata = {
  title: META.title,
  description: META.description,
  alternates: { canonical: PATH },
  keywords: [
    "website monitoring",
    "uptime monitoring",
    "website bewaking",
    "website offline melding",
    "24/7 website monitoring",
    "performance monitoring",
    "website monitoring nederland",
    "Website Beheer Pro",
  ],
  openGraph: {
    title: META.title,
    description: META.description,
    url: PATH,
    type: "website",
    images: [{ url: "/images/company-img.png", width: 1200, height: 630, alt: "Website monitoring — Website Beheer Pro" }],
  },
  twitter: {
    card: "summary_large_image",
    title: META.title,
    description: META.description,
  },
};

const HERO: LandingHeroContent = {
  eyebrow: "Website monitoring · Website Beheer Pro",
  badge: "Monitoringspecialist · nieuwe klanten welkom",
  titleLead: "24/7 website monitoring — wij weten",
  titleEm: "het eerder dan u.",
  sub: "Website Beheer Pro bewaakt uw website continu op uptime, performance en beveiliging. Bij uitval of problemen worden wij direct gealarmeerd en handelen we onmiddellijk — voordat uw bezoekers er last van hebben.",
  primaryCta: "Website monitoring aanvragen",
  secondaryCta: { label: "Bekijk onze aanpak", href: "#proces" },
  rating: { score: "4,9", label: "Gemiddeld 4,9 / 5 uit 100+ beoordelingen" },
  pills: [
    { label: "24/7 uptime-controle" },
    { label: "Performance-monitoring" },
    { label: "Directe meldingen" },
    { label: "Maandelijks opzegbaar" },
  ],
  trust: [
    "300+ websites gemonitord",
    "Monitoring-specialisten",
    "Directe actie bij uitval",
    "Maandelijks opzegbaar",
  ],
  benefits: [
    "Uptime-monitoring elke minuut gecontroleerd",
    "Directe melding bij uitval of problemen",
    "Performance-monitoring & snelheidsrapportage",
    "Beveiligingsmonitoring inbegrepen",
  ],
};

const WHY: LandingWhyContent = {
  eyebrow: "Waarom website monitoring",
  titleLead: "Uw website offline? U bent",
  titleEm: "de laatste die het weet.",
  lead: "Zonder actieve monitoring ontdekken ondernemers websiteproblemen pas als een klant erover klaagt — of nog later. Elke minuut downtime kost u bezoekers, omzet en reputatie. Professionele website monitoring verandert dit: wij weten het direct en handelen onmiddellijk.",
  media: {
    image: "/images/company-img.png",
    alt: "Website Beheer Pro monitoring-dashboard toont real-time uptime en performance statistieken van klantwebsites.",
    caption: "Website Beheer Pro · monitoring",
    tag: "24/7 monitoring",
  },
  proof: [
    "Uptime-controle elke 60 seconden",
    "Directe actie bij detectie van problemen",
    "Maandelijkse performance-rapportage",
  ],
  pillars: [
    {
      iconName: "gauge",
      title: "Uptime-monitoring",
      description:
        "Elke 60 seconden gecontroleerd of uw website bereikbaar is. Bij uitval worden wij direct gealarmeerd en handelen we onmiddellijk.",
    },
    {
      iconName: "lightning",
      title: "Performance-monitoring",
      description:
        "Laadtijden, Core Web Vitals en paginasnelheid continu gemeten. Bij prestatieproblemen handelen wij proactief.",
    },
    {
      iconName: "shield",
      title: "Beveiligingsmonitoring",
      description:
        "SSL-geldigheid, beveiligingscertificaten en verdacht verkeer worden continu gemonitord en gerapporteerd.",
    },
    {
      iconName: "chart",
      title: "Rapportage & inzichten",
      description:
        "Maandelijkse uptime-rapportage met historische data, incidentenoverzicht en aanbevelingen voor betere beschikbaarheid.",
    },
    {
      iconName: "cursor",
      title: "Directe meldingen",
      description:
        "Instant alerts via e-mail bij detectie van downtime, performance-problemen of beveiligingsissues — altijd actueel.",
    },
  ],
  paragraphs: [
    "Website monitoring is de fundering onder elk professioneel websitebeheer. Zonder monitoring werkt u blind. Met monitoring van Website Beheer Pro weet u altijd hoe uw website presteert — en handelen wij direct als er iets mis gaat.",
    "Wij monitoren websites voor ondernemers en bedrijven door heel Nederland. Van een eenvoudige bedrijfswebsite tot een complexe WooCommerce-webshop — professionele monitoring is voor elke website essentieel.",
  ],
};

const FEATURES: LandingFeaturesContent = {
  eyebrow: "Wat we doen",
  titleLead: "Complete website monitoring,",
  titleEm: "altijd actueel.",
  sub: "Kies een onderdeel en ontdek wat professionele website monitoring voor uw bedrijf betekent.",
  features: [
    {
      key: "uptime",
      iconName: "gauge",
      title: "Uptime-monitoring",
      description:
        "Elke 60 seconden gecontroleerd — bij uitval direct melding en actie. Uw website beschikbaar wanneer uw klanten het nodig hebben.",
      stat: { value: "99,9%", label: "uptime" },
    },
    {
      key: "performance",
      iconName: "lightning",
      title: "Performance-monitoring",
      description:
        "Laadtijden en Core Web Vitals continu gemonitord — bij verslechtering direct actie voor behoud van uw Google-rankings.",
      stat: { value: "<2s", label: "laadtijd" },
    },
    {
      key: "security",
      iconName: "shield",
      title: "Beveiligingsmonitoring",
      description:
        "SSL-certificaten, malware-detectie en verdacht verkeer continu bewaakt — nooit een verlopen certificaat of onopgemerkte hack.",
      stat: { value: "24/7", label: "bewaking" },
    },
    {
      key: "alerts",
      iconName: "cursor",
      title: "Directe meldingen",
      description:
        "Instant alerts bij downtime, performance-problemen of beveiligingsissues — u bent altijd als eerste geïnformeerd.",
      stat: { value: "<1 min", label: "reactietijd" },
    },
    {
      key: "report",
      iconName: "chart",
      title: "Maandelijkse rapportage",
      description:
        "Overzicht van uptime, incidenten, laadtijden en aanbevelingen — volledig inzicht in de beschikbaarheid van uw website.",
      stat: { value: "maandelijks", label: "rapportage" },
    },
    {
      key: "response",
      iconName: "rocket",
      title: "Directe actie bij problemen",
      description:
        "Bij detectie van downtime of problemen handelen wij direct — geen wachttijden, geen ticketsystemen.",
      stat: { value: "direct", label: "actie" },
    },
  ],
};

const FAQ: readonly LandingFAQItem[] = [
  {
    question: "Wat kost website monitoring per maand?",
    answer:
      "Website monitoring start bij Website Beheer Pro vanaf €79 per maand in het Essential-plan, inclusief uptime-monitoring, performance-monitoring en maandelijkse rapportage. Uitgebreidere monitoring met beveiligingsmonitoring en prioriteitssupport is beschikbaar in het Business- en Premium-plan.",
  },
  {
    question: "Hoe snel worden wij gewaarschuwd bij website-uitval?",
    answer:
      "Onze monitoringsystemen controleren uw website elke 60 seconden. Bij detectie van downtime ontvangt u direct een melding en handelen wij onmiddellijk. De meeste problemen zijn opgelost voordat uw klanten er last van hebben.",
  },
  {
    question: "Monitoren jullie ook de laadsnelheid van onze website?",
    answer:
      "Ja. Wij meten laadtijden en Core Web Vitals (LCP, CLS, INP) continu. Bij verslechtering van de performance handelen wij proactief en rapporteren wij de oorzaak en oplossing in de maandelijkse rapportage.",
  },
  {
    question: "Is website monitoring ook geschikt voor WordPress-websites?",
    answer:
      "Ja. Wij monitoren alle typen websites — WordPress, WooCommerce, Joomla, Drupal, Next.js, maatwerk-platforms. Elk platform profiteert van professionele uptime- en performance-monitoring.",
  },
  {
    question: "Wat is het verschil tussen website monitoring en website beveiliging?",
    answer:
      "Website monitoring bewaakt de beschikbaarheid en performance van uw website. Website beveiliging richt zich op het actief beschermen tegen hackers en malware. In onze beheerplannen zijn beide gecombineerd voor complete ontzorging.",
  },
];

const FINAL_CTA: LandingFinalCtaContent = {
  eyebrow: "Klaar voor professionele website monitoring",
  titleLead: "Uw website 24/7",
  titleEm: "in de gaten gehouden.",
  sub: "Vertel ons kort over uw website. Binnen één werkdag ontvangt u een vrijblijvend monitoringplan op maat.",
  urgency: "Nieuwe monitoringklanten zijn welkom",
  points: [
    "Reactie binnen 1 werkdag",
    "Directe monitoring na aanmelding",
    "Maandelijks opzegbaar",
  ],
  projectType: SERVICE_NAME,
};

const SERVICE_JSON_LD = buildServiceSchema({
  path: PATH,
  name: SERVICE_NAME,
  description: META.description,
  offerCatalogName: "Onderdelen van website monitoring",
  offers: WHY.pillars,
});

const BREADCRUMB_JSON_LD = buildBreadcrumbSchema(SERVICE_NAME, PATH);
const FAQ_JSON_LD = buildFaqSchema(FAQ);

export default function WebsiteMonitoringPage() {
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
      <PricingSchema serviceSlug="website-monitoring" emitFaq={false} />

      {/* 01 — Hero */}
      <LandingHero content={HERO} projectType={SERVICE_NAME} />

      {/* 02 — Trust & social proof */}
      <TrustedMarquee />
      <LandingTrustStats />

      {/* 02b — Waarom kiezen voor ons */}
      <LandingWhyStats />

      {/* 03 — Waarom website monitoring */}
      <LandingWhy content={WHY} />

      {/* 04 — Werkwijze */}
      <LandingProcess />

      {/* 05 — Wat we doen */}
      <LandingFeaturesSlider content={FEATURES} />

      {/* 06 — Portfolio */}
      <LandingCases />
      <ProjectsSection />

      {/* 07 — Pakketten */}
      <PricingSection defaultServiceSlug="website-monitoring" />

      {/* 08 — Testimonials */}
      <Testimonials />

      {/* 09 — Veelgestelde vragen */}
      <FAQAccordion items={FAQ} />

      {/* Werkzaam in heel Nederland */}
      <LandingLocalSeo serviceLabel="Website monitoring" />

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
            <Link href="/hosting-beheer">Hosting beheer</Link>
            <Link href="/technische-seo">Technische SEO</Link>
            <Link href="/work">Portfolio</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </Container>
      </section>
    </main>
  );
}
