export type ClassNamesArg<ClassName extends string> =
  | ClassName
  | { [key in ClassName]: unknown }
  | ClassNamesArg<ClassName>[]

export const classNames = <T extends string>(...args: ClassNamesArg<T>[]): string =>
  args
    .map((arg) => {
      if (typeof arg === 'string') return arg
      if (Array.isArray(arg) && arg.length) return classNames<string>(...arg)
      if (arg && typeof arg === 'object')
        return classNames<string>(
          Object.entries(arg)
            .filter(([_key, val]) => val)
            .map(([key]) => key)
        )
    })
    .join(' ')

export interface TrunxProps {
  [props: string]: boolean | undefined
}

function kebabCaseToCamelCase(value: string): string {
  return value
    .split('-')
    .map((part, index) => (index > 0 ? part.charAt(0).toUpperCase() + part.slice(1).toLowerCase() : part))
    .join('')
}

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
export function camelCaseToKebabCase(inputString: string): string {
  return inputString.replace(/([a-z0-9]|(?=[A-Z]))([A-Z0-9])/g, '$1-$2').toLowerCase()
}

/**
 * Convert a list of strings to a key/value object.
 * Values are as is (in kebab-case), keys are converted in camelCase.
 *
 * ['a', 'b', 'foo-bar'] ---> { a: 'a', b: 'b', fooBar: 'foo-bar' }
 */
function listToKeyValues<T extends string>(list: readonly T[]): { [key: string]: T } {
  return list.reduce(
    (obj: { [key: string]: T }, key: T) => ({
      ...obj,
      [kebabCaseToCamelCase(key)]: key,
    }),
    {}
  )
}

export function trunxPropsToClassnamesObject(props?: TrunxProps) {
  if (typeof props === 'undefined') return {}

  return Object.keys(props).reduce((obj, key) => {
    if (typeof props[key] === 'undefined') return obj

    if (key.substring(0, 3) === 'are' || key.substring(0, 3) === 'has' || key.substring(0, 2) === 'is') {
      const className = camelCaseToKebabCase(key)

      obj[className] = props[key]
    }

    // spacing helpers

    if (key.match(/[mp][trblxy]?[0-6]/)) {
      const className = key.replace(/([0-6])/, '-$1')

      obj[className] = props[key]
    }
    if (key.match(/[mp][trblxy]?Auto/)) {
      const className = key.replace('A', '-a')

      obj[className] = props[key]
    }

    return obj
  }, {})
}

export const bulmaClassNames = [
  'block',
  'box',
  'breadcrumb',
  'button',
  'buttons',
  'card',
  'card-content',
  'card-footer',
  'card-footer-item',
  'card-header',
  'card-header-icon',
  'card-header-title',
  'card-image',
  'checkbox',
  'column',
  'columns',
  'container',
  'content',
  'control',
  'delete',
  'dropdown',
  'dropdown-divider',
  'dropdown-content',
  'dropdown-item',
  'dropdown-menu',
  'dropdown-trigger',
  'field',
  'field-body',
  'field-label',
  'file',
  'file-cta',
  'file-icon',
  'file-input',
  'file-label',
  'file-name',
  'footer',
  'heading',
  'help',
  'hero',
  'hero-body',
  'hero-foot',
  'hero-head',
  'icon',
  'icon-text',
  'image',
  'input',
  'label',
  'level',
  'level-item',
  'level-left',
  'level-right',
  'media',
  'media-content',
  'media-left',
  'media-right',
  'menu',
  'menu-label',
  'menu-list',
  'message',
  'message-body',
  'message-header',
  'modal',
  'modal-background',
  'modal-content',
  'modal-card',
  'modal-card-body',
  'modal-card-foot',
  'modal-card-head',
  'modal-card-title',
  'modal-close',
  'navbar',
  'navbar-brand',
  'navbar-burger',
  'navbar-divider',
  'navbar-dropdown',
  'navbar-end',
  'navbar-item',
  'navbar-link',
  'navbar-menu',
  'navbar-start',
  'notification',
  'pagination',
  'pagination-ellipsis',
  'pagination-link',
  'pagination-list',
  'pagination-next',
  'pagination-previous',
  'panel',
  'panel-block',
  'panel-heading',
  'panel-icon',
  'panel-tabs',
  'progress',
  'radio',
  'section',
  'select',
  'subtitle',
  'table',
  'table-container',
  'tabs',
  'tag',
  'tags',
  'textarea',
  'title',
  'tile',
] as const

export type BulmaClassName = typeof bulmaClassNames[number]

export const bulmaClassName = listToKeyValues<BulmaClassName>(bulmaClassNames)
