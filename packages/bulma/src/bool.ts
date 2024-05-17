export type BoolClassArg = Partial<{
  hasAddons: boolean
  hasDropdown: boolean
  hasDropdownUp: boolean
  hasIconsLeft: boolean
  hasIconsRight: boolean
  hasShadow: boolean
  isActive: boolean
  isAncestor: boolean
  isBordered: boolean
  isBoxed: boolean
  isCentered: boolean
  isChild: boolean
  isDesktop: boolean
  isDisabled: boolean
  isExpanded: boolean
  isFluid: boolean
  isFocused: boolean
  isFullheight: boolean
  isFullheightWithNavbar: boolean
  isFullwidth: boolean
  isGapless: boolean
  isHalfheight: boolean
  isHoverable: boolean
  isHovered: boolean
  isInverted: boolean
  isLight: boolean
  isLoading: boolean
  isMobile: boolean
  isMultiline: boolean
  isNarrow: boolean
  isOutlined: boolean
  isParent: boolean
  isRight: boolean
  isRounded: boolean
  isSpaced: boolean
  isStatic: boolean
  isStriped: boolean
  isTab: boolean
  isToggle: boolean
  isToggleRounded: boolean
  isTransparent: boolean
  isUp: boolean
  isVariable: boolean
  isVcentered: boolean
  isVertical: boolean
}>

/**
 * Convert a string in camel case to its equivalent in kebab case.
 *
 * @example
 *
 * ```ts
 * camelCaseToKebabCase("FooBar") // foo-bar
 * camelCaseToKebabCase("isActive") //  is-active
 * camelCaseToKebabCase("is1") // is-1
 * ```
 *
 * Credits (initial code from here):
 * https://gist.github.com/nblackburn/875e6ff75bc8ce171c758bf75f304707
 */
export const camelCaseToKebabCase = (arg: string): string =>
  arg.replace(/([a-z0-9]|(?=[A-Z]))([A-Z0-9])/g, "$1-$2").toLowerCase()

/**
 * Convert an object of boolean attributes to its equivalent array of
 * classNames.
 *
 * @example
 *
 * ```ts
 * boolClass({ isTransparent: true, isFixedTop: true, isBlack: true })
 * // ['is-transparent', 'is-black']
 * ```
 */
export const boolClass = (arg: BoolClassArg) =>
  Object.entries(arg)
    .map(([key, value]) => (value ? camelCaseToKebabCase(key) : ""))
    .join(" ")
