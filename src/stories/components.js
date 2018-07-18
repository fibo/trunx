import React, { Component, Fragment } from 'react'

import { storiesOf } from '@storybook/react'

import Button from '../component/Button'
import Container from '../component/Container'
import Content from '../component/Content'
import ClassicNavbar from '../component/ClassicNavbar'
import Delete from '../component/Delete'
import Navbar from '../component/Navbar'
import Modal from '../component/Modal'
import Section from '../component/Section'
import Subtitle from '../component/Subtitle'
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
            The <code>navbar</code> component is a responsive and versatile horizontal navigation bar with the following structure:
          </p>

          <ul>
            <li>
              <code>navbar</code>: the main container
              <ul>
                <li />

                <li />
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
