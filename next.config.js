const path = require("path");

module.exports = {
  trailingSlash: true,
  output: "export",
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
