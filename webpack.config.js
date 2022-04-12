const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
  mode: "development",
  entry: "./src/app.js",
  output: {
    filename: "bundle_[hash].js",
    path: path.resolve("./dist"),
    clean: true,
  },
  devServer: {
    host: "localhost",
    port: 8080,
    open: true,
    watchFiles: "index.html",
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: ["html-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
      inject: "body",
      title: "react-no-cra",
    }),
  ],
};