import debug from 'debug'

import path from 'node:path'
import gulp from '@sequencemedia/gulp'
import vinylPaths from 'vinyl-paths'
import del from 'del'

import {
  currentDir,
  sourcePath,
  targetPath
} from '#config/gulp/paths'

import handleError from '#config/gulp/handle-error'

import cssFromSass from './css-from-sass.mjs'

const log = debug('@sequencemedia:config:gulp:build')

const buildSourcePath = path.relative(currentDir, sourcePath)
const buildTargetPath = path.relative(currentDir, targetPath)

log('`@sequencemedia:config:gulp:build` is awake')

export function cleanCss () {
  log('cleanCss')

  return (
    gulp.src(path.join(buildTargetPath, 'stylesheets/*'), { read: false })
      .pipe(vinylPaths((paths) => del(paths, { force: true })))
  )
}

export const css = gulp.series(cssFromSass)

export function watchCss () {
  log('watchCss')

  return (
    gulp.watch(
      [
        path.join(buildSourcePath, 'sass/**/*.*'),
        path.join(buildSourcePath, 'fonts/**/*.*'),
        path.join(buildSourcePath, 'icons/**/*.*')
      ],
      {
        name: 'css-watch',
        cwd: currentDir
      },
      gulp.series(cleanCss, css)
    )
      .on('error', handleError)
  )
}
