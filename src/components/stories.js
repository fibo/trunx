import React, { Component, Fragment } from 'react'

import { storiesOf } from '@storybook/react'

import Button from '../elements/Button'
import Delete from '../elements/Delete'
import Modal from './Modal'

class ModalCardExample extends Component {
  constructor (props) {
    super(props)

    this.state = {
      modalIsActive: false
    }
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
          onClick={() => {
            this.setState({ modalIsActive: true })
          }}
        >Launch example modal</Button>
        <Modal isActive={modalIsActive}>
          <Modal.Card>
            <Modal.Card.Head>
              <Modal.Card.Title>Modal title</Modal.Card.Title>
              <Delete
                onClick={() => {
                  this.setState({ modalIsActive: false })
                }}
              />
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
