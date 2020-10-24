import * as React from 'react'

import {
  BackgroundColorHelpersProps,
  TextColorHelpersProps
} from './modifiers'
import { renderElement } from './renderElement'

export interface BProps extends React.HTMLAttributes<HTMLElement>,
                          BackgroundColorHelpersProps,
                          TextColorHelpersProps
{}

export class B extends React.Component<BProps> {
  render (): React.ReactNode {
    return renderElement('b', this.props)
  }
}
