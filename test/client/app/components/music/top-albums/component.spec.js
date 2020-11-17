import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'

import Component from '@sequencemedia/app/components/music/top-albums/component'

Enzyme.configure({ adapter: new Adapter() })

jest.mock('@sequencemedia/app/components/common/order', () => {
  const MockOrder = () => (
    <div className='mock-order'>
      Mock Order
    </div>
  )

  return {
    __esModule: true,
    default: MockOrder
  }
})
jest.mock('@sequencemedia/app/components/common/reset', () => {
  const MockReset = () => (
    <div className='mock-reset'>
      Mock Reset
    </div>
  )

  return {
    __esModule: true,
    default: MockReset
  }
})
jest.mock('@sequencemedia/app/components/common/latest', () => {
  const MockLatest = () => (
    <div className='mock-latest'>
      Mock Latest
    </div>
  )

  return {
    __esModule: true,
    default: MockLatest
  }
})
jest.mock('@sequencemedia/app/components/common/albums', () => {
  const MockAlbums = () => (
    <div className='mock-albums'>
      Mock Albums
    </div>
  )

  return {
    __esModule: true,
    default: MockAlbums
  }
})

const MOCK_ITEMS = [
  {
    kind: 'MOCK KIND',
    url: 'MOCK URL',
    name: 'MOCK NAME',
    artworkUrl100: 'MOCK ARTWORK URL 100',
    artistUrl: 'MOCK ARTIST URL',
    artistName: 'MOCK ARTIST NAME',
    releaseDate: '2020-11-16',
    copyright: 'MOCK COPYRIGHT'
  }
]

describe('shinkansen-cogs/cogs/checkbox', () => {
  describe('<Component />', () => {
    describe('With required props', () => {
      const component = (
        <Component
          feedType='MOCK FEED TYPE'
          onMount={jest.fn()}
          onMountOrderBy={jest.fn()}
          onClickLatest={jest.fn()}
          onClickLatestOrderBy={jest.fn()}
        />
      )

      it('renders', () => {
        return expect(toJSON(shallow(component)))
          .toMatchSnapshot()
      })
    })

    describe('With additional props', () => {
      const component = (
        <Component
          feedType='MOCK FEED TYPE'
          order='MOCK ORDER'
          items={MOCK_ITEMS}
          onMount={jest.fn()}
          onMountOrderBy={jest.fn()}
          onClickLatest={jest.fn()}
          onClickLatestOrderBy={jest.fn()}
        />
      )

      it('renders', () => {
        return expect(toJSON(shallow(component)))
          .toMatchSnapshot()
      })
    })
  })
})
