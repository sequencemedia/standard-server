import fetch from 'isomorphic-fetch'

export async function getFeedTypeFromApple (feedType = 'top-albums') {
  const response = await fetch(`https://rss.itunes.apple.com/api/v1/us/apple-music/${feedType}/all/100/non-explicit.json`)

  return await response.json()
}

export const getFeedResults = ({ feed: { results = [] } = {} } = {}) => results
