import * as React from 'react'

import { bulmaClassName } from './classNames'
import { renderElement } from './renderElement'

export type PanelProps = React.HTMLAttributes<HTMLElement>

export interface PanelBlockProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  isActive?: boolean
}

export type PanelHeadingProps = React.HTMLAttributes<HTMLParagraphElement>

export type PanelIconProps = React.HTMLAttributes<HTMLSpanElement>

export type PanelTabsProps = React.HTMLAttributes<HTMLParagraphElement>

class PanelBlock extends React.Component<PanelBlockProps> {
  render(): React.ReactNode {
    const { isActive, ...props } = this.props

    return renderElement('a', props, bulmaClassName.panelBlock, { isActive })
  }
}

class PanelHeading extends React.Component<PanelHeadingProps> {
  render(): React.ReactNode {
    return renderElement('p', this.props, bulmaClassName.panelHeading)
  }
}

class PanelIcon extends React.Component<PanelIconProps> {
  render(): React.ReactNode {
    return renderElement('span', this.props, bulmaClassName.panelIcon)
  }
}

class PanelTabs extends React.Component<PanelTabsProps> {
  render(): React.ReactNode {
    return renderElement('p', this.props, bulmaClassName.panelTabs)
  }
}

export class Panel extends React.Component<PanelProps> {
  static Block = PanelBlock
  static Heading = PanelHeading
  static Icon = PanelIcon
  static Tabs = PanelTabs

  render(): React.ReactNode {
    return renderElement('nav', this.props, bulmaClassName.panel)
  }
}
