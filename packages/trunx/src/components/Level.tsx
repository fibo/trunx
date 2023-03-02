import { FC, HTMLAttributes, PropsWithChildren, useMemo } from 'react'
import { classNames } from '../classNames.js'
import {
  Alignment,
  BooleanModifierProps,
  modifier,
  textAlignClassName,
  TextAlignProp,
} from '../modifiers/index.js'

export type LevelProps = HTMLAttributes<HTMLDivElement> &
  Pick<BooleanModifierProps, 'isMobile'> &
  Partial<{
    side: Extract<Alignment, 'left' | 'right'>
  }>

export const Level: FC<PropsWithChildren<LevelProps>> = ({
  children,
  className,
  isMobile,
  side,
  ...props
}) => {
  const _className = useMemo(
    () => classNames(side ? `level-${side}` : 'level', modifier({ isMobile }), className),
    [className, isMobile, side]
  )
  return (
    <div className={_className} {...props}>
      {children}
    </div>
  )
}

export type LevelItemProps = HTMLAttributes<HTMLDivElement> & TextAlignProp

export const LevelItem: FC<PropsWithChildren<LevelItemProps>> = ({
  className,
  children,
  hasText,
  ...props
}) => {
  const _className = useMemo(
    () => classNames('level-item', textAlignClassName(hasText), className),
    [className, hasText]
  )
  return (
    <div className={_className} {...props}>
      {children}
    </div>
  )
}
