import * as classname from 'classname'
import * as React from 'react'

interface Props {
  isDesktop?: boolean
  isGapeless?: boolean
  isMobile?: boolean
  isMultiline?: boolean
}

export default class Columns extends React.Component<Props> {
  public render() {
    const {
      isDesktop,
      isGapeless,
      isMobile,
      isMultiline
    } = this.props

    const className = classname(['columns'], {
      'is-desktop': isDesktop,
      'is-gapelesss': isGapeless,
      'is-mobile': isMobile,
      'is-multiline': isMultiline
    })

    return (
      <div className={className}>{this.props.children}</div>
    )
  }
}
