import * as React from "react"

import { bulmaClassName } from "./classNames"
import { renderElement } from './renderElement'

interface TagsProps extends React.HTMLAttributes<HTMLDivElement> {
  areLarge?: boolean
  areMedium?: boolean
  hasAddons?: boolean
}

export class Tags extends React.Component<TagsProps> {
  render() {
    const {
      areLarge,
      areMedium,
      children,
      hasAddons,
      ...props
    } = this.props

    return renderElement('div', props, bulmaClassName.tags,{ areLarge, areMedium, hasAddons })
  }
}
