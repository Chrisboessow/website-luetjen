/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com'],
  },
  experimental: {
    // Diese Einstellung hilft bei IONOS Deployment
    runtime: 'nodejs'
  }
}

module.exports = nextConfig 