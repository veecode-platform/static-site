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
  async redirects() {
    return [
      {
        source: '/plugin/Github%20Workflows/',
        destination: '/plugin/github-workflows',
        permanent: true,
      },
      {
        source: '/plugin/Gitlab%20Pipelines/',
        destination: '/plugin/gitlab-pipelines',
        permanent: true,
      },
      {
        source: '/plugin/Kong%20Service%20Manager/',
        destination: '/plugin/kong-service-manager',
        permanent: true,
      },
      {
        source: '/plugin/Kubernetes%20GPT%20Analyzer/',
        destination: '/plugin/kubernetes-gpt-analyzer',
        permanent: true,
      },
    ]
  }
}

module.exports = nextConfig;