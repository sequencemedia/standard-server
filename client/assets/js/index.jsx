import React from 'react'
import ReactDOM from 'react-dom'

import {
  Provider
} from 'react-redux'

import Router from './app/router/index.jsx'

import {
  configureStore
} from './app/store/index.mjs'

const state = JSON.parse(document.getElementById('initial-state').textContent || '{}')
const store = configureStore(state)

const App = (
  <Provider store={store}>
    {Router}
  </Provider>
)

const app = document.getElementById('app')

ReactDOM.hydrate(
  App,
  app
)
