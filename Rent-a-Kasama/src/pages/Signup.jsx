import React from 'react'
import Nav from '../components/landing/Nav'
import Footer from '../components/landing/Footer'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div>
      <Nav />

      <div className='signup-container flex-center'>
        <div className='header flex-center'>
          <div className='header-container'>
            <h1 className='title'>Join the Rent-A-Kasama Community!</h1>
            <p className='subtitle'>
              Whether you're here to find a companion or become one, let's start
              this journey together.
            </p>
          </div>

          <div className='sections-container flex-center'>
            <div className='kasamas-section flex-center'>
              <p className='span-title'>For Kasamas</p>
              <p className='description'>
                Share your time, connect with others, and become a trusted
                Kasama. Sign up to be part of something meaningful.
              </p>
            </div>
            <div className='clients-section flex-center'>
              <p className='span-title'>For Clients</p>
              <p className='description'>
                Find the perfect companion for every occasion. Sign up to start
                your journey.
              </p>
            </div>
          </div>
        </div>

        <div className='form-container flex-center'>
          <h2>Create an account</h2>
          <form className='form flex-center' action=''>
            <div className='basic-fields flex-center'>
              <h3>Basic Fields</h3>
              <div className='form-group flex-center'>
                <label className='label' htmlFor='firstname'>
                  First Name
                </label>
                <input
                  id='firstname'
                  className='input'
                  type='firstname'
                  placeholder='e.g. Juan'
                />
              </div>

              <div className='form-group flex-center'>
                <label className='label' htmlFor='middlename'>
                  Middle Name
                </label>
                <input
                  id='middlename'
                  className='input'
                  type='middlename'
                  placeholder='e.g. Rizal'
                />
              </div>

              <div className='form-group flex-center'>
                <label className='label' htmlFor='lastname'>
                  Last Name
                </label>
                <input
                  id='lastname'
                  className='input'
                  type='lastname'
                  placeholder='e.g. Dela Cruz'
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
                <label className='label' htmlFor='phonenumber'>
                  Phone Number
                </label>
                <input
                  id='phonenumber'
                  className='input'
                  type='tel'
                  placeholder='e.g. 0912456789'
                />
              </div>

              <div className='form-group flex-center'>
                <label className='label' htmlFor='password'>
                  Password
                </label>
                <input id='password' className='input' type='password' />
              </div>

              <div className='form-group flex-center'>
                <label className='label' htmlFor='confirmpassword'>
                  Confirm Password
                </label>
                <input
                  id='confirmpassword'
                  className='input'
                  type='password'
                  placeholder='e.g. Juan'
                />
              </div>
            </div>

            <div className='profile-details flex-center'>
              <h4>Profile Preferences and Details</h4>

              <div className='form-group flex-center'>
                <label className='label' htmlFor='birthdate'>
                  Date of Birth
                </label>
                <input
                  id='birthdate'
                  className='input'
                  type='date'
                  placeholder='e.g. Juan'
                />
              </div>

              <div className='form-group flex-center'>
                <p className='label-text'>Gender</p>
                <div className='checkbox-container flex-center'>
                  <div className='checkbox'>
                    <input
                      id='gender-male'
                      name='gender'
                      className='input'
                      type='radio'
                    />
                    <label className='label' htmlFor='gender-male'>
                      Male
                    </label>
                  </div>

                  <div className='checkbox'>
                    <input
                      id='gender-female'
                      name='gender'
                      className='input'
                      type='radio'
                    />
                    <label className='label' htmlFor='gender-female'>
                      Female
                    </label>
                  </div>

                  <div className='checkbox'>
                    <input
                      id='gender-none'
                      name='gender'
                      className='input'
                      type='radio'
                    />
                    <label className='label' htmlFor='gender-none'>
                      Prefer not to say
                    </label>
                  </div>
                </div>
              </div>

              <div className='form-group flex-center'>
                <p className='label-text'>Sign Up as</p>
                <div className='checkbox-container flex-center'>
                  <div className='checkbox'>
                    <input
                      id='usertype-client'
                      name='usertype'
                      className='input'
                      type='radio'
                    />
                    <label className='label' htmlFor='usertype-client'>
                      Client
                    </label>
                  </div>

                  <div className='checkbox'>
                    <input
                      id='usertype-kasama'
                      name='usertype'
                      className='input'
                      type='radio'
                    />
                    <label className='label' htmlFor='usertype-kasama'>
                      Kasama
                    </label>
                  </div>
                </div>
              </div>

              <div className='checkbox-wrapper flex-center'>
                <input type='checkbox' name='tnc' id='tnc' />
                <span className='checkbox-icon'></span>
                <label htmlFor='tnc'>I agree to the Terms and Conditions</label>
              </div>

              <Link to='/login' className='login-link'>
                Already have an account? Login
              </Link>

              <button className='button' type='submit'>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Signup
