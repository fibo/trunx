import * as React from "react"

import { BackgroundColorHelpersProps, TextColorHelpersProps } from "./modifiers"
import { renderElement } from './renderElement'

interface StrongProps extends React.HTMLAttributes<HTMLElement>,
                               BackgroundColorHelpersProps,
                               TextColorHelpersProps {}

export class Strong extends React.Component<StrongProps> {
  render() {
    return renderElement('strong' , this.props)
  }
}
