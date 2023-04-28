export const breakpoints = [
  "mobile",
  "tablet",
  "touch",
  "desktop",
  "widescreen",
  "fullhd",
] as const
export type Breakpoint = typeof breakpoints[number]
