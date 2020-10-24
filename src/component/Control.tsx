import * as React from "react"

import { bulmaClassName } from './classNames'
import { SizeProps } from "./modifiers"
import { renderElement } from './renderElement'

interface ControlProps extends React.HTMLAttributes<HTMLDivElement>, SizeProps {
  hasIconsLeft?: boolean
  hasIconsRight?: boolean
  isExpanded?: boolean
  isLoading?: boolean
}

export default class Control extends React.Component<ControlProps> {
  render() {
    const {
      hasIconsLeft,
      hasIconsRight,
      isExpanded,
      isLoading,
      ...props
    }= this.props

    return renderElement('div', props, bulmaClassName.control, { hasIconsLeft, hasIconsRight, isExpanded, isLoading })
  }
}
