import React, { Component } from 'react'
import Routes from '../Routes'

import Navigation from '../components/Navigation'

class DefaultLayout extends Component {
  render() {
    return(
      <div>
        <Navigation/>
        <div className="wrapper">
          <Routes />
        </div>
      </div>
    )
  }
}

export default DefaultLayout
