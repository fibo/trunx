import { FC, HTMLAttributes, PropsWithChildren, ReactNode } from "react"
import { classNames } from "../classNames.js"
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
  const _class = classNames(
    "message",
    colorClassName(color),
    sizeClassName(size),
    className
  )

  return (
    <article className={_class} {...props}>
      {header && <div className="message-header">{header}</div>}

      <div className="message-body">{children}</div>
    </article>
  )
}
