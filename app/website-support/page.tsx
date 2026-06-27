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

const PATH = "/website-support";
const SERVICE_NAME = "Website support";

const META = {
  title: "Website Support | Professionele Website Hulp — Website Beheer Pro",
  description:
    "Professionele website support door Website Beheer Pro. Snelle hulp bij technische problemen, wijzigingen, storingen en vragen over uw website. Directe ondersteuning van ervaren specialisten.",
};

export const metadata: Metadata = {
  title: META.title,
  description: META.description,
  alternates: { canonical: PATH },
  keywords: [
    "website support",
    "website hulp",
    "website technische problemen",
    "wordpress support",
    "website ondersteuning",
    "website helpdesk",
    "website aanpassingen",
    "Website Beheer Pro",
  ],
  openGraph: {
    title: META.title,
    description: META.description,
    url: PATH,
    type: "website",
    images: [{ url: "/images/company-img.png", width: 1200, height: 630, alt: "Website support — Website Beheer Pro" }],
  },
  twitter: {
    card: "summary_large_image",
    title: META.title,
    description: META.description,
  },
};

const HERO: LandingHeroContent = {
  eyebrow: "Website support · Website Beheer Pro",
  badge: "Website-specialisten · nieuwe klanten welkom",
  titleLead: "Website support zonder wachttijden —",
  titleEm: "directe hulp van echte specialisten.",
  sub: "Website Beheer Pro biedt professionele website support voor ondernemers. Technische problemen, wijzigingen, storingen of vragen — wij reageren snel en lossen het op. Geen ticketsystemen, geen wachtrijen.",
  primaryCta: "Website support aanvragen",
  secondaryCta: { label: "Bekijk onze aanpak", href: "#proces" },
  rating: { score: "4,9", label: "Gemiddeld 4,9 / 5 uit 100+ beoordelingen" },
  pills: [
    { label: "Technische support" },
    { label: "Wijzigingen & updates" },
    { label: "Storingsherstel" },
    { label: "Maandelijks opzegbaar" },
  ],
  trust: [
    "500+ ondersteuningsvragen opgelost",
    "Website-specialisten",
    "Directe reactie",
    "Maandelijks opzegbaar",
  ],
  benefits: [
    "Directe technische support — geen wachtrijen",
    "Wijzigingen & aanpassingen snel doorgevoerd",
    "Storingsherstel met prioriteit",
    "Vaste specialist die uw website kent",
  ],
};

const WHY: LandingWhyContent = {
  eyebrow: "Waarom website support",
  titleLead: "Websiteproblemen lossen zichzelf",
  titleEm: "nooit op.",
  lead: "Een kapotte formulier, een ontbrekende pagina, een foutmelding in WordPress — elke dag dat het wacht kost u potentiële klanten. Professionele website support betekent: snel geholpen worden door iemand die uw website kent en problemen adequaat oplost.",
  media: {
    image: "/images/company-img.png",
    alt: "Website Beheer Pro website-specialist lost technische problemen op voor klanten in Nederland.",
    caption: "Website Beheer Pro · support",
    tag: "Website-specialist",
  },
  proof: [
    "Directe reactie — geen ticketsystemen of wachtrijen",
    "Vaste specialist die uw website door en door kent",
    "Problemen opgelost, niet omheen gewerkt",
  ],
  pillars: [
    {
      iconName: "lightning",
      title: "Technische support",
      description:
        "Directe hulp bij technische problemen: foutmeldingen, kapotte functionaliteiten, plugin-conflicten en overige storingen — snel opgelost.",
    },
    {
      iconName: "cursor",
      title: "Wijzigingen & aanpassingen",
      description:
        "Kleine of grotere wijzigingen aan uw website snel en correct doorgevoerd — teksten, afbeeldingen, formulieren, pagina's en meer.",
    },
    {
      iconName: "shield",
      title: "Storingsherstel",
      description:
        "Website offline, wit scherm of andere ernstige storing? Wij handelen met prioriteit en lossen de oorzaak structureel op.",
    },
    {
      iconName: "gauge",
      title: "WordPress support",
      description:
        "Gespecialiseerde WordPress-support: plugin-problemen, thema-aanpassingen, update-fouten en optimalisaties — snel en vakkundig.",
    },
    {
      iconName: "chart",
      title: "Advies & begeleiding",
      description:
        "Niet alleen problemen oplossen — ook proactief adviseren over verbeteringen, mogelijkheden en risico's voor uw website.",
    },
  ],
  paragraphs: [
    "Website support is meer dan een technisch loket. Een goede supportpartner kent uw website, denkt mee en helpt uw online aanwezigheid continu verbeteren. Website Beheer Pro is die partner.",
    "Wij bieden website support voor ondernemers en bedrijven door heel Nederland — van eenmanszaak tot MKB. WordPress, WooCommerce, Joomla, maatwerk — wij ondersteunen elk platform.",
  ],
};

const FEATURES: LandingFeaturesContent = {
  eyebrow: "Wat we doen",
  titleLead: "Complete website support,",
  titleEm: "direct geregeld.",
  sub: "Kies een onderdeel en ontdek wat professionele website support voor uw bedrijf betekent.",
  features: [
    {
      key: "technical",
      iconName: "lightning",
      title: "Technische support",
      description:
        "Foutmeldingen, kapotte functionaliteiten, plugin-conflicten — snel opgelost door ervaren specialisten zonder omwegen.",
      stat: { value: "direct", label: "reactie" },
    },
    {
      key: "changes",
      iconName: "cursor",
      title: "Wijzigingen & aanpassingen",
      description:
        "Teksten, afbeeldingen, pagina's, formulieren — wijzigingen snel en correct doorgevoerd zonder dat u zelf in het CMS hoeft.",
      stat: { value: "snel", label: "doorgevoerd" },
    },
    {
      key: "emergency",
      iconName: "shield",
      title: "Spoedondersteuning",
      description:
        "Website offline, hack of ernstige storing? Wij handelen met prioriteit — structureel oplossen, niet tijdelijk plakken.",
      stat: { value: "prioriteit", label: "bij spoed" },
    },
    {
      key: "wordpress",
      iconName: "gauge",
      title: "WordPress support",
      description:
        "Gespecialiseerde ondersteuning voor WordPress en WooCommerce — van plugin-problemen tot thema-aanpassingen en update-fouten.",
      stat: { value: "expert", label: "WordPress" },
    },
    {
      key: "advice",
      iconName: "chart",
      title: "Proactief advies",
      description:
        "Wij signaleren problemen vóórdat ze optreden en adviseren over verbeteringen — uw website in goede handen.",
      stat: { value: "proactief", label: "meedenken" },
    },
    {
      key: "specialist",
      iconName: "rocket",
      title: "Vaste specialist",
      description:
        "Geen anoniem callcenter — een vaste specialist die uw website kent en begrijpt, altijd bereikbaar voor uw vragen.",
      stat: { value: "vast", label: "aanspreekpunt" },
    },
  ],
};

const FAQ: readonly LandingFAQItem[] = [
  {
    question: "Wat kost website support per maand?",
    answer:
      "Website support bij Website Beheer Pro is inbegrepen in onze beheerplannen vanaf €79 per maand. Het Essential-plan bevat e-mailsupport met reactie binnen 1 werkdag. In het Business- en Premium-plan krijgt u prioriteitssupport met kortere reactietijden en telefonische ondersteuning.",
  },
  {
    question: "Hoe snel reageert Website Beheer Pro op een supportverzoek?",
    answer:
      "In het Essential-plan reageren wij binnen 1 werkdag. In het Business-plan binnen 4 uur (werkdagen). In het Premium-plan binnen 2 uur. Bij spoedgevallen — zoals een offline website — handelen wij altijd met prioriteit, ongeacht uw plan.",
  },
  {
    question: "Kunnen jullie ook ondersteuning bieden voor een WordPress-website?",
    answer:
      "Ja. Het merendeel van onze supportverzoeken betreft WordPress-websites. Wij ondersteunen WordPress, WooCommerce, Joomla, Drupal en maatwerk-platforms. Onze specialisten kennen de meestvoorkomende problemen en lossen ze snel op.",
  },
  {
    question: "Wat zijn de grenzen van website support?",
    answer:
      "Website support omvat technische hulp, kleine aanpassingen en probleemoplossing. Grote herontwikkeling of uitgebreide nieuwe functionaliteiten vallen buiten standaard support en worden apart geoffreerd als projectwerk.",
  },
  {
    question: "Kan ik ook eenmalige support aanvragen zonder abonnement?",
    answer:
      "Ja. Voor eenmalige technische hulp of spoedgevallen kunt u contact opnemen via info@websitebeheerpro.nl. Wij helpen u ook zonder lopend abonnement — op uurbasis of als projectopdracht.",
  },
];

const FINAL_CTA: LandingFinalCtaContent = {
  eyebrow: "Klaar voor professionele website support",
  titleLead: "Websiteproblemen opgelost",
  titleEm: "zonder wachttijden.",
  sub: "Vertel ons kort over uw website en uw ondersteuningsbehoefte. Binnen één werkdag ontvangt u een vrijblijvend voorstel.",
  urgency: "Nieuwe klanten zijn welkom",
  points: [
    "Reactie binnen 1 werkdag",
    "Direct aan de slag bij spoed",
    "Maandelijks opzegbaar",
  ],
  projectType: SERVICE_NAME,
};

const SERVICE_JSON_LD = buildServiceSchema({
  path: PATH,
  name: SERVICE_NAME,
  description: META.description,
  offerCatalogName: "Onderdelen van website support",
  offers: WHY.pillars,
});

const BREADCRUMB_JSON_LD = buildBreadcrumbSchema(SERVICE_NAME, PATH);
const FAQ_JSON_LD = buildFaqSchema(FAQ);

export default function WebsiteSupportPage() {
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
      <PricingSchema serviceSlug="website-support" emitFaq={false} />

      {/* 01 — Hero */}
      <LandingHero content={HERO} projectType={SERVICE_NAME} />

      {/* 02 — Trust & social proof */}
      <TrustedMarquee />
      <LandingTrustStats />

      {/* 02b — Waarom kiezen voor ons */}
      <LandingWhyStats />

      {/* 03 — Waarom website support */}
      <LandingWhy content={WHY} />

      {/* 04 — Werkwijze */}
      <LandingProcess />

      {/* 05 — Wat we doen */}
      <LandingFeaturesSlider content={FEATURES} />

      {/* 06 — Portfolio */}
      <LandingCases />
      <ProjectsSection />

      {/* 07 — Pakketten */}
      <PricingSection defaultServiceSlug="website-support" />

      {/* 08 — Testimonials */}
      <Testimonials />

      {/* 09 — Veelgestelde vragen */}
      <FAQAccordion items={FAQ} />

      {/* Werkzaam in heel Nederland */}
      <LandingLocalSeo serviceLabel="Website support" />

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
            <Link href="/website-beveiliging">Website beveiliging</Link>
            <Link href="/website-optimalisatie">Website optimalisatie</Link>
            <Link href="/work">Portfolio</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </Container>
      </section>
    </main>
  );
}
