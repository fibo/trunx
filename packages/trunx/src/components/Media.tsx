import { FC, HTMLAttributes, PropsWithChildren, ReactNode } from "react"
import { classnames } from "@trunx/classnames"

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
  return (
    <article className={classnames("media", className)} {...props}>
      {left && <div className="media-left">{left}</div>}

      {children}

      {right && <div className="media-right">{right}</div>}
    </article>
  )
}
