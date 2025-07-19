/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com'],
  },
  // Aktiviere diese Option nur wenn IONOS Probleme mit der Edge Runtime hat
  // experimental: {
  //   runtime: 'nodejs',
  // }
}

module.exports = nextConfig 