import * as React from 'react'

import { bulmaClassName } from './classNames'
import { MainColorsProps, ShadeColorsProps, SizeProps } from './modifiers'
import { renderElement } from './renderElement'

export interface ProgressProps
  extends React.ProgressHTMLAttributes<HTMLProgressElement>,
    MainColorsProps,
    ShadeColorsProps,
    SizeProps {}

export class Progress extends React.Component<ProgressProps> {
  render(): React.ReactNode {
    return renderElement('progress', this.props, bulmaClassName.progress)
  }
}
