import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import {
  TOP_SONGS
} from '#client/app/constants/feed-type'

import Order from '#client/app/components/common/order'
import Reset from '#client/app/components/common/reset'
import Latest from '#client/app/components/common/latest'

import Songs from '#client/app/components/common/songs'

const Component = ({ feedType, order, items, onMount, onMountOrderBy, onClickLatest, onClickLatestOrderBy }) => {
  useEffect(() => {
    return (order === 'by-none')
      ? onMount(feedType)
      : onMountOrderBy(feedType, order)
  }, [])

  return (
    <div className={feedType}>
      <h3>
        Top Songs
      </h3>

      <Order feedType={feedType} order={order} />
      <Reset feedType={feedType} order={order} />
      <Latest
        feedType={feedType}
        order={order}
        onClick={() => {
          (order === 'by-none')
            ? onClickLatest(feedType)
            : onClickLatestOrderBy(feedType, order)
        }}
      />

      <Songs items={items} />
    </div>
  )
}

Component.defaultProps = {
  feedType: TOP_SONGS,
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
