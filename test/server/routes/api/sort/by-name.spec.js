import { expect } from 'chai'

import byName from '~/server/routes/api/sort/by-name'

describe('~/server/routes/api/sort/by-name', () => {
  const ITEMS = [
    { name: '0' },
    { name: 'Z' },
    { name: '1' },
    { name: 'a' },
    { name: '2' },
    { name: 'z' },
    { name: '3' },
    { name: 'A' },
    { name: '4' }
  ]

  it('is a function', () => {
    expect(byName)
      .to.be.a('function')
  })

  describe('Sorting', () => {
    it('returns an array', () => {
      expect(ITEMS.sort(byName))
        .to.eql([
          { name: '0' },
          { name: '1' },
          { name: '2' },
          { name: '3' },
          { name: '4' },
          { name: 'a' },
          { name: 'A' },
          { name: 'z' },
          { name: 'Z' }
        ])
    })
  })
})
