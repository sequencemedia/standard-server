require('module-alias/register')
require('@babel/register')({
  ignore: [
    /node_modules/
  ]
})

const path = require('path')

const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')

const {
  EnvironmentPlugin,
  SourceMapDevToolPlugin
} = require('webpack')

const {
  clientPath,
  assetsPath
} = require('~/config/paths')

const {
  version
} = require('./package')

module.exports = ({ NODE_ENV = 'production' } = process.env) => ({
  mode: NODE_ENV,
  entry: {
    app: path.resolve(clientPath, 'assets/js/index.js')
  },
  output: {
    path: path.join(assetsPath, 'javascripts'),
    filename: `[name]-${version}.js`
  },
  stats: {
    colors: true
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: /node_modules|react-tab-set/ //  Required!
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      verbose: false,
      cleanOnceBeforeBuildPatterns: [
        path.join(assetsPath, 'javascripts').concat('/*.js'),
        path.join(assetsPath, 'javascripts').concat('/*.js.LICENSE.txt'),
        path.join(assetsPath, 'javascripts').concat('/*.js.map')
      ]
    }),
    new EnvironmentPlugin({ NODE_ENV }),
    new SourceMapDevToolPlugin({ filename: `[name]-${version}.js.map` })
  ],
  experiments: {
    backCompat: false
  }
})
