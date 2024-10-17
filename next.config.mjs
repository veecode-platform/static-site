import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // dynamic
  output: "standalone",
};

export default withNextIntl(nextConfig);
