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
} from '@sequencemedia/app/actions/music'

import {
  COMING_SOON
} from '@sequencemedia/app/common/feed-type'

import Component from './component'

const log = debug('@sequencemedia/app:components:music:coming-soon')

log('`comingSoon` is awake')

function mapStateToProps ({ [COMING_SOON]: comingSoon = {} }) {
  log('mapStateToProps')

  return comingSoon
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
      dispatch(latest(feedType))
    },
    onClickGetLatestOrderBy (feedType, order) {
      dispatch(latestOrder(feedType, order))
    },
    ...ownProps
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps, mergeProps)(Component))
