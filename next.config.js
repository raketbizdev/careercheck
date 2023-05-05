const path = require("path");

module.exports = {
  trailingSlash: true,
  experimental: {
    standalone: true, // or `output: "standalone"`
  },
  // This is required to use "next export"
  output: "export",
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
