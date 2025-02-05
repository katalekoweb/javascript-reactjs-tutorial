import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'
import Footer from './Footer'

function App () {
  return (
    <div className='page'>
      <div className='header'>

        <div>
          <h1>Benguela Exchange</h1>

          <div>
            <a href=''>About</a>
            <a href=''>Services</a>
            <a href=''>Contact</a>
          </div>
        </div>

      </div>

      <div className="main">
        <Home />
      </div>

      <Footer />
    </div>
  )
}

export default App
