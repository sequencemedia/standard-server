import path from 'path'
import gulp from 'gulp'
import debug from 'gulp-debug'
import vinylPaths from 'vinyl-paths'
import del from 'del'

import {
  modulePath,
  sourcePath,
  targetPath
} from '~/config/gulp/paths'

import handleError from '~/config/gulp/handle-error'

const buildSourcePath = path.relative(modulePath, sourcePath)
const buildTargetPath = path.relative(modulePath, targetPath)

export function iconsClean () {
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

export function iconsWatch () {
  return (
    gulp.watch(
      path.join(buildSourcePath, 'icons/**/*.*'),
      {
        name: 'icons-watch',
        cwd: modulePath
      },
      gulp.series(iconsClean, icons)
    )
      .on('error', handleError)
  )
}
