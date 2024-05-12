// Breakpoints are defined in bulma/sass/utilities/initial-variables.sass
export const breakpoints = [
  "mobile",
  "tablet",
  "desktop",
  "widescreen",
  "fullhd",
] as const

/**
 * Responsive breakpoints.
 *
 * If `$gap` Sass variable is the default, i.e. `32px`, breakpoints will be:
 *
 * - Mobile
 * - Tablet: 769px
 * - Desktop: 1024px = `960px + (2 * $gap)`
 * - Widescreen: 1216px = `1152px + (2 * $gap)`
 * - Fullhd: 1408px = `1344px + (2 * $gap)`
 */
export type Breakpoint = (typeof breakpoints)[number]

export type BreakpointsMap<T> = Partial<{ [key in Breakpoint]: T }>
