import {
  FC,
  ButtonHTMLAttributes,
  HTMLAttributes,
  PropsWithChildren,
  ReactNode,
} from "react"
import { classnames } from "@trunx/classnames"
import {
  BooleanModifierProps,
  modifier,
  sizeClassName,
  SizeModifierProp,
} from "../modifiers/index.js"

export type ModalProps = HTMLAttributes<HTMLDivElement> &
  Pick<BooleanModifierProps, "isActive">

export const Modal: FC<PropsWithChildren<ModalProps>> = ({
  children,
  className,
  isActive,
  ...props
}) => {
  return (
    <div
      className={classnames("modal", modifier({ isActive }), className)}
      {...props}
    >
      {children}
    </div>
  )
}

export type ModalBackgroundProps = HTMLAttributes<HTMLDivElement>

export const ModalBackground: FC<ModalBackgroundProps> = ({
  className,
  ...props
}) => {
  return (
    <div className={classnames("modal-background", className)} {...props} />
  )
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
  return (
    <div className={classnames("modal-card", className)}>
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

export type ModalCloseProps = ButtonHTMLAttributes<HTMLButtonElement> &
  SizeModifierProp<"large">

export const ModalClose: FC<ModalCloseProps> = ({
  className,
  size,
  ...props
}) => {
  return (
    <button
      className={classnames("modal-close", sizeClassName(size), className)}
      aria-label="close"
      {...props}
    />
  )
}

export type ModalContentProps = HTMLAttributes<HTMLDivElement>

export const ModalContent: FC<PropsWithChildren<ModalContentProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={classnames("modal-content", className)} {...props}>
      {children}
    </div>
  )
}
