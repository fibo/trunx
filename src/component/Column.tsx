import * as React from 'react'

import { bulmaClassName } from './classNames'
import { renderElement } from './renderElement'

export interface ColumnProps {
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

export class Column extends React.Component<ColumnProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render() {
    if (this.state.hasError) {
      return null
    }

    const {
      isCentered,
      is1,
      is2,
      is3,
      is4,
      is5,
      is6,
      is7,
      is8,
      is9,
      is10,
      is11,
      is12,
      isFull,
      isHalf,
      isNarrow,
      isOneQuarter,
      isOneThird,
      isOneFifth,
      isTwoThirds,
      isTwoQuarters,
      isTwoFifths,
      isThreeQuarters,
      isThreeFifths,
      isFourFifths,
      isOffset1,
      isOffset2,
      isOffset3,
      isOffset4,
      isOffset5,
      isOffset6,
      isOffset7,
      isOffset8,
      isOffset9,
      isOffset10,
      isOffset11,
      isOffset12,
      isOffsetHalf,
      isOffsetOneThird,
      isOffsetOneQuarter,
      isOffsetOneFifth,
      isOffsetTwoThirds,
      isOffsetTwoFifths,
      isOffsetThreeQuarters,
      isOffsetThreeFifths,
      isOffsetFourFifths,
      is1Desktop,
      is2Desktop,
      is3Desktop,
      is4Desktop,
      is5Desktop,
      is6Desktop,
      is7Desktop,
      is8Desktop,
      is9Desktop,
      is10Desktop,
      is11Desktop,
      is12Desktop,
      isFullDesktop,
      isHalfDesktop,
      isNarrowDesktop,
      isOneQuarterDesktop,
      isOneThirdDesktop,
      isOneFifthDesktop,
      isTwoThirdsDesktop,
      isTwoQuartersDesktop,
      isTwoFifthsDesktop,
      isThreeQuartersDesktop,
      isThreeFifthsDesktop,
      isFourFifthsDesktop,
      isOffset1Desktop,
      isOffset2Desktop,
      isOffset3Desktop,
      isOffset4Desktop,
      isOffset5Desktop,
      isOffset6Desktop,
      isOffset7Desktop,
      isOffset8Desktop,
      isOffset9Desktop,
      isOffset10Desktop,
      isOffset11Desktop,
      isOffset12Desktop,
      isOffsetHalfDesktop,
      isOffsetOneThirdDesktop,
      isOffsetOneQuarterDesktop,
      isOffsetOneFifthDesktop,
      isOffsetTwoThirdsDesktop,
      isOffsetTwoFifthsDesktop,
      isOffsetThreeQuartersDesktop,
      isOffsetThreeFifthsDesktop,
      isOffsetFourFifthsDesktop,
      is1Fullhd,
      is2Fullhd,
      is3Fullhd,
      is4Fullhd,
      is5Fullhd,
      is6Fullhd,
      is7Fullhd,
      is8Fullhd,
      is9Fullhd,
      is10Fullhd,
      is11Fullhd,
      is12Fullhd,
      isFullFullhd,
      isHalfFullhd,
      isNarrowFullhd,
      isOneQuarterFullhd,
      isOneThirdFullhd,
      isOneFifthFullhd,
      isTwoThirdsFullhd,
      isTwoQuartersFullhd,
      isTwoFifthsFullhd,
      isThreeQuartersFullhd,
      isThreeFifthsFullhd,
      isFourFifthsFullhd,
      isOffset1Fullhd,
      isOffset2Fullhd,
      isOffset3Fullhd,
      isOffset4Fullhd,
      isOffset5Fullhd,
      isOffset6Fullhd,
      isOffset7Fullhd,
      isOffset8Fullhd,
      isOffset9Fullhd,
      isOffset10Fullhd,
      isOffset11Fullhd,
      isOffset12Fullhd,
      isOffsetHalfFullhd,
      isOffsetOneThirdFullhd,
      isOffsetOneQuarterFullhd,
      isOffsetOneFifthFullhd,
      isOffsetTwoThirdsFullhd,
      isOffsetTwoFifthsFullhd,
      isOffsetThreeQuartersFullhd,
      isOffsetThreeFifthsFullhd,
      isOffsetFourFifthsFullhd,
      is1Mobile,
      is2Mobile,
      is3Mobile,
      is4Mobile,
      is5Mobile,
      is6Mobile,
      is7Mobile,
      is8Mobile,
      is9Mobile,
      is10Mobile,
      is11Mobile,
      is12Mobile,
      isFullMobile,
      isHalfMobile,
      isNarrowMobile,
      isOneQuarterMobile,
      isOneThirdMobile,
      isOneFifthMobile,
      isTwoThirdsMobile,
      isTwoQuartersMobile,
      isTwoFifthsMobile,
      isThreeQuartersMobile,
      isThreeFifthsMobile,
      isFourFifthsMobile,
      isOffset1Mobile,
      isOffset2Mobile,
      isOffset3Mobile,
      isOffset4Mobile,
      isOffset5Mobile,
      isOffset6Mobile,
      isOffset7Mobile,
      isOffset8Mobile,
      isOffset9Mobile,
      isOffset10Mobile,
      isOffset11Mobile,
      isOffset12Mobile,
      is1Tablet,
      is2Tablet,
      is3Tablet,
      is4Tablet,
      is5Tablet,
      is6Tablet,
      is7Tablet,
      is8Tablet,
      is9Tablet,
      is10Tablet,
      is11Tablet,
      is12Tablet,
      isFullTablet,
      isHalfTablet,
      isNarrowTablet,
      isOneQuarterTablet,
      isOneThirdTablet,
      isOneFifthTablet,
      isTwoThirdsTablet,
      isTwoQuartersTablet,
      isTwoFifthsTablet,
      isThreeQuartersTablet,
      isThreeFifthsTablet,
      isFourFifthsTablet,
      isOffset1Tablet,
      isOffset2Tablet,
      isOffset3Tablet,
      isOffset4Tablet,
      isOffset5Tablet,
      isOffset6Tablet,
      isOffset7Tablet,
      isOffset8Tablet,
      isOffset9Tablet,
      isOffset10Tablet,
      isOffset11Tablet,
      isOffset12Tablet,
      isOffsetHalfTablet,
      isOffsetOneThirdTablet,
      isOffsetOneQuarterTablet,
      isOffsetOneFifthTablet,
      isOffsetTwoThirdsTablet,
      isOffsetTwoFifthsTablet,
      isOffsetThreeQuartersTablet,
      isOffsetThreeFifthsTablet,
      isOffsetFourFifthsTablet,
      is1Touch,
      is2Touch,
      is3Touch,
      is4Touch,
      is5Touch,
      is6Touch,
      is7Touch,
      is8Touch,
      is9Touch,
      is10Touch,
      is11Touch,
      is12Touch,
      isFullTouch,
      isHalfTouch,
      isNarrowTouch,
      isOneQuarterTouch,
      isOneThirdTouch,
      isOneFifthTouch,
      isTwoThirdsTouch,
      isTwoQuartersTouch,
      isTwoFifthsTouch,
      isThreeQuartersTouch,
      isThreeFifthsTouch,
      isFourFifthsTouch,
      isOffset1Touch,
      isOffset2Touch,
      isOffset3Touch,
      isOffset4Touch,
      isOffset5Touch,
      isOffset6Touch,
      isOffset7Touch,
      isOffset8Touch,
      isOffset9Touch,
      isOffset10Touch,
      isOffset11Touch,
      isOffset12Touch,
      isOffsetHalfTouch,
      isOffsetOneThirdTouch,
      isOffsetOneQuarterTouch,
      isOffsetOneFifthTouch,
      isOffsetTwoThirdsTouch,
      isOffsetTwoFifthsTouch,
      isOffsetThreeQuartersTouch,
      isOffsetThreeFifthsTouch,
      isOffsetFourFifthsTouch,
      is1Widescreen,
      is2Widescreen,
      is3Widescreen,
      is4Widescreen,
      is5Widescreen,
      is6Widescreen,
      is7Widescreen,
      is8Widescreen,
      is9Widescreen,
      is10Widescreen,
      is11Widescreen,
      is12Widescreen,
      isFullWidescreen,
      isHalfWidescreen,
      isNarrowWidescreen,
      isOneQuarterWidescreen,
      isOneThirdWidescreen,
      isOneFifthWidescreen,
      isTwoThirdsWidescreen,
      isTwoQuartersWidescreen,
      isTwoFifthsWidescreen,
      isThreeQuartersWidescreen,
      isThreeFifthsWidescreen,
      isFourFifthsWidescreen,
      isOffset1Widescreen,
      isOffset2Widescreen,
      isOffset3Widescreen,
      isOffset4Widescreen,
      isOffset5Widescreen,
      isOffset6Widescreen,
      isOffset7Widescreen,
      isOffset8Widescreen,
      isOffset9Widescreen,
      isOffset10Widescreen,
      isOffset11Widescreen,
      isOffset12Widescreen,
      isOffsetHalfWidescreen,
      isOffsetOneThirdWidescreen,
      isOffsetOneQuarterWidescreen,
      isOffsetOneFifthWidescreen,
      isOffsetTwoThirdsWidescreen,
      isOffsetTwoFifthsWidescreen,
      isOffsetThreeQuartersWidescreen,
      isOffsetThreeFifthsWidescreen,
      isOffsetFourFifthsWidescreen,
      ...props
    } = this.props

    return renderElement('div', props, bulmaClassName.column, {
      isCentered,
      is1,
      is2,
      is3,
      is4,
      is5,
      is6,
      is7,
      is8,
      is9,
      is10,
      is11,
      is12,
      isFull,
      isHalf,
      isNarrow,
      isOneQuarter,
      isOneThird,
      isOneFifth,
      isTwoThirds,
      isTwoQuarters,
      isTwoFifths,
      isThreeQuarters,
      isThreeFifths,
      isFourFifths,
      isOffset1,
      isOffset2,
      isOffset3,
      isOffset4,
      isOffset5,
      isOffset6,
      isOffset7,
      isOffset8,
      isOffset9,
      isOffset10,
      isOffset11,
      isOffset12,
      isOffsetHalf,
      isOffsetOneThird,
      isOffsetOneQuarter,
      isOffsetOneFifth,
      isOffsetTwoThirds,
      isOffsetTwoFifths,
      isOffsetThreeQuarters,
      isOffsetThreeFifths,
      isOffsetFourFifths,
      is1Desktop,
      is2Desktop,
      is3Desktop,
      is4Desktop,
      is5Desktop,
      is6Desktop,
      is7Desktop,
      is8Desktop,
      is9Desktop,
      is10Desktop,
      is11Desktop,
      is12Desktop,
      isFullDesktop,
      isHalfDesktop,
      isNarrowDesktop,
      isOneQuarterDesktop,
      isOneThirdDesktop,
      isOneFifthDesktop,
      isTwoThirdsDesktop,
      isTwoQuartersDesktop,
      isTwoFifthsDesktop,
      isThreeQuartersDesktop,
      isThreeFifthsDesktop,
      isFourFifthsDesktop,
      isOffset1Desktop,
      isOffset2Desktop,
      isOffset3Desktop,
      isOffset4Desktop,
      isOffset5Desktop,
      isOffset6Desktop,
      isOffset7Desktop,
      isOffset8Desktop,
      isOffset9Desktop,
      isOffset10Desktop,
      isOffset11Desktop,
      isOffset12Desktop,
      isOffsetHalfDesktop,
      isOffsetOneThirdDesktop,
      isOffsetOneQuarterDesktop,
      isOffsetOneFifthDesktop,
      isOffsetTwoThirdsDesktop,
      isOffsetTwoFifthsDesktop,
      isOffsetThreeQuartersDesktop,
      isOffsetThreeFifthsDesktop,
      isOffsetFourFifthsDesktop,
      is1Fullhd,
      is2Fullhd,
      is3Fullhd,
      is4Fullhd,
      is5Fullhd,
      is6Fullhd,
      is7Fullhd,
      is8Fullhd,
      is9Fullhd,
      is10Fullhd,
      is11Fullhd,
      is12Fullhd,
      isFullFullhd,
      isHalfFullhd,
      isNarrowFullhd,
      isOneQuarterFullhd,
      isOneThirdFullhd,
      isOneFifthFullhd,
      isTwoThirdsFullhd,
      isTwoQuartersFullhd,
      isTwoFifthsFullhd,
      isThreeQuartersFullhd,
      isThreeFifthsFullhd,
      isFourFifthsFullhd,
      isOffset1Fullhd,
      isOffset2Fullhd,
      isOffset3Fullhd,
      isOffset4Fullhd,
      isOffset5Fullhd,
      isOffset6Fullhd,
      isOffset7Fullhd,
      isOffset8Fullhd,
      isOffset9Fullhd,
      isOffset10Fullhd,
      isOffset11Fullhd,
      isOffset12Fullhd,
      isOffsetHalfFullhd,
      isOffsetOneThirdFullhd,
      isOffsetOneQuarterFullhd,
      isOffsetOneFifthFullhd,
      isOffsetTwoThirdsFullhd,
      isOffsetTwoFifthsFullhd,
      isOffsetThreeQuartersFullhd,
      isOffsetThreeFifthsFullhd,
      isOffsetFourFifthsFullhd,
      is1Mobile,
      is2Mobile,
      is3Mobile,
      is4Mobile,
      is5Mobile,
      is6Mobile,
      is7Mobile,
      is8Mobile,
      is9Mobile,
      is10Mobile,
      is11Mobile,
      is12Mobile,
      isFullMobile,
      isHalfMobile,
      isNarrowMobile,
      isOneQuarterMobile,
      isOneThirdMobile,
      isOneFifthMobile,
      isTwoThirdsMobile,
      isTwoQuartersMobile,
      isTwoFifthsMobile,
      isThreeQuartersMobile,
      isThreeFifthsMobile,
      isFourFifthsMobile,
      isOffset1Mobile,
      isOffset2Mobile,
      isOffset3Mobile,
      isOffset4Mobile,
      isOffset5Mobile,
      isOffset6Mobile,
      isOffset7Mobile,
      isOffset8Mobile,
      isOffset9Mobile,
      isOffset10Mobile,
      isOffset11Mobile,
      isOffset12Mobile,
      is1Tablet,
      is2Tablet,
      is3Tablet,
      is4Tablet,
      is5Tablet,
      is6Tablet,
      is7Tablet,
      is8Tablet,
      is9Tablet,
      is10Tablet,
      is11Tablet,
      is12Tablet,
      isFullTablet,
      isHalfTablet,
      isNarrowTablet,
      isOneQuarterTablet,
      isOneThirdTablet,
      isOneFifthTablet,
      isTwoThirdsTablet,
      isTwoQuartersTablet,
      isTwoFifthsTablet,
      isThreeQuartersTablet,
      isThreeFifthsTablet,
      isFourFifthsTablet,
      isOffset1Tablet,
      isOffset2Tablet,
      isOffset3Tablet,
      isOffset4Tablet,
      isOffset5Tablet,
      isOffset6Tablet,
      isOffset7Tablet,
      isOffset8Tablet,
      isOffset9Tablet,
      isOffset10Tablet,
      isOffset11Tablet,
      isOffset12Tablet,
      isOffsetHalfTablet,
      isOffsetOneThirdTablet,
      isOffsetOneQuarterTablet,
      isOffsetOneFifthTablet,
      isOffsetTwoThirdsTablet,
      isOffsetTwoFifthsTablet,
      isOffsetThreeQuartersTablet,
      isOffsetThreeFifthsTablet,
      isOffsetFourFifthsTablet,
      is1Touch,
      is2Touch,
      is3Touch,
      is4Touch,
      is5Touch,
      is6Touch,
      is7Touch,
      is8Touch,
      is9Touch,
      is10Touch,
      is11Touch,
      is12Touch,
      isFullTouch,
      isHalfTouch,
      isNarrowTouch,
      isOneQuarterTouch,
      isOneThirdTouch,
      isOneFifthTouch,
      isTwoThirdsTouch,
      isTwoQuartersTouch,
      isTwoFifthsTouch,
      isThreeQuartersTouch,
      isThreeFifthsTouch,
      isFourFifthsTouch,
      isOffset1Touch,
      isOffset2Touch,
      isOffset3Touch,
      isOffset4Touch,
      isOffset5Touch,
      isOffset6Touch,
      isOffset7Touch,
      isOffset8Touch,
      isOffset9Touch,
      isOffset10Touch,
      isOffset11Touch,
      isOffset12Touch,
      isOffsetHalfTouch,
      isOffsetOneThirdTouch,
      isOffsetOneQuarterTouch,
      isOffsetOneFifthTouch,
      isOffsetTwoThirdsTouch,
      isOffsetTwoFifthsTouch,
      isOffsetThreeQuartersTouch,
      isOffsetThreeFifthsTouch,
      isOffsetFourFifthsTouch,
      is1Widescreen,
      is2Widescreen,
      is3Widescreen,
      is4Widescreen,
      is5Widescreen,
      is6Widescreen,
      is7Widescreen,
      is8Widescreen,
      is9Widescreen,
      is10Widescreen,
      is11Widescreen,
      is12Widescreen,
      isFullWidescreen,
      isHalfWidescreen,
      isNarrowWidescreen,
      isOneQuarterWidescreen,
      isOneThirdWidescreen,
      isOneFifthWidescreen,
      isTwoThirdsWidescreen,
      isTwoQuartersWidescreen,
      isTwoFifthsWidescreen,
      isThreeQuartersWidescreen,
      isThreeFifthsWidescreen,
      isFourFifthsWidescreen,
      isOffset1Widescreen,
      isOffset2Widescreen,
      isOffset3Widescreen,
      isOffset4Widescreen,
      isOffset5Widescreen,
      isOffset6Widescreen,
      isOffset7Widescreen,
      isOffset8Widescreen,
      isOffset9Widescreen,
      isOffset10Widescreen,
      isOffset11Widescreen,
      isOffset12Widescreen,
      isOffsetHalfWidescreen,
      isOffsetOneThirdWidescreen,
      isOffsetOneQuarterWidescreen,
      isOffsetOneFifthWidescreen,
      isOffsetTwoThirdsWidescreen,
      isOffsetTwoFifthsWidescreen,
      isOffsetThreeQuartersWidescreen,
      isOffsetThreeFifthsWidescreen,
      isOffsetFourFifthsWidescreen,
    })
  }
}
