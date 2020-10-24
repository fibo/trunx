import * as React from 'react'

import { renderElement } from './renderElement'

type UlProps = React.HTMLAttributes<HTMLUListElement>

export class Ul extends React.Component<UlProps> {
  render (): React.ReactNode {
    return renderElement('ul', this.props)
  }
}
