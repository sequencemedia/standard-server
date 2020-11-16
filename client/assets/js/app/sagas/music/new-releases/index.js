import watchChange from './watch-change'
import watchChangeOrder from './watch-change-order'
import watchLatest from './watch-latest'
import watchLatestOrder from './watch-latest-order'

export default [
  watchChange(),
  watchChangeOrder(),
  watchLatest(),
  watchLatestOrder()
]
