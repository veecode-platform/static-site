import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // static,
  trailingSlash: true,
  logging: {
    fetches: {
      hmrRefreshes: true,
    },
    images: {
      deviceSizes: [640, 768, 769, 1024, 1280, 1536, 2048, 3840],
      minimumCacheTTL: 60,
    },
    source: "/(.*)",
    headers: [
      {
        key: "Content-Security-Policy",
        value: `
          default-src 'self';
          script-src 'self' 'unsafe-inline' 'unsafe-eval';
          style-src 'self' 'unsafe-inline';
          img-src 'self' data: https:;
          connect-src 'self';
          font-src 'self' https://fonts.gstatic.com;
          object-src 'none';
          frame-ancestors 'none';
        `.replace(/\n/g, ""),
      },
    ],
  },
};

export default withNextIntl(nextConfig);
