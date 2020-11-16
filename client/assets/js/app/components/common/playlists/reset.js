import React from 'react'
import PropTypes from 'prop-types'

import {
  Link
} from 'react-router-dom'

import getLinkTo from '@sequencemedia/app/components/common/get-link-to'

function Reset ({ feedType, order, onClick }) {
  if (order !== 'by-none') {
    return (
      <div className='reset'>
        <Link to={getLinkTo(feedType)} onClick={onClick}>
          Reset
        </Link>
      </div>
    )
  }

  return null
}

Reset.propTypes = {
  feedType: PropTypes.string.isRequired,
  order: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Reset
