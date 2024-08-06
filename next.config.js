/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com', // if your website has no www, drop it
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
    domains: ['images.unsplash.com'],
  },

  async rewrites() {
    return [
      {
        source: '/api/products/seed',
        destination: '/api/products/seed',
      },
    ]
  },
}

module.exports = nextConfig
