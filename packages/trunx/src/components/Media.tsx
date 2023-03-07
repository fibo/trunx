import { FC, HTMLAttributes, PropsWithChildren, ReactNode, useMemo } from "react"
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
  const _className = useMemo(() => classNames("media", className), [className])

  return (
    <article className={_className} {...props}>
      {left && <div className="media-left">{left}</div>}

      {children}

      {right && <div className="media-right">{right}</div>}
    </article>
  )
}
