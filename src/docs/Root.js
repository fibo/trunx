import React from 'react'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'

import Overview from './pages/Overview.js'
import ModifiersSyntax from './pages/ModifiersSyntax.js'
import Nav from './components/Nav.js'

export default function Root () {
  return (
    <BrowserRouter>
      <Route component={Nav} path='*' />

      <Switch>
        <Route component={Overview} exact path='/' />

        <Route component={ModifiersSyntax} exact path='/modifiers/syntax' />
      </Switch>
    </BrowserRouter>
  )
}
