import * as classnames from "classnames"
import * as React from "react"

import {
  BackgroundColorHelpersProps,
  FloatHelpersProps,
  TextColorHelpersProps,
} from "./modifiers"
import { renderElement } from './renderElement'

export interface DivProps
extends React.HTMLAttributes<HTMLDivElement>,
        BackgroundColorHelpersProps,
        FloatHelpersProps,
        TextColorHelpersProps
{}

export default class Div extends React.Component<DivProps> {
  render() {
    return renderElement('div', this.props)
  }
}
