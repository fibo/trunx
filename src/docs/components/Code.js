import React from 'react'
import bash from 'react-syntax-highlighter/languages/prism/bash'
import css from 'react-syntax-highlighter/languages/prism/css-extras'
import jsx from 'react-syntax-highlighter/languages/prism/jsx'
import SyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/prism-light'
import { solarizedlight } from 'react-syntax-highlighter/styles/prism'

registerLanguage('bash', bash)
registerLanguage('css', css)
registerLanguage('jsx', jsx)

export function Code ({ children, ...props }) {
  return (
    <SyntaxHighlighter
      style={solarizedlight}
      {...props}
    >
      {children}
    </SyntaxHighlighter>
  )
}
