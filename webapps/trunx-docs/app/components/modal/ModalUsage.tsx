"use client"
import { FC, useCallback, useState } from "react"
import {
  Box,
  Button,
  Columns,
  Column,
  Content,
  Image,
  Media,
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

        <ModalContent>
          {/* TODO add icons and Level */}
          <Box>
            <Media left={<Image alt="" dimension="64x64" src="/assets/placeholders/128x128.png" />}>
              <Content>
                <strong>John Smith</strong>
                <small>@johnsmith</small>
                <small>31m</small>
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa
                fringilla egestas. Nullam condimentum luctus turpis.
              </Content>
            </Media>
          </Box>
        </ModalContent>

        <ModalClose onClick={toggleModal} />
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

        <ModalClose onClick={toggleModal} />
      </Modal>
    </>
  )
}
        `}
      />
    </PageSection>
  )
}
