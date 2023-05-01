import path from 'node:path'
import gulp from '@sequencemedia/gulp'
import server from 'gulp-develop-server'

import {
  cleanFonts,
  fonts as buildFonts,
  watchFonts,
  cleanIcons,
  icons as buildIcons,
  watchIcons,
  cleanCss,
  css as buildCss,
  watchCss
} from '#config/gulp/build'

import {
  transform
} from '#config/gulp/transform'

import {
  handleError
} from './config/gulp/handle-error.mjs'

const clientPath = path.resolve('./client')
const serverPath = path.resolve('./server')
const mainPath = path.resolve('./main.mjs')

gulp
  .task('clean:fonts', cleanFonts)

gulp
  .task('build:fonts', gulp.series('clean:fonts', buildFonts))

gulp
  .task('watch:fonts', gulp.series('build:fonts', watchFonts))

gulp
  .task('clean:icons', cleanIcons)

gulp
  .task('build:icons', gulp.series('clean:icons', buildIcons))

gulp
  .task('watch:icons', gulp.series('build:icons', watchIcons))

gulp
  .task('clean:css', cleanCss)

gulp
  .task('build:css', gulp.series('clean:css', buildCss))

gulp
  .task('watch:css', gulp.series('build:css', watchCss))

gulp
  .task('clean', gulp.series('clean:fonts', 'clean:icons', 'clean:css'))

gulp
  .task('build', gulp.series('build:fonts', 'build:icons', 'build:css'))

gulp
  .task('watch', gulp.parallel('watch:fonts', 'watch:icons', 'watch:css'))

gulp
  .task('transform', transform)

gulp
  .task('server-restart', (next) => server.restart(next))

gulp
  .task('server-watch', () => (
    gulp
      .watch([
        clientPath.concat('/**/*'),
        serverPath.concat('/**/*'),
        mainPath
      ], { name: 'server-watch' }, gulp.series('build', 'server-restart'))
      .on('error', handleError)
  ))

gulp
  .task('server-listen', (next) => server.listen({ path: mainPath, args: process.argv.slice(2), execArgs: ['--harmony', '--colors'] }, next))

gulp
  .task('default', gulp.parallel('server-watch', 'server-listen'))
