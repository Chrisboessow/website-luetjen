/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com'],
  },
  // Kopiere die Videos in den Build
  experimental: {
    outputFileTracingIncludes: {
      '/**': ['./public/**/*']
    }
  }
}

module.exports = nextConfig 