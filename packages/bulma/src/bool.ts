import { BulmaClass } from "./bulma.js"

export type BoolClass = Extract<
  BulmaClass,
  | "has-addons"
  | "has-dropdown"
  | "has-dropdown-up"
  | "has-icons-left"
  | "has-icons-right"
  | "has-shadow"
  | "is-active"
  | "is-bordered"
  | "is-boxed"
  | "is-centered"
  | "is-desktop"
  | "is-disabled"
  | "is-expanded"
  | "is-fluid"
  | "is-focused"
  | "is-fullheight"
  | "is-fullheight-with-navbar"
  | "is-fullwidth"
  | "is-gapless"
  | "is-halfheight"
  | "is-hovered"
  | "is-hoverable"
  | "is-inverted"
  | "is-light"
  | "is-loading"
  | "is-mobile"
  | "is-multiline"
  | "is-narrow"
  | "is-outlined"
  | "is-right"
  | "is-spaced"
  | "is-static"
  | "is-striped"
  | "is-tab"
  | "is-toggle"
  | "is-toggle-rounded"
  | "is-transparent"
  | "is-up"
  | "is-vcentered"
>

export type BoolClasslistArg = Partial<{
  hasAddons: boolean
  hasDropdown: boolean
  hasDropdownUp: boolean
  hasIconsLeft: boolean
  hasIconsRight: boolean
  hasShadow: boolean
  isActive: boolean
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
const camelCaseToKebabCase = (arg: string): string =>
  arg.replace(/([a-z0-9]|(?=[A-Z]))([A-Z0-9])/g, "$1-$2").toLowerCase()

/**
 * Convert an object of boolean attributes to its equivalent array of
 * classNames.
 *
 * @example
 *
 * ```ts
 * boolClasslist({ isTransparent: true, isFixedTop: false, isBlack: true })
 * // ['is-transparent', 'is-black']
 * ```
 */
export const boolClasslist = (arg: BoolClasslistArg) =>
  Object.entries(arg)
    .map(([key, value]) =>
      value ? (camelCaseToKebabCase(key) as BoolClass) : undefined
    )
    .filter((value) => !!value)
