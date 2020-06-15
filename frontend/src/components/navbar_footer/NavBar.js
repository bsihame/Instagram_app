import React from "react";
import { NavLink } from "react-router-dom";
import "../../CSS/NavBar.css";
import Logout from "../login_signup/Logout";

export default function NavBar() {
	const handleClick=()=>{
		return (
			<div>
				i have being clicked
			</div>
		)
	}
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
						<NavLink className="home" to={"/user"}>
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
						<NavLink className="profile" exact to={"/user/userProfile"}>
							profilePic
						</NavLink>
						<Logout />
					</div>
				</div>
			</nav>
		</>
	);
}

