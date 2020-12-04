import * as React from 'react'
import { MainColorsProps, SizeProps } from './modifiers'
export interface FileUploadProps
  extends React.HTMLAttributes<HTMLDivElement>,
    MainColorsProps,
    SizeProps {
  hasName?: boolean
  isBoxed?: boolean
  isFullwidth?: boolean
  isRight?: boolean
}
export declare type FileUploadCtaProps = React.HTMLAttributes<HTMLSpanElement>
export declare type FileUploadIconProps = React.HTMLAttributes<HTMLSpanElement>
export declare type FileUploadInputProps = React.InputHTMLAttributes<
  HTMLInputElement
>
export declare type IFileUploadLabel = React.HTMLAttributes<HTMLSpanElement>
export declare type FileUploadNameProps = React.HTMLAttributes<HTMLSpanElement>
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
