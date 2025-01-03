import React from 'react'
import RightArrow from '../../assets/icons/landing-page/about/arrow-right.svg'

function About() {
  return (
    <div className='about-section'>
      <div className='header flex-center'>
        <div className='intro flex-center'>
          <p className='title'>About Us</p>

          <div className='heading flex-center'>
            <h2 className='main-heading'>
              Discover the Header of Rent-A-Kasama
            </h2>

            <p className='subheading'>
              More than just companionship - a true connection
            </p>
          </div>
        </div>

        <div className='description flex-center'>
          <p className='text'>
            Rent-A-Kasama was founded with a simple vision: to bridge hearts and
            foster meaningful companionship rooted in Filipino values of warmth,
            kindness, and respect. We believe everyone deserves a friend, a
            confidant, or a family-like companion. Our platform is dedicated to
            providing an enriching experience, connecting you with individuals
            who offer genuine companionship, memorable conversations, and a deep
            sense of understanding.
          </p>
          <a href='#' className='about-link flex-center'>
            Read more <img src={RightArrow} alt='right arrow icon' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default About
