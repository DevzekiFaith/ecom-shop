import PropTypes from "prop-types"
import React from 'react'
import { useState } from 'react'
import Profiles from "../../Profiles"
import Image01 from "./../../assets/Images/ProfilePic.png"
import Image02 from "./../../assets/Images/pexels-george-dolgikh-1310522.jpg"

const Profile = ({ firstName, lastName, profileImage, profession }) => {

  const [profile, setProfile] = useState(false);

  const openProfile = () => {
    setProfile(true);
    alert("Open Profile Card")
  };
  
  const closeProfile = () => {
    setProfile(false);
    alert("Close Profile Card")
  };

  const handleClick = () => {
  }


return (
    <div>
      <div className="bg-slate-300 w-[18rem] mb-[2rem] m-[2rem]">
        <div>
          <img src={Image01} placeholder="blur" alt="Profile Image" />
        </div>
        <div className="ml-[2rem] mt-[2rem] mb-[1.5rem]">
          <div className=" w-[6rem] h-[6rem] rounded-full mb-[2rem] flex justify-center items-center">
            <h1> {profileImage || <img className="rounded-full w-[6rem] h-[6rem] " src={Image02} placeholder="blur" alt="profile Image" />}</h1>
          </div>
          <h1>FirstName: {firstName || "first_Name"}</h1>
          <h1>LastName: {lastName || "Last_Name"}</h1>
          <h1>Profession: {profession || "Add_Your_ profession"} </h1>
        </div>
      </div>
    
    </div>
  )
}

Profile.propTypes = {
  FirstName: PropTypes.string,
  ImageUrl: PropTypes.string,
  LastName: PropTypes.string,
  Profession: PropTypes.string
}

export default Profile
