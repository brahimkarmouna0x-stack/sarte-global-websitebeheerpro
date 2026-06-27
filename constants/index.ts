import type {
  FooterColumn,
  HeroContent,
  NavItem,
  NavLink,
  NavMenuSection,
  SiteMeta,
} from "@/types";

import { SERVICES } from "./services";

export const SITE = {
  title: "Website Beheer Pro | Professioneel Website Beheer Nederland",
  description:
    "Website Beheer Pro verzorgt professioneel Website Beheer, website onderhoud, beveiliging, monitoring en technische SEO voor bedrijven in Nederland. Altijd snel, veilig en up-to-date.",
  themeColor: "#0D0D0D",
  brandName: "WEBSITE BEHEER PRO",
  brandAccent: ".",
  url: "https://www.websitebeheerpro.nl",
  name: "Website Beheer Pro",
  email: "info@websitebeheerpro.nl",
  phone: "",
} as const satisfies SiteMeta;

export const TRUST_LINE =
  "Professioneel Website Beheer van Website Beheer Pro — uw online aanwezigheid in vertrouwde handen." as const;

/**
 * The core service pages for Website Beheer Pro — website management, maintenance,
 * security, monitoring, hosting, technical SEO and support. Single source of truth
 * for the "Diensten" nav dropdown, mobile drawer and footer column.
 */
export const SERVICE_LINKS: readonly NavLink[] = [
  { label: "Website Beheer Pro", href: "/websitebeheer" },
  { label: "Website onderhoud", href: "/website-onderhoud" },
  { label: "WordPress onderhoud", href: "/wordpress-onderhoud" },
  { label: "Website beveiliging", href: "/website-beveiliging" },
  { label: "Website monitoring", href: "/website-monitoring" },
  { label: "Hosting beheer", href: "/hosting-beheer" },
  { label: "Technische SEO", href: "/technische-seo" },
  { label: "Website support", href: "/website-support" },
  { label: "Website optimalisatie", href: "/website-optimalisatie" },
];

/**
 * Service offerings that have a dedicated keyword landing page. Their
 * /services/[slug] twin is 301-redirected and canonicalised to the landing page.
 */
export const SERVICE_LANDING_PAGE_BY_SLUG = {
  "websitebeheer": "/websitebeheer",
  "website-onderhoud": "/website-onderhoud",
  "technische-seo": "/technische-seo",
  "wordpress-onderhoud": "/wordpress-onderhoud",
  "website-beveiliging": "/website-beveiliging",
  "website-monitoring": "/website-monitoring",
  "hosting-beheer": "/hosting-beheer",
  "website-support": "/website-support",
  "website-optimalisatie": "/website-optimalisatie",
} as const;

/**
 * Slugs from SERVICE_LANDING_PAGE_BY_SLUG as a Set. Used to exclude these from
 * the mega-menu's "Onze diensten" column and from the sitemap.
 */
export const SERVICE_SLUGS_WITH_LANDING_PAGE: ReadonlySet<string> = new Set(
  Object.keys(SERVICE_LANDING_PAGE_BY_SLUG),
);

export const SERVICES_NAV: readonly NavLink[] = SERVICES.filter(
  (service) => !SERVICE_SLUGS_WITH_LANDING_PAGE.has(service.slug),
).map((service) => ({
  label: service.name,
  href: service.href,
}));

/**
 * The two titled columns inside the single "Diensten" mega-menu.
 */
export const NAV_SERVICE_SECTIONS: readonly NavMenuSection[] = [
  { title: "Website beheer & onderhoud", items: SERVICE_LINKS },
  { title: "Alle diensten", items: SERVICES_NAV },
];

/**
 * Primary nav — focused on website management services.
 */
export const NAV_ITEMS: readonly NavItem[] = [
  {
    kind: "link",
    label: "Website Beheer Pro",
    href: "/",
    shortLabel: "Website Beheer Pro",
  },
  { kind: "link", label: "Pakketten", href: "#pakketten" },
  {
    kind: "dropdown",
    label: "Diensten",
    menuId: "nav-diensten-menu",
    sections: NAV_SERVICE_SECTIONS,
  },
  {
    kind: "link",
    label: "Website Laten Maken",
    href: "/website-laten-maken",
    shortLabel: "Website Laten Maken",
  },
  {
    kind: "link",
    label: "Website Beveiliging",
    href: "/website-beveiliging",
    shortLabel: "Website Beveiliging",
  },
  {
    kind: "link",
    label: "Woocommerce Beheer Pro",
    href: "/woocommerce-webshop-laten-maken",
    shortLabel: "Woocommerce Beheer Pro",
  },
  {
    kind: "link",
    label: "Website onderhoud",
    href: "/website-onderhoud",
    shortLabel: "Website Onderhoud",
  },
  { kind: "link", label: "Contact", href: "/contact" },
];

export const NAV_CTA = {
  label: "Beheerplan aanvragen",
  href: "#cta",
} as const;

export const HERO = {
  eyebrow: "Website Beheer Pro",
  title: [
    {
      words: [{ text: "Professioneel Website Beheer Pro", italicAccent: true }],
    },
    {
      words: [{ text: "voor Nederlandse Bedrijven" }],
    },
  ],
  subtitle:
    "Website Beheer Pro houdt uw website veilig, snel en up-to-date. Professioneel Website Beheer, website onderhoud, beveiliging, monitoring en technische SEO — alles in één vertrouwde partner.",
  primaryCta: { label: "Beheerplan aanvragen", href: "#cta" },
  secondaryCta: { label: "Bekijk portfolio", href: "/work" },
  pricingCta: { label: "Bekijk pakketten", href: "#pakketten" },
  stats: [
    { label: "24/7 monitoring & beveiliging" },
    { label: "Maandelijks opzegbaar" },
    { label: "Voor MKB & ondernemers" },
  ],
  scrollLabel: "Scroll",
  badgeText:
    "WEBSITE BEHEER PRO · WEBSITE ONDERHOUD · NEDERLAND · WEBSITE BEHEER PRO · ",
} as const satisfies HeroContent;

export const TRUSTED_LABEL = "Vertrouwd door Nederlandse bedrijven" as const;

export const TRUSTED_BRANDS = [
  "Meridian",
  "Volta",
  "Claros",
  "Orbis",
  "Fenix",
  "Stratum",
  "Kova",
  "Helion",
] as const satisfies readonly string[];

export const CTA_SECTION = {
  titleLead: "Laat uw website",
  titleEm: "zorgeloos draaien.",
  sub: "Plan een gratis kennismaking van 30 minuten — geen verplichtingen, gewoon een open gesprek over uw website en beheerbehoeften.",
  ctaLabel: "Neem contact op",
  ctaHref: "mailto:info@websitebeheerpro.nl",
} as const;

export const FOOTER_MISSION =
  "Professioneel Website Beheer en website onderhoud voor bedrijven in Nederland. Website Beheer Pro — uw website altijd veilig, snel en up-to-date." as const;

export const FOOTER_COLUMNS = [
  {
    title: "Diensten",
    links: SERVICE_LINKS,
  },
  {
    title: "Bedrijf",
    links: [
      { label: "Over ons", href: "/over-ons" },
      { label: "Portfolio", href: "/work" },
      { label: "Journal", href: "/journal" },
      { label: "Vacatures", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
] as const satisfies readonly FooterColumn[];

export const NEWSLETTER = {
  title: "De Nieuwsbrief",
  description:
    "Één beknopte e-mail per maand. Praktische tips over Website Beheer Pro, beveiliging en technische SEO voor ondernemers.",
  placeholder: "jij@bedrijf.nl",
  buttonLabel: "Inschrijven",
  defaultNote: "Geen spam. Op elk moment uitschrijven.",
  errorNote: "Voer een geldig e-mailadres in.",
  successNote: "Bedankt! Je ontvangt binnenkort onze eerste e-mail.",
} as const;

export const FOOTER_LEGAL = {
  copyright: `© ${new Date().getFullYear()} Website Beheer Pro`,
  links: [
    { label: "Privacy", href: "/privacy" },
    { label: "Voorwaarden", href: "/terms" },
    { label: "Cookies", href: "/cookies" },
  ],
} as const;

export const PAYMENT_METHODS_LABEL = "Wij accepteren" as const;

export const PAYMENT_METHODS = [
  { id: "ideal", label: "iDEAL", color: "#CC0066" },
  { id: "visa", label: "Visa", color: "#1A1F71" },
  { id: "mastercard", label: "Mastercard", color: "#EB001B" },
  { id: "paypal", label: "PayPal", color: "#00457C" },
  { id: "stripe", label: "Stripe", color: "#635BFF" },
] as const;

export type PaymentMethodId = (typeof PAYMENT_METHODS)[number]["id"];

export const COOKIE_COPY = {
  message:
    "We gebruiken een klein aantal cookies om verkeer te begrijpen en deze website te verbeteren.",
  policyLabel: "Lees onze cookieverklaring",
  policyHref: "/cookies",
  declineLabel: "Weigeren",
  acceptLabel: "Accepteren",
  storageKey: "wbp_cookies",
  delayMs: 1200,
} as const;

export * from "./about";
export * from "./websitebeheer";
export * from "./technische-seo";
export * from "./new-website";
export * from "./landing-nieuwe-website";
export * from "./wordpress";
export * from "./webshop";
export * from "./woocommerce";
export * from "./shopify";
export * from "./landing-page";
export * from "./webapp";
export * from "./seo-optimalisatie";
export * from "./website-onderhoud";
export * from "./nextjs";
export * from "./pricing";
export * from "./journal";
export * from "./services";
export * from "./team";
export * from "./testimonials";
export * from "./work";
export * from "./process";
export * from "./impact";
export * from "./technologies";
export * from "./hero-projects";
export * from "./hero-stage";
export * from "./local-businesses";
export * from "./webshop-benefits";
export * from "./webshop-platforms";
export * from "./webshop-growth";
