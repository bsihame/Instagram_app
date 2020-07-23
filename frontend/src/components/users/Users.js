import React, { useEffect, useState, useContext } from "react";
import NavBar from "../navbar_footer/NavBar";
import Footer from "../navbar_footer/Footer";
import { AuthContext } from "../../providers/AuthContext";
import { getAllUsers } from "../../util/getRequests";


export default function Users() {
	
	const [users, setUsers] = useState({});
	const getUsers = async () => {
		try {
			const res = await getAllUsers(id);
			debugger
			setUsers(res)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		getUsers()
	},[]);
	return (
		<>
			<NavBar />
			<h1>This is user Profile</h1>
			<img src={users.profile_pic} alt="User profile picture"/>
			<p>{users.username}</p>
      {/* <Posts/> */}
			<Footer />
		</>
	);
}