import debug from 'debug'

const log = debug('@sequencemedia:client:app:actions:music')

log('`music` is awake')

const CHANGE = 'MUSIC_CHANGE'
const CHANGE_ORDER = 'MUSIC_CHANGE_ORDER'

/*
 *  Action Types
 */
export {
  CHANGE,
  CHANGE_ORDER
}

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

export function changeOrder (feedType, order) {
  log('changeOrder')

  return {
    type: CHANGE_ORDER,
    feedType,
    order
  }
}
