import { FC, TableHTMLAttributes, PropsWithChildren, useMemo } from 'react'
import { classNames } from '../classNames.js'
import { BooleanModifierProps, modifier } from '../modifiers/index.js'

export type TableProps = TableHTMLAttributes<HTMLTableElement> &
  Pick<BooleanModifierProps, 'isBordered' | 'isNarrow' | 'isStriped' | 'isFullwidth' | 'isHoverable'> &
  Partial<{
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
        modifier({ isBordered, isFullwidth, isHoverable, isNarrow, isStriped }),
        className
      ),
    [className, isFullwidth, isHoverable, isNarrow, isBordered, isStriped]
  )
  return (
    <div className={containerClassName}>
      <table className={_className} {...props}>
        {children}
      </table>
    </div>
  )
}
