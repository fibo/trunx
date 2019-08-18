import React from 'react'
import { Redirect } from 'react-router-dom'

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

          <Navbar.Item hasDropdown isHoverable>
            <Navbar.Link>
              Columns
            </Navbar.Link>

            <Navbar.Dropdown>
              <Navbar.Item
                onClick={redirectTo('/columns/basics')}
              >
                Basics
              </Navbar.Item>

              <Navbar.Item
                onClick={redirectTo('/columns/sizes')}
              >
                Sizes
              </Navbar.Item>

              <Navbar.Item
                onClick={redirectTo('/columns/responsiveness')}
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
                onClick={redirectTo('/layout/container')}
              >
                Container
              </Navbar.Item>

              <Navbar.Item
                onClick={redirectTo('/layout/level')}
              >
                Level
              </Navbar.Item>

              <Navbar.Item
                onClick={redirectTo('/layout/media-object')}
              >
                Media Object
              </Navbar.Item>

              <Navbar.Item
                onClick={redirectTo('/layout/footer')}
              >
                Footer
              </Navbar.Item>

              <Navbar.Item
                onClick={redirectTo('/layout/tiles')}
              >
                Tiles
              </Navbar.Item>
            </Navbar.Dropdown>
          </Navbar.Item>
        </Navbar.Start>
      </Navbar.Menu>
    </Navbar>
  )
}
