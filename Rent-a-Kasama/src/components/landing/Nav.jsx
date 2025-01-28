import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LogoLight from '../../assets/icons/landing-page/nav/logo-light.svg'
import MenuBar from '../../assets/icons/landing-page/nav/menu.svg'
import CloseMenu from '../../assets/icons/landing-page/nav/close-circle.svg'

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className='nav flex-center'>
      <div className='nav-container'>
        <div className='logo-container'>
          <Link to='/'>
            <img src={LogoLight} alt='Rent A Kasama Logo' />
          </Link>
        </div>

        <div className='menu-container flex-contaner'>
          <div
            className={`links-container flex-center ${menuOpen ? 'show' : ''}`}
          >
            <button className='close-menu-btn' onClick={toggleMenu}>
              <img src={CloseMenu} alt='close-icon' />
            </button>

            <ul className='links flex-center'>
              <div className='page-links-container flex-center'>
                <li>
                  <Link to={'/'}>Home</Link>
                </li>
                <li>
                  <a href={'/about'}>About Us</a>
                </li>
                <li>
                  <Link to={'/categories'}>Categories</Link>
                </li>
                <li>
                  <a href='#testimonialSection'>Testimonials</a>
                </li>
                <li>
                  <a href='#faqsSection'>FAQs</a>
                </li>
                <li>
                  <Link to={'/contact-us'}>Contact Us</Link>
                </li>
              </div>

              <hr />

              <div className='account-links-container flex-center'>
                <li>
                  <Link to={'/login'} className='flex-center'>
                    Login
                  </Link>
                </li>
                <li className='signup-btn flex-center'>
                  <Link to={'/signup'} className='flex-center'>
                    Signup
                  </Link>
                </li>
              </div>
            </ul>
          </div>
          <button onClick={toggleMenu} className='menu-toggle-button'>
            <img src={MenuBar} alt='menu-icon' />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Nav
