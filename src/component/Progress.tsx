import * as React from "react"

import { bulmaClassName } from "./classNames"
import { MainColorsProps, ShadeColorsProps, SizeProps } from "./modifiers"
import { renderElement } from './renderElement'

interface ProgressProps extends React.ProgressHTMLAttributes<HTMLProgressElement>, MainColorsProps, ShadeColorsProps, SizeProps {}

export default class Progress extends React.Component<ProgressProps> {
  render() {
    return renderElement('progress', this.props, bulmaClassName.progress)
  }
}
