import React from 'react'
import AboutSec from './components/Aboutme/AboutSec'
import HomeSec from './components/HomeSection/HomeSec'
import Navbar from './components/Navbar/Navbar'
import Services from './components/Services/Services'

function Main() {
  return (
    <div>
        <Navbar />
        <HomeSec />
        <AboutSec />
        <Services />
    </div>
  )
}

export default Main