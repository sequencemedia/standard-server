import React from 'react'
import PropTypes from 'prop-types'

import Order from '@sequencemedia/app/components/common/order'
import Reset from '@sequencemedia/app/components/common/reset'
import GetLatest from '@sequencemedia/app/components/common/get-latest'
import GetLatestOrderBy from '@sequencemedia/app/components/common/get-latest-order-by'

import Albums from '@sequencemedia/app/components/common/albums'

const TopAlbums = ({ feedType, order, items, onClickOrder, onClickReset, onClickGetLatest, onClickGetLatestOrderBy }) => (
  <div className={feedType}>
    <h3>
      Top Albums
    </h3>

    <Order feedType={feedType} order={order} onClick={(order) => onClickOrder(feedType, order)} />
    <Reset feedType={feedType} order={order} onClick={() => onClickReset(feedType)} />
    <GetLatest feedType={feedType} order={order} onClick={() => onClickGetLatest(feedType)} />
    <GetLatestOrderBy feedType={feedType} order={order} onClick={() => onClickGetLatestOrderBy(feedType, order)} />

    <Albums items={items} />
  </div>
)

TopAlbums.defaultProps = {
  order: 'by-none',
  items: []
}

TopAlbums.propTypes = {
  feedType: PropTypes.string.isRequired,
  order: PropTypes.string,
  items: PropTypes.array,
  onClickOrder: PropTypes.func.isRequired,
  onClickReset: PropTypes.func.isRequired,
  onClickGetLatest: PropTypes.func.isRequired,
  onClickGetLatestOrderBy: PropTypes.func.isRequired
}

export default TopAlbums
