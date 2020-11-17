import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'

import Component from '@sequencemedia/app/components/music/hot-tracks/component'

Enzyme.configure({ adapter: new Adapter() })

jest.mock('@sequencemedia/app/components/common/playlists/order', () => {
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
jest.mock('@sequencemedia/app/components/common/playlists/reset', () => {
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
jest.mock('@sequencemedia/app/components/common/playlists', () => {
  const MockPlaylists = () => (
    <div className='mock-playlists'>
      Mock Latest
    </div>
  )

  return {
    __esModule: true,
    default: MockPlaylists
  }
})

const MOCK_ITEMS = [
  {
    kind: 'MOCK KIND',
    url: 'MOCK URL',
    name: 'MOCK NAME',
    artworkUrl100: 'MOCK ARTWORK URL 100'
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
