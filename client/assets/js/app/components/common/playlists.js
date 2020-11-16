import React from 'react'
import PropTypes from 'prop-types'

const Playlists = ({ items }) => {
  if (items.length) {
    return (
      <ol className='playlists'>
        {items.map(({ kind, url, name, artworkUrl100 }, key) => (
          <li key={key}>
            <div className={kind}>
              <a href={url} className='name'>
                <img src={artworkUrl100} alt={`Artwork for "${name}"`} />

                <span>
                  {name}
                </span>
              </a>
            </div>
          </li>
        ))}
      </ol>
    )
  }

  return null
}

Playlists.propTypes = {
  items: PropTypes.array.isRequired
}

export default Playlists
