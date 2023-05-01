import {
  merge
} from 'webpack-merge'

import TerserPlugin from 'terser-webpack-plugin'

import common from './webpack.common.mjs'

export default (env) => (
  merge(common(env), {
    mode: 'production',
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin()
      ]
    }
  })
)
