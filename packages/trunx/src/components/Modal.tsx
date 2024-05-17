import {
  FC,
  ButtonHTMLAttributes,
  HTMLAttributes,
  PropsWithChildren,
  ReactNode,
} from "react"
import { BoolClassArg, boolClass, SizeArg, sizeClass } from "@trunx/bulma"
import { classnames } from "@trunx/classnames"

export type ModalProps = HTMLAttributes<HTMLDivElement> &
  Pick<BoolClassArg, "isActive">

export const Modal: FC<PropsWithChildren<ModalProps>> = ({
  children,
  className,
  isActive,
  ...props
}) => (
  <div
    className={classnames("modal", boolClass({ isActive }), className)}
    {...props}
  >
    {children}
  </div>
)

export type ModalBackgroundProps = HTMLAttributes<HTMLDivElement>

export const ModalBackground: FC<ModalBackgroundProps> = ({
  className,
  ...props
}) => <div className={classnames("modal-background", className)} {...props} />

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
}) => (
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

export type ModalCloseProps = ButtonHTMLAttributes<HTMLButtonElement> &
  SizeArg<"large">

export const ModalClose: FC<ModalCloseProps> = ({
  className,
  size,
  ...props
}) => (
  <button
    className={classnames("modal-close", sizeClass(size), className)}
    aria-label="close"
    {...props}
  />
)

export type ModalContentProps = HTMLAttributes<HTMLDivElement>

export const ModalContent: FC<PropsWithChildren<ModalContentProps>> = ({
  children,
  className,
  ...props
}) => (
  <div className={classnames("modal-content", className)} {...props}>
    {children}
  </div>
)
