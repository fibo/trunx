import { classnames } from "@trunx/classnames"
import { BoolClassArg, boolClass } from "./bool.js"
import { Dozen, Fraction, Gap } from "./numbers.js"
import { BreakpointsMap } from "./responsiveness.js"

export type ColumnClassArg = Pick<BoolClassArg, "isCentered"> &
  Partial<{
    isNarrow: boolean | BreakpointsMap<boolean>
    offset: Exclude<Dozen, 12> | Fraction
    size: Dozen | Fraction | BreakpointsMap<Dozen | Fraction>
  }>

export const columnClass = ({
  isCentered,
  isNarrow,
  offset,
  size,
}: ColumnClassArg) =>
  classnames(
    "column",
    boolClass({ isCentered }),
    isNarrow === true
      ? {
          "is-narrow": isNarrow,
        }
      : isNarrow && typeof isNarrow === "object"
      ? Object.entries(isNarrow).map(([breakpoint, enabled]) =>
          enabled ? `is-narrow-${breakpoint}` : ""
        )
      : "",
    offset ? `is-offset-${offset}` : "",
    size
      ? size && typeof size === "object"
        ? Object.entries(size).map(
            ([breakpoint, value]) => `is-${value}-${breakpoint}`
          )
        : `is-${size}`
      : ""
  )

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

export const columnsClass = ({ gap, ...bools }: ColumnsClassArg) =>
  classnames(
    "columns",
    boolClass(bools),
    typeof gap === "number" ? `is-${gap}` : undefined
  )
