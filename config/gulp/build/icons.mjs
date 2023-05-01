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

export function cleanIcons () {
  return (
    gulp.src(path.join(buildTargetPath, 'icons/*'), { read: false })
      .pipe(vinylPaths((paths) => del(paths, { force: true })))
  )
}

export function icons () {
  return (
    gulp.src(path.join(buildSourcePath, 'icons/**/*.*'))
      .pipe(gulp.dest(path.join(buildTargetPath, 'images')))
      .pipe(debug({ title: 'Icons' }))
  )
}

export function watchIcons () {
  return (
    gulp.watch(
      path.join(buildSourcePath, 'icons/**/*.*'),
      {
        name: 'icons-watch',
        cwd: currentDir
      },
      gulp.series(cleanIcons, icons)
    )
      .on('error', handleError)
  )
}
