import React, { Component } from 'react'

import {
  Buttons,
  Button,
  Container,
  Content,
  Navbar,
  Section,
  Subtitle,
  Title
} from '../../../component/index'
import { Code } from '../components/Code'
import { Nav } from '../components/Nav'
import { indent } from '../utils/indent'

class ClassicNavbarExample extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isActive: false
    }

    this.handleOnClickBurger = this.handleOnClickBurger.bind(this)
  }

  handleOnClickBurger () {
    this.setState({ isActive: !this.state.isActive })
  }

  render () {
    const { isActive } = this.state

    return (
      <Navbar aria-label='main navigation'>
        <Navbar.Brand>
          <Navbar.Item href='https://g14n.info/trunx'>Trunx</Navbar.Item>

          <Navbar.Burger
            isActive={isActive}
            onClick={this.handleOnClickBurger}
          />
        </Navbar.Brand>

        <Navbar.Menu isActive={isActive}>{this.props.children}</Navbar.Menu>

        <Navbar.End>
          <Navbar.Item>Foo</Navbar.Item>
          <Navbar.Item>Bar</Navbar.Item>
        </Navbar.End>
      </Navbar>
    )
  }
}

const NavbarExample = (props) => (
  <Navbar {...props}>
    <Navbar.Brand>
      <Navbar.Item href='https://bulma.io'>
        <img
          src='https://bulma.io/images/bulma-logo.png'
          width='112'
          height='28'
        />
      </Navbar.Item>
    </Navbar.Brand>

    <Navbar.Burger />

    <Navbar.Menu>
      <Navbar.Start>
        <Navbar.Item>Home</Navbar.Item>

        <Navbar.Item>Documentation</Navbar.Item>

        <Navbar.Item hasDropdown isHoverable>
          <Navbar.Link>More</Navbar.Link>

          <Navbar.Dropdown>
            <Navbar.Item>About</Navbar.Item>

            <Navbar.Item>Jobs</Navbar.Item>

            <Navbar.Item>Contact</Navbar.Item>

            <Navbar.Divider />

            <Navbar.Item>Report an issue</Navbar.Item>
          </Navbar.Dropdown>
        </Navbar.Item>
      </Navbar.Start>

      <Navbar.End>
        <Navbar.Item>
          <Buttons>
            <Button isPrimary>Tweet</Button>

            <Button isLight>Download</Button>
          </Buttons>
        </Navbar.Item>
      </Navbar.End>
    </Navbar.Menu>
  </Navbar>
)

export function ComponentsNavbar ({ location: { pathname } }) {
  return (
    <>
      <Nav />

      <Section>
        <Container>
          <Content>
            <Title is2>Navbar</Title>

            <Subtitle>
              A responsive horizontal <b>navbar</b> that can support images,
              links, buttons, and dropdowns
            </Subtitle>

            <hr />

            <p>
              The <code>Navbar</code> component is a responsive and versatile
              horizontal navigation bar with the following structure:
            </p>

            <ul>
              <li>
                <code>Navbar</code>: the <b>main</b> container
                <ul>
                  <li>
                    <code>Navbar.Brand</code>: the <b>left side</b>,{' '}
                    <strong className='has-text-success'>always visible</strong>
                    , which usually contains the logo and optionally some links
                    or icons
                    <ul>
                      <li>
                        <code>Navbar.Burger</code>: the <b>hamburger</b> icon,
                        which toggles the navbar menu on touch devices
                      </li>
                    </ul>
                  </li>

                  <li>
                    <code>Navbar.Menu</code>: the <b>right side</b>, hidden on
                    touch devices, visible on desktop
                    <ul>
                      <li>
                        <code>Navbar.Start</code>: the <b>left part</b> of the
                        menu, which appears next to the navbar brand on desktop
                      </li>

                      <li>
                        <code>Navbar.End</code>: the <b>right part</b> of the
                        menu, which appears at the end of the navbar
                        <ul>
                          <li>
                            <code>Navbar.Item</code>: each <b>single item</b> of
                            the navbar, rendered with an <code>a</code> tag; if
                            you want to render an item as a <code>div</code> use{' '}
                            <code>{"<Navbar.Item as='div'/>"}</code>.
                            <ul>
                              <li>
                                <code>Navbar.Link</code>: a <b>link</b> as the
                                sibling of a dropdown, with an arrow
                              </li>

                              <li>
                                <code>Navbar.Dropdown</code>: the{' '}
                                <b>dropdown menu</b>, which can include navbar
                                items and dividers
                                <ul>
                                  <li>
                                    <code>Navbar.Divider</code>: a{' '}
                                    <b>horizontal line</b> to separate navbar
                                    items
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>

            <hr />

            <Title is4>Basic Navbar</Title>

            <p>
              To <b>get started quickly</b>, here is what a complete basic
              navbar looks like:
            </p>

            <Navbar>
              <Navbar.Brand>
                <Navbar.Item href='https://bulma.io'>
                  <img
                    src='https://bulma.io/images/bulma-logo.png'
                    width='112'
                    height='28'
                  />
                </Navbar.Item>
              </Navbar.Brand>

              <Navbar.Burger />

              <Navbar.Menu>
                <Navbar.Start>
                  <Navbar.Item>Home</Navbar.Item>

                  <Navbar.Item>Documentation</Navbar.Item>

                  <Navbar.Item hasDropdown isHoverable>
                    <Navbar.Link>More</Navbar.Link>

                    <Navbar.Dropdown>
                      <Navbar.Item>About</Navbar.Item>

                      <Navbar.Item>Jobs</Navbar.Item>

                      <Navbar.Item>Contact</Navbar.Item>

                      <Navbar.Divider />

                      <Navbar.Item>Report an issue</Navbar.Item>
                    </Navbar.Dropdown>
                  </Navbar.Item>
                </Navbar.Start>

                <Navbar.End>
                  <Navbar.Item>
                    <Buttons>
                      <Button isPrimary>
                        <strong>Sign up</strong>
                      </Button>

                      <Button isLight>Log in</Button>
                    </Buttons>
                  </Navbar.Item>
                </Navbar.End>
              </Navbar.Menu>
            </Navbar>

            <Code language='jsx'>
              {indent`
                <Navbar>
                  <Navbar.Brand>
                    <Navbar.Item href='https://bulma.io'>
                      <img src='https://bulma.io/images/bulma-logo.png' width='112' height='28' />
                    </Navbar.Item>
                  </Navbar.Brand>

                  <Navbar.Burger />

                  <Navbar.Menu>
                    <Navbar.Start>
                      <Navbar.Item>
                        Home
                      </Navbar.Item>

                      <Navbar.Item>
                        Documentation
                      </Navbar.Item>

                      <Navbar.Item hasDropdown isHoverable>
                        <Navbar.Link>
                          More
                        </Navbar.Link>

                        <Navbar.Dropdown>
                          <Navbar.Item>
                            About
                          </Navbar.Item>

                          <Navbar.Item>
                            Jobs
                          </Navbar.Item>

                          <Navbar.Item>
                            Contact
                          </Navbar.Item>

                          <Navbar.Divider />

                          <Navbar.Item>
                            Report an issue
                          </Navbar.Item>
                        </Navbar.Dropdown>
                      </Navbar.Item>
                    </Navbar.Start>

                    <Navbar.End>
                      <Navbar.Item>
                        <Buttons>
                          <Button isPrimary>
                            <strong>Sign up</strong>
                          </Button>

                          <Button isLight>
                            Log in
                          </Button>
                        </Buttons>
                      </Navbar.Item>
                    </Navbar.End>
                  </Navbar.Menu>
                </Navbar>
              `}
            </Code>

            <hr />

            <Title is4>Navbar brand</Title>

            <p>
              The navbar-brand is the left side of the navbar. It can contain:
            </p>

            <ul>
              <li>
                a number of <code>navbar-item</code>
              </li>

              <li>
                the <code>navbar-burger</code> as last child
              </li>
            </ul>

            <Navbar>
              <Navbar.Brand>
                <Navbar.Item href='https://g14n.info/trunx'>Trunx</Navbar.Item>
                <Navbar.Burger />
              </Navbar.Brand>
            </Navbar>

            <Code language='jsx'>
              {indent`
                <Navbar>
                  <Navbar.Brand>
                    <Navbar.Item
                      href='https://g14n.info/trunx'
                    >Trunx</Navbar.Item>
                    <Navbar.Burger />
                  </Navbar.Brand>
                </Navbar>
              `}
            </Code>

            <hr />

            <Title is4>Colors</Title>

            <p>
              You can change the background color of the <code>Navbar</code> by
              using one of the <b>9 color modifiers</b>:
            </p>

            <ul>
              <li>
                <code>isPrimary</code>
              </li>
            </ul>

            <Code language='jsx'>
              {indent`
                <Navbar isPrimary>
                  {/* navbar brand, navbar menu... */}
                </Navbar>
              `}
            </Code>

            <div>
              <NavbarExample isPrimary />
            </div>

            <div>
              <NavbarExample isLink />
            </div>

            <div>
              <NavbarExample isInfo />
            </div>

            <div>
              <NavbarExample isSuccess />
            </div>

            <div>
              <NavbarExample isWarning />
            </div>

            <div>
              <NavbarExample isDanger />
            </div>

            <div>
              <NavbarExample isBlack />
            </div>

            <div>
              <NavbarExample isDark />
            </div>

            <div>
              <NavbarExample isLight />
            </div>

            <div>
              <NavbarExample isWhite />
            </div>

            <hr />

            <Title is4>Classic Navbar example</Title>

            <p>
              Probably you need a common <em>navbar</em> on top, with a classic{' '}
              <em>hamburger icon</em>. You can start with the following sample
              code.
            </p>

            <ClassicNavbarExample />

            <Code language='jsx'>
              {indent`
                class ClassicNavbarExample extends Component {
                  constructor (props) {
                    super(props)

                    this.state = {
                      isActive: false
                    }

                    this.onClickBurger = this.onClickBurger.bind(this)
                  }

                  onClickBurger () {
                    this.setState({ isActive: !this.state.isActive })
                  }

                  render () {
                    const {
                      isActive
                    } = this.state

                    return (
                      <Navbar aria-label='main navigation'>
                        <Navbar.Brand>
                          <Navbar.Item href='https://g14n.info/trunx'>Trunx</Navbar.Item>

                          <Navbar.Burger
                            isActive={isActive}
                            onClick={this.onClickBurger}
                          />
                        </Navbar.Brand>

                        <Navbar.Menu isActive={isActive}>
                          {this.props.children}
                        </Navbar.Menu>

                        <Navbar.End>
                          <Navbar.Item>Foo</Navbar.Item>
                          <Navbar.Item>Bar</Navbar.Item>
                        </Navbar.End>
                      </Navbar>
                    )
                  }
                }
              `}
            </Code>

            <hr />
          </Content>
        </Container>
      </Section>
    </>
  )
}
