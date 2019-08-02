import * as classnames from "classnames"
import * as React from "react"

interface ITableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  isBordered?: boolean
  isFullwidth?: boolean
  isHoverable?: boolean
  isNarrow?: boolean
  isStriped?: boolean
}

class TableContainer extends React.Component {
  render() {
    return (
      <div className="table-container">{this.props.children}</div>
    )
  }
}

export default class Table extends React.Component<ITableProps> {
  static Container = TableContainer

  render() {
    const {
      children,
      isBordered,
      isFullwidth,
      isHoverable,
      isNarrow,
      isStriped,
      ...props
    } = this.props

    const className = classnames("table", {
      "is-bordered": isBordered,
      "is-fullwidth": isFullwidth,
      "is-hoverable": isHoverable,
      "is-narrow": isNarrow,
      "is-striped": isStriped,
    })

    return (
      <table {...props} className={className}>{children}</table>
    )
  }
}
