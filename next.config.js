/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['tmdb.org', 'themoviedb.org'],
    remotePatterns: [{
      protocol: 'https',
      hostname: 'image.tmdb.org',
      port: '443',
      pathname: '/t/p/original/**',
    }]
  }
}

module.exports = nextConfig
