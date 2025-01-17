import React from 'react'

function Steps() {
  return (
    <div className='steps-section flex-center'>
      <div className='headers flex-center'>
        <p className='header'>Here's how it flows</p>
        <p className='subheader'>
          Simple Payment Options for a Smooth Booking Experience
        </p>
      </div>

      <div className='steps-container flex-center'>
        <div className='step flex-center'>
          <p className='steps-header'>1</p>
          <div className='steps-texts flex-center'>
            <p className='steps-title'>Book your Kasama</p>
            <p className='steps-description'>Choose and proceed to checkout.</p>
          </div>
        </div>

        <div className='step flex-center'>
          <p className='steps-header'>2</p>
          <div className='steps-texts flex-center'>
            <p className='steps-title'>Select payment method</p>
            <p className='steps-description'>
              Follow instructions to complete payment.
            </p>
          </div>
        </div>

        <div className='step flex-center'>
          <p className='steps-header'>3</p>
          <div className='steps-texts flex-center'>
            <p className='steps-title'>Confirm Booking</p>
            <p className='steps-description'>
              Send proof and receive your confirmation.
            </p>
          </div>
        </div>
      </div>

      <div className='help-container flex-center'>
        <div className='help-content flex-center'>
          <p className='help-header'>Need Help?</p>
          <p className='help-text'>
            If you have any questions regarding payment, feel free to
            <a className='help-link' href='#'>
              contact us
            </a>
            for assistance.
          </p>
        </div>
        <p className='help-footer'>
          Your transaction details are secure with Rent-A-Kasama. We prioritize
          your privacy and ensure your information is protected with each
          payment.
        </p>
      </div>
    </div>
  )
}

export default Steps
