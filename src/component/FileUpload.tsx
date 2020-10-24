import * as classnames from "classnames"
import * as React from "react"

import { bulmaClassName, trunxPropsToClassnamesObject }from './classNames'
import { MainColorsProps, SizeProps, extractModifiersProps, modifierPropsToClassnamesObject } from "./modifiers"
import { renderElement } from './renderElement'

export interface FileUploadProps extends React.HTMLAttributes<HTMLDivElement>, MainColorsProps, SizeProps {
  hasName?: boolean
  isBoxed?: boolean
  isFullwidth?: boolean
  isRight?: boolean
}

export interface FileUploadCtaProps extends React.HTMLAttributes<HTMLSpanElement> {}

export interface FileUploadIconProps extends React.HTMLAttributes<HTMLSpanElement> {}

export interface FileUploadInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export interface IFileUploadLabel extends React.HTMLAttributes<HTMLSpanElement> {}

export interface FileUploadNameProps extends React.HTMLAttributes<HTMLSpanElement> {}

class FileUploadCta extends React.Component<FileUploadCtaProps> {
  render() {
return renderElement('span', this.props, bulmaClassName.fileCta)
  }
}

class FileUploadIcon extends React.Component<FileUploadIconProps> {
  render() {
return renderElement('span', this.props, bulmaClassName.fileIcon)
  }
}

class FileUploadInput extends React.Component<FileUploadInputProps> {
  render() {
    const {
      className,
      ...props
    } = this.props

    return (
      <input
        className={classnames(
bulmaClassName.fileInput,
          className,
        )}
        type="file"
        {...props}
      />
    )
  }
}

class FileUploadLabel extends React.Component<IFileUploadLabel> {
  render() {
return renderElement('span', this.props, bulmaClassName.fileLabel)
  }
}

class FileUploadName extends React.Component<FileUploadNameProps> {
  render() {
    return renderElement('span', this.props, bulmaClassName.fileName)
  }
}

export default class FileUpload extends React.Component<FileUploadProps> {
  static Cta = FileUploadCta
  static Icon = FileUploadIcon
  static Input = FileUploadInput
  static Label = FileUploadLabel
  static Name = FileUploadName

  render() {
    const [modifiersProps, {
      children,
      className,
      hasName,
      isBoxed,
isFullwidth,
isRight,
      ...props
    }] = extractModifiersProps(this.props)

    return (
      <div
        className={classnames(
          className,
bulmaClassName.file,
modifierPropsToClassnamesObject(modifiersProps),
trunxPropsToClassnamesObject({hasName, isBoxed, isFullwidth, isRight}),
        )}
        {...props}
      >
        <label className={bulmaClassName.fileLabel}>
          {children}
        </label>
      </div>
    )
  }
}
