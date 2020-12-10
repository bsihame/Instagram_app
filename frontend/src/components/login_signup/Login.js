import React, { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../../util/firebaseFunctions";
// import FormControl from "@material-ui/core/FormControl";
// import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
// import Input from "@material-ui/core/Input";
import Paper from "@material-ui/core/Paper";
// import withStyles from "@material-ui/core/styles/withStyles";
// import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
// import { useInputs } from "../../util/customHooks"
import phone from "../../images/phone.png";
import facebookBlueIcon from "../../images/facebookBlue.png";
import appleApp from "../../images/appleApp.png";
import googlePlayApp from "../../images/googlePlayApp.png";
// import { apiURL } from "../../util/apiURL";
import Footer from "../navbar_footer/Footer";
import "../../CSS/Login.css"

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(false);
	// const history = useHistory();

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
					<div className="title">
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
					<h4>get the app.</h4>
					<div className="appDiv">
						<img src={appleApp} alt="apple_app" className="logo apple"></img>
						<img src={googlePlayApp} alt="googlePlayApp" className="logo google"></img>
						</div>
				</div>
			</div>
		</div>
	);
}
