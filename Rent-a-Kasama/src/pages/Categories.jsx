import React from 'react'
import Nav from '../components/landing/Nav'
import Footer from '../components/landing/Footer'
import { Link } from 'react-router-dom'
import ArrowLinkIcon from '../assets/icons/landing-page/categories/send.svg'

function Categories() {
  return (
    <div className='categories-page'>
      <Nav />

      <div className='categories-container flex-center'>
        <div className='headers flex-center'>
          <div className='header'>
            <p className='subtitle'>Explore our</p>
            <h1 className='title'>Kasama Categories</h1>
          </div>
          <p className='description'>
            Find the perfect companion for any occasion or connection you're
            seeking
          </p>
        </div>

        <div className='grid flex-center'>
          <div className='card friend flex-center'>
            <Link to='' className='name flex-center'>
              Friend Companion
              <img src={ArrowLinkIcon} alt='arrow link icon' className='icon' />
            </Link>
          </div>
          <div className='card boyfriend flex-center'>
            <Link to='' className='name flex-center'>
              Boyfriend Companion
              <img src={ArrowLinkIcon} alt='arrow link icon' className='icon' />
            </Link>
          </div>
          <div className='card girlfriend flex-center'>
            <Link to='' className='name flex-center'>
              Girlfriend Companion
              <img src={ArrowLinkIcon} alt='arrow link icon' className='icon' />
            </Link>
          </div>
          <div className='card family flex-center'>
            <Link to='' className='name flex-center'>
              family-like Companion
              <img src={ArrowLinkIcon} alt='arrow link icon' className='icon' />
            </Link>
          </div>
          <div className='card elder flex-center'>
            <Link to='' className='name flex-center'>
              Elder Companion
              <img src={ArrowLinkIcon} alt='arrow link icon' className='icon' />
            </Link>
          </div>
          <div className='card event flex-center'>
            <Link to='' className='name flex-center'>
              Event Companion
              <img src={ArrowLinkIcon} alt='arrow link icon' className='icon' />
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Categories
