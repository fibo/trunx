import * as React from 'react'

import Navbar from './Navbar'

interface Props {
  brand?: () => React.Component
  isFixedTop?: boolean
}

const initialState = {
  isActive: false
}

type State = Readonly<typeof initialState>

export default class ClassicNavbar extends React.Component<Props, State> {
  readonly state: State = initialState

  render() {
    const {
      brand,
      isFixedTop,
    } = this.props

    const {
      isActive,
    } = this.state

    return (
      <Navbar aria-label="main navigation" isFixedTop={isFixedTop}>
        <Navbar.Brand>
          {brand && brand()}
          <Navbar.Burger
            isActive={isActive}
            onClick={this.toggle}
          />
        </Navbar.Brand>
        <Navbar.Menu isActive={isActive}>
          {this.props.children}
        </Navbar.Menu>
      </Navbar>
    )
  }

  private toggle = () => {
    this.setState({ isActive: !this.state.isActive })
  }

}
