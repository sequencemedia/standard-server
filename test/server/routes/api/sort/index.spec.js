import { expect } from 'chai'

import sort from '~/server/routes/api/sort'

describe('~/server/routes/api/sort', () => {
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

  describe('`sort`', () => {
    it('is a function', () => {
      expect(sort)
        .to.be.a('function')
    })
  })

  describe('`sort()`', () => {
    describe('Sorting by name', () => {
      it('returns an array', () => {
        expect(sort('by-name', ITEMS))
          .to.eql([
            { artistName: '4', name: '0', releaseDate: '2020-11-11' },
            { artistName: '3', name: '1', releaseDate: '2020-11-13' },
            { artistName: '2', name: '2', releaseDate: '2020-11-15' },
            { artistName: '1', name: '3', releaseDate: '2020-11-17' },
            { artistName: '0', name: '4', releaseDate: '2020-11-19' },
            { artistName: 'z', name: 'a', releaseDate: '2020-11-12' },
            { artistName: 'Z', name: 'A', releaseDate: '2020-11-18' },
            { artistName: 'a', name: 'z', releaseDate: '2020-11-16' },
            { artistName: 'A', name: 'Z', releaseDate: '2020-11-14' }
          ])
      })
    })

    describe('Sorting by artist name', () => {
      it('returns an array', () => {
        expect(sort('by-artist-name', ITEMS))
          .to.eql([
            { artistName: '0', name: '4', releaseDate: '2020-11-19' },
            { artistName: '1', name: '3', releaseDate: '2020-11-17' },
            { artistName: '2', name: '2', releaseDate: '2020-11-15' },
            { artistName: '3', name: '1', releaseDate: '2020-11-13' },
            { artistName: '4', name: '0', releaseDate: '2020-11-11' },
            { artistName: 'a', name: 'z', releaseDate: '2020-11-16' },
            { artistName: 'A', name: 'Z', releaseDate: '2020-11-14' },
            { artistName: 'z', name: 'a', releaseDate: '2020-11-12' },
            { artistName: 'Z', name: 'A', releaseDate: '2020-11-18' }
          ])
      })
    })

    describe('Sorting by release date', () => {
      it('returns an array', () => {
        expect(sort('by-release-date', ITEMS))
          .to.eql([
            { artistName: '4', name: '0', releaseDate: '2020-11-11' },
            { artistName: 'z', name: 'a', releaseDate: '2020-11-12' },
            { artistName: '3', name: '1', releaseDate: '2020-11-13' },
            { artistName: 'A', name: 'Z', releaseDate: '2020-11-14' },
            { artistName: '2', name: '2', releaseDate: '2020-11-15' },
            { artistName: 'a', name: 'z', releaseDate: '2020-11-16' },
            { artistName: '1', name: '3', releaseDate: '2020-11-17' },
            { artistName: 'Z', name: 'A', releaseDate: '2020-11-18' },
            { artistName: '0', name: '4', releaseDate: '2020-11-19' }
          ])
      })
    })
  })
})
