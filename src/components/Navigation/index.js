import React, { Component } from 'react'
import './Navigation.scss'

class Navigation extends Component {

  constructor() {
    super()
    this.state = { isHidden: true }
  }

  toggleHidden () {
    this.setState({ isHidden: !this.state.isHidden })
  }

  render(){
    return(
      <div className="nav">
        <nav className="nav__bar">
          <a onClick={this.toggleHidden.bind(this)}>&#9776;</a>
        </nav>
        <ul className={ this.state.isHidden ? "nav__links nav__links--hide" : "nav__links navigation__links--show" }>
          <a className="close" onClick={this.toggleHidden.bind(this)}>&times;</a>
          <li>Home</li>
          <li>Summary</li>
          <li>Other</li>
          <li>Things</li>
          <li>Contact</li>
        </ul>
      </div>
    )
  }
}

export default Navigation
