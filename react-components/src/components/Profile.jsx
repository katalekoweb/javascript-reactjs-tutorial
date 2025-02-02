import React from 'react'
import image from "../assets/profile.jpg"

const Profile = () => {

    const handleClick = (e) => e.target.style.display = 'none';
    
  return (
    <div>
      <img src={image} onClick={(e) => handleClick(e)} alt="" />
    </div>
  )
}

export default Profile
