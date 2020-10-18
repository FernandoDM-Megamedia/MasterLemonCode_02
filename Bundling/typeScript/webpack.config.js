const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require("path");
const basePath = __dirname;

module.exports = {
    context: path.join(basePath, "src"),
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    stats: "errors-only",
    entry: {
      app: "./index.tsx",
      appStyles: [
        "./mystyles.scss"
      ],
      vendorStyles: ["../node_modules/bootstrap/dist/css/bootstrap.css"],
    },
    output: {
      filename: "[name].[chunkhash].js",
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                modules: {
                  // localsConvention: "camelCase", <--- aqui no funciona, la siguiente linea si 
                  exportLocalsConvention: "camelCase",
                  localIdentName: "[name]__[local]_[hash:base64:5]",
                },
                // localsConvention: 'camelCase', <--- error 
              },
            },
            {
              loader: "sass-loader",
              options: {
                implementation: require("sass"),
              },
            },
          ],
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader"
          ],
        },
        {
          test: /\.(png|jpg)$/,
          exclude: /node_modules/,
          loader: "url-loader",
          options : {
            limit: 5000,
          },
        },
        {
          test: /\.html$/,
          loader: "html-loader",          
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html', // output a dist
        template: 'index.html', // input de donde lee
        // hash: true,
      }),
      new MiniCssExtractPlugin({
        filename: "[name].[chunkhash].css",
        chunkFilename: "[id].css",
      }),
    ],
    devServer: {
      port: 8081,
    },
  };