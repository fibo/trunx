import { FC, HTMLAttributes, PropsWithChildren } from "react"
import { classNames } from "../classNames.js"
import {
  Breakpoint,
  BooleanModifierProps,
  modifier,
} from "../modifiers/index.js"

type Gap = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

export type ColumnsProps = HTMLAttributes<HTMLDivElement> &
  Pick<
    BooleanModifierProps,
    | "isCentered"
    | "isDesktop"
    | "isGapless"
    | "isMobile"
    | "isNarrow"
    | "isMultiline"
    | "isVariable"
    | "isVcentered"
  > &
  Partial<{
    gap: Gap | { [key in Breakpoint]: Gap }
  }>

export const Columns: FC<PropsWithChildren<ColumnsProps>> = ({
  className,
  children,
  gap,
  isCentered,
  isDesktop,
  isGapless,
  isMobile,
  isMultiline,
  isNarrow,
  isVariable,
  isVcentered,
}) => {
  const _class = classNames(
    "columns",
    modifier({
      isCentered,
      isDesktop,
      isGapless,
      isMobile,
      isMultiline,
      isNarrow,
      isVariable,
      isVcentered,
    }),
    typeof gap === "number" ? `is-${gap}` : undefined,
    className
  )

  return <div className={_class}>{children}</div>
}
