import React from 'react'
import Image01 from "./../../assets/Images/ProfilePic.png"


const Header = () => {
  return (

    <div className="">

      <div className=' fixed  w-full h-[4.8rem] p-[4px] flex justify-end items-align gap-4 bg-transparent border-y-1 z-50 '>
        <div className='w-[64px]  h-[64px] cursor-pointer'>
          <img className='w-[100%] h-[100%] rounded-[50%] ml-4 cursor-pointer' src={Image01} placeholder="blur" alt="Profile Picture" />
        </div>

        <div className=" flex gap-[1rem] justify-end items-align  py-2 px-4 text-gray-500 z-50 mt-3">
          <a href="/">Home</a>
          <a href="product">Product</a>
          <a href="gallery">Gallery</a>
          <a href="contact">Contact</a>
        </div>
      </div>
    
    </div>
  )
}

export default Header
