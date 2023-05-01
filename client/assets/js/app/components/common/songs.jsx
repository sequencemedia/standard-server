import React from 'react'
import PropTypes from 'prop-types'

import moment from 'moment'

const Songs = ({ items }) => {
  if (items.length) {
    return (
      <ol className='songs'>
        {items.map(({ kind, url, name, artworkUrl100, artistUrl, artistName, releaseDate, copyright }, key) => (
          <li key={key}>
            <div className={kind}>
              <a href={url} className='name'>
                <img src={artworkUrl100} alt={`Artwork for "${name}" by ${artistName}`} />

                <span>
                  {name}
                </span>
              </a>
            </div>

            <div className='artist'>
              <a href={artistUrl} className='artist-name'>
                {artistName}
              </a>
            </div>

            <span className='release-date'>
              Released {moment(releaseDate).format('Do MMMM YYYY')}
            </span>

            <span className='copyright'>
              {copyright}
            </span>
          </li>
        ))}
      </ol>
    )
  }

  return null
}

Songs.propTypes = {
  items: PropTypes.array.isRequired
}

export default Songs
