"use client"
import { FC, useCallback, useState } from "react"
import { Button, Columns, Column, Image, Modal, ModalBackground, ModalClose, ModalContent } from "trunx"
import { Code, PageSection } from "@/components"

const ImageModal: FC = () => {
  const [isActive, setIsActive] = useState(false)

  const toggleModal = useCallback(() => {
    setIsActive((active) => !active)
  }, [])

  return (
    <>
      <Button size="large" color="primary" onClick={toggleModal}>
        Launch Image Modal
      </Button>

      <Modal isActive={isActive}>
        <ModalBackground onClick={toggleModal} />

        <ModalContent>
          <Image alt="trunx" src="/assets/trunx-logotype-white.png" />
        </ModalContent>

        <ModalClose size="large" onClick={toggleModal} />
      </Modal>
    </>
  )
}

export default function Example() {
  return (
    <PageSection>
      <p>
        Because a modal can contain <b>anything you want</b>, you can very simply use it to build an image
        gallery for example.
      </p>

      <Columns>
        <Column>
          <ImageModal />
        </Column>
      </Columns>

      <Code
        snippet={`
const ImageModal: FC = () => {
  const [isActive, setIsActive] = useState(false)

  const toggleModal = useCallback(() => {
    setIsActive((active) => !active)
  }, [])

  return (
    <>
      <Button size="large" color="primary" onClick={toggleModal}>
        Launch Image Modal
      </Button>

      <Modal isActive={isActive}>
        <ModalBackground onClick={toggleModal} />

        <ModalContent>
          <Image alt="trunx" src="/assets/trunx-logotype-white.png" />
        </ModalContent>

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
