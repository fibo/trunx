import * as classnames from 'classnames'
import * as React from 'react'

import { bulmaClassName, trunxPropsToClassnamesObject } from './classNames'
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

class FileUploadCta extends React.Component<FileUploadCtaProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    return renderElement('span', this.props, bulmaClassName.fileCta)
  }
}

class FileUploadIcon extends React.Component<FileUploadIconProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    return renderElement('span', this.props, bulmaClassName.fileIcon)
  }
}

class FileUploadInput extends React.Component<FileUploadInputProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    return renderElement(
      'input',
      { ...this.props, type: 'file' },
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
    if (this.state.hasError) {
      return null
    }

    return renderElement('span', this.props, bulmaClassName.fileLabel)
  }
}

class FileUploadName extends React.Component<FileUploadNameProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    return renderElement('span', this.props, bulmaClassName.fileName)
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
    if (this.state.hasError) {
      return null
    }

    const [
      modifiersProps,
      { children, className, hasName, isBoxed, isFullwidth, isRight, ...props },
    ] = extractModifiersProps(this.props)

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
