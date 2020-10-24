import * as React from 'react'

import { bulmaClassName } from './classNames'
import { MainColorsProps } from './modifiers'
import { renderElement } from './renderElement'

interface NotificationProps
  extends React.HTMLAttributes<HTMLDivElement>,
    MainColorsProps {}

export class Notification extends React.Component<NotificationProps> {
  render (): React.ReactNode {
    return renderElement('div', this.props, bulmaClassName.navbar)
  }
}
