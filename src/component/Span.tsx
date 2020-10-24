import * as React from 'react'

import { BackgroundColorHelpersProps, TextColorHelpersProps } from './modifiers'
import { renderElement } from './renderElement'

export interface SpanProps extends React.HTMLAttributes<HTMLSpanElement>, BackgroundColorHelpersProps, TextColorHelpersProps {}

export class Span extends React.Component<SpanProps> {
  render (): React.ReactNode {
    return renderElement('span', this.props)
  }
}
