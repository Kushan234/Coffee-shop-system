import React from 'react'
import Hero from '../Components/Hero/Hero'
import Services from '../Components/Services/Services'
import AboutBanner from '../Components/AboutBanner/AboutBanner'

const Layout = () => {
  return (
    <div className="bg-background">
    <Hero />
    <Services />
    <AboutBanner />
    </div>
  )
}

export default Layout