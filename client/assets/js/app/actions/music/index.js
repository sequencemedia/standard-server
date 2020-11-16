import debug from 'debug'

const log = debug('@sequencemedia/app:actions:music')

const CHANGE = 'MUSIC_CHANGE'
const CHANGE_ORDER = 'MUSIC_CHANGE_ORDER'
const UPDATE = 'MUSIC_UPDATE'
const UPDATE_ORDER = 'MUSIC_UPDATE_ORDER'

/*
 *  Action Types
 */
export {
  CHANGE,
  CHANGE_ORDER,
  UPDATE,
  UPDATE_ORDER
}

export const CHANGE_FULFILLED = CHANGE.concat('_FULFILLED')
export const CHANGE_ORDER_FULFILLED = CHANGE.concat('_ORDER_FULFILLED')
export const UPDATE_FULFILLED = UPDATE.concat('_FULFILLED')
export const UPDATE_ORDER_FULFILLED = UPDATE.concat('_ORDER_FULFILLED')

export const CHANGE_REJECTED = CHANGE.concat('_REJECTED')
export const CHANGE_ORDER_REJECTED = CHANGE.concat('_ORDER_REJECTED')
export const UPDATE_REJECTED = UPDATE.concat('_REJECTED')
export const UPDATE_ORDER_REJECTED = UPDATE.concat('_ORDER_REJECTED')

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

export function update (feedType) {
  log('update')

  return {
    type: UPDATE,
    feedType
  }
}

export function updateFulfilled (response) {
  log('updateFulfilled')

  return {
    type: UPDATE_FULFILLED,
    response
  }
}

export function updateRejected (error) {
  log('updateRejected')

  return {
    type: UPDATE_REJECTED,
    error
  }
}

export function updateOrder (feedType, order) {
  log('updateOrder')

  return {
    type: UPDATE_ORDER,
    feedType,
    order
  }
}

export function updateOrderFulfilled (response) {
  log('updateOrderFulfilled')

  return {
    type: UPDATE_ORDER_FULFILLED,
    response
  }
}

export function updateOrderRejected (error) {
  log('updateOrderRejected')

  return {
    type: UPDATE_ORDER_REJECTED,
    error
  }
}
