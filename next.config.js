const withTypescript = require('@zeit/next-typescript');
const withSass = require('@zeit/next-sass')
module.exports = withTypescript(withSass({
    target: "serverless",
    cssModules: true,
    cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  }
}));