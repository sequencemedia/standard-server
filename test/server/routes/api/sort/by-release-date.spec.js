import { expect } from 'chai'

import byReleaseDate from '~/server/routes/api/sort/by-release-date'

describe('~/server/routes/api/sort/by-release-date', () => {
  const ITEMS = [
    { artistName: '0', releaseDate: '2020-11-24' },
    { artistName: 'Z', releaseDate: '2020-11-24' },
    { artistName: '1', releaseDate: '2020-11-23' },
    { artistName: 'a', releaseDate: '2020-11-23' },
    { artistName: '2', releaseDate: '2020-11-22' },
    { artistName: 'z', releaseDate: '2020-11-22' },
    { artistName: '3', releaseDate: '2020-11-21' },
    { artistName: 'A', releaseDate: '2020-11-21' },
    { artistName: '4', releaseDate: '2020-11-20' }
  ]

  it('is a function', () => {
    expect(byReleaseDate)
      .to.be.a('function')
  })

  describe('Sorting', () => {
    it('returns an array', () => {
      expect(ITEMS.sort(byReleaseDate))
        .to.eql([
          { artistName: '4', releaseDate: '2020-11-20' },
          { artistName: '3', releaseDate: '2020-11-21' },
          { artistName: 'A', releaseDate: '2020-11-21' },
          { artistName: '2', releaseDate: '2020-11-22' },
          { artistName: 'z', releaseDate: '2020-11-22' },
          { artistName: '1', releaseDate: '2020-11-23' },
          { artistName: 'a', releaseDate: '2020-11-23' },
          { artistName: '0', releaseDate: '2020-11-24' },
          { artistName: 'Z', releaseDate: '2020-11-24' }
        ])
    })
  })
})
