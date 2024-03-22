import React from 'react'
import Header from './Header/Header'
import Footer from "./Footer/Footer"
import HeroPage from './HeroPage/HeroPage'
import Profile from './Profile/Profile'
import Profiles from "./../Profiles"
import { useState } from 'react'


const Render = () => {

  const [profile, setProfile] = useState(false);

  const openProfile = () => {
    setProfile(true);
    alert("Open Profile Card");
  };

  const closeProfile = () => {
    setProfile(false);
    alert("Close Profile Card");
  };

  return (
    <div>
      {/* <h1>This is the Render page</h1> */}
      <Header />
      <HeroPage />
      <div>
        {!profile ? (<div className='xl:grid grid-cols-3 sm:grid-flow-row'>
          {Profiles.map((items) => (
            <Profile
              key={items.id}
              firstName={items.firstName}
              lastName={items.lastName}
              profileImage={items.profileImage}
              profession={items.profession}
            />
          ))}
        </div>)
          :
          (<div className='ml-[2rem]'><h1 className='text-blue-500'>Create a new Profile Card</h1>
          </div>)}

      </div>
      <div className='flex ml-[2rem] gap-4 border w-[12rem] mb-3 p-3 bg-slate-500 rounded-2xl'>
        <button className='border bg-blue-500 p-2 w-[6rem] rounded-full shadow-2xl' onClick={closeProfile}>Show</button>
        <button className='border bg-green-500 p-2 w-[6rem] rounded-full shadow-2xl' onClick={openProfile} >Hide</button>
      </div>
      <Footer />
    </div>
  )
}

export default Render
