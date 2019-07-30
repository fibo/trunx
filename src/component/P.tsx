import * as classnames from "classnames"
import * as React from "react"

import {
  IAlignementHelpersProps,
  IBackgroundColorHelpersProps,
  ITextColorHelpersProps,
  alignementPropsToClassenames,
  backgroundColorHelpersPropsToClassenames,
  textColorHelpersPropsToClassenames,
} from "./modifiers"

interface IPProps extends IAlignementHelpersProps,
                          IBackgroundColorHelpersProps,
                          ITextColorHelpersProps,
                          React.HTMLAttributes<HTMLParagraphElement> {}

export default class P extends React.Component<IPProps> {
  render() {
    const {
      hasBackgroundBlack,
      hasBackgroundBlackBis,
      hasBackgroundBlackTer,
      hasBackgroundDanger,
      hasBackgroundDark,
      hasBackgroundGrey,
      hasBackgroundGreyDark,
      hasBackgroundGreyDarker,
      hasBackgroundGreyLight,
      hasBackgroundGreyLighter,
      hasBackgroundInfo,
      hasBackgroundLight,
      hasBackgroundLink,
      hasBackgroundPrimary,
      hasBackgroundSuccess,
      hasBackgroundWarning,
      hasBackgroundWhite,
      hasBackgroundWhiteBis,
      hasBackgroundWhiteTer,
      hasTextBlack,
      hasTextBlackBis,
      hasTextBlackTer,
      hasTextCentered,
      hasTextDanger,
      hasTextDark,
      hasTextGrey,
      hasTextGreyDark,
      hasTextGreyDarker,
      hasTextGreyLight,
      hasTextGreyLighter,
      hasTextInfo,
      hasTextJustified,
      hasTextLeft,
      hasTextLight,
      hasTextLink,
      hasTextPrimary,
      hasTextRight,
      hasTextSuccess,
      hasTextWarning,
      hasTextWhite,
      hasTextWhiteBis,
      hasTextWhiteTer,
      ...props
    } = this.props

    const className = classnames(
      alignementPropsToClassenames({
        hasTextCentered,
        hasTextJustified,
        hasTextLeft,
        hasTextRight,
      }),
      backgroundColorHelpersPropsToClassenames({
        hasBackgroundBlack,
        hasBackgroundBlackBis,
        hasBackgroundBlackTer,
        hasBackgroundDanger,
        hasBackgroundDark,
        hasBackgroundGrey,
        hasBackgroundGreyDark,
        hasBackgroundGreyDarker,
        hasBackgroundGreyLight,
        hasBackgroundGreyLighter,
        hasBackgroundInfo,
        hasBackgroundLight,
        hasBackgroundLink,
        hasBackgroundPrimary,
        hasBackgroundSuccess,
        hasBackgroundWarning,
        hasBackgroundWhite,
        hasBackgroundWhiteBis,
        hasBackgroundWhiteTer,
      }),
      textColorHelpersPropsToClassenames({
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
      <p {...props} className={className}>{this.props.children}</p>
    )
  }
}
