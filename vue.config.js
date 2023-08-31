const path = require("path");

const resolve = (dir) => {
  return path.join(__dirname, dir);
};

module.exports = {
  publicPath: "/",
  assetsDir: "static",
  productionSourceMap: false,
  css: {
    extract: false, // 这样可以将css打包到js里，在使用组件的时候不需要再单独引入 css
  },
  configureWebpack: (config) => {
    config.performance = {
      hints: "warning",
      maxEntrypointSize: 50000000,
      maxAssetSize: 30000000,
      assetFilter: (assetFilename) => assetFilename.endsWith(".js"),
    };
    config.externals = {
      ace: "ace",
    };
  },
  chainWebpack: (config) => {
    config.module.rule("svg").exclude.add(resolve("src/assets/icons")).end();
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/assets/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
      })
      .end();
  },
  devServer: {
    // disableHostCheck: true
  },
};
