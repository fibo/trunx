import { FC, HTMLAttributes, PropsWithChildren, ReactNode, useCallback, useMemo } from "react"
import { classNames } from "../classNames.js"
import { BooleanModifierProps, modifier } from "../modifiers/index.js"

export type ModalProps = HTMLAttributes<HTMLDivElement> &
  Pick<BooleanModifierProps, "isActive"> & {
    setIsActive: (arg: boolean) => void
  }

export const Modal: FC<PropsWithChildren<ModalProps>> = ({
  children,
  className,
  isActive,
  setIsActive,
  ...props
}) => {
  const _className = useMemo(
    () => classNames("modal", modifier({ isActive }), className),
    [className, isActive]
  )

  const handleBackgroundClick = useCallback(() => {
    setIsActive(false)
  }, [setIsActive])

  return (
    <div className={_className} {...props}>
      <div className="modal-background" onClick={handleBackgroundClick} />

      {children}
    </div>
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
