import * as React from 'react'

import { bulmaClassName } from './classNames'
import { TextColorHelpersProps } from './modifiers'
import { renderElement } from './renderElement'

export interface HeadingProps extends React.HTMLAttributes<HTMLParagraphElement>,
TextColorHelpersProps {}

export class Heading extends React.Component<HeadingProps> {
  render () :React.ReactNode{
    return renderElement('p', this.props, bulmaClassName.heading)
  }
}
