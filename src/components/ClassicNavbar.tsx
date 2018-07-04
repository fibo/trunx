import * as React from 'react'

export default class ClassicNavbar extends React.Component {
  // TODO state isActive and open/close handling

  public render() {
    const {
      brand,
    } = this.props

    return (
      <Navbar>
        <Navbar.Brand>
          {brand()}
          <Navbar.Burger />
        </Navbar.Brand>
        <Navbar.Menu>
          {this.props.children}
        </Navbar.Menu>
      </Navbar>
    )
  }
}
