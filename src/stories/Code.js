import React, { Component } from 'react'

import SyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/prism-light'
import { coy } from 'react-syntax-highlighter/styles/prism'
import jsx from 'react-syntax-highlighter/languages/prism/jsx'

registerLanguage('jsx', jsx)

export default class Code extends Component {
  render () {
    const {
      children,
      ...props
    } = this.props

    return (
      <SyntaxHighlighter style={coy} {...props}>
        {children}
      </SyntaxHighlighter>

    )
  }
}
