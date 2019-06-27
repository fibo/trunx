import React from 'react'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'

import Overview from './pages/Overview'

export default function Root () {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Overview} exact path='/' />
      </Switch>
    </BrowserRouter>
  )
}
