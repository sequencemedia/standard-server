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
  LATEST_ORDER,
  latestOrderFulfilled,
  latestOrderRejected
} from '@sequencemedia/app/actions/music'

import {
  latestOrder as topAlbumsLatestOrder,
  latestOrderFulfilled as topAlbumsLatestOrderFulfilled,
  latestOrderRejected as topAlbumsLatestOrderRejected
} from '@sequencemedia/app/actions/music/top-albums'

import {
  latestOrder as topSongsLatestOrder,
  latestOrderFulfilled as topSongsLatestOrderFulfilled,
  latestOrderRejected as topSongsLatestOrderRejected
} from '@sequencemedia/app/actions/music/top-songs'

import {
  latestOrder as hotTracksLatestOrder,
  latestOrderFulfilled as hotTracksLatestOrderFulfilled,
  latestOrderRejected as hotTracksLatestOrderRejected
} from '@sequencemedia/app/actions/music/hot-tracks'

import {
  latestOrder as newReleasesLatestOrder,
  latestOrderFulfilled as newReleasesLatestOrderFulfilled,
  latestOrderRejected as newReleasesLatestOrderRejected
} from '@sequencemedia/app/actions/music/new-releases'

import {
  latestOrder as comingSoonLatestOrder,
  latestOrderFulfilled as comingSoonLatestOrderFulfilled,
  latestOrderRejected as comingSoonLatestOrderRejected
} from '@sequencemedia/app/actions/music/coming-soon'

import * as api from '@sequencemedia/api/music'

const log = debug('@sequencemedia/app:sagas:music')

function * latestOrderSaga ({ feedType, order }) {
  log('latestOrderSaga')

  try {
    switch (feedType) {
      case TOP_ALBUMS:
        yield put(topAlbumsLatestOrder(feedType, order))
        break
      case TOP_SONGS:
        yield put(topSongsLatestOrder(feedType, order))
        break
      case HOT_TRACKS:
        yield put(hotTracksLatestOrder(feedType, order))
        break
      case NEW_RELEASES:
        yield put(newReleasesLatestOrder(feedType, order))
        break
      case COMING_SOON:
        yield put(comingSoonLatestOrder(feedType, order))
        break
    }

    const response = yield call(api.latestOrder, feedType, order)

    yield put(latestOrderFulfilled(response))

    switch (feedType) {
      case TOP_ALBUMS:
        return yield put(topAlbumsLatestOrderFulfilled(response))
      case TOP_SONGS:
        return yield put(topSongsLatestOrderFulfilled(response))
      case HOT_TRACKS:
        return yield put(hotTracksLatestOrderFulfilled(response))
      case NEW_RELEASES:
        return yield put(newReleasesLatestOrderFulfilled(response))
      case COMING_SOON:
        return yield put(comingSoonLatestOrderFulfilled(response))
    }
  } catch (e) {
    const exception = { status: 'ERROR', e }

    yield put(latestOrderRejected(exception))

    switch (feedType) {
      case TOP_ALBUMS:
        return yield put(topAlbumsLatestOrderRejected(exception))
      case TOP_SONGS:
        return yield put(topSongsLatestOrderRejected(exception))
      case HOT_TRACKS:
        return yield put(hotTracksLatestOrderRejected(exception))
      case NEW_RELEASES:
        return yield put(newReleasesLatestOrderRejected(exception))
      case COMING_SOON:
        return yield put(comingSoonLatestOrderRejected(exception))
    }
  }
}

export default function * watchLatestOrder () {
  yield takeLatest(LATEST_ORDER, latestOrderSaga)
}
