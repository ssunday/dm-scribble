const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    compress: true,
    historyApiFallback: true,
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:8888',
        pathRewrite: {'^/api' : ''}
      }
    }
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  mode: 'production',
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'DND Scrawl',
      hash: true,
      template: './index.html'
    })
  ]
};
