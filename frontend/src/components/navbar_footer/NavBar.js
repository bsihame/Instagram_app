import React,{useContext} from "react";
import { NavLink } from "react-router-dom";
import { logout } from "../../util/firebaseFunctions";
import Login from "../login_signup/Login";
import Home from "../pages/Home"
// import homeIcon  from "../../images/homeIcon.png"
// import "../css/NavBar.css";
import { AuthContext } from "../../providers/AuthContext"


export default function NavBar() {
	const { currentUser } = useContext(AuthContext);

	const displayButton = () => {
		if (currentUser) {
			return <button onClick={logout}>Logout</button>;
		} else {
			return (
				<>
          {/* <Login /> */}
          <Home/>
				</>
			);
		}
	};
	return (
		<>
			<nav>
				<h2>Instagram</h2>
				<input placeholder="Search" />
				<NavLink to={"/users"}>homeIcon</NavLink>
				<NavLink to={"/direct/inbox/"}>arowIconw</NavLink>
				<NavLink to={"/explore"}>BoussoleIcone</NavLink>
				<NavLink to={"/activity"}>heartIcone</NavLink>
				<NavLink to={"/user"}>profilePic</NavLink>
			</nav>
			{/* <div>
				<button onClick={logout}>logout</button>
			</div> */}
			{displayButton()}
		</>
	);
}
