import * as React from 'react'

import { bulmaClassName } from './classNames'
import { renderElement } from './renderElement'

export interface ColumnsProps extends React.HTMLAttributes<HTMLDivElement> {
  isDesktop?: boolean
  isGapless?: boolean
  isMobile?: boolean
  isMultiline?: boolean
}

export class Columns extends React.Component<ColumnsProps> {
  render(): React.ReactNode {
    const { isDesktop, isGapless, isMobile, isMultiline, ...props } = this.props

    return renderElement('div', props, bulmaClassName.columns, {
      isDesktop,
      isGapless,
      isMobile,
      isMultiline,
    })
  }
}
