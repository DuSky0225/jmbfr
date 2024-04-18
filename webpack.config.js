const path = require("path");

module.exports = {
  mode: "production", // 或 'development'
  entry: "./src/index.js",
  output: {
    filename: "jmbfr.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192, // 小于 8kb 的图片将被转成 base64 字符串
              name: '[name].[ext]',
              outputPath: "img/",
            },
          },
        ],
      },
    ],
  },
};
