import * as classname from 'classname'
import * as React from 'react'

interface Props {
  is16x16?: boolean
  is24x24?: boolean
  is32x32?: boolean
  is48x48?: boolean
  is64x64?: boolean
  is96x96?: boolean
  /* tslint:disable object-literal-sort-keys */
  is128x128?: boolean
  /* tslint:enable object-literal-sort-keys */
}

export default class Image extends React.Component {
  render() {
    const {
      is16x16,
      is24x24,
      is32x32,
      is48x48,
      is64x64,
      is96x96,
      /* tslint:disable object-literal-sort-keys */
      is128x128,
      /* tslint:enable object-literal-sort-keys */
      ...props
    } = this.props

    const className = classname(['image'], {
      'is-16x16': is16x16,
      'is-24x24': is24x24,
      'is-32x32': is32x32,
      'is-48x48': is48x48,
      'is-64x64': is64x64,
      'is-96x96': is96x96,
      /* tslint:disable object-literal-sort-keys */
      'is-128x128': is128x128,
      /* tslint:enable object-literal-sort-keys */
    })

    return (
      <p className={className}>
        <img {...props} />
      </p>
    )
  }
}
