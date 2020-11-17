import path from 'path'
import gulp from 'gulp'
import sass from 'gulp-sass'
import debug from 'gulp-debug'

import rename from 'gulp-rename'
import postCss from 'gulp-postcss'
import normalize from 'postcss-normalize'
import scss from 'postcss-scss'
import autoprefixer from 'autoprefixer'
import nano from 'cssnano'
import cleanCss from 'gulp-clean-css'
import cssPurge from 'gulp-css-purge'
import sourcemaps from 'gulp-sourcemaps'

import {
  version
} from '~/package'

import {
  currentDir,
  sourcePath,
  targetPath
} from '~/config/gulp/paths'

import handleError from '~/config/gulp/handle-error'

const buildSourcePath = path.relative(currentDir, sourcePath)
const buildTargetPath = path.relative(currentDir, targetPath)

function getTransformForSass () {
  return (
    sass({
      outputStyle: 'nested'
    }).on('error', sass.logError)
  )
}

function getTransformForPostCss () {
  return (
    postCss([
      normalize(),
      autoprefixer(),
      nano()
    ], { syntax: scss })
  )
}

function getTransformForCleanCss () {
  return (
    cleanCss({
      format: 'beautify',
      compatibility: 'ie9',
      specialComments: 0
    })
  )
}

function getTransformForCssPurge () {
  return (
    cssPurge({
      trim: false, // we have chosen to beautify not minify in cleanCSS, so let's not minify here
      trim_last_semicolon: true, // cleanCSS does this for us; cssPurge puts it back (unless we prevent it, here)
      shorten: false, // 'true' kills some inline `<svg />` elements
      format: false,
      verbose: false
    })
  )
}

export default function cssFromSass () {
  return (
    gulp.src([path.join(buildSourcePath, 'sass/**/*.*'), `!${path.join(buildSourcePath, 'sass/**/_*.*')}`])
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(rename((filePath) => { filePath.basename += `-${version}` }))
      .pipe(getTransformForSass())
      .pipe(getTransformForPostCss())
      .pipe(getTransformForCleanCss())
      .pipe(getTransformForCssPurge())
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(path.join(buildTargetPath, 'stylesheets')))
      .pipe(debug({ title: 'CSS' }))
      .on('error', handleError)
  )
}
