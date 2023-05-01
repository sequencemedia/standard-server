import { expect } from 'chai'

import {
  getFeedResults
} from '#server/routes/api/feed'

describe('#server/routes/api/feed', () => {
  const ITEMS = [
    { artistName: '0', name: '4', releaseDate: '2020-11-19' },
    { artistName: 'Z', name: 'A', releaseDate: '2020-11-18' },
    { artistName: '1', name: '3', releaseDate: '2020-11-17' },
    { artistName: 'a', name: 'z', releaseDate: '2020-11-16' },
    { artistName: '2', name: '2', releaseDate: '2020-11-15' },
    { artistName: 'A', name: 'Z', releaseDate: '2020-11-14' },
    { artistName: '3', name: '1', releaseDate: '2020-11-13' },
    { artistName: 'z', name: 'a', releaseDate: '2020-11-12' },
    { artistName: '4', name: '0', releaseDate: '2020-11-11' }
  ]

  describe('`getFeedResults`', () => {
    it('is a function', () => {
      expect(getFeedResults)
        .to.be.a('function')
    })
  })

  describe('`getFeedResults()`', () => {
    describe('Always', () => {
      it('returns an array', () => {
        expect(getFeedResults()).to.be.an('array')
      })
    })

    describe('A `response` is passed as an argument', () => {
      it('returns an array', () => {
        expect(getFeedResults({ feed: { results: ITEMS } })).to.equal(ITEMS)
      })
    })
  })
})
