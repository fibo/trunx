import * as React from "react"

import { SizeProps } from "./modifiers"
import { renderElement } from './renderElement'

interface ContentProps extends React.HTMLAttributes<HTMLDivElement>, SizeProps {
  hasTextCentered?: boolean
  hasTextJustified?: boolean
  hasTextLeft?: boolean
  hasTextRight?: boolean
}

export default class Content extends React.Component<ContentProps> {
  render() {
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
