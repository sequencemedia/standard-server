import React from 'react'
import PropTypes from 'prop-types'

import {
  Link
} from 'react-router-dom'

import {
  BY_NAME
} from '@sequencemedia/app/constants/order'

import getLinkToOrderBy from '@sequencemedia/app/components/common/get-link-to-order-by'

function Order ({ feedType }) {
  return (
    <div className='order'>
      Order by
      {' '}
      <Link className='order-by-name' to={getLinkToOrderBy(feedType, BY_NAME)}>
        name
      </Link>
    </div>
  )
}

Order.propTypes = {
  feedType: PropTypes.string.isRequired
}

export default Order
