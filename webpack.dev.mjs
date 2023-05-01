import {
  merge
} from 'webpack-merge'

import TerserPlugin from 'terser-webpack-plugin'

import common from './webpack.common.mjs'

export default (env) => (
  merge(common(env), {
    mode: 'development',
    optimization: {
      minimize: true,
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
