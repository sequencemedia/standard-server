export default function byArtistName (alpha, omega) {
  const { artistName: a } = alpha
  const { artistName: o } = omega

  return a.localeCompare(o)
}
