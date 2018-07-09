import * as classname from 'classname'
import * as React from 'react'

interface TableProps {
  isBordered?: boolean
  isFullwidth?: boolean
  isHoverable?: boolean
  isNarrow?: boolean
  isStriped?: boolean
}

export default class Table extends React.Component<TableProps> {
  public render() {
    const {
      isBordered,
      isFullwidth,
      isHoverable,
      isNarrow,
      isStriped,
    } = this.props

    const className = classname(['table'], {
      'is-bordered': isBordered,
      'is-fullwidth': isFullwidth,
      'is-hoverable': isHoverable,
      'is-narrow': isNarrow,
      'is-striped': isStriped,
    })

    return (
      <table className={className}>{this.props.children}</table>
    )
  }
}
