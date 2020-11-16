import debug from 'debug'

import {
  CHANGE,
  CHANGE_ORDER
} from '@sequencemedia/app/actions/music'

const log = debug('@sequencemedia/app:reducers:music')

log('`music` is awake')

const STATE = {}

const ACTION = {}

/*
 *  Get all from state
 *  Set `feedType` from action
 */
export const change = (state = {}, { feedType } = {}) => ({ ...state, feedType })

/*
 *  Get all from state
 *  Set `feedType` from action
 */
export const changeOrder = (state = {}, { feedType, order } = {}) => ({ ...state, feedType, order })

export const initialise = (state = {}) => ({ ...state })

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
    default:

      return state
  }
}
