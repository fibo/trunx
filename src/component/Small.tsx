import * as React from 'react'

import { BackgroundColorHelpersProps, TextColorHelpersProps } from './modifiers'
import { renderElement } from './renderElement'

export interface SmallProps extends React.HTMLAttributes<HTMLElement>, BackgroundColorHelpersProps, TextColorHelpersProps {}

export class Small extends React.Component<SmallProps> {
  render ():React.ReactNode {
    return renderElement('small', this.props)
  }
}
