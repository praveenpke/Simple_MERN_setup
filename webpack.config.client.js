const path = require("path");
const webpack = require("webpack");
const CURRENT_WORKING_DIR = process.cwd();

const config = {
  name: "browser",
  mode: "development", //mode sets process.env.node_env to given value and tells webpack to use its built in optimizations, its default value is production
  devtool: "eval-source-map", //specifies how source maps are generated. mapping code within a compressed file back to its original for debugging
  entry: [
    //specifies where webpack should start bundling
    "react-hot-loader/patch",
    "webpack-hot-middleware/client?reload-true",
    path.join(CURRENT_WORKING_DIR, "client/main.js")
  ],
  output: {
    //specifies output dist folder for bundle.js file
    path: path.join(CURRENT_WORKING_DIR, "/dist"),
    filename: "bundle.js",
    publicPath: "/dist/"
  },
  module: {
    //sets regex rule for transpilation/bundling
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), //enable hot module replacement for react-hot-loader
    new webpack.NoEmitOnErrorsPlugin() //allows skipping emitting when there are compile errors
  ]
};

module.exports = config;
