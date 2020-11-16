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
  LATEST,
  latestFulfilled,
  latestRejected
} from '@sequencemedia/app/actions/music'

import {
  latest as topAlbumsLatest,
  latestFulfilled as topAlbumsLatestFulfilled,
  latestRejected as topAlbumsLatestRejected
} from '@sequencemedia/app/actions/music/top-albums'

import {
  latest as topSongsLatest,
  latestFulfilled as topSongsLatestFulfilled,
  latestRejected as topSongsLatestRejected
} from '@sequencemedia/app/actions/music/top-songs'

import {
  latest as hotTracksLatest,
  latestFulfilled as hotTracksLatestFulfilled,
  latestRejected as hotTracksLatestRejected
} from '@sequencemedia/app/actions/music/hot-tracks'

import {
  latest as newReleasesLatest,
  latestFulfilled as newReleasesLatestFulfilled,
  latestRejected as newReleasesLatestRejected
} from '@sequencemedia/app/actions/music/new-releases'

import {
  latest as comingSoonLatest,
  latestFulfilled as comingSoonLatestFulfilled,
  latestRejected as comingSoonLatestRejected
} from '@sequencemedia/app/actions/music/coming-soon'

import * as api from '@sequencemedia/api/music'

const log = debug('@sequencemedia/app:sagas:music')

function * latestSaga ({ feedType }) {
  log('latestSaga')

  try {
    switch (feedType) {
      case TOP_ALBUMS:
        yield put(topAlbumsLatest(feedType))
        break
      case TOP_SONGS:
        yield put(topSongsLatest(feedType))
        break
      case HOT_TRACKS:
        yield put(hotTracksLatest(feedType))
        break
      case NEW_RELEASES:
        yield put(newReleasesLatest(feedType))
        break
      case COMING_SOON:
        yield put(comingSoonLatest(feedType))
        break
    }

    const response = yield call(api.latest, feedType)

    yield put(latestFulfilled(response))

    switch (feedType) {
      case TOP_ALBUMS:
        return yield put(topAlbumsLatestFulfilled(response))
      case TOP_SONGS:
        return yield put(topSongsLatestFulfilled(response))
      case HOT_TRACKS:
        return yield put(hotTracksLatestFulfilled(response))
      case NEW_RELEASES:
        return yield put(newReleasesLatestFulfilled(response))
      case COMING_SOON:
        return yield put(comingSoonLatestFulfilled(response))
    }
  } catch (e) {
    const exception = { status: 'ERROR', e }

    yield put(latestRejected(exception))

    switch (feedType) {
      case TOP_ALBUMS:
        return yield put(topAlbumsLatestRejected(exception))
      case TOP_SONGS:
        return yield put(topSongsLatestRejected(exception))
      case HOT_TRACKS:
        return yield put(hotTracksLatestRejected(exception))
      case NEW_RELEASES:
        return yield put(newReleasesLatestRejected(exception))
      case COMING_SOON:
        return yield put(comingSoonLatestRejected(exception))
    }
  }
}

export default function * watchLatest () {
  yield takeLatest(LATEST, latestSaga)
}
