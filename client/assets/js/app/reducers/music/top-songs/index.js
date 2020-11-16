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
  UPDATE,

  CHANGE_ORDER,
  UPDATE_ORDER,

  CHANGE_FULFILLED,
  CHANGE_ORDER_FULFILLED,
  UPDATE_FULFILLED,
  UPDATE_ORDER_FULFILLED,

  CHANGE_REJECTED,
  CHANGE_ORDER_REJECTED,
  UPDATE_REJECTED,
  UPDATE_ORDER_REJECTED
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
export const update = (state = {}, { feedType } = {}) => ({ ...state, feedType, status: PENDING })

/*
 *  Get all from state
 *  Set `feedType` `order` from action
 */
export const updateOrder = (state = {}, { feedType, order } = {}) => ({ ...state, feedType, order, status: PENDING })

export function changeFulfilled ({ feedType = TOP_SONGS } = {}, { response = {} } = {}) {
  log('changeFulfilled')

  return { feedType, ...response, status: RESOLVED }
}

export function changeOrderFulfilled ({ feedType = TOP_SONGS } = {}, { response = {} } = {}) {
  log('changeOrderFulfilled')

  return { feedType, ...response, status: RESOLVED }
}

export function updateFulfilled ({ feedType = TOP_SONGS } = {}, { response = {} } = {}) {
  log('updateFulfilled')

  return { feedType, ...response, status: RESOLVED }
}

export function updateOrderFulfilled ({ feedType = TOP_SONGS } = {}, { response = {} } = {}) {
  log('updateOrderFulfilled')

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

export function updateRejected ({ feedType = TOP_SONGS } = {}, { error = {} } = {}) {
  log('updateRejected')

  return { feedType, exception: { ...error }, status: REJECTED }
}

export function updateOrderRejected ({ feedType = TOP_SONGS, order } = {}, { error = {} } = {}) {
  log('updateOrderRejected')

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
    case UPDATE:

      return update(state, action)
    case UPDATE_ORDER:

      return updateOrder(state, action)
    case CHANGE_FULFILLED:

      return changeFulfilled(state, action)
    case UPDATE_FULFILLED:

      return updateFulfilled(state, action)
    case CHANGE_ORDER_FULFILLED:

      return changeOrderFulfilled(state, action)
    case UPDATE_ORDER_FULFILLED:

      return updateOrderFulfilled(state, action)
    case CHANGE_REJECTED:

      return changeRejected(state, action)
    case CHANGE_ORDER_REJECTED:

      return changeOrderRejected(state, action)
    case UPDATE_REJECTED:

      return updateRejected(state, action)
    case UPDATE_ORDER_REJECTED:

      return updateOrderRejected(state, action)
    default:

      return state
  }
}
