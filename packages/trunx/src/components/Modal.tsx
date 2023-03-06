import { FC, ButtonHTMLAttributes, HTMLAttributes, PropsWithChildren, ReactNode, useMemo } from "react"
import { classNames } from "../classNames.js"
import { BooleanModifierProps, modifier, sizeClassName, SizeModifierProp } from "../modifiers/index.js"

export type ModalProps = HTMLAttributes<HTMLDivElement> & Pick<BooleanModifierProps, "isActive">

export const Modal: FC<PropsWithChildren<ModalProps>> = ({ children, className, isActive, ...props }) => {
  const _className = useMemo(
    () => classNames("modal", modifier({ isActive }), className),
    [className, isActive]
  )

  return (
    <div className={_className} {...props}>
      {children}
    </div>
  )
}

export type ModalBackgroundProps = HTMLAttributes<HTMLDivElement>

export const ModalBackground: FC<ModalBackgroundProps> = ({ className, ...props }) => {
  const _className = useMemo(() => classNames("modal-background", className), [className])

  return <div className={_className} {...props} />
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
  const _className = useMemo(() => classNames("modal-card", className), [className])

  return (
    <div className={_className}>
      {header ? (
        <header className="modal-card-head">
          <p className="modal-card-title">{header}</p>
        </header>
      ) : null}

      <div className="modal-card-body">{children}</div>

      {footer ? <footer className="modal-card-foot">{footer}</footer> : null}
    </div>
  )
}

export type ModalCloseProps = ButtonHTMLAttributes<HTMLButtonElement> & SizeModifierProp<"large">

export const ModalClose: FC<ModalCloseProps> = ({ className, size, ...props }) => {
  const _className = useMemo(
    () => classNames("modal-close", sizeClassName(size), className),
    [className, size]
  )

  return <button className={_className} aria-label="close" {...props} />
}

export type ModalContentProps = HTMLAttributes<HTMLDivElement>

export const ModalContent: FC<PropsWithChildren<ModalContentProps>> = ({
  children,
  className,
  ...props
}) => {
  const _className = useMemo(() => classNames("modal-content", className), [className])

  return (
    <div className={_className} {...props}>
      {children}
    </div>
  )
}
