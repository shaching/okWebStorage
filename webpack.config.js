const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

module.exports = {
  entry: [
    'babel-polyfill',
    './src/main/js/index.js'
  ],

  output: {
    path: path.resolve('lib'),
    filename: 'okWebStorage.js',
    libraryTarget: 'umd',
    library: 'okWebStorage',
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        include: [path.resolve('src')],
        exclude: [path.resolve('node_modules')],
        use: 'eslint-loader'
      }, {
        test: /\.js$/,
        include: [path.resolve('src')],
        exclude: [path.resolve('node_modules')],
        use: 'babel-loader'
      }
    ]
  },

  resolve: {
    extensions: ['.js']
  },

  plugins: [
    new UglifyJSPlugin({
      parallel: true,
      uglifyOptions: {
        ecma: 8,
        compress: true,
        warnings: false
      }
    })
  ],
};
