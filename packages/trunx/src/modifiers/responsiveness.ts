import { BulmaClassName } from '../bulma.js'

export const breakpoints = ['mobile', 'tablet', 'touch', 'desktop', 'widescreen', 'fullhd'] as const
export type Breakpoint = typeof breakpoints[number]

export type BreakpointProps = Partial<{
  isMobile: boolean
  isDesktop: boolean
}>

export const responsivenessClassName = ({
  isMobile,
  isDesktop,
}: BreakpointProps): Extract<BulmaClassName, 'is-mobile' | 'is-desktop'> | undefined => {
  if (isMobile) return 'is-mobile'
  if (isDesktop) return 'is-desktop'
  return undefined
}
