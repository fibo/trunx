import { FC, HTMLAttributes, PropsWithChildren, ReactNode, useCallback, useMemo } from 'react'
import { classNames } from '../classNames.js'
import { BooleanModifierProps, modifier } from '../modifiers/index.js'

export type ModalProps = HTMLAttributes<HTMLDivElement> &
  Pick<BooleanModifierProps, 'isActive'> &
  Partial<{
    handleDelete: () => void
  }>

export const Modal: FC<PropsWithChildren<ModalProps>> = ({
  children,
  className,
  isActive,
  handleDelete,
  ...props
}) => {
  const _className = useMemo(
    () => classNames('modal', modifier({ isActive }), className),
    [className, isActive]
  )

  const handleBackgroundClick = useCallback(() => {
    handleDelete?.()
  }, [handleDelete])

  return (
    <div className={_className} {...props}>
      <div className="modal-background" onClick={handleBackgroundClick} />
      {children}
    </div>
  )
}

export type ModalCardProps = HTMLAttributes<HTMLDivElement> &
  Partial<{
    title: ReactNode
    content: ReactNode
    footer: ReactNode
    handleDelete: () => void
  }>

export const ModalCard: FC<PropsWithChildren<ModalCardProps>> = ({
  children,
  handleDelete,
  title,
  footer,
  className,
}) => {
  const _className = useMemo(() => classNames('modal-card', className), [className])
  const handleDeleteButtonClick = useCallback(() => {
    handleDelete?.()
  }, [handleDelete])
  return (
    <div className={_className}>
      {title ? (
        <header className="modal-card-head">
          <p className="modal-card-title">{title}</p>
          <button className="delete" aria-label="close" onClick={handleDeleteButtonClick}></button>
        </header>
      ) : null}
      <div className="modal-card-body">{children}</div>
      {footer ? <footer className="modal-card-foot">{footer}</footer> : null}
    </div>
  )
}
