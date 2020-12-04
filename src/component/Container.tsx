import * as React from 'react'

import { bulmaClassName } from './classNames'
import { HelpersProps } from './modifiers'
import { renderElement } from './renderElement'

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HelpersProps {
  isFluid?: boolean
  isFullhd?: boolean
  isWidescreen?: boolean
}

export class Container extends React.Component<ContainerProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    const { isFluid, isFullhd, isWidescreen, ...props } = this.props

    return renderElement('div', props, bulmaClassName.container, {
      isFluid,
      isFullhd,
      isWidescreen,
    })
  }
}
