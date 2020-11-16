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
} from '@sequencemedia/app/actions/music/top-albums'

import {
  TOP_ALBUMS
} from '@sequencemedia/app/constants/feed-type'

import transform from '@sequencemedia/app/transformers/order'

import Component from './component'

const log = debug('@sequencemedia/app:components:music:top-albums')

log('`topAlbums` is awake')

function mapStateToProps ({ [TOP_ALBUMS]: topAlbums = {} }) {
  log('mapStateToProps')

  return topAlbums
}

function mapDispatchToProps (dispatch) {
  log('mapDispatchToProps')

  return { dispatch }
}

function mergeProps (stateProps, { dispatch }, ownProps) {
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
