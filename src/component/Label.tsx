import * as React from "react"

import { bulmaClassName } from './classNames'
import { SizeProps, TextColorHelpersProps } from "./modifiers"
import { renderElement } from './renderElement'

interface LabelProps extends extends React.LabelHTMLAttributes<HTMLLabelElement>, SizeProps, TextColorHelpersProps {}

export class Label extends React.Component<LabelProps> {
  render() {
return renderElement('label', this.props, bulmaClassName.label)
  }
}
