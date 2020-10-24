import * as React from "react"

import {
  BackgroundColorHelpersProps,
  TextColorHelpersProps,
} from "./modifiers"
import { renderElement } from './renderElement'

export interface EmProps extends React.HTMLAttributes<HTMLElement>, BackgroundColorHelpersProps, TextColorHelpersProps {}

export class Em extends React.Component<EmProps> {
  render() {
return     renderElement('em', this.props)
  }
}
