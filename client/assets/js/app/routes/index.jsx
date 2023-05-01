import React from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'

import IndexPage from '#client/app/components/index-page'

export default (
  <Switch>
    <Route exact path='/' component={IndexPage} />
    <Route exact path='/latest/:feedType' component={IndexPage} />
    <Route exact path='/latest/:feedType/:order' component={IndexPage} />
    <Route exact path='/:feedType' component={IndexPage} />
    <Route exact path='/:feedType/:order' component={IndexPage} />
  </Switch>
)
