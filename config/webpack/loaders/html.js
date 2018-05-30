module.exports = {
  test: /\.html$/i,
  use: [
    {
      loader: "html-loader",
      options: {
        minimize: true,
        removeComments: true,
        collapseWhitespace: true,
        // angular
        removeAttributeQuotes: false,
        keepClosingSlash: true,
        caseSensitive: true,
        conservativeCollapse: true
      }
    }
  ]
}