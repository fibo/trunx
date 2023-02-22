import { classNames } from '../classNames.js'

export type Alignment = 'centered' | 'left' | 'right'

export type FlexAlignContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch'
  | 'start'
  | 'end'
  | 'baseline'

export type FlexAlignItems =
  | 'stretch'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'baseline'
  | 'start'
  | 'end'
  | 'self-start'
  | 'self-end'

export type FlexAlignSelf = 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'

export type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse'

export type FlexJustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'start'
  | 'end'
  | 'left'
  | 'right'

export type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse'

type FlexSpacing = 0 | 1 | 2 | 3 | 4 | 5

export type FlexModifierProps = Partial<{
  direction: FlexDirection
  align: FlexAlignContent
  alignItems: FlexAlignItems
  alignSelf: FlexAlignSelf
  justify: FlexJustifyContent
  wrap: FlexWrap
  grow: FlexSpacing
  shrink: FlexSpacing
}>

export const flexClassNames = ({
  direction,
  align,
  alignItems,
  alignSelf,
  justify,
  wrap,
  grow,
  shrink,
}: FlexModifierProps) =>
  classNames(
    'is-flex',
    direction ? `is-flex-direction-${direction}` : undefined,
    justify ? `is-justify-content-${justify}` : undefined,
    align ? `is-align-content-${align}` : undefined,
    alignItems ? `is-align-items-${alignItems}` : undefined,
    alignSelf ? `is-align-self-${alignSelf}` : undefined,
    grow ? `is-flex-${grow}` : undefined,
    shrink ? `is-flex-${shrink}` : undefined,
    wrap ? `is-flex-wrap-${wrap}` : undefined
  )

export type SpacingValue = 0 | 1 | 2 | 3 | 5 | 5 | 6
export type SpacingKey = 'mx' | 'my' | 'mr' | 'ml' | 'mt' | 'mb' | 'px' | 'py' | 'pr' | 'pl' | 'pt' | 'pb'

export type SpacingModifierProp = Partial<{ spacing: { [key in SpacingKey]: SpacingValue } }>

export const spacingClassNames = (arg: SpacingModifierProp['spacing']) =>
  arg && !Array.isArray(arg) && typeof arg === 'object'
    ? Object.entries(arg).map(([key, value]) => `${key}-${value}`)
    : undefined
