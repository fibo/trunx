import * as React from 'react'

import { bulmaClassName } from './classNames'
import { SizeProps } from './modifiers'
import { renderElement } from './renderElement'

export interface DeleteProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, SizeProps { }

export class Delete extends React.Component<DeleteProps> {
  render ():React.ReactNode {
    return renderElement('button', this.props, bulmaClassName.delete)
  }
}
