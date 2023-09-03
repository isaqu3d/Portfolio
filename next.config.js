/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "cdn.sanity.io",
      "avatars.githubusercontent.com",
      "ugc.production.linktr.ee",
      "media.licdn.com",
    ],
  },
};

module.exports = nextConfig;
