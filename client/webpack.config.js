const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.ts',
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    compress: true,
    historyApiFallback: true,
    hot: true,
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:8888',
        pathRewrite: {'^/api' : ''}
      }
    }
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.mjs', '.js', '.jsx']
  },
  mode: 'production',
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' },
      {
        test: /\.s[ac]ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  output: {
    filename: 'main.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'DND Scrawl',
      hash: true,
      template: './index.html'
    }),
    new Dotenv()
  ]
};
