import React from 'react'
import RightArrow from '../../assets/icons/landing-page/about/arrow-right.svg'
import CategoryImageIllustration from '../../assets/images/landing-page/categories/image-1.jpg'
import { Link } from 'react-router-dom'

function Categories() {
  return (
    <div className='categories-section'>
      <div className='header flex-center'>
        <div className='intro flex-center'>
          <p className='title'>Categories</p>

          <div className='heading flex-center'>
            <h2 className='main-heading'>Find your perfect KASAMA</h2>

            <p className='subheading'>
              Choose from a wide range of companions tailored to meet your
              unique needs and experiences.
            </p>

            <Link to='/categories' className='categories-link flex-center'>
              See kasama categories
              <img src={RightArrow} alt='right arrow icon' />
            </Link>
          </div>
        </div>

        <div className='image flex-center'>
          <img
            src={CategoryImageIllustration}
            alt='kasama image illustration'
          />
        </div>
      </div>
    </div>
  )
}

export default Categories
