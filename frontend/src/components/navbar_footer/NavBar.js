import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { logout } from "../../util/firebaseFunctions";
import "../../CSS/NavBar.css";
import { AuthContext } from "../../providers/AuthContext";

export default function NavBar() {
	const { currentUser } = useContext(AuthContext);

	const displayButton = () => {
		if (currentUser) {
			return <button onClick={logout}>Logout</button>;
		} else {
			return (
				<>
				</>
			);
		}
	};
	return (
		<>
			<nav className="navbarContainer">
				<div className="title">
					<h2>Instagram</h2>
				</div>
				<div className="right">
					<div className="inputDiv">
						<input placeholder="Search" />
					</div>
					<div>
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
						<NavLink className="profile" to={"/userProfile"}>
							profilePic
						</NavLink>
					</div>
				</div>
			</nav>
			{displayButton()}
		</>
	);
}
