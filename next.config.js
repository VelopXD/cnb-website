/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // This line is CRUCIAL for static hosting
  reactStrictMode: true,
  images: {
    domains: ['minecraft.net', 'api.mojang.com', 'mc-heads.net'],
    unoptimized: true, // Required for static export
  },
  basePath: process.env.NODE_ENV === 'production' ? '/cnb-website' : '', // Update this with your repo name
  assetPrefix: process.env.NODE_ENV === 'production' ? '/cnb-website/' : '',
}

module.exports = nextConfig;