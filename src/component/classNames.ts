function kebabCaseToCamelCase (value: string): string {
  return value.split('-').map(
    (part, index) => (
      index > 0 ? (part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()) : part
    )
  ).join('')
}

/**
 * Convert a list of strings to a key/value object.
 * Values are as is (in kebab-case), keys are converted in camelCase.
 *
 * ['a', 'b', 'foo-bar'] ---> { a: 'a', b: 'b', fooBar: 'foo-bar' }
 */
function listToKeyValues<T extends string> (list: readonly T[]): {[key: string]: T} {
  return list.reduce((obj: {[key: string]: T}, key: T) => ({...obj, [kebabCaseToCamelCase(key)]: key}), {})
}

// Credits:
// https://gist.github.com/nblackburn/875e6ff75bc8ce171c758bf75f304707
export function camelCaseToKebabCase (inputString: string): string {
  return inputString.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase()
}

function isBulmaModifier (modifier: string) {
  return (
    modifier.substring(0, 3) === 'has' ||
    modifier.substring(0, 2) === 'is'
  )
}

export function trunxPropsToClassnamesObject (props) {
  return Object.keys(props).reduce((obj, key) => {
    if (isBulmaModifier(key)) {
      const className = camelCaseToKebabCase(key)

      obj[className] = props[key]
    }

    return obj
  }, {})
}

export const bulmaClassNames = [
  "box",
  "breadcrumb",
  "button",
  "buttons",
  "card-content",
  "card-header-icon",
  "card-header-title",
  "checkbox",
  "dropdown",
  "dropdown-divider",
  "dropdown-content",
  "dropdown-item",
  "dropdown-menu",
  "dropdown-trigger",
  "image",
  "modal-card",
  "modal-card-body",
  "modal-card-foot",
  "modal-card-head",
  "modal-close",
  "navbar-brand",
  "navbar-burger",
  "navbar-divider",
  "navbar-dropdown",
  "navbar-end",
  "navbar-item",
  "navbar-link",
  "navbar-menu",
  "navbar-start",
] as const

export type BulmaClassName = typeof bulmaClassNames[number]

export const bulmaClassName = listToKeyValues<BulmaClassName>(bulmaClassNames)

export interface BulmaClassModifiers {
  areLarge?: boolean
  areMedium?: boolean
  areSmall?: boolean
  hasArrowSeparator?: boolean
  hasBulletSeparator?: boolean
  hasDotSeparator?: boolean
  hasDropdown?: boolean
  hasShadow?: boolean
  hasSuccedesSeparator?: boolean
  isActive?: boolean
  isCentered?: boolean
  isFixedBottom?: boolean
  isFocused?: boolean
  isFullwidth?: boolean
  isHoverable?: boolean
  isInverted?: boolean
  isLoading?: boolean
  isNormal?: boolean
  isOutlined?: boolean
  isRight?: boolean
  isRounded?: boolean
  isStatic?: boolean
  isText?: boolean
  isTransparent?: boolean
  isUnselectable?: boolean
}
