import {FC, HTMLAttributes, PropsWithChildren, ReactNode} from "react"
import {classnames} from "@trunx/classnames"

export type CardProps = HTMLAttributes<HTMLDivElement> &
  Partial<{
    header: ReactNode
    image: ReactNode
    footer: ReactNode
  }>

export const Card: FC<PropsWithChildren<CardProps>> = ({
  children,
  header,
  footer,
  image,
  className,
}) => (
  <div className={classnames("card", className)}>
    {header ? <header className="card-header">{header}</header> : null}

    {image ? <div className="card-image">{image}</div> : null}

    <div className="card-content">{children}</div>

    {footer ? <footer className="card-footer">{footer}</footer> : null}
  </div>
)
