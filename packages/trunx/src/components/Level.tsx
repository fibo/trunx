import { FC, HTMLAttributes, PropsWithChildren, ReactNode } from "react"
import { classnames } from "@trunx/classnames"
import {
  BooleanModifierProps,
  modifier,
  textAlignClassName,
  TextAlignProp,
} from "../modifiers/index.js"

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
  return (
    <div
      className={classnames("level", modifier({ isMobile }), className)}
      {...props}
    >
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
  return (
    <div
      className={classnames(
        "level-item",
        textAlignClassName(hasText),
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
