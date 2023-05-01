import debug from 'debug'

import {
  call,
  put,
  takeLatest
} from 'redux-saga/effects'

import {
  CHANGE_ORDER,
  changeOrderFulfilled,
  changeOrderRejected
} from '#client/app/actions/music/top-songs'

import * as api from '#client/api/music'

const log = debug('@sequencemedia:client:app:sagas:music:top-songs')

log('`watchChangeOrder` is awake')

function * changeOrderSaga ({ feedType, order }) {
  log('changeOrderSaga')

  try {
    const { items = [] } = yield call(api.change, feedType)

    yield put(changeOrderFulfilled({ feedType, order, items }))
  } catch (e) {
    const exception = { status: 'ERROR', e }

    yield put(changeOrderRejected(exception))
  }
}

export default function * watchChangeOrder () {
  yield takeLatest(CHANGE_ORDER, changeOrderSaga)
}
