const path = require("path");

module.exports = {
  trailingSlash: true,
  output: "standalone",
  generateStaticParams: async function () {
    return {
      "/": { page: "/" },
    };
  },
  output: {
    path: path.join(__dirname, "out"),
    publicPath: "/",
  },
};
