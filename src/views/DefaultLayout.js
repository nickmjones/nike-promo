import React, { Component } from 'react'
import Routes from '../Routes'

import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

class DefaultLayout extends Component {
  render() {
    return(
      <div>
        <Navigation />
        <Hero/>
        <div className="wrapper">
          <Routes />
        </div>
        <Footer />
      </div>
    )
  }
}

export default DefaultLayout
