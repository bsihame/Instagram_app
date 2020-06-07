import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Login from "./components/login_signup/Login";
import Home from "./components/pages/Home"
import SignUpForm from "./components/login_signup/SignUp";
import Post from "./components/posts/Post";
import UsersProfile from "./components/users/UsersProfile";
import UserPage from "./components/pages/UserPage"
import User from "./components/users/User";
import AuthProvider from "./providers/AuthContext";
import { AuthRoute, ProtectedRoute } from "./util/routesUtil"

function App() {
	return (
		<div className="App">
			<AuthProvider>
				
			{/* <AuthRoute exact path="/">
				<UserPage />
			</AuthRoute>  */}
				
				<AuthRoute exact path="/">
				<Home />
			</AuthRoute>

			<AuthRoute exact path="/accounts/emailsignup/">
				<SignUpForm />
			</AuthRoute>

			<ProtectedRoute path="/users">
				<UsersProfile />
				</ProtectedRoute>
				
			<Route path="/user">
				<User />
				</Route>
				
				{/* <Route path="/user">
				<Upload />
				</Route> */}
				
				<Route path="/user">
				<Post/>
			</Route>
				
			</AuthProvider>
		</div>
	);
}

export default App;
