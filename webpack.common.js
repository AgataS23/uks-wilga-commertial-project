const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  /* here you can define another js file */
  entry: {
    index: "./src/js/index.js",
    navigation: "./src/js/navigation.js",
  },
  output: {
    filename: "[name].[hash:8].js",
    path: __dirname + "/dist",
  },
  module: {
    rules: [
      {
        test: [/.js$/],
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          attributes: {
            list: [
              {
                tag: "img",
                attribute: "src",
                type: "src",
              },
              {
                tag: "img",
                attribute: "data-gallery-src",
                type: "src",
              },
            ],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "img/[name].[hash:8].[ext]",
            },
          },
        ],
      },
    ],
  },

  devServer: {
    port: 8080,
  },

  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public",
          globOptions: {
            ignore: ["**/*.DS_Store"],
          },
        },
      ],
    }),

    /* here you can define another html file and its dependencies */
    new HtmlWebpackPlugin({
      template: "./src/pages/index.html",
      inject: true,
      chunks: ["index"],
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/camps.html",
      inject: true,
      chunks: ["index", "camps"],
      filename: "camps.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/tenis.html",
      inject: true,
      chunks: ["index", "tenis"],
      filename: "tenis.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/athletics.html",
      inject: true,
      chunks: ["index", "athletics"],
      filename: "athletics.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/football.html",
      inject: true,
      chunks: ["index", "football"],
      filename: "football.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/swimming.html",
      inject: true,
      chunks: ["index", "swimming"],
      filename: "swimming.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/cheerleaders.html",
      inject: true,
      chunks: ["index", "cheerleaders"],
      filename: "cheerleaders.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/news.html",
      inject: true,
      chunks: ["index", "news"],
      filename: "news.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/contact.html",
      inject: true,
      chunks: ["index", "contact"],
      filename: "contact.html",
    }),
  ],
};
