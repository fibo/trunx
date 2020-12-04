import * as React from 'react'

import { bulmaClassName } from './classNames'
import { SizeProps } from './modifiers'
import { renderElement } from './renderElement'

export interface DeleteProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    SizeProps {}

export class Delete extends React.Component<DeleteProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    return renderElement('button', this.props, bulmaClassName.delete)
  }
}
