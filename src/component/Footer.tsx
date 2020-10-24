import * as React from "react"

import { bulmaClassName } from './classNames'
import { renderElement } from './renderElement'

interface FooterProps extends React.HTMLAttributes<HTMLElement>,
                               TextColorHelpersProps {}

export default class Footer extends React.Component<FooterProps> {
  render() {
    return renderElement('footer', this.props, bulmaClassName.footer)
  }
}
