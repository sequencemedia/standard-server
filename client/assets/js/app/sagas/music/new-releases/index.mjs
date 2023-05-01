import watchChange from './watch-change.mjs'
import watchChangeOrder from './watch-change-order.mjs'
import watchLatest from './watch-latest.mjs'
import watchLatestOrder from './watch-latest-order.mjs'

export default [
  watchChange(),
  watchChangeOrder(),
  watchLatest(),
  watchLatestOrder()
]
