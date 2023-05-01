import React from 'react'
import PropTypes from 'prop-types'

import {
  Link
} from 'react-router-dom'

import TabSet, {
  TabGroup,
  Tab,
  TabPanel
} from 'react-tab-set'

import {
  TOP_ALBUMS,
  TOP_SONGS,
  HOT_TRACKS,
  NEW_RELEASES,
  COMING_SOON
} from '#client/app/constants/feed-type'

import TopAlbums from './top-albums/index.jsx'
import TopSongs from './top-songs/index.jsx'
import HotTracks from './hot-tracks/index.jsx'
import NewReleases from './new-releases/index.jsx'
import ComingSoon from './coming-soon/index.jsx'

import getLinkTo from '#client/app/components/common/get-link-to'

const Music = ({ feedType, order, onChange, onChangeOrderBy }) => (
  <TabSet
    selectedTab={feedType}
    onChange={() => {
      (order === 'by-none')
        ? onChange(feedType)
        : onChangeOrderBy(feedType, order)
    }}>
    <TabGroup>
      <Tab tab={TOP_ALBUMS}>
        <Link to={getLinkTo(TOP_ALBUMS)}>
          Top Albums
        </Link>
      </Tab>
      <Tab tab={TOP_SONGS}>
        <Link to={getLinkTo(TOP_SONGS)}>
          Top Songs
        </Link>
      </Tab>
      <Tab tab={HOT_TRACKS}>
        <Link to={getLinkTo(HOT_TRACKS)}>
          Hot Tracks
        </Link>
      </Tab>
      <Tab tab={NEW_RELEASES}>
        <Link to={getLinkTo(NEW_RELEASES)}>
          New Releases
        </Link>
      </Tab>
      <Tab tab={COMING_SOON}>
        <Link to={getLinkTo(COMING_SOON)}>
          Coming Soon
        </Link>
      </Tab>
    </TabGroup>
    <TabPanel tab={TOP_ALBUMS}>
      <TopAlbums />
    </TabPanel>
    <TabPanel tab={TOP_SONGS}>
      <TopSongs />
    </TabPanel>
    <TabPanel tab={HOT_TRACKS}>
      <HotTracks />
    </TabPanel>
    <TabPanel tab={NEW_RELEASES}>
      <NewReleases />
    </TabPanel>
    <TabPanel tab={COMING_SOON}>
      <ComingSoon />
    </TabPanel>
  </TabSet>
)

Music.defaultProps = {
  feedType: TOP_ALBUMS,
  order: 'by-none'
}

Music.propTypes = {
  feedType: PropTypes.string,
  order: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onChangeOrderBy: PropTypes.func.isRequired
}

export default Music
