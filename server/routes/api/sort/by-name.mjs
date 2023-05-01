export default function byName (alpha, omega) {
  const { name: a } = alpha
  const { name: o } = omega

  return a.localeCompare(o)
}
