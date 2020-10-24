import * as React from "react"

import { bulmaClassName }from './classNames'
import { TextColorHelpersProps } from "./modifiers"
import { renderElement } from './renderElement'

interface HeadingProps extends React.HTMLAttributes<HTMLParagraphElement>,
TextColorHelpersProps  {}

export default class Heading extends React.Component<HeadingProps> {
  render() {
    return renderElement('p', this.props, bulmaClassName.heading)
  }
}
