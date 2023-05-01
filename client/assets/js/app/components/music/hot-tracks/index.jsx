import debug from 'debug'

import {
  connect
} from 'react-redux'

import {
  withRouter
} from 'react-router'

import {
  change,
  changeOrder,
  latest,
  latestOrder
} from '#client/app/actions/music/hot-tracks'

import {
  HOT_TRACKS
} from '#client/app/constants/feed-type'

import transform from '#client/app/transformers/order'

import Component from './component.jsx'

const log = debug('@sequencemedia:client:app:components:music:hot-tracks')

log('`hotTracks` is awake')

function mapStateToProps ({ [HOT_TRACKS]: hotTracks = {} }) {
  log('mapStateToProps')

  return hotTracks
}

function mapDispatchToProps (dispatch) {
  log('mapDispatchToProps')

  return { dispatch }
}

function mergeProps (stateProps, { dispatch }, ownProps) {
  log('mergeProps')

  const {
    items = []
  } = stateProps

  const {
    match: {
      params: {
        feedType,
        order
      }
    }
  } = ownProps

  return {
    ...stateProps,
    onMount (feedType) {
      dispatch(change(feedType))
    },
    onMountOrderBy (feedType, order) {
      dispatch(changeOrder(feedType, order))
    },
    onClickLatest (feedType) {
      dispatch(latest(feedType))
    },
    onClickLatestOrderBy (feedType, order) {
      dispatch(latestOrder(feedType, order))
    },
    ...ownProps,
    items: transform(order, items),
    feedType,
    order
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps, mergeProps)(Component))
