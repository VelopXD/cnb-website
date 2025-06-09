/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',  // Enable static exports
  images: {
    domains: ['minecraft.net', 'api.mojang.com', 'mc-heads.net'],
    unoptimized: true, // Required for static export
  },
  basePath: process.env.NODE_ENV === 'production' ? '/cnb-website' : '', // Update this with your repo name
  assetPrefix: process.env.NODE_ENV === 'production' ? '/cnb-website/' : '',
}

module.exports = nextConfig