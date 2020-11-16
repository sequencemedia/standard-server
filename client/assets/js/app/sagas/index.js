import {
  all
} from 'redux-saga/effects'

import topAlbumsSagas from './music/top-albums'
import topSongsSagas from './music/top-songs'
import hotTracksSagas from './music/hot-tracks'
import newReleasesSagas from './music/new-releases'
import comingSoonSagas from './music/coming-soon'

export default function * rootSaga () {
  yield all([
    ...topAlbumsSagas,
    ...topSongsSagas,
    ...hotTracksSagas,
    ...newReleasesSagas,
    ...comingSoonSagas
  ])
}
