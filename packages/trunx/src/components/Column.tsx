import { FC, PropsWithChildren } from "react"
import { classNames } from "../classNames.js"
import {
  Breakpoint,
  BooleanModifierProps,
  Dozen,
  Fraction,
  modifier,
} from "../modifiers/index.js"

export type ColumnProps = React.HTMLAttributes<HTMLDivElement> &
  Pick<BooleanModifierProps, "isCentered"> &
  Partial<{
    /**
     * @example
     *
     * ```ts
     *   <Column isNarrow>{/* children * /}</Column>
     * ```
     *
     * @example
     *
     * ```ts
     *   <Column isNarrow={{ mobile: false, tablet: true }}>
     *     {/* children * /}
     *   </Column>
     * ```
     */
    isNarrow: boolean | { [key in Breakpoint]: boolean }

    /**
     * @example
     *
     * ```ts
     *   <Column offset={6}>{/* children * /}</Column>
     * ```
     *
     * @example
     *
     * ```ts
     *   <Column offset="three-quarters">{/* children * /}</Column>
     * ```
     */
    offset: Exclude<Dozen, 12> | Fraction

    /**
     * @example
     *
     * ```ts
     *   <Column size={6}>{/* children * /}</Column>
     * ```
     *
     * @example
     *
     * ```ts
     *  <Column size="three-quarters">{/* children * /}</Column>
     * ```
     *
     * @example
     *
     * ```ts
     *   <Column size={ mobile: "full", tablet: "two-thirds", desktop: 6 }>
     *     {/* children * /}
     *   </Column>
     * ```
     */
    size: Dozen | Fraction | { [key in Breakpoint]: Dozen | Fraction }
  }>

export const Column: FC<PropsWithChildren<ColumnProps>> = ({
  children,
  className,
  isCentered,
  isNarrow,
  offset,
  size,
}) => {
  const _class = classNames(
    "column",
    modifier({ isCentered }),
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
      ? typeof size === "object"
        ? Object.entries(size).map(
            ([breakpoint, value]) => `is-${value}-${breakpoint}`
          )
        : `is-${size}`
      : undefined,
    className
  )

  return <div className={_class}>{children}</div>
}
