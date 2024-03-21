import React from 'react'
import HeroPageImage from "./../../assets/Images/ProfilePic.png"

const HeroPage = () => {
  return (
    <>
      <div className='pt-[5.2rem] relative '>

        <div className='xl:w-full h-screen flex  justify-center items-start px-[2rem]'>
          <img className='xl:w-full h-screen' src={HeroPageImage} alt="Hero-Page-Image" />
        </div>
      </div>
    </>
  )
}

export default HeroPage
