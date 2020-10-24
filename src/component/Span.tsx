import * as React from "react"

import { BackgroundColorHelpersProps, TextColorHelpersProps } from "./modifiers"
import { renderElement } from './renderElement'

interface SpanProps extends React.HTMLAttributes<HTMLSpanElement>, BackgroundColorHelpersProps, TextColorHelpersProps {}

export default class Span extends React.Component<SpanProps> {
  render() {
return renderElement('span', this.props)
  }
}
