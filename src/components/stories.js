import React, { Component, Fragment } from 'react'

import { storiesOf } from '@storybook/react'

import Button from '../elements/Button'
import ClassicNavbar from './ClassicNavbar'
import Delete from '../elements/Delete'
import Navbar from './Navbar'
import Modal from './Modal'

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

storiesOf('Components/Modal', module)
  .add('Modal card', () => (
    <ModalCardExample />
  ))

storiesOf('Components', module)
  .add('Navbar', () => (
    <Navbar>
      <Navbar.Brand>
        <Navbar.Item
          href='https://g14n.info/trunx'
        >Trunx</Navbar.Item>
        <Navbar.Burger />
      </Navbar.Brand>
    </Navbar>
  ))

storiesOf('Components/Navbar', module)
  .add('Classic navbar', () => (
    <ClassicNavbar
      brand={() => (
        <Navbar.Item
          href='https://g14n.info/trunx'
        >Trunx</Navbar.Item>
      )}
    >
      <Navbar.Start />
      <Navbar.End />
    </ClassicNavbar>
  ))
