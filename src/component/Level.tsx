import * as React from "react"

import { bulmaClassName } from './classNames'
import { AlignementHelpersProps, TextColorHelpersProps } from "./modifiers"
import { renderElement } from './renderElement'

interface LevelProps extends React.HTMLAttributes<HTMLDivElement>, TextColorHelpersProps {
  isMobile?: boolean
}

interface LevelItemProps extends React.HTMLAttributes<HTMLDivElement>,
                                  AlignementHelpersProps,
                                  TextColorHelpersProps {
  as?: 'a' | 'div'
}

interface LevelLeftProps extends React.HTMLAttributes<HTMLDivElement>, TextColorHelpersProps {}

interface LevelRightProps extends React.HTMLAttributes<HTMLDivElement>, TextColorHelpersProps {}

class LevelItem extends React.Component<LevelItemProps> {
  static defaultProps ={as: 'div'}

  render() {
    const {
      as: tag,
      ...props
    } = this.props

return renderElement(tag as string, props,bulmaClassName.levelItem)
  }
}

class LevelLeft extends React.Component<LevelLeftProps> {
  render() {
    return renderElement('div', this.props, bulmaClassName.levelLeft)
  }
}

class LevelRight extends React.Component<LevelRightProps> {
  render() {
    return renderElement('div', this.props, bulmaClassName.levelRight)
  }
}

export default class Level extends React.Component<LevelProps> {
  static Item = LevelItem
  static Left = LevelLeft
  static Right = LevelRight

  render() {
    const {
      isMobile,
...props
    } = this.props

return renderElement('nav', props, bulmaClassName.level, { isMobile })
  }
}
