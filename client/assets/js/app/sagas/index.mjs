import {
  all
} from 'redux-saga/effects'

import topAlbumsSagas from './music/top-albums/index.mjs'
import topSongsSagas from './music/top-songs/index.mjs'
import hotTracksSagas from './music/hot-tracks/index.mjs'
import newReleasesSagas from './music/new-releases/index.mjs'
import comingSoonSagas from './music/coming-soon/index.mjs'

export default function * rootSaga () {
  yield all([
    ...topAlbumsSagas,
    ...topSongsSagas,
    ...hotTracksSagas,
    ...newReleasesSagas,
    ...comingSoonSagas
  ])
}
