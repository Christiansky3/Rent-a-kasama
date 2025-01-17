import React from 'react'
import Nav from '../components/landing/Nav'
import Footer from '../components/landing/Footer'
import AboutHeroImage from '../assets/images/landing-page/about-us/aboutus-hero.jpg'

function About() {
  return (
    <div className='aboutus-page'>
      <Nav />

      <div className='aboutus-container'>
        <div className='hero flex-center'>
          <div className='hero-text flex-center'>
            <div className='hero-title flex-center'>
              <p className='subheading'>about us</p>
              <h1 className='heading'>your trusted companion connection</h1>
            </div>

            <p className='description'>
              More than a service, we’re a community of meaningful connections.
            </p>
          </div>

          <img className='hero-image' src={AboutHeroImage} alt='' />
        </div>

        <div className='story flex-center'>
          <h2 className='title'>our story</h2>
          <p className='text'>
            Rent-A-Kasama was created with a simple yet profound mission: to
            bridge the gap between people looking for companionship and those
            offering it in a safe, flexible, and welcoming environment. In a
            world that’s more connected than ever, we believe in the power of
            real connections—connections that bring joy, understanding, and
            warmth.
          </p>
        </div>

        <div className='services flex-center'>
          <h3 className='title'>What do we do?</h3>
          <p className='text'>
            We connect you with <span className='highlight'>"Kasamas"</span> —
            friends, guides, companions, and supportive peers who can join you
            in experiences that matter. From friendly outings to guided
            explorations, from lively event partners to elder companions who
            bring warmth and wisdom, Rent-A-Kasama is here to make sure you find
            the right fit for every moment.
          </p>
        </div>

        <div className='benefits flex-center'>
          <h4 className='title'>why choose us?</h4>

          <div className='grid flex-center'>
            <div className='benefit flex-center'>
              <p className='heading'>Diverse Companionship</p>
              <p className='text'>
                From friends to family-like figures, we provide companions to
                suit every need.
              </p>
            </div>
            <div className='benefit flex-center'>
              <p className='heading'>Safety and Security</p>
              <p className='text'>
                Every Kasama is background-checked, ensuring a secure
                environment.
              </p>
            </div>
            <div className='benefit flex-center'>
              <p className='heading'>Personalized Experiences</p>
              <p className='text'>
                Whether it’s a cultural tour or a weekend event, each Kasama
                brings their unique touch, making each encounter memorable.
              </p>
            </div>
            <div className='benefit flex-center'>
              <p className='heading'>Easy and Flexible Booking</p>
              <p className='text'>
                Browse, select, and book with ease on our platform for a
                seamless experience.
              </p>
            </div>
          </div>
        </div>

        <div className='vision-promise flex-center'>
          <div className='vision flex-center'>
            <h5 className='title'>our vision</h5>
            <p className='text'>
              We strive to make companionship accessible, meaningful, and
              enriching. We foster a community where friendship, joy, and shared
              experiences are celebrated.
            </p>
          </div>
          <div className='promise flex-center'>
            <h6 className='title'>our promise</h6>
            <p className='text'>
              Every experience at Rent-A-Kasama is built on respect, trust, and
              authenticity. We are dedicated to providing safe, fulfilling
              companionship for everyone.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default About
