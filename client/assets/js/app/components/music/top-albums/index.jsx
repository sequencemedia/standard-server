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
} from '#client/app/actions/music/top-albums'

import {
  TOP_ALBUMS
} from '#client/app/constants/feed-type'

import transform from '#client/app/transformers/order'

import Component from './component.jsx'

const log = debug('@sequencemedia:client:app:components:music:top-albums')

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
