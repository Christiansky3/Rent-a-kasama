import React from 'react'
import PeopleIcon from '../../assets/icons/landing-page/header/people.svg'
import SecurityIcon from '../../assets/icons/landing-page/header/security-safe.svg'
import StarIcon from '../../assets/icons/landing-page/header/star.svg'

function HeaderCards() {
  return (
    <dl className='header-cards-container flex-center'>
      <div className='card flex-center'>
        <dt>
          <img src={PeopleIcon} alt='people icon' />
          10,000+ Users
        </dt>
        <dd>Join thriving community of companions</dd>
      </div>

      <div className='card flex-center'>
        <dt>
          <img src={StarIcon} alt='star icon' />
          4.8 Rating
        </dt>
        <dd>Rated by our satisfied users</dd>
      </div>

      <div className='card flex-center'>
        <dt>
          <img src={SecurityIcon} alt='security icon' />
          Privacy and Safety
        </dt>
        <dd>Your safety is our priority. Secure connections, privacy respected</dd>
      </div>
    </dl>
  )
}

export default HeaderCards
