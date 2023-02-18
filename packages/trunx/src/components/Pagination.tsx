import { FC, AnchorHTMLAttributes, HTMLAttributes, PropsWithChildren, useMemo } from 'react'
import { classNames } from '../classNames.js'
import { CommonModifierProps, SizeModifierProp, Size, modifier, sizeClassName } from '../modifiers/index.js'

export type PaginationProps = HTMLAttributes<HTMLElement> &
  SizeModifierProp<Exclude<Size, 'isNormal'>> &
  Pick<CommonModifierProps, 'isCentered' | 'isRight' | 'isRounded'>

export const Pagination: FC<PropsWithChildren<PaginationProps>> = ({
  className,
  children,
  isCentered,
  isRight,
  isRounded,
  size,
  ...props
}) => {
  const _className = useMemo(
    () =>
      classNames(
        'pagination',
        sizeClassName(size),
        modifier({ isCentered, isRight, isRounded }),
        className
      ),
    [className, isCentered, isRight, isRounded, size]
  )
  return (
    <nav className={_className} aria-label="pagination" {...props}>
      <ul>{children}</ul>
    </nav>
  )
}

type PaginationEllipsisProps = Exclude<HTMLAttributes<HTMLSpanElement>, 'className'>

export const PaginationEllipsis: FC<PaginationEllipsisProps> = (props) => {
  return (
    <li>
      <span className="pagination-ellipsis" {...props}>
        &hellip;
      </span>
    </li>
  )
}

export type PaginationLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  Partial<{
    isCurrent: boolean
  }>

export const PaginationLink: FC<PropsWithChildren<PaginationLinkProps>> = ({
  children,
  className,
  isCurrent,
  ...props
}) => {
  const _className = useMemo(
    () => classNames('pagination-link', { 'is-current': isCurrent }, className),
    [className, isCurrent]
  )
  return (
    <li>
      <a className={_className} {...props}>
        {children}
      </a>
    </li>
  )
}

export type PaginationListProps = Omit<HTMLAttributes<HTMLUListElement>, 'className'>

export const PaginationList: FC<PropsWithChildren<PaginationListProps>> = ({ children, ...props }) => {
  return (
    <ul className="pagination-list" {...props}>
      {children}
    </ul>
  )
}

export type PaginationIncrementalNavigationProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  Pick<CommonModifierProps, 'isDisabled'>

export const PaginationNext: FC<PropsWithChildren<PaginationIncrementalNavigationProps>> = ({
  children,
  className,
  isDisabled,
  ...props
}) => {
  const _className = useMemo(
    () => classNames('pagination-next', modifier({ isDisabled }), className),
    [className, isDisabled]
  )
  return (
    <a className={_className} {...props}>
      {children}
    </a>
  )
}

export const PaginationPrevious: FC<PropsWithChildren<PaginationIncrementalNavigationProps>> = ({
  children,
  className,
  isDisabled,
  ...props
}) => {
  const _className = useMemo(
    () => classNames('pagination-previous', modifier({ isDisabled }), className),
    [className, isDisabled]
  )
  return (
    <a className={_className} {...props}>
      {children}
    </a>
  )
}
