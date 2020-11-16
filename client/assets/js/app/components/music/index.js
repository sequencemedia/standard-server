import debug from 'debug'

import {
  connect
} from 'react-redux'

import {
  withRouter
} from 'react-router'

import {
  change
} from '@sequencemedia/app/actions/music'

import Component from './component'

const log = debug('@sequencemedia/app:components:music')

log('`music` is awake')

function mapStateToProps ({ music = {} }) {
  log('mapStateToProps')

  return music
}

function mapDispatchToProps (dispatch) {
  log('mapDispatchToProps')

  return { dispatch }
}

function mergeProps (stateProps, { dispatch }, ownProps) {
  log('mergeProps')

  return {
    ...stateProps,
    onChange (feedType) {
      dispatch(change(feedType))
    },
    ...ownProps
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps, mergeProps)(Component))
