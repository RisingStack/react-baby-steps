'use strict'

const path = require('path')

const SRC_FOLDER = path.join(__dirname, 'src')
const DIST_FOLDER = path.join(__dirname, 'dist')

const webpackConfig = {
  entry: {
    app: [path.join(SRC_FOLDER, 'app.js')]
  },
  output: {
    publicPath: '/', // This is used for generated urls
    path: DIST_FOLDER,
    filename: 'scripts/[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/,
        include: [SRC_FOLDER]
      }
    ]
  }
}

module.exports = webpackConfig
