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
} from '@sequencemedia/app/actions/music/hot-tracks'

import * as api from '@sequencemedia/api/music'

const log = debug('@sequencemedia/app:sagas:music:hot-tracks')

log('`watchLatestOrder` is awake')

function * latestOrderSaga ({ feedType, order }) {
  log('latestOrderSaga')

  try {
    const response = yield call(api.latestOrder, feedType, order)

    yield put(latestOrderFulfilled(response))
  } catch (e) {
    const exception = { status: 'ERROR', e }

    yield put(latestOrderRejected(exception))
  }
}

export default function * watchLatestOrder () {
  yield takeLatest(LATEST_ORDER, latestOrderSaga)
}
