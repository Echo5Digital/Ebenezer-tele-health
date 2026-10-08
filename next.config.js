/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 90, 95],
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  async redirects() {
    return [
      // 301 permanent redirect: old domain → new domain (preserves path + query)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'ebenezertelehealth.com' }],
        destination: 'https://www.ebenezerhealthclinic.com/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.ebenezertelehealth.com' }],
        destination: 'https://www.ebenezerhealthclinic.com/:path*',
        permanent: true,
      },
      // 301 permanent redirect: old weight-loss slug → renamed route
      {
        source: '/weight-loss',
        destination: '/medical-weight-loss',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
