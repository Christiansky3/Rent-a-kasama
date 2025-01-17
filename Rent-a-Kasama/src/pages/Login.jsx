import React from 'react'
import Nav from '../components/landing/Nav'
import Footer from '../components/landing/Footer'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>
      <Nav />

      <div className='login-container flex-center'>
        <div className='header flex-center'>
          <h1 className='title'>
            Welcome Back to <br />
            Rent-A-Kasama
          </h1>
          <p className='subtitle'>
            Log in to connect, explore, and experience companionship like never
            before.
          </p>
        </div>

        <div className='form-container flex-center'>
          <h2>Login</h2>
          <form className='form flex-center' action=''>
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
              <label className='label' htmlFor='password'>
                Password
              </label>
              <input id='password' className='input' type='password' />
            </div>

            <div className='checkbox-wrapper flex-center'>
              <input type='checkbox' name='rememberuser' id='rememberuser' />
              <span className='checkbox-icon'></span>
              <label htmlFor='rememberuser'>Remember Me</label>
            </div>

            <div className='auth-actions flex-center'>
              <Link to='/' className='forgot-password'>Forgot Password?</Link>

              <Link to='/signup' className='signup-link'>Dont have an account yet? Sign up</Link>

              <button className='button' type='submit'>
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Login
