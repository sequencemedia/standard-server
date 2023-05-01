import debug from 'debug'

const log = debug('@sequencemedia:client:app:actions:music:coming-soon')

log('`comingSoon` is awake')

const CHANGE = 'COMING_SOON_CHANGE'
const CHANGE_ORDER = 'COMING_SOON_CHANGE_ORDER'
const LATEST = 'COMING_SOON_LATEST'
const LATEST_ORDER = 'COMING_SOON_LATEST_ORDER'

/*
 *  Action Types
 */
export {
  CHANGE,
  CHANGE_ORDER,
  LATEST,
  LATEST_ORDER
}

export const CHANGE_FULFILLED = CHANGE.concat('_FULFILLED')
export const CHANGE_ORDER_FULFILLED = CHANGE.concat('_ORDER_FULFILLED')
export const LATEST_FULFILLED = LATEST.concat('_FULFILLED')
export const LATEST_ORDER_FULFILLED = LATEST.concat('_ORDER_FULFILLED')

export const CHANGE_REJECTED = CHANGE.concat('_REJECTED')
export const CHANGE_ORDER_REJECTED = CHANGE.concat('_ORDER_REJECTED')
export const LATEST_REJECTED = LATEST.concat('_REJECTED')
export const LATEST_ORDER_REJECTED = LATEST.concat('_ORDER_REJECTED')

/*
 *  Action Creators
 */
export function change (feedType) {
  log('change')

  return {
    type: CHANGE,
    feedType
  }
}

export function changeFulfilled (response) {
  log('changeFulfilled')

  return {
    type: CHANGE_FULFILLED,
    response
  }
}

export function changeRejected (error) {
  log('changeRejected')

  return {
    type: CHANGE_REJECTED,
    error
  }
}

export function changeOrder (feedType, order) {
  log('changeOrder')

  return {
    type: CHANGE_ORDER,
    feedType,
    order
  }
}

export function changeOrderFulfilled (response) {
  log('changeOrderFulfilled')

  return {
    type: CHANGE_ORDER_FULFILLED,
    response
  }
}

export function changeOrderRejected (error) {
  log('changeOrderRejected')

  return {
    type: CHANGE_ORDER_REJECTED,
    error
  }
}

export function latest (feedType) {
  log('latest')

  return {
    type: LATEST,
    feedType
  }
}

export function latestFulfilled (response) {
  log('latestFulfilled')

  return {
    type: LATEST_FULFILLED,
    response
  }
}

export function latestRejected (error) {
  log('latestRejected')

  return {
    type: LATEST_REJECTED,
    error
  }
}

export function latestOrder (feedType, order) {
  log('latestOrder')

  return {
    type: LATEST_ORDER,
    feedType,
    order
  }
}

export function latestOrderFulfilled (response) {
  log('latestOrderFulfilled')

  return {
    type: LATEST_ORDER_FULFILLED,
    response
  }
}

export function latestOrderRejected (error) {
  log('latestOrderRejected')

  return {
    type: LATEST_ORDER_REJECTED,
    error
  }
}
