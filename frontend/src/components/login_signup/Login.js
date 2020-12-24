import React, { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../../util/firebaseFunctions";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import phone from "../../images/phone.png";
import facebookBlueIcon from "../../images/facebookBlue.png";
import appleApp from "../../images/appleApp.png";
import googlePlayApp from "../../images/googlePlayApp.png";
import "../../CSS/Login.css";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(false);

	const handleSignIn = async (e) => {
		e.preventDefault();

		try {
			const res = await login(email, password);
		} catch (error) {
			setError(error.message);
		}
	};
	return (
		<div className="logInFormDiv">
			<div className="leftDiv">
				<img src={phone} alt="phone_picture" className="homePagePic" />
			</div>
			<div className="rightDiv">
				<Paper className="paper">
					<div className="loginTitle">
						<h1 className="instagram">Instagram</h1>
					</div>
					{error ? (
						<Typography className="errorText" component="h5" variant="h6">
							{error}
						</Typography>
					) : null}

					<form onSubmit={handleSignIn} className="signIn form">
						<TextField
							id="outlined-basic"
							label="	Enter Your Email"
							variant="outlined"
							value={email}
							onFocus={() => setError(false)}
							onChange={(e) => setEmail(e.currentTarget.value)}
							required
							className="emailInput"
						/>
						<br />
						<TextField
							id="outlined-basic"
							label="	Enter Your password"
							variant="outlined"
							type="password"
							value={password}
							onFocus={() => setError(false)}
							onChange={(e) => setPassword(e.currentTarget.value)}
							required
							className="passwordInput"
						/>
						<br />

						<button
							type="submit"
							variant="contained"
							color="skyblue"
							className="login submit"
							setError="false"
						>
							Log In
						</button>
					</form>
					<div className="orSignUpDiv">
						<h6 className="orSignUp orText"> OR </h6>
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
					<div />
				</Paper>

				<Paper className="redirectButton">
					<Link to="/accounts/emailsignup/" className="signUp">
						Don't have an account?
						<span className="spanLink"> Sign up </span>
					</Link>
				</Paper>

				<div className="getApp">
					<h4 className="getAppSignUp">Get the app.</h4>
					<div className="appDiv">
						<a
							className="link"
							href={"https://apps.apple.com/app/instagram/id389801252?vt=lo"}
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src={appleApp} alt="apple_app" className="logo apple" />
						</a>

						<a
							className="link"
							href={
								"https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3DC269AE6F-692C-4A6A-8705-616ACC7C83EA%26utm_content%3Dlo%26utm_medium%3Dbadge"
							}
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src={googlePlayApp}
								alt="googlePlayApp"
								className="logo google"
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
