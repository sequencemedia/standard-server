import {
  combineReducers
} from 'redux'

import {
  TOP_ALBUMS,
  TOP_SONGS,
  HOT_TRACKS,
  NEW_RELEASES,
  COMING_SOON
} from '#client/app/constants/feed-type'

import music from './music/index.mjs'
import topAlbums from './music/top-albums/index.mjs'
import topSongs from './music/top-songs/index.mjs'
import hotTracks from './music/hot-tracks/index.mjs'
import newReleases from './music/new-releases/index.mjs'
import comingSoon from './music/coming-soon/index.mjs'

export default combineReducers({ music, [TOP_ALBUMS]: topAlbums, [TOP_SONGS]: topSongs, [HOT_TRACKS]: hotTracks, [NEW_RELEASES]: newReleases, [COMING_SOON]: comingSoon })
