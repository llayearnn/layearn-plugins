const path = require("path");
// const { VueLoaderPlugin } = require("vue-loader");//'文件中的各个部分（模板、脚本、样式）并将其转换为webpack可处理的模块 = require('vue-loader/lib/plugin');//负责解析'vue'文件中的各个部分（模板、脚本、样式）并将其转换为webpack可处理的模块
const VueLoaderPlugin = require("vue-loader/lib/plugin");
// const HtmlWebpackPlugin = require('html-webpack-plugin'); //生成html
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //将css打包后的js文件中抽取出来，生成独立的css文件。通过抽取css到独立的文件可以实现样式的分离和优化。通过配置入口文件、输出文件、模块解析规则等。
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // 导入清除插件, 可以在每次打包之前, 清除 dist目录的内容
module.exports = {
  entry: "./src/packages/index.js",
  output: {
    // path: path.resolve(__dirname, './dist'),
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/",
    // assetsDir: 'static',
    filename: "vue-layearn.umd.js", //输出文件名
    library: "vue-layearn", // 指定的就是你使用require时的模块名
    libraryTarget: "umd", // 指定输出格式， UMD 同时支持两种执行环境：node环境、浏览器环境。
    umdNamedDefine: true, // 会对 UMD 的构建过程中的 AMD 模块进行命名。否则就使用匿名的 define
  },
  resolve: {
    alias: {
      "@": path.resolve("src"),
    },
  },
  // 3. 配置模块解析规则
  module: {
    rules: [
      {
        // 处理.vue文件
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        // 处理.js文件, 使用Babel进行转义
        test: /\.js$/,
        exclude: /node_modules/, //排除/node_modules/
        use: {
          loader: "babel-loader",
        },
      },
      {
        // 处理less css
        test: /\.(css|less)$/,
        // 使用哪些 loader 处理
        use: [
          "style-loader", //加载css文件
          "css-loader",
          "less-loader",
        ],
      },
      // {
      //   // 处理css文件
      //   test: /\.css$/,
      //   use: [
      //     MiniCssExtractPlugin.loader, //将css文件单独处理
      //     "css-loader", //加载css文件
      //   ],
      // },
      // {
      //   // 处理less
      //   test: /\.less$/,
      //   // 使用哪些 loader 处理
      //   use: [
      //     MiniCssExtractPlugin.loader,
      //     // 将css文件变成commonjs模块加载js中，里面主要是内容样式字符串
      //     "css-loader",
      //     //讲 less 文件编译成呢个css 文件
      //     "less-loader",
      //   ],
      // },
      {
        test: /\.svg$/,
        loader: "svg-sprite-loader",
        include: [path.resolve("src/assets/icons")],
        options: {
          symbolId: "icon-[name]",
        },
      },
    ],
  },

  // 4. 配置解析别名
  // resolve: {
  //   alias: {
  //     vue$: 'vue/dist/vue.esm.js',//在引入vue.js时可以使用别名'vue'
  //   },
  // },

  // 5. 配置插件
  plugins: [
    new VueLoaderPlugin(), // 处理.vue文件的模块转换为js模块
    // new HtmlWebpackPlugin({ // 根据模板生成html文件，将打包后的脚本的样式自动引入
    //   template: '../public/index.html',
    //   filename: 'index.html',
    // }),
    // new MiniCssExtractPlugin({ // 将CSS抽取到单独的文件
    //   filename: 'assets/common/style.css',
    // }),
    new MiniCssExtractPlugin(),
    // 清除dist目录的插件
    new CleanWebpackPlugin(),
    new ProgressBarPlugin(),
  ],
  mode: "production",
};
