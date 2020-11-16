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
  update,
  updateOrder
} from '@sequencemedia/app/actions/music'

import {
  HOT_TRACKS
} from '@sequencemedia/app/common/feed-type'

import Component from './component'

const log = debug('@sequencemedia/app:components:music:hot-tracks')

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

  return {
    ...stateProps,
    onClickReset (feedType) {
      dispatch(change(feedType))
    },
    onClickOrder (feedType, order) {
      dispatch(changeOrder(feedType, order))
    },
    onClickGetLatest (feedType) {
      dispatch(update(feedType))
    },
    onClickGetLatestOrderBy (feedType, order) {
      dispatch(updateOrder(feedType, order))
    },
    ...ownProps
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps, mergeProps)(Component))
