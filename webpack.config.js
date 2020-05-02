const path = require("path");

const outputPath = path.resolve(__dirname, "./")

// [定数] webpack の出力オプションを指定します
// 'production' か 'development' を指定
const MODE = "production";
// ソースマップの利用有無(productionのときはソースマップを利用しない)
const enabledSourceMap = MODE === "development";

module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: MODE,

  // ローカル開発用環境を立ち上げる
  // 実行時にブラウザが自動的に localhost を開く
  devServer: {
    contentBase: "./",
    open: true
  },

  entry: "./index.js",
  output: {
    filename: "main.js",
    path: outputPath
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: false,
              // sourceMap: enabledSourceMap
            }
          },
        ],
      }
      // {
      //   test: /\.scss$/,
      //   use: [
      //     "style-loader",
      //     {
      //       loader: "css-loader",
      //       options: {
      //         url: false,
      //         // sourceMap: enabledSourceMap,
      //         importLoaders: 2
      //       }
      //     },
      //     {
      //       loader: "postcss-loader",
      //       options: {
      //         // sourceMap: enabledSourceMap,
      //         plugins: [
      //           require("autoprefixer")({ grid: true })
      //         ]
      //       }
      //     },
      //     {
      //       loader: "sass-loader",
      //       options: {
      //         // sourceMap: enabledSourceMap
      //       }
      //     }
      //   ]
      // }
    ]
  }
};