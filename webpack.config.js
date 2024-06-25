const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: ["./index.css", './index.js'],
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'practice app',
    template: 'index.html'
  }),
  new MiniCssExtractPlugin()],
  module: {
    rules: [

      {
        test: /\.html$/i,
        use: {
          loader: 'html-loader',
        }
      },

      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader",],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: "file-loader",
        }
      }
    ],
  },
};
