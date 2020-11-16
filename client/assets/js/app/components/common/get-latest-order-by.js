import React from 'react'
import PropTypes from 'prop-types'

import {
  Link
} from 'react-router-dom'

import getLatestLinkToOrderBy from './get-latest-link-to-order-by'

function GetLatestOrderBy ({ feedType, order, onClick }) {
  if (order !== 'by-none') {
    return (
      <div className='get-latest-order-by'>
        <Link to={getLatestLinkToOrderBy(feedType, order)} onClick={onClick}>
          Get latest
        </Link>
      </div>
    )
  }

  return null
}

GetLatestOrderBy.propTypes = {
  feedType: PropTypes.string.isRequired,
  order: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default GetLatestOrderBy
