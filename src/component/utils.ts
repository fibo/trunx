// Credits:
// https://gist.github.com/nblackburn/875e6ff75bc8ce171c758bf75f304707
export function camelCaseToKebabCase (inputString: string): string {
  return inputString.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase()
}

function isTrunxProp (propKey: string) {
  return (
    propKey.substring(0, 3) === 'has' ||
    propKey.substring(0, 2) === 'is'
  )
}

export function trunxPropsToClassnames (props) {
  return Object.keys(props).reduce((obj, key) => {
    if (isTrunxProp(key)) {
      const className = camelCaseToKebabCase(key)

      obj[className] = props[key]
    }

    return obj
  }, {})
}
