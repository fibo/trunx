import React from 'react'
import { Redirect } from 'react-router-dom'

import routes from '../routes.js'

import {
  Navbar
} from '../../../index.js'

export default function Nav ({
  pathname
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
          onClick={redirectTo(routes.home)}
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
                onClick={redirectTo(routes.modifiersSyntax)}
              >
                Syntax
              </Navbar.Item>

              <Navbar.Item
                onClick={redirectTo(routes.modifiers.colorHelpers)}
              >
                Color helpers
              </Navbar.Item>
            </Navbar.Dropdown>
          </Navbar.Item>

          <Navbar.Item hasDropdown isHoverable>
            <Navbar.Link>
              Columns
            </Navbar.Link>

            <Navbar.Dropdown>
              <Navbar.Item
                onClick={redirectTo(routes.columns.basics)}
              >
                Basics
              </Navbar.Item>

              <Navbar.Item
                onClick={redirectTo(routes.columns.sizes)}
              >
                Sizes
              </Navbar.Item>

              <Navbar.Item
                onClick={redirectTo(routes.columns.responsiveness)}
              >
                Responsiveness
              </Navbar.Item>
            </Navbar.Dropdown>
          </Navbar.Item>

          <Navbar.Item hasDropdown isHoverable>
            <Navbar.Link>
              Layout
            </Navbar.Link>

            <Navbar.Dropdown>
              <Navbar.Item
                onClick={redirectTo(routes.layout.container)}
              >
                Container
              </Navbar.Item>

              <Navbar.Item
                onClick={redirectTo(routes.layout.level)}
              >
                Level
              </Navbar.Item>

              <Navbar.Item
                onClick={redirectTo(routes.layout.mediaObject)}
              >
                Media Object
              </Navbar.Item>

              <Navbar.Item
                onClick={redirectTo(routes.layout.footer)}
              >
                Footer
              </Navbar.Item>

              <Navbar.Item
                onClick={redirectTo(routes.layout.tiles)}
              >
                Tiles
              </Navbar.Item>
            </Navbar.Dropdown>
          </Navbar.Item>

          <Navbar.Item hasDropdown isHoverable>
            <Navbar.Link>
              Components
            </Navbar.Link>

            <Navbar.Dropdown>
              <Navbar.Item
                onClick={redirectTo(routes.components.navbar)}
              >
                Navbar
              </Navbar.Item>
            </Navbar.Dropdown>
          </Navbar.Item>
        </Navbar.Start>
      </Navbar.Menu>
    </Navbar>
  )
}
