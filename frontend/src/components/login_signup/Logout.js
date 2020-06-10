import React, { useContext } from "react";
// import { NavLink } from "react-router-dom";
import { logout } from "../../util/firebaseFunctions";
// import "../../CSS/NavBar.css";
import { AuthContext } from "../../providers/AuthContext";

export default function Logout() {
	const { currentUser } = useContext(AuthContext);

	const displayButton = () => {
		if (currentUser) {
			return <button onClick={logout}>Logout</button>;
		} else {
			return <></>;
		}
	};
	return <>{displayButton()}</>;
}
