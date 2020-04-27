import * as classnames from "classnames"
import * as React from "react"

import { trunxPropsToClassnames } from './utils'

interface IColumnProps {
  className?: string
  isCentered?: boolean
  is1?: boolean
  is2?: boolean
  is3?: boolean
  is4?: boolean
  is5?: boolean
  is6?: boolean
  is7?: boolean
  is8?: boolean
  is9?: boolean
  is10?: boolean
  is11?: boolean
  is12?: boolean
  isFull?: boolean
  isHalf?: boolean
  isNarrow?: boolean
  isOneQuarter?: boolean
  isOneThird?: boolean
  isOneFifth?: boolean
  isTwoThirds?: boolean
  isTwoQuarters?: boolean
  isTwoFifths?: boolean
  isThreeQuarters?: boolean
  isThreeFifths?: boolean
  isFourFifths?: boolean
  isOffset1?: boolean
  isOffset2?: boolean
  isOffset3?: boolean
  isOffset4?: boolean
  isOffset5?: boolean
  isOffset6?: boolean
  isOffset7?: boolean
  isOffset8?: boolean
  isOffset9?: boolean
  isOffset10?: boolean
  isOffset11?: boolean
  isOffset12?: boolean
  isOffsetHalf?: boolean
  isOffsetOneThird?: boolean
  isOffsetOneQuarter?: boolean
  isOffsetOneFifth?: boolean
  isOffsetTwoThirds?: boolean
  isOffsetTwoFifths?: boolean
  isOffsetThreeQuarters?: boolean
  isOffsetThreeFifths?: boolean
  isOffsetFourFifths?: boolean
  is1Desktop?: boolean
  is2Desktop?: boolean
  is3Desktop?: boolean
  is4Desktop?: boolean
  is5Desktop?: boolean
  is6Desktop?: boolean
  is7Desktop?: boolean
  is8Desktop?: boolean
  is9Desktop?: boolean
  is10Desktop?: boolean
  is11Desktop?: boolean
  is12Desktop?: boolean
  isFullDesktop?: boolean
  isHalfDesktop?: boolean
  isNarrowDesktop?: boolean
  isOneQuarterDesktop?: boolean
  isOneThirdDesktop?: boolean
  isOneFifthDesktop?: boolean
  isTwoThirdsDesktop?: boolean
  isTwoQuartersDesktop?: boolean
  isTwoFifthsDesktop?: boolean
  isThreeQuartersDesktop?: boolean
  isThreeFifthsDesktop?: boolean
  isFourFifthsDesktop?: boolean
  isOffset1Desktop?: boolean
  isOffset2Desktop?: boolean
  isOffset3Desktop?: boolean
  isOffset4Desktop?: boolean
  isOffset5Desktop?: boolean
  isOffset6Desktop?: boolean
  isOffset7Desktop?: boolean
  isOffset8Desktop?: boolean
  isOffset9Desktop?: boolean
  isOffset10Desktop?: boolean
  isOffset11Desktop?: boolean
  isOffset12Desktop?: boolean
  isOffsetHalfDesktop?: boolean
  isOffsetOneThirdDesktop?: boolean
  isOffsetOneQuarterDesktop?: boolean
  isOffsetOneFifthDesktop?: boolean
  isOffsetTwoThirdsDesktop?: boolean
  isOffsetTwoFifthsDesktop?: boolean
  isOffsetThreeQuartersDesktop?: boolean
  isOffsetThreeFifthsDesktop?: boolean
  isOffsetFourFifthsDesktop?: boolean
  is1Fullhd?: boolean
  is2Fullhd?: boolean
  is3Fullhd?: boolean
  is4Fullhd?: boolean
  is5Fullhd?: boolean
  is6Fullhd?: boolean
  is7Fullhd?: boolean
  is8Fullhd?: boolean
  is9Fullhd?: boolean
  is10Fullhd?: boolean
  is11Fullhd?: boolean
  is12Fullhd?: boolean
  isFullFullhd?: boolean
  isHalfFullhd?: boolean
  isNarrowFullhd?: boolean
  isOneQuarterFullhd?: boolean
  isOneThirdFullhd?: boolean
  isOneFifthFullhd?: boolean
  isTwoThirdsFullhd?: boolean
  isTwoQuartersFullhd?: boolean
  isTwoFifthsFullhd?: boolean
  isThreeQuartersFullhd?: boolean
  isThreeFifthsFullhd?: boolean
  isFourFifthsFullhd?: boolean
  isOffset1Fullhd?: boolean
  isOffset2Fullhd?: boolean
  isOffset3Fullhd?: boolean
  isOffset4Fullhd?: boolean
  isOffset5Fullhd?: boolean
  isOffset6Fullhd?: boolean
  isOffset7Fullhd?: boolean
  isOffset8Fullhd?: boolean
  isOffset9Fullhd?: boolean
  isOffset10Fullhd?: boolean
  isOffset11Fullhd?: boolean
  isOffset12Fullhd?: boolean
  isOffsetHalfFullhd?: boolean
  isOffsetOneThirdFullhd?: boolean
  isOffsetOneQuarterFullhd?: boolean
  isOffsetOneFifthFullhd?: boolean
  isOffsetTwoThirdsFullhd?: boolean
  isOffsetTwoFifthsFullhd?: boolean
  isOffsetThreeQuartersFullhd?: boolean
  isOffsetThreeFifthsFullhd?: boolean
  isOffsetFourFifthsFullhd?: boolean
  is1Mobile?: boolean
  is2Mobile?: boolean
  is3Mobile?: boolean
  is4Mobile?: boolean
  is5Mobile?: boolean
  is6Mobile?: boolean
  is7Mobile?: boolean
  is8Mobile?: boolean
  is9Mobile?: boolean
  is10Mobile?: boolean
  is11Mobile?: boolean
  is12Mobile?: boolean
  isFullMobile?: boolean
  isHalfMobile?: boolean
  isNarrowMobile?: boolean
  isOneQuarterMobile?: boolean
  isOneThirdMobile?: boolean
  isOneFifthMobile?: boolean
  isTwoThirdsMobile?: boolean
  isTwoQuartersMobile?: boolean
  isTwoFifthsMobile?: boolean
  isThreeQuartersMobile?: boolean
  isThreeFifthsMobile?: boolean
  isFourFifthsMobile?: boolean
  isOffset1Mobile?: boolean
  isOffset2Mobile?: boolean
  isOffset3Mobile?: boolean
  isOffset4Mobile?: boolean
  isOffset5Mobile?: boolean
  isOffset6Mobile?: boolean
  isOffset7Mobile?: boolean
  isOffset8Mobile?: boolean
  isOffset9Mobile?: boolean
  isOffset10Mobile?: boolean
  isOffset11Mobile?: boolean
  isOffset12Mobile?: boolean
  is1Tablet?: boolean
  is2Tablet?: boolean
  is3Tablet?: boolean
  is4Tablet?: boolean
  is5Tablet?: boolean
  is6Tablet?: boolean
  is7Tablet?: boolean
  is8Tablet?: boolean
  is9Tablet?: boolean
  is10Tablet?: boolean
  is11Tablet?: boolean
  is12Tablet?: boolean
  isFullTablet?: boolean
  isHalfTablet?: boolean
  isNarrowTablet?: boolean
  isOneQuarterTablet?: boolean
  isOneThirdTablet?: boolean
  isOneFifthTablet?: boolean
  isTwoThirdsTablet?: boolean
  isTwoQuartersTablet?: boolean
  isTwoFifthsTablet?: boolean
  isThreeQuartersTablet?: boolean
  isThreeFifthsTablet?: boolean
  isFourFifthsTablet?: boolean
  isOffset1Tablet?: boolean
  isOffset2Tablet?: boolean
  isOffset3Tablet?: boolean
  isOffset4Tablet?: boolean
  isOffset5Tablet?: boolean
  isOffset6Tablet?: boolean
  isOffset7Tablet?: boolean
  isOffset8Tablet?: boolean
  isOffset9Tablet?: boolean
  isOffset10Tablet?: boolean
  isOffset11Tablet?: boolean
  isOffset12Tablet?: boolean
  isOffsetHalfTablet?: boolean
  isOffsetOneThirdTablet?: boolean
  isOffsetOneQuarterTablet?: boolean
  isOffsetOneFifthTablet?: boolean
  isOffsetTwoThirdsTablet?: boolean
  isOffsetTwoFifthsTablet?: boolean
  isOffsetThreeQuartersTablet?: boolean
  isOffsetThreeFifthsTablet?: boolean
  isOffsetFourFifthsTablet?: boolean
  is1Touch?: boolean
  is2Touch?: boolean
  is3Touch?: boolean
  is4Touch?: boolean
  is5Touch?: boolean
  is6Touch?: boolean
  is7Touch?: boolean
  is8Touch?: boolean
  is9Touch?: boolean
  is10Touch?: boolean
  is11Touch?: boolean
  is12Touch?: boolean
  isFullTouch?: boolean
  isHalfTouch?: boolean
  isNarrowTouch?: boolean
  isOneQuarterTouch?: boolean
  isOneThirdTouch?: boolean
  isOneFifthTouch?: boolean
  isTwoThirdsTouch?: boolean
  isTwoQuartersTouch?: boolean
  isTwoFifthsTouch?: boolean
  isThreeQuartersTouch?: boolean
  isThreeFifthsTouch?: boolean
  isFourFifthsTouch?: boolean
  isOffset1Touch?: boolean
  isOffset2Touch?: boolean
  isOffset3Touch?: boolean
  isOffset4Touch?: boolean
  isOffset5Touch?: boolean
  isOffset6Touch?: boolean
  isOffset7Touch?: boolean
  isOffset8Touch?: boolean
  isOffset9Touch?: boolean
  isOffset10Touch?: boolean
  isOffset11Touch?: boolean
  isOffset12Touch?: boolean
  isOffsetHalfTouch?: boolean
  isOffsetOneThirdTouch?: boolean
  isOffsetOneQuarterTouch?: boolean
  isOffsetOneFifthTouch?: boolean
  isOffsetTwoThirdsTouch?: boolean
  isOffsetTwoFifthsTouch?: boolean
  isOffsetThreeQuartersTouch?: boolean
  isOffsetThreeFifthsTouch?: boolean
  isOffsetFourFifthsTouch?: boolean
  is1Widescreen?: boolean
  is2Widescreen?: boolean
  is3Widescreen?: boolean
  is4Widescreen?: boolean
  is5Widescreen?: boolean
  is6Widescreen?: boolean
  is7Widescreen?: boolean
  is8Widescreen?: boolean
  is9Widescreen?: boolean
  is10Widescreen?: boolean
  is11Widescreen?: boolean
  is12Widescreen?: boolean
  isFullWidescreen?: boolean
  isHalfWidescreen?: boolean
  isNarrowWidescreen?: boolean
  isOneQuarterWidescreen?: boolean
  isOneThirdWidescreen?: boolean
  isOneFifthWidescreen?: boolean
  isTwoThirdsWidescreen?: boolean
  isTwoQuartersWidescreen?: boolean
  isTwoFifthsWidescreen?: boolean
  isThreeQuartersWidescreen?: boolean
  isThreeFifthsWidescreen?: boolean
  isFourFifthsWidescreen?: boolean
  isOffset1Widescreen?: boolean
  isOffset2Widescreen?: boolean
  isOffset3Widescreen?: boolean
  isOffset4Widescreen?: boolean
  isOffset5Widescreen?: boolean
  isOffset6Widescreen?: boolean
  isOffset7Widescreen?: boolean
  isOffset8Widescreen?: boolean
  isOffset9Widescreen?: boolean
  isOffset10Widescreen?: boolean
  isOffset11Widescreen?: boolean
  isOffset12Widescreen?: boolean
  isOffsetHalfWidescreen?: boolean
  isOffsetOneThirdWidescreen?: boolean
  isOffsetOneQuarterWidescreen?: boolean
  isOffsetOneFifthWidescreen?: boolean
  isOffsetTwoThirdsWidescreen?: boolean
  isOffsetTwoFifthsWidescreen?: boolean
  isOffsetThreeQuartersWidescreen?: boolean
  isOffsetThreeFifthsWidescreen?: boolean
  isOffsetFourFifthsWidescreen?: boolean
}

export default class Column extends React.Component<IColumnProps> {
  render() {
    const {
      children,
      className,
      ...props
    } = this.props


    return (
      <div
        className={classnames(
          "column",
          className,
          trunxPropsToClassnames(props),
        )}
      >
        {children}
      </div>
    )
  }
}
