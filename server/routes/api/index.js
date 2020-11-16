import debug from 'debug'

import getCacheForUID from '~/server/routes/common/cache'
import uid from '~/server/routes/common/pre/uid'

import {
  getFeedTypeFromApple,
  getFeedResults
} from './feed'

import sort from './sort'

const log = debug('@sequencemedia:server:routes:api')

log('`@sequencemedia:server:routes:api` is awake')

export default function getApiRoutes () {
  return [
    {
      method: 'GET',
      path: '/api/change/{feedType}',
      async handler ({ pre: { uid }, params: { feedType = 'top-albums' } }) {
        log('/api/change/{feedType}')

        try {
          /*
           *  Either we have a cache for this user or we must create one
           */
          const cache = getCacheForUID(uid)

          /*
           *  Get from user cache or fetch from Apple
           */
          const items = cache.has(feedType)
            ? cache.get(feedType)
            : getFeedResults(await getFeedTypeFromApple(feedType))

          /*
           *  Always set into cache
           */
          cache.set(feedType, items)

          /*
           *  Return items unsorted
           */
          return { feedType, items }
        } catch (e) {
          log(e)

          return { status: 'ERROR' }
        }
      },
      config: {
        pre: [
          uid
        ]
      }
    },
    {
      method: 'GET',
      path: '/api/change/{feedType}/{order}',
      async handler ({ pre: { uid }, params: { feedType = 'top-albums', order = 'by-none' } }) {
        log('/api/change/{feedType}/{order}')

        try {
          /*
           *  Either we have a cache for this user or we must create one
           */
          const cache = getCacheForUID(uid)

          /*
           *  Get from user cache or fetch from Apple
           */
          const items = cache.has(feedType)
            ? cache.get(feedType)
            : getFeedResults(await getFeedTypeFromApple(feedType))

          /*
           *  Always set into cache
           */
          cache.set(feedType, items)

          /*
           *  Return items sorted
           */
          return { feedType, order, items: sort(order, items) }
        } catch (e) {
          log(e)

          return { status: 'ERROR' }
        }
      },
      config: {
        pre: [
          uid
        ]
      }
    },
    {
      method: 'GET',
      path: '/api/latest/{feedType}',
      async handler ({ pre: { uid }, params: { feedType = 'top-albums' } }) {
        log('/api/latest/{feedType}')

        try {
          /*
           *  Either we have a cache for this user or we must create one
           */
          const cache = getCacheForUID(uid)

          /*
           *  Always fetch from Apple
           */
          const items = getFeedResults(await getFeedTypeFromApple(feedType))

          /*
           *  Always set into cache
           */
          cache.set(feedType, items)

          /*
           *  Return items sorted
           */
          return { feedType, items }
        } catch (e) {
          log(e)

          return { status: 'ERROR' }
        }
      },
      config: {
        pre: [
          uid
        ]
      }
    },
    {
      method: 'GET',
      path: '/api/latest/{feedType}/{order}',
      async handler ({ pre: { uid }, params: { feedType = 'top-albums', order = 'by-none' } }) {
        log('/api/latest/{feedType}/{order}')

        try {
          /*
           *  Either we have a cache for this user or we must create one
           */
          const cache = getCacheForUID(uid)

          /*
           *  Always fetch from Apple
           */
          const items = getFeedResults(await getFeedTypeFromApple(feedType))

          /*
           *  Always set into cache
           */
          cache.set(feedType, items)

          /*
           *  Return items sorted
           */
          return { feedType, order, items: sort(order, items) }
        } catch (e) {
          log(e)

          return { status: 'ERROR' }
        }
      },
      config: {
        pre: [
          uid
        ]
      }
    }

  ]
}
