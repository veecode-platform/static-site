/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    loader: "custom"    
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  compiler: {
    styledComponents: true
  },
  i18n: {
    locales: ['en', 'pt'],
    defaultLocale: 'pt',
  }
}

module.exports = nextConfig;