import * as classname from 'classname'
import * as React from 'react'

interface Props {
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
  isFourFifths?: boolean
  isHalf?: boolean
  isNarrow?: boolean
  isNarrowDesktop?: boolean
  isNarrowMobile?: boolean
  isNarrowTablet?: boolean
  isNarrowTouch?: boolean
  isNarrowWidescreen?: boolean
  isNarrowFullhd?: boolean
  isOneFifth?: boolean
  isOneQuarter?: boolean
  isThreeFifths?: boolean
  isThreeQuarters?: boolean
  isTwoFifths?: boolean
  isTwoQuarters?: boolean
  isTwoThirds?: boolean
}

export default class Column extends React.Component<Props> {
  render() {
    const {
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
      isFourFifths,
      isHalf,
      isNarrow,
      isNarrowDesktop,
      isNarrowMobile,
      isNarrowTablet,
      isNarrowTouch,
      isNarrowWidescreen,
      isNarrowFullhd,
      isOneFifth,
      isOneQuarter,
      isThreeFifths,
      isThreeQuarters,
      isTwoFifths,
      isTwoQuarters,
      isTwoThirds,
    } = this.props

    const className = classname(['column'], {
      'is-2': is2,
      'is-3': is3,
      'is-4': is4,
      'is-5': is5,
      'is-6': is6,
      'is-7': is7,
      'is-8': is8,
      'is-9': is9,
      /* tslint:disable object-literal-sort-keys */
      'is-10': is10,
      'is-11': is11,
      /* tslint:enable object-literal-sort-keys */
      'is-four-fifths': isFourFifths,
      'is-half': isHalf,
      'is-narrow': isNarrow,
      'is-narrow-desktop': isNarrowDesktop,
      'is-narrow-mobile': isNarrowMobile,
      'is-narrow-tablet': isNarrowTablet,
      'is-narrow-touch': isNarrowTouch,
      'is-narrow-widescreen': isNarrowWidescreen,
      'is-narrow-fullhd': isNarrowFullhd,
      'is-one-fifth': isOneFifth,
      'is-one-quarter': isOneQuarter,
      'is-three-fifths': isThreeFifths,
      'is-three-quarters': isThreeQuarters,
      'is-two-fifths': isTwoFifths,
      'is-two-quarters': isTwoQuarters,
      'is-two-thirds': isTwoThirds,
    })

    return (
      <div className={className}>{this.props.children}</div>
    )
  }
}
