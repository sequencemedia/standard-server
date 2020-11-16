import debug from 'debug'

import {
  call,
  put,
  takeLatest
} from 'redux-saga/effects'

import {
  TOP_ALBUMS,
  TOP_SONGS,
  HOT_TRACKS,
  NEW_RELEASES,
  COMING_SOON
} from '@sequencemedia/app/common/feed-type'

import {
  CHANGE,
  changeFulfilled,
  changeRejected
} from '@sequencemedia/app/actions/music'

import {
  change as topAlbumsChange,
  changeFulfilled as topAlbumsChangeFulfilled,
  changeRejected as topAlbumsChangeRejected
} from '@sequencemedia/app/actions/music/top-albums'

import {
  change as topSongsChange,
  changeFulfilled as topSongsChangeFulfilled,
  changeRejected as topSongsChangeRejected
} from '@sequencemedia/app/actions/music/top-songs'

import {
  change as hotTracksChange,
  changeFulfilled as hotTracksChangeFulfilled,
  changeRejected as hotTracksChangeRejected
} from '@sequencemedia/app/actions/music/hot-tracks'

import {
  change as newReleasesChange,
  changeFulfilled as newReleasesChangeFulfilled,
  changeRejected as newReleasesChangeRejected
} from '@sequencemedia/app/actions/music/new-releases'

import {
  change as comingSoonChange,
  changeFulfilled as comingSoonChangeFulfilled,
  changeRejected as comingSoonChangeRejected
} from '@sequencemedia/app/actions/music/coming-soon'

import * as api from '@sequencemedia/api/music'

const log = debug('@sequencemedia/app:sagas:music')

function * changeSaga ({ feedType }) {
  log('changeSaga')

  try {
    switch (feedType) {
      case TOP_ALBUMS:
        yield put(topAlbumsChange(feedType))
        break
      case TOP_SONGS:
        yield put(topSongsChange(feedType))
        break
      case HOT_TRACKS:
        yield put(hotTracksChange(feedType))
        break
      case NEW_RELEASES:
        yield put(newReleasesChange(feedType))
        break
      case COMING_SOON:
        yield put(comingSoonChange(feedType))
        break
    }

    const response = yield call(api.change, feedType)

    yield put(changeFulfilled(response))

    switch (feedType) {
      case TOP_ALBUMS:
        return yield put(topAlbumsChangeFulfilled(response))
      case TOP_SONGS:
        return yield put(topSongsChangeFulfilled(response))
      case HOT_TRACKS:
        return yield put(hotTracksChangeFulfilled(response))
      case NEW_RELEASES:
        return yield put(newReleasesChangeFulfilled(response))
      case COMING_SOON:
        return yield put(comingSoonChangeFulfilled(response))
    }
  } catch (e) {
    const exception = { status: 'ERROR', e }

    yield put(changeRejected(exception))

    switch (feedType) {
      case TOP_ALBUMS:
        return yield put(topAlbumsChangeRejected(exception))
      case TOP_SONGS:
        return yield put(topSongsChangeRejected(exception))
      case HOT_TRACKS:
        return yield put(hotTracksChangeRejected(exception))
      case NEW_RELEASES:
        return yield put(newReleasesChangeRejected(exception))
      case COMING_SOON:
        return yield put(comingSoonChangeRejected(exception))
    }
  }
}

export default function * watchChange () {
  yield takeLatest(CHANGE, changeSaga)
}
