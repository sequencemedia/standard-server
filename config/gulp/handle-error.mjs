import debug from 'debug'

import {
  relative
} from 'node:path'

import {
  currentDir
} from '#config/gulp/paths'

const log = debug('@sequencemedia:config:gulp:handle-error')

const {
  env: {
    DEBUG = '@sequencemedia:config:gulp:handle-error'
  }
} = process

debug.enable(DEBUG)

log('`handleError` is awake')

export function handleError ({
  code = 'No error code defined',
  message = 'No error message defined',
  filename: f = 'No file name defined',
  path: p = 'No path defined'
} = {}) {
  switch (code) {
    case 'EPERM':
      log(`A watched file or directory has invalid permissions: '${relative(currentDir, f || p)}'`)
      break

    case 'ENOENT':
      log(`A watched file or directory has been deleted: '${relative(currentDir, f || p)}'`)
      break

    default:
      log(`Watch error. ${code}: ${message}.`)
      break
  }
}

export default handleError
