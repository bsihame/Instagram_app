import React, { useState, useEffect, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getUserById } from "../../util/getRequests";
// import axios from "axios";
// import { apiURL } from "../../util/apiURL"
// import { Col, Row, Image, Navbar } from "react-bootstrap";
import { AuthContext } from "../../providers/AuthContext";
import UserPost from "../posts/UserPost";

export default function UserProfile() {
  const { currentUser } = useContext(AuthContext);
  let id = currentUser.id;
  const [user, setUser] = useState({});
  const getUser = async () => {
    try {
      const res = await getUserById(id)
      setUser(res)
    } catch (error) {
      console.log(error)
      }
  }
  useEffect(() => {
    getUser()
  }, [])
  
	return (
		<>
      <div>
        <h2>Welcome {user.full_name}</h2>
		
           <img src={user.profile_pic} alt="User_Profile_picture" />
        </div>
      
      <div className="aboutParagraph">
                <p><span className="boldFont">Full Name: </span>{user.full_name}</p>
                <p><span className="boldFont">UserName: </span>{user.username}</p>
                <p><span className="boldFont">Email: </span> {user.email}</p>
                <p><span className="boldFont">Bio: </span>{user.bio}</p>
      </div>
      <UserPost />
		</>
  );


}

