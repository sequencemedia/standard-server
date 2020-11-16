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
} from '@sequencemedia/app/actions/music/new-releases'

import * as api from '@sequencemedia/api/music'

const log = debug('@sequencemedia/app:sagas:music:new-releases')

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
