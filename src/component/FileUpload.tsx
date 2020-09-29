import * as classnames from "classnames"
import * as React from "react"

import {
  IMainColorsProps,
  ISizeProps,
  mainColorsPropsToClassnames,
  sizePropsToClassnames,
} from "./modifiers"

interface IFileUploadProps extends IMainColorsProps,
                                   ISizeProps {
  className?: string;
  children?: React.ReactNode
  hasName?: boolean
  isBoxed?: boolean
  isFullwidth?: boolean
  isRight?: boolean
}

interface IFileUploadCta {
  className?: string;
  children?: React.ReactNode
}

interface IFileUploadIcon {
  className?: string;
  children?: React.ReactNode
}

interface IFileUploadInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

interface IFileUploadLabel {
  className?: string;
  children?: React.ReactNode
}

interface IFileUploadName {
  className?: string;
  children?: React.ReactNode
}

class FileUploadCta extends React.Component<IFileUploadCta> {
  render() {
    const {
      children,
      className,
    } = this.props

    return (
      <span
        className={classnames(
          "file-cta",
          className,
        )}
      >{children}</span>
    )
  }
}

class FileUploadIcon extends React.Component<IFileUploadIcon> {
  render() {
    const {
      children,
      className,
    } = this.props

    return (
      <span
        className={classnames(
          "file-icon",
          className,
        )}
      >{children}</span>
    )
  }
}

class FileUploadInput extends React.Component<IFileUploadInputProps> {
  render() {
    const {
      className,
      ...props
    } = this.props

    return (
      <input
        className={classnames(
          "file-input",
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
    const {
      children,
      className,
    } = this.props

    return (
      <span
        className={classnames(
          "file-label",
          className,
        )}
      >{children}</span>
    )
  }
}

class FileUploadName extends React.Component<IFileUploadName> {
  render() {
    const {
      children,
      className,
    } = this.props

    return (
      <span
        className={classnames(
          "file-name",
          className,
        )}
      >{children}</span>
    )
  }
}

export default class FileUpload extends React.Component<IFileUploadProps> {
  static Cta = FileUploadCta
  static Icon = FileUploadIcon
  static Input = FileUploadInput
  static Label = FileUploadLabel
  static Name = FileUploadName

  render() {
    const {
      children,
      className,
      hasName,
      isBoxed,
      isDanger,
      isFullwidth,
      isInfo,
      isLarge,
      isMedium,
      isPrimary,
      isSmall,
      isSuccess,
      isRight,
      isWarning,
    } = this.props

    return (
      <div
        className={classnames(
          "file",
          className,
          {
            "has-name": hasName,
            "is-boxed": isBoxed,
            "is-fullwidth": isFullwidth,
            "is-right": isRight,
          },
          mainColorsPropsToClassnames({
            isDanger,
            isInfo,
            isPrimary,
            isSuccess,
            isWarning,
          }),
          sizePropsToClassnames({
            isLarge,
            isMedium,
            isSmall,
          }),
        )}
      >
        <label className="file-label">
          {children}
        </label>
      </div>
    )
  }
}
