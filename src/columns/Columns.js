import React, { Component } from 'react'

import classname from 'classname'

export default class Columns extends Component {
  render () {
    const {
      isDesktop,
      isGapeless,
      isMobile,
      isMultiline
    } = this.props

    return (
      <div
        className={classname(['columns'], {
          'is-desktop': isDesktop,
          'is-gapelesss': isGapeless,
          'is-mobile': isMobile,
          'is-multiline': isMultiline
        })}
      >{this.props.children}</div>
    )
  }
}
