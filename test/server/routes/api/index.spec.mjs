import { expect } from 'chai'

import getApiRoutes from '#server/routes/api'

describe('#server/routes/api', () => {
  describe('`getApiRoutes`', () => {
    it('is a function', () => {
      expect(getApiRoutes)
        .to.be.a('function')
    })
  })

  describe('`getApiRoutes()`', () => {
    it('returns an array', () => {
      expect(getApiRoutes()).to.be.an('array')
    })
  })
})
