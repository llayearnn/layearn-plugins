const path =require("path");
module.exports={
  entry: './src/packages/button/index.js', // 插件的入口
  output: {
    path: path.resolve(__dirname, '../'),
    publicPath: '/dist/',
    // filename: 'build.js', // 页面的生成文件
    filename: 'vue-layearn.js', // 插件的生成文件
    libraryTarget: 'umd',
    umdNamedDefine: true
  }
}