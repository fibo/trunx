import * as React from "react"

import { renderElement } from './renderElement'

interface ILiProps extends React.LiHTMLAttributes<HTMLLIElement> {
  isActive?: boolean
}

export default class Li extends React.Component<ILiProps> {
  render() {
    const {
      isActive,
      ...props
    } = this.props

    return renderElement('li', props,'', { isActive })
  }
}
