import React, { useState } from 'react'
import LogoLight from '../../assets/icons/landing-page/nav/logo-light.svg'
import MenuBar from '../../assets/icons/landing-page/nav/menu.svg'
import CloseMenu from '../../assets/icons/landing-page/nav/close-circle.svg'

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className='nav'>
      <div className='logo-container'>
        <img src={LogoLight} alt='Rent A Kasama Logo' />
      </div>

      <div className='menu-container flex-contaner'>
        <div className={`links-container flex-center ${menuOpen? 'show' : ''}`}>
          <button className='close-menu-btn' onClick={toggleMenu}>
            <img src={CloseMenu} alt='close-icon' />
          </button>

          <ul className='links flex-center'>
            <div className='page-links-container flex-center'>
              <li>
                <a href='#'>Home</a>
              </li>
              <li>
                <a href='#'>About Us</a>
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
            </div>

            <hr />

            <div className='account-links-container flex-center'>
              <li>
                <a href='#' className='flex-center'>
                  Login
                </a>
              </li>
              <li className='signup-btn flex-center'>
                <a href='#' className='flex-center'>
                  Signup
                </a>
              </li>
            </div>
          </ul>
        </div>
        <button onClick={toggleMenu}>
          <img src={MenuBar} alt='menu-icon' />
        </button>
      </div>
    </nav>
  )
}

export default Nav
