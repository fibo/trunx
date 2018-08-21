import React, { Component, Fragment } from 'react'

import { storiesOf } from '@storybook/react'
import solidIcon from 'fa-svg-icon/solid'

import Button from '../component/Button'
import Card from '../component/Card'
import Column from '../component/Column'
import Columns from '../component/Columns'
import Container from '../component/Container'
import Content from '../component/Content'
import ClassicNavbar from '../component/ClassicNavbar'
import Delete from '../component/Delete'
import Icon from '../component/Icon'
import Image from '../component/Image'
import Navbar from '../component/Navbar'
import Media from '../component/Media'
import Message from '../component/Message'
import Modal from '../component/Modal'
import Pagination from '../component/Pagination'
import Section from '../component/Section'
import Subtitle from '../component/Subtitle'
import Tabs from '../component/Tabs'
import Title from '../component/Title'

import Code from './Code'
import indent from './indent'
import Meta from './Meta'

class ModalCardExample extends Component {
  constructor (props) {
    super(props)

    this.state = {
      modalIsActive: false
    }

    this.closeModal = this.closeModal.bind(this)
    this.openModal = this.openModal.bind(this)
  }

  closeModal () {
    this.setState({ modalIsActive: false })
  }

  openModal () {
    this.setState({ modalIsActive: true })
  }

  render () {
    const {
      modalIsActive
    } = this.state

    return (
      <Fragment>
        <Button
          isLarge
          isPrimary
          onClick={this.openModal}
        >Launch example modal</Button>
        <Modal isActive={modalIsActive}>
          <Modal.Background onClick={this.closeModal} />
          <Modal.Card>
            <Modal.Card.Head>
              <Modal.Card.Title>Modal title</Modal.Card.Title>

              <Delete onClick={this.closeModal} />
            </Modal.Card.Head>
            <Modal.Card.Body>
              body
            </Modal.Card.Body>
            <Modal.Card.Foot>
              <Button>Cancel</Button>
              <Button isSuccess>Save changes</Button>
            </Modal.Card.Foot>
          </Modal.Card>
        </Modal>
      </Fragment>
    )
  }
}

storiesOf('Components', module)
  .add('Card', () => (
    <Section>
      <Container>
        <Content>
          <Title is2>
            Card
          </Title>

          <Subtitle>
            An all-around flexible and composable component
          </Subtitle>

          <Meta />

          <hr />

          <p>
            The <b>card</b> component comprises several elements that you can mix and match:
          </p>

          <ul>
            <li>
              <code>Card</code>: the main container

              <ul>
                <li>
                  <code>Card.Header</code>: a horizontal bar with a shadow

                  <ul>
                    <li>
                      <code>Card.Title</code>: a left-aligned bold text
                    </li>

                    <li>
                      <code>Card.Icon</code>: a placeholder for an icon
                    </li>
                  </ul>
                </li>

                <li>
                  <code>Card.Image</code>: a fullwidth container for a responsive image
                </li>

                <li>
                  <code>Card.Content</code>: a multi-purpose container for <em>any</em> other element
                </li>

                <li>
                  <code>Card.Footer</code>: a horizontal list of controls

                  <ul>
                    <li>
                      <code>Card.Footer.Item</code>: a repeatable list item
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>

          <Columns>
            <Column isOneThird>
              <Card>
                <Card.Image is4by3>
                  <img src='https://bulma.io/images/placeholders/1280x960.png' alt='Placeholder image' />
                </Card.Image>

                <Card.Content>
                  <Media>
                    <Media.Left>
                      <Image
                        alt='Placeholder image'
                        is48x48
                        src='https://bulma.io/images/placeholders/96x96.png'
                      />
                    </Media.Left>

                    <Media.Content>
                      <Title is4>John Smith</Title>
                      <Subtitle is6>@johnsmith</Subtitle>
                    </Media.Content>
                  </Media>

                  <Content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                    <a href='#'>#css</a> <a href='#'>#responsive</a>
                    <br />
                    <time dateTime='2016-1-1'>11:09 PM - 1 Jan 2016</time>
                  </Content>
                </Card.Content>
              </Card>
            </Column>

            <Column isTwoThirds>
              <Code language='jsx'>
                {indent`
                  <Card>
                    <Card.Image is4by3>
                      <img src='https://bulma.io/images/placeholders/1280x960.png' alt='Placeholder image' />
                    </Card.Image>

                    <Card.Content>
                      <Media>
                        <Media.Left>
                          <Image is48x48>
                            <img src='https://bulma.io/images/placeholders/96x96.png' alt='Placeholder image' />
                          </Image>
                        </Media.Left>

                        <Media.Content>
                          <Title is4>John Smith</Title>
                          <Subtitle is6>@johnsmith</Subtitle>
                        </Media.Content>
                      </Media>

                      <Content>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                        <a href='#'>#css</a> <a href='#'>#responsive</a>
                        <br />
                        <time dateTime='2016-1-1'>11:09 PM - 1 Jan 2016</time>
                      </Content>
                    </Card.Content>
                  </Card>
                `}
              </Code>
            </Column>
          </Columns>

          <hr />

          <Columns>
            <Column isOneThird>
              <Card>
                <Card.Header>
                  <Card.Header.Title>Component</Card.Header.Title>
                  <Card.Header.Icon aria-label='more-options'>
                    <Icon>
                      <Icon.Svg icon={solidIcon.angleDown} />
                    </Icon>
                  </Card.Header.Icon>
                </Card.Header>

                <Card.Content>
                  <Content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                    <a href='#'>#css</a> <a href='#'>#responsive</a>
                    <br />
                    <time dateTime='2016-1-1'>11:09 PM - 1 Jan 2016</time>
                  </Content>
                </Card.Content>

                <Card.Footer>
                  <Card.Footer.Item href='#'>Save</Card.Footer.Item>

                  <Card.Footer.Item href='#'>Edit</Card.Footer.Item>

                  <Card.Footer.Item href='#'>Delete</Card.Footer.Item>
                </Card.Footer>
              </Card>
            </Column>

            <Column isTwoThirds>
              <Code language='jsx'>
                {indent`
                  <Card>
                    <Card.Header>
                      <Card.Header.Title>Component</Card.Header.Title>
                      <Card.Header.Icon aria-label='more-options'>
                        <Icon>
                          <Icon.Svg icon={solidIcon.angleDown} />
                        </Icon>
                      </Card.Header.Icon>
                    </Card.Header>

                    <Card.Content>
                      <Content>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                        <a href='#'>#css</a> <a href='#'>#responsive</a>
                        <br />
                        <time dateTime='2016-1-1'>11:09 PM - 1 Jan 2016</time>
                      </Content>
                    </Card.Content>

                    <Card.Footer>
                      <Card.Footer.Item href='#'>Save</Card.Footer.Item>

                      <Card.Footer.Item href='#'>Edit</Card.Footer.Item>

                      <Card.Footer.Item href='#'>Delete</Card.Footer.Item>
                    </Card.Footer>
                  </Card>
                `}
              </Code>
            </Column>
          </Columns>

          <hr />

          <Columns>
            <Column isOneThird>
              <Card>
                <Card.Content>
                  <Title>
                    “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”
                  </Title>

                  <Subtitle>Jeff Atwood</Subtitle>
                </Card.Content>

                <Card.Footer>
                  <Card.Footer.Item href='#'>
                    <span>View on <a href='https://twitter.com/codinghorror/status/506010907021828096'>Twitter</a></span>
                  </Card.Footer.Item>

                  <Card.Footer.Item href='#'>
                    <span>Share on <a href='#'>Facebook</a></span>
                  </Card.Footer.Item>
                </Card.Footer>
              </Card>
            </Column>

            <Column isTwoThirds>
              <Code language='jsx'>
                {indent`
                  <Card>
                    <Card.Content>
                      <Title>
                        “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”
                      </Title>

                      <Subtitle>Jeff Atwood</Subtitle>
                    </Card.Content>

                    <Card.Footer>
                      <Card.Footer.Item href='#'>
                        <span>View on <a href='https://twitter.com/codinghorror/status/506010907021828096'>Twitter</a></span>
                      </Card.Footer.Item>

                      <Card.Footer.Item href='#'>
                        <span>Share on <a href='#'>Facebook</a></span>
                      </Card.Footer.Item>
                    </Card.Footer>
                  </Card>
                `}
              </Code>
            </Column>
          </Columns>
        </Content>
      </Container>
    </Section>
  ))
  .add('Message', () => (
    <Section>
      <Container>
        <Content>
          <Title is2>
            Message
          </Title>

          <Subtitle>
            Colored <b>message</b> blocks, to emphasize part of your page
          </Subtitle>

          <Meta colors sizes />

          <hr />

          <Columns>
            <Column isHalf>
              <Message>
                <Message.Header>
                  <p>Hello World</p>

                  <Delete />
                </Message.Header>

                <Message.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
                </Message.Body>
              </Message>
            </Column>

            <Column isHalf>
              <Code language='jsx'>
                {indent`
                  <Message>
                    <Message.Header>
                      <p>Hello World</p>

                      <Delete />
                    </Message.Header>

                    <Message.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
                    </Message.Body>
                  </Message>
                `}
              </Code>
            </Column>
          </Columns>
        </Content>
      </Container>
    </Section>
  ))
  .add('Modal', () => (
    <Section>
      <Container>
        <Content>
          <Title is2>
            Modal
          </Title>

          <Subtitle>
            A classic <b>modal</b> overlay, in which you can include <em>any</em> content you want
          </Subtitle>

          <Meta />

          <hr />

          <p>
            The modal structure is very simple:
          </p>

          <ul>
            <li>
              <code>modal</code>: the main container
              <ul>
                <li>
                  <code>modal-background</code>: a transparent overlay that can act as a click target to close the modal
                </li>

                <li>
                  <code>modal-content</code>: a horizontally and vertically centered container, with a maximum width of 640px, in which you can include any content
                </li>

                <li>
                  <code>modal-close</code>: a simple cross located in the top right corner
                </li>
              </ul>
            </li>
          </ul>

          <ModalCardExample />
        </Content>
      </Container>
    </Section>
  ))
  .add('Navbar', () => (
    <Section>
      <Container>
        <Content>
          <Title is2>
            Navbar
          </Title>

          <Subtitle>
            A responsive horizontal <b>navbar</b> that can support images, links, buttons, and dropdowns
          </Subtitle>

          <Meta />

          <hr />

          <p>
            The <code>Navbar</code> component is a responsive and versatile horizontal navigation bar with the following structure:
          </p>

          <ul>
            <li>
              <code>Navbar</code>: the <b>main</b> container

              <ul>
                <li>
                  <code>Navbar.Brand</code>: the <b>left side</b>, <strong className='has-text-success'>always visible</strong>, which usually contains the logo and optionally some links or icons

                  <ul>
                    <li>
                      <code>Navbar.Burger</code>: the <b>hamburger</b> icon, which toggles the navbar menu on touch devices
                    </li>
                  </ul>
                </li>

                <li>
                  <code>Navbar.Menu</code>: the <b>right side</b>, hidden on touch devices, visible on desktop

                  <ul>
                    <li>
                      <code>Navbar.Start</code>: the <b>left part</b> of the menu, which appears next to the navbar brand on desktop
                    </li>

                    <li>
                      <code>Navbar.End</code>: the <b>right part</b> of the menu, which appears at the end of the navbar

                      <ul>
                        <li>
                          <code>Navbar.Item</code>: each <b>single item</b> of the navbar, which can either be an <code>a</code> or a <code>div</code>

                          <ul>
                            <li>
                              <code>Navbar.Link</code>: a <b>link</b> as the sibling of a dropdown, with an arrow
                            </li>

                            <li>
                              <code>Navbar.Dropdown</code>: the <b>dropdown menu</b>, which can include navbar items and dividers

                              <ul>
                                <li>
                                  <code>Navbar.Divider</code>: a <b>horizontal line</b> to separate navbar items
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

          <Title is4>
            Classic Navbar
          </Title>

          <p>
            Probably you need the <b>classic navbar</b> on top, with a classic hamburger icon. You can use a <code>ClassicNavbar</code> component.
          </p>

          <ClassicNavbar
            brand={() => (
              <Navbar.Item
                href='https://g14n.info/trunx'
              >Trunx</Navbar.Item>
            )}
          >
            <Navbar.Start />
            <Navbar.End>
              <Navbar.Item>Foo</Navbar.Item>
              <Navbar.Item>Bar</Navbar.Item>
            </Navbar.End>
          </ClassicNavbar>

          <Code language='jsx'>
            {indent`
              <ClassicNavbar
                brand={() => (
                  <Navbar.Item
                    href='https://g14n.info/trunx'
                  >Trunx</Navbar.Item>
                )}
              >
                <Navbar.Start />
                <Navbar.End>
                  <Navbar.Item>Foo</Navbar.Item>
                  <Navbar.Item>Bar</Navbar.Item>
                </Navbar.End>
              </ClassicNavbar>
            `}
          </Code>

          <hr />

          <Title is4>
            Navbar brand
          </Title>

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
              <Navbar.Item
                href='https://g14n.info/trunx'
              >Trunx</Navbar.Item>
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
        </Content>
      </Container>
    </Section>
  ))
  .add('Pagination', () => (
    <Section>
      <Container>
        <Content>
          <Title is2>
            Pagination
          </Title>

          <Subtitle>
            A responsive, usable, and flexible <b>pagination</b>
          </Subtitle>

          <Meta sizes />

          <hr />

          <p>
            The pagination component consists of several elements:
          </p>

          <ul>
            <li>
              <code>Pagination.Previous</code> and <code>Pagination.Next</code> for incremental navigation
            </li>

            <li>
              <code>Pagination.List</code> which displays page items:

              <ul>
                <li>
                  <code>Pagination.Link</code> for the page numbers
                </li>

                <li>
                  <code>Pagination.Ellipsis</code> for range separators
                </li>
              </ul>
            </li>
          </ul>

          <p>
            All elements are optional so you can compose your pagination as you wish.
          </p>
        </Content>

        <Pagination>
          <Pagination.Previous>Previous</Pagination.Previous>
          <Pagination.Next>Next page</Pagination.Next>

          <Pagination.List>
            <Pagination.Link aria-label='Go to page 1'>1</Pagination.Link>
            <Pagination.Ellipsis />
            <Pagination.Link aria-label='Go to page 45'>45</Pagination.Link>
            <Pagination.Link isCurrent aria-label='Page 46' aria-current='page'>46</Pagination.Link>
            <Pagination.Link aria-label='Go to page 47'>47</Pagination.Link>
            <Pagination.Ellipsis />
            <Pagination.Link aria-label='Go to page 86'>86</Pagination.Link>
          </Pagination.List>
        </Pagination>
      </Container>
    </Section>
  ))
  .add('Tabs', () => (
    <Section>
      <Container>
        <Content>
          <Title is2>
            Tabs
          </Title>

          <Subtitle>
            Simple responsive horizontal navigation <b>tabs</b>, with different styles
          </Subtitle>

          <Meta sizes />

          <hr />

          <p>
            The <code>Tabs</code> component contains a <code>Tabs.Item</code> components.
            The default style has a single border at the bottom.
          </p>

          <Tabs>
            <Tabs.Item isActive>Pictures</Tabs.Item>

            <Tabs.Item>Music</Tabs.Item>

            <Tabs.Item>Videos</Tabs.Item>

            <Tabs.Item>Documents</Tabs.Item>
          </Tabs>

          <Code language='jsx'>
            {indent`
              <Tabs>
                <Tabs.Item isActive>Pictures</Tabs.Item>

                <Tabs.Item>Music</Tabs.Item>

                <Tabs.Item>Videos</Tabs.Item>

                <Tabs.Item>Documents</Tabs.Item>
              </Tabs>
            `}
          </Code>
        </Content>
      </Container>
    </Section>
  ))
