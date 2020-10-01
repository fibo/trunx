import * as classnames from "classnames"
import * as React from "react"

interface ITableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  isBordered?: boolean
  isFullwidth?: boolean
  isHoverable?: boolean
  isNarrow?: boolean
  isStriped?: boolean
}

interface ITableContainerProps {
  className?: string
  children?: string
}

class TableContainer extends React.Component<ITableContainerProps> {
  render() {
    const {
      children,
      className,
    } = this.props

    return (
      <div
        className={classnames(
          "table-container",
          className,
        )}
      >{children}</div>
    )
  }
}

export default class Table extends React.Component<ITableProps> {
  static Container = TableContainer

  render() {
    const {
      children,
      className,
      isBordered,
      isFullwidth,
      isHoverable,
      isNarrow,
      isStriped,
      ...props
    } = this.props

    return (
      <table
        {...props}
        className={classnames(
          "table",
          className,
          {
            "is-bordered": isBordered,
            "is-fullwidth": isFullwidth,
            "is-hoverable": isHoverable,
            "is-narrow": isNarrow,
            "is-striped": isStriped,
          }
        )}
      >{children}</table>
    )
  }
}
