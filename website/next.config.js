/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['ts', 'tsx'],
  experimental: {
    externalDir: true,
  },
};

module.exports = nextConfig;
