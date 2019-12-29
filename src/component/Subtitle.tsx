import * as classnames from "classnames"
import * as React from "react"

import {
  ITextColorHelpersProps,
  textColorHelpersPropsToClassnames,
} from "./modifiers"

interface ISubtitleProps extends ITextColorHelpersProps {
  is1?: boolean
  is2?: boolean
  is3?: boolean
  is4?: boolean
  is5?: boolean
  is6?: boolean
}

export default class Subtitle extends React.Component<ISubtitleProps> {
  render() {
    const {
      is1,
      is2,
      is3,
      is4,
      is5,
      is6,
    } = this.props

    const className = classnames("subtitle",
      {
        "is-1": is1,
        "is-2": is2,
        "is-3": is3,
        "is-4": is4,
        "is-5": is5,
        "is-6": is6,
      },
      textColorHelpersPropsToClassnames(this.props),
    )

    return (
      <p className={className}>{this.props.children}</p>
    )
  }
}
