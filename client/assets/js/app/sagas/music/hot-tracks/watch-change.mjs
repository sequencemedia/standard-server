import debug from 'debug'

import {
  call,
  put,
  takeLatest
} from 'redux-saga/effects'

import {
  CHANGE,
  changeFulfilled,
  changeRejected
} from '#client/app/actions/music/hot-tracks'

import * as api from '#client/api/music'

const log = debug('@sequencemedia:client:app:sagas:music:hot-tracks')

log('`watchChange` is awake')

function * changeSaga ({ feedType }) {
  log('changeSaga')

  try {
    const response = yield call(api.change, feedType)

    yield put(changeFulfilled(response))
  } catch (e) {
    const exception = { status: 'ERROR', e }

    yield put(changeRejected(exception))
  }
}

export default function * watchChange () {
  yield takeLatest(CHANGE, changeSaga)
}
