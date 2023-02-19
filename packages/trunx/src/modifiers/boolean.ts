export type BooleanModifierProps = Partial<{
  hasAddons: boolean
  hasIconsLeft: boolean
  hasIconsRight: boolean
  hasShadow: boolean
  isActive: boolean
  isAncestor: boolean
  isBordered: boolean
  isBoxed: boolean
  isCentered: boolean
  isDisabled: boolean
  isExpanded: boolean
  isFixedBottom: boolean
  isFixedTop: boolean
  isFluid: boolean
  isFocused: boolean
  isFullheight: boolean
  isFullheightWithNavbar: boolean
  isFullwidth: boolean
  isGapless: boolean
  isGhost: boolean
  isHalfheight: boolean
  isHoverable: boolean
  isHovered: boolean
  isInverted: boolean
  isLight: boolean
  isLoading: boolean
  isMultiline: boolean
  isMultiple: boolean
  isNarrow: boolean
  isOutlined: boolean
  isParent: boolean
  isRight: boolean
  isRounded: boolean
  isSpaced: boolean
  isStatic: boolean
  isStriped: boolean
  isText: boolean
  isToggle: boolean
  isToggleRounded: boolean
  isTransparent: boolean
  isVariable: boolean
  isVcentered: boolean
  isVertical: boolean
}>

/**
 * Convert a string in camel case to its equivalent in kebab case
 *
 *     fooBar ==> foo-bar
 *     isActive ==> is-active
 *     is1 ==> is-1
 *
 * Credits (initial code from here):
 * https://gist.github.com/nblackburn/875e6ff75bc8ce171c758bf75f304707
 */
export const camelCaseToKebabCase = (arg: string): string =>
  arg.replace(/([a-z0-9]|(?=[A-Z]))([A-Z0-9])/g, '$1-$2').toLowerCase()

export const modifier = (arg: BooleanModifierProps) => Object.keys(arg).map(camelCaseToKebabCase)