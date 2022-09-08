/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: false,
  images: {
    loader: "custom"    
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  compiler: {
    styledComponents: true
  }
}

module.exports = nextConfig