import React from 'react'
import HeroPageImage from "./../../assets/Images/ProfilePic.png"
import Button from '../ReusableButton/Button'
// import Image002 from "../../assets/Images/cosmetics";

const HeroPage = () => {
  return (
    <>
      <div className='pt-[5.2rem] relative '>
        <div className='xl:flex xl:flex-row sm:flex-col sm:ml-3 xl:ml-0'>
          <div className='xl:w-[800px] xl:h-[500px] px-[2rem]'>
            <img className='xl:w-[100%] h-[500px]' src={HeroPageImage} alt="Hero-Page-Image" />
          </div>
          <div className='xl:w-[400px] xl:p-4 mt-[6rem] ml-[2rem] '>
            <h1>
              Et aute quis sint sit nostrud aliquip labore. Cillum exercitation laboris proident nulla laboris nisi ipsum. Dolor et esse laborum mollit exercitation ad incididunt quis nisi sit nulla tempor. Sint culpa velit eiusmod elit non est officia dolore.
            </h1>
          </div>
          <div>

          </div>
        </div>

        <div>
          <Button />
        </div>

        <div className='ml-[2rem] w-[400px] mt-[3rem]'>
          <h1>
            Et aute quis sint sit nostrud aliquip labore. Cillum exercitation laboris proident nulla laboris nisi ipsum. Dolor et esse laborum mollit exercitation ad incididunt quis nisi sit nulla tempor. Sint culpa velit eiusmod elit non est officia dolore.
          </h1>

        </div>
      </div>
    </>
  )
}

export default HeroPage
