import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { login } from "../../util/firebaseFunctions";
import { useInputs } from "../../util/customHooks"
import phone from "../../images/phone.png";
import facebookBlueIcon from "../../images/facebookBlue.png";
import appleApp from "../../images/appleApp.png";
import googlePlayApp from "../../images/googlePlayApp.png";
import { apiURL } from "../../util/apiURL";

import "../../CSS/Login.css";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(false);
	const history = useHistory();
	const API = apiURL();

	const handleSignIn = async (e) => {
		e.preventDefault();
		try {
			await login(email, password);
			history.push("/user");
		} catch (error) {
			debugger;
			setError(error.message);
		}
	};
	return (
		<div className="logInFormDiv">
			<div className="leftDiv">
				<img src={phone} alt="phone_picture" className="homePagePic" />
			</div>
			<div className="rightDiv">
				<div className="logdiv">
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
							className="password"
						/>
						<button type="submit" className="login">
							Log in
						</button>
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
							/>
							<h4>Log in with Facebook</h4>
						</div>

						<button className="forgotPassword">Forgot password?</button>
					</form>
				</div>
				<div />

				<Link to="/accounts/emailsignup/" className="signUp">
					Don't have an account?
					<span className="span"> Sign up </span>
				</Link>

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

			<div />
		</div>
	);
}
