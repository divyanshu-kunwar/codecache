/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/home',
      },
    ]
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static-cse.canva.com'
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com'
      },
      {
        protocol: 'https',
        hostname: 'zdulvlobrojgpadxtajj.supabase.co'
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com'
      },
    ],
  },
}

module.exports = nextConfig