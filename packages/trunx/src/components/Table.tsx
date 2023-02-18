import { FC, TableHTMLAttributes, PropsWithChildren, useMemo } from 'react'
import { classNames } from '../classNames.js'
import { CommonModifierProps, modifier } from '../modifiers/index.js'

export type TableProps = TableHTMLAttributes<HTMLTableElement> &
  Pick<CommonModifierProps, 'isFullwidth' | 'isHoverable'> &
  Partial<{
    isBordered: boolean
    isNarrow: boolean
    isStriped: boolean
    withContainer: boolean
  }>

export const Table: FC<PropsWithChildren<TableProps>> = ({
  children,
  className,
  isHoverable,
  isFullwidth,
  isNarrow,
  isBordered,
  isStriped,
  withContainer,
  ...props
}) => {
  const containerClassName = useMemo(() => (withContainer ? 'table-container' : undefined), [withContainer])
  const _className = useMemo(
    () =>
      classNames(
        'table',
        modifier({ isFullwidth, isHoverable }),
        {
          'is-bordered': isBordered,
          'is-narrow': isNarrow,
          'is-striped': isStriped,
        },
        className
      ),
    [className, isHoverable, isNarrow, isBordered, isStriped, isFullwidth]
  )
  return (
    <div className={containerClassName}>
      <table className={_className} {...props}>
        {children}
      </table>
    </div>
  )
}
