const debug = require('debug')

const log = debug('@sequencemedia/standard-server')

const {
  env: {
    NODE_ENV = 'development'
  }
} = process

log('`@sequencemedia/standard-server` is awake')

function env () {
  log({ NODE_ENV })

  return (
    NODE_ENV === 'production'
  )
}

const presets = [
  [
    '@babel/env', {
      targets: {
        node: 'current'
      },
      useBuiltIns: 'usage',
      corejs: 3
    }
  ]
]

const plugins = [
  '@babel/proposal-export-default-from',
  '@babel/proposal-export-namespace-from',
  [
    '@babel/proposal-class-properties',
    {
      loose: false
    }
  ]
]

module.exports = (api) => {
  if (api) api.cache.using(env)

  return {
    presets,
    plugins
  }
}
