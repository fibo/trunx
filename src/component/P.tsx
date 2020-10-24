import * as classnames from "classnames"
import * as React from "react"

import { AlignementHelpersProps, BackgroundColorHelpersProps, TextColorHelpersProps } from "./modifiers"
import { renderElement } from './renderElement'

interface PProps extends React.HTMLAttributes<HTMLParagraphElement>,
                         AlignementHelpersProps,
                         BackgroundColorHelpersProps,
                         TextColorHelpersProps {}

export class P extends React.Component<PProps> {
  render() {
    return renderElement('p', this.props)
  }
}
