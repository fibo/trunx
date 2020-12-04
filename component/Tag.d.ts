import * as React from 'react'
import {
  HelpersProps,
  MainColorsProps,
  ShadeColorsProps,
  SizeProps,
} from './modifiers'
export interface TagProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HelpersProps,
    MainColorsProps,
    ShadeColorsProps,
    Pick<SizeProps, 'isMedium' | 'isLarge'> {
  isDelete?: boolean
  isNormal?: boolean
  isRounded?: boolean
}
export declare class Tag extends React.Component<TagProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
