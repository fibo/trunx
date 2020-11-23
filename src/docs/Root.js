import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import { ColumnsBasics } from './pages/ColumnsBasics'
import { ColumnsNesting } from './pages/ColumnsNesting'
import { ColumnsResponsiveness } from './pages/ColumnsResponsiveness'
import { ColumnsSizes } from './pages/ColumnsSizes'
import { ComponentsBreadcrumb } from './pages/ComponentsBreadcrumb'
import { ComponentsModal } from './pages/ComponentsModal'
import { ComponentsNavbar } from './pages/ComponentsNavbar'
import { ElementsBox } from './pages/ElementsBox'
import { ElementsButton } from './pages/ElementsButton'
import { ElementsContent } from './pages/ElementsContent'
import { ElementsDelete } from './pages/ElementsDelete'
import { ElementsTag } from './pages/ElementsTag'
import { FormGeneral } from './pages/FormGeneral'
import { FormInput } from './pages/FormInput'
import { FormRadio } from './pages/FormRadio'
import { FormTextarea } from './pages/FormTextarea'
import { LayoutContainer } from './pages/LayoutContainer'
import { LayoutFooter } from './pages/LayoutFooter'
import { LayoutHero } from './pages/LayoutHero'
import { LayoutLevel } from './pages/LayoutLevel'
import { LayoutMediaObject } from './pages/LayoutMediaObject'
import { LayoutSection } from './pages/LayoutSection'
import { LayoutTiles } from './pages/LayoutTiles'
import { ModifiersColorHelpers } from './pages/ModifiersColorHelpers'
import { ModifiersSyntax } from './pages/ModifiersSyntax'
import { Overview } from './pages/Overview'
import { route } from './routes'

export default function Root() {
  return (
    <BrowserRouter>
      <Switch>
        {[
          [Overview, route.home],
          [ColumnsBasics, route.columns.basics],
          [ColumnsNesting, route.columns.nesting],
          [ColumnsResponsiveness, route.columns.responsiveness],
          [ColumnsSizes, route.columns.sizes],
          [ComponentsBreadcrumb, route.components.breadcrumb],
          [ComponentsNavbar, route.components.navbar],
          [ComponentsModal, route.components.modal],
          [ElementsBox, route.elements.box],
          [ElementsButton, route.elements.button],
          [ElementsContent, route.elements.content],
          [ElementsDelete, route.elements.delete],
          [ElementsTag, route.elements.tag],
          [FormGeneral, route.form.general],
          [FormInput, route.form.input],
          [FormRadio, route.form.radio],
          [FormTextarea, route.form.textarea],
          [LayoutContainer, route.layout.container],
          [LayoutFooter, route.layout.footer],
          [LayoutHero, route.layout.hero],
          [LayoutLevel, route.layout.level],
          [LayoutMediaObject, route.layout.mediaObject],
          [LayoutSection, route.layout.section],
          [LayoutTiles, route.layout.tiles],
          [ModifiersSyntax, route.modifiers.syntax],
          [ModifiersColorHelpers, route.modifiers.colorHelpers],
        ].map(([component, path], i) => (
          <Route key={i} component={component} exact path={path} />
        ))}

        <Redirect from='*' to={route.home} />
      </Switch>
    </BrowserRouter>
  )
}
