/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["en.gravatar.com"],
  },
  exportPathMap: function () {
    return {
      "/": { page: "/" },
    };
  },
  exportTrailingSlash: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
    };
  },
};

module.exports = nextConfig;
