import type { AboutCompanyContent } from "@/types";

export const ABOUT_COMPANY = {
  eyebrow: "Over Website Beheer Pro",
  brand: "Website Beheer Pro",
  titleLead: "is de beheerspecialist achter",
  titleEm: "zorgeloze websites",
  titleTail: "voor Nederlandse bedrijven.",
  mediaImage: "/images/company-img.webp",
  mediaAlt:
    "Het team van Website Beheer Pro aan het werk — professioneel websitebeheer, website onderhoud en technische SEO voor bedrijven in Nederland.",
  mediaCaption: "Website Beheer Pro · Nederland",
  lead:
    "Website Beheer Pro is dé specialist in professioneel websitebeheer, website onderhoud, beveiliging en technische SEO voor ondernemers en bedrijven in Nederland. Wij houden uw website veilig, snel en up-to-date — zodat u zich volledig op uw bedrijf kunt richten.",
  paragraphs: [
    "Website Beheer Pro is opgericht met één duidelijk doel: elke Nederlandse ondernemer ontzorgen van alle technische beslommeringen rondom zijn of haar website. Ons team van senior specialisten in websitebeheer, beveiliging en technische SEO werkt proactief — problemen oplossen vóórdat ze uw bezoekers of omzet raken.",
    "Naast doorlopend websitebeheer en website onderhoud verzorgt Website Beheer Pro ook WordPress onderhoud, hosting beheer, website monitoring, technische SEO en website support. Eén vertrouwde partner voor uw volledige online aanwezigheid, met een vast aanspreekpunt en transparante maandtarieven.",
  ],
  pillars: [
    {
      title: "Alleen senior specialisten",
      description:
        "Elk websitebeheer-traject bij Website Beheer Pro wordt uitgevoerd door ervaren specialisten — niet door juniors die op uw kosten leren.",
    },
    {
      title: "Proactief, niet reactief",
      description:
        "Wij bewaken uw website 24/7 en grijpen in vóórdat problemen uw bezoekers of omzet raken — geen brandjes blussen, maar echte preventie.",
    },
    {
      title: "Transparante vaste tarieven",
      description:
        "Heldere maandpakketten zonder verborgen kosten. U weet altijd wat wij doen en wat het kost — geen verrassingen op de factuur.",
    },
    {
      title: "Snel, veilig & vindbaar",
      description:
        "Elke website die wij beheren is up-to-date, beveiligd tegen aanvallen en technisch geoptimaliseerd voor Google — de basis voor online succes.",
    },
  ],
  metrics: [
    { value: "150+", label: "Websites beheerd" },
    { value: "98%", label: "Klanttevredenheid" },
    { value: "24/7", label: "Monitoring & beveiliging" },
    { value: "NL", label: "Werkzaam in heel Nederland" },
  ],
  badge: "WEBSITE BEHEER PRO · WEBSITEBEHEER NEDERLAND · WEBSITE ONDERHOUD",
  ctaLabel: "Plan kennismaking",
  ctaHref: "#cta",
  secondaryLabel: "Lees ons verhaal",
  secondaryHref: "/over-ons",
} as const satisfies AboutCompanyContent;
