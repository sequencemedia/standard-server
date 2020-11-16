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
} from '@sequencemedia/app/actions/music/top-songs'

import {
  TOP_SONGS
} from '@sequencemedia/app/constants/feed-type'

import transform from '@sequencemedia/app/transformers/order'

import Component from './component'

const log = debug('@sequencemedia/app:components:music:top-songs')

log('`topSongs` is awake')

function mapStateToProps ({ [TOP_SONGS]: topSongs = {} }) {
  log('mapStateToProps')

  return topSongs
}

function mapDispatchToProps (dispatch) {
  log('mapDispatchToProps')

  return { dispatch }
}

function mergeProps (stateProps, { dispatch }, ownProps) {
  log('mergeProps')

  const {
    items
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
