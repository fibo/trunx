import { FC, HTMLAttributes, PropsWithChildren, ReactNode } from "react"
import {
  ColorArg,
  MainColor,
  ShadeColor,
  SizeArg,
  colorClass,
  sizeClass,
} from "@trunx/bulma"
import { classnames } from "@trunx/classnames"

export type MessageProps = HTMLAttributes<HTMLElement> &
  ColorArg<MainColor | ShadeColor> &
  SizeArg &
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
}) => (
  <article
    className={classnames(
      "message",
      colorClass(color),
      sizeClass(size),
      className
    )}
    {...props}
  >
    {header && <div className="message-header">{header}</div>}

    <div className="message-body">{children}</div>
  </article>
)
