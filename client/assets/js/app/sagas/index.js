import {
  all
} from 'redux-saga/effects'

import {
  watchChange,
  watchChangeOrder,
  watchUpdate,
  watchUpdateOrder
} from './music'

export default function * rootSaga () {
  yield all([
    watchChange(),
    watchChangeOrder(),
    watchUpdate(),
    watchUpdateOrder()
  ])
}
