import * as classname from 'classname'
import * as React from 'react'

interface Props {
  is1by1?: boolean
  is1by2?: boolean
  is1by3?: boolean
  is2by1?: boolean
  is2by3?: boolean
  is3by1?: boolean
  is3by2?: boolean
  is3by4?: boolean
  is3by5?: boolean
  is4by3?: boolean
  is4by5?: boolean
  is5by3?: boolean
  is5by4?: boolean
  is9by16?: boolean
  is16x16?: boolean
  is24x24?: boolean
  is32x32?: boolean
  is48x48?: boolean
  is64x64?: boolean
  is96x96?: boolean
  /* tslint:disable object-literal-sort-keys */
  is128x128?: boolean
  /* tslint:enable object-literal-sort-keys */
  isSquare?: boolean
}

export default class Image extends React.Component<Props> {
  render() {
    const {
      /* tslint:disable object-literal-sort-keys */
      is1by1,
      is1by2,
      is1by3,
      is2by1,
      is2by3,
      is3by1,
      is3by2,
      is3by4,
      is3by5,
      is4by3,
      is4by5,
      is5by3,
      is5by4,
      is9by16,
      is16x16,
      is24x24,
      is32x32,
      is48x48,
      is64x64,
      is96x96,
      is128x128,
      /* tslint:enable object-literal-sort-keys */
      isSquare,
      ...props
    } = this.props

    const className = classname(['image'], {
      /* tslint:disable object-literal-sort-keys */
      'is-1by1': is1by1,
      'is-1by2': is1by2,
      'is-1by3': is1by3,
      'is-2by1': is2by1,
      'is-2by3': is2by3,
      'is-3by1': is3by1,
      'is-3by2': is3by2,
      'is-3by4': is3by4,
      'is-3by5': is3by5,
      'is-4by3': is4by3,
      'is-4by5': is4by5,
      'is-5by3': is5by3,
      'is-5by4': is5by4,
      'is-16x16': is16x16,
      'is-24x24': is24x24,
      'is-32x32': is32x32,
      'is-48x48': is48x48,
      'is-64x64': is64x64,
      'is-96x96': is96x96,
      'is-128x128': is128x128,
      /* tslint:enable object-literal-sort-keys */
      'is-square': isSquare,
    })

    return (
      <p className={className}>
        <img {...props} />
      </p>
    )
  }
}
