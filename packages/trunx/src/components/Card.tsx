import { FC, HTMLAttributes, PropsWithChildren, ReactNode, useMemo } from 'react'
import { classNames } from '../classNames.js'

export type CardProps = HTMLAttributes<HTMLDivElement> &
  Partial<{
    header: ReactNode
    image: ReactNode
    footer: ReactNode
  }>

export const Card: FC<PropsWithChildren<CardProps>> = ({ children, header, footer, image, className }) => {
  const _className = useMemo(() => classNames('card', className), [className])
  return (
    <div className={_className}>
      {header ? <header className="card-header">{header}</header> : null}
      {image ? <div className="card-image">{image}</div> : null}
      <div className="card-content">{children}</div>
      {footer ? <footer className="card-footer">{footer}</footer> : null}
    </div>
  )
}
