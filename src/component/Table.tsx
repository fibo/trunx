import * as classnames from "classnames"
import * as React from "react"

interface ITableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  isBordered?: boolean
  isFullwidth?: boolean
  isHoverable?: boolean
  isNarrow?: boolean
  isStriped?: boolean
}

export default class Table extends React.Component<ITableProps> {
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
