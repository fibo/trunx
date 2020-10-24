import * as classnames from 'classnames'
import * as React from 'react'

import { bulmaClassName } from './classNames'

export type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement>

export class Checkbox extends React.Component<CheckboxProps> {
  render () {
    const {
      children,
      className,
      ...props
    } = this.props

    return (
      <label
        className={classnames(
          bulmaClassName.checkbox,
          className
        )}
      >
        <input
          type='checkbox'
          {...props}
        />

        {' '/* adding a space looks better */}

        {children}
      </label>
    )
  }
}
