import * as React from 'react'

import { bulmaClassName } from './classNames'
import { HelpersProps } from './modifiers'
import { renderElement } from './renderElement'

interface TableProps
  extends React.TableHTMLAttributes<HTMLTableElement>,
    HelpersProps {
  isBordered?: boolean
  isFullwidth?: boolean
  isHoverable?: boolean
  isNarrow?: boolean
  isStriped?: boolean
}

type TableContainerProps = React.HTMLAttributes<HTMLDivElement>

class TableContainer extends React.Component<TableContainerProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    return renderElement('div', this.props, bulmaClassName.tableContainer)
  }
}

export class Table extends React.Component<TableProps> {
  static Container = TableContainer

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    const {
      isBordered,
      isFullwidth,
      isHoverable,
      isNarrow,
      isStriped,
      ...props
    } = this.props

    return renderElement('table', props, bulmaClassName.table, {
      isBordered,
      isFullwidth,
      isHoverable,
      isNarrow,
      isStriped,
    })
  }
}
