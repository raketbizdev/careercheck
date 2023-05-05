/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["en.gravatar.com"],
  },
};

module.exports = nextConfig;
