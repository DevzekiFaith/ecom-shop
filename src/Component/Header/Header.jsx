import React from 'react'

const Header = () => {
  return (
    <div>
      <div>
        <img src={headerImage} placeholder="blur" alt="Profile Picture" />
      </div>
      <div className="bg-blue-300 flex gap-[1rem] justify-end items-align  py-2 px-4 text-white">
        <a href="/">Home</a>
        <a href="product">Product</a>
        <a href="gallery">Gallery</a>
        <a href="contact">Contact</a>
      </div>
    </div>
  )
}

export default Header
