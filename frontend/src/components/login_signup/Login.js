import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// import { login } from "../../util/firebaseFunctions"
import phone from "../../images/phone.png";
import facebookBlueIcon from "../../images/facebookBlue.png";
import appleApp from "../../images/appleApp.png";
import googlePlayApp from "../../images/googlePlayApp.png";

import "../../CSS/login.css";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(false);
	const history = useHistory();

	const handleSignIn = async (e) => {
		e.preventDefault();
		try {
			// await login(email, password);
			history.push("/user");
		} catch (error) {
			debugger
			setError(error.message);
		}
	};
	return (
		<div className="logInFormDiv">
			<div className="leftDiv">
				<img src={phone} alt="phone_picture" className="homePagePic" />
			</div>
			<div className="rightDiv">
			<div className="title">
						<h1 className="instagram">Instagram</h1>
			</div>
				{error ? <p className="error">{error.message}</p> : null}
				<form onSubmit={handleSignIn} className="signIn">
					<input
						placeholder="Phone number, username, or email"
						value={email}
						onChange={(e) => setEmail(e.currentTarget.value)}
						required
						className="emailInput"
					/>
					<input
						placeholder="Password"
						type="password"
						value={password}
						onChange={(e) => setPassword(e.currentTarget.value)}
						autoComplete="on"
						required
					/>
					<button type="submit">Log in</button>
				</form>
				<div className="or">
					<h4>
						<span> OR </span>
					</h4>
				</div>
				<div className="facebookDiv">
					<img
						src={facebookBlueIcon}
						alt="facebookBlueIcon"
						className="facebookIcon"
					/>{" "}
					Log in with Facebook
				</div>
				<div>Forgot password?</div>
				<div>
					<button>
						Don't have an account?
						<span> Sign up </span>
					</button>
				</div>
				<div className="getApp">
					<h4>get the app.</h4>
					<div className="appDiv">
						<div className="appApple">
							<img src={appleApp} alt="apple_app"></img>
						</div>
						<div className="appGoogle">
							<img src={googlePlayApp} alt="googlePlayApp"></img>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}