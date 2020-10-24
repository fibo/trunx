import * as React from "react"

import { bulmaClassName } from './classNames'
import { renderElement } from './renderElement'

export interface ColumnsProps {
  className?: string,
  isDesktop?: boolean
  isGapless?: boolean
  isMobile?: boolean
  isMultiline?: boolean
}

export default class Columns extends React.Component<ColumnsProps> {
  render() {
return renderElement('div', this.props, bulmaClassName.columns)
}
}
