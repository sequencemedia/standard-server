import debug from 'debug'

import path from 'path'

import Hapi from '@hapi/hapi'
import inert from '@hapi/inert'
import vision from '@hapi/vision'

import Handlebars from 'handlebars'

import {
  currentDir,
  serverPath
} from '~/config/paths'

import { ASSETS, getApiRoutes, getAppRoutes } from '~/server/routes'

const {
  env: {
    DEBUG = '@sequencemedia'
  }
} = process

debug.enable(DEBUG)

const log = debug('@sequencemedia')

log('`@sequencemedia:server` is awake')

export default async function start ({ host = 'localhost', port = 5000 } = {}) {
  const server = Hapi.server({ host, port })

  server.events.on('start', () => {
    const {
      info
    } = server

    log(info)
  })

  server.events.on('stop', () => {
    const {
      info
    } = server

    log(info)
  })

  await server.register([inert, vision])

  server.views({
    relativeTo: currentDir,
    path: path.join(serverPath, 'views'),
    engines: {
      html: {
        module: Handlebars,
        helpersPath: path.join(serverPath, 'views/helpers'),
        compileMode: 'sync',
        compileOptions: {
          isCached: true
        }
      }
    }
  })

  const {
    info: {
      uri
    }
  } = server

  server.route(ASSETS)
  server.route(getApiRoutes(uri))
  server.route(getAppRoutes(uri))

  await server.start()
}
