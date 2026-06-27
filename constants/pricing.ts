import type { PricingSectionContent, ServicePricing } from "@/types";

/**
 * "Pakketten" — website management & maintenance pricing for Website Beheer Pro.
 *
 * Focuses on recurring monthly management plans and one-off technical services.
 * Premium positioning only — never "goedkoop", "betaalbaar" or "laagste prijs".
 */

export const PRICING_SECTION = {
  eyebrow: "Tarieven & pakketten",
  titleLead: "Eén partner,",
  titleEm: "drie heldere beheerplannen.",
  sub: "Kies een dienst en zie direct wat professioneel websitebeheer, website onderhoud of technische SEO kost — van basis onderhoud tot volledig ontzorgd beheer. Transparante maandtarieven zonder verborgen kosten.",
  filterLabel: "Kies een dienst",
  comparisonTitle: "Volledige vergelijking",
  roiEyebrow: "Rendement",
  faqEyebrow: "Kosten & tarieven",
  faqTitle: "Veelgestelde vragen over kosten",
} as const satisfies PricingSectionContent;

/** Display order of the service filter bar. */
export const PRICING_ORDER = [
  "website-onderhoud",
  "websitebeheer",
  "wordpress-onderhoud",
  "website-beveiliging",
  "technische-seo",
  "website-monitoring",
  "hosting-beheer",
  "website-support",
  "website-optimalisatie",
] as const;

export const SERVICE_PRICING = [
  {
    slug: "website-onderhoud",
    name: "Website onderhoud",
    chipLabel: "Onderhoud",
    icon: "wrench",
    projectType: "Website onderhoud",
    headline:
      "Uw website altijd snel, veilig en up-to-date — professioneel website onderhoud in een helder maandabonnement.",
    tiers: [
      {
        id: "start",
        name: "Essential",
        tagline: "De essentiële basis: updates, back-ups en beveiligingsmonitoring",
        bestFor: "Voor websites die veilig en up-to-date moeten blijven zonder grote beheerlasten.",
        timeline: "Maandelijks",
        price: { amount: 79, period: "maand" },
        deliverables: [
          "Maandelijkse software-updates",
          "Dagelijkse automatische back-ups",
          "Beveiligingsmonitoring & malware-scan",
          "Uptime-monitoring 24/7",
          "Kleine tekstwijzigingen (30 min/mnd)",
        ],
        techIds: ["WordPress", "Next.js", "Vercel"],
        ctaLabel: "Start nu",
      },
      {
        id: "professioneel",
        name: "Business",
        badge: "Meest gekozen",
        highlighted: true,
        tagline: "Volledig onderhoud plus doorlopende kleine verbeteringen en support",
        bestFor: "Voor groeiende bedrijven die hun site actueel, snel en betrouwbaar willen houden.",
        timeline: "Maandelijks",
        price: { amount: 149, period: "maand" },
        deliverables: [
          "Alles uit Essential",
          "2 uur wijzigingen & support per maand",
          "Prestatie- & snelheidsoptimalisatie",
          "Maandelijkse gezondheidsrapportage",
          "Prioriteit support (binnen 24 uur)",
          "Basis technische SEO-monitoring",
        ],
        techIds: ["WordPress", "Next.js", "Vercel", "GA4"],
        ctaLabel: "Beheerplan aanvragen",
      },
      {
        id: "maatwerk",
        name: "Premium",
        tagline: "Een proactieve beheerpartner voor uw complete online aanwezigheid",
        bestFor: "Voor bedrijven waarvoor de website bedrijfskritisch is en doorontwikkeling gewenst is.",
        timeline: "Maandelijks",
        price: { amount: 299, period: "maand" },
        deliverables: [
          "Alles uit Business",
          "5 uur ontwikkeling & doorontwikkeling per maand",
          "Proactieve optimalisatie & A/B-tests",
          "Dedicated aanspreekpunt",
          "Support-SLA (binnen 4 uur)",
          "Kwartaal-strategiegesprek",
          "Geavanceerde technische SEO",
        ],
        techIds: ["WordPress", "Next.js", "Vercel", "GA4", "Cloudflare"],
        ctaLabel: "Plan een gesprek",
      },
    ],
    comparison: [
      { label: "Software-updates & back-ups", values: [true, true, true] },
      { label: "Beveiligings- & uptime-monitoring", values: [true, true, true] },
      { label: "Wijzigingen per maand", values: ["30 min", "2 uur", "5 uur"] },
      { label: "Prestatie-optimalisatie", values: [false, true, true] },
      { label: "Support-responstijd", values: ["48 uur", "24 uur", "4 uur (SLA)"] },
      { label: "Technische SEO-monitoring", values: [false, "Basis", "Geavanceerd"] },
      { label: "Doorontwikkeling & strategie", values: [false, false, true] },
    ],
    roi: {
      lead: "Onderhoudskosten zijn een kleine vaste investering die grote risico's voorkomt. Eén dag downtime of een gehackte site kost vaak meer dan een jaar onderhoud — nog los van reputatieschade en gemiste omzet.",
      stats: [
        { target: 24, suffix: "/7", label: "Monitoring & beveiliging" },
        { target: 99, suffix: "%+", label: "Gegarandeerde uptime" },
        { target: 4, prefix: "±", suffix: " uur", label: "Reactietijd (Premium)" },
      ],
    },
    faq: [
      {
        question: "Wat kost website onderhoud per maand?",
        answer:
          "Website onderhoud start bij Website Beheer Pro vanaf €79 per maand voor het Essential-plan. De prijs hangt af van de omvang van uw website en de gewenste ondersteuning. Wij werken met heldere maandpakketten — geen verborgen kosten, maandelijks opzegbaar.",
      },
      {
        question: "Wat valt er onder website onderhoud?",
        answer:
          "Software-updates, dagelijkse back-ups, beveiligings- en uptime-monitoring, prestatie-optimalisatie en kleine inhoudelijke wijzigingen. Bij de grotere plannen komt doorontwikkeling en technische SEO bij.",
      },
      {
        question: "Zit ik vast aan een lang contract?",
        answer:
          "Nee. Onze onderhoudspakketten zijn maandelijks opzegbaar. U blijft omdat uw website goed draait, niet omdat een contract u vasthoudt.",
      },
      {
        question: "Onderhouden jullie ook websites die iemand anders heeft gebouwd?",
        answer:
          "Zeker. We nemen het onderhoud van elke website over, ongeacht wie hem heeft gebouwd. We starten met een technische check en presenteren daarna een passend plan.",
      },
    ],
    seo: {
      title: "Wat kost website onderhoud per maand in Nederland?",
      body: "De kosten van website onderhoud hangen af van de omvang van uw website en de gewenste dienstverlening. Bij Website Beheer Pro start een professioneel onderhoudsabonnement met updates, back-ups en monitoring vanaf €79 per maand, oplopend tot €299 per maand voor volledig proactief beheer met doorontwikkeling en een support-SLA. Website onderhoud is geen kostenpost maar een investering: één dag downtime of een beveiligingsincident kost al snel meer dan een heel jaar onderhoud. Wij bewaken uw website 24/7, voeren updates uit zonder downtime en zorgen dat u nooit voor verrassingen staat. Vraag vrijblijvend een onderhoudsplan op maat aan.",
    },
  },
  {
    slug: "websitebeheer",
    name: "Websitebeheer",
    chipLabel: "Websitebeheer",
    icon: "layers",
    projectType: "Websitebeheer",
    headline:
      "Volledig websitebeheer voor ondernemers en bedrijven — wij regelen alles zodat u zich op uw bedrijf kunt richten.",
    tiers: [
      {
        id: "start",
        name: "Starter Beheer",
        tagline: "Basisbeheer voor websites die veilig en actueel moeten blijven",
        bestFor: "Voor zzp'ers en kleine bedrijven die ontzorgd willen worden.",
        timeline: "Maandelijks",
        price: { amount: 99, period: "maand" },
        deliverables: [
          "Maandelijkse software-updates",
          "Dagelijkse back-ups",
          "Beveiligingsmonitoring",
          "Uptime-monitoring 24/7",
          "30 min/maand wijzigingen",
        ],
        techIds: ["WordPress", "Next.js", "Vercel"],
        ctaLabel: "Start nu",
      },
      {
        id: "professioneel",
        name: "Business Beheer",
        badge: "Meest gekozen",
        highlighted: true,
        tagline: "Volledig websitebeheer met support, optimalisatie en rapportage",
        bestFor: "Voor het MKB dat zijn website als serieus bedrijfsmiddel inzet.",
        timeline: "Maandelijks",
        price: { amount: 199, period: "maand" },
        deliverables: [
          "Alles uit Starter Beheer",
          "3 uur wijzigingen & support per maand",
          "Snelheidsoptimalisatie & CWV-monitoring",
          "Maandelijkse beheerrapportage",
          "Prioriteit support (binnen 24 uur)",
          "Technische SEO-basis",
        ],
        techIds: ["WordPress", "Next.js", "Vercel", "Cloudflare", "GA4"],
        ctaLabel: "Beheerplan aanvragen",
      },
      {
        id: "maatwerk",
        name: "Premium Beheer",
        tagline: "Onbeperkt beheer — uw complete digitale aanwezigheid in professionele handen",
        bestFor: "Voor bedrijven met meerdere websites of complexe beheerbehoeften.",
        timeline: "Maandelijks",
        price: { amount: 499, plus: true, period: "maand" },
        deliverables: [
          "Alles uit Business Beheer",
          "Onbeperkte wijzigingen & support",
          "Doorontwikkeling & feature-builds",
          "Dedicated aanspreekpunt",
          "Support-SLA (binnen 2 uur)",
          "Volledige technische SEO",
          "Kwartaal-strategiegesprek",
        ],
        techIds: ["WordPress", "Next.js", "Vercel", "Cloudflare", "GA4", "PostgreSQL"],
        ctaLabel: "Plan een gesprek",
      },
    ],
    comparison: [
      { label: "Updates & back-ups", values: [true, true, true] },
      { label: "Beveiligings- & uptime-monitoring", values: [true, true, true] },
      { label: "Wijzigingen per maand", values: ["30 min", "3 uur", "Onbeperkt"] },
      { label: "Snelheidsoptimalisatie", values: [false, true, true] },
      { label: "Technische SEO", values: [false, "Basis", "Volledig"] },
      { label: "Support-responstijd", values: ["48 uur", "24 uur", "2 uur (SLA)"] },
      { label: "Doorontwikkeling", values: [false, "Beperkt", true] },
    ],
    roi: {
      lead: "Professioneel websitebeheer bespaart u tijd, voorkomt dure incidenten en houdt uw website een betrouwbaar visitekaartje — dag en nacht.",
      stats: [
        { target: 24, suffix: "/7", label: "Proactief beheer" },
        { target: 150, suffix: "+", label: "Beheerde websites" },
        { target: 98, suffix: "%", label: "Klanttevredenheid" },
      ],
    },
    faq: [
      {
        question: "Wat kost professioneel websitebeheer?",
        answer:
          "Websitebeheer start bij Website Beheer Pro vanaf €99 per maand voor basis beheer. Het exacte tarief hangt af van de omvang van uw website, de hoeveelheid wijzigingen en de gewenste responstijden. U ontvangt altijd een helder plan op maat.",
      },
      {
        question: "Wat is het verschil tussen websitebeheer en website onderhoud?",
        answer:
          "Website onderhoud richt zich op technische taken als updates, back-ups en monitoring. Websitebeheer is breder: dat omvat ook content-wijzigingen, doorontwikkeling, support en strategisch advies.",
      },
      {
        question: "Kan ik mijn bestaande website bij jullie laten beheren?",
        answer:
          "Zeker. We nemen het beheer over van elke bestaande website, ongeacht het platform of wie hem heeft gebouwd. We starten altijd met een technische check.",
      },
      {
        question: "Wat als mijn website ineens uitvalt of gehackt wordt?",
        answer:
          "Dankzij onze 24/7 monitoring signaleren we problemen direct. Bij een incident handelen we snel: analyse, herstel vanuit back-up en preventie van herhaling.",
      },
    ],
    seo: {
      title: "Wat kost professioneel websitebeheer in Nederland?",
      body: "Professioneel websitebeheer uitbesteden kost bij Website Beheer Pro vanaf €99 per maand voor basis beheer, oplopend vanaf €499 per maand voor volledig ontzorgd beheer met onbeperkte support en doorontwikkeling. De prijs volgt altijd uw wensen: een kleine website met minimale beheerbehoeften vraagt minder dan een complex platform met meerdere sites. Websitebeheer is een investering die zich terugverdient: een goed beheerde website is veiliger, sneller, beter vindbaar en kost minder in reparatie dan een verwaarloosde site. Vraag vrijblijvend een beheerplan op maat aan en laat uw website in vertrouwde handen.",
    },
  },
  {
    slug: "wordpress-onderhoud",
    name: "WordPress onderhoud",
    chipLabel: "WordPress",
    icon: "code",
    projectType: "WordPress onderhoud",
    headline:
      "Professioneel WordPress onderhoud door specialisten — altijd veilig, snel en up-to-date.",
    tiers: [
      {
        id: "start",
        name: "WordPress Essential",
        tagline: "De essentiële WordPress-onderhoudsbasis: updates, back-ups en beveiliging",
        bestFor: "Voor WordPress websites die veilig en actueel moeten blijven.",
        timeline: "Maandelijks",
        price: { amount: 79, period: "maand" },
        deliverables: [
          "WordPress core-updates",
          "Plugin- & thema-updates (getest)",
          "Dagelijkse back-ups",
          "Basis beveiligingsmonitoring",
          "Uptime-monitoring 24/7",
        ],
        techIds: ["WordPress", "Cloudflare"],
        ctaLabel: "Start nu",
      },
      {
        id: "professioneel",
        name: "WordPress Business",
        badge: "Meest gekozen",
        highlighted: true,
        tagline: "Volledig WordPress onderhoud met support, snelheid en SEO-basis",
        bestFor: "Voor WordPress websites van groeiende MKB-bedrijven.",
        timeline: "Maandelijks",
        price: { amount: 149, period: "maand" },
        deliverables: [
          "Alles uit WordPress Essential",
          "2 uur wijzigingen & support per maand",
          "Snelheidsoptimalisatie & caching",
          "Malware-scans & firewall",
          "Maandelijkse gezondheidsrapportage",
          "Prioriteit support (binnen 24 uur)",
        ],
        techIds: ["WordPress", "WooCommerce", "Cloudflare", "GA4"],
        ctaLabel: "Beheerplan aanvragen",
      },
      {
        id: "maatwerk",
        name: "WordPress Premium",
        tagline: "Proactief WordPress-beheer voor bedrijfskritische websites",
        bestFor: "Voor WordPress websites waarvan de continuïteit cruciaal is.",
        timeline: "Maandelijks",
        price: { amount: 299, period: "maand" },
        deliverables: [
          "Alles uit WordPress Business",
          "5 uur ontwikkeling & doorontwikkeling",
          "Geavanceerde beveiliging & hardening",
          "Dedicated WordPress-specialist",
          "Support-SLA (binnen 4 uur)",
          "Kwartaal-review & strategie",
        ],
        techIds: ["WordPress", "WooCommerce", "Cloudflare", "GA4", "Node.js"],
        ctaLabel: "Plan een gesprek",
      },
    ],
    comparison: [
      { label: "Core- & plugin-updates", values: [true, true, true] },
      { label: "Dagelijkse back-ups", values: [true, true, true] },
      { label: "Beveiligingsmonitoring", values: ["Basis", "Volledig", "Geavanceerd"] },
      { label: "Wijzigingen per maand", values: [false, "2 uur", "5 uur"] },
      { label: "Snelheidsoptimalisatie", values: [false, true, true] },
      { label: "Support-responstijd", values: ["48 uur", "24 uur", "4 uur (SLA)"] },
    ],
    roi: {
      lead: "WordPress is het meest gebruikte CMS ter wereld én het vaakst aangevallen. Professioneel WordPress onderhoud voorkomt beveiligingslekken, uitval en dataverlies.",
      stats: [
        { target: 99, suffix: "%+", label: "Uptime garantie" },
        { target: 24, suffix: "/7", label: "Beveiligingsmonitoring" },
        { target: 0, suffix: " uur", label: "Downtime bij updates" },
      ],
    },
    faq: [
      {
        question: "Wat kost WordPress onderhoud per maand?",
        answer:
          "WordPress onderhoud start bij Website Beheer Pro vanaf €79 per maand. De prijs hangt af van de omvang van uw WordPress site, het aantal plugins en de gewenste support. U ontvangt altijd een transparant plan op maat.",
      },
      {
        question: "Hoe vaak worden WordPress updates uitgevoerd?",
        answer:
          "Wij voeren updates uit zodra nieuwe versies beschikbaar zijn en getest zijn op veiligheid. Kritieke beveiligingsupdates voeren we direct uit; reguliere updates worden gegroepeerd om downtime te minimaliseren.",
      },
      {
        question: "Wat als een WordPress update iets kapot maakt?",
        answer:
          "Voor elke update maken we een back-up. Gaat er toch iets mis, dan herstellen we onmiddellijk vanuit de back-up — zonder extra kosten voor u.",
      },
      {
        question: "Onderhouden jullie ook WooCommerce webshops?",
        answer:
          "Ja. Ons WordPress onderhoud omvat ook WooCommerce webshops, inclusief plugin-updates, betaalkoppeling-monitoring en prestatie-optimalisatie.",
      },
    ],
    seo: {
      title: "Wat kost WordPress onderhoud per maand in Nederland?",
      body: "De kosten van professioneel WordPress onderhoud starten bij Website Beheer Pro vanaf €79 per maand voor een Essential-plan met updates, back-ups en monitoring, oplopend tot €299 per maand voor volledig proactief beheer met support-SLA en geavanceerde beveiliging. WordPress is het meest gebruikte CMS ter wereld, maar ook het vaakst aangevallen platform. Verouderde plugins, onbeheerde themes en zwakke wachtwoorden zijn de meest voorkomende oorzaken van hacks en datalekken. Professioneel WordPress onderhoud voorkomt deze risico's en houdt uw website snel, veilig en beschikbaar. Vraag vrijblijvend een WordPress onderhoudsplan aan.",
    },
  },
  {
    slug: "website-beveiliging",
    name: "Website beveiliging",
    chipLabel: "Beveiliging",
    icon: "shield",
    projectType: "Website beveiliging",
    headline:
      "Proactieve website beveiliging — hackers, malware en datalekken buiten de deur.",
    tiers: [
      {
        id: "start",
        name: "Security Basis",
        tagline: "Essentiële beveiliging voor elke website",
        bestFor: "Voor websites die een stevige beveiligingsbasis nodig hebben.",
        timeline: "Eenmalig + maandelijks",
        price: { amount: 149, period: "eenmalig" },
        deliverables: [
          "Beveiligingsaudit & rapportage",
          "SSL-certificaatinstallatie & -controle",
          "Firewall-inrichting (WAF)",
          "Hardening van CMS-instellingen",
          "Maandelijkse malware-scan (add-on: €29/mnd)",
        ],
        techIds: ["Cloudflare", "WordPress", "SSL"],
        ctaLabel: "Beveiligingsscan aanvragen",
      },
      {
        id: "professioneel",
        name: "Security Pro",
        badge: "Meest gekozen",
        highlighted: true,
        tagline: "Doorlopende beveiligingsmonitoring en actieve bescherming",
        bestFor: "Voor websites die continue bescherming en snelle incident-respons vereisen.",
        timeline: "Maandelijks",
        price: { amount: 99, period: "maand" },
        deliverables: [
          "Dagelijkse malware-scans",
          "24/7 firewall & DDoS-bescherming",
          "SSL-beheer & automatische verlenging",
          "Verdacht verkeer blokkeren",
          "Maandelijkse beveiligingsrapportage",
          "Incident response (binnen 4 uur)",
        ],
        techIds: ["Cloudflare", "WordPress", "SSL", "Next.js"],
        ctaLabel: "Beveiliging activeren",
      },
      {
        id: "maatwerk",
        name: "Security Enterprise",
        tagline: "Enterprise-niveau beveiliging voor bedrijfskritische platforms",
        bestFor: "Voor platforms met gevoelige data, hoge eisen en complianceverplichtingen.",
        timeline: "Maandelijks",
        price: { amount: 299, plus: true, period: "maand" },
        deliverables: [
          "Geavanceerde penetratietests",
          "GDPR & AVG-compliance scan",
          "2-factor authenticatie & toegangsbeheer",
          "Incidentrespons plan op maat",
          "Dedicated beveiligingsspecialist",
          "SLA (binnen 1 uur bij incidenten)",
        ],
        techIds: ["Cloudflare", "WordPress", "Next.js", "SSL", "Node.js"],
        ctaLabel: "Plan een gesprek",
      },
    ],
    comparison: [
      { label: "Beveiligingsaudit", values: ["Eenmalig", true, true] },
      { label: "Firewall & DDoS-bescherming", values: ["Eenmalig", "Doorlopend", "Enterprise"] },
      { label: "Malware-scans", values: ["Add-on", "Dagelijks", "Geavanceerd"] },
      { label: "SSL-beheer", values: [true, true, true] },
      { label: "Incident response", values: [false, "4 uur", "1 uur"] },
      { label: "Compliance", values: [false, false, "GDPR/AVG"] },
    ],
    roi: {
      lead: "Een beveiligingsincident kost gemiddeld meer dan een jaar beveiligingsabonnement — naast de directe schade ook reputatieverlies en eventuele GDPR-boetes.",
      stats: [
        { target: 24, suffix: "/7", label: "Actieve bescherming" },
        { target: 99, suffix: "%", label: "Aanvallen geblokkeerd" },
        { target: 1, prefix: "±", suffix: " uur", label: "Incident response (Enterprise)" },
      ],
    },
    faq: [
      {
        question: "Wat kost website beveiliging?",
        answer:
          "Basis beveiligingsmaatregelen starten bij Website Beheer Pro eenmalig vanaf €149. Doorlopende beveiligingsmonitoring begint bij €99 per maand. De exacte prijs hangt af van de omvang en beveiligingseisen van uw website.",
      },
      {
        question: "Mijn website is gehackt — wat nu?",
        answer:
          "Neem direct contact op. Wij analyseren het incident, verwijderen malware, herstellen de website vanuit een schone back-up en dichten het beveiligingslek. Daarna zorgen we voor verdere hardening.",
      },
      {
        question: "Heb ik een beveiligingsabonnement nodig?",
        answer:
          "Een eenmalige beveiligingsscan is een goede start, maar doorlopende monitoring is essentieel: bedreigingen evolueren dagelijks. Een maandabonnement houdt uw website continu beschermd.",
      },
      {
        question: "Werken jullie ook met GDPR en AVG?",
        answer:
          "Ja. Ons Enterprise-plan omvat een AVG/GDPR-compliance scan en advies over dataverwerking, cookiebeheer en privacybeleid.",
      },
    ],
    seo: {
      title: "Wat kost website beveiliging in Nederland?",
      body: "De kosten van professionele website beveiliging hangen af van de omvang van uw website en de gewenste beschermingsniveau. Een eenmalige beveiligingsscan en hardening start bij Website Beheer Pro vanaf €149; doorlopende beveiligingsmonitoring met firewall en malware-scans begint bij €99 per maand. Website beveiliging is geen luxe maar een noodzaak: elk jaar worden duizenden Nederlandse websites gehackt of geïnfecteerd met malware. De gevolgen zijn kostbaar — van downtime en dataverlies tot AVG-boetes en reputatieschade. Proactieve beveiliging is altijd goedkoper dan schade herstellen. Vraag vandaag een vrijblijvende beveiligingsscan aan.",
    },
  },
  {
    slug: "technische-seo",
    name: "Technische SEO",
    chipLabel: "Technische SEO",
    icon: "search",
    projectType: "Technische SEO",
    headline:
      "Technische SEO-optimalisatie die uw website beter vindbaar maakt in Google, Bing en AI-gedreven zoekmachines.",
    tiers: [
      {
        id: "start",
        name: "SEO Audit",
        tagline: "Een grondige technische SEO-audit met concrete verbeteracties",
        bestFor: "Voor websites die inzicht willen in hun technische SEO-status.",
        timeline: "Eenmalig (± 1 week)",
        price: { amount: 299, period: "eenmalig" },
        deliverables: [
          "Complete technische SEO-audit",
          "Crawlability & indexering analyse",
          "Core Web Vitals beoordeling",
          "Schema markup & structured data check",
          "Prioriteitenlijst met concrete acties",
        ],
        techIds: ["Next.js", "WordPress", "GA4"],
        ctaLabel: "Audit aanvragen",
      },
      {
        id: "professioneel",
        name: "SEO Optimalisatie",
        badge: "Meest gekozen",
        highlighted: true,
        tagline: "Audit plus volledige implementatie van alle technische verbeteringen",
        bestFor: "Voor websites die hun technische SEO structureel willen verbeteren.",
        timeline: "± 2–4 weken",
        price: { amount: 799, period: "eenmalig" },
        deliverables: [
          "Complete technische SEO-audit",
          "Implementatie van alle verbeteringen",
          "Schema markup & JSON-LD implementatie",
          "Sitemap & robots.txt optimalisatie",
          "Canonicalisatie & redirects",
          "Core Web Vitals optimalisatie",
          "Maandelijkse monitoring (3 maanden)",
        ],
        techIds: ["Next.js", "WordPress", "GA4", "Cloudflare", "TypeScript"],
        ctaLabel: "Optimalisatie aanvragen",
      },
      {
        id: "maatwerk",
        name: "SEO Doorlopend",
        tagline: "Doorlopende technische SEO-monitoring en -optimalisatie",
        bestFor: "Voor websites in competitieve markten die structureel willen groeien.",
        timeline: "Maandelijks",
        price: { amount: 299, plus: true, period: "maand" },
        deliverables: [
          "Doorlopende technische SEO-monitoring",
          "Maandelijkse optimalisaties",
          "Rankings- & prestatierapportage",
          "Schema markup onderhoud",
          "Core Web Vitals bewaking",
          "Google Search Console monitoring",
          "Dedicated SEO-specialist",
        ],
        techIds: ["Next.js", "WordPress", "GA4", "Cloudflare", "TypeScript"],
        ctaLabel: "Plan een gesprek",
      },
    ],
    comparison: [
      { label: "Technische audit", values: [true, true, true] },
      { label: "Implementatie verbeteringen", values: [false, true, true] },
      { label: "Schema markup / JSON-LD", values: ["Check", "Volledig", "Onderhoud"] },
      { label: "Core Web Vitals", values: ["Analyse", "Optimalisatie", "Bewaking"] },
      { label: "Monitoring", values: [false, "3 maanden", "Doorlopend"] },
      { label: "Dedicated specialist", values: [false, false, true] },
    ],
    roi: {
      lead: "Technische SEO is de fundering van organische vindbaarheid. Een correct geconfigureerde website scoort structureel hoger en trekt meer gratis bezoekers aan — zonder dat u per klik betaalt.",
      stats: [
        { target: 90, suffix: "+", label: "PageSpeed-score" },
        { target: 3, suffix: "×", label: "Meer organisch verkeer" },
        { target: 100, suffix: "%", label: "Correcte indexering" },
      ],
    },
    faq: [
      {
        question: "Wat zijn de tarieven voor technische SEO in Nederland?",
        answer:
          "Een technische SEO-audit start bij Website Beheer Pro vanaf €299 eenmalig. Een volledige audit met implementatie kost €799. Doorlopende technische SEO-monitoring begint bij €299 per maand.",
      },
      {
        question: "Hoe snel zie ik resultaat van technische SEO?",
        answer:
          "Technische verbeteringen zoals schema markup, sitemap-correcties en snelheidsoptimalisaties worden al binnen enkele weken door Google verwerkt. Duurzame rankingverbeteringen zijn meestal zichtbaar na twee tot vier maanden.",
      },
      {
        question: "Wat is het verschil tussen technische SEO en content SEO?",
        answer:
          "Technische SEO zorgt dat uw website correct gecrawld, geïndexeerd en beoordeeld kan worden door zoekmachines. Content SEO richt zich op de relevantie en kwaliteit van uw teksten. Beide zijn essentieel voor goede rankings.",
      },
      {
        question: "Optimaliseren jullie ook voor Google AI Overviews en ChatGPT?",
        answer:
          "Ja. Naast traditionele SEO optimaliseren we voor GEO (Generative Engine Optimization) — structuur, schema markup en heldere antwoorden die AI-zoekmachines oppikken voor overzichten en directe antwoorden.",
      },
    ],
    seo: {
      title: "Wat kosten technische SEO-diensten in Nederland?",
      body: "Technische SEO is de technische fundering van uw online vindbaarheid. Bij Website Beheer Pro starten de tarieven voor een technische SEO-audit bij €299 eenmalig, voor een volledige implementatie bij €799, en voor doorlopende monitoring bij €299 per maand. Technische SEO omvat crawlability, indexering, schema markup, Core Web Vitals, canonicalisatie, sitemaps en robots.txt — allemaal factoren die direct invloed hebben op uw posities in Google. Een technisch goed geconfigureerde website scoort structureel hoger, is sneller en biedt een betere gebruikerservaring. Bovendien optimaliseren wij ook voor moderne AI-zoekmachines zoals Google AI Overviews, ChatGPT en Perplexity. Vraag vrijblijvend een technische SEO-audit aan.",
    },
  },
  {
    slug: "website-monitoring",
    name: "Website monitoring",
    chipLabel: "Monitoring",
    icon: "gauge",
    projectType: "Website monitoring",
    headline:
      "24/7 website monitoring — wij weten het vóór uw klanten als er iets misgaat.",
    tiers: [
      {
        id: "start",
        name: "Monitor Basis",
        tagline: "Uptime-monitoring en directe alerting bij downtime",
        bestFor: "Voor websites waarbij beschikbaarheid essentieel is.",
        timeline: "Maandelijks",
        price: { amount: 29, period: "maand" },
        deliverables: [
          "Uptime-monitoring (elke 5 minuten)",
          "E-mailalerts bij downtime",
          "Maandelijkse uptime-rapportage",
          "SSL-certificaat monitoring",
          "Status-pagina voor uw team",
        ],
        techIds: ["Vercel", "Cloudflare"],
        ctaLabel: "Start nu",
      },
      {
        id: "professioneel",
        name: "Monitor Pro",
        badge: "Meest gekozen",
        highlighted: true,
        tagline: "Uitgebreide monitoring inclusief prestaties en beveiliging",
        bestFor: "Voor bedrijfswebsites waar prestaties direct invloed hebben op conversie.",
        timeline: "Maandelijks",
        price: { amount: 69, period: "maand" },
        deliverables: [
          "Uptime-monitoring (elke minuut)",
          "Prestatiemonitoring & CWV-bewaking",
          "E-mail & SMS-alerts",
          "Beveiligingsmonitoring",
          "Foutdetectie (404, server-errors)",
          "Maandelijkse prestatiesrapportage",
        ],
        techIds: ["Vercel", "Cloudflare", "GA4", "WordPress"],
        ctaLabel: "Monitoring activeren",
      },
      {
        id: "maatwerk",
        name: "Monitor Enterprise",
        tagline: "Volledige monitoring met dedicated respons en SLA",
        bestFor: "Voor bedrijfskritische platforms met hoge beschikbaarheidseisen.",
        timeline: "Maandelijks",
        price: { amount: 149, plus: true, period: "maand" },
        deliverables: [
          "Real-time monitoring (elke 30 sec)",
          "Multi-locatie controles wereldwijd",
          "Dedicated incident response team",
          "Uptime-SLA (99,9% gegarandeerd)",
          "Maandelijkse strategierapportage",
          "Directe escalatie bij incidenten",
        ],
        techIds: ["Vercel", "Cloudflare", "GA4", "WordPress", "Node.js"],
        ctaLabel: "Plan een gesprek",
      },
    ],
    comparison: [
      { label: "Check-frequentie", values: ["5 min", "1 min", "30 sec"] },
      { label: "Alerting", values: ["E-mail", "E-mail + SMS", "Dedicated team"] },
      { label: "Prestatiesmonitoring", values: [false, true, true] },
      { label: "Beveiligingsmonitoring", values: [false, true, true] },
      { label: "Uptime-SLA", values: [false, false, "99,9%"] },
      { label: "Incident response", values: [false, "Notificatie", "Actief herstel"] },
    ],
    roi: {
      lead: "Elke minuut downtime kost u bezoekers, conversie en vertrouwen. Met 24/7 monitoring weet u direct wanneer uw website niet bereikbaar is — en handelen wij vóór u het merkt.",
      stats: [
        { target: 24, suffix: "/7", label: "Continue monitoring" },
        { target: 99, suffix: "%+", label: "Gemiddelde uptime" },
        { target: 1, prefix: "< ", suffix: " min", label: "Detectietijd" },
      ],
    },
    faq: [
      {
        question: "Wat kost website monitoring per maand?",
        answer:
          "Website monitoring start bij Website Beheer Pro vanaf €29 per maand voor basis uptime-monitoring. Uitgebreide monitoring met prestaties en beveiliging begint bij €69 per maand.",
      },
      {
        question: "Hoe snel word ik gewaarschuwd bij downtime?",
        answer:
          "Bij ons Basis-plan controleren we elke 5 minuten; bij Pro elke minuut en bij Enterprise elke 30 seconden. U ontvangt direct een alert per e-mail of SMS zodra downtime wordt gedetecteerd.",
      },
      {
        question: "Kunnen jullie problemen ook zelf oplossen?",
        answer:
          "In combinatie met een onderhoud- of beheerplan handelen we actief bij incidenten. Bij monitoring-only sturen we notificaties zodat u of uw ontwikkelaar direct kan ingrijpen.",
      },
      {
        question: "Monitoren jullie ook de laadsnelheid?",
        answer:
          "Ja, ons Pro- en Enterprise-plan bewaken ook de laadtijden en Core Web Vitals. We alarmeren u als prestaties significant verslechteren.",
      },
    ],
    seo: {
      title: "Wat kost website monitoring in Nederland?",
      body: "Website monitoring is essentieel voor elke online aanwezigheid: u wilt de eerste zijn die weet dat uw website offline is, niet uw klanten. Bij Website Beheer Pro starten de monitoring-abonnementen vanaf €29 per maand voor uptime-monitoring, oplopend tot €149+ per maand voor real-time enterprise monitoring met een uptime-SLA en dedicated incident response. Downtime kost u direct bezoekers, conversie en vertrouwen — en hoe langer een probleem onopgemerkt blijft, hoe groter de schade. Met professionele website monitoring detecteren we problemen gemiddeld binnen één minuut en alarmeren we u of ons eigen team direct. Vraag vandaag een vrijblijvend monitoring-abonnement aan.",
    },
  },
  {
    slug: "hosting-beheer",
    name: "Hosting beheer",
    chipLabel: "Hosting",
    icon: "rocket",
    projectType: "Hosting beheer",
    headline:
      "Professioneel hosting beheer voor een snelle, betrouwbare en schaalbare website.",
    tiers: [
      {
        id: "start",
        name: "Hosting Basis",
        tagline: "Professionele managed hosting voor uw website",
        bestFor: "Voor websites die snel, veilig en betrouwbaar online moeten zijn.",
        timeline: "Maandelijks",
        price: { amount: 29, period: "maand" },
        deliverables: [
          "Managed hosting (SSD, CDN)",
          "SSL-certificaat inbegrepen",
          "Dagelijkse back-ups",
          "E-mailhosting (5 adressen)",
          "Technische ondersteuning",
        ],
        techIds: ["Vercel", "Cloudflare"],
        ctaLabel: "Start nu",
      },
      {
        id: "professioneel",
        name: "Hosting Business",
        badge: "Meest gekozen",
        highlighted: true,
        tagline: "High-performance hosting voor groeiende bedrijfswebsites",
        bestFor: "Voor bedrijfswebsites met hoge prestatievereisten.",
        timeline: "Maandelijks",
        price: { amount: 79, period: "maand" },
        deliverables: [
          "High-performance managed hosting",
          "Globaal CDN voor maximale snelheid",
          "Automatische schaalbaarheid",
          "Uurlijkse back-ups",
          "Priority support & SLA",
          "Geavanceerde caching",
        ],
        techIds: ["Vercel", "Cloudflare", "Next.js", "WordPress"],
        ctaLabel: "Hosting aanvragen",
      },
      {
        id: "maatwerk",
        name: "Hosting Enterprise",
        tagline: "Dedicated enterprise hosting voor bedrijfskritische platformen",
        bestFor: "Voor grote, bedrijfskritische websites met hoge verkeerseisen.",
        timeline: "Maandelijks",
        price: { amount: 199, plus: true, period: "maand" },
        deliverables: [
          "Dedicated server resources",
          "Custom CDN-configuratie",
          "Realtime back-ups & failover",
          "Meerdere serverlocaties (EU)",
          "99,99% uptime garantie",
          "Dedicated infrastructuur specialist",
        ],
        techIds: ["Vercel", "Cloudflare", "Next.js", "WordPress", "Node.js"],
        ctaLabel: "Plan een gesprek",
      },
    ],
    comparison: [
      { label: "Servertype", values: ["Shared Managed", "High-Performance", "Dedicated"] },
      { label: "SSL-certificaat", values: [true, true, true] },
      { label: "Back-ups", values: ["Dagelijks", "Uurlijks", "Realtime"] },
      { label: "CDN", values: ["Basis", "Globaal", "Custom"] },
      { label: "Schaalbaarheid", values: ["Beperkt", "Automatisch", "Onbeperkt"] },
      { label: "Uptime SLA", values: ["99,5%", "99,9%", "99,99%"] },
    ],
    roi: {
      lead: "De juiste hosting is de fundering van uw website. Trage servers, downtime en slechte CDN-configuratie kosten u bezoekers, conversie en Google-rankings.",
      stats: [
        { target: 99, suffix: "%+", label: "Uptime garantie" },
        { target: 100, suffix: "ms", label: "Gemiddelde responstijd" },
        { target: 24, suffix: "/7", label: "Technische monitoring" },
      ],
    },
    faq: [
      {
        question: "Wat kost professioneel hosting beheer?",
        answer:
          "Managed hosting start bij Website Beheer Pro vanaf €29 per maand voor een basis-pakket, oplopend tot €199+ per maand voor enterprise dedicated hosting. De prijs hangt af van het verkeersvolume en de prestatievereisten van uw website.",
      },
      {
        question: "Kunnen jullie ook mijn bestaande hosting overnemen?",
        answer:
          "Ja. We beoordelen uw huidige hosting, migreren uw website naar onze omgeving (met nul downtime) en nemen het volledige hosting beheer over.",
      },
      {
        question: "Wat is het voordeel van managed hosting ten opzichte van zelf regelen?",
        answer:
          "Managed hosting betekent dat wij serveronderhoud, updates, beveiliging, back-ups en optimalisatie regelen. U hoeft zich nooit bezig te houden met technische hostingzaken.",
      },
      {
        question: "Leveren jullie ook domeinnamen?",
        answer:
          "Ja, wij registreren en beheren domeinnamen voor u, inclusief DNS-beheer en verlenging — zodat u nooit per ongeluk uw domein verliest.",
      },
    ],
    seo: {
      title: "Wat kost professioneel hosting beheer in Nederland?",
      body: "De kosten van hosting beheer starten bij Website Beheer Pro vanaf €29 per maand voor managed shared hosting, oplopend tot €199+ per maand voor dedicated enterprise hosting. De juiste hosting is cruciaal voor de snelheid, beschikbaarheid en veiligheid van uw website — en daarmee direct van invloed op uw Google-rankings en conversie. Met onze managed hosting neemt u alle technische zorgen weg: serveronderhoud, updates, SSL-certificaten, back-ups en CDN-configuratie worden door ons team geregeld. Vraag vrijblijvend een hosting-plan op maat aan.",
    },
  },
  {
    slug: "website-support",
    name: "Website support",
    chipLabel: "Support",
    icon: "cursor",
    projectType: "Website support",
    headline:
      "Snelle, professionele website support voor elke wijziging, vraag of technisch probleem.",
    tiers: [
      {
        id: "start",
        name: "Support Uren",
        tagline: "Flexibele support-uren voor wijzigingen en technische hulp",
        bestFor: "Voor bedrijven die incidenteel support nodig hebben.",
        timeline: "Per afname",
        price: { amount: 95, period: "uur" },
        deliverables: [
          "Content-aanpassingen",
          "Technische probleemoplossing",
          "Plugin-installatie & configuratie",
          "Formulier- & koppelingshulp",
          "Geen minimale afname",
        ],
        techIds: ["WordPress", "Next.js", "Vercel"],
        ctaLabel: "Support aanvragen",
      },
      {
        id: "professioneel",
        name: "Support Pakket",
        badge: "Meest gekozen",
        highlighted: true,
        tagline: "Maandelijks support-pakket met prioriteit en lagere uurtarieven",
        bestFor: "Voor bedrijven die regelmatig kleine wijzigingen en hulp nodig hebben.",
        timeline: "Maandelijks",
        price: { amount: 199, period: "maand" },
        deliverables: [
          "3 uur support per maand (rollover)",
          "Prioriteit-verwerking (binnen 24 uur)",
          "Content & technische wijzigingen",
          "Spoedondersteuning (extra tarief)",
          "Maandelijkse supportrapportage",
        ],
        techIds: ["WordPress", "Next.js", "Vercel", "GA4"],
        ctaLabel: "Support pakket aanvragen",
      },
      {
        id: "maatwerk",
        name: "Dedicated Support",
        tagline: "Onbeperkte support met dedicated aanspreekpunt en SLA",
        bestFor: "Voor bedrijven waarbij snelle support bedrijfskritisch is.",
        timeline: "Maandelijks",
        price: { amount: 399, plus: true, period: "maand" },
        deliverables: [
          "Onbeperkte support-uren",
          "Dedicated contactpersoon",
          "SLA (binnen 4 uur reactietijd)",
          "Spoedondersteuning inbegrepen",
          "Content, techniek & strategie",
          "Maandelijkse review",
        ],
        techIds: ["WordPress", "Next.js", "Vercel", "GA4", "Cloudflare"],
        ctaLabel: "Plan een gesprek",
      },
    ],
    comparison: [
      { label: "Support-uren", values: ["Op afroep", "3 uur/mnd", "Onbeperkt"] },
      { label: "Responstijd", values: ["48 uur", "24 uur", "4 uur (SLA)"] },
      { label: "Spoedondersteuning", values: ["Extra tarief", "Extra tarief", "Inbegrepen"] },
      { label: "Dedicated contactpersoon", values: [false, false, true] },
      { label: "Rollover ongebruikte uren", values: [false, true, true] },
      { label: "Content & techniek", values: [true, true, true] },
    ],
    roi: {
      lead: "Snelle, professionele support bespaart u tijd en frustratie. Kleine wijzigingen snel doorgevoerd, technische problemen snel opgelost — zodat uw website altijd naar uw wensen werkt.",
      stats: [
        { target: 24, suffix: "u", label: "Reactietijd (Business)" },
        { target: 100, suffix: "%", label: "Klanttevredenheid support" },
        { target: 3, prefix: "±", suffix: " uur", label: "Gemiddelde doorlooptijd" },
      ],
    },
    faq: [
      {
        question: "Wat kost website support per uur?",
        answer:
          "Losse support-uren kosten bij Website Beheer Pro €95 per uur. Met een maandelijks support-pakket profiteert u van bundel-voordelen en prioriteitverwerking vanaf €199 per maand.",
      },
      {
        question: "Hoe snel reageren jullie op een supportverzoek?",
        answer:
          "Op losse uren is de responstijd 48 uur. Met een Business-pakket 24 uur en met Dedicated Support 4 uur. Voor spoedgevallen zijn we altijd bereikbaar.",
      },
      {
        question: "Rollen ongebruikte support-uren over naar de volgende maand?",
        answer:
          "Ja. In onze Business- en Dedicated Support-pakketten rollen ongebruikte uren tot één maand over, zodat u nooit uren kwijtraakt.",
      },
      {
        question: "Kan ik support aanvragen voor een website die jullie niet hebben gebouwd?",
        answer:
          "Zeker. We verlenen support voor elke website, ongeacht het platform of de bouwer. We starten met een korte technische verkenning.",
      },
    ],
    seo: {
      title: "Wat kost website support in Nederland?",
      body: "De kosten van website support hangen af van de frequentie en urgentie van uw verzoeken. Bij Website Beheer Pro kost een los support-uur €95; een maandelijks support-pakket met prioriteit begint bij €199 per maand. Professionele website support betekent snel geholpen worden door mensen die uw website kennen — geen ticketsystemen, geen lange wachttijden. Of het nu gaat om een tekstwijziging, een kapot formulier of een technisch probleem: wij handelen snel en communiceren helder. Vraag vrijblijvend een support-pakket aan dat past bij uw behoeften.",
    },
  },
  {
    slug: "website-optimalisatie",
    name: "Website optimalisatie",
    chipLabel: "Optimalisatie",
    icon: "lightning",
    projectType: "Website optimalisatie",
    headline:
      "Website optimalisatie voor betere prestaties, hogere snelheid en meer conversie.",
    tiers: [
      {
        id: "start",
        name: "Prestatie Audit",
        tagline: "Grondige analyse van uw website-prestaties met verbeterplan",
        bestFor: "Voor websites die willen weten waar winst te behalen valt.",
        timeline: "Eenmalig (± 3 werkdagen)",
        price: { amount: 199, period: "eenmalig" },
        deliverables: [
          "Core Web Vitals analyse (LCP, CLS, INP)",
          "PageSpeed Insights audit",
          "Afbeeldingsoptimalisatie advies",
          "Caching & CDN beoordeling",
          "Prioriteitenlijst met concrete verbeteracties",
        ],
        techIds: ["Next.js", "WordPress", "GA4"],
        ctaLabel: "Audit aanvragen",
      },
      {
        id: "professioneel",
        name: "Prestatie Optimalisatie",
        badge: "Meest gekozen",
        highlighted: true,
        tagline: "Volledige prestatie-optimalisatie: audit én implementatie",
        bestFor: "Voor websites die aantoonbaar sneller en beter willen presteren.",
        timeline: "± 1–2 weken",
        price: { amount: 599, period: "eenmalig" },
        deliverables: [
          "Complete prestatie-audit",
          "Core Web Vitals optimalisatie",
          "Afbeeldingscompressie & lazy loading",
          "Caching & CDN-inrichting",
          "Code-splitsing & CSS-optimalisatie",
          "Vóór/na-rapportage met scores",
        ],
        techIds: ["Next.js", "WordPress", "Vercel", "Cloudflare", "GA4"],
        ctaLabel: "Optimalisatie aanvragen",
      },
      {
        id: "maatwerk",
        name: "Doorlopende Optimalisatie",
        tagline: "Maandelijkse prestatiebewaking en -verbetering",
        bestFor: "Voor websites waarbij snelheid en conversie doorlopend prioriteit hebben.",
        timeline: "Maandelijks",
        price: { amount: 199, plus: true, period: "maand" },
        deliverables: [
          "Maandelijkse prestatiecontrole",
          "Doorlopende Core Web Vitals bewaking",
          "A/B-tests voor conversie-verbeteringen",
          "Maandelijkse optimalisaties",
          "Heatmap-analyse",
          "Kwartaal-conversierapportage",
        ],
        techIds: ["Next.js", "WordPress", "Vercel", "Cloudflare", "GA4"],
        ctaLabel: "Plan een gesprek",
      },
    ],
    comparison: [
      { label: "Prestatie-audit", values: [true, true, true] },
      { label: "Implementatie verbeteringen", values: [false, true, true] },
      { label: "Core Web Vitals optimalisatie", values: ["Advies", "Volledig", "Doorlopend"] },
      { label: "Afbeeldingsoptimalisatie", values: ["Advies", true, true] },
      { label: "A/B-testen", values: [false, false, true] },
      { label: "Maandelijkse monitoring", values: [false, "3 maanden", "Doorlopend"] },
    ],
    roi: {
      lead: "Elke seconde laadtijdverbetering verhoogt de conversie met gemiddeld 2–3%. Een snelle website scoort beter in Google, heeft lagere bounce rates en zet meer bezoekers om in klanten.",
      stats: [
        { target: 90, suffix: "+", label: "PageSpeed-score (doel)" },
        { target: 3, suffix: "%", label: "Meer conversie per seconde sneller" },
        { target: 100, suffix: "%", label: "Mobile-first geoptimaliseerd" },
      ],
    },
    faq: [
      {
        question: "Wat kost website optimalisatie?",
        answer:
          "Een prestatie-audit start bij Website Beheer Pro vanaf €199 eenmalig. Volledige optimalisatie inclusief implementatie kost €599 eenmalig. Doorlopende prestatiebewaking begint bij €199 per maand.",
      },
      {
        question: "Hoe snel merkt Google de verbetering?",
        answer:
          "Core Web Vitals verbeteringen worden door Google doorgaans binnen 28 dagen verwerkt in de prestatie-beoordeling. Rankings kunnen daarna geleidelijk verbeteren.",
      },
      {
        question: "Welke snelheidsverbeteringen leveren het meeste op?",
        answer:
          "Het optimaliseren van de Largest Contentful Paint (LCP) — doorgaans het hero-beeld — heeft vaak de grootste impact. Daarna volgen caching, afbeeldingscompressie en het verwijderen van render-blocking resources.",
      },
      {
        question: "Optimaliseren jullie ook voor mobiel?",
        answer:
          "Ja. Google hanteert mobile-first indexering, dus mobiele prestaties zijn onze prioriteit. We optimaliseren op basis van echte mobiele apparaat-data.",
      },
    ],
    seo: {
      title: "Wat kost website optimalisatie in Nederland?",
      body: "Website optimalisatie kost bij Website Beheer Pro eenmalig vanaf €199 voor een prestatie-audit met verbeterplan, tot €599 voor een volledige implementatie inclusief Core Web Vitals optimalisatie, caching en afbeeldingsoptimalisatie. Voor doorlopende prestatiebewaking starten onze abonnementen bij €199 per maand. Een snelle website is direct van invloed op uw Google-rankings, bounce rate en conversie. Elke seconde laadtijdverbetering verhoogt de conversie gemiddeld met twee tot drie procent — een investering die zich snel terugverdient. Vraag vrijblijvend een prestatie-audit aan en ontdek hoeveel winst er in uw website zit.",
    },
  },
] as const satisfies readonly ServicePricing[];

/** Lookup helper: returns the pricing config for a slug, or the first service. */
export function getServicePricing(slug?: string): ServicePricing {
  if (slug) {
    const match = SERVICE_PRICING.find((item) => item.slug === slug);
    if (match) return match;
  }
  return SERVICE_PRICING[0];
}
