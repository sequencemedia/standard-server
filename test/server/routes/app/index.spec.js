import { expect } from 'chai'

import getAppRoutes from '~/server/routes/app'

describe('~/server/routes/app', () => {
  describe('`getAppRoutes`', () => {
    it('is a function', () => {
      expect(getAppRoutes)
        .to.be.a('function')
    })
  })

  describe('`getAppRoutes()`', () => {
    it('returns an array', () => {
      expect(getAppRoutes()).to.be.an('array')
    })
  })
})
