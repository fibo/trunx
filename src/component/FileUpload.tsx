import * as classnames from "classnames"
import * as React from "react"

import {
  IMainColorsProps,
  ISizeProps,
  mainColorsPropsToClassenames,
  sizePropsToClassenames,
} from "./modifiers"

interface IFileUploadProps extends IMainColorsProps,
                                   ISizeProps {
  hasName?: boolean
  isBoxed?: boolean
  isFullwidth?: boolean
  isRight?: boolean
}

interface IFileUploadInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

class FileUploadCta extends React.Component {
  render() {
    return (
      <span className="file-cta">{this.props.children}</span>
    )
  }
}

class FileUploadIcon extends React.Component {
  render() {
    return (
      <span className="file-icon">{this.props.children}</span>
    )
  }
}

class FileUploadInput extends React.Component<IFileUploadInputProps> {
  render() {
    return (
      <input className="file-input" type="file" {...this.props} />
    )
  }
}

class FileUploadLabel extends React.Component {
  render() {
    return (
      <span className="file-label">{this.props.children}</span>
    )
  }
}

class FileUploadName extends React.Component {
  render() {
    return (
      <span className="file-name">{this.props.children}</span>
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
      ...props
    } = this.props

    const className = classnames("file",
      {
        "has-name": hasName,
        "is-boxed": isBoxed,
        "is-fullwidth": isFullwidth,
        "is-right": isRight,
      },
      mainColorsPropsToClassenames({
        isDanger,
        isInfo,
        isPrimary,
        isSuccess,
        isWarning,
      }),
      sizePropsToClassenames({
        isLarge,
        isMedium,
        isSmall,
      }),
    )

    return (
      <div className={className}>
        <label className="file-label">
          {this.props.children}
        </label>
      </div>
    )
  }
}
