import { BEHEER_HERO, type LandingFAQItem, type LandingHeroContent } from "@/constants";
import {
  CITIES,
  CITY_BY_SLUG,
  LOCATION_SERVICES,
  type City,
  type LocationService,
} from "@/constants/locations";

interface InternalLink {
  readonly name: string;
  readonly href: string;
}

/**
 * Composition engine for the programmatic city × service pages. Every page is
 * generated from `City` + `LocationService` tokens, but the prose is selected
 * deterministically from variant pools (seeded by the slug) so each page reads
 * differently — guarding against thin/duplicate-content penalties while staying
 * stable across builds.
 */

export interface LocationPage {
  readonly slug: string;
  readonly path: string;
  readonly city: City;
  readonly service: LocationService;
  readonly metaTitle: string;
  readonly metaDescription: string;
  readonly keywords: readonly string[];
  readonly hero: LandingHeroContent;
  readonly introHeading: string;
  readonly introParagraphs: readonly string[];
  readonly benefitsHeading: string;
  readonly benefits: readonly string[];
  readonly faqHeading: string;
  readonly faq: readonly LandingFAQItem[];
  readonly nearby: readonly InternalLink[];
  /** Same city in the other keyword dimension(s), e.g. Webdesign ↔ Website. */
  readonly crossLinks: readonly InternalLink[];
  readonly serviceDescription: string;
}

/* ── Deterministic, slug-seeded selection ─────────────────────────────────── */

function hash(input: string): number {
  let h = 5381;
  for (let i = 0; i < input.length; i += 1) {
    h = (h * 33) ^ input.charCodeAt(i);
  }
  return Math.abs(h);
}

/** Pick one item from `pool` for `seed`, with an `offset` so several picks vary. */
function pick<T>(pool: readonly T[], seed: number, offset = 0): T {
  return pool[(seed + offset * 7) % pool.length]!;
}

/* ── Variant pools (templates take the resolved city + service) ───────────── */

type Tpl = (city: City, service: LocationService) => string;

const TITLE_TEMPLATES: readonly Tpl[] = [
  (c, s) => `${s.label} in ${c.name} | Website Beheer Pro`,
  (c, s) => `${s.label} ${c.name} — professioneel & betrouwbaar | Website Beheer Pro`,
  (c, s) => `${s.label} in ${c.name} voor ondernemers | Website Beheer Pro`,
];

const DESCRIPTION_TEMPLATES: readonly Tpl[] = [
  (c, s) =>
    `${s.label} in ${c.name}? Website Beheer Pro verzorgt professioneel ${s.label.toLowerCase()} voor ondernemers in ${c.name} en ${c.region}. Veilig, snel en up-to-date. Vraag vrijblijvend een beheerplan aan.`,
  (c, s) =>
    `Professioneel ${s.label.toLowerCase()} in ${c.name}? Wij houden uw ${s.noun} veilig, snel en up-to-date. Voor ondernemers in ${c.province} — maandelijks opzegbaar.`,
  (c, s) =>
    `Op zoek naar ${s.label.toLowerCase()} in ${c.name}? Website Beheer Pro levert betrouwbaar ${s.label.toLowerCase()} voor bedrijven in ${c.name}. Beveiliging, updates en monitoring inbegrepen.`,
];

const HERO_TITLE_EM: readonly string[] = [
  "veilig en up-to-date.",
  "zonder zorgen beheerd.",
  "in veilige handen.",
];

const HERO_SUB_TEMPLATES: readonly Tpl[] = [
  (c, s) =>
    `Website Beheer Pro verzorgt professioneel ${s.label.toLowerCase()} voor ondernemers in ${c.name} en omstreken. Veilig, snel en up-to-date — altijd een vaste specialist aan uw zijde.`,
  (c, s) =>
    `Uw ${s.noun} in ${c.name} in veilige handen? Website Beheer Pro houdt uw website up-to-date, beveiligd en optimaal vindbaar in Google — zonder zorgen.`,
  (c) =>
    `Zorgeloos ${c.name}-websitebeheer: updates, back-ups, beveiliging en monitoring door een vaste specialist. Maandelijks opzegbaar, altijd transparant.`,
];

const INTRO_HEADINGS: readonly Tpl[] = [
  (c, s) => `${s.label} in ${c.name}`,
  (c, s) => `Waarom professioneel ${s.label.toLowerCase()} in ${c.name}?`,
  (c, s) => `Uw ${s.noun} in ${c.name} goed onderhouden`,
];

const INTRO_OPENERS: readonly Tpl[] = [
  (c, s) =>
    `Professioneel ${s.label.toLowerCase()} in ${c.name} draait om meer dan updates draaien. Het gaat om een ${s.noun} die altijd snel, veilig en goed vindbaar is — zodat u als ondernemer in ${c.name} en ${c.region} zich volledig op uw bedrijf kunt richten. Website Beheer Pro regelt dit van A tot Z.`,
  (c, s) =>
    `Steeds meer ondernemers in ${c.name} ontdekken dat goed ${s.label.toLowerCase()} de basis is van een betrouwbare online aanwezigheid. Of u nu in ${c.province} start of doorgroeit — een slecht onderhouden ${s.noun} kost direct klanten.`,
  (c, s) =>
    `Een verouderde of onveilige ${s.noun} schaadt uw reputatie in ${c.name}. Website Beheer Pro houdt uw website proactief up-to-date, scant dagelijks op malware en bewaakt uw uptime 24/7 — zodat uw bezoekers altijd een vlekkeloze ervaring hebben.`,
];

const FAQ_BUILDERS: readonly ((c: City, s: LocationService) => LandingFAQItem)[] = [
  (c, s) => ({
    question: `Wat kost ${s.label.toLowerCase()} in ${c.name}?`,
    answer: `Professioneel ${s.label.toLowerCase()} start bij Website Beheer Pro vanaf €79 per maand voor het Essential-plan. Wij werken met transparante pakketten, zodat u vooraf precies weet wat uw ${s.noun} in ${c.name} kost — zonder verrassingen achteraf.`,
  }),
  (c) => ({
    question: `Werken jullie ook voor bedrijven buiten ${c.name}?`,
    answer: `Ja. We zijn online actief in heel Nederland en beheren websites voor ondernemers in ${c.name}, ${c.province} en de rest van ${c.region}. Alles verloopt soepel op afstand, met persoonlijk contact via e-mail en videocall.`,
  }),
  (c, s) => ({
    question: `Hoe snel start het ${s.label.toLowerCase()} voor mijn ${s.noun} in ${c.name}?`,
    answer: `Na aanmelding starten wij binnen twee werkdagen met een gratis technische check van uw ${s.noun}. Vervolgens gaat uw beheerplan direct in — geen wachttijden.`,
  }),
  (c) => ({
    question: `Blijft mijn website goed gevonden in Google na het beheer?`,
    answer: `Ja. Technische SEO, correcte indexering en sitemapbeheer zijn standaard onderdeel van elk beheerplan. Uw website in ${c.name} blijft snel en vindbaar.`,
  }),
];

const BENEFIT_POOL: readonly Tpl[] = [
  (c) => `Lokaal aanspreekpunt voor websites in ${c.name} en omstreken`,
  () => `Dagelijkse back-ups en proactieve beveiligingsscans`,
  () => `24/7 uptime-monitoring met directe actie bij uitval`,
  () => `Core-updates, plugin-updates en malware-bescherming inbegrepen`,
  (c) => `Vaste specialist, ook op afstand vanuit heel ${c.province}`,
  () => `Maandelijks opzegbaar — geen langetermijnverplichtingen`,
];

/* ── Slug ↔ page resolution ───────────────────────────────────────────────── */

interface Combo {
  readonly slug: string;
  readonly service: LocationService;
  readonly city: City;
}

const COMBOS: readonly Combo[] = LOCATION_SERVICES.flatMap((service) =>
  CITIES.map((city) => ({
    slug: `${service.prefix}-${city.slug}`,
    service,
    city,
  })),
);

const COMBO_BY_SLUG: ReadonlyMap<string, Combo> = new Map(
  COMBOS.map((combo) => [combo.slug, combo]),
);

/** All programmatic slugs — for `generateStaticParams` and the sitemap. */
export function getLocationSlugs(): readonly string[] {
  return COMBOS.map((combo) => combo.slug);
}

/** Fully composed page for a slug, or `null` when the slug is not a real combo. */
export function getLocationPage(slug: string): LocationPage | null {
  const combo = COMBO_BY_SLUG.get(slug);
  if (!combo) return null;

  const { city, service } = combo;
  const seed = hash(slug);
  const path = `/${slug}`;

  const benefits = Array.from({ length: 4 }, (_, i) =>
    pick(BENEFIT_POOL, seed, i + 1)(city, service),
  ).filter((value, index, all) => all.indexOf(value) === index);

  const nearby = city.nearby
    .map((nearbySlug) => CITY_BY_SLUG.get(nearbySlug))
    .filter((c): c is City => Boolean(c))
    .map((c) => ({ name: c.name, href: `/${service.prefix}-${c.slug}` }));

  // Cross-link this city's page to the same city in every other keyword
  // dimension (e.g. /website-laten-maken-amsterdam ↔ /webdesign-amsterdam), so
  // the dimensions pass authority to each other instead of being orphaned silos.
  const crossLinks: readonly InternalLink[] = LOCATION_SERVICES.filter(
    (other) => other.prefix !== service.prefix,
  ).map((other) => ({
    name: `${other.label} ${city.name}`,
    href: `/${other.prefix}-${city.slug}`,
  }));

  const hero: LandingHeroContent = {
    ...BEHEER_HERO,
    eyebrow: `${service.label} · ${city.name}`,
    titleLead: `${service.label} in ${city.name} voor`,
    titleEm: pick(HERO_TITLE_EM, seed, 2),
    sub: pick(HERO_SUB_TEMPLATES, seed, 1)(city, service),
  };

  return {
    slug,
    path,
    city,
    service,
    metaTitle: pick(TITLE_TEMPLATES, seed)(city, service),
    metaDescription: pick(DESCRIPTION_TEMPLATES, seed, 1)(city, service),
    keywords: [
      `${service.label.toLowerCase()} ${city.name}`,
      `${service.label.toLowerCase()} specialist ${city.name}`,
      `professioneel websitebeheer ${city.name}`,
      `website onderhoud ${city.name}`,
      `website beveiliging ${city.name}`,
      `Website Beheer Pro ${city.name}`,
    ],
    hero,
    introHeading: pick(INTRO_HEADINGS, seed, 3)(city, service),
    introParagraphs: [pick(INTRO_OPENERS, seed, 1)(city, service), city.angle],
    benefitsHeading: `Wat inbegrepen is bij uw ${service.label.toLowerCase()} in ${city.name}`,
    benefits,
    faqHeading: `Veelgestelde vragen — ${service.label.toLowerCase()} in ${city.name}`,
    faq: FAQ_BUILDERS.map((build) => build(city, service)),
    nearby,
    crossLinks,
    serviceDescription: pick(DESCRIPTION_TEMPLATES, seed, 2)(city, service),
  };
}
