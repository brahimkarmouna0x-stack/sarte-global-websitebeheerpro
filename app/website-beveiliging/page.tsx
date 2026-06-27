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

const PATH = "/website-beveiliging";
const SERVICE_NAME = "Website beveiliging";

const META = {
  title: "Website Beveiliging | Professionele Website Beveiliging — Website Beheer Pro",
  description:
    "Professionele website beveiliging door Website Beheer Pro. Malware-scans, firewall-bescherming, SSL, beveiligingsupdates en 24/7 monitoring. Bescherm uw website tegen hackers en malware.",
};

export const metadata: Metadata = {
  title: META.title,
  description: META.description,
  alternates: { canonical: PATH },
  keywords: [
    "website beveiliging",
    "website beveiligen",
    "website beveiliging nederland",
    "malware verwijderen website",
    "wordpress beveiliging",
    "website hack herstellen",
    "ssl certificaat",
    "website firewall",
    "Website Beheer Pro",
  ],
  openGraph: {
    title: META.title,
    description: META.description,
    url: PATH,
    type: "website",
    images: [{ url: "/images/company-img.png", width: 1200, height: 630, alt: "Website beveiliging — Website Beheer Pro" }],
  },
  twitter: {
    card: "summary_large_image",
    title: META.title,
    description: META.description,
  },
};

const HERO: LandingHeroContent = {
  eyebrow: "Website beveiliging · Website Beheer Pro",
  badge: "Beveiligingsspecialist · nieuwe klanten welkom",
  titleLead: "Professionele website beveiliging door",
  titleEm: "echte beveiligingsspecialisten.",
  sub: "Website Beheer Pro beschermt uw website tegen hackers, malware en datalekken. Malware-scans, firewall-bescherming, SSL-beheer, beveiligingsupdates en 24/7 monitoring — alles proactief geregeld.",
  primaryCta: "Website beveiliging aanvragen",
  secondaryCta: { label: "Bekijk onze aanpak", href: "#proces" },
  rating: { score: "4,9", label: "Gemiddeld 4,9 / 5 uit 100+ beoordelingen" },
  pills: [
    { label: "Malware-scans" },
    { label: "Firewall-bescherming" },
    { label: "SSL-beheer" },
    { label: "24/7 monitoring" },
  ],
  trust: [
    "200+ websites beveiligd",
    "Beveiligingsspecialisten",
    "Proactieve bescherming",
    "Maandelijks opzegbaar",
  ],
  benefits: [
    "Dagelijkse malware-scans & herstel",
    "WAF-firewall & DDoS-bescherming",
    "SSL-certificaatbeheer",
    "Beveiligingsupdates zonder downtime",
  ],
};

const WHY: LandingWhyContent = {
  eyebrow: "Waarom website beveiliging",
  titleLead: "Elke dag worden duizenden websites",
  titleEm: "gehackt — ook de uwe.",
  lead: "Een niet-beveiligde website is een open uitnodiging voor hackers, malware en datalekken. De gevolgen: Google-blacklisting, reputatieschade, klantgegevens in gevaar en soms dagenlange downtime. Professionele website beveiliging voorkomt dit.",
  media: {
    image: "/images/company-img.png",
    alt: "Website Beheer Pro beveiligingsspecialist monitort en beschermt websites van klanten in Nederland.",
    caption: "Website Beheer Pro · beveiliging",
    tag: "Beveiligingsspecialist",
  },
  proof: [
    "Proactieve malware-bescherming — vóór aanvallers toeslaan",
    "Directe actie bij beveiligingsincidenten",
    "Volledige beveiligingsaudit bij start",
  ],
  pillars: [
    {
      iconName: "shield",
      title: "Malware-scans & herstel",
      description:
        "Dagelijkse automatische malware-scans. Bij detectie handelen wij direct: malware verwijderen, hack herstellen en website schoonmaken.",
    },
    {
      iconName: "layers",
      title: "Firewall & DDoS-bescherming",
      description:
        "Web Application Firewall (WAF) die kwaadaardig verkeer blokkeert en DDoS-aanvallen afweert — voordat ze uw website bereiken.",
    },
    {
      iconName: "lightning",
      title: "SSL-certificaatbeheer",
      description:
        "Automatische SSL-vernieuwing, correcte HTTPS-implementatie en mixed-content-controle — uw website altijd veilig en vertrouwd.",
    },
    {
      iconName: "gauge",
      title: "Beveiligingsupdates",
      description:
        "WordPress core, thema en plugin-beveiligingsupdates direct uitgerold op een testomgeving — nooit een kwetsbaarheid open laten staan.",
    },
    {
      iconName: "chart",
      title: "Beveiligingsrapportage",
      description:
        "Maandelijkse rapportage over beveiligingsstatus, uitgevoerde scans en aanbevelingen — volledig transparant.",
    },
  ],
  paragraphs: [
    "Website beveiliging is geen eenmalige actie maar een doorlopend proces. Hackers zoeken continu naar kwetsbaarheden — in verouderde plugins, zwakke wachtwoorden of misconfigureerde servers. Website Beheer Pro bewaakt uw website proactief, zodat u dat niet zelf hoeft bij te houden.",
    "Wij verzorgen website beveiliging voor WordPress-sites, WooCommerce-webshops en andere platforms door heel Nederland. Van eenmanszaken tot MKB — elke website verdient professionele beveiliging.",
  ],
};

const FEATURES: LandingFeaturesContent = {
  eyebrow: "Wat we doen",
  titleLead: "Complete website beveiliging,",
  titleEm: "alles inbegrepen.",
  sub: "Kies een onderdeel en ontdek wat professionele website beveiliging voor uw bedrijf betekent.",
  features: [
    {
      key: "malware",
      iconName: "shield",
      title: "Malware-scans & herstel",
      description:
        "Dagelijkse automatische malware-scans met directe actie bij detectie — inclusief volledig herstel na een hack.",
      stat: { value: "dagelijks", label: "malware-scan" },
    },
    {
      key: "firewall",
      iconName: "layers",
      title: "Web Application Firewall",
      description:
        "WAF blokkeert SQL-injecties, XSS-aanvallen en andere kwaadaardige verzoeken voordat ze uw server bereiken.",
      stat: { value: "24/7", label: "beschermd" },
    },
    {
      key: "ssl",
      iconName: "lightning",
      title: "SSL-beheer",
      description:
        "Automatische SSL-vernieuwing en volledige HTTPS-implementatie — uw bezoekers altijd veilig verbonden.",
      stat: { value: "100%", label: "HTTPS" },
    },
    {
      key: "updates",
      iconName: "gauge",
      title: "Beveiligingsupdates",
      description:
        "Beveiligingspatches en plugin-updates direct uitgerold zodra ze beschikbaar zijn — geen open kwetsbaarheden.",
      stat: { value: "0", label: "kwetsbaarheden" },
    },
    {
      key: "monitor",
      iconName: "cursor",
      title: "24/7 uptime-monitoring",
      description:
        "Wij weten het direct als uw website offline gaat of gehackt wordt — en handelen onmiddellijk.",
      stat: { value: "99,9%", label: "uptime" },
    },
    {
      key: "report",
      iconName: "chart",
      title: "Beveiligingsrapportage",
      description:
        "Maandelijks overzicht van scans, incidenten en aanbevelingen — volledig inzicht in de veiligheidsstatus van uw website.",
      stat: { value: "maandelijks", label: "rapportage" },
    },
  ],
};

const FAQ: readonly LandingFAQItem[] = [
  {
    question: "Wat kost professionele website beveiliging per maand?",
    answer:
      "Website beveiliging bij Website Beheer Pro start vanaf €79 per maand in het Essential-plan, inclusief malware-scans, firewall-bescherming en beveiligingsupdates. Voor uitgebreidere beveiliging met dagelijkse scans en prioriteitssupport kiest u het Business- of Premium-plan.",
  },
  {
    question: "Wat doe ik als mijn website gehackt is?",
    answer:
      "Neem direct contact op via info@websitebeheerpro.nl. Wij voeren een spoedcontrole uit, verwijderen de malware, herstellen uw website vanuit de meest recente back-up en beveiligen de kwetsbaarheid die de hack mogelijk maakte — zo snel mogelijk.",
  },
  {
    question: "Werken jullie ook met WordPress-beveiliging?",
    answer:
      "Ja. Het merendeel van onze beveiligingsopdrachten betreft WordPress-websites. Wij kennen de specifieke WordPress-kwetsbaarheden en passen een op maat gemaakte beveiligingsaanpak toe voor WordPress en WooCommerce.",
  },
  {
    question: "Hoe snel reageert Website Beheer Pro bij een beveiligingsincident?",
    answer:
      "In het Business- en Premium-plan reageren wij binnen 4 uur op beveiligingsincidenten, 7 dagen per week. In het Essential-plan binnen één werkdag. Bij kritieke incidenten — zoals een actieve hack — handelen wij altijd met prioriteit.",
  },
  {
    question: "Wat is een Web Application Firewall (WAF)?",
    answer:
      "Een WAF is een beveiligingslaag tussen uw website en het internet die kwaadaardig verkeer — zoals SQL-injecties, XSS-aanvallen en brute force-pogingen — filtert en blokkeert voordat het uw server bereikt. Essentieel voor elke professionele website.",
  },
  {
    question: "Beveiligen jullie ook de hosting van mijn website?",
    answer:
      "Ja. Naast applicatiebeveiliging (WordPress, plugins) kijken wij ook naar de beveiligingsconfiguratie van uw hostingomgeving: serverinstellingen, toegangscontrole en back-upbeheer — compleet ontzorgd.",
  },
];

const FINAL_CTA: LandingFinalCtaContent = {
  eyebrow: "Klaar voor professionele website beveiliging",
  titleLead: "Bescherm uw website",
  titleEm: "vóór de volgende aanval.",
  sub: "Vertel ons kort over uw website. Binnen één werkdag ontvangt u een vrijblijvend beveiligingsadvies op maat.",
  urgency: "Nieuwe beveiligingsklanten zijn welkom",
  points: [
    "Reactie binnen 1 werkdag",
    "Gratis beveiligingscheck inbegrepen",
    "Maandelijks opzegbaar",
  ],
  projectType: SERVICE_NAME,
};

const SERVICE_JSON_LD = buildServiceSchema({
  path: PATH,
  name: SERVICE_NAME,
  description: META.description,
  offerCatalogName: "Onderdelen van website beveiliging",
  offers: WHY.pillars,
});

const BREADCRUMB_JSON_LD = buildBreadcrumbSchema(SERVICE_NAME, PATH);
const FAQ_JSON_LD = buildFaqSchema(FAQ);

export default function WebsiteBeveiligingPage() {
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
      <PricingSchema serviceSlug="website-beveiliging" emitFaq={false} />

      {/* 01 — Hero */}
      <LandingHero content={HERO} projectType={SERVICE_NAME} />

      {/* 02 — Trust & social proof */}
      <TrustedMarquee />
      <LandingTrustStats />

      {/* 02b — Waarom kiezen voor ons */}
      <LandingWhyStats />

      {/* 03 — Waarom website beveiliging */}
      <LandingWhy content={WHY} />

      {/* 04 — Werkwijze */}
      <LandingProcess />

      {/* 05 — Wat we doen */}
      <LandingFeaturesSlider content={FEATURES} />

      {/* 06 — Portfolio */}
      <LandingCases />
      <ProjectsSection />

      {/* 07 — Pakketten */}
      <PricingSection defaultServiceSlug="website-beveiliging" />

      {/* 08 — Testimonials */}
      <Testimonials />

      {/* 09 — Veelgestelde vragen */}
      <FAQAccordion items={FAQ} />

      {/* Werkzaam in heel Nederland */}
      <LandingLocalSeo serviceLabel="Website beveiliging" />

      {/* 10 — Final CTA met formulier */}
      <LandingFinalCTA content={FINAL_CTA} />

      {/* Interne links */}
      <section className="lp-related" aria-label="Meer van Website Beheer Pro">
        <Container>
          <nav className="lp-related__nav" aria-label="Gerelateerde diensten">
            <Link href="/">Home</Link>
            <Link href="/websitebeheer">Websitebeheer</Link>
            <Link href="/website-onderhoud">Website onderhoud</Link>
            <Link href="/wordpress-onderhoud">WordPress onderhoud</Link>
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
