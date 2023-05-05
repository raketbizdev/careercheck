const path = require("path");

module.exports = {
  trailingSlash: true,
  images: {
    domains: ["en.gravatar.com"],
  },
  exportPathMap: async function () {
    return {
      "/": { page: "/" },
    };
  },
  // This is required to use "next export"
  output: {
    path: path.join(__dirname, "out"),
    publicPath: "/",
  },
};
