import * as React from "react"

import { bulmaClassName } from './classNames'
import { renderElement } from './renderElement'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  isFluid?: boolean
  isFullhd?: boolean
  isWidescreen?: boolean
}

export default class Container extends React.Component<ContainerProps> {
  render() {
    const {
      isFluid,
      isFullhd,
      isWidescreen,
      ...props
    } = this.props

    return renderElement('div', props, bulmaClassName.container, {isFluid, isFullhd, isWidescreen})
  }
}
