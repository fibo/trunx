import * as React from "react"

import { SizeProps } from "./modifiers"
import { renderElement } from './renderElement'

interface DeleteProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, SizeProps { }

export default class Delete extends React.Component<DeleteProps> {
  render() {
    return renderElement('button', this.props, bulmaClassName.delete)
  }
}
