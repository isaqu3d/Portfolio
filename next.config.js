/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "ugc.production.linktr.ee",
      },
      {
        protocol: "https",
        hostname: "media.licdn.com",
      },
    ],
  },
};

module.exports = nextConfig;
