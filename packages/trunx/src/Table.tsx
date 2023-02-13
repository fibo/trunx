import * as React from 'react'

import { ErrorBoundaryProps } from './ErrorBoundary.js'
import { bulmaClassName } from './classNames.js'
import { HelpersProps } from './modifiers.js'
import { renderElement } from './renderElement.js'

export interface TableProps
  extends React.TableHTMLAttributes<HTMLTableElement>,
    ErrorBoundaryProps,
    HelpersProps {
  isBordered?: boolean
  isFullwidth?: boolean
  isHoverable?: boolean
  isNarrow?: boolean
  isStriped?: boolean
}

export interface TableContainerProps extends React.HTMLAttributes<HTMLDivElement>, ErrorBoundaryProps {}

class TableContainer extends React.Component<TableContainerProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    const { fallbackUI, ...props } = this.props

    if (this.state.hasError) return fallbackUI

    return renderElement('div', props, bulmaClassName.tableContainer)
  }
}

export class Table extends React.Component<TableProps> {
  static Container = TableContainer

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    const { fallbackUI, isBordered, isFullwidth, isHoverable, isNarrow, isStriped, ...props } = this.props

    if (this.state.hasError) return fallbackUI

    return renderElement('table', props, bulmaClassName.table, {
      isBordered,
      isFullwidth,
      isHoverable,
      isNarrow,
      isStriped,
    })
  }
}
