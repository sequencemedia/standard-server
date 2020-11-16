import debug from 'debug'

import {
  PENDING,
  RESOLVED,
  REJECTED
} from '@sequencemedia/app/common'

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
} from '@sequencemedia/app/actions/music'

const log = debug('@sequencemedia/app:reducers:music')

log('`music` is awake')

const STATE = {
  status: PENDING
}

const ACTION = {}

/*
 *  Get all from state
 *  Set `feedType` from action
 */
export const change = (state = {}, { feedType } = {}) => ({ ...state, feedType, status: PENDING })

/*
 *  Get all from state
 *  Set `feedType` from action
 */
export const changeOrder = (state = {}, { feedType, order } = {}) => ({ ...state, feedType, order, status: PENDING })

/*
 *  Get all from state
 *  Set `feedType` from action
 */
export const latest = (state = {}, { feedType } = {}) => ({ ...state, feedType, status: PENDING })

/*
 *  Get all from state
 *  Set `feedType` from action
 */
export const latestOrder = (state = {}, { feedType, order } = {}) => ({ ...state, feedType, order, status: PENDING })

export function changeFulfilled (state = {}, { response: { feedType } = {} } = {}) {
  log('changeFulfilled')

  return { feedType, status: RESOLVED }
}

export function changeOrderFulfilled (state = {}, { response: { feedType, order } = {} } = {}) {
  log('changeOrderFulfilled')

  return { feedType, order, status: RESOLVED }
}

export function latestFulfilled (state = {}, { response: { feedType } = {} } = {}) {
  log('latestFulfilled')

  return { feedType, status: RESOLVED }
}

export function latestOrderFulfilled (state = {}, { response: { feedType, order } = {} } = {}) {
  log('latestOrderFulfilled')

  return { feedType, order, status: RESOLVED }
}

export function changeRejected ({ feedType } = {}, { error = {} } = {}) {
  log('changeRejected')

  return { feedType, exception: { ...error }, status: REJECTED }
}

export function changeOrderRejected ({ feedType, order } = {}, { error = {} } = {}) {
  log('changeOrderRejected')

  return { feedType, order, exception: { ...error }, status: REJECTED }
}

export function latestRejected ({ feedType } = {}, { error = {} } = {}) {
  log('latestRejected')

  return { feedType, exception: { ...error }, status: REJECTED }
}

export function latestOrderRejected ({ feedType, order } = {}, { error = {} } = {}) {
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
export default function musicReducer (state = { ...STATE }, { type, ...action } = { ...ACTION }) {
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
