import {FC, HTMLAttributes, PropsWithChildren} from "react"
import {BoolClassArg, BreakpointsMap, boolClass} from "@trunx/bulma"
import {classnames} from "@trunx/classnames"

type Gap = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

export type ColumnsClassArg = Pick<
  BoolClassArg,
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
    gap: Gap | BreakpointsMap<Gap>
  }>

export type ColumnsProps = HTMLAttributes<HTMLDivElement> & ColumnsClassArg

export const Columns: FC<PropsWithChildren<ColumnsProps>> = ({
  className,
  children,
  gap,
  ...modifierProps
}) => (
  <div
    className={classnames(
      "columns",
      boolClass(modifierProps),
      typeof gap === "number" ? `is-${gap}` : undefined,
      className
    )}
  >
    {children}
  </div>
)
