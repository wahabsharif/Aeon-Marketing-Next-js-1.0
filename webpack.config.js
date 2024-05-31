// webpack.config.js example
module.exports = {
  module: {
    rules: [
      {
        test: /\.xml$/,
        use: ["xml-loader"],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};
