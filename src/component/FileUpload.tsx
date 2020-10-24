import * as classnames from 'classnames'
import * as React from 'react'

import { bulmaClassName, trunxPropsToClassnamesObject } from './classNames'
import { MainColorsProps, SizeProps, extractModifiersProps, modifierPropsToClassnamesObject } from './modifiers'
import { renderElement } from './renderElement'

export interface FileUploadProps extends React.HTMLAttributes<HTMLDivElement>, MainColorsProps, SizeProps {
  hasName?: boolean;
  isBoxed?: boolean;
  isFullwidth?: boolean;
  isRight?: boolean;
}

export type FileUploadCtaProps = React.HTMLAttributes<HTMLSpanElement>

export type FileUploadIconProps = React.HTMLAttributes<HTMLSpanElement>

export type FileUploadInputProps = React.InputHTMLAttributes<HTMLInputElement>

export type IFileUploadLabel = React.HTMLAttributes<HTMLSpanElement>

export type FileUploadNameProps = React.HTMLAttributes<HTMLSpanElement>

class FileUploadCta extends React.Component<FileUploadCtaProps> {
  render (): React.ReactNode {
    return renderElement('span', this.props, bulmaClassName.fileCta)
  }
}

class FileUploadIcon extends React.Component<FileUploadIconProps> {
  render (): React.ReactNode {
    return renderElement('span', this.props, bulmaClassName.fileIcon)
  }
}

class FileUploadInput extends React.Component<FileUploadInputProps> {
  render (): React.ReactNode {
    return renderElement('input', { ...this.props, type: 'file' }, bulmaClassName.fileInput)
  }
}

class FileUploadLabel extends React.Component<IFileUploadLabel> {
  render (): React.ReactNode {
    return renderElement('span', this.props, bulmaClassName.fileLabel)
  }
}

class FileUploadName extends React.Component<FileUploadNameProps> {
  render (): React.ReactNode {
    return renderElement('span', this.props, bulmaClassName.fileName)
  }
}

export class FileUpload extends React.Component<FileUploadProps> {
  static Cta = FileUploadCta
  static Icon = FileUploadIcon
  static Input = FileUploadInput
  static Label = FileUploadLabel
  static Name = FileUploadName

  render (): React.ReactNode {
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
          trunxPropsToClassnamesObject({ hasName, isBoxed, isFullwidth, isRight })
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
