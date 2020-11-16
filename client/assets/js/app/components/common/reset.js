import React from 'react'
import PropTypes from 'prop-types'

import {
  Link
} from 'react-router-dom'

import getLinkTo from './get-link-to'

function Reset ({ feedType, order }) {
  if (order !== 'by-none') {
    return (
      <div className='reset'>
        <Link to={getLinkTo(feedType)}>
          Reset
        </Link>
      </div>
    )
  }

  return null
}

Reset.propTypes = {
  feedType: PropTypes.string.isRequired,
  order: PropTypes.string.isRequired
}

export default Reset
