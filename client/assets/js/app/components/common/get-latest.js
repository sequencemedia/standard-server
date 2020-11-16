import React from 'react'
import PropTypes from 'prop-types'

import {
  Link
} from 'react-router-dom'

import getLatestLinkTo from './get-latest-link-to'

function GetLatest ({ feedType, order, onClick }) {
  if (order === 'by-none') {
    return (
      <div className='get-latest'>
        <Link to={getLatestLinkTo(feedType)} onClick={onClick}>
          Get latest
        </Link>
      </div>
    )
  }

  return null
}

GetLatest.propTypes = {
  feedType: PropTypes.string.isRequired,
  order: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default GetLatest
