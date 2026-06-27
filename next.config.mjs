/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  productionBrowserSourceMaps: false,
  experimental: {
    // Inline the (small) Tailwind CSS into the document <head> instead of
    // shipping it as render-blocking external stylesheet requests. Removes the
    // critical-path CSS round-trip that delays FCP/LCP on mobile.
    inlineCss: true,
    // Rewrite barrel imports (react-icons/{lu,si}, framer-motion) to per-symbol
    // deep imports so only the icons/animations actually used are bundled.
    optimizePackageImports: ["react-icons", "framer-motion"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
    // Explicitly list all quality values used across components so Next.js
    // doesn't emit unconfigured-qualities warnings for component-level overrides.
    qualities: [60, 70, 75, 78],
    // Reduced from 30 days to 1 day so that image replacements
    // (like the logo) propagate faster after a rebuild / cache clear.
    minimumCacheTTL: 60 * 60 * 24, // 1 day
    // Allow local images served with a cache-busting query string (e.g. the
    // logo's ?v= param). Next 16 blocks query strings on local images unless
    // they are explicitly permitted here. Omitting `search` allows any query.
    localPatterns: [{ pathname: "/**" }],
    remotePatterns: [
      { protocol: "https", hostname: "image.thum.io" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "loremflickr.com" },
      { protocol: "https", hostname: "api.microlink.io" },
      // Placeholder testimonial avatars (constants/testimonials.ts). Replace
      // with real customer photos before launch and drop this host.
      { protocol: "https", hostname: "randomuser.me" },
    ],
  },
  async redirects() {
    return [
      // ── Legacy webshop-latenmaken.nl / old brand URLs ─────────────────────
      // All old webshop-focused pages permanently redirect to the new
      // Website Beheer Pro service pages. Preserves any residual SEO equity.
      { source: "/about", destination: "/over-ons", permanent: true },
      { source: "/webshop-laten-maken", destination: "/websitebeheer", permanent: true },
      { source: "/woocommerce-webshop-laten-maken", destination: "/wordpress-onderhoud", permanent: true },
      { source: "/shopify-webshop-laten-maken", destination: "/websitebeheer", permanent: true },
      { source: "/website-laten-maken", destination: "/websitebeheer", permanent: true },
      { source: "/wordpress-website-laten-maken", destination: "/wordpress-onderhoud", permanent: true },
      { source: "/nextjs-website-laten-maken", destination: "/websitebeheer", permanent: true },
      { source: "/landing-page-laten-maken", destination: "/website-support", permanent: true },
      { source: "/webapp-laten-maken", destination: "/websitebeheer", permanent: true },
      { source: "/seo-optimalisatie", destination: "/technische-seo", permanent: true },

      // ── Old /services/[slug] twins → new service landing pages ─────────────
      // Keep in sync with SERVICE_LANDING_PAGE_BY_SLUG in constants/index.ts.
      { source: "/services/web-development", destination: "/websitebeheer", permanent: true },
      { source: "/services/ecommerce", destination: "/websitebeheer", permanent: true },
      { source: "/services/landing-page-optimization", destination: "/website-support", permanent: true },
      { source: "/services/seo", destination: "/technische-seo", permanent: true },
      { source: "/services/websitebeheer", destination: "/websitebeheer", permanent: true },
      { source: "/services/website-onderhoud", destination: "/website-onderhoud", permanent: true },
      { source: "/services/technische-seo", destination: "/technische-seo", permanent: true },
      { source: "/services/wordpress-onderhoud", destination: "/wordpress-onderhoud", permanent: true },
      { source: "/services/website-beveiliging", destination: "/website-beveiliging", permanent: true },
      { source: "/services/website-monitoring", destination: "/website-monitoring", permanent: true },
      { source: "/services/hosting-beheer", destination: "/hosting-beheer", permanent: true },
      { source: "/services/website-support", destination: "/website-support", permanent: true },
      { source: "/services/website-optimalisatie", destination: "/website-optimalisatie", permanent: true },

      // ── Old programmatic locatie pages → new management equivalents ─────────
      // /website-laten-maken-[city] and /webdesign-[city] redirect to the new
      // /websitebeheer-[city] pages (308 permanent).
      { source: "/website-laten-maken-:city", destination: "/websitebeheer-:city", permanent: true },
      { source: "/webdesign-:city", destination: "/website-onderhoud-:city", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        // Apply aggressive caching to versioned / fingerprinted assets.
        // NOTE: the site logo (logo-site.png) is deliberately excluded from
        // the 1-year cache because it is served via the Next.js Image
        // component with a ?v= query parameter for manual cache busting.
        source: "/:all*(svg|jpg|jpeg|webp|avif|gif|ico|woff|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Short cache for the site logo so it picks up ?v= bumps quickly.
        source: "/images/logo-site.png",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, must-revalidate",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
