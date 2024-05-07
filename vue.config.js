const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  configureWebpack: {
    entry: {
      app: "./src/app/main.js",
    },
  },
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === "production" ? "/VueNews/" : "/",
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/app/styles/variables.scss";`,
      },
    },
  },
});
