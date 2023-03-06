"use client"
import { FC, useCallback, useState } from "react"
import {
  Button,
  Columns,
  Column,
  Modal,
  ModalBackground,
  ModalClose,
  ModalContent,
  useStopScroll,
} from "trunx"
import { Code, PageSection } from "@/components"

const ExampleModal: FC = () => {
  const [isActive, setIsActive] = useState(false)

  const toggleModal = useCallback(() => {
    setIsActive((active) => !active)
  }, [])

  useStopScroll(isActive)

  return (
    <>
      <Button size="large" color="primary" onClick={toggleModal}>
        Launch example modal
      </Button>

      <Modal isActive={isActive}>
        <ModalBackground onClick={toggleModal} />

        <ModalContent>{/* Any other Trunx components you want */}</ModalContent>

        <ModalClose size="large" onClick={toggleModal} />
      </Modal>
    </>
  )
}

export default function Example() {
  return (
    <PageSection>
      <p>The modal structure is very simple:</p>

      <ol>
        <li>
          <code>Modal</code>: the main container
        </li>

        <li>
          <code>ModalBackground</code>: a transparent overlay that can act as a click target to close the
          modal
        </li>

        <li>
          <code>ModalContent</code>: a horizontally and vertically centered container, with a maximum width
          of 640px, in which you can include any content
        </li>

        <li>
          <code>ModalClose</code>: a simple cross located in the top right corner
        </li>
      </ol>

      <p>
        To activate the modal, just add the <code>isActive</code> prop. You may also want to stop scroll
        overflow with <code>useStopScroll</code>
      </p>

      <Columns>
        <Column>
          <ExampleModal />
        </Column>
      </Columns>

      <Code
        snippet={`
const ExampleModal: FC = () => {
  const [isActive, setIsActive] = useState(false)

  const toggleModal = useCallback(() => {
    setIsActive((active) => !active)
  }, [])

  useStopScroll(isActive)

  return (
    <>
      <Button size="large" color="primary" onClick={toggleModal}>
        Launch example modal
      </Button>

      <Modal isActive={isActive}>
        <ModalBackground onClick={toggleModal} />

        <ModalContent>{/* Any other Trunx components you want */}</ModalContent>

        <ModalClose size="large" onClick={toggleModal} />
      </Modal>
    </>
  )
}
        `}
      />
    </PageSection>
  )
}
