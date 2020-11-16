import React from 'react'
import PropTypes from 'prop-types'

import {
  Link
} from 'react-router-dom'

import getLatestLinkTo from './get-latest-link-to'
import getLatestLinkToOrderBy from './get-latest-link-to-order-by'

function Latest ({ feedType, order, onClick }) {
  if (order === 'by-none') {
    return (
      <div className='latest'>
        <Link to={getLatestLinkTo(feedType)} onClick={onClick}>
          Get latest
        </Link>
      </div>
    )
  }

  return (
    <div className='latest-order-by'>
      <Link to={getLatestLinkToOrderBy(feedType, order)} onClick={onClick}>
        Get latest
      </Link>
    </div>
  )
}

Latest.propTypes = {
  feedType: PropTypes.string.isRequired,
  order: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Latest
