const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require("path");
const basePath = __dirname;

module.exports = {
    context: path.join(basePath, "src"),
    entry: {
      app: "./index.js",
      appStyles: ["./mystyles.scss"],
      vendorStyles: ["../node_modules/bootstrap/dist/css/bootstrap.css"],
    },
    output: {
      filename: "[name].[chunkhash].js",
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
          ]
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            {
              loader: "sass-loader",
              options: {
                implementation: require("sass"),
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html', // output a dist
        template: 'index.html', // input de donde lee
        //hash: true,
      }),
      new MiniCssExtractPlugin({
        filename: "[name].[chunkhash].css",
        chunkFilename: "[id].css",
      }),
    ],
    devServer: {
      port: 8081,
    }
  };