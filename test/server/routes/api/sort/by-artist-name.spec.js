import { expect } from 'chai'

import byArtistName from '~/server/routes/api/sort/by-artist-name'

describe('~/server/routes/api/sort/by-artist-name', () => {
  const ITEMS = [
    { artistName: '0' },
    { artistName: 'Z' },
    { artistName: '1' },
    { artistName: 'a' },
    { artistName: '2' },
    { artistName: 'z' },
    { artistName: '3' },
    { artistName: 'A' },
    { artistName: '4' }
  ]

  it('is a function', () => {
    expect(byArtistName)
      .to.be.a('function')
  })

  describe('Sorting', () => {
    it('returns an array', () => {
      expect(ITEMS.sort(byArtistName))
        .to.eql([
          { artistName: '0' },
          { artistName: '1' },
          { artistName: '2' },
          { artistName: '3' },
          { artistName: '4' },
          { artistName: 'a' },
          { artistName: 'A' },
          { artistName: 'z' },
          { artistName: 'Z' }
        ])
    })
  })
})
