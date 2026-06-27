import type { LandingFAQItem } from "@/constants";
import type { Service } from "@/types";

export const SERVICES_SECTION = {
  eyebrow: "Wat we doen",
  titleLead: "Negen diensten.",
  titleEm: "Eén beheerpartner.",
  sub: "Van dagelijks websitebeheer tot technische SEO en volledige hostingondersteuning — Website Beheer Pro ontzorgt het complete beheertraject, zodat uw website altijd snel, veilig en vindbaar is.",
} as const;

export const SERVICE_LINK_LABEL = "Meer informatie →" as const;

export const SERVICES = [
  {
    slug: "websitebeheer",
    number: "01",
    name: "Websitebeheer",
    tagline:
      "Volledig websitebeheer voor ondernemers en bedrijven in Nederland — wij regelen alles.",
    description:
      "Professioneel en proactief websitebeheer: updates, beveiliging, back-ups, monitoring en doorlopende optimalisatie in één transparant abonnement.",
    href: "/websitebeheer",
    icon: "layers",
    heroEyebrow: "Dienst · Websitebeheer",
    heroTitleLead: "Professioneel websitebeheer",
    heroTitleEm: "zonder zorgen.",
    features: [
      {
        title: "Proactief beheer",
        description:
          "We bewaken uw website 24/7 en grijpen in vóórdat problemen uw bezoekers of omzet raken.",
        iconName: "shield",
      },
      {
        title: "Updates & back-ups",
        description:
          "Dagelijkse back-ups en doorlopende software-updates — veilig, getest en zonder downtime.",
        iconName: "layers",
      },
      {
        title: "Snelle support",
        description:
          "Een vast aanspreekpunt dat snel reageert op vragen en wijzigingen, zonder gedoe.",
        iconName: "lightning",
      },
      {
        title: "Maandelijkse rapportage",
        description:
          "Helder overzicht van alle uitgevoerde werkzaamheden, prestaties en aanbevelingen.",
        iconName: "chart",
      },
    ],
    process: [
      { number: "01", title: "Intake & scan", description: "We analyseren uw huidige website en stellen een beheerplan op maat samen." },
      { number: "02", title: "Inrichting", description: "We richten monitoring, back-ups en beveiligingstools in — klaar voor doorlopend beheer." },
      { number: "03", title: "Doorlopend beheer", description: "Maandelijkse updates, dagelijkse back-ups en proactieve optimalisaties." },
      { number: "04", title: "Rapportage", description: "Periodieke rapportage en overleg over verbeteringen en aanbevelingen." },
    ],
    techIds: ["Next.js", "WordPress", "Vercel", "Cloudflare", "Node.js"],
    relatedCategories: ["Websitebeheer", "WordPress", "SaaS"],
    cta: {
      titleLead: "Klaar voor zorgeloos",
      titleEm: "websitebeheer?",
      sub: "Vertel ons kort over uw website. Binnen 24 uur ontvangt u een vrijblijvend beheerplan op maat.",
      primaryLabel: "Beheerplan aanvragen",
      primaryHref: "mailto:info@websitebeheerpro.nl?subject=Websitebeheer",
      secondaryLabel: "Plan kennismaking",
      secondaryHref: "#cta",
    },
  },
  {
    slug: "website-onderhoud",
    number: "02",
    name: "Website onderhoud",
    tagline:
      "Uw website altijd snel, veilig en up-to-date — zonder dat u er naar om hoeft te kijken.",
    description:
      "Doorlopend website onderhoud met updates, back-ups, beveiligingsmonitoring en snelheidsoptimalisatie voor WordPress, Next.js en andere platforms.",
    href: "/website-onderhoud",
    icon: "wrench",
    heroEyebrow: "Dienst · Website onderhoud",
    heroTitleLead: "Website onderhoud dat",
    heroTitleEm: "zorgen wegneemt.",
    features: [
      {
        title: "Dagelijkse back-ups",
        description:
          "Automatische dagelijkse back-ups die veilig worden opgeslagen — snel herstel bij elk incident.",
        iconName: "shield",
      },
      {
        title: "Software-updates",
        description:
          "Core, thema en plugin-updates getest en uitgerold zonder downtime of onverwachte fouten.",
        iconName: "layers",
      },
      {
        title: "Uptime-monitoring",
        description:
          "24/7 monitoring die direct alarm slaat als uw site offline gaat — wij handelen vóór u het merkt.",
        iconName: "gauge",
      },
      {
        title: "Inhoudelijke aanpassingen",
        description:
          "Tekst- of beeldwijzigingen, nieuwe pagina's of kleine uitbreidingen — snel geregeld binnen uw onderhoudsuren.",
        iconName: "cursor",
      },
    ],
    process: [
      { number: "01", title: "Technische check", description: "We controleren de huidige staat van uw website en stellen een onderhoudsplan op." },
      { number: "02", title: "Inrichting", description: "Back-up, monitoring en beveiligingssystemen worden ingericht." },
      { number: "03", title: "Doorlopend onderhoud", description: "Maandelijkse updates, dagelijkse back-ups en snelheidscontroles." },
      { number: "04", title: "Rapportage & advies", description: "Periodieke gezondheidsrapportage met aanbevelingen voor verdere verbetering." },
    ],
    techIds: ["WordPress", "Next.js", "Vercel", "Cloudflare", "GA4"],
    relatedCategories: ["Websitebeheer", "WordPress", "Beveiliging"],
    cta: {
      titleLead: "Zorgeloos online",
      titleEm: "begint vandaag.",
      sub: "Vertel ons kort over uw website. Binnen 24 uur ontvangt u een vrijblijvend onderhoudsplan op maat.",
      primaryLabel: "Onderhoudsplan aanvragen",
      primaryHref: "mailto:info@websitebeheerpro.nl?subject=Website%20onderhoud",
      secondaryLabel: "Plan kennismaking",
      secondaryHref: "#cta",
    },
  },
  {
    slug: "wordpress-onderhoud",
    number: "03",
    name: "WordPress onderhoud",
    tagline:
      "Professioneel WordPress onderhoud — altijd veilig, snel en up-to-date.",
    description:
      "Gespecialiseerd WordPress beheer: core-updates, plugin-beheer, dagelijkse back-ups, beveiligingsscans en snelheidsoptimalisatie voor uw WordPress site.",
    href: "/wordpress-onderhoud",
    icon: "code",
    heroEyebrow: "Dienst · WordPress onderhoud",
    heroTitleLead: "WordPress onderhoud door",
    heroTitleEm: "echte specialisten.",
    features: [
      {
        title: "Core & plugin-updates",
        description:
          "WordPress core, thema en alle plugins bijgewerkt en getest — geen verrassingen, geen downtime.",
        iconName: "layers",
      },
      {
        title: "WordPress beveiliging",
        description:
          "Malware-scans, firewall-regels en beveiligingsupdates om uw WordPress site te beschermen.",
        iconName: "shield",
      },
      {
        title: "Prestatie-optimalisatie",
        description:
          "Caching, afbeeldingscompressie en database-optimalisatie voor maximale laadsnelheid.",
        iconName: "lightning",
      },
      {
        title: "Dagelijkse back-ups",
        description:
          "Automatische dagelijkse back-ups met eenvoudig herstel bij incidenten of updates die mis gaan.",
        iconName: "gauge",
      },
    ],
    process: [
      { number: "01", title: "WordPress audit", description: "We controleren uw WordPress installatie op verouderde software, beveiligingslekken en prestatieproblemen." },
      { number: "02", title: "Opschonen & optimaliseren", description: "Onnodige plugins verwijderen, database optimaliseren en beveiliging aanscherpen." },
      { number: "03", title: "Doorlopend onderhoud", description: "Wekelijkse updates, dagelijkse back-ups en doorlopende beveiligingsmonitoring." },
      { number: "04", title: "Rapportage", description: "Maandelijkse rapportage over uitgevoerde werkzaamheden, prestaties en aanbevelingen." },
    ],
    techIds: ["WordPress", "WooCommerce", "Cloudflare", "GA4", "Node.js"],
    relatedCategories: ["WordPress", "Websitebeheer", "Beveiliging"],
    cta: {
      titleLead: "Uw WordPress site in",
      titleEm: "veilige handen?",
      sub: "Professioneel WordPress onderhoud met snelle reactietijden en een vaste contactpersoon.",
      primaryLabel: "WordPress beheer aanvragen",
      primaryHref: "mailto:info@websitebeheerpro.nl?subject=WordPress%20onderhoud",
      secondaryLabel: "Plan kennismaking",
      secondaryHref: "#cta",
    },
  },
  {
    slug: "website-beveiliging",
    number: "04",
    name: "Website beveiliging",
    tagline:
      "Proactieve website beveiliging die hackers, malware en datalekken buiten de deur houdt.",
    description:
      "Doorlopende beveiligingsmonitoring, malware-scans, firewall-bescherming en SSL-beheer voor een veilige en betrouwbare website.",
    href: "/website-beveiliging",
    icon: "shield",
    heroEyebrow: "Dienst · Website beveiliging",
    heroTitleLead: "Website beveiliging die",
    heroTitleEm: "aanvallen stopt.",
    features: [
      {
        title: "Malware-scans",
        description:
          "Dagelijkse automatische scans op malware, verdachte code en beveiligingslekken.",
        iconName: "shield",
      },
      {
        title: "Firewall & DDoS-bescherming",
        description:
          "Web Application Firewall (WAF) die kwaadaardig verkeer blokkeert vóór het uw server bereikt.",
        iconName: "lightning",
      },
      {
        title: "SSL-beheer",
        description:
          "Correcte SSL-certificaatinstallatie en -verlenging — altijd een veilige HTTPS-verbinding.",
        iconName: "layers",
      },
      {
        title: "Beveiligingsrapportage",
        description:
          "Maandelijks beveiligingsrapport met bevindingen, uitgevoerde acties en aanbevelingen.",
        iconName: "chart",
      },
    ],
    process: [
      { number: "01", title: "Beveiligingsaudit", description: "Grondige scan van uw website op kwetsbaarheden, verouderde software en beveiligingsrisico's." },
      { number: "02", title: "Hardening", description: "We sluiten gevonden lekken, installeren een firewall en schalen onnodige toegangspunten terug." },
      { number: "03", title: "Doorlopende monitoring", description: "24/7 monitoring op verdachte activiteiten, malware en ongeautoriseerde toegang." },
      { number: "04", title: "Incident response", description: "Bij een beveiligingsincident handelen we snel: analyse, herstel en preventie van herhaling." },
    ],
    techIds: ["Cloudflare", "WordPress", "Next.js", "SSL", "Node.js"],
    relatedCategories: ["Beveiliging", "Websitebeheer", "WordPress"],
    cta: {
      titleLead: "Uw website beschermd",
      titleEm: "tegen hackers?",
      sub: "Proactieve beveiliging die aanvallen stopt vóór ze schade aanrichten — vraag vandaag een beveiligingsscan aan.",
      primaryLabel: "Beveiligingsscan aanvragen",
      primaryHref: "mailto:info@websitebeheerpro.nl?subject=Website%20beveiliging",
      secondaryLabel: "Plan kennismaking",
      secondaryHref: "#cta",
    },
  },
  {
    slug: "website-monitoring",
    number: "05",
    name: "Website monitoring",
    tagline:
      "24/7 website monitoring — wij weten het vóór uw klanten dat uw site offline is.",
    description:
      "Continue uptime-monitoring, prestatiebewaking en alerts zodat uw website altijd beschikbaar, snel en betrouwbaar is voor uw bezoekers.",
    href: "/website-monitoring",
    icon: "gauge",
    heroEyebrow: "Dienst · Website monitoring",
    heroTitleLead: "Website monitoring",
    heroTitleEm: "dag en nacht.",
    features: [
      {
        title: "Uptime-monitoring",
        description:
          "We controleren uw website elke minuut en alarmeren u onmiddellijk bij downtime.",
        iconName: "gauge",
      },
      {
        title: "Prestatiecontrole",
        description:
          "Bewaking van laadtijden en Core Web Vitals — wij signaleren vertragingen voordat bezoekers het merken.",
        iconName: "lightning",
      },
      {
        title: "Foutdetectie",
        description:
          "Automatische detectie van 404-fouten, kapotte links en server-errors.",
        iconName: "search",
      },
      {
        title: "Alerting & rapportage",
        description:
          "Direct alarm per e-mail of SMS bij incidenten, plus maandelijkse beschikbaarheidsrapportage.",
        iconName: "chart",
      },
    ],
    process: [
      { number: "01", title: "Monitoring inrichten", description: "We configureren uptime-, prestatie- en beveiligingsmonitoring voor uw specifieke website." },
      { number: "02", title: "Alerting instellen", description: "Notificaties per e-mail en SMS zodat u en wij direct op de hoogte zijn bij problemen." },
      { number: "03", title: "Doorlopende bewaking", description: "24/7 monitoring met geautomatiseerde checks elke minuut." },
      { number: "04", title: "Maandelijkse rapportage", description: "Overzicht van uptime, prestaties en incidenten, inclusief aanbevelingen." },
    ],
    techIds: ["Next.js", "WordPress", "Vercel", "Cloudflare", "GA4"],
    relatedCategories: ["Monitoring", "Websitebeheer", "Beveiliging"],
    cta: {
      titleLead: "Altijd weten dat uw site",
      titleEm: "online is?",
      sub: "24/7 website monitoring met directe alerting — zodat u altijd weet dat uw website bereikbaar is.",
      primaryLabel: "Monitoring inrichten",
      primaryHref: "mailto:info@websitebeheerpro.nl?subject=Website%20monitoring",
      secondaryLabel: "Plan kennismaking",
      secondaryHref: "#cta",
    },
  },
  {
    slug: "hosting-beheer",
    number: "06",
    name: "Hosting beheer",
    tagline:
      "Professioneel hosting beheer voor een snelle, veilige en betrouwbare website.",
    description:
      "Volledig hosting beheer: serveronderhoud, SSL-certificaten, DNS-beheer, snelheidsoptimalisatie en schaalbaarheid voor uw online aanwezigheid.",
    href: "/hosting-beheer",
    icon: "rocket",
    heroEyebrow: "Dienst · Hosting beheer",
    heroTitleLead: "Hosting beheer zonder",
    heroTitleEm: "technisch gedoe.",
    features: [
      {
        title: "Serveronderhoud",
        description:
          "Wij beheren en optimaliseren uw serveromgeving voor maximale uptime en prestaties.",
        iconName: "layers",
      },
      {
        title: "SSL & DNS-beheer",
        description:
          "Correcte SSL-installatie, automatische verlenging en foutloze DNS-configuratie.",
        iconName: "shield",
      },
      {
        title: "Snelheidsoptimalisatie",
        description:
          "Caching, CDN-inrichting en servertuning voor razendsnelle laadtijden wereldwijd.",
        iconName: "lightning",
      },
      {
        title: "Schaalbaar & betrouwbaar",
        description:
          "Hosting die meegroeit met uw bedrijf — van kleine website tot hoogverkeer platform.",
        iconName: "rocket",
      },
    ],
    process: [
      { number: "01", title: "Hosting audit", description: "We beoordelen uw huidige hostingomgeving op prestaties, beveiliging en kosten." },
      { number: "02", title: "Optimalisatie", description: "Serverinstellingen, caching en CDN worden geconfigureerd voor optimale prestaties." },
      { number: "03", title: "Doorlopend beheer", description: "Wij houden serveromgeving, SSL en DNS actueel en ingrijpen bij problemen." },
      { number: "04", title: "Rapportage", description: "Periodieke rapportage over uptime, prestaties en kosten van uw hostingomgeving." },
    ],
    techIds: ["Vercel", "Cloudflare", "Next.js", "WordPress", "Node.js"],
    relatedCategories: ["Hosting", "Websitebeheer", "Prestaties"],
    cta: {
      titleLead: "Hosting zonder",
      titleEm: "zorgen?",
      sub: "Wij nemen het volledige hosting beheer uit handen — snel, veilig en schaalbaar.",
      primaryLabel: "Hosting beheer aanvragen",
      primaryHref: "mailto:info@websitebeheerpro.nl?subject=Hosting%20beheer",
      secondaryLabel: "Plan kennismaking",
      secondaryHref: "#cta",
    },
  },
  {
    slug: "technische-seo",
    number: "07",
    name: "Technische SEO",
    tagline:
      "Technische SEO-optimalisatie die uw website beter vindbaar maakt in Google.",
    description:
      "Complete technische SEO-audit en -optimalisatie: indexering, schema markup, Core Web Vitals, canonicalisatie en crawlability voor maximale zichtbaarheid.",
    href: "/technische-seo",
    icon: "search",
    heroEyebrow: "Dienst · Technische SEO",
    heroTitleLead: "Technische SEO voor",
    heroTitleEm: "betere vindbaarheid.",
    features: [
      {
        title: "SEO-audit",
        description:
          "Grondige technische audit van indexering, crawlability, schema markup en Core Web Vitals.",
        iconName: "search",
      },
      {
        title: "Schema & gestructureerde data",
        description:
          "JSON-LD implementatie voor rich results, betere klikratio en meer zichtbaarheid in Google.",
        iconName: "spark",
      },
      {
        title: "Core Web Vitals",
        description:
          "Optimalisatie van LCP, CLS en INP voor een hogere PageSpeed-score en betere rankings.",
        iconName: "gauge",
      },
      {
        title: "Rapportage & advies",
        description:
          "Maandelijkse SEO-rapportage met rankings, verbeteringen en concrete aanbevelingen.",
        iconName: "chart",
      },
    ],
    process: [
      { number: "01", title: "Technische audit", description: "Volledige analyse van crawlability, indexering, schema, snelheid en canonicalisatie." },
      { number: "02", title: "Prioriteitenlijst", description: "Bevindingen gerangschikt op impact — van kritieke fouten tot quick wins." },
      { number: "03", title: "Implementatie", description: "Technische verbeteringen worden doorgevoerd: schema, canonicals, sitemaps en meer." },
      { number: "04", title: "Monitoring & rapportage", description: "Maandelijkse opvolging van rankings, prestaties en nieuwe technische aandachtspunten." },
    ],
    techIds: ["Next.js", "WordPress", "GA4", "Cloudflare", "TypeScript"],
    relatedCategories: ["SEO", "Websitebeheer", "Prestaties"],
    cta: {
      titleLead: "Beter vindbaar in",
      titleEm: "Google?",
      sub: "Technische SEO-audit en -optimalisatie voor structureel betere rankings en meer organisch verkeer.",
      primaryLabel: "SEO-audit aanvragen",
      primaryHref: "mailto:info@websitebeheerpro.nl?subject=Technische%20SEO",
      secondaryLabel: "Plan kennismaking",
      secondaryHref: "#cta",
    },
  },
  {
    slug: "website-support",
    number: "08",
    name: "Website support",
    tagline:
      "Snelle, professionele website support voor wijzigingen, vragen en technische problemen.",
    description:
      "Flexibele website support op uur- of abonnementsbasis — van kleine content-aanpassingen tot technische ondersteuning en spoedoplossingen.",
    href: "/website-support",
    icon: "cursor",
    heroEyebrow: "Dienst · Website support",
    heroTitleLead: "Website support die",
    heroTitleEm: "snel reageert.",
    features: [
      {
        title: "Snelle responstijden",
        description:
          "Kortere wachttijden bij wijzigingen, fouten of technische vragen — altijd een vast aanspreekpunt.",
        iconName: "lightning",
      },
      {
        title: "Content-aanpassingen",
        description:
          "Teksten, afbeeldingen, nieuwe pagina's of structuurwijzigingen — snel en foutloos uitgevoerd.",
        iconName: "cursor",
      },
      {
        title: "Technische ondersteuning",
        description:
          "Hulp bij plugin-conflicten, formulier-problemen, koppelingen en andere technische issues.",
        iconName: "layers",
      },
      {
        title: "Spoedservice",
        description:
          "Bij kritieke problemen of uitval handelen we met prioriteit — zodat uw site zo snel mogelijk weer live is.",
        iconName: "rocket",
      },
    ],
    process: [
      { number: "01", title: "Supportverzoek", description: "U dient een verzoek in via e-mail of ons supportportaal met een beschrijving van het probleem of de wens." },
      { number: "02", title: "Beoordeling", description: "We beoordelen de urgentie en scope en communiceren een verwachte doorlooptijd." },
      { number: "03", title: "Uitvoering", description: "Wijziging of oplossing wordt doorgevoerd en getest voor akkoord." },
      { number: "04", title: "Bevestiging", description: "U ontvangt een bevestiging van de uitgevoerde werkzaamheden inclusief screenshots of toelichting." },
    ],
    techIds: ["WordPress", "Next.js", "Vercel", "GA4", "TypeScript"],
    relatedCategories: ["Support", "Websitebeheer", "WordPress"],
    cta: {
      titleLead: "Technische hulp",
      titleEm: "nodig?",
      sub: "Snelle website support op maat — voor wijzigingen, problemen of technische vragen.",
      primaryLabel: "Support aanvragen",
      primaryHref: "mailto:info@websitebeheerpro.nl?subject=Website%20support",
      secondaryLabel: "Plan kennismaking",
      secondaryHref: "#cta",
    },
  },
  {
    slug: "website-optimalisatie",
    number: "09",
    name: "Website optimalisatie",
    tagline:
      "Website optimalisatie voor betere prestaties, hogere snelheid en meer conversie.",
    description:
      "Prestatie-optimalisatie van uw website: Core Web Vitals verbetering, laadtijdreductie, caching, afbeeldingsoptimalisatie en conversie-analyse.",
    href: "/website-optimalisatie",
    icon: "lightning",
    heroEyebrow: "Dienst · Website optimalisatie",
    heroTitleLead: "Een website die",
    heroTitleEm: "razendsnel laadt.",
    features: [
      {
        title: "Core Web Vitals",
        description:
          "LCP, CLS en INP geoptimaliseerd voor een hogere PageSpeed-score en betere Google rankings.",
        iconName: "gauge",
      },
      {
        title: "Afbeeldingsoptimalisatie",
        description:
          "Automatische compressie, moderne formaten (WebP/AVIF) en lazy loading voor snellere pagina's.",
        iconName: "layers",
      },
      {
        title: "Caching & CDN",
        description:
          "Slimme caching en een CDN-configuratie die uw site razendsnel maakt voor bezoekers wereldwijd.",
        iconName: "lightning",
      },
      {
        title: "Conversieverbetering",
        description:
          "Analyse van gebruikersgedrag en gerichte verbeteringen die meer bezoekers omzetten in klanten.",
        iconName: "chart",
      },
    ],
    process: [
      { number: "01", title: "Prestatie-audit", description: "Volledige analyse van laadtijden, Core Web Vitals en conversie-knelpunten." },
      { number: "02", title: "Verbeterplan", description: "Prioriteitenlijst op basis van impact — van snelle wins tot diepgaande optimalisaties." },
      { number: "03", title: "Implementatie", description: "Technische verbeteringen worden doorgevoerd en getest op alle apparaten en browsers." },
      { number: "04", title: "Meten & bijsturen", description: "We meten het effect van elke optimalisatie en sturen bij voor maximaal resultaat." },
    ],
    techIds: ["Next.js", "WordPress", "Vercel", "Cloudflare", "GA4"],
    relatedCategories: ["Prestaties", "Websitebeheer", "SEO"],
    cta: {
      titleLead: "Uw website sneller en",
      titleEm: "beter?",
      sub: "Website optimalisatie voor betere prestaties, hogere rankings en meer conversie.",
      primaryLabel: "Optimalisatie aanvragen",
      primaryHref: "mailto:info@websitebeheerpro.nl?subject=Website%20optimalisatie",
      secondaryLabel: "Plan kennismaking",
      secondaryHref: "#cta",
    },
  },
] as const satisfies readonly Service[];

/** Generic FAQ items for any service page. */
export const SERVICE_FAQ = [
  {
    question: "Hoe lang duurt het om websitebeheer in te richten?",
    answer:
      "Na een korte intake richten we het beheer gemiddeld binnen één tot twee werkdagen in. U ontvangt een technische check, waarna monitoring, back-ups en beveiligingssystemen actief worden gezet.",
  },
  {
    question: "Wat kost professioneel websitebeheer?",
    answer:
      "Onze beheerplannen starten vanaf €79 per maand voor basis onderhoud. De prijs hangt af van de omvang van uw website en de gewenste diensten. Vraag vrijblijvend een plan op maat aan.",
  },
  {
    question: "Onderhouden jullie ook websites die jullie niet hebben gebouwd?",
    answer:
      "Ja, wij nemen het beheer over van elke website, ongeacht wie hem heeft gebouwd. We starten met een technische check en stellen daarna een passend beheerplan voor.",
  },
  {
    question: "Is mijn website geschikt voor mobiel en alle browsers?",
    answer:
      "Als onderdeel van ons beheer monitoren we compatibiliteit en melden we eventuele problemen op mobiel, tablet of desktop. Fixes vallen binnen uw onderhoudsuren.",
  },
  {
    question: "Kan ik zelf nog inhoudelijke aanpassingen doen?",
    answer:
      "Absoluut. Wij zorgen voor technisch beheer; u beheert zelf uw content. Wilt u dat wij ook content-aanpassingen doen? Dan regelen we dat binnen uw onderhoudsuren.",
  },
  {
    question: "Wordt mijn website gevonden in Google?",
    answer:
      "Ons technische SEO-beheer zorgt voor een correcte indexering, schema markup en goede Core Web Vitals — de technische basis voor Google-vindbaarheid. Voor uitgebreide SEO-campagnes hebben wij ook een Technische SEO-dienst.",
  },
] as const satisfies readonly LandingFAQItem[];
