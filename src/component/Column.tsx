import * as classnames from "classnames"
import * as React from "react"

interface IColumnProps {
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
  isFourFifths?: boolean
  isHalf?: boolean
  isNarrow?: boolean
  isNarrowDesktop?: boolean
  isNarrowMobile?: boolean
  isNarrowTablet?: boolean
  isNarrowTouch?: boolean
  isNarrowWidescreen?: boolean
  isNarrowFullhd?: boolean
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
  isOneFifth?: boolean
  isOneQuarter?: boolean
  isOneThird?: boolean
  isThreeFifths?: boolean
  isThreeQuarters?: boolean
  isTwoFifths?: boolean
  isTwoQuarters?: boolean
  isTwoThirds?: boolean
}

export default class Column extends React.Component<IColumnProps> {
  render() {
    const {
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
      isFourFifths,
      isHalf,
      isNarrow,
      isNarrowDesktop,
      isNarrowMobile,
      isNarrowTablet,
      isNarrowTouch,
      isNarrowWidescreen,
      isNarrowFullhd,
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
      isOneFifth,
      isOneQuarter,
      isOneThird,
      isThreeFifths,
      isThreeQuarters,
      isTwoFifths,
      isTwoQuarters,
      isTwoThirds,
    } = this.props

    const className = classnames("column",
      {
        "is-1": is1,
        "is-2": is2,
        "is-3": is3,
        "is-4": is4,
        "is-5": is5,
        "is-6": is6,
        "is-7": is7,
        "is-8": is8,
        "is-9": is9,
        /* tslint:disable object-literal-sort-keys */
        "is-10": is10,
        "is-11": is11,
        "is-12": is12,
        /* tslint:enable object-literal-sort-keys */
        "is-four-fifths": isFourFifths,
        "is-half": isHalf,
        "is-narrow": isNarrow,
        "is-narrow-desktop": isNarrowDesktop,
        "is-narrow-mobile": isNarrowMobile,
        "is-narrow-tablet": isNarrowTablet,
        "is-narrow-touch": isNarrowTouch,
        "is-narrow-widescreen": isNarrowWidescreen,
        "is-narrow-fullhd": isNarrowFullhd,
        "is-offset-1": isOffset1,
        "is-offset-2": isOffset2,
        "is-offset-3": isOffset3,
        "is-offset-4": isOffset4,
        "is-offset-5": isOffset5,
        "is-offset-6": isOffset6,
        "is-offset-7": isOffset7,
        "is-offset-8": isOffset8,
        "is-offset-9": isOffset9,
        /* tslint:disable object-literal-sort-keys */
        "is-offset-10": isOffset10,
        "is-offset-11": isOffset11,
        "is-offset-12": isOffset12,
        "is-one-fifth": isOneFifth,
        "is-one-quarter": isOneQuarter,
        "is-one-third": isOneThird,
        "is-three-fifths": isThreeFifths,
        "is-three-quarters": isThreeQuarters,
        "is-two-fifths": isTwoFifths,
        "is-two-quarters": isTwoQuarters,
        "is-two-thirds": isTwoThirds,
      }
    )

    return (
      <div className={className}>{this.props.children}</div>
    )
  }
}
