const devConfig = require("./vue.config.dev");
const buildConfig = require("./vue.config.build");
console.log(process.env.NODE_ENV);
module.exports =
  process.env.NODE_ENV === "development" ? devConfig : buildConfig;
