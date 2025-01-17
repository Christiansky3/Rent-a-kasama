import React from 'react'
import Nav from '../components/landing/Nav.jsx'
import Header from '../components/landing/Header.jsx'
import About from '../components/landing/About.jsx'
import Categories from '../components/landing/Categories.jsx'
import Testimonials from '../components/landing/Testimonials.jsx'
import FAQ from '../components/landing/FAQ.jsx'
import Payments from '../components/landing/Payments.jsx'
import Steps from '../components/landing/Steps.jsx'
import Footer from '../components/landing/Footer.jsx'

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
