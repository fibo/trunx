import React from 'react'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'

import ColumnsBasics from './pages/ColumnsBasics.js'
import ColumnsResponsiveness from './pages/ColumnsResponsiveness.js'
import ColumnsSizes from './pages/ColumnsSizes.js'
import ComponentsNavbar from './pages/ComponentsNavbar.js'
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

import routes from './routes.js'

export default function Root () {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Overview} exact path={routes.home} />

        <Route component={ColumnsBasics} exact path={routes.columns.basics} />

        <Route component={ColumnsResponsiveness} exact path={routes.columns.responsiveness} />

        <Route component={ColumnsSizes} exact path={routes.columns.sizes} />

        <Route component={ComponentsNavbar} exact path={routes.components.navbar} />

        <Route component={LayoutContainer} exact path={routes.layout.container} />

        <Route component={LayoutFooter} exact path={routes.layout.footer} />

        <Route component={LayoutHero} exact path={routes.layout.hero} />

        <Route component={LayoutLevel} exact path={routes.layout.level} />

        <Route component={LayoutMediaObject} exact path={routes.layout.mediaObject} />

        <Route component={LayoutSection} exact path={routes.layout.section} />

        <Route component={LayoutTiles} exact path={routes.layout.tiles} />

        <Route component={ModifiersSyntax} exact path={routes.modifiersSyntax} />

        <Route component={ModifiersColorHelpers} exact path={routes.modifiers.colorHelpers} />
      </Switch>
    </BrowserRouter>
  )
}
