import * as React from 'react'

import { bulmaClassName } from './classNames'
import { renderElement } from './renderElement'

interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  isBordered?: boolean;
  isFullwidth?: boolean;
  isHoverable?: boolean;
  isNarrow?: boolean;
  isStriped?: boolean;
}

type TableContainerProps = React.HTMLAttributes<HTMLDivElement>

class TableContainer extends React.Component<TableContainerProps> {
  render (): React.ReactNode {
    return renderElement('div', this.props, bulmaClassName.tableContainer)
  }
}

export class Table extends React.Component<TableProps> {
  static Container = TableContainer

  render (): React.ReactNode {
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
      isStriped
    })
  }
}
