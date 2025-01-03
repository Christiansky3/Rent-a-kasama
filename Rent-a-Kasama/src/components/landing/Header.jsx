import React from 'react'
import HeaderCards from './HeaderCards'

function Header() {
  return (
    <header className='header-section'>
      <div className='hero-container flex-center'>
        <div className='header-container flex-center'>
          <h1 className='header'>
            discover genuine connections with Rent-A-Kasama
          </h1>
          <p className='sub-header'>
            Your trusted source for meaningful companionship experiences
          </p>
        </div>

        <div className='buttons-container flex-center'>
          <button>
            <a href='#'>explore companions</a>
          </button>
          <button>
            <a href='#'>become a kasama</a>
          </button>
        </div>
      </div>

      <HeaderCards />
    </header>
  )
}

export default Header
