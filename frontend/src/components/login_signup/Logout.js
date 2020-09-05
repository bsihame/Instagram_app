import React, { useContext } from "react";
// import { NavLink } from "react-router-dom";
import { logout } from "../../util/firebaseFunctions";
import "../../CSS/Logout.css";
import { AuthContext } from "../../providers/AuthContext";

export default function Logout() {
	const { currentUser } = useContext(AuthContext);

	const displayButton = () => {
		if (currentUser) {
			return (
				<button onClick={logout} className="buttonLogout2">
					Logout
				</button>
			);
		} else {
			return <></>;
		}
	};
	return <div className="logoutBtn">{displayButton()}</div>;
}
