import * as React from "react"

import { renderElement } from './renderElement'

interface UlProps extends React.HTMLAttributes<HTMLUListElement> {}

export  class Ul extends React.Component<UlProps> {
  render() {
return renderElement('ul', this.props)
  }
}
