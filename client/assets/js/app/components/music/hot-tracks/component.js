import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import {
  HOT_TRACKS
} from '@sequencemedia/app/constants/feed-type'

import Order from '@sequencemedia/app/components/common/playlists/order'
import Reset from '@sequencemedia/app/components/common/playlists/reset'

import Playlists from '@sequencemedia/app/components/common/playlists'

const Component = ({ feedType, order, items, onMount, onMountOrderBy, onClickLatest, onClickLatestOrderBy }) => {
  useEffect(() => {
    return (order === 'by-none')
      ? onMount(feedType)
      : onMountOrderBy(feedType, order)
  }, [])

  return (
    <div className={feedType}>
      <h3>
        Hot Tracks
      </h3>

      <Order feedType={feedType} order={order} />
      <Reset feedType={feedType} order={order} />

      <Playlists items={items} />
    </div>
  )
}

Component.defaultProps = {
  feedType: HOT_TRACKS,
  order: 'by-none',
  items: []
}

Component.propTypes = {
  feedType: PropTypes.string,
  order: PropTypes.string,
  items: PropTypes.array,
  onMount: PropTypes.func.isRequired,
  onMountOrderBy: PropTypes.func.isRequired,
  onClickLatest: PropTypes.func.isRequired,
  onClickLatestOrderBy: PropTypes.func.isRequired
}

export default Component
