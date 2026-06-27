import type { Metadata, Viewport } from "next";
import dynamic from "next/dynamic";
import type { ReactNode } from "react";

import { WhatsAppFloatingButton } from "@/components/contact/WhatsAppFloatingButton";
import { BackToTopButton } from "@/components/ui/BackToTopButton";
import { CookieBar } from "@/components/ui/CookieBar";
import { Footer } from "@/components/layouts/Footer";
import { Navigation } from "@/components/layouts/Navigation";
import { ArticleDialogProvider } from "@/contexts/ArticleDialogContext";
import { ContactDialogProvider } from "@/contexts/ContactDialogContext";
import { SettingsProvider } from "@/contexts/SettingsContext";
import { SITE } from "@/constants";
import { getSiteSettings } from "@/lib/settings";
import { areaServedNL } from "@/lib/seo";
import { dmSans, playfair } from "@/lib/fonts";
import type { SiteSettings } from "@/types";

import "./globals.css";

const ContactDialog = dynamic(() =>
  import("@/components/contact/ContactDialog").then((m) => m.ContactDialog),
);

const ArticleDialog = dynamic(() =>
  import("@/components/journal/ArticleDialog").then((m) => m.ArticleDialog),
);

const SITE_URL = SITE.url;
const SITE_NAME = SITE.name;
const CONTACT_EMAIL = SITE.email;
const CONTACT_PHONE = SITE.phone;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE.title,
    template: "%s · Website Beheer Pro",
  },
  description: SITE.description,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Website Beheer & Website Onderhoud",
  keywords: [
    "Website Beheer",
    "website beheer",
    "Website Beheer pro",
    "professioneel Website Beheer",
    "website onderhoud",
    "website support",
    "website beheer nederland",
    "website updates",
    "website beveiliging",
    "website monitoring",
    "website hosting",
    "website backup",
    "website snelheid",
    "website optimalisatie",
    "technische seo",
    "wordpress onderhoud",
    "website beheer specialist",
    "website beheer abonnement",
    "technisch Website Beheer",
    "Website Beheer Pro",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE.title,
    description: SITE.description,
    locale: "nl_NL",
    images: [
      {
        url: "/images/company-img.png",
        width: 1200,
        height: 630,
        alt: "Website Beheer Pro — Professioneel Website Beheer Nederland",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    images: ["/images/company-img.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "0Qaid2yyNSKXEyryLPraC9GdDuUGJ5y1Y9UKeaErPX4",
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico?v=6", sizes: "any" },
      {
        url: "/favicon/favicon-16x16.png?v=6",
        type: "image/png",
        sizes: "16x16",
      },
      {
        url: "/favicon/favicon-32x32.png?v=6",
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: "/favicon/favicon-48x48.png?v=6",
        type: "image/png",
        sizes: "48x48",
      },
      {
        url: "/favicon/android-chrome-192x192.png?v=6",
        type: "image/png",
        sizes: "192x192",
      },
      {
        url: "/favicon/android-chrome-512x512.png?v=6",
        type: "image/png",
        sizes: "512x512",
      },
    ],
    shortcut: ["/favicon/favicon.ico?v=6"],
    apple: [
      {
        url: "/favicon/apple-touch-icon-152x152.png?v=6",
        type: "image/png",
        sizes: "152x152",
      },
      {
        url: "/favicon/apple-touch-icon-167x167.png?v=6",
        type: "image/png",
        sizes: "167x167",
      },
      {
        url: "/favicon/apple-touch-icon.png?v=6",
        type: "image/png",
        sizes: "180x180",
      },
    ],
  },
  other: {
    "msapplication-TileColor": SITE.themeColor,
    "msapplication-TileImage": "/favicon/mstile-144x144.png?v=6",
    "msapplication-config": "/browserconfig.xml",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: SITE.themeColor,
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
};

interface RootLayoutProps {
  readonly children: ReactNode;
}

const FALLBACK_SAME_AS = [
  "https://www.facebook.com/Website Beheerpro",
  "https://www.linkedin.com/company/Website Beheerpro",
  "https://www.instagram.com/Website Beheerpro",
];

/** Builds the Organization JSON-LD from dynamic settings (email, phone, socials). */
function buildOrganizationJsonLd(settings: SiteSettings) {
  const sameAs = settings.socialLinks
    .map((link) => link.href)
    .filter((href) => href.startsWith("http"));

  const phone = settings.phone || CONTACT_PHONE;
  const contactPoint = (contactType: string) => ({
    "@type": "ContactPoint",
    contactType,
    email: settings.email || CONTACT_EMAIL,
    ...(phone ? { telephone: phone } : {}),
    availableLanguage: ["Dutch"],
    areaServed: "NL",
  });

  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    alternateName: ["Website Beheer Pro", "Website Beheerpro.nl", "WBP"],
    legalName: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/company-img.png`,
    image: `${SITE_URL}/images/company-img.png`,
    description:
      "Website Beheer Pro is de specialist in professioneel Website Beheer, website onderhoud, beveiliging en technische SEO voor ondernemers en bedrijven in Nederland. Altijd snel, veilig en up-to-date.",
    slogan: "Uw website altijd veilig, snel en up-to-date.",
    priceRange: "€€",
    sameAs: sameAs.length > 0 ? sameAs : FALLBACK_SAME_AS,
    knowsAbout: [
      "Website Beheer",
      "Website onderhoud",
      "WordPress onderhoud",
      "Website beveiliging",
      "Website monitoring",
      "Hosting beheer",
      "Technische SEO",
      "Website support",
      "Website optimalisatie",
      "Core Web Vitals",
      "Schema markup",
      "GEO — Generative Engine Optimization",
    ],
    areaServed: areaServedNL(),
    address: {
      "@type": "PostalAddress",
      addressCountry: "NL",
    },
    contactPoint: [
      contactPoint("customer support"),
      contactPoint("technical support"),
    ],
  };
}

const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/#service-Website Beheer`,
  name: "Professioneel Website Beheer",
  serviceType: "Website Beheer",
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: areaServedNL(),
  description:
    "Professioneel Website Beheer en website onderhoud voor ondernemers en bedrijven in Nederland. Updates, beveiliging, back-ups, monitoring en technische SEO — alles in één vertrouwde beheerpartner.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Website Beheer diensten",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Website onderhoud" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "WordPress onderhoud" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Website beveiliging" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Website monitoring" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Technische SEO" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Website support" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Hosting beheer" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Website optimalisatie" },
      },
    ],
  },
};

const WEBSITE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  alternateName: "Professioneel Website Beheer Nederland",
  url: SITE_URL,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "nl-NL",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/zoeken?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default async function RootLayout({ children }: RootLayoutProps) {
  const settings = await getSiteSettings();
  const organizationJsonLd = buildOrganizationJsonLd(settings);

  return (
    <html lang="nl" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(SERVICE_JSON_LD),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(WEBSITE_JSON_LD),
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <a href="#top" className="sr-only focus:not-sr-only">
          Direct naar inhoud
        </a>
        <SettingsProvider settings={settings}>
          <ContactDialogProvider>
            <ArticleDialogProvider>
              <Navigation />
              {children}
              <Footer />
              <CookieBar />
              <WhatsAppFloatingButton />
              <BackToTopButton />
              <ContactDialog />
              <ArticleDialog />
            </ArticleDialogProvider>
          </ContactDialogProvider>
        </SettingsProvider>
      </body>
    </html>
  );
}
