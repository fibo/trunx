import * as React from 'react'

import {
  AlignementHelpersProps,
  BackgroundColorHelpersProps,
  SpacingHelpersProps,
  TextColorHelpersProps,
} from './modifiers'
import { renderElement } from './renderElement'

export interface PProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    AlignementHelpersProps,
    BackgroundColorHelpersProps,
    SpacingHelpersProps,
    TextColorHelpersProps {}

export class P extends React.Component<PProps> {
  render(): React.ReactNode {
    return renderElement('p', this.props)
  }
}
