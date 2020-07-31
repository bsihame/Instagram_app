import React, { useEffect, useState, useContext } from "react";
import NavBar from "../navbar_footer/NavBar";
import Footer from "../navbar_footer/Footer";
import { AuthContext } from "../../providers/AuthContext";
import { getUserById } from "../../util/getRequests";
import Users from "./Users";
import ProfilePic from "../upload/ProfilePic";
// import Posts from "../posts/Posts"
export default function User() {
	const { currentUser } = useContext(AuthContext);
  let id = currentUser.id
	const [loggedUser, setLoggedUser] = useState({});
	const getSingleUser = async () => {
		try {
			const res = await getUserById(id);
			setLoggedUser(res)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		getSingleUser()
	},[]);
	return (
		<>
			<NavBar />
			<Users/>
			<h1>This is user Profile</h1>
			<ProfilePic />
			{/* <img src={loggedUser.profile_pic} alt="User profile picture"/>
			<p>{loggedUser.username}</p> */}
			<Footer />
		</>
	);
}
