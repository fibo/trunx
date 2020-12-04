import * as classnames from 'classnames'
import * as React from 'react'

import { bulmaClassName } from './classNames'

export type RadioProps = React.InputHTMLAttributes<HTMLInputElement>

export class Radio extends React.Component<RadioProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    const { children, className, ...props } = this.props

    return (
      <label className={classnames(bulmaClassName.radio, className)}>
        <input {...props} type='radio' />

        {children}
      </label>
    )
  }
}
