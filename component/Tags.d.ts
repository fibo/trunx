import * as React from 'react'
interface TagsProps extends React.HTMLAttributes<HTMLDivElement> {
  areLarge?: boolean
  areMedium?: boolean
  hasAddons?: boolean
}
export declare class Tags extends React.Component<TagsProps> {
  render(): React.ReactNode
}
export {}
