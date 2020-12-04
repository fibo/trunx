import * as React from 'react'
import { HelpersProps, MainColorsProps, SizeProps } from './modifiers'
export interface FileUploadProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HelpersProps,
    MainColorsProps,
    SizeProps {
  hasName?: boolean
  isBoxed?: boolean
  isFullwidth?: boolean
  isRight?: boolean
}
export interface FileUploadCtaProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    HelpersProps {}
export interface FileUploadIconProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    HelpersProps {}
export interface FileUploadInputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    HelpersProps {}
export interface IFileUploadLabel
  extends React.HTMLAttributes<HTMLSpanElement>,
    HelpersProps {}
export interface FileUploadNameProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    HelpersProps {}
declare class FileUploadCta extends React.Component<FileUploadCtaProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
declare class FileUploadIcon extends React.Component<FileUploadIconProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
declare class FileUploadInput extends React.Component<FileUploadInputProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
declare class FileUploadLabel extends React.Component<IFileUploadLabel> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
declare class FileUploadName extends React.Component<FileUploadNameProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
export declare class FileUpload extends React.Component<FileUploadProps> {
  static Cta: typeof FileUploadCta
  static Icon: typeof FileUploadIcon
  static Input: typeof FileUploadInput
  static Label: typeof FileUploadLabel
  static Name: typeof FileUploadName
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
export {}
