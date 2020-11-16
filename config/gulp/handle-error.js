import debug from 'debug'

import {
  relative
} from 'path'

import {
  modulePath
} from '~/config/gulp/paths'

const log = debug('@sequencemedia:config:gulp:handle-error')

log('`handleError` is awake')

export function handleError ({
  code = 'No error code defined',
  message = 'No error message defined',
  filename: f = 'No file name defined',
  path: p = 'No path defined'
} = {}) {
  switch (code) {
    case 'EPERM':
      log(`A watched file or directory has invalid permissions: '${relative(modulePath, f || p)}'`)
      break

    case 'ENOENT':
      log(`A watched file or directory has been deleted: '${relative(modulePath, f || p)}'`)
      break

    default:
      log(`Watch error. ${code}: ${message}.`)
      break
  }
}

export default handleError
