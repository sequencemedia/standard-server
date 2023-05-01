import debug from 'debug'

import {
  call,
  put,
  takeLatest
} from 'redux-saga/effects'

import {
  LATEST_ORDER,
  latestOrderFulfilled,
  latestOrderRejected
} from '#client/app/actions/music/top-songs'

import * as api from '#client/api/music'

const log = debug('@sequencemedia:client:app:sagas:music:top-songs')

log('`watchLatestOrder` is awake')

function * latestOrderSaga ({ feedType, order }) {
  log('latestOrderSaga')

  try {
    const { items = [] } = yield call(api.latest, feedType)

    yield put(latestOrderFulfilled({ feedType, order, items }))
  } catch (e) {
    const exception = { status: 'ERROR', e }

    yield put(latestOrderRejected(exception))
  }
}

export default function * watchLatestOrder () {
  yield takeLatest(LATEST_ORDER, latestOrderSaga)
}
