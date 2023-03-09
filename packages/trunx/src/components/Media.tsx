import { FC, HTMLAttributes, PropsWithChildren, ReactNode } from "react"
import { classNames } from "../classNames.js"

export type MediaProps = HTMLAttributes<HTMLElement> &
  Partial<{
    left: ReactNode
    right: ReactNode
  }>

export const Media: FC<PropsWithChildren<MediaProps>> = ({
  children,
  className,
  left,
  right,
  ...props
}) => {
  const _class = classNames("media", className)

  return (
    <article className={_class} {...props}>
      {left && <div className="media-left">{left}</div>}

      {children}

      {right && <div className="media-right">{right}</div>}
    </article>
  )
}
