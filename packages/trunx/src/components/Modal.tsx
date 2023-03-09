"use client"
import { FC, ButtonHTMLAttributes, HTMLAttributes, PropsWithChildren, ReactNode } from "react"
import { classNames } from "../classNames.js"
import { BooleanModifierProps, modifier, sizeClassName, SizeModifierProp } from "../modifiers/index.js"

export type ModalProps = HTMLAttributes<HTMLDivElement> & Pick<BooleanModifierProps, "isActive">

export const Modal: FC<PropsWithChildren<ModalProps>> = ({ children, className, isActive, ...props }) => {
  const _class = classNames("modal", modifier({ isActive }), className)

  return (
    <div className={_class} {...props}>
      {children}
    </div>
  )
}

export type ModalBackgroundProps = HTMLAttributes<HTMLDivElement>

export const ModalBackground: FC<ModalBackgroundProps> = ({ className, ...props }) => {
  const _class = classNames("modal-background", className)

  return <div className={_class} {...props} />
}

export type ModalCardProps = ModalProps &
  Partial<{
    header: ReactNode
    content: ReactNode
    footer: ReactNode
  }>

export const ModalCard: FC<PropsWithChildren<ModalCardProps>> = ({
  children,
  header,
  footer,
  className,
}) => {
  const _class = classNames("modal-card", className)

  return (
    <div className={_class}>
      {header && (
        <header className="modal-card-head">
          <p className="modal-card-title">{header}</p>
        </header>
      )}

      <div className="modal-card-body">{children}</div>

      {footer ? <footer className="modal-card-foot">{footer}</footer> : null}
    </div>
  )
}

export type ModalCloseProps = ButtonHTMLAttributes<HTMLButtonElement> & SizeModifierProp<"large">

export const ModalClose: FC<ModalCloseProps> = ({ className, size, ...props }) => {
  const _class = classNames("modal-close", sizeClassName(size), className)

  return <button className={_class} aria-label="close" {...props} />
}

export type ModalContentProps = HTMLAttributes<HTMLDivElement>

export const ModalContent: FC<PropsWithChildren<ModalContentProps>> = ({
  children,
  className,
  ...props
}) => {
  const _class = classNames("modal-content", className)

  return (
    <div className={_class} {...props}>
      {children}
    </div>
  )
}
