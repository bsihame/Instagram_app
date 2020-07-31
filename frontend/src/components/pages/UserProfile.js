// import React, { useState, useEffect } from "react";
// import { useParams, useHistory } from "react-router-dom";
// import { getUserById } from "../../util/getRequests";
// import axios from "axios";
// import { apiURL } from "../../util/apiURL"
// import { Col, Row, Image, Navbar } from "react-bootstrap";
// import profileIcon from "../../images/profile-icon-300x300.png"
// import ProfilePic from "../upload/ProfilePic";
// export default function UserProfile() {
//   const history = useHistory();
//   const { uid } = useParams();
  
//   console.log(uid)
//   const [user, setUser] = useState({});
//   const getProfile = async () => {
//     try {
//       const id = { uid }
//       const data = await getUserById(id)
//       debugger
//       setUser(data.user)
//     } catch (error) {
//       console.log(error)
//     }
//   }
//   useEffect(() => {
//     getProfile()

//   },[])
  
  
// 	return (
// 		<>
//       <Navbar />
//       <div>
// 			<h2>Picture</h2>
		
//            <ProfilePic/>
//         </div>
      
//       <div className="aboutParagraph">
//                 <p><span className="boldFont">Full Name: </span>{user.full_name}</p>
//                 <p><span className="boldFont">Country Of Origin: </span> {user.country_of_origin}</p>
//                 <p><span className="boldFont">Age: </span>{user.age} years old</p>
//                 <p><span className="boldFont">Language: </span>{user.language}</p>
//         </div>
// 		</>
// 	);
// }

