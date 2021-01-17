import * as classnames from 'classnames'
import * as React from 'react'

import { bulmaClassName, trunxPropsToClassnamesObject } from './classNames'
import { ErrorBoundaryProps } from './ErrorBoundary'
import {
  HelpersProps,
  MainColorsProps,
  SizeProps,
  extractModifiersProps,
  modifierPropsToClassnamesObject,
} from './modifiers'
import { renderElement } from './renderElement'

export interface FileUploadProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ErrorBoundaryProps,
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
    ErrorBoundaryProps,
    HelpersProps {}

export interface FileUploadIconProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    ErrorBoundaryProps,
    HelpersProps {}

export interface FileUploadInputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    ErrorBoundaryProps,
    HelpersProps {}

export interface IFileUploadLabel
  extends React.HTMLAttributes<HTMLSpanElement>,
    ErrorBoundaryProps,
    HelpersProps {}

export interface FileUploadNameProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    ErrorBoundaryProps,
    HelpersProps {}

class FileUploadCta extends React.Component<FileUploadCtaProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    const { fallbackUI, ...props } = this.props

    if (this.state.hasError) return fallbackUI

    return renderElement('span', props, bulmaClassName.fileCta)
  }
}

class FileUploadIcon extends React.Component<FileUploadIconProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    const { fallbackUI, ...props } = this.props

    if (this.state.hasError) return fallbackUI

    return renderElement('span', props, bulmaClassName.fileIcon)
  }
}

class FileUploadInput extends React.Component<FileUploadInputProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    const { fallbackUI, ...props } = this.props

    if (this.state.hasError) return fallbackUI

    return renderElement(
      'input',
      { props, type: 'file' },
      bulmaClassName.fileInput
    )
  }
}

class FileUploadLabel extends React.Component<IFileUploadLabel> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    const { fallbackUI, ...props } = this.props

    if (this.state.hasError) return fallbackUI

    return renderElement('span', props, bulmaClassName.fileLabel)
  }
}

class FileUploadName extends React.Component<FileUploadNameProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    const { fallbackUI, ...props } = this.props

    if (this.state.hasError) return fallbackUI

    return renderElement('span', props, bulmaClassName.fileName)
  }
}

export class FileUpload extends React.Component<FileUploadProps> {
  static Cta = FileUploadCta
  static Icon = FileUploadIcon
  static Input = FileUploadInput
  static Label = FileUploadLabel
  static Name = FileUploadName

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    const [
      modifiersProps,
      {
        children,
        className,
        fallbackUI,
        hasName,
        isBoxed,
        isFullwidth,
        isRight,
        ...props
      },
    ] = extractModifiersProps(this.props)

    if (this.state.hasError) return fallbackUI

    return (
      <div
        className={classnames(
          className,
          bulmaClassName.file,
          modifierPropsToClassnamesObject(modifiersProps),
          trunxPropsToClassnamesObject({
            hasName,
            isBoxed,
            isFullwidth,
            isRight,
          })
        )}
        {...props}
      >
        <label className={bulmaClassName.fileLabel}>{children}</label>
      </div>
    )
  }
}
