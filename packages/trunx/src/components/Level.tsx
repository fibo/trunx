import { FC, HTMLAttributes, PropsWithChildren, ReactNode } from "react"
import { classNames } from "../classNames.js"
import { BooleanModifierProps, modifier, textAlignClassName, TextAlignProp } from "../modifiers/index.js"

export type LevelProps = HTMLAttributes<HTMLDivElement> &
  Pick<BooleanModifierProps, "isMobile"> &
  Partial<{
    left: ReactNode
    right: ReactNode
  }>

export const Level: FC<PropsWithChildren<LevelProps>> = ({
  children,
  className,
  isMobile,
  left,
  right,
  ...props
}) => {
  const _class = classNames("level", modifier({ isMobile }), className)

  return (
    <div className={_class} {...props}>
      {left && <div className="level-left">{left}</div>}

      {children}

      {right && <div className="level-right">{right}</div>}
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
