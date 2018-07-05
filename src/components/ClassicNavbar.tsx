import * as React from 'react'

import * as Navbar from './Navbar'

interface Props {
  brand: () => React.Component
}

const initialState = {
  isActive: false
}

type State = Readonly<typeof initialState>

export default class ClassicNavbar extends React.Component<Props, State> {
  public readonly state: State = initialState

  public render() {
    const {
      brand,
    } = this.props

    const {
      isActive,
    } = this.state

    //  return (
    //    <Navbar>
    //      <Navbar.Brand>
    //        {brand()}
    //        <Navbar.Burger
    //          isActive={isActive}
    //          onClick={this.toggle}
    //        />
    //      </Navbar.Brand>
    //      <Navbar.Menu isActive={isActive}>
    //        {this.props.children}
    //      </Navbar.Menu>
    //    </Navbar>
    //  )

    return (
      <Navbar.Menu>
        ok
      </Navbar.Menu>
    )
  }

  private toggle = () => {
    this.setState({ isActive: !this.state.isActive })
  }

}
