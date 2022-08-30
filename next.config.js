/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['photos.hotelbeds.com'],
  },
  output: 'standalone',
}

module.exports = nextConfig
