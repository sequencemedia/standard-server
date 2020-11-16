/*
 *  Music API
 */
import fetch from 'isomorphic-fetch'

export async function change (feedType) {
  const response = await fetch(`http://localhost:5000/api/change/${feedType}`)

  return await response.json()
}

export async function changeOrder (feedType, order) {
  const response = await fetch(`http://localhost:5000/api/change/${feedType}/${order}`)

  return await response.json()
}

export async function latest (feedType) {
  const response = await fetch(`http://localhost:5000/api/latest/${feedType}`)

  return await response.json()
}

export async function latestOrder (feedType, order) {
  const response = await fetch(`http://localhost:5000/api/latest/${feedType}/${order}`)

  return await response.json()
}
