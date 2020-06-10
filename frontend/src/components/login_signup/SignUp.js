import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
// import { useInputs } from "../../util/customHooks"
import { apiURL } from "../../util/apiURL";
import { signUp } from "../../util/firebaseFunctions";
import axios from "axios";
import appleApp from "../../images/appleApp.png";
import googlePlayApp from "../../images/googlePlayApp.png";
import facebookIcon from "../../images/white-facebook-icon-transparent-background-72.png";
import Footer from "../navbar_footer/Footer";
import "../../CSS/signUp.css";

export default function SignUpForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [full_name, setFullName] = useState("");
	const [username, setUserName] = useState("");
	// const [loading, setLoading] = useState("")
	const [error, setError] = useState(null);
	const history = useHistory();
	const API = apiURL();
	//console.log(email,username, password);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			let res = await signUp(email, password);
			await axios.post(`${API}/api/user`, {
				id: res.user.uid,
				email: email,
				full_name: full_name,
				userName: username,
			});
			history.push("/user");
		} catch (error) {
			setError(error.message);
		}
	};
	return (
		<>
			<div className="signup">
				<div className="signUpContainer">
					<div className="title">
						<h1 className="instagramSignUp">Instagram</h1>
						<p>Sign up to see photos and videos from your friends</p>
					</div>
					<div className="facebookDivSignUp">
						<button className="facebookButton">
							<img
								src={facebookIcon}
								alt="facebookIcon"
								className="facebookIcon"
							/>
							Log in with Facebook
						</button>
					</div>
					<div className="or">
						<h4>
							<span> OR </span>
						</h4>
					</div>
					{error ? <div>{error}</div> : null}

					<form className="form" onSubmit={handleSubmit}>
						<input
							placeholder="Email"
							value={email}
							type="email"
							onChange={(e) => setEmail(e.currentTarget.value)}
						/>
						<input
							placeholder="Full Name"
							value={full_name}
							onChange={(e) => setFullName(e.currentTarget.value)}
						/>
						<input
							placeholder="Username"
							value={username}
							onChange={(e) => setUserName(e.currentTarget.value)}
						/>
						<input
							placeholder="Password"
							type="password"
							value={password}
							onChange={(e) => setPassword(e.currentTarget.value)}
							autoComplete="on"
							required
						/>
						<button type="submit" className="signUpButton">
							Sign up
						</button>
					</form>
					<div className="agreementDiv">
						<p>
							By signing up, you agree to our Terms, Data Policy and Cookies
							Policy .
						</p>
					</div>
				</div>

				<div className="logInButtonSignUp">
					<Link to="/">
						Have an account?<span>Log in</span>
					</Link>
					<div>
						<h4>get the app.</h4>
						<div className="appDiv">
							<img
								className="appAppleSignUp"
								src={appleApp}
								alt="apple_app"
							></img>
						</div>
						<div>
							<img
								className="appGoogleSignUp"
								src={googlePlayApp}
								alt="googlePlayApp"
							></img>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
