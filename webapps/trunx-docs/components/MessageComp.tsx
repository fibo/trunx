import { FC, PropsWithChildren } from 'react'
import { Message, bulma } from 'trunx'

export type ButtonProps = {
  header?: string
}

export const MessageComp: FC<PropsWithChildren<ButtonProps>> = ({ header, children }) => {
  return (
    <Message isInfo className={bulma('mt-5')}>
      {header && <Message.Header>{header}</Message.Header>}
      <Message.Body>{children}</Message.Body>
    </Message>
  )
}
