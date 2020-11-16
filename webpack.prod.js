const {
  merge
} = require('webpack-merge')

const TerserPlugin = require('terser-webpack-plugin')

const common = require('./webpack.common')

module.exports = (env) => (
  merge(common(env), {
    mode: 'production',
    optimization: {
      minimizer: [
        new TerserPlugin()
      ]
    }
  })
)
