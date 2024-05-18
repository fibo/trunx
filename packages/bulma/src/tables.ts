import { classnames } from "@trunx/classnames"
import { BoolClassArg, boolClass } from "./bool.js"
import { SizeArg, sizeClass } from "./size.js"
import { BulmaClass } from "./bulma.js"

export type TableClassArg = Pick<
  BoolClassArg,
  "isBordered" | "isNarrow" | "isStriped" | "isFullwidth" | "isHoverable"
>

export const tableClass = (arg: TableClassArg) =>
  classnames("table", boolClass(arg))

export type PaginationClassArg = SizeArg<"small" | "medium" | "large"> &
  Pick<BoolClassArg, "isCentered" | "isRight" | "isRounded">

export const paginationClass = ({ size, ...bools }: PaginationClassArg) =>
  classnames("pagination", sizeClass(size), boolClass(bools))

export type PaginationLinkClassArg = Partial<{
  isCurrent: boolean
}>

export const paginationLinkClass = ({ isCurrent }: PaginationLinkClassArg) =>
  classnames<BulmaClass>("pagination-link", { "is-current": isCurrent })

export type PaginationIncrementalNavigationClassArg = {
  direction: "previous" | "next"
} & Pick<BoolClassArg, "isDisabled">

export const paginationIncrementalNavigationClass = ({
  direction,
  ...bools
}: PaginationIncrementalNavigationClassArg) =>
  classnames(`pagination-${direction}`, boolClass(bools))
