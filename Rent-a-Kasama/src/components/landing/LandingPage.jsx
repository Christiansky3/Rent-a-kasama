import React from 'react'
import Nav from './Nav.jsx'
import Header from './Header.jsx'
import About from './About.jsx'
import Categories from './Categories.jsx'
import Testimonials from './Testimonials.jsx'
import FAQ from './FAQ.jsx'
import Payments from './Payments.jsx'
import Steps from './Steps.jsx'
import Footer from './Footer.jsx'

function LandingPage() {
  return (
    <div className='landing--page'>
      <Nav />
      <Header />
      <About />
      <Categories />
      <Testimonials />
      <FAQ />
      <Payments />
      <Steps />
      <Footer />
    </div>
  )
}

export default LandingPage
