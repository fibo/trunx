import { FC, HTMLAttributes, PropsWithChildren, ReactNode } from "react"
import { classnames } from "@trunx/classnames"
import {
  ColorModifierProp,
  MainColor,
  ShadeColor,
  SizeModifierProp,
  colorClassName,
  sizeClassName,
} from "../modifiers/index.js"

export type MessageProps = HTMLAttributes<HTMLElement> &
  ColorModifierProp<MainColor | ShadeColor> &
  SizeModifierProp &
  Partial<{
    header: ReactNode
  }>

export const Message: FC<PropsWithChildren<MessageProps>> = ({
  children,
  className,
  color,
  header,
  size,
  ...props
}) => {
  return (
    <article
      className={classnames(
        "message",
        colorClassName(color),
        sizeClassName(size),
        className
      )}
      {...props}
    >
      {header && <div className="message-header">{header}</div>}

      <div className="message-body">{children}</div>
    </article>
  )
}
