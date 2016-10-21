/*
 * Contributions:
 *
 * 1. Arthur Kay
 * Webpack hot loading: http://www.akawebdesign.com/2016/04/08/hot-reloading-react-webpack-express/
 *
 *
 */

var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")

var config = {
  devtool: 'source-map',

  entry: {
    bundle: ['./main.js', './style/styles.css']
  },

  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'Public'),
    publicPath: '/static/'
  },

  // this is a default value; just be aware of it
  target: 'web',

  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: [
      path.resolve('./src'),
    ],
    modulesDirectories: [
      'node_modules'
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin("styles.css")
  ],

  module: {
    loaders: [{
      test: /\.css$/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader")
    },
    {
      test: /\.js?$/,
      exclude: /node_modules/,
      // "loader" property changed to "loaders" and is now an array!
      loaders: [
        // ORDER MATTERS; "react-hot" needs to be on the left, because webpack processes the loaders from right-to-left
        'react-hot',
        'babel']
    },
    {
      test: /\.scss$/,
      loader: "style-loader!css-loader?modules&localIdentName=[local]__[hash:base64:5]!sass-loader?includePaths[]=" +
        encodeURIComponent(path.resolve(__dirname, '../src'))
    }]
  }
}

module.exports = config;
