import { FC, HTMLAttributes, PropsWithChildren, useMemo } from 'react'
import { classNames } from '../classNames.js'
import {
  BooleanModifierProps,
  SizeModifierProp,
  Size,
  modifier,
  sizeClassName,
} from '../modifiers/index.js'

export type TabsProps = HTMLAttributes<HTMLElement> &
  SizeModifierProp &
  Pick<
    BooleanModifierProps,
    'isBoxed' | 'isCentered' | 'isFullwidth' | 'isRight' | 'isToggle' | 'isToggleRounded'
  >

export class Tabs extends React.Component<TabsProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    const {
      fallbackUI,
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

    if (this.state.hasError) return fallbackUI

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
