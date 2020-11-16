import React from 'react'
import PropTypes from 'prop-types'

import {
  Link
} from 'react-router-dom'

import getLinkTo from './get-link-to'

function GetLatest ({ feedType, order, onClick }) {
  if (order === 'by-none') {
    return (
      <div className='get-latest'>
        <Link to={`${getLinkTo(feedType)}/latest`} onClick={onClick}>
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
