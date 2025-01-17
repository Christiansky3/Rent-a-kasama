import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import AboutPage from './pages/About'
import CategoryPage from './pages/Categories'
import ContactUsPage from './pages/ContactUs'
import LoginPage from './pages/Login'
import SignupPage from './pages/Signup'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/categories' element={<CategoryPage />} />
        <Route path='/contact-us' element={<ContactUsPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
      </Routes>
    </Router>
  )
}

export default App
