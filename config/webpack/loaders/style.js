const path = require('path');
const postcssConfigPath = path.resolve(process.cwd(), '.postcssrc.yml');
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  test: /\.(scss|sass|css)$/i,
  use: [
    { loader: "to-string-loader" },
    { loader: "css-loader", options: { minimize: isProduction } },
    {
      loader: "postcss-loader",
      options: { sourceMap: true, config: { path: postcssConfigPath } }
    },
    {
      loader: "sass-loader",
      options: {
        sourceMap: true,
        sassLoader: {
          data: '@import "dependencies";',
          includePaths: [path.resolve(__dirname, "../../app/packs/app/styles")]
        }
      }
    }
  ]
}