import {FC, HTMLAttributes, PropsWithChildren, ReactNode} from "react"
import {BoolClassArg, TextAlignArg, boolClass, textAlignClass} from "@trunx/bulma"
import {classnames} from "@trunx/classnames"

export type LevelProps = HTMLAttributes<HTMLDivElement> &
  Pick<BoolClassArg, "isMobile"> &
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
}) => (
  <div
    className={classnames("level", boolClass({isMobile}), className)}
    {...props}
  >
    {left && <div className="level-left">{left}</div>}

    {children}

    {right && <div className="level-right">{right}</div>}
  </div>
)

export type LevelItemProps = HTMLAttributes<HTMLDivElement> & TextAlignArg

export const LevelItem: FC<PropsWithChildren<LevelItemProps>> = ({
  className,
  children,
  hasText,
  ...props
}) => (
  <div
    className={classnames(
      "level-item",
      textAlignClass(hasText),
      className
    )}
    {...props}
  >
    {children}
  </div>
)
