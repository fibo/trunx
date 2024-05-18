import { classnames } from "@trunx/classnames"
import { BulmaClass } from "./bulma.js"

export type Alignment = "centered" | "right"

export type FlexAlignContent =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly"
  | "stretch"
  | "start"
  | "end"
  | "baseline"

export type FlexAlignItems =
  | "stretch"
  | "flex-start"
  | "flex-end"
  | "center"
  | "baseline"
  | "start"
  | "end"
  | "self-start"
  | "self-end"

export type FlexAlignSelf =
  | "auto"
  | "flex-start"
  | "flex-end"
  | "center"
  | "baseline"
  | "stretch"

export type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse"

export type FlexJustifyContent =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly"
  | "start"
  | "end"
  | "left"
  | "right"

export type FlexWrap = "nowrap" | "wrap" | "wrap-reverse"

type FlexSpacing = 0 | 1 | 2 | 3 | 4 | 5

export type FlexClassArg = Partial<{
  direction: FlexDirection
  align: FlexAlignContent
  alignItems: FlexAlignItems
  alignSelf: FlexAlignSelf
  justify: FlexJustifyContent
  wrap: FlexWrap
  grow: FlexSpacing
  shrink: FlexSpacing
}>

export const flexClass = ({
  direction,
  align,
  alignItems,
  alignSelf,
  justify,
  wrap,
  grow,
  shrink,
}: FlexClassArg) =>
  classnames<BulmaClass>(
    "is-flex",
    direction ? `is-flex-direction-${direction}` : undefined,
    justify ? `is-justify-content-${justify}` : undefined,
    align ? `is-align-content-${align}` : undefined,
    alignItems ? `is-align-items-${alignItems}` : undefined,
    alignSelf ? `is-align-self-${alignSelf}` : undefined,
    grow ? `is-flex-grow-${grow}` : undefined,
    shrink ? `is-flex-shrink-${shrink}` : undefined,
    wrap ? `is-flex-wrap-${wrap}` : undefined
  )

export type SpacingValue = 0 | 1 | 2 | 3 | 4 | 5 | 6 | "auto"
export type SpacingKey =
  | "mx"
  | "my"
  | "mr"
  | "ml"
  | "mt"
  | "mb"
  | "px"
  | "py"
  | "pr"
  | "pl"
  | "pt"
  | "pb"

export type Spacing = Partial<{ [key in SpacingKey]: SpacingValue }>

export type SpacingArg = Partial<{ spacing: Spacing }>

export const spacingClass = (arg: Spacing) =>
  arg && !Array.isArray(arg) && typeof arg === "object"
    ? Object.entries(arg).map(
        ([key, value]) => `${key}-${value}` as `${SpacingKey}-${SpacingValue}`
      )
    : undefined
