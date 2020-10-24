import * as React from 'react'

import { renderElement } from './renderElement'

export interface LiProps extends React.LiHTMLAttributes<HTMLLIElement> {
  isActive?: boolean;
}

export class Li extends React.Component<LiProps> {
  render () {
    const {
      isActive,
      ...props
    } = this.props

    return renderElement('li', props, undefined, { isActive })
  }
}
