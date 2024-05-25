const dotenv = require('dotenv').config();
const Dotenv = require('dotenv-webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  // entry: './src/app.ts',
  entry: path.resolve(__dirname, 'src/app.ts'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/dist'
  },
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname)
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(css)$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },
    ]
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   title: 'Location Finder',
    //   filename: 'index.html',
    //   template: './index.html'
    // }),
    new webpack.DefinePlugin({
      GOOGLE_MAP_API_KEY: JSON.stringify(process.env.GOOGLE_MAP_API_KEY),
      'process.env.MY_ENV_VAR_2': JSON.stringify(process.env.MY_ENV_VAR_2),
    }),
    new Dotenv()
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '...']
  }
}
