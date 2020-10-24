import * as React from "react"

import { BackgroundColorHelpersProps, TextColorHelpersProps } from "./modifiers"
import { renderElement} from './renderElement'

interface SmallProps extends React.HTMLAttributes<HTMLElement>, BackgroundColorHelpersProps, TextColorHelpersProps {}

export default class Small extends React.Component<SmallProps> {
  render() {
    return renderElement('small', this.props)
  }
}
