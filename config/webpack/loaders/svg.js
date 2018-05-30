module.exports = {
  test: /\.svg$/i,
  use: [
    {
      loader: 'raw-loader'
    }
  ]
}