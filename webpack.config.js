const path = require('path');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
    filename: 'okWebStorage.js',
    libraryTarget: 'umd',
    library: 'okWebStorage',
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        include: [path.resolve('src')],
        exclude: [path.resolve('node_modules')],
        use: 'eslint-loader',
      },
      {
        test: /\.js$/,
        include: [path.resolve('src')],
        exclude: [path.resolve('node_modules')],
        use: 'babel-loader',
      },
    ],
  },
  target: 'web',
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: false,
      }),
      new FileManagerPlugin({
        onStart: {
          delete: ['./dist/'],
        },
      }),
    ],
  },
};
