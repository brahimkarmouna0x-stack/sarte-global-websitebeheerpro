import type { Metadata } from "next";

import { CareersHiring } from "@/components/careers/CareersHiring";
import { CareersRoles } from "@/components/careers/CareersRoles";
import { CareersValues } from "@/components/careers/CareersValues";
import { PageHero } from "@/components/page/PageHero";
import { CallToAction } from "@/components/sections/CallToAction";
import { TeamShowcase } from "@/components/sections/TeamShowcase";
import { CAREERS_HERO } from "@/constants/careers";

const PAGE_TITLE = "Vacatures — Werken bij Website Beheer Pro";
const PAGE_DESC =
  "Werk bij Website Beheer Pro. Remote-first, kleine teams met volledige eigenaarschap. Bekijk onze openstaande vacatures en hoe we werken.";

export const metadata: Metadata = {
  // `absolute`: PAGE_TITLE already carries the brand; skip the root title template.
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESC,
  alternates: { canonical: "/careers" },
  keywords: [
    "vacatures",
    "werken bij Website Beheer Pro",
    "Website Beheer vacatures",
    "developer vacature remote",
    "baan Website Beheer nederland",
    "Website Beheer Pro vacatures",
  ],
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: "/careers",
    type: "website",
    images: [
      {
        url: "/images/company-img.png",
        width: 1200,
        height: 800,
        alt: PAGE_TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESC,
  },
};

export default function CareersPage() {
  return (
    <main className="careers-page" id="top">
      <PageHero content={CAREERS_HERO} id="careers-h" />
      <CareersValues />
      <TeamShowcase />
      <CareersRoles />
      <CareersHiring />
      <CallToAction />
    </main>
  );
}
