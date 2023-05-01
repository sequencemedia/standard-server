import debug from 'debug'

import {
  connect
} from 'react-redux'

import {
  withRouter
} from 'react-router'

import {
  change,
  changeOrder
} from '#client/app/actions/music'

import Component from './component.jsx'

const log = debug('@sequencemedia:client:app:components:music')

log('`music` is awake')

function mapStateToProps ({ music = {} }) {
  log('mapStateToProps')

  return music
}

function mapDispatchToProps (dispatch) {
  log('mapDispatchToProps')

  return { dispatch }
}

function mergeProps (stateProps, { dispatch }, ownProps) {
  log('mergeProps')

  const {
    match: {
      params: {
        feedType = 'top-albums',
        order = 'by-none'
      }
    }
  } = ownProps

  return {
    ...stateProps,
    onChange (feedType) {
      dispatch(change(feedType))
    },
    onChangeOrderBy (feedType, order) {
      dispatch(changeOrder(feedType, order))
    },
    ...ownProps,
    feedType,
    order
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps, mergeProps)(Component))
