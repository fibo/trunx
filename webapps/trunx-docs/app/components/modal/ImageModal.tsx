"use client"
import { FC, useCallback, useState } from "react"
import { Button, Columns, Column, Image, Modal, ModalContent } from "trunx"
import { Code, PageSection } from "@/components"

const ImageModal: FC = () => {
  const [isActive, setIsActive] = useState(false)

  const openModal = useCallback(() => {
    setIsActive(true)
  }, [])

  const closeModal = useCallback(() => {
    setIsActive(false)
  }, [])

  return (
    <>
      <Button size="large" color="primary" onClick={openModal}>
        Launch Image Modal
      </Button>

      <Modal isActive={isActive}>
        <ModalContent>
          <Image alt="trunx" src="/assets/trunx-logotype-white.png" />
        </ModalContent>
        <button className="modal-close is-large" aria-label="close" onClick={closeModal}></button>
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

  const onClick = useCallback(() => {
    setIsActive(true)
  }, [])

  return (
    <>
      <Button size="large" color="primary" onClick={onClick}>
        Launch Image Modal
      </Button>

      <Modal isActive={isActive}>
        <ModalContent>
          <img src="/assets/trunx-logotype-white.png" />
        </ModalContent>
      </Modal>
    </>
  )
}
        `}
      />
    </PageSection>
  )
}
