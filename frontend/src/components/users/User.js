import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom"
import NavBar from "../navbar_footer/NavBar";
import Footer from "../navbar_footer/Footer";
import { AuthContext } from "../../providers/AuthContext";
import { getUserById } from "../../util/getRequests";
// import Posts from "../posts/Posts"
export default function User() {
	const { currentUser } = useContext(AuthContext);
   let id = currentUser.id
	const [loggedUser, setLoggedUser] = useState({});
	const getSingleUser = async () => {
		try {
			const res = await getUserById(id);
			debugger
			setLoggedUser(res.user)
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
			<h1>This is user Profile</h1>
			<p>{loggedUser.full_name}</p>
      {/* <Posts/> */}
			<Footer />
		</>
	);
}
