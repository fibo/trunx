import { FC, HTMLAttributes, PropsWithChildren, useMemo } from 'react'
import { classNames } from '../classNames.js'
import {
  Breakpoint,
  BreakpointProps,
  CommonModifierProps,
  responsivenessClassName,
  modifier,
} from '../modifiers/index.js'

type Gap = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

export type ColumnsProps = HTMLAttributes<HTMLDivElement> &
  Pick<BreakpointProps, 'isMobile' | 'isDesktop'> &
  Pick<CommonModifierProps, 'isCentered'> &
  Partial<{
    gap: Gap | { [key in Breakpoint]: Gap }
    isGapless: boolean
    isNarrow: boolean
    isMultiline: boolean
    isVariable: boolean
    isVcentered: boolean
  }>

export const Columns: FC<PropsWithChildren<ColumnsProps>> = ({
  className,
  children,
  gap,
  isCentered,
  isDesktop,
  isGapless,
  isMobile,
  isMultiline,
  isNarrow,
  isVariable,
  isVcentered,
}) => {
  const _className = useMemo(
    () =>
      classNames(
        'columns',
        responsivenessClassName({ isMobile, isDesktop }),
        modifier({ isCentered }),
        typeof gap === 'number' ? `is-${gap}` : '',
        {
          'is-gapless': isGapless,
          'is-multiline': isMultiline,
          'is-narrow': isNarrow,
          'is-variable': isVariable,
          'is-vcentered': isVcentered,
        },
        className
      ),
    [className, gap, isCentered, isMobile, isMultiline, isNarrow, isDesktop, isVcentered]
  )
  return <div className={_className}>{children}</div>
}
