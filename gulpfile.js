require('module-alias/register')
require('@babel/register')

const debug = require('debug')
const path = require('path')
const gulp = require('gulp')
const server = require('gulp-develop-server')

const {
  fontsClean: buildFontsClean,
  fonts: buildFonts,
  fontsWatch: buildFontsWatch,
  iconsClean: buildIconsClean,
  icons: buildIcons,
  iconsWatch: buildIconsWatch,
  cssClean: buildCssClean,
  css: buildCss,
  cssWatch: buildCssWatch
} = require('~/config/gulp/build')

const {
  transform
} = require('~/config/gulp/transform')

const {
  handleError
} = require('~/config/gulp/handle-error')

const {
  clientPath,
  serverPath
} = require('~/config/paths')

const appPath = path.resolve('./app.js')

const {
  env: {
    DEBUG = '@sequencemedia:config:gulp:handle-error'
  }
} = process

debug.enable(DEBUG)

gulp
  .task('build:fonts:clean', buildFontsClean)

gulp
  .task('build:fonts', gulp.series('build:fonts:clean', buildFonts))

gulp
  .task('build:fonts:watch', gulp.series('build:fonts', buildFontsWatch))

gulp
  .task('build:icons:clean', buildIconsClean)

gulp
  .task('build:icons', gulp.series('build:icons:clean', buildIcons))

gulp
  .task('build:icons:watch', gulp.series('build:icons', buildIconsWatch))

gulp
  .task('build:css:clean', buildCssClean)

gulp
  .task('build:css', gulp.series('build:css:clean', buildCss))

gulp
  .task('build:css:watch', gulp.series('build:css', buildCssWatch))

gulp
  .task('build:clean', gulp.series('build:fonts:clean', 'build:icons:clean', 'build:css:clean'))

gulp
  .task('build', gulp.series('build:fonts', 'build:icons', 'build:css'))

gulp
  .task('build:watch', gulp.parallel('build:fonts:watch', 'build:icons:watch', 'build:css:watch'))

gulp
  .task('transform', transform)

gulp
  .task('watch', () => (
    gulp
      .watch([
        clientPath.concat('/**/*'),
        serverPath.concat('/**/*'),
        appPath
      ], { name: 'watch' }, gulp.series('server-restart'))
      .on('error', handleError)
  ))

gulp
  .task('server-listen', (next) => server.listen({ path: appPath, args: process.argv.slice(2), execArgs: ['--harmony', '--colors'] }, next))

gulp
  .task('server-restart', (next) => server.restart(next))

gulp
  .task('default', gulp.parallel('watch', 'server-listen'))
