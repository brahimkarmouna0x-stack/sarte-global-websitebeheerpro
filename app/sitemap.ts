import type { MetadataRoute } from "next";

import { SERVICES, SERVICE_SLUGS_WITH_LANDING_PAGE, SITE } from "@/constants";
import { getAuthorSlugs } from "@/lib/authors";
import { getAllPosts } from "@/lib/blog";
import { getLocationSlugs } from "@/lib/programmatic";

const SITE_URL = SITE.url;
const LAST_MODIFIED = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    // Homepage
    { url: SITE_URL, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 1.0 },

    // Core service landing pages
    { url: `${SITE_URL}/websitebeheer`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.95 },
    { url: `${SITE_URL}/website-onderhoud`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.95 },
    { url: `${SITE_URL}/wordpress-onderhoud`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/website-beveiliging`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/website-monitoring`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE_URL}/hosting-beheer`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE_URL}/technische-seo`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/website-support`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE_URL}/website-optimalisatie`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.85 },

    // Services overview
    { url: `${SITE_URL}/services`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.7 },

    // Company pages
    { url: `${SITE_URL}/over-ons`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/work`, lastModified: LAST_MODIFIED, changeFrequency: "weekly", priority: 0.85 },
    { url: `${SITE_URL}/journal`, lastModified: LAST_MODIFIED, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/careers`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/contact`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.7 },

    // Legal
    { url: `${SITE_URL}/privacy`, lastModified: LAST_MODIFIED, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/terms`, lastModified: LAST_MODIFIED, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/cookies`, lastModified: LAST_MODIFIED, changeFrequency: "yearly", priority: 0.3 },
  ];

  const servicePages: MetadataRoute.Sitemap = SERVICES.filter(
    (service) => !SERVICE_SLUGS_WITH_LANDING_PAGE.has(service.slug),
  ).map((service) => ({
    url: `${SITE_URL}/services/${service.slug}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const journalPages: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${SITE_URL}/journal/${post.slug}`,
    lastModified: new Date(post.updated ?? post.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const locationPages: MetadataRoute.Sitemap = getLocationSlugs().map((slug) => ({
    url: `${SITE_URL}/${slug}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const authorPages: MetadataRoute.Sitemap = getAuthorSlugs().map((slug) => ({
    url: `${SITE_URL}/team/${slug}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: 0.4,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...journalPages,
    ...locationPages,
    ...authorPages,
  ];
}
