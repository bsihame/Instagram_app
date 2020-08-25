import React, { useState, useEffect, useContext } from "react";
import { getUserById } from "../../util/getRequests";
import { AuthContext } from "../../providers/AuthContext";
import { useHistory } from "react-router-dom";


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
      
			<div>
				<h2>Welcome {user.full_name}</h2>

				<img
					src={user.profile_pic}
					alt="User_Profile_picture"
					className="userProfile"
				/>
			</div>

			<div className="aboutParagraph">
				<p>
					<span className="boldFont">Full Name: </span>
					{user.full_name}
				</p>
				<p>
					<span className="boldFont">UserName: </span>
					{user.username}
				</p>
				<p>
					<span className="boldFont">Email: </span> {user.email}
				</p>
				<p>
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
