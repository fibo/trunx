import { FC, HTMLAttributes, LiHTMLAttributes, PropsWithChildren, useMemo } from 'react'
import { classNames } from '../classNames.js'
import { CommonModifierProps, SizeModifierProp, modifier } from '../modifiers/index.js'

type BreadcrumbSeparator = 'arrow' | 'bullet' | 'dot' | 'succedes'

export type BreadcrumbProps = HTMLAttributes<HTMLElement> &
  SizeModifierProp &
  Pick<CommonModifierProps, 'isCentered' | 'isRight'> &
  Partial<{
    separator: BreadcrumbSeparator
  }>

export const Breadcrumb: FC<PropsWithChildren<BreadcrumbProps>> = ({
  className,
  children,
  separator,
  isCentered,
  isRight,
  ...props
}) => {
  const _className = useMemo(
    () =>
      classNames(
        'breadcrumb',
        modifier({ isCentered, isRight }),
        {
          'has-arrow-separator': separator === 'arrow',
          'has-bullet-separator': separator === 'bullet',
          'has-dot-separator': separator === 'dot',
          'has-succedes-separator': separator === 'succedes',
        },
        className
      ),
    [className, isCentered, separator, isRight]
  )
  return (
    <nav className={_className} aria-label="breadcrumbs" {...props}>
      <ul>{children}</ul>
    </nav>
  )
}

export type BreadcrumbItemProps = LiHTMLAttributes<HTMLLIElement> & Pick<CommonModifierProps, 'isActive'>

export const BreadcrumbItem: FC<PropsWithChildren<BreadcrumbItemProps>> = ({
  className,
  children,
  isActive,
  ...props
}) => {
  const _className = useMemo(() => classNames(modifier({ isActive }), className), [className, isActive])
  return (
    <li className={_className} {...props}>
      {children}
    </li>
  )
}
