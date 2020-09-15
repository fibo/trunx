import React from 'react'
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch
} from 'react-router-dom'

import ColumnsBasics from './pages/ColumnsBasics.js'
import ColumnsNesting from './pages/ColumnsNesting.js'
import ColumnsResponsiveness from './pages/ColumnsResponsiveness.js'
import ColumnsSizes from './pages/ColumnsSizes.js'
import ComponentsBreadcrumb from './pages/ComponentsBreadcrumb.js'
import ComponentsNavbar from './pages/ComponentsNavbar.js'
import ElementsBox from './pages/ElementsBox.js'
import ElementsButton from './pages/ElementsButton.js'
import ElementsDelete from './pages/ElementsDelete.js'
import ElementsTag from './pages/ElementsTag.js'
import FormGeneral from './pages/FormGeneral.js'
import FormInput from './pages/FormInput.js'
import FormRadio from './pages/FormRadio.js'
import FormTextarea from './pages/FormTextarea.js'
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
        {[
          [Overview, routes.home],
          [ColumnsBasics, routes.columns.basics],
          [ColumnsNesting, routes.columns.nesting],
          [ColumnsResponsiveness, routes.columns.responsiveness],
          [ColumnsSizes, routes.columns.sizes],
          [ComponentsBreadcrumb, routes.components.breadcrumb],
          [ComponentsNavbar, routes.components.navbar],
          [ElementsBox, routes.elements.box],
          [ElementsButton, routes.elements.button],
          [ElementsDelete, routes.elements.delete],
          [ElementsTag, routes.elements.tag],
          [FormGeneral, routes.form.general],
          [FormInput, routes.form.input],
          [FormRadio, routes.form.radio],
          [FormTextarea, routes.form.textarea],
          [LayoutContainer, routes.layout.container],
          [LayoutFooter, routes.layout.footer],
          [LayoutHero, routes.layout.hero],
          [LayoutLevel, routes.layout.level],
          [LayoutMediaObject, routes.layout.mediaObject],
          [LayoutSection, routes.layout.section],
          [LayoutTiles, routes.layout.tiles],
          [ModifiersSyntax, routes.modifiers.syntax],
          [ModifiersColorHelpers, routes.modifiers.colorHelpers]
        ].map(([component, path], i) => (
          <Route key={i} component={component} exact path={path} />
        ))}

        <Redirect from='*' to={routes.home} />
      </Switch>
    </BrowserRouter>
  )
}
