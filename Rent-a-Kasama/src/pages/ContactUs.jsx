import React from 'react'
import Nav from '../components/landing/Nav'
import Footer from '../components/landing/Footer'

function ContactUs() {
  return (
    <div className='contact-us'>
      <Nav />

      <div className='contact-container flex-center'>
        <div className='header flex-center'>
          <h1 className='title'>
            Get in Touch with <br />
            Rent-A-Kasama
          </h1>
          <p className='subtitle'>We're Here to Help - Let's Connect</p>
        </div>

        <div className='form-container flex-center'>
          <h2>Contact Us</h2>
          <form className='form flex-center' action=''>
            <div className='form-group flex-center'>
              <label className='label' htmlFor='name'>
                Fullname
              </label>
              <input
                id='name'
                className='input'
                type='text'
                placeholder='e.g. Juan Dela Cruz'
              />
            </div>
            <div className='form-group flex-center'>
              <label className='label' htmlFor='email'>
                Email
              </label>
              <input
                id='email'
                className='input'
                type='email'
                placeholder='e.g. juandelacruz@gmail.com'
              />
            </div>
            <div className='form-group flex-center'>
              <label className='label' htmlFor='phone'>
                Phone Number
              </label>
              <input
                id='phone'
                className='input'
                type='tel'
                placeholder='0912456789'
              />
            </div>
            <div className='form-group flex-center'>
              <label className='label' htmlFor='subject'>
                Subject
              </label>
              <input
                id='subject'
                className='input'
                type='text'
                placeholder='Subject'
              />
            </div>
            <div className='form-group flex-center'>
              <label className='label' htmlFor='message'>
                Message
              </label>
              <textarea
                id='message'
                className='textarea'
                placeholder='Your message'
              ></textarea>
            </div>

            <button className='button' type='submit'>
              Submit
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ContactUs
