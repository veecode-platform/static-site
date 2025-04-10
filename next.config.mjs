import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();
const basePath = process.env.NEXT_PUBLIC_BASE_PATH;
const safeBasePath = basePath && basePath.startsWith('/') ? basePath : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // static,
  trailingSlash: true,
  basePath: safeBasePath,
  assetPrefix: safeBasePath,
  logging: {
    fetches: {
      hmrRefreshes: true,
    },
    images: {
      deviceSizes: [640, 768, 769, 1024, 1280, 1536, 2048, 3840],
      minimumCacheTTL: 60,
      unoptimized: true,
    },
    env: {
      NEXT_PUBLIC_BASE_PATH: process.env.NEXT_PUBLIC_BASE_PATH,
      NEXT_PUBLIC_ANALYTICS_ID: process.env.NEXT_PUBLIC_ANALYTICS_ID,
      NEXT_PUBLIC_HOST_URL: process.env.NEXT_PUBLIC_HOST_URL,
      NEXT_PUBLIC_GOOGLE_TAG_MANAGER: process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER,
      NEXT_PUBLIC_LAMBDA_BASE_URL: process.env.NEXT_PUBLIC_LAMBDA_BASE_URL,
      NEXT_PUBLIC_NEUROLEAD_ID: process.env.NEXT_PUBLIC_NEUROLEAD_ID,
      NEXT_PUBLIC_LAMBDA_API_KEY: process.env.LAMBDA_API_KEY
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
