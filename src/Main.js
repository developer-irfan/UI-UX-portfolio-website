import React from 'react'
import AboutSec from './components/Aboutme/AboutSec'
import HomeSec from './components/HomeSection/HomeSec'
import Navbar from './components/Navbar/Navbar'
import Portfolio from './components/Portfolio/Portfolio'
import Services from './components/Services/Services'
import Testomainails from './components/Testomainals/Testomainails'

function Main() {
  return (
    <div>
        <Navbar />
        <HomeSec />
        <AboutSec />
        <Services />
        <Portfolio />
        <Testomainails />
    </div>
  )
}

export default Main