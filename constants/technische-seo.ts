import type {
  LandingFAQItem,
  LandingFeaturesContent,
  LandingFinalCtaContent,
  LandingHeroContent,
  LandingWhyContent,
} from "./landing-nieuwe-website";

/**
 * Content for `/technische-seo`. Targets the "technische SEO" keyword cluster.
 * Also optimized for AEO / GEO: Google AI Overviews, ChatGPT, Gemini, Perplexity.
 */

const PROJECT_TYPE = "Technische SEO";

export const TECH_SEO_PROJECT_TYPE = PROJECT_TYPE;

export const TECH_SEO_META = {
  path: "/technische-seo",
  title: "Technische SEO | Beter Vindbaar in Google — Website Beheer Pro",
  description:
    "Technische SEO-optimalisatie door Website Beheer Pro. Audit, schema markup, Core Web Vitals, canonicalisatie en sitemap-optimalisatie voor betere Google-rankings. Vraag een vrijblijvende technische SEO-audit aan.",
  keywords: [
    "technische seo",
    "technische seo optimalisatie",
    "technische seo audit",
    "seo specialist nederland",
    "core web vitals optimalisatie",
    "schema markup",
    "structured data",
    "seo bureau nederland",
    "hoger in google",
    "google ai overviews optimalisatie",
    "Website Beheer Pro",
  ],
  ogAlt: "Technische SEO · Website Beheer Pro",
} as const;

export const TECH_SEO_HERO = {
  eyebrow: "Technische SEO · Website Beheer Pro",
  badge: "Technische SEO-specialist · auditplekken beschikbaar",
  titleLead: "Technische SEO die uw website",
  titleEm: "structureel beter vindbaar maakt.",
  sub: "Website Beheer Pro optimaliseert de technische SEO-fundering van uw website: audit, schema markup, Core Web Vitals, canonicalisatie en sitemap — voor betere rankings in Google én AI-zoekmachines.",
  primaryCta: "Technische SEO-audit aanvragen",
  secondaryCta: { label: "Bekijk onze aanpak", href: "#proces" },
  rating: { score: "4,9", label: "Gemiddeld 4,9 / 5 uit 100+ beoordelingen" },
  pills: [
    { label: "Correcte indexering" },
    { label: "Core Web Vitals" },
    { label: "Schema markup" },
    { label: "AI-zoekmachines" },
  ],
  trust: [
    "150+ websites geoptimaliseerd",
    "Technische SEO-specialisten",
    "Audit & implementatie",
    "GEO-geoptimaliseerd",
  ],
  benefits: [
    "Volledige technische SEO-audit",
    "Schema markup & JSON-LD implementatie",
    "Core Web Vitals optimalisatie",
    "Sitemap & robots.txt optimalisatie",
  ],
} as const satisfies LandingHeroContent;

export const TECH_SEO_WHY = {
  eyebrow: "Waarom technische SEO",
  titleLead: "Vindbaarheid begint met",
  titleEm: "een sterke technische basis.",
  lead: "De beste content scoort niet als Google uw website niet correct kan crawlen en indexeren. Technische SEO is de fundering van organische zichtbaarheid: schema markup, snelheid, canonicalisatie, sitemaps en crawlability bepalen of Google u vindt — en hoe hoog.",
  media: {
    image: "/images/company-img.png",
    alt: "Het team van Website Beheer Pro analyseert technische SEO-data en implementeert verbeteringen voor klanten in Nederland.",
    caption: "Website Beheer Pro · technische SEO",
    tag: "Technische SEO specialist",
  },
  proof: [
    "Correcte crawlability & indexering",
    "Schema markup voor rich results",
    "Core Web Vitals onder de Google-drempel",
  ],
  pillars: [
    {
      iconName: "search",
      title: "Crawlability & indexering",
      description:
        "Wij zorgen dat Google alle wichtige pagina's correct kan crawlen en indexeren — en pagina's die niet geïndexeerd moeten worden blokkeren.",
    },
    {
      iconName: "spark",
      title: "Schema markup & JSON-LD",
      description:
        "Gestructureerde data die rich results activeert en zoekmachines — inclusief AI — helpt uw content correct te begrijpen en weer te geven.",
    },
    {
      iconName: "gauge",
      title: "Core Web Vitals",
      description:
        "LCP, CLS en INP geoptimaliseerd voor een hogere PageSpeed-score, betere gebruikerservaring en betere Google-rankings.",
    },
    {
      iconName: "layers",
      title: "Canonicalisatie & sitemaps",
      description:
        "Correcte canonical tags, een bijgewerkte XML-sitemap en een goed geconfigureerde robots.txt — de basis voor een foutloze Google-indexering.",
    },
    {
      iconName: "chart",
      title: "GEO — AI-zoekmachines",
      description:
        "Optimalisatie voor Google AI Overviews, ChatGPT, Gemini en Perplexity: heldere structuur, directe antwoorden en schema markup voor maximale AI-zichtbaarheid.",
    },
  ],
  paragraphs: [
    "Technische SEO is meer dan een afvinklijst. Het is een doorlopend proces van auditen, corrigeren en optimaliseren. Website Beheer Pro combineert een grondige technische audit met snelle, correcte implementatie — en bewaakt de resultaten in Search Console en GA4.",
    "Wij optimaliseren niet alleen voor traditionele zoekmachines, maar ook voor de nieuwe generatie AI-gedreven zoekmachines: Google AI Overviews, ChatGPT, Claude, Gemini en Perplexity. Heldere structuur, schema markup en directe antwoorden zijn de sleutel tot zichtbaarheid in dit nieuwe zoeklandschap.",
  ],
} as const satisfies LandingWhyContent;

export const TECH_SEO_FEATURES = {
  eyebrow: "Wat we doen",
  titleLead: "Technische SEO van",
  titleEm: "audit tot implementatie.",
  sub: "Kies een onderdeel en ontdek hoe wij uw technische SEO verbeteren. Elke optimalisatie direct meetbaar in Search Console en PageSpeed.",
  features: [
    {
      key: "audit",
      iconName: "search",
      title: "Technische SEO-audit",
      description:
        "Grondige analyse van crawlability, indexering, schema markup, snelheid en canonicalisatie — met een duidelijke prioriteitenlijst.",
      stat: { value: "100+", label: "checks" },
    },
    {
      key: "schema",
      iconName: "spark",
      title: "Schema markup & JSON-LD",
      description:
        "Implementatie van Organization, Service, FAQ, BreadcrumbList en Article schema — direct getest in Google's Rich Results Tool.",
      stat: { value: "rich", label: "results" },
    },
    {
      key: "cwv",
      iconName: "gauge",
      title: "Core Web Vitals",
      description:
        "LCP, CLS en INP geoptimaliseerd voor een PageSpeed-score van 90+ — op mobiel én desktop.",
      stat: { value: "90+", label: "PageSpeed" },
    },
    {
      key: "canonical",
      iconName: "layers",
      title: "Canonicalisatie & redirects",
      description:
        "Correcte canonical tags, 301-redirects en duplicate-content aanpak — zodat Google de juiste URL indexeert.",
      stat: { value: "0", label: "duplicaten" },
    },
    {
      key: "sitemap",
      iconName: "chart",
      title: "Sitemap & robots.txt",
      description:
        "Up-to-date XML-sitemap met correcte prioriteiten en een robots.txt die alleen de juiste paden toestaat.",
      stat: { value: "100%", label: "correct" },
    },
    {
      key: "geo",
      iconName: "rocket",
      title: "GEO optimalisatie",
      description:
        "Structuur en schema markup geoptimaliseerd voor Google AI Overviews, ChatGPT, Gemini en Perplexity.",
      stat: { value: "AI", label: "ready" },
    },
  ],
} as const satisfies LandingFeaturesContent;

export const TECH_SEO_FAQ = [
  {
    question: "Wat zijn de tarieven voor technische SEO in Nederland?",
    answer:
      "Een technische SEO-audit start bij Website Beheer Pro vanaf €299 eenmalig. Volledige implementatie inclusief schema markup en Core Web Vitals kost €799 eenmalig. Doorlopende technische SEO-monitoring begint bij €299 per maand.",
  },
  {
    question: "Wat is technische SEO en waarom is het belangrijk?",
    answer:
      "Technische SEO omvat alle technische aspecten van uw website die invloed hebben op hoe goed zoekmachines hem kunnen crawlen, indexeren en beoordelen. Denk aan crawlability, schema markup, laadsnelheid, canonicalisatie en sitemaps. Zonder sterke technische SEO-basis kunnen zelfs de beste content en links niet voldoende ranken.",
  },
  {
    question: "Hoe snel zie ik resultaat van technische SEO-verbeteringen?",
    answer:
      "Technische verbeteringen worden doorgaans binnen 1-4 weken door Google verwerkt, afhankelijk van de crawlfrequentie van uw website. Rankingverbeteringen worden na 4-12 weken zichtbaar, maar de exacte timing hangt af van de competitiviteit van uw zoekwoorden.",
  },
  {
    question: "Optimaliseren jullie ook voor Google AI Overviews en ChatGPT?",
    answer:
      "Ja. Wij optimaliseren voor GEO (Generative Engine Optimization): heldere inhoudsstructuur, FAQ-schema, directe antwoorden op gebruikersvragen en juiste entity-markup — zodat AI-modellen uw content correct begrijpen en weergeven in AI-gedreven zoekoverzichten.",
  },
  {
    question: "Wat is schema markup en welk type heb ik nodig?",
    answer:
      "Schema markup is gestructureerde data (JSON-LD) die zoekmachines vertelt wat uw content betekent. Voor de meeste bedrijfswebsites zijn Organization, Service, BreadcrumbList en FAQPage schema de meest waardevolle types. Wij kiezen de juiste schema-types op basis van uw pagina-inhoud.",
  },
  {
    question: "Werken jullie ook samen met onze bestaande SEO-bureau?",
    answer:
      "Ja. Wij richten ons specifiek op de technische SEO-laag: audit, implementatie en monitoring. Dit kan uitstekend gecombineerd worden met een content-SEO bureau dat zich richt op zoekwoordonderzoek, linkbuilding en contentcreatie.",
  },
] as const satisfies readonly LandingFAQItem[];

export const TECH_SEO_FINAL_CTA = {
  eyebrow: "Klaar voor betere Google-rankings",
  titleLead: "Laat uw technische SEO",
  titleEm: "professioneel optimaliseren.",
  sub: "Vraag een gratis technische SEO-quickscan aan. Binnen één werkdag ontvangt u een eerste indruk van de belangrijkste verbetermogelijkheden voor uw website.",
  urgency: "Auditplekken beschikbaar",
  points: [
    "Reactie binnen 1 werkdag",
    "Gratis quickscan inbegrepen",
    "Implementatie op maat",
  ],
  projectType: PROJECT_TYPE,
} as const satisfies LandingFinalCtaContent;
