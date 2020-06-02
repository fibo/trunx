import React from 'react'
import { Redirect, useLocation } from 'react-router-dom'

import routes from '../routes.js'

import {
  Navbar
} from '../../../index.js'

export default function Nav () {
  const { pathname } = useLocation()

  const [expanded, setExpanded] = React.useState(false)
  const [redirect, setRedirect] = React.useState(null)

  const redirectTo = (wantedPathname) => () => {
    if (pathname !== wantedPathname) {
      setRedirect(wantedPathname)
    }
  }

  const onClickBurger = () => {
    setExpanded(!expanded)
  }

  if (typeof redirect === 'string') {
    return (
      <Redirect to={redirect} push />
    )
  }

  return (
    <Navbar
      isPrimary
    >
      <Navbar.Brand>
        <Navbar.Item
          onClick={redirectTo(routes.home)}
        >
          <img src='/assets/trunx-logotype-white.png' />
        </Navbar.Item>


        <Navbar.Burger
          isActive={expanded}
          onClick={onClickBurger}
        />
      </Navbar.Brand>

      <Navbar.Menu
        isActive={expanded}
      >
        <Navbar.Start>
          {[
            {
              label: 'Modifiers',
              items: [
                { label: 'Syntax', route: routes.modifiers.syntax },
                { label: 'Color helpers', route: routes.modifiers.colorHelpers }
              ]
            },
            {
              label: 'Columns',
              items: [
                { label: 'Basics', route: routes.columns.basics },
                { label: 'Nesting', route: routes.columns.nesting },
                { label: 'Sizes', route: routes.columns.sizes },
                { label: 'Responsiveness', route: routes.columns.responsiveness }
              ]
            },
            {
              label: 'Layout',
              items: [
                { label: 'Container', route: routes.layout.container },
                { label: 'Level', route: routes.layout.level },
                { label: 'Media Object', route: routes.layout.mediaObject },
                { label: 'Footer', route: routes.layout.footer },
                { label: 'Tiles', route: routes.layout.tiles },
              ]
            },
            {
              label: 'Form',
              items: [
                { label: 'General', route: routes.form.general },
                { label: 'Input', route: routes.form.input },
                { label: 'Textarea', route: routes.form.textarea },
                { label: 'Radio', route: routes.form.radio }
              ]
            },
            {
              label: 'Elements',
              items: [
                { label: 'Box', route: routes.elements.box },
                { label: 'Button', route: routes.elements.button },
                { label: 'Tag', route: routes.elements.tag }
              ]
            },
            {
              label: 'Components',
              items: [
                { label: 'Box', route: routes.components.breadcrumb },
                { label: 'Navbar', route: routes.components.navbar }
              ]
            }
          ].map(({ label, items }, i) => (
            <Navbar.Item
              hasDropdown
              isHoverable
              key={i}
            >
              <Navbar.Link>
                {label}
              </Navbar.Link>

              <Navbar.Dropdown>
                {items.map(({ label, route }, i) => (
                  <Navbar.Item
                    isActive={route === pathname}
                    key={i}
                    onClick={redirectTo(route)}
                  >
                    {label}
                  </Navbar.Item>
                ))}
              </Navbar.Dropdown>
            </Navbar.Item>
          ))}
        </Navbar.Start>
      </Navbar.Menu>
    </Navbar>
  )
}
