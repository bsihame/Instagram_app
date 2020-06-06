// import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
// import { apiURL } from "../../util/apiURL";
// import { signUp } from "../../util/firebaseFunctions";
// import axios from "axios";
// import appleApp from "../../images/appleApp.png";
// import googlePlayApp from "../../images/googlePlayApp.png";
// import facebookIcon from "../../images/white-facebook-icon-transparent-background-72.png";
// import Footer from "../navbar_footer/Footer";
// // import "../../css/signUp.css";

// export default function SignUpForm() {
// 	const [email, setEmail] = useState("");
// 	const [password, setPassword] = useState("");
// 	const [full_name, setFullName] = useState("");
// 	const [username, setUserName] = useState("");
// 	const [error, setError] = useState(null);
// 	const history = useHistory();
// 	const API = apiURL();

// 	const handleSubmit = async (e) => {
// 		e.preventDefault();
// 		try {
// 			let res = await signUp(email, password);
// 			debugger
// 			await axios.post(`${API}/api/users`, { id: res.user.uid, email, full_name, username })

// 			history.push("/user");
// 		} catch (error) {
// 			setError(error.message);
// 		}
// 	};
// 	return (
// 		<>
// 			<h1>Sign Up Page</h1>
// 			<div className="signup">
// 				<div className="signUpContainer">
// 					<div className="title">
// 						<h1 className="instagram">Instagram</h1>
// 						<br />
// 						<p>Sign up to see photos and videos from your friends</p>
// 					</div>
// 					<div className="facebookDiv">
// 						<button className="facebookButton">
// 							<img
// 								src={facebookIcon}
// 								alt="facebookIcon"
// 								className="facebookIcon"
// 							/>
// 							Log in with Facebook
// 						</button>
// 					</div>
// 					<div className="or">
// 						<h4>
// 							<span> OR </span>
// 						</h4>
// 					</div>
// 					{error ? <div>{error}</div> : null}

// 					<form onSubmit={handleSubmit}>
// 						<input
// 							placeholder="Mobile Number or Email"
// 							value={email}
// 							onChange={(e) => setEmail(e.currentTarget.value)}
// 						/>
// 						<br />
// 						<input
// 							placeholder="Full Name"
// 							value={full_name}
// 							onChange={(e) => setFullName(e.currentTarget.value)}
// 						/>
// 						<br />

// 						<input
// 							placeholder="Username"
// 							value={username}
// 							onChange={(e) => setUserName(e.currentTarget.value)}
// 						/>
// 						<br />

// 						<input
// 							placeholder="Password"
// 							type="password"
// 							value={password}
// 							onChange={(e) => setPassword(e.currentTarget.value)}
// 							autoComplete="on"
// 							required
// 						/>
// 						<br />

// 						<button type="submit" className="signUpButton">
// 							Sign up
// 						</button>
// 					</form>
// 					<div className="agreementDiv">
// 						<p>
// 							By signing up, you agree to our Terms, Data Policy and Cookies
// 							Policy .
// 						</p>
// 					</div>
// 				</div>

// 				<div className="logInButton">
// 					<button>
// 						Have an account?<span>Log in</span>
// 					</button>

// 					<br />
// 					<div>
// 						<h4>get the app.</h4>
// 						<div>
// 							<img src={appleApp} alt="apple_app"></img>
// 						</div>
// 						<div>
// 							<img src={googlePlayApp} alt="googlePlayApp"></img>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 			<Footer />
// 		</>
// 	);
// }
