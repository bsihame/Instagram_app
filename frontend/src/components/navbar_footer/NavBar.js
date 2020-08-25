import React, { useState, useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../../CSS/NavBar.css";
import Logout from "../login_signup/Logout";
import { AuthContext } from "../../providers/AuthContext";
import { getUserById } from "../../util/getRequests";

export default function NavBar() {
	const { currentUser } = useContext(AuthContext);
	console.log(currentUser);
	const [firstName, setFirstName] = useState("");
	const getFirstName = async () => {
		const data = await getUserById(currentUser.id);
		setFirstName(data.full_name.split(" ")[0]);
	};
	useEffect(() => {
		getFirstName();
	}, []);

	return (
		<>
			<nav className="navbarContainer">
				<div className="title">
					<h2 className="inst">Instagram</h2>
				</div>
				<div className="right">
					<div className="inputDiv">
						<input placeholder="Search" />
					</div>
					<div className="navLinkDiv">
						<NavLink className="home" exact to={"/user"}>
							homeIcon
						</NavLink>
						<NavLink className="directMessage" to={"/direct/inbox/"}>
							message
						</NavLink>
						<NavLink className="explore" to={"/explore"}>
							explore
						</NavLink>
						<NavLink className="heart" to={"/activity"}>
							heart
						</NavLink>
						<NavLink className="profile" to={"/userProfile"}>
							profilePic
						</NavLink>
						<a
							className="nav-link dropdown-toggle"
							data-toggle="dropdown"
							// href="/trips"
							role="button"
							aria-expanded="false"
						>
							Hi, {firstName}
						</a>
						<div className="dropdown-menu">
							<a className="dropdown-item" href={`/${firstName}`}>
								PROFILE
							</a>
							<div className="dropdown-divider"></div>
							<a className="dropdown-item" onClick={Logout}>
							LOG OUT
						</a>
						</div>
						<Logout />
					</div>
				</div>
			</nav>
		</>
	);
}
