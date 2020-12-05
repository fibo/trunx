import React from 'react'
import { Redirect, useLocation } from 'react-router-dom'

import { Navbar } from '../../../component/index'
import { route } from '../routes'

export function Nav() {
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
    return <Redirect to={redirect} push />
  }

  return (
    <Navbar isPrimary>
      <Navbar.Brand>
        <Navbar.Item onClick={redirectTo(route.home)}>
          <img src='/assets/trunx-logotype-white.png' />
        </Navbar.Item>

        <Navbar.Burger isActive={expanded} onClick={onClickBurger} />
      </Navbar.Brand>

      <Navbar.Menu isActive={expanded}>
        <Navbar.Start>
          {[
            {
              label: 'Modifiers',
              items: [
                { label: 'Syntax', route: route.modifiers.syntax },
                { label: 'Color helpers', route: route.modifiers.colorHelpers },
              ],
            },
            {
              label: 'Columns',
              items: [
                { label: 'Basics', route: route.columns.basics },
                { label: 'Nesting', route: route.columns.nesting },
                { label: 'Sizes', route: route.columns.sizes },
                {
                  label: 'Responsiveness',
                  route: route.columns.responsiveness,
                },
              ],
            },
            {
              label: 'Layout',
              items: [
                { label: 'Container', route: route.layout.container },
                { label: 'Level', route: route.layout.level },
                { label: 'Media Object', route: route.layout.mediaObject },
                { label: 'Footer', route: route.layout.footer },
                { label: 'Tiles', route: route.layout.tiles },
              ],
            },
            {
              label: 'Form',
              items: [
                { label: 'General', route: route.form.general },
                { label: 'Input', route: route.form.input },
                { label: 'Textarea', route: route.form.textarea },
                { label: 'Radio', route: route.form.radio },
              ],
            },
            {
              label: 'Elements',
              items: [
                { label: 'Box', route: route.elements.box },
                { label: 'Button', route: route.elements.button },
                { label: 'Content', route: route.elements.content },
                { label: 'Delete', route: route.elements.delete },
                { label: 'Tag', route: route.elements.tag },
                { label: 'Title', route: route.elements.title },
              ],
            },
            {
              label: 'Components',
              items: [
                { label: 'Breadcrumb', route: route.components.breadcrumb },
                { label: 'Navbar', route: route.components.navbar },
                { label: 'Modal', route: route.components.modal },
              ],
            },
          ].map(({ label, items }, i) => (
            <Navbar.Item hasDropdown isHoverable key={i}>
              <Navbar.Link>{label}</Navbar.Link>

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
