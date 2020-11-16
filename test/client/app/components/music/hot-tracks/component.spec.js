import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'

import Component from '@sequencemedia/app/components/music/hot-tracks/component'

Enzyme.configure({ adapter: new Adapter() })

jest.mock('@sequencemedia/app/components/common/playlists/order')
jest.mock('@sequencemedia/app/components/common/playlists/reset')
jest.mock('@sequencemedia/app/components/common/playlists')

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
          onClickOrder={jest.fn()}
          onClickReset={jest.fn()}
          onClickGetLatest={jest.fn()}
          onClickGetLatestOrderBy={jest.fn()}
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
          onClickOrder={jest.fn()}
          onClickReset={jest.fn()}
          onClickGetLatest={jest.fn()}
          onClickGetLatestOrderBy={jest.fn()}
        />
      )

      it('renders', () => {
        return expect(toJSON(shallow(component)))
          .toMatchSnapshot()
      })
    })
  })
})
