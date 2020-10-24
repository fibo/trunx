import * as React from 'react'
import { SizeProps } from './modifiers'
export interface BreadcrumbProps
  extends React.HTMLAttributes<HTMLElement>,
    SizeProps {
  hasArrowSeparator?: boolean
  hasBulletSeparator?: boolean
  hasDotSeparator?: boolean
  hasSuccedesSeparator?: boolean
  isCentered?: boolean
  isRight?: boolean
}
export interface BreadcrumbItemProps
  extends React.LiHTMLAttributes<HTMLLIElement> {
  isActive?: boolean
}
declare class BreadcrumbItem extends React.Component<BreadcrumbItemProps> {
  render(): React.ReactNode
}
export declare class Breadcrumb extends React.Component<BreadcrumbProps> {
  static Item: typeof BreadcrumbItem
  render(): React.ReactNode
}
export {}
