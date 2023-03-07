import { FC, HTMLAttributes, PropsWithChildren } from "react"
import { classNames } from "../classNames.js"
import {
  Alignment,
  BooleanModifierProps,
  modifier,
  textAlignClassName,
  TextAlignProp,
} from "../modifiers/index.js"

export type LevelProps = HTMLAttributes<HTMLDivElement> &
  Pick<BooleanModifierProps, "isMobile"> &
  Partial<{
    side: Extract<Alignment, "left" | "right">
  }>

export const Level: FC<PropsWithChildren<LevelProps>> = ({
  children,
  className,
  isMobile,
  side,
  ...props
}) => {
  const _class = classNames(side ? `level-${side}` : "level", modifier({ isMobile }), className)

  return (
    <div className={_class} {...props}>
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
  const _class = classNames("level-item", textAlignClassName(hasText), className)

  return (
    <div className={_class} {...props}>
      {children}
    </div>
  )
}
