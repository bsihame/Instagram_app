import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom"
import NavBar from "../navbar_footer/NavBar";
import Footer from "../navbar_footer/Footer";
import { AuthContext } from "../../providers/AuthContext";
import { getUserById } from "../../util/getRequests";
// import Posts from "../posts/Posts"
export default function User() {
	const { id } = useParams();
	console.log(id);
	const { currentUser } = useContext(AuthContext);
	console.log(currentUser)
	const [loggedUser, setLoggedUser] = useState({});
	const getSingleUser = async () => {
		try {
			const data = await getUserById(id);
			debugger
			setLoggedUser(data.user)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		getSingleUser()
	}, []);
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
