import debug from 'debug'

import {
  call,
  put,
  takeLatest
} from 'redux-saga/effects'

import {
  LATEST,
  latestFulfilled,
  latestRejected
} from '@sequencemedia/app/actions/music/hot-tracks'

import * as api from '@sequencemedia/api/music'

const log = debug('@sequencemedia/app:sagas:music:hot-tracks')

log('`watchLatest` is awake')

function * latestSaga ({ feedType }) {
  log('latestSaga')

  try {
    const response = yield call(api.latest, feedType)

    yield put(latestFulfilled(response))
  } catch (e) {
    const exception = { status: 'ERROR', e }

    yield put(latestRejected(exception))
  }
}

export default function * watchLatest () {
  yield takeLatest(LATEST, latestSaga)
}
