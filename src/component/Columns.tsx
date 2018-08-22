import * as classnames from 'classnames'
import * as React from 'react'

interface Props {
  isDesktop?: boolean
  isGapless?: boolean
  isMobile?: boolean
  isMultiline?: boolean
}

export default class Columns extends React.Component<Props> {
  render() {
    const {
      isDesktop,
      isGapless,
      isMobile,
      isMultiline,
    } = this.props

    const className = classnames('columns', {
      'is-desktop': isDesktop,
      'is-gapless': isGapless,
      'is-mobile': isMobile,
      'is-multiline': isMultiline,
    })

    return (
      <div className={className}>{this.props.children}</div>
    )
  }
}
