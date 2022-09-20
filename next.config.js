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
  async redirects() {//remover com tudo em prod ok
    return [
      {
        source: '/pricing', 
        destination: '/404',
        permanent: false,       
      },
      {
        source: '/validate', 
        destination: '/404',
        permanent: false,               
      },
      {
        source: '/checkout', 
        destination: '/404',
        permanent: false,           
      },
    ]
  },
}

module.exports = nextConfig;