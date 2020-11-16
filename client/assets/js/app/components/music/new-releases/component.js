import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import {
  NEW_RELEASES
} from '@sequencemedia/app/constants/feed-type'

import Order from '@sequencemedia/app/components/common/order'
import Reset from '@sequencemedia/app/components/common/reset'
import Latest from '@sequencemedia/app/components/common/latest'

import Albums from '@sequencemedia/app/components/common/albums'

const Component = ({ feedType, order, items, onMount, onMountOrderBy, onClickLatest, onClickLatestOrderBy }) => {
  useEffect(() => {
    return (order === 'by-none')
      ? onMount(feedType)
      : onMountOrderBy(feedType, order)
  }, [])

  return (
    <div className={feedType}>
      <h3>
        New Releases
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

      <Albums items={items} />
    </div>
  )
}

Component.defaultProps = {
  feedType: NEW_RELEASES,
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
