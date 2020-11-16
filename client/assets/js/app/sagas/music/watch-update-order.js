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
  UPDATE_ORDER,
  updateOrderFulfilled,
  updateOrderRejected
} from '@sequencemedia/app/actions/music'

import {
  updateOrder as topAlbumsUpdateOrder,
  updateOrderFulfilled as topAlbumsUpdateOrderFulfilled,
  updateOrderRejected as topAlbumsUpdateOrderRejected
} from '@sequencemedia/app/actions/music/top-albums'

import {
  updateOrder as topSongsUpdateOrder,
  updateOrderFulfilled as topSongsUpdateOrderFulfilled,
  updateOrderRejected as topSongsUpdateOrderRejected
} from '@sequencemedia/app/actions/music/top-songs'

import {
  updateOrder as hotTracksUpdateOrder,
  updateOrderFulfilled as hotTracksUpdateOrderFulfilled,
  updateOrderRejected as hotTracksUpdateOrderRejected
} from '@sequencemedia/app/actions/music/hot-tracks'

import {
  updateOrder as newReleasesUpdateOrder,
  updateOrderFulfilled as newReleasesUpdateOrderFulfilled,
  updateOrderRejected as newReleasesUpdateOrderRejected
} from '@sequencemedia/app/actions/music/new-releases'

import {
  updateOrder as comingSoonUpdateOrder,
  updateOrderFulfilled as comingSoonUpdateOrderFulfilled,
  updateOrderRejected as comingSoonUpdateOrderRejected
} from '@sequencemedia/app/actions/music/coming-soon'

import * as api from '@sequencemedia/api/music'

const log = debug('@sequencemedia/app:sagas:music')

function * updateOrderSaga ({ feedType, order }) {
  log('updateOrderSaga')

  try {
    switch (feedType) {
      case TOP_ALBUMS:
        yield put(topAlbumsUpdateOrder(feedType, order))
        break
      case TOP_SONGS:
        yield put(topSongsUpdateOrder(feedType, order))
        break
      case HOT_TRACKS:
        yield put(hotTracksUpdateOrder(feedType, order))
        break
      case NEW_RELEASES:
        yield put(newReleasesUpdateOrder(feedType, order))
        break
      case COMING_SOON:
        yield put(comingSoonUpdateOrder(feedType, order))
        break
    }

    const response = yield call(api.updateOrder, feedType, order)

    yield put(updateOrderFulfilled(response))

    switch (feedType) {
      case TOP_ALBUMS:
        return yield put(topAlbumsUpdateOrderFulfilled(response))
      case TOP_SONGS:
        return yield put(topSongsUpdateOrderFulfilled(response))
      case HOT_TRACKS:
        return yield put(hotTracksUpdateOrderFulfilled(response))
      case NEW_RELEASES:
        return yield put(newReleasesUpdateOrderFulfilled(response))
      case COMING_SOON:
        return yield put(comingSoonUpdateOrderFulfilled(response))
    }
  } catch (e) {
    const exception = { status: 'ERROR', e }

    yield put(updateOrderRejected(exception))

    switch (feedType) {
      case TOP_ALBUMS:
        return yield put(topAlbumsUpdateOrderRejected(exception))
      case TOP_SONGS:
        return yield put(topSongsUpdateOrderRejected(exception))
      case HOT_TRACKS:
        return yield put(hotTracksUpdateOrderRejected(exception))
      case NEW_RELEASES:
        return yield put(newReleasesUpdateOrderRejected(exception))
      case COMING_SOON:
        return yield put(comingSoonUpdateOrderRejected(exception))
    }
  }
}

export default function * watchUpdateOrder () {
  yield takeLatest(UPDATE_ORDER, updateOrderSaga)
}
