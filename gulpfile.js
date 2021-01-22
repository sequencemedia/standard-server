require('module-alias/register')
require('@babel/register')

const path = require('path')
const gulp = require('gulp')
const server = require('gulp-develop-server')

const {
  cleanFonts,
  fonts: buildFonts,
  watchFonts,
  cleanIcons,
  icons: buildIcons,
  watchIcons,
  cleanCss,
  css: buildCss,
  watchCss
} = require('~/config/gulp/build')

const {
  transform
} = require('~/config/gulp/transform')

const {
  handleError
} = require('./config/gulp/handle-error')

const clientPath = path.resolve('./client')
const serverPath = path.resolve('./server')
const appPath = path.resolve('./app.js')

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
        appPath
      ], { name: 'server-watch' }, gulp.series('build', 'server-restart'))
      .on('error', handleError)
  ))

gulp
  .task('server-listen', (next) => server.listen({ path: appPath, args: process.argv.slice(2), execArgs: ['--harmony', '--colors'] }, next))

gulp
  .task('default', gulp.parallel('server-watch', 'server-listen'))
