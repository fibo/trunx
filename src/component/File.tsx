import * as classnames from "classnames"
import * as React from "react"

interface IFileProps {
  hasName?: boolean
  isBoxed?: boolean
  isFullwidth?: boolean
  isRight?: boolean
}

class FileCta extends React.Component {
  render() {
    return (
      <span className="file-cta">{this.props.children}</span>
    )
  }
}

class FileIcon extends React.Component {
  render() {
    return (
      <span className="file-icon">{this.props.children}</span>
    )
  }
}

class FileLabel extends React.Component {
  render() {
    return (
      <label className="file-label">{this.props.children}</label>
    )
  }
}

export default class File extends React.Component<IFileProps> {
  static Cta = FileCta
  static Icon = FileIcon
  static Label = FileLabel

  render() {
    const {
      hasName,
      isBoxed,
      isFullwidth,
      isRight,
    } = this.props

    const className = classnames("file", {
      "has-name": hasName,
      "is-boxed": isBoxed,
      "is-fullwidth": isFullwidth,
      "is-right": isRight,
    })

    return (
      <div className={className}>
        {this.props.children}
      </div>
    )
  }
}
