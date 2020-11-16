const {
  merge
} = require('webpack-merge')

const TerserPlugin = require('terser-webpack-plugin')

const common = require('./webpack.common')

module.exports = (env) => (
  merge(common(env), {
    mode: 'development',
    optimization: {
      minimizer: [
        new TerserPlugin({
          parallel: true,
          terserOptions: {
            nameCache: {}
          }
        })
      ]
    }
  })
)
