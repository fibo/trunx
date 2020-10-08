import * as classnames from "classnames"
import * as React from "react"

import {
  bulmaClassName,
  BulmaClassModifiers,
}
import {
  IHelpersProps,
  ITextColorHelpersProps,
  extractModifiersProps,
  helpersPropsToClassnames,
  textColorHelpersPropsToClassnames,
} from "./modifiers"

interface ButtonsModifers extends Pick<
  BulmaClassModifiers, 'areLarge'
                     | 'areMedium',
                     | 'areSmall'
>

export interface ButtonsProps
extends React.HTMLAttributes<HTMLDivElement>,
        ButtonsModifers,
        IHelpersProps,
        ITextColorHelpersProps
{}

export class Buttons extends React.Component<ButtonsProps> {
  render() {
    const [{
      helpersProps,
      textColorHelpersProps,
    }, {
      areLarge,
      areMedium,
      areSmall,
      children,
      className,
      ...props
    }] = extractModifiersProps(this.props)

    return (
      <div
        className={classnames(
          bulmaClassName.buttons,
          className,
          {
            "are-large": areLarge,
            "are-medium": areMedium,
            "are-small": areSmall,
          },
          helpersPropsToClassnames(helpersProps),
          textColorHelpersPropsToClassnames(textColorHelpersProps),
        )}
        {...props}
      >
       {children}
      </div>
    )
  }
}
