/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/logo.png',
          destination: '/logo.png',
          locale: false, // Don't apply locale prefix to logo
        },
        {
          source: '/images/:path*',
          destination: '/images/:path*',
          locale: false, // Don't apply locale prefix to images
        },
      ],
    };
  },
}

export default nextConfig
