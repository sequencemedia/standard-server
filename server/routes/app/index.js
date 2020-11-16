import debug from 'debug'

import Boom from '@hapi/boom'

import fetch from 'isomorphic-fetch'

import {
  configureStore
} from '@sequencemedia/app/store'

import routes from '@sequencemedia/app/routes'

import {
  renderToString
} from '@sequencemedia/react-router-redux-render'

import uid from '~/server/routes/common/pre/uid'

const log = debug('@sequencemedia:server:routes:app')

log('`@sequencemedia:server:routes:app` is awake')

function handleError (e) {
  log(e)

  return (Boom.isBoom(e))
    ? e
    : Boom.boomify(e, { statusCode: 500, message: 'Server error' })
}

function renderFeedTypeFor (pathname) {
  return function renderFeedType ({ feedType, items }) {
    const state = { music: { feedType }, [feedType]: { feedType, items } }

    return {
      app: renderToString(configureStore(state), { location: pathname }, routes),
      state
    }
  }
}

function renderFeedTypeOrderFor (pathname) {
  return function renderFeedTypeOrder ({ feedType, order, items }) {
    const state = { music: { feedType, order }, [feedType]: { feedType, order, items } }

    return {
      app: renderToString(configureStore(state), { location: pathname }, routes),
      state
    }
  }
}

export default function getAppRoutes (uri = 'http://localhost:5000') {
  return [
    {
      method: 'GET',
      path: '/{feedType?}',
      handler ({ pre: { uid }, params: { feedType = 'top-albums' }, url: { pathname = '/' } }, h) {
        log('/{feedType?}')

        return (
          fetch(`${uri}/api/change/${feedType}`, {
            headers: {
              authorization: `Bearer: ${uid}`
            }
          })
            .then((response) => response.json())
            .then(renderFeedTypeFor(pathname))
            .then((context) => h.view('index', context))
            .catch(handleError)
        )
      },
      config: {
        pre: [
          uid
        ]
      }
    },
    {
      method: 'GET',
      path: '/{feedType}/{order}',
      handler ({ pre: { uid }, params: { feedType = 'top-albums', order = 'by-none' }, url: { pathname = '/' } }, h) {
        log('/{feedType}/{order}')

        return (
          fetch(`${uri}/api/change/${feedType}/${order}`, {
            headers: {
              authorization: `Bearer: ${uid}`
            }
          })
            .then((response) => response.json())
            .then(renderFeedTypeOrderFor(pathname))
            .then((context) => h.view('index', context))
            .catch(handleError)
        )
      },
      config: {
        pre: [
          uid
        ]
      }
    },
    {
      method: 'GET',
      path: '/latest/{feedType?}',
      handler ({ pre: { uid }, params: { feedType = 'top-albums' }, url: { pathname = '/' } }, h) {
        log('/latest/{feedType?}')

        return (
          fetch(`${uri}/api/latest/${feedType}`, {
            headers: {
              authorization: `Bearer: ${uid}`
            }
          })
            .then((response) => response.json())
            .then(renderFeedTypeFor(pathname))
            .then((context) => h.view('index', context))
            .catch(handleError)
        )
      },
      config: {
        pre: [
          uid
        ]
      }
    },
    {
      method: 'GET',
      path: '/latest/{feedType}/{order}',
      handler ({ pre: { uid }, params: { feedType = 'top-albums', order = 'by-none' }, url: { pathname = '/' } }, h) {
        log('/latest/{feedType}/{order}')

        return (
          fetch(`${uri}/api/latest/${feedType}/${order}`, {
            headers: {
              authorization: `Bearer: ${uid}`
            }
          })
            .then((response) => response.json())
            .then(renderFeedTypeOrderFor(pathname))
            .then((context) => h.view('index', context))
            .catch(handleError)
        )
      },
      config: {
        pre: [
          uid
        ]
      }
    }
  ]
}
