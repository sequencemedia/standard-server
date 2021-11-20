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
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/env', {
                  targets: {
                    node: '12.19.0',
                    browsers: [
                      'last 4 versions',
                      'safari >= 9',
                      'ios >= 8',
                      'ie >= 9',
                      '> 2%'
                    ]
                  },
                  useBuiltIns: 'usage',
                  corejs: 3
                }
              ],
              '@babel/react'
            ],
            plugins: [
              '@babel/proposal-export-default-from',
              '@babel/proposal-export-namespace-from',
              [
                '@babel/proposal-class-properties',
                {
                  loose: false
                }
              ],
              [
                'minify-dead-code-elimination',
                {
                  optimizeRawSize: true
                }
              ],
              [
                'module-resolver', {
                  root: ['..'],
                  cwd: 'babelrc',
                  alias: {
                    '@sequencemedia/api': './api',
                    '@sequencemedia/app': './app'
                  }
                }
              ]
            ]
          }
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
