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
  CHANGE_ORDER,
  changeOrderFulfilled,
  changeOrderRejected
} from '@sequencemedia/app/actions/music'

import {
  changeOrder as topAlbumsChangeOrder,
  changeOrderFulfilled as topAlbumsChangeOrderFulfilled,
  changeOrderRejected as topAlbumsChangeOrderRejected
} from '@sequencemedia/app/actions/music/top-albums'

import {
  changeOrder as topSongsChangeOrder,
  changeOrderFulfilled as topSongsChangeOrderFulfilled,
  changeOrderRejected as topSongsChangeOrderRejected
} from '@sequencemedia/app/actions/music/top-songs'

import {
  changeOrder as hotTracksChangeOrder,
  changeOrderFulfilled as hotTracksChangeOrderFulfilled,
  changeOrderRejected as hotTracksChangeOrderRejected
} from '@sequencemedia/app/actions/music/hot-tracks'

import {
  changeOrder as newReleasesChangeOrder,
  changeOrderFulfilled as newReleasesChangeOrderFulfilled,
  changeOrderRejected as newReleasesChangeOrderRejected
} from '@sequencemedia/app/actions/music/new-releases'

import {
  changeOrder as comingSoonChangeOrder,
  changeOrderFulfilled as comingSoonChangeOrderFulfilled,
  changeOrderRejected as comingSoonChangeOrderRejected
} from '@sequencemedia/app/actions/music/coming-soon'

import * as api from '@sequencemedia/api/music'

const log = debug('@sequencemedia/app:sagas:music')

function * changeOrderSaga ({ feedType, order }) {
  log('changeOrderSaga')

  try {
    switch (feedType) {
      case TOP_ALBUMS:
        yield put(topAlbumsChangeOrder(feedType, order))
        break
      case TOP_SONGS:
        yield put(topSongsChangeOrder(feedType, order))
        break
      case HOT_TRACKS:
        yield put(hotTracksChangeOrder(feedType, order))
        break
      case NEW_RELEASES:
        yield put(newReleasesChangeOrder(feedType, order))
        break
      case COMING_SOON:
        yield put(comingSoonChangeOrder(feedType, order))
        break
    }

    const response = yield call(api.changeOrder, feedType, order)

    yield put(changeOrderFulfilled(response))

    switch (feedType) {
      case TOP_ALBUMS:
        return yield put(topAlbumsChangeOrderFulfilled(response))
      case TOP_SONGS:
        return yield put(topSongsChangeOrderFulfilled(response))
      case HOT_TRACKS:
        return yield put(hotTracksChangeOrderFulfilled(response))
      case NEW_RELEASES:
        return yield put(newReleasesChangeOrderFulfilled(response))
      case COMING_SOON:
        return yield put(comingSoonChangeOrderFulfilled(response))
    }
  } catch (e) {
    const exception = { status: 'ERROR', e }

    yield put(changeOrderRejected(exception))

    switch (feedType) {
      case TOP_ALBUMS:
        return yield put(topAlbumsChangeOrderRejected(exception))
      case TOP_SONGS:
        return yield put(topSongsChangeOrderRejected(exception))
      case HOT_TRACKS:
        return yield put(hotTracksChangeOrderRejected(exception))
      case NEW_RELEASES:
        return yield put(newReleasesChangeOrderRejected(exception))
      case COMING_SOON:
        return yield put(comingSoonChangeOrderRejected(exception))
    }
  }
}

export default function * watchChangeOrder () {
  yield takeLatest(CHANGE_ORDER, changeOrderSaga)
}
