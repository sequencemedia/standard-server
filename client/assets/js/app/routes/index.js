import React from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'

import IndexPage from '@sequencemedia/app/components/index-page'

export default (
  <Switch>
    <Route exact path='/' component={IndexPage} />
    <Route exact path='/:music' component={IndexPage} />
    <Route exact path='/:music/:order' component={IndexPage} />
    <Route exact path='/:music/latest' component={IndexPage} />
    <Route exact path='/:music/:order/latest' component={IndexPage} />
  </Switch>
)
