import * as React from 'react'

import { bulmaClassName } from './classNames'
import { SizeProps } from './modifiers'
import { renderElement } from './renderElement'

export interface ContentProps extends React.HTMLAttributes<HTMLDivElement>, SizeProps {
  hasTextCentered?: boolean;
  hasTextJustified?: boolean;
  hasTextLeft?: boolean;
  hasTextRight?: boolean;
}

export class Content extends React.Component<ContentProps> {
  render (): React.ReactNode {
    const {
      hasTextCentered,
      hasTextJustified,
      hasTextLeft,
      hasTextRight,
      ...props
    } = this.props

    return renderElement('div', props, bulmaClassName.content, { hasTextCentered, hasTextJustified, hasTextLeft, hasTextRight })
  }
}
