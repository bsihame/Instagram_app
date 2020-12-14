import React from "react";
import Login from "../login_signup/Login";
import Footer from "../navbar_footer/Footer";
export default function Home() {
	return (
		<>
			<div className="homeDiv">
				<Login />
			</div>
			<div>
				<Footer className="homeFooter"/>
			</div>
		</>
	);
}
