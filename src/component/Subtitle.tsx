import * as React from 'react'

import { bulmaClassName } from './classNames'
import { TextColorHelpersProps } from './modifiers'
import { renderElement } from './renderElement'

export interface SubtitleProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    TextColorHelpersProps {
  is1?: boolean
  is2?: boolean
  is3?: boolean
  is4?: boolean
  is5?: boolean
  is6?: boolean
}

export class Subtitle extends React.Component<SubtitleProps> {
  render(): React.ReactNode {
    const { is1, is2, is3, is4, is5, is6, ...props } = this.props

    return renderElement('p', props, bulmaClassName.subtitle, {
      is1,
      is2,
      is3,
      is4,
      is5,
      is6,
    })
  }
}
