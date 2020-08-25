import React, { useState, useEffect, useContext } from "react";
import { getUserById } from "../../util/getRequests";
import { AuthContext } from "../../providers/AuthContext";
import { useHistory } from "react-router-dom";
import "../../CSS/UserProfile.css"


export default function UserProfile() {

	const { currentUser } = useContext(AuthContext);
	let id = currentUser.id;
	const history = useHistory();
	console.log(currentUser);
  const [user, setUser] = useState({});
	const [firstName, setFirstName] = useState("");
	const getFirstName = async () => {
		const data = await getUserById(currentUser.id);
		setFirstName(data.full_name.split(" ")[0]);
	};
	useEffect(() => {
		getFirstName();
	}, []);

	const getUser = async () => {
		try {
			const res = await getUserById(id);
			setUser(res);
		} catch (error) {
			console.log(error);
		}
  };
  
  // const redirect = () => {
	// 	history.push(`/${firstName}/edit`)
  // };

  // const editingUser = () => {
  //   if (currentUser.id === user.id) {
  //     return<button onClick={redirect}>Edit Profile</button>
  //   } else {
  //    return null
  //   }

  // }

	useEffect(() => {
		getUser();
	}, []);

	return (
    <>
			<div className="userProfileDiv">
				<h2 className="greeting">Welcome {user.full_name}</h2>
				<div class="image-area">
				<div class="img-wrapper">
				<img
					src={user.profile_pic}
					alt="User_Profile_picture"
					className="userProfilePicture"/>
				</div>
				</div>
			</div>

			<div className="aboutParagraph">
				
				<p className="profileP">
					<span className="boldFont">Full Name: </span>
					{user.full_name}
				</p>
				<p className="profileP">
					<span className="boldFont">UserName: </span>
					{user.username}
				</p>
				<p className="profileP">
					<span className="boldFont">Email: </span> {user.email}
				</p>
				<p className="profileP">
					<span className="boldFont">Bio: </span>
					{user.bio}
        </p>
        {/* <div>
        {editingUser()}
        </div> */}
        </div>
		</>
	);
}
