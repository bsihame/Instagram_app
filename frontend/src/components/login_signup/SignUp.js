import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { apiURL } from "../../util/apiURL";
import { signUp } from "../../util/firebaseFunctions";
import axios from "axios";
import appleApp from "../../images/appleApp.png";
import googlePlayApp from "../../images/googlePlayApp.png";
import facebookIcon from "../../images/white-facebook-icon-transparent-background-72.png";
import Footer from "../navbar_footer/Footer";
import Paper from "@material-ui/core/Paper";
import "../../CSS/signUp.css";
import { storage } from "../../firebase";

export default function SignUpForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [full_name, setFullName] = useState("");
	const [username, setUserName] = useState("");
	const [bio, setBio] = useState("");
	const [url, setUrl] = useState("");
	const [image, setImage] = useState(null);

	// const [loading, setLoading] = useState("")
	const [error, setError] = useState(null);
	const history = useHistory();
	const API = apiURL();
	//console.log(email,username, password);

	const handleChange = (e) => {
		if (e.target.files[0]) {
			setImage(e.target.files[0]);
		}
	};
	const handleUpload = () => {
		const uploadTask = storage.ref(`images/${image.name}`).put(image);
		uploadTask.on("state_changed", () => {
			storage
				.ref("images")
				.child(image.name)
				.getDownloadURL()
				.then((url) => {
					setUrl(url);
				});
		});
	};

	

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			let res = await signUp(email, password);
			//  await signUp(email, password);

			await axios.post(`${API}/api/users`, {
				id: res.user.uid,
				full_name: full_name,
				email: email,
				username: username,
				bio: bio,
				profile_pic: url,
			});
		} catch (error) {
			setError(error.message);
		}
	};

	return (
		<>
			<div className="signup">
				<Paper className="paper">
					<div className="signUpContainer">
						<div className="title">
							<h1 className="instagram">Instagram</h1>
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

						<form className="formSignUp" onSubmit={handleSubmit}>
							<input
								placeholder="Email"
								value={email}
								type="email"
								onChange={(e) => setEmail(e.currentTarget.value)}
							/>
							<input
								className="signUpInput"
								placeholder="Full Name"
								value={full_name}
								onChange={(e) => setFullName(e.currentTarget.value)}
							/>
							<input
								className="signUpInput"
								placeholder="Username"
								value={username}
								onChange={(e) => setUserName(e.currentTarget.value)}
							/>
							<input
								className="signUpInput"
								placeholder="Bio: "
								value={bio}
								onChange={(e) => setBio(e.currentTarget.value)}
							/>

							<input
								className="signUpInput"
								type="file"
								onChange={handleChange}
							/>
							<button className="signUpInput" onClick={handleUpload}>
								Upload Image
							</button>
							<br />

							<input
								className="signUpInput"
								placeholder="Password"
								type="password"
								value={password}
								onChange={(e) => setPassword(e.currentTarget.value)}
								autoComplete="on"
								required
							/>
							{/* <div><ProfilePic/></div> */}

							<button
								className="signUpInput"
								type="submit"
								className="signUpButton"
							>
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
				</Paper>

				{/* <div className="logInButtonSignUp"> */}
				<div className="linkToLogIN">
					<Paper className="paper">
						Have an account?
						<Link to="/">
							<span> Log in</span>
						</Link>
					</Paper>
				</div>
				<div>
					<div className="getApp">
						<h4 className="getAppSignUp">Get the app.</h4>
						<div className="appDiv">
							<a
								className="link"
								href={"https://apps.apple.com/app/instagram/id389801252?vt=lo"}
								target="_blank"
								rel="noopener noreferrer"
							>
								<img src={appleApp} alt="apple_app" className="appApple" />
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
									className="appGoogle"
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
