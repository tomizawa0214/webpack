const path = require("path");

const outputPath = path.resolve(__dirname, "../tomizawa/docs")

module.exports = {
  mode: "production",
  devtool: "source-map",

  entry: "../tomizawa/docs/index.js",
  output: {
    filename: "main.js",
    path: outputPath
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: true,
              sourceMap: true,
              importLoaders: 2
            }
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              plugins: [
                require("autoprefixer")({
                  grid: true
                })
              ]
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(gif|png|jpg|eot|wof|woff|woff2|ttf|svg)$/,
        loader: "url-loader"
      }
    ]
  }
};