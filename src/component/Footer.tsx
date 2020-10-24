import * as React from 'react'

import { bulmaClassName } from './classNames'
import { TextColorHelpersProps } from './modifiers'
import { renderElement } from './renderElement'

export interface FooterProps extends React.HTMLAttributes<HTMLElement>,
                               TextColorHelpersProps {}

export class Footer extends React.Component<FooterProps> {
  render () :React.ReactNode{
    return renderElement('footer', this.props, bulmaClassName.footer)
  }
}
