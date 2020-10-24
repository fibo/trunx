import * as React from 'react'

import { bulmaClassName } from './classNames'
import { AlignementHelpersProps, TextColorHelpersProps } from './modifiers'
import { renderElement } from './renderElement'

export interface LevelProps extends React.HTMLAttributes<HTMLDivElement>, TextColorHelpersProps {
  isMobile?: boolean;
}

export interface LevelItemProps extends React.HTMLAttributes<HTMLDivElement>,
                                  AlignementHelpersProps,
                                  TextColorHelpersProps {
  as?: 'a' | 'div';
}

export interface LevelLeftProps extends React.HTMLAttributes<HTMLDivElement>, TextColorHelpersProps {}

export interface LevelRightProps extends React.HTMLAttributes<HTMLDivElement>, TextColorHelpersProps {}

class LevelItem extends React.Component<LevelItemProps> {
  static defaultProps ={ as: 'div' }

  render (): React.ReactNode {
    const {
      as: tag,
      ...props
    } = this.props

    return renderElement(tag as string, props, bulmaClassName.levelItem)
  }
}

class LevelLeft extends React.Component<LevelLeftProps> {
  render (): React.ReactNode {
    return renderElement('div', this.props, bulmaClassName.levelLeft)
  }
}

class LevelRight extends React.Component<LevelRightProps> {
  render (): React.ReactNode {
    return renderElement('div', this.props, bulmaClassName.levelRight)
  }
}

export class Level extends React.Component<LevelProps> {
  static Item = LevelItem
  static Left = LevelLeft
  static Right = LevelRight

  render () : React.ReactNode{
    const {
      isMobile,
      ...props
    } = this.props

    return renderElement('nav', props, bulmaClassName.level, { isMobile })
  }
}
