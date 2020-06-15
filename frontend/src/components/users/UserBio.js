import React from "react";
import {Link}  from "react-router-dom"
import profileIcon from "../../images/profile-icon-300x300.png"


export default function UserBio({ user }) {
  let profilePicture = user.profile_pic ? user.profile_pic : profileIcon
  return (
    <>
      <h2>Bio</h2>
      <div>
        <img src={profilePicture} alt={user.name} />
      </div>
      
      <div>
        <Link to={"/" + user.name} className="bio">{user.full_name}</Link>
        <h4 className="username">@{user.username}</h4>
        
      </div>
    </>
  )

}