import debug from 'debug'

import path from 'path'
import gulp from 'gulp'
import vinylPaths from 'vinyl-paths'
import del from 'del'

import {
  modulePath,
  sourcePath,
  targetPath
} from '~/config/gulp/paths'

import handleError from '~/config/gulp/handle-error'

import cssFromSass from './css-from-sass'

const log = debug('@sequencemedia:config:gulp:build')

const buildSourcePath = path.relative(modulePath, sourcePath)
const buildTargetPath = path.relative(modulePath, targetPath)

log('`@sequencemedia:config:gulp:build` is awake')

export function cssClean () {
  log('cssClean')

  return (
    gulp.src(path.join(buildTargetPath, 'stylesheets/*'), { read: false })
      .pipe(vinylPaths((paths) => del(paths, { force: true })))
  )
}

export const css = gulp.series(cssFromSass)

export function cssWatch () {
  log('cssWatch')

  return (
    gulp.watch(
      [
        path.join(buildSourcePath, 'sass/**/*.*'),
        path.join(buildSourcePath, 'fonts/**/*.*'),
        path.join(buildSourcePath, 'icons/**/*.*')
      ],
      {
        name: 'css-watch',
        cwd: modulePath
      },
      gulp.series(cssClean, css)
    )
      .on('error', handleError)
  )
}
