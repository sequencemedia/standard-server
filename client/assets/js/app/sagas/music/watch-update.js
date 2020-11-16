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
  UPDATE,
  updateFulfilled,
  updateRejected
} from '@sequencemedia/app/actions/music'

import {
  update as topAlbumsUpdate,
  updateFulfilled as topAlbumsUpdateFulfilled,
  updateRejected as topAlbumsUpdateRejected
} from '@sequencemedia/app/actions/music/top-albums'

import {
  update as topSongsUpdate,
  updateFulfilled as topSongsUpdateFulfilled,
  updateRejected as topSongsUpdateRejected
} from '@sequencemedia/app/actions/music/top-songs'

import {
  update as hotTracksUpdate,
  updateFulfilled as hotTracksUpdateFulfilled,
  updateRejected as hotTracksUpdateRejected
} from '@sequencemedia/app/actions/music/hot-tracks'

import {
  update as newReleasesUpdate,
  updateFulfilled as newReleasesUpdateFulfilled,
  updateRejected as newReleasesUpdateRejected
} from '@sequencemedia/app/actions/music/new-releases'

import {
  update as comingSoonUpdate,
  updateFulfilled as comingSoonUpdateFulfilled,
  updateRejected as comingSoonUpdateRejected
} from '@sequencemedia/app/actions/music/coming-soon'

import * as api from '@sequencemedia/api/music'

const log = debug('@sequencemedia/app:sagas:music')

function * updateSaga ({ feedType }) {
  log('updateSaga')

  try {
    switch (feedType) {
      case TOP_ALBUMS:
        yield put(topAlbumsUpdate(feedType))
        break
      case TOP_SONGS:
        yield put(topSongsUpdate(feedType))
        break
      case HOT_TRACKS:
        yield put(hotTracksUpdate(feedType))
        break
      case NEW_RELEASES:
        yield put(newReleasesUpdate(feedType))
        break
      case COMING_SOON:
        yield put(comingSoonUpdate(feedType))
        break
    }

    const response = yield call(api.update, feedType)

    yield put(updateFulfilled(response))

    switch (feedType) {
      case TOP_ALBUMS:
        return yield put(topAlbumsUpdateFulfilled(response))
      case TOP_SONGS:
        return yield put(topSongsUpdateFulfilled(response))
      case HOT_TRACKS:
        return yield put(hotTracksUpdateFulfilled(response))
      case NEW_RELEASES:
        return yield put(newReleasesUpdateFulfilled(response))
      case COMING_SOON:
        return yield put(comingSoonUpdateFulfilled(response))
    }
  } catch (e) {
    const exception = { status: 'ERROR', e }

    yield put(updateRejected(exception))

    switch (feedType) {
      case TOP_ALBUMS:
        return yield put(topAlbumsUpdateRejected(exception))
      case TOP_SONGS:
        return yield put(topSongsUpdateRejected(exception))
      case HOT_TRACKS:
        return yield put(hotTracksUpdateRejected(exception))
      case NEW_RELEASES:
        return yield put(newReleasesUpdateRejected(exception))
      case COMING_SOON:
        return yield put(comingSoonUpdateRejected(exception))
    }
  }
}

export default function * watchUpdate () {
  yield takeLatest(UPDATE, updateSaga)
}
