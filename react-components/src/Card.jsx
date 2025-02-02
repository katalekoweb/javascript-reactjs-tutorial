import React from 'react'
import profilePic from './assets/profile.jpg'

const Card = () => {
  return (
    <div className='card'>
      <img className='card-image' src={profilePic} alt="" />
      <h1 className='card-title'>Kataleko Web</h1>
      <p className='card-text'>
        I develop software for companies and particulars
      </p>
    </div>
  )
}

export default Card
