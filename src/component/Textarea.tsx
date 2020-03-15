import * as classnames from "classnames"
import * as React from "react"

import {
  IMainColorsProps,
  ISizeProps,
  ITextColorHelpersProps,
  mainColorsPropsToClassnames,
  sizePropsToClassnames,
  textColorHelpersPropsToClassnames,
} from "./modifiers"

interface ITextareaProps extends IMainColorsProps,
                                 ISizeProps,
                                 ITextColorHelpersProps,
                                 React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  isFocused?: boolean
  isHovered?: boolean
}

export default class Textarea extends React.Component<ITextareaProps> {
  render() {
    const {
      hasTextBlack,
      hasTextBlackBis,
      hasTextBlackTer,
      hasTextDanger,
      hasTextDark,
      hasTextGrey,
      hasTextGreyDark,
      hasTextGreyDarker,
      hasTextGreyLight,
      hasTextGreyLighter,
      hasTextInfo,
      hasTextLight,
      hasTextLink,
      hasTextPrimary,
      hasTextSuccess,
      hasTextWarning,
      hasTextWhite,
      hasTextWhiteBis,
      hasTextWhiteTer,
      isDanger,
      isFocused,
      isHovered,
      isInfo,
      isLarge,
      isMedium,
      isPrimary,
      isSmall,
      isSuccess,
      isWarning,
      ...props
    } = this.props

    const className = classnames("textarea",
      {
        "is-focused": isFocused,
        "is-hovered": isHovered,
      },
      mainColorsPropsToClassnames({
        isDanger,
        isInfo,
        isPrimary,
        isSuccess,
        isWarning,
      }),
      sizePropsToClassnames({
        isLarge,
        isMedium,
        isSmall,
      }),
      textColorHelpersPropsToClassnames({
        hasTextBlack,
        hasTextBlackBis,
        hasTextBlackTer,
        hasTextDanger,
        hasTextDark,
        hasTextGrey,
        hasTextGreyDark,
        hasTextGreyDarker,
        hasTextGreyLight,
        hasTextGreyLighter,
        hasTextInfo,
        hasTextLight,
        hasTextLink,
        hasTextPrimary,
        hasTextSuccess,
        hasTextWarning,
        hasTextWhite,
        hasTextWhiteBis,
        hasTextWhiteTer,
      }),
    )

    return (
      <textarea {...props} className={className} />
    )
  }
}
