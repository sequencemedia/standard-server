import React from 'react'
import MockPropTypes from 'prop-types'

import Enzyme, { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'

import Component from '#client/app/components/music/component'

Enzyme.configure({ adapter: new Adapter() })

jest.mock('react-router-dom', () => {
  const MockLink = ({ children }) => (
    <div className='mock-link'>
      {children}
    </div>
  )

  MockLink.propTypes = {
    children: MockPropTypes.any
  }

  return {
    __esModule: true,
    Link: MockLink
  }
})

jest.mock('react-tab-set', () => {
  const MockTabSet = ({ children }) => (
    <div className='mock-tab-set'>
      {children}
    </div>
  )

  MockTabSet.propTypes = {
    children: MockPropTypes.any
  }

  const MockTabGroup = ({ children }) => (
    <div className='mock-tab-group'>
      {children}
    </div>
  )

  MockTabGroup.propTypes = {
    children: MockPropTypes.any
  }

  const MockTab = ({ children }) => (
    <div className='mock-tab'>
      {children}
    </div>
  )

  MockTab.propTypes = {
    children: MockPropTypes.any
  }

  const MockTabPanel = ({ children }) => (
    <div className='mock-tab-panel'>
      {children}
    </div>
  )

  MockTabPanel.propTypes = {
    children: MockPropTypes.any
  }

  return {
    __esModule: true,
    default: MockTabSet,
    TabGroup: MockTabGroup,
    Tab: MockTab,
    TabPanel: MockTabPanel
  }
})

jest.mock('#client/app/constants/feed-type', () => ({
  TOP_ALBUMS: 'MOCK TOP ALBUMS',
  TOP_SONGS: 'MOCK TOP SONGS',
  HOT_TRACKS: 'MOCK HOT TRACKS',
  NEW_RELEASES: 'MOCK NEW RELEASES',
  COMING_SOON: 'MOCK COMING SOON'
}))

jest.mock('#client/app/components/music/top-albums', () => {
  const MockTopAlbums = ({ children }) => (
    <div className='mock-top-albums'>
      {children}
    </div>
  )

  MockTopAlbums.propTypes = {
    children: MockPropTypes.any
  }

  return {
    __esModule: true,
    default: MockTopAlbums
  }
})

jest.mock('#client/app/components/music/top-songs', () => {
  const MockTopSongs = ({ children }) => (
    <div className='mock-top-songs'>
      {children}
    </div>
  )

  MockTopSongs.propTypes = {
    children: MockPropTypes.any
  }

  return {
    __esModule: true,
    default: MockTopSongs
  }
})

jest.mock('#client/app/components/music/hot-tracks', () => {
  const MockHotTracks = ({ children }) => (
    <div className='mock-hot-tracks'>
      {children}
    </div>
  )

  MockHotTracks.propTypes = {
    children: MockPropTypes.any
  }

  return {
    __esModule: true,
    default: MockHotTracks
  }
})

jest.mock('#client/app/components/music/new-releases', () => {
  const MockNewReleases = ({ children }) => (
    <div className='mock-new-releases'>
      {children}
    </div>
  )

  MockNewReleases.propTypes = {
    children: MockPropTypes.any
  }

  return {
    __esModule: true,
    default: MockNewReleases
  }
})

jest.mock('#client/app/components/music/coming-soon', () => {
  const MockComingSoon = ({ children }) => (
    <div className='mock-coming-soon'>
      {children}
    </div>
  )

  MockComingSoon.propTypes = {
    children: MockPropTypes.any
  }

  return {
    __esModule: true,
    default: MockComingSoon
  }
})

jest.mock('#client/app/components/common/get-link-to')

describe('#client/app/components/music/component', () => {
  describe('<Component />', () => {
    describe('With required props', () => {
      const component = (
        <Component
          onChange={jest.fn()}
          onChangeOrderBy={jest.fn()}
        />
      )

      it('renders', () => {
        return expect(toJSON(shallow(component)))
          .toMatchSnapshot()
      })
    })

    describe('With `selectedTab` prop', () => {
      describe('`TOP_ALBUMS`', () => {
        const component = (
          <Component
            selectedTab='MOCK TOP ALBUMS'
            onChange={jest.fn()}
            onChangeOrderBy={jest.fn()}
          />
        )

        it('renders', () => {
          return expect(toJSON(shallow(component)))
            .toMatchSnapshot()
        })
      })

      describe('`TOP_SONGS`', () => {
        const component = (
          <Component
            selectedTab='MOCK TOP SONGS'
            onChange={jest.fn()}
            onChangeOrderBy={jest.fn()}
          />
        )

        it('renders', () => {
          return expect(toJSON(shallow(component)))
            .toMatchSnapshot()
        })
      })

      describe('`HOT_TRACKS`', () => {
        const component = (
          <Component
            selectedTab='MOCK HOT TRACKS'
            onChange={jest.fn()}
            onChangeOrderBy={jest.fn()}
          />
        )

        it('renders', () => {
          return expect(toJSON(shallow(component)))
            .toMatchSnapshot()
        })
      })

      describe('`NEW_RELEASES`', () => {
        const component = (
          <Component
            selectedTab='MOCK NEW RELEASES'
            onChange={jest.fn()}
            onChangeOrderBy={jest.fn()}
          />
        )

        it('renders', () => {
          return expect(toJSON(shallow(component)))
            .toMatchSnapshot()
        })
      })

      describe('`COMING_SOON`', () => {
        const component = (
          <Component
            selectedTab='MOCK COMING SOON'
            onChange={jest.fn()}
            onChangeOrderBy={jest.fn()}
          />
        )

        it('renders', () => {
          return expect(toJSON(shallow(component)))
            .toMatchSnapshot()
        })
      })
    })
  })
})
