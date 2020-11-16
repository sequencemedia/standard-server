import {
  all
} from 'redux-saga/effects'

import {
  watchChange,
  watchChangeOrder,
  watchLatest,
  watchLatestOrder
} from './music'

export default function * rootSaga () {
  yield all([
    watchChange(),
    watchChangeOrder(),
    watchLatest(),
    watchLatestOrder()
  ])
}
