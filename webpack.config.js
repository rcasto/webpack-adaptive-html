var path = require('path');

module.exports = {
  entry: './public/foo.js',
  externals: {
    'adaptive-html': 'AdaptiveHtml'
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'foo.bundle.js'
  }
};