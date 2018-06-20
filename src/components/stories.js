import React, { Component, Fragment } from 'react'

import { storiesOf } from '@storybook/react'

import Button from '../elements/Button'
import Modal from './Modal'
import ModalCard from './ModalCard'

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
        >
          Launch example modal
        </Button>
        <Modal isActive={modalIsActive}>
          <ModalCard />
        </Modal>
      </Fragment>
    )
  }
}

storiesOf('Components/Modal', module)
  .add('Modal card', () => (
    <ModalCardExample />
  ))
