const withTM = require("next-transpile-modules")(["rehype-remark"]);

module.exports = withTM({
  reactStrictMode: true,
});
