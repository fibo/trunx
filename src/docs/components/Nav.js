import React from 'react'
import { Redirect } from 'react-router-dom'

import {
  Navbar
} from '../../../index.js'

export default function Nav ({
  location: { pathname }
}) {
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
          onClick={redirectTo('/')}
        >
          Trunx
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
          <Navbar.Item hasDropdown isHoverable>
            <Navbar.Link>
              Modifiers
            </Navbar.Link>

            <Navbar.Dropdown>
              <Navbar.Item
                onClick={redirectTo('/modifiers/syntax')}
              >
                Syntax
              </Navbar.Item>

              <Navbar.Item
                onClick={redirectTo('/modifiers/color-helpers')}
              >
                Color helpers
              </Navbar.Item>
            </Navbar.Dropdown>
          </Navbar.Item>
        </Navbar.Start>
      </Navbar.Menu>
    </Navbar>
  )
}
