import type {
  LandingFAQItem,
  LandingFeaturesContent,
  LandingFinalCtaContent,
  LandingHeroContent,
  LandingWhyContent,
} from "./landing-nieuwe-website";

/**
 * Content for `/website-onderhoud`. Primary maintenance & management landing page.
 * Targets "website onderhoud", "websitebeheer", "website beheer" keyword clusters.
 */

const PROJECT_TYPE = "Website onderhoud";

export const ONDERHOUD_PROJECT_TYPE = PROJECT_TYPE;

export const ONDERHOUD_META = {
  path: "/website-onderhoud",
  title: "Website Onderhoud | Professioneel Websitebeheer — Website Beheer Pro",
  description:
    "Professioneel website onderhoud door Website Beheer Pro. Updates, beveiliging, dagelijkse back-ups, monitoring en snelheidsoptimalisatie — uw website altijd veilig, snel en up-to-date. Vraag een vrijblijvend onderhoudsplan aan.",
  keywords: [
    "website onderhoud",
    "websitebeheer",
    "website beheer",
    "wordpress onderhoud",
    "website onderhoudscontract",
    "website laten onderhouden",
    "website updates",
    "website beveiliging",
    "website back-up",
    "websitebeheer uitbesteden",
    "website support",
    "professioneel websitebeheer",
    "Website Beheer Pro",
  ],
  ogAlt: "Website onderhoud · Website Beheer Pro",
} as const;

export const ONDERHOUD_HERO = {
  eyebrow: "Website onderhoud · Website Beheer Pro",
  badge: "Onderhoud & beheer · nieuwe klanten welkom",
  titleLead: "Professioneel website onderhoud zodat uw site",
  titleEm: "altijd veilig en snel blijft.",
  sub: "Website Beheer Pro houdt uw website veilig, snel en up-to-date. Updates, beveiliging, dagelijkse back-ups en doorlopende optimalisatie — zodat u zich op uw bedrijf richt en wij op uw website.",
  primaryCta: "Onderhoudsplan aanvragen",
  secondaryCta: { label: "Bekijk wat we doen", href: "#proces" },
  rating: { score: "4,9", label: "Gemiddeld 4,9 / 5 uit 100+ beoordelingen" },
  pills: [
    { label: "Dagelijkse back-ups" },
    { label: "Updates & beveiliging" },
    { label: "Snelle support" },
    { label: "Maandelijks opzegbaar" },
  ],
  trust: [
    "150+ websites beheerd in Nederland",
    "Snelle reactietijden",
    "Updates zonder downtime",
    "Maandelijks opzegbaar",
  ],
  benefits: [
    "Updates van core, thema & plugins",
    "Beveiliging & dagelijkse back-ups",
    "24/7 uptime-monitoring",
    "Vaste contactpersoon",
  ],
} as const satisfies LandingHeroContent;

export const ONDERHOUD_WHY = {
  eyebrow: "Waarom websitebeheer uitbesteden",
  titleLead: "Een website is geen",
  titleEm: "eenmalig project.",
  lead: "Software veroudert, beveiligingslekken duiken op en zonder onderhoud wordt uw website trager en kwetsbaarder. Professioneel websitebeheer voorkomt problemen vóórdat ze klanten of omzet kosten — en houdt uw website een betrouwbaar en veilig visitekaartje.",
  media: {
    image: "/images/company-img.png",
    alt: "Het team van Website Beheer Pro voert updates, monitoring en beveiligingscontroles uit voor klanten door heel Nederland.",
    caption: "Website Beheer Pro · onderhoud",
    tag: "Websitebeheer & support",
  },
  proof: [
    "Updates zonder downtime",
    "Proactieve beveiliging & monitoring",
    "Eén vaste contactpersoon",
  ],
  pillars: [
    {
      iconName: "shield",
      title: "Beveiliging & back-ups",
      description:
        "Doorlopende beveiliging, een firewall en dagelijkse back-ups die veilig worden bewaard. Gaat er iets mis, dan herstellen wij uw website snel en foutloos.",
    },
    {
      iconName: "layers",
      title: "Updates zonder zorgen",
      description:
        "Wij houden core, thema en plugins up-to-date en testen na elke update — zodat uw website veilig blijft en niets onverwacht stukgaat.",
    },
    {
      iconName: "gauge",
      title: "Snelheid & prestaties",
      description:
        "Wij bewaken laadtijden en Core Web Vitals en optimaliseren doorlopend — beter voor bezoekers én voor uw Google-rankings.",
    },
    {
      iconName: "cursor",
      title: "Content-aanpassingen",
      description:
        "Tekst- of beeldwijziging nodig? Een nieuwe pagina? Wij regelen het snel en correct binnen uw onderhoudsuren.",
    },
    {
      iconName: "chart",
      title: "Monitoring & rapportage",
      description:
        "24/7 uptime-monitoring en periodieke gezondheidsrapportage, zodat u altijd weet dat uw website online is en goed presteert.",
    },
  ],
  paragraphs: [
    "Professioneel websitebeheer en website onderhoud betekenen rust: geen onverwachte storingen, geen gehackte site en geen verouderde plugins. Het is de investering die uw website veilig, snel en actueel houdt — zodat hij blijft doen waarvoor hij is gebouwd: klanten aantrekken en uw bedrijf vertegenwoordigen.",
    "Website Beheer Pro neemt het volledige onderhoud uit handen, met korte lijnen en een vaste contactpersoon. Wij beheren websites en webshops voor ondernemers door heel Nederland — ook als wij uw site niet hebben gebouwd.",
  ],
} as const satisfies LandingWhyContent;

export const ONDERHOUD_FEATURES = {
  eyebrow: "Wat we doen",
  titleLead: "Alles om uw website",
  titleEm: "zorgeloos te houden.",
  sub: "Kies een onderdeel en ontdek wat het voor uw website betekent. Standaard onderdeel van elk onderhoud- en beheerplan.",
  features: [
    {
      key: "secure",
      iconName: "shield",
      title: "Beveiliging & back-ups",
      description:
        "Firewall, beveiligingsupdates en dagelijkse back-ups die veilig worden bewaard — snel herstel bij elk incident.",
      stat: { value: "dagelijks", label: "back-up" },
    },
    {
      key: "manage",
      iconName: "layers",
      title: "Updates & testen",
      description:
        "Wij werken core, thema en plugins bij en testen na elke update — veilig en zonder onverwachte fouten.",
      stat: { value: "0 min", label: "downtime" },
    },
    {
      key: "speed",
      iconName: "lightning",
      title: "Snelheidsoptimalisatie",
      description:
        "Wij bewaken en verbeteren laadtijden en Core Web Vitals doorlopend — snel voor bezoekers en voor Google.",
      stat: { value: "< 1s", label: "laadtijd" },
    },
    {
      key: "convert",
      iconName: "cursor",
      title: "Aanpassingen op verzoek",
      description:
        "Teksten, afbeeldingen of een nieuwe pagina nodig? Wij voeren wijzigingen snel door binnen uw onderhoudsuren.",
      stat: { value: "< 1", label: "werkdag" },
    },
    {
      key: "monitor",
      iconName: "gauge",
      title: "Monitoring & uptime",
      description:
        "24/7 bewaking of uw site online is — wij grijpen direct in bij problemen, vaak nog voordat u het merkt.",
      stat: { value: "99,9%", label: "uptime" },
    },
    {
      key: "report",
      iconName: "chart",
      title: "Rapportage & advies",
      description:
        "Periodieke rapportage over updates, prestaties en beveiliging, plus concreet advies voor verdere verbeteringen.",
      stat: { value: "maandelijks", label: "rapportage" },
    },
  ],
} as const satisfies LandingFeaturesContent;

export const ONDERHOUD_FAQ = [
  {
    question: "Wat kost website onderhoud per maand?",
    answer:
      "Website onderhoud werkt met een vast, voorspelbaar maandbedrag dat afhangt van de omvang van uw website en het aantal gewenste wijzigingsuren. Onze plannen starten bij €79 per maand voor het Essential-plan. U krijgt vooraf een helder plan, zodat u nooit voor verrassingen staat.",
  },
  {
    question: "Onderhouden jullie ook websites die jullie niet hebben gebouwd?",
    answer:
      "Ja. We starten met een korte technische controle van uw bestaande website of webshop en nemen daarna het onderhoud over. Of uw site nu op WordPress, WooCommerce, Next.js of een ander platform draait — wij kijken graag mee.",
  },
  {
    question: "Wat valt er allemaal onder website onderhoud?",
    answer:
      "Updates van core, thema en plugins, beveiliging en een firewall, dagelijkse back-ups, snelheidsbewaking, uptime-monitoring en kleine inhoudelijke aanpassingen binnen uw uren. Grotere uitbreidingen offreren wij apart.",
  },
  {
    question: "Hoe snel reageren jullie bij een probleem?",
    answer:
      "Bij storingen of beveiligingsproblemen handelen wij met prioriteit. Dankzij onze 24/7 monitoring zien wij veel problemen al vóór u het merkt — en lossen wij ze op zonder dat u er iets voor hoeft te doen.",
  },
  {
    question: "Kan ik maandelijks opzeggen?",
    answer:
      "Ja. Wij werken met flexibele, maandelijks opzegbare onderhoud- en beheerplannen. U blijft bij ons op basis van service en resultaat, niet op basis van een langdurig contract.",
  },
  {
    question: "Maken jullie back-ups en kunnen jullie herstellen?",
    answer:
      "Zeker. Wij maken dagelijks automatische back-ups en bewaren deze veilig buiten uw server. Mocht er iets misgaan, dan zetten wij uw website snel en foutloos terug naar een werkende versie.",
  },
  {
    question: "Wat is het verschil tussen website onderhoud en websitebeheer?",
    answer:
      "Website onderhoud richt zich op de technische taken: updates, back-ups, beveiliging en monitoring. Websitebeheer is breder: dat omvat ook content-wijzigingen, doorontwikkeling, support en strategisch advies. Wij bieden beide — apart of gecombineerd.",
  },
  {
    question: "Optimaliseren jullie ook voor Google en AI-zoekmachines?",
    answer:
      "Ja. Als onderdeel van ons beheer bewaken wij de technische SEO-gezondheid van uw website. Voor uitgebreide SEO-optimalisatie, inclusief schema markup en GEO (Generative Engine Optimization voor ChatGPT, Gemini en Perplexity), bieden wij onze Technische SEO-dienst aan.",
  },
] as const satisfies readonly LandingFAQItem[];

export const ONDERHOUD_FINAL_CTA = {
  eyebrow: "Klaar voor zorgeloos websitebeheer",
  titleLead: "Zorgeloos online",
  titleEm: "begint vandaag.",
  sub: "Vertel ons kort over uw website. Binnen één werkdag ontvangt u een vrijblijvend onderhoud- en beheerplan op maat — veilig, snel en zonder zorgen.",
  urgency: "Nieuwe onderhoudsklanten zijn welkom",
  points: [
    "Reactie binnen 1 werkdag",
    "Maandelijks opzegbaar",
    "Eén vaste contactpersoon",
  ],
  projectType: PROJECT_TYPE,
} as const satisfies LandingFinalCtaContent;
