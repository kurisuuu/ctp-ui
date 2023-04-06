module.exports = {
  theme: "",
  title: "VuePress + Element",
  description: "VuePress搭建Element的组件库文档教程示例代码",
  base: "/",
  port: "8080",
  themeConfig: {
    sidebar: [
      {
        title: "按钮",
        path: "/packages/button",
      },
    ],
  },
  head: [],
  plugins: [],
  markdown: {},
  chainWebpack: (config) => {
    config.resolve.alias.set("core-js/library/fn", "core-js/features");
  },
};
