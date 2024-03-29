import byName from './by-name.mjs'
import byArtistName from './by-artist-name.mjs'
import byReleaseDate from './by-release-date.mjs'

export {
  byName,
  byArtistName,
  byReleaseDate
}

/*
 *  `sort` duplicates the array to preserve the order of the original
 */
export default function sort (order, items) {
  switch (order) {
    case 'by-name':
      return [...items].sort(byName)
    case 'by-artist-name':
      return [...items].sort(byArtistName)
    case 'by-release-date':
      return [...items].sort(byReleaseDate)
    default:
      return items
  }
}
