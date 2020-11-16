import byArtistName from './by-artist-name'

export default function byReleaseDate (alpha, omega) {
  const { releaseDate: a } = alpha
  const { releaseDate: o } = omega

  return (a === o) ? byArtistName(alpha, omega) : a.localeCompare(o)
}
