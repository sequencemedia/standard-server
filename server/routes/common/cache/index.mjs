const CACHE = new Map()

export default function getCacheForUID (uid) {
  let cache

  if (CACHE.has(uid)) {
    cache = CACHE.get(uid)
  } else {
    CACHE.set(uid, (cache = new Map()))
  }

  return cache
}
