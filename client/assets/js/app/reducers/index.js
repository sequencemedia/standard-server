import {
  combineReducers
} from 'redux'

import {
  TOP_ALBUMS,
  TOP_SONGS,
  HOT_TRACKS,
  NEW_RELEASES,
  COMING_SOON
} from '@sequencemedia/app/constants/feed-type'

import music from './music'
import topAlbums from './music/top-albums'
import topSongs from './music/top-songs'
import hotTracks from './music/hot-tracks'
import newReleases from './music/new-releases'
import comingSoon from './music/coming-soon'

export default combineReducers({ music, [TOP_ALBUMS]: topAlbums, [TOP_SONGS]: topSongs, [HOT_TRACKS]: hotTracks, [NEW_RELEASES]: newReleases, [COMING_SOON]: comingSoon })
