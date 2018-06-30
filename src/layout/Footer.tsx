import * as React from 'react'

export default class Footer extends React.Component {
  public render() {
    return (
      <footer className="footer">{this.props.children}</footer>
    )
  }
}
