import path from 'node:path'
import gulp from '@sequencemedia/gulp'
import debug from 'gulp-debug'
import vinylPaths from 'vinyl-paths'
import del from 'del'

import {
  currentDir,
  sourcePath,
  targetPath
} from '#config/gulp/paths'

import handleError from '#config/gulp/handle-error'

const buildSourcePath = path.relative(currentDir, sourcePath)
const buildTargetPath = path.relative(currentDir, targetPath)

export function cleanFonts () {
  return (
    gulp.src(path.join(buildTargetPath, 'fonts/*'), { read: false })
      .pipe(vinylPaths((paths) => del(paths, { force: true })))
  )
}

export function fonts () {
  return (
    gulp.src(path.join(buildSourcePath, 'fonts/**/*.*'))
      .pipe(gulp.dest(path.join(buildTargetPath, 'fonts')))
      .pipe(debug({ title: 'Fonts' }))
  )
}

export function watchFonts () {
  return (
    gulp.watch(
      path.join(buildSourcePath, 'fonts/**/*.*'),
      {
        name: 'fonts-watch',
        cwd: currentDir
      },
      gulp.series(cleanFonts, fonts)
    )
      .on('error', handleError)
  )
}
