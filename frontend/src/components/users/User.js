import React, { useEffect, useState, useContext } from "react";
import NavBar from "../navbar_footer/NavBar";
import Footer from "../navbar_footer/Footer";
import { AuthContext } from "../../providers/AuthContext";
import { getUserById } from "../../util/getRequests";
import Users from "./Users";
import Posts from "../posts/Posts";
import "../../CSS/User.css"

export default function User() {
	const { currentUser } = useContext(AuthContext);
	let id = currentUser.id;
	const [loggedUser, setLoggedUser] = useState({});

	const getSingleUser = async () => {
		try {
			const res = await getUserById(id);
			setLoggedUser(res);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getSingleUser();
	}, []);
	return (
		<>
			<NavBar />
		<div className="userContainer">
			<div className="rightDiv">
				<Users />
				<Posts />
			</div>
			<div  className="leftDiv">
				<img src={loggedUser.profile_pic} alt="User_Profile_picture" className="userProfile" />
				<p>
					{loggedUser.username}
				</p>
			<Footer />
			</div>
			</div>
			</>
	);
}
