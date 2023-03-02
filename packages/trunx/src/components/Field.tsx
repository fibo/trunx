import { FC, HTMLAttributes, PropsWithChildren, ReactNode, useMemo } from 'react'
import { classNames } from '../classNames.js'
import { Alignment } from '../modifiers/index.js'

export type FieldProps = HTMLAttributes<HTMLDivElement> &
  Partial<{
    hasAddons: boolean | Alignment
    isGrouped: boolean | Alignment | 'multiline'
  }>

export const Field: FC<PropsWithChildren<FieldProps>> = ({
  children,
  className,
  hasAddons,
  isGrouped,
  ...props
}) => {
  const _className = useMemo(
    () =>
      classNames(
        'field',
        hasAddons ? (hasAddons === true ? 'has-addons' : `has-addons-${hasAddons}`) : undefined,
        isGrouped ? (isGrouped === true ? 'is-grouped' : `is-grouped-${isGrouped}`) : undefined,
        className
      ),
    [className, hasAddons, isGrouped]
  )
  return (
    <div className={_className} {...props}>
      {children}
    </div>
  )
}

export type FieldHorizontalProps = HTMLAttributes<HTMLDivElement> &
  Partial<{
    label: ReactNode
  }>

export const FieldHorizontal: FC<PropsWithChildren<FieldHorizontalProps>> = ({
  children,
  label,
  className,
  ...props
}) => {
  const _className = useMemo(() => classNames('field is-horizontal', className), [className])
  return (
    <div className={_className} {...props}>
      <div className="field-label">{label}</div>
      <div className="field-body">{children}</div>
    </div>
  )
}
