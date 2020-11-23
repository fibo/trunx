import * as React from 'react'

import { bulmaClassName } from './classNames'
import { SizeProps } from './modifiers'
import { renderElement } from './renderElement'

export interface TabsProps
  extends React.HTMLAttributes<HTMLElement>,
    SizeProps {
  isBoxed?: boolean
  isCentered?: boolean
  isFullwidth?: boolean
  isRight?: boolean
  isToggle?: boolean
  isToggleRounded?: boolean
}

export class Tabs extends React.Component<TabsProps> {
  render(): React.ReactNode {
    const {
      isBoxed,
      isCentered,
      isFullwidth,
      isLarge,
      isMedium,
      isRight,
      isSmall,
      isToggle,
      isToggleRounded,
      ...props
    } = this.props

    return renderElement('nav', props, bulmaClassName.tabs, {
      isBoxed,
      isCentered,
      isFullwidth,
      isLarge,
      isMedium,
      isRight,
      isSmall,
      isToggle,
      isToggleRounded,
    })
  }
}
