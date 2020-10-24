import * as React from 'react'

import { bulmaClassName } from './classNames'
import { MainColorsProps, TextColorHelpersProps } from './modifiers'
import { renderElement } from './renderElement'

interface HelpProps extends React.HTMLAttributes<HTMLParagraphElement>, MainColorsProps, TextColorHelpersProps { }

export class Help extends React.Component<HelpProps> {
  render (): React.ReactNode {
    return renderElement('p', this.props, bulmaClassName.help)
  }
}
