import path from 'node:path'

import {
  readFileSync
} from 'node:fs'

import {
  CleanWebpackPlugin
} from 'clean-webpack-plugin'

import Webpack from 'webpack'

import {
  clientPath,
  assetsPath
} from '#config/paths'

const {
  EnvironmentPlugin,
  SourceMapDevToolPlugin
} = Webpack

const {
  version
} = JSON.parse(readFileSync('./package.json').toString())

export default ({ NODE_ENV = 'production' } = process.env) => ({
  mode: NODE_ENV,
  entry: {
    app: path.resolve(clientPath, 'assets/js/index.jsx')
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
