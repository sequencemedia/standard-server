import debug from 'debug'

import {
  PENDING,
  RESOLVED,
  REJECTED
} from '@sequencemedia/app/common'

import {
  TOP_SONGS
} from '@sequencemedia/app/common/feed-type'

import {
  CHANGE,
  LATEST,

  CHANGE_ORDER,
  LATEST_ORDER,

  CHANGE_FULFILLED,
  CHANGE_ORDER_FULFILLED,
  LATEST_FULFILLED,
  LATEST_ORDER_FULFILLED,

  CHANGE_REJECTED,
  CHANGE_ORDER_REJECTED,
  LATEST_REJECTED,
  LATEST_ORDER_REJECTED
} from '@sequencemedia/app/actions/music/top-songs'

const log = debug('@sequencemedia/app:reducers:music:top-songs')

log('`topSongs` is awake')

const STATE = {
  status: PENDING,
  feedType: TOP_SONGS
}

const ACTION = {}

/*
 *  Get all from state
 *  Set `feedType` from action
 */
export const change = (state = {}, { feedType } = {}) => ({ ...state, feedType, status: PENDING })

/*
 *  Get all from state
 *  Set `feedType` `order` from action
 */
export const changeOrder = (state = {}, { feedType, order } = {}) => ({ ...state, feedType, order, status: PENDING })

/*
 *  Get all from state
 *  Set `feedType` from action
 */
export const latest = (state = {}, { feedType } = {}) => ({ ...state, feedType, status: PENDING })

/*
 *  Get all from state
 *  Set `feedType` `order` from action
 */
export const latestOrder = (state = {}, { feedType, order } = {}) => ({ ...state, feedType, order, status: PENDING })

export function changeFulfilled ({ feedType = TOP_SONGS } = {}, { response = {} } = {}) {
  log('changeFulfilled')

  return { feedType, ...response, status: RESOLVED }
}

export function changeOrderFulfilled ({ feedType = TOP_SONGS } = {}, { response = {} } = {}) {
  log('changeOrderFulfilled')

  return { feedType, ...response, status: RESOLVED }
}

export function latestFulfilled ({ feedType = TOP_SONGS } = {}, { response = {} } = {}) {
  log('latestFulfilled')

  return { feedType, ...response, status: RESOLVED }
}

export function latestOrderFulfilled ({ feedType = TOP_SONGS } = {}, { response = {} } = {}) {
  log('latestOrderFulfilled')

  return { feedType, ...response, status: RESOLVED }
}

export function changeRejected ({ feedType = TOP_SONGS } = {}, { error = {} } = {}) {
  log('changeRejected')

  return { feedType, exception: { ...error }, status: REJECTED }
}

export function changeOrderRejected ({ feedType = TOP_SONGS, order } = {}, { error = {} } = {}) {
  log('changeOrderRejected')

  return { feedType, order, exception: { ...error }, status: REJECTED }
}

export function latestRejected ({ feedType = TOP_SONGS } = {}, { error = {} } = {}) {
  log('latestRejected')

  return { feedType, exception: { ...error }, status: REJECTED }
}

export function latestOrderRejected ({ feedType = TOP_SONGS, order } = {}, { error = {} } = {}) {
  log('latestOrderRejected')

  return { feedType, order, exception: { ...error }, status: REJECTED }
}

export const initialise = (state = {}) => ({ ...state, status: RESOLVED })

/**
 *  Music Reducer
 *
 *  @param {Object} state Initial state
 *  @param {Object} action
 */
export default function feedTypeReducer (state = { ...STATE }, { type, ...action } = { ...ACTION }) {
  switch (type) {
    case CHANGE:

      return change(state, action)
    case CHANGE_ORDER:

      return changeOrder(state, action)
    case LATEST:

      return latest(state, action)
    case LATEST_ORDER:

      return latestOrder(state, action)
    case CHANGE_FULFILLED:

      return changeFulfilled(state, action)
    case LATEST_FULFILLED:

      return latestFulfilled(state, action)
    case CHANGE_ORDER_FULFILLED:

      return changeOrderFulfilled(state, action)
    case LATEST_ORDER_FULFILLED:

      return latestOrderFulfilled(state, action)
    case CHANGE_REJECTED:

      return changeRejected(state, action)
    case CHANGE_ORDER_REJECTED:

      return changeOrderRejected(state, action)
    case LATEST_REJECTED:

      return latestRejected(state, action)
    case LATEST_ORDER_REJECTED:

      return latestOrderRejected(state, action)
    default:

      return state
  }
}
