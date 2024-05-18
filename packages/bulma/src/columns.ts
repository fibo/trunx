import { classnames } from "@trunx/classnames"
import { BulmaClass } from "./bulma.js"
import { BoolClasslistArg, boolClasslist } from "./bool.js"
import { Dozen, Fraction, Gap } from "./numbers.js"
import { Breakpoint, BreakpointsMap } from "./responsiveness.js"

type Offset = Exclude<Dozen, 12> | Fraction

export type ColumnClassArg = Pick<BoolClasslistArg, "isCentered"> &
  Partial<{
    isNarrow: boolean | BreakpointsMap<boolean>
    offset: Offset
    size: Dozen | Fraction | BreakpointsMap<Dozen | Fraction>
  }>

export const columnClass = ({
  isCentered,
  isNarrow,
  offset,
  size,
}: ColumnClassArg) =>
  classnames<BulmaClass>(
    "column",
    boolClasslist({ isCentered }),
    isNarrow === true
      ? {
          "is-narrow": isNarrow,
        }
      : isNarrow && typeof isNarrow === "object"
      ? Object.entries(isNarrow).map(([breakpoint, enabled]) =>
          enabled
            ? (`is-narrow-${breakpoint}` as `is-narrow-${Breakpoint}`)
            : undefined
        )
      : undefined,
    offset ? `is-offset-${offset}` : undefined,
    size
      ? size && typeof size === "object"
        ? Object.entries(size).map(
            ([breakpoint, value]) => `is-${value}-${breakpoint}` as BulmaClass
          )
        : (`is-${size}` as `is-${Dozen | Fraction}`)
      : undefined
  )

export type ColumnsClassArg = Pick<
  BoolClasslistArg,
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
  classnames<BulmaClass>(
    "columns",
    boolClasslist(bools),
    typeof gap === "number" ? `is-${gap}` : undefined
  )
