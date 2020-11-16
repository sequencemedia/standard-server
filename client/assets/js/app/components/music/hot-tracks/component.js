import React from 'react'
import PropTypes from 'prop-types'

import Order from '@sequencemedia/app/components/common/playlists/order'
import Reset from '@sequencemedia/app/components/common/playlists/reset'

import Playlists from '@sequencemedia/app/components/common/playlists'

const Component = ({ feedType, order, items, onClickOrder, onClickReset, onClickGetLatest, onClickGetLatestOrderBy }) => (
  <div className={feedType}>
    <h3>
      Hot Tracks
    </h3>

    <Order feedType={feedType} order={order} onClick={(order) => onClickOrder(feedType, order)} />
    <Reset feedType={feedType} order={order} onClick={() => onClickReset(feedType)} />

    <Playlists items={items} />
  </div>
)

Component.defaultProps = {
  order: 'by-none',
  items: []
}

Component.propTypes = {
  feedType: PropTypes.string.isRequired,
  order: PropTypes.string,
  items: PropTypes.array,
  onClickOrder: PropTypes.func.isRequired,
  onClickReset: PropTypes.func.isRequired,
  onClickGetLatest: PropTypes.func.isRequired,
  onClickGetLatestOrderBy: PropTypes.func.isRequired
}

export default Component
