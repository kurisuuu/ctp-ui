const { defineConfig } = require("@vue/cli-service");
const entries = require("./utils/getEntries");
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    entry: {
      ...entries,
    },
    output: {
      // 打包后生成的js文件
      // 解释下这个[name]是怎么来的，它是根据你的entry命名来的，入口叫啥，出口的[name]就叫啥
      filename: "[name]/index.js",
      // 我这儿目前还没有资源引用
      publicPath: "/",
      library: "[name]",
      libraryTarget: "umd",
      libraryExport: "default",
      umdNamedDefine: true,
    },
  },
  chainWebpack: (config) => {
    config.optimization.delete("splitChunks");
    config.plugins.delete("copy");
    config.plugins.delete("html");
    config.plugins.delete("preload");
    config.plugins.delete("prefetch");
    config.plugins.delete("hmr");
    config.entryPoints.delete("app");
  },
  css: {
    sourceMap: true,
    extract: {
      filename: "style/[name].css",
    },
  },
});
