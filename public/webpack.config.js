const WebpackPwaManifest = require('webpack-pwa-manifest')
const path = require('path')
const NodemonPlugin = require('nodemon-webpack-plugin')

const config = {
  mode: 'production',
  entry: {
    app: './public/assets/js/index.js',
    detail: './public/assets/js/topic.js',
    favorites: './public/assets/js/favorites.js'
  },
  output: {
    path: path.join(__dirname, '/public/dist'),
    filename: '[name].bundle.js'
  },
  plugins: [
    new NodemonPlugin(),
    new WebpackPwaManifest({
      fingerprints: false,
      inject: false,
      name: 'Newsy',
      short_name: 'Newsy',
      description: 'News Aggregator',
      background_color: '#01579b',
      theme_color: '#ffffff',
      start_url: '/'
    })
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}
module.exports = config
