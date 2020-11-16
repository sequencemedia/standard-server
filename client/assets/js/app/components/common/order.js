import React from 'react'
import PropTypes from 'prop-types'

import {
  Link
} from 'react-router-dom'

import {
  BY_NAME,
  BY_ARTIST_NAME,
  BY_RELEASE_DATE
} from '@sequencemedia/app/common/order'

import getLinkToOrderBy from './get-link-to-order-by'

function Order ({ feedType, onClick }) {
  return (
    <div className='order'>
      Order by
      {' '}
      <Link className='order-by-name' to={getLinkToOrderBy(feedType, BY_NAME)} onClick={() => onClick(BY_NAME)}>
        name
      </Link>
      , by
      {' '}
      <Link className='order-by-artist-name' to={getLinkToOrderBy(feedType, BY_ARTIST_NAME)} onClick={() => onClick(BY_ARTIST_NAME)}>
        artist name
      </Link>
      , or by
      {' '}
      <Link className='order-by-release-date' to={getLinkToOrderBy(feedType, BY_RELEASE_DATE)} onClick={() => onClick(BY_RELEASE_DATE)}>
        release date
      </Link>
    </div>
  )
}

Order.propTypes = {
  feedType: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Order
