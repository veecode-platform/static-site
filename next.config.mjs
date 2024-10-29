import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // dynamic
  output: "standalone",
  logging: {
    fetches: {
      hmrRefreshes: true,
    },
    images: {
      deviceSizes: [640, 768, 769, 1024, 1280, 1536, 2048, 3840],
      minimumCacheTTL: 60,
    },
  },
};

export default withNextIntl(nextConfig);
