import * as React from "react"

import { bulmaClassName } from "./classNames"
import { renderElement } from './renderElement'

interface PanelProps extends React.HTMLAttributes<HTMLElement> {}

interface PanelBlockProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> { isActive?: boolean }

interface PanelHeadingProps extends React.HTMLAttributes<HTMLParagraphElement> {}

interface PanelIconProps extends React.HTMLAttributes<HTMLSpanElement> {}

interface PanelTabsProps extends React.HTMLAttributes<HTMLParagraphElement> {}

class PanelBlock extends React.Component<PanelBlockProps> {
  render() {
    const {
      isActive,
      ...props
    } = this.props

    return renderElement('a', props, bulmaClassName.panelBlock, { isActive })
  }
}

class PanelHeading extends React.Component<PanelHeadingProps> {
  render() {
    return renderElement('p', this.props, bulmaClassName.panelHeading)
  }
}

class PanelIcon extends React.Component<PanelIconProps> {
  render() {
    return renderElement('span', this.props, bulmaClassName.panelIcon)
  }
}

class PanelTabs extends React.Component<PanelTabsProps> {
  render() {
    return renderElement('p', this.props, bulmaClassName.panelTabs)
  }
}

export default class Panel extends React.Component<PanelProps> {
  static Block = PanelBlock
  static Heading = PanelHeading
  static Icon = PanelIcon
  static Tabs = PanelTabs

  render() {
return renderElement('nav', this.props, bulmaClassName.panel)
  }
}
