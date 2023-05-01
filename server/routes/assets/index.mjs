import path from 'node:path'

import {
  assetsPath
} from '#config/paths'

const ASSETS_PATH = path.normalize(assetsPath)
const FAVICO_PATH = path.join(ASSETS_PATH, 'images/favicon.ico')

export default [
  {
    method: 'GET',
    path: '/favicon.ico',
    handler: (request, h) => h.redirect(FAVICO_PATH)
  },
  {
    method: 'GET',
    path: '/assets/{asset*}',
    handler: {
      directory: {
        path: ASSETS_PATH,
        listing: false,
        index: false
      }
    }
  }
]
