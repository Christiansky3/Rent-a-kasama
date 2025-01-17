import React from 'react'
import FooterLogo from '../../assets/icons/landing-page/footer/logo-dark.svg'
import FacebookIcon from '../../assets/icons/landing-page/footer/facebook.svg'
import InstagramIcon from '../../assets/icons/landing-page/footer/instagram.svg'
import TwitterIcon from '../../assets/icons/landing-page/footer/twitter.svg'

function Footer() {
  return (
    <div className='footer-component flex-center'>
      <div className='intro flex-center'>
        <p className='tagline'>
          Explore, Connect, and Belong with Rent-A-Kasama
        </p>
        <div className='links flex-center'>
          <a href='#'>Explore Companions</a>
          <a href='#'>Become A Kasama</a>
        </div>
      </div>

      <hr className='divider' />

      <div className='main flex-center'>
        <img src={FooterLogo} alt='' className='logo' />

        <div className='section flex-center'>
          <p className='title'>Quick Links</p>
          <ul className='list flex-center'>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#'>Categories</a>
            </li>
            <li>
              <a href='#'>Testimonials</a>
            </li>
            <li>
              <a href='#'>FAQs</a>
            </li>
            <li>
              <a href='#'>Contact Us</a>
            </li>
          </ul>
        </div>

        <div className='section flex-center'>
          <p className='title'>Companions</p>
          <ul className='list flex-center'>
            <li>
              <a href='#'>Friend</a>
            </li>
            <li>
              <a href='#'>Boyfriend</a>
            </li>
            <li>
              <a href='#'>Girlfriend</a>
            </li>
            <li>
              <a href='#'>Tour Guide</a>
            </li>
            <li>
              <a href='#'>Elders</a>
            </li>
            <li>
              <a href='#'>Events</a>
            </li>
          </ul>
        </div>

        <div className='section social-media flex-center'>
          <p className='title'>Social Media</p>
          <ul className='list flex-center'>
            <li>
              <a href='#'>
                <img src={FacebookIcon} alt='' />
                <span className='link-text'>Facebook</span>
              </a>
            </li>
            <li>
              <a href='#'>
                <img src={InstagramIcon} alt='' />
                <span className='link-text'>Instagram</span>
              </a>
            </li>
            <li>
              <a href='#'>
                <img src={TwitterIcon} alt='' />
                <span className='link-text'>Twitter</span>
              </a>
            </li>
          </ul>
        </div>

        <div className='legal flex-center'>
          <p className='title'>Legal</p>

          <div className='item flex-center'>
            <p className='item-title'>Terms & Conditions</p>
            <p className='description'>
              Know the rules and guidelines for using Rent-A-Kasama.
            </p>
          </div>

          <div className='item flex-center'>
            <p className='item-title'>Privacy Policy</p>
            <p className='description'>
              Review our commitment to your privacy.
            </p>
          </div>

          <p className='copyright'>©2024 Rent-A-Kasama. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
