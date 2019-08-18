import React from 'react'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'

import ColumnsBasics from './pages/ColumnsBasics.js'
import ColumnsResponsiveness from './pages/ColumnsResponsiveness.js'
import ColumnsSizes from './pages/ColumnsSizes.js'
import LayoutContainer from './pages/LayoutContainer.js'
import LayoutFooter from './pages/LayoutFooter.js'
import LayoutHero from './pages/LayoutHero.js'
import LayoutLevel from './pages/LayoutLevel.js'
import LayoutMediaObject from './pages/LayoutMediaObject.js'
import LayoutSection from './pages/LayoutSection.js'
import LayoutTiles from './pages/LayoutTiles.js'
import Overview from './pages/Overview.js'
import ModifiersColorHelpers from './pages/ModifiersColorHelpers.js'
import ModifiersSyntax from './pages/ModifiersSyntax.js'

export default function Root () {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Overview} exact path='/' />

        <Route component={ColumnsBasics} exact path='/columns/basics' />

        <Route component={ColumnsResponsiveness} exact path='/columns/responsiveness' />

        <Route component={ColumnsSizes} exact path='/columns/sizes' />

        <Route component={LayoutContainer} exact path='/layout/container' />

        <Route component={LayoutFooter} exact path='/layout/footer' />

        <Route component={LayoutHero} exact path='/layout/hero' />

        <Route component={LayoutLevel} exact path='/layout/level' />

        <Route component={LayoutMediaObject} exact path='/layout/media-object' />

        <Route component={LayoutSection} exact path='/layout/section' />

        <Route component={LayoutTiles} exact path='/layout/tiles' />

        <Route component={ModifiersSyntax} exact path='/modifiers/syntax' />

        <Route component={ModifiersColorHelpers} exact path='/modifiers/color-helpers' />
      </Switch>
    </BrowserRouter>
  )
}
