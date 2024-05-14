import {FC, HTMLAttributes, PropsWithChildren} from "react"
import {BoolClassArg, BreakpointsMap, Dozen, Fraction, boolClass} from "@trunx/bulma"
import {classnames} from "@trunx/classnames"

export type ColumnClassArg = Pick<BoolClassArg, "isCentered"> &
  Partial<{
    /**
     * @example
     *
     * ```ts
     * <Column isNarrow>{children}</Column>
     * ```
     *
     * @example
     *
     * ```ts
     * <Column isNarrow={{ mobile: false, tablet: true }}>
     *   {children}
     * </Column>
     * ```
     */
    isNarrow: boolean | BreakpointsMap<boolean>

    /**
     * @example
     *
     * ```ts
     * <Column offset={6}>{children}</Column>
     * ```
     *
     * @example
     *
     * ```ts
     * <Column offset="three-quarters">{children}</Column>
     * ```
     */
    offset: Exclude<Dozen, 12> | Fraction

    /**
     * @example
     *
     * ```ts
     * <Column size={6}>{children}</Column>
     * ```
     *
     * @example
     *
     * ```ts
     * <Column size="three-quarters">{children}</Column>
     * ```
     *
     * @example
     *
     * ```ts
     * <Column size={{ mobile: "full", tablet: "two-thirds", desktop: 6 }}>
     *   {children}
     * </Column>
     * ```
     */
    size: Dozen | Fraction | BreakpointsMap<Dozen | Fraction>
  }>

export type ColumnProps = HTMLAttributes<HTMLDivElement> & ColumnClassArg

export const columnClass = ({
  isCentered,
  isNarrow,
  offset,
  size,
}: ColumnClassArg) =>
  classnames(
    "column",
    boolClass({isCentered}),
    isNarrow === true
      ? {
        "is-narrow": isNarrow,
      }
      : isNarrow && typeof isNarrow === "object"
        ? Object.entries(isNarrow).map(([breakpoint, enabled]) =>
          enabled ? `is-narrow-${breakpoint}` : undefined
        )
        : undefined,
    offset ? `is-offset-${offset}` : undefined,
    size
      ? size && typeof size === "object"
        ? Object.entries(size).map(
          ([breakpoint, value]) => `is-${value}-${breakpoint}`
        )
        : `is-${size}`
      : undefined,
  )

export const Column: FC<PropsWithChildren<ColumnProps>> = ({
  children,
  className,
  ...props
}) => <div className={classnames(columnClass(props), className)}>{children}</div>
