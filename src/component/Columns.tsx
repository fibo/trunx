import * as React from 'react'

import { bulmaClassName } from './classNames'
import { renderElement } from './renderElement'

export interface ColumnsProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  isDesktop?: boolean;
  isGapless?: boolean;
  isMobile?: boolean;
  isMultiline?: boolean;
}

export class Columns extends React.Component<ColumnsProps> {
  render () :React.ReactNode{
    return renderElement('div', this.props, bulmaClassName.columns)
  }
}
