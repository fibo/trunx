import { classnames } from "@trunx/classnames"
import { BulmaClass } from "./bulma.js"
import { BoolClasslistArg, boolClasslist } from "./bool.js"
import { SizeArg, sizeClass } from "./size.js"

export type TableClassArg = Pick<
  BoolClasslistArg,
  "isBordered" | "isNarrow" | "isStriped" | "isFullwidth" | "isHoverable"
>

export const tableClass = (arg: TableClassArg) =>
  classnames<BulmaClass>("table", boolClasslist(arg))

export type PaginationClassArg = SizeArg<"small" | "medium" | "large"> &
  Pick<BoolClasslistArg, "isCentered" | "isRight" | "isRounded">

export const paginationClass = ({ size, ...bools }: PaginationClassArg) =>
  classnames<BulmaClass>("pagination", sizeClass(size), boolClasslist(bools))

export type PaginationLinkClassArg = Partial<{
  isCurrent: boolean
}>

export const paginationLinkClass = ({ isCurrent }: PaginationLinkClassArg) =>
  classnames<BulmaClass>("pagination-link", { "is-current": isCurrent })

export type PaginationIncrementalNavigationClassArg = {
  direction: "previous" | "next"
} & Pick<BoolClasslistArg, "isDisabled">

export const paginationIncrementalNavigationClass = ({
  direction,
  ...bools
}: PaginationIncrementalNavigationClassArg) =>
  classnames<BulmaClass>(`pagination-${direction}`, boolClasslist(bools))
