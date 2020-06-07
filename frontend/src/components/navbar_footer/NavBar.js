// import React, { useContext } from "react";
// import { NavLink } from "react-router-dom";
// import { logout } from "../../util/firebaseFunctions";
// import Login from "../login_signup/Login";
// import Home from "../pages/Home";
// // import homeIcon  from "../../images/homeIcon.png"
// import "../../CSS/NavBar.css";
// import { AuthContext } from "../../providers/AuthContext";

// export default function NavBar() {
// 	const { currentUser } = useContext(AuthContext);

// 	const displayButton = () => {
// 		if (currentUser) {
// 			return <button onClick={logout}>Logout</button>;
// 		} else {
// 			return (
// 				<>
// 					{/* <Login /> */}
// 					<Home />
// 				</>
// 			);
// 		}
// 	};
// 	return (
// 		<>
// 			<nav className="navbarContainer">
// 				<div className="title">
// 					<h2>Instagram</h2>
// 				</div>
// 				<div className="right">
// 					<div className="inputDiv">
// 						<input placeholder="Search" />
// 					</div>
// 					<div>
// 						<NavLink className="home" to={"/users"}>
// 							homeIcon
// 						</NavLink>
// 						<NavLink className="directMessage" to={"/direct/inbox/"}>
// 							arowIconw
// 						</NavLink>
// 						<NavLink className="explore" to={"/explore"}>
// 							BoussoleIcone
// 						</NavLink>
// 						<NavLink className="heart" to={"/activity"}>
// 							heartIcone
// 						</NavLink>
// 						<NavLink className="profile" to={"/user"}>
// 							profilePic
// 						</NavLink>
// 					</div>
// 				</div>
// 			</nav>
// 			{/* <div>
// 				<button onClick={logout}>logout</button>
// 			</div> */}
// 			{displayButton()}
// 		</>
// 	);
// }


import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { logout } from "../../util/firebaseFunctions";
import Login from "../login_signup/Login";
import Home from "../pages/Home";
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
					{/* <Login />
					<Home /> */}
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
						<NavLink className="home" to={"/users"}>
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
						<NavLink className="profile" to={"/user"}>
							profilePic
						</NavLink>
					</div>
				</div>
			</nav>
			{displayButton()}
		</>
	);
}
