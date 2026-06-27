import type {
  LandingFAQItem,
  LandingFeaturesContent,
  LandingFinalCtaContent,
  LandingHeroContent,
  LandingWhyContent,
} from "./landing-nieuwe-website";

/**
 * Content for `/websitebeheer`. Primary websitebeheer landing page.
 * Targets "websitebeheer", "website beheer", "websitebeheer pro" keyword clusters.
 */

const PROJECT_TYPE = "Websitebeheer";

export const BEHEER_PROJECT_TYPE = PROJECT_TYPE;

export const BEHEER_META = {
  path: "/websitebeheer",
  title: "Websitebeheer | Professioneel Website Beheer — Website Beheer Pro",
  description:
    "Professioneel websitebeheer door Website Beheer Pro. Updates, beveiliging, dagelijkse back-ups, 24/7 monitoring en technische SEO — uw website altijd veilig, snel en up-to-date. Vraag een vrijblijvend beheerplan aan.",
  keywords: [
    "websitebeheer",
    "website beheer",
    "websitebeheer pro",
    "professioneel websitebeheer",
    "website beheer nederland",
    "websitebeheer uitbesteden",
    "website beheer abonnement",
    "technisch websitebeheer",
    "website onderhoud",
    "website beveiliging",
    "website monitoring",
    "Website Beheer Pro",
  ],
  ogAlt: "Websitebeheer · Website Beheer Pro",
} as const;

export const BEHEER_HERO = {
  eyebrow: "Websitebeheer · Website Beheer Pro",
  badge: "Professioneel websitebeheer · nieuwe klanten welkom",
  titleLead: "Professioneel websitebeheer zodat u",
  titleEm: "nooit meer om uw website hoeft te denken.",
  sub: "Website Beheer Pro verzorgt volledig proactief websitebeheer voor bedrijven in Nederland. Updates, beveiliging, dagelijkse back-ups, 24/7 monitoring en technische SEO — alles in één vertrouwde beheerpartner.",
  primaryCta: "Beheerplan aanvragen",
  secondaryCta: { label: "Bekijk onze aanpak", href: "#proces" },
  rating: { score: "4,9", label: "Gemiddeld 4,9 / 5 uit 100+ beoordelingen" },
  pills: [
    { label: "24/7 monitoring & beveiliging" },
    { label: "Dagelijkse back-ups" },
    { label: "Snelle support" },
    { label: "Maandelijks opzegbaar" },
  ],
  trust: [
    "150+ websites beheerd in Nederland",
    "Proactief, niet reactief",
    "Updates zonder downtime",
    "Maandelijks opzegbaar",
  ],
  benefits: [
    "Updates & beveiliging inbegrepen",
    "Dagelijkse back-ups & snel herstel",
    "24/7 uptime-monitoring",
    "Vaste contactpersoon",
  ],
} as const satisfies LandingHeroContent;

export const BEHEER_WHY = {
  eyebrow: "Waarom websitebeheer uitbesteden",
  titleLead: "Uw website verdient",
  titleEm: "een vaste beheerpartner.",
  lead: "Een website is geen eenmalige investering. Software veroudert, beveiligingslekken duiken op en zonder proactief beheer wordt uw website trager, kwetsbaarder en minder vindbaar. Professioneel websitebeheer voorkomt problemen vóórdat ze uw bezoekers of omzet raken.",
  media: {
    image: "/images/company-img.png",
    alt: "Het team van Website Beheer Pro voert proactief websitebeheer uit voor klanten in heel Nederland.",
    caption: "Website Beheer Pro · beheer",
    tag: "Websitebeheer specialist",
  },
  proof: [
    "Proactief beheer, altijd voorlopen op problemen",
    "Dagelijkse back-ups met snel herstel",
    "Eén vaste contactpersoon",
  ],
  pillars: [
    {
      iconName: "shield",
      title: "Beveiliging & back-ups",
      description:
        "Firewall, malware-scans en dagelijkse back-ups. Gaat er iets mis, dan herstellen wij uw website snel en foutloos vanuit een schone back-up.",
    },
    {
      iconName: "layers",
      title: "Updates zonder risico",
      description:
        "Wij houden core, thema en plugins up-to-date en testen elke update uitgebreid — zodat niets stukgaat en uw website veilig en stabiel blijft.",
    },
    {
      iconName: "gauge",
      title: "Prestaties & snelheid",
      description:
        "Doorlopende bewaking en optimalisatie van laadtijden en Core Web Vitals — beter voor bezoekers en voor uw Google-positie.",
    },
    {
      iconName: "cursor",
      title: "Content-aanpassingen",
      description:
        "Tekst- of beeldwijziging nodig? Nieuwe pagina? Wij regelen het snel en correct binnen uw beheeruren — geen gedoe, geen wachttijden.",
    },
    {
      iconName: "chart",
      title: "Monitoring & rapportage",
      description:
        "24/7 uptime-monitoring plus periodieke rapportage over prestaties, beveiliging en aanbevelingen voor verdere verbetering.",
    },
  ],
  paragraphs: [
    "Professioneel websitebeheer geeft rust: geen onverwachte storingen, geen gehackte site, geen verouderde software. Het is de investering die uw website veilig, snel en actueel houdt — zodat hij dag en nacht uw bedrijf vertegenwoordigt en klanten aantrekt.",
    "Website Beheer Pro beheert websites en webshops voor ondernemers en bedrijven door heel Nederland. Wij werken proactief, denken mee over verbeteringen en zijn er als het er op aankomt — ook als wij uw site niet hebben gebouwd.",
  ],
} as const satisfies LandingWhyContent;

export const BEHEER_FEATURES = {
  eyebrow: "Wat we doen",
  titleLead: "Volledig websitebeheer,",
  titleEm: "van A tot Z.",
  sub: "Kies een onderdeel en ontdek wat professioneel websitebeheer voor uw website betekent. Alles inbegrepen in uw beheerplan.",
  features: [
    {
      key: "secure",
      iconName: "shield",
      title: "Beveiliging & back-ups",
      description:
        "Firewall, beveiligingsupdates en dagelijkse back-ups — proactieve bescherming en snel herstel bij elk incident.",
      stat: { value: "dagelijks", label: "back-up" },
    },
    {
      key: "manage",
      iconName: "layers",
      title: "Updates & testen",
      description:
        "Core, thema en plugins bijgewerkt en getest — veilig en zonder downtime of onverwachte fouten.",
      stat: { value: "0 min", label: "downtime" },
    },
    {
      key: "speed",
      iconName: "lightning",
      title: "Snelheid & prestaties",
      description:
        "Laadtijden en Core Web Vitals doorlopend bewaakt en geoptimaliseerd — snel voor bezoekers en Google.",
      stat: { value: "< 1s", label: "laadtijd" },
    },
    {
      key: "content",
      iconName: "cursor",
      title: "Content-aanpassingen",
      description:
        "Teksten, afbeeldingen, nieuwe pagina's of kleine uitbreidingen — snel en correct doorgevoerd binnen uw beheeruren.",
      stat: { value: "< 1", label: "werkdag" },
    },
    {
      key: "monitor",
      iconName: "gauge",
      title: "24/7 monitoring",
      description:
        "Uw website 24/7 bewaakt — wij grijpen in bij downtime, fouten of beveiligingsincidenten, altijd vóór u het merkt.",
      stat: { value: "99,9%", label: "uptime" },
    },
    {
      key: "report",
      iconName: "chart",
      title: "Rapportage & advies",
      description:
        "Periodieke gezondheidsrapportage met inzicht in prestaties, beveiliging en concrete verbeteraanbevelingen.",
      stat: { value: "maandelijks", label: "rapportage" },
    },
  ],
} as const satisfies LandingFeaturesContent;

export const BEHEER_FAQ = [
  {
    question: "Wat is professioneel websitebeheer?",
    answer:
      "Professioneel websitebeheer omvat alle technische taken die uw website veilig, snel en actueel houden: software-updates, dagelijkse back-ups, beveiligingsmonitoring, 24/7 uptime-bewaking, snelheidsoptimalisatie en technische SEO. Website Beheer Pro neemt dit volledige traject uit handen.",
  },
  {
    question: "Wat kost websitebeheer per maand?",
    answer:
      "Websitebeheer start bij Website Beheer Pro vanaf €79 per maand voor het Essential-plan. Het Business-plan (€149/mnd) biedt ook 2 uur wijzigingen, snelheidsoptimalisatie en prioriteit support. Het Premium-plan (€299/mnd) is volledig proactief beheer met 5 uur doorontwikkeling, SLA en kwartaal-strategiegesprek.",
  },
  {
    question: "Kunnen jullie ook mijn bestaande website beheren?",
    answer:
      "Ja. Website Beheer Pro neemt het beheer over van elke bestaande website, ongeacht het platform (WordPress, Next.js, Wix, etc.) of de oorspronkelijke bouwer. Wij starten altijd met een gratis technische check.",
  },
  {
    question: "Hoe snel reageren jullie bij een probleem of storing?",
    answer:
      "Dankzij onze 24/7 monitoring detecteren wij problemen gemiddeld binnen één minuut. Bij het Essential-plan reageren wij binnen 48 uur; Business binnen 24 uur; Premium heeft een SLA van 4 uur. Bij kritieke incidenten altijd met prioriteit.",
  },
  {
    question: "Wat als mijn website gehackt wordt?",
    answer:
      "Wij handelen direct: analyse van het incident, verwijdering van malware, herstel vanuit de meest recente schone back-up en hardening om herhaling te voorkomen. Onze proactieve beveiligingsmonitoring zorgt er bovendien voor dat de meeste dreigingen al worden geblokkeerd vóór ze schade aanrichten.",
  },
  {
    question: "Zit ik vast aan een lang contract?",
    answer:
      "Nee. Onze beheerplannen zijn maandelijks opzegbaar. U blijft bij Website Beheer Pro op basis van service en resultaat — niet omdat u vastzit.",
  },
  {
    question: "Beheert Website Beheer Pro ook WordPress websites?",
    answer:
      "Absoluut. WordPress-beheer is onze specialiteit. Wij verzorgen ook specifiek WordPress onderhoud: core-updates, plugin-beheer, malware-scans, firewall-bescherming, dagelijkse back-ups en prestatie-optimalisatie.",
  },
  {
    question: "Optimaliseren jullie ook voor Google en AI-zoekmachines?",
    answer:
      "Ja. Technische SEO-bewaking is standaard onderdeel van ons Business- en Premium-beheerplan. Voor uitgebreide optimalisatie van schema markup, GEO (Generative Engine Optimization voor ChatGPT, Gemini en Perplexity) en rankings bieden wij onze Technische SEO-dienst aan.",
  },
] as const satisfies readonly LandingFAQItem[];

export const BEHEER_FINAL_CTA = {
  eyebrow: "Klaar voor zorgeloos websitebeheer",
  titleLead: "Laat uw website",
  titleEm: "in vertrouwde handen.",
  sub: "Vertel ons kort over uw website. Binnen één werkdag ontvangt u een vrijblijvend beheerplan op maat — veilig, snel en zonder zorgen.",
  urgency: "Nieuwe klanten zijn welkom",
  points: [
    "Reactie binnen 1 werkdag",
    "Maandelijks opzegbaar",
    "Eén vaste contactpersoon",
  ],
  projectType: PROJECT_TYPE,
} as const satisfies LandingFinalCtaContent;
