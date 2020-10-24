import * as React from "react"

import {
  BackgroundColorHelpersProps,
  TextColorHelpersProps,
} from "./modifiers"
import { renderElement } from './renderElement'

interface BProps extends React.HTMLAttributes<HTMLElement>,
                          BackgroundColorHelpersProps,
                          TextColorHelpersProps
{}

export default class B extends React.Component<BProps> {
  render() {
return renderElement('b', this.props)
  }
}
