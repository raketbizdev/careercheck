const path = require("path");

module.exports = {
  trailingSlash: true,
  images: {
    domains: ["en.gravatar.com"],
  },
  output: {
    path: path.join(__dirname, "out"),
    publicPath: "/",
  },
};
