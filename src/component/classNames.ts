function camelize (value: string): string {
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
  return list.reduce((obj: {[key: string]: T}, key: T) => ({...obj, [camelize(key)]: key}), {})
}

export const bulmaClassNames = [
  "dropdown",
  "dropdown-divider",
  "dropdown-content",
  "dropdown-item",
  "dropdown-menu",
  "dropdown-trigger",
  "modal-card",
  "modal-card-body",
  "modal-card-foot",
  "modal-card-head",
  "modal-close",
] as const

export type BulmaClassName = typeof bulmaClassNames[number]

export const bulmaClassName = listToKeyValues<BulmaClassName>(bulmaClassNames)
